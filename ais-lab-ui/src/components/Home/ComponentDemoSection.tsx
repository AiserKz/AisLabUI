import { motion, MotionValue } from "framer-motion";
import SpiralCard from "../SpiralCard";

export default function ComponentDemoSection({
  scrollY,
  ref,
}: {
  scrollY: MotionValue;
  ref: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <section className="py-32 overflow-clip relative" ref={ref}>
      <div className="absolute inset-0 bg-base-200" />
      {/* Декоративные фоновые круги - упрощены для производительности */}
      <div className="absolute top-[20%] left-[5%] w-96 h-96 bg-primary/5 rounded-full blur-xl pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-80 h-80 bg-accent/5 rounded-full blur-xl pointer-events-none" />

      <div className="container mx-auto px-4 h-[500dvh] relative z-10">
        <motion.div
          className="text-center mb-16 bg-base-200/40 p-6 rounded-box backdrop-blur-xs"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">
            Компоненты
          </h2>
          <p className="text-4xl font-bold mb-4">Готовые компоненты</p>
          <p className="text-base-content/60 max-w-lg mx-auto">
            Все, что нужно для вашего следующего приложения — прямо из коробки
          </p>

          {/* Декоративные элементы под заголовком */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <span className="w-12 h-1 bg-primary/40 rounded-full" />
            <motion.span
              className="w-3 h-3 bg-primary rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            />
            <span className="w-12 h-1 bg-primary/40 rounded-full" />
          </div>
        </motion.div>
        <div className="sticky top-50 ">
          <div
            className="relative h-screen flex items-start justify-center "
            style={{ perspective: "1600px" }}
          >
            {Array.from({ length: 10 }).map((_, i) => (
              <SpiralCard
                radius={300}
                key={i}
                index={i + 1}
                progress={scrollY}
                speed={5}
              >
                Test {1 + i}
              </SpiralCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
