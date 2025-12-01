import { motion } from "framer-motion";

interface AsideProps {
  sections: { id: string; title: string; length: number }[];
  helpMap: Record<string, string>;
  activeContainer: string;
  scrollToSection: (id: string) => void;
}

export default function Aside({
  sections,
  helpMap,
  activeContainer,
  scrollToSection,
}: AsideProps) {
  const allCount = sections.reduce((acc, s) => acc + s.length, 0);
  return (
    <>
      {/* Mobile Navigation */}
      <div className="lg:hidden sticky top-20 z-20 bg-base-100/80 backdrop-blur-md py-2 -mx-4 px-4 overflow-x-auto flex gap-2 no-scrollbar border-b border-white/5">
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => scrollToSection(s.id)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeContainer === s.id
                ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20"
                : "bg-base-200 text-base-content/70 hover:bg-base-300"
            }`}
          >
            {s.title}
          </button>
        ))}
      </div>
      <aside className="hidden lg:block w-72 shrink-0 relative mt-10  ">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="sticky top-24"
        >
          <div className="bg-base-200/60 backdrop-blur-sm p-4 rounded-box border border-white/10">
            <div className="flex items-center justify-between mb-4 px-1">
              <h4 className="font-semibold px-2 text-lg">Навигация </h4>
              <span>{allCount}</span>
            </div>
            <ul className="space-y-1">
              {sections.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => scrollToSection(s.id)}
                    className={`w-full text-left px-3 py-2.5 rounded-field transition-all duration-400 flex items-center justify-between group ${
                      activeContainer === s.id
                        ? "bg-blue-500/10 text-blue-400 font-medium translate-x-1"
                        : "hover:bg-white/5 text-base-content/60 hover:text-base-content"
                    }`}
                  >
                    <div className="flex justify-between w-full transition-all duration-300 mx-2">
                      <span>{s.title}</span>
                      <span>{s.length}</span>
                    </div>
                    {activeContainer === s.id && (
                      <motion.div
                        layoutId="active-dot"
                        className="w-1.5 h-1.5 rounded-full bg-blue-400"
                      />
                    )}
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-6 border-t border-white/5 px-2">
              <p className="text-xs font-medium text-base-content/40 uppercase tracking-wider mb-2">
                Подсказка
              </p>
              <p className="text-sm text-base-content/70 leading-relaxed">
                {helpMap[activeContainer]}
              </p>
            </div>
          </div>
        </motion.div>
      </aside>
    </>
  );
}
