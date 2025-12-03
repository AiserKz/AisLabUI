import TitlePage from "@/components/TitlePage";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check, Palette } from "lucide-react";
import { BorderBeam } from "@/components/ui";

const themes = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
  "dim",
  "nord",
  "sunset",
];

export default function Themes() {
  const [currentTheme, setCurrentTheme] = useState<string>(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
    localStorage.setItem("theme", currentTheme);
  }, [currentTheme]);

  return (
    <div className="w-full justify-center flex pb-20">
      <div className="max-w-7xl w-full px-4">
        <TitlePage
          title="Темы оформления"
          description="Выберите тему, которая подходит именно вам. Все компоненты автоматически адаптируются под выбранный стиль."
        />

        <div className="flex items-center gap-2 mb-8 text-base-content/70">
          <Palette size={20} />
          <span>
            Текущая тема:{" "}
            <span className="font-bold capitalize text-primary">
              {currentTheme}
            </span>
          </span>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {themes.map((theme, index) => (
            <ThemeCard
              key={theme}
              theme={theme}
              isActive={currentTheme === theme}
              onClick={() => setCurrentTheme(theme)}
              index={index}
            />
          ))}
        </motion.div>

        {/* Theme Generator CTA */}
        <BorderBeam className="mt-20 rounded-box" blur size={50}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-box bg-linear-90 from-base-200 to-base-300 text-center relative overflow-hidden group"
          >
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h3 className="text-3xl font-bold">Не нашли идеальную тему?</h3>
              <p className="text-base-content/70 text-lg">
                Создайте свой уникальный стиль с помощью официального
                конструктора тем DaisyUI. Настройте каждый цвет и параметр под
                свой бренд.
              </p>
              <a
                href="https://daisyui.com/theme-generator/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-outline btn-lg gap-2 shadow hover:shadow-[0_0_15px_5px] hover:shadow-primary/50 transition-all duration-500"
              >
                <Palette size={20} />
                Открыть конструктор тем
              </a>
            </div>
          </motion.div>
        </BorderBeam>
      </div>
    </div>
  );
}

function ThemeCard({
  theme,
  isActive,
  onClick,
  index,
}: {
  theme: string;
  isActive: boolean;
  onClick: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      className={`
        border-2 rounded-box overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl group
        ${
          isActive
            ? "border-primary ring-2 ring-primary ring-offset-2 ring-offset-base-100 scale-[1.02]"
            : "border-base-content/10 hover:border-base-content/30"
        }
      `}
      onClick={onClick}
    >
      {/* Theme container */}
      <div
        data-theme={theme}
        className="bg-base-100 text-base-content w-full h-full flex flex-col"
      >
        {/* Header*/}
        <div className="p-4 grid gap-3">
          <div className="flex items-center justify-between">
            <span className="font-bold capitalize text-lg">{theme}</span>
            {isActive && (
              <div className="badge badge-primary gap-1">
                <Check size={12} /> Active
              </div>
            )}
          </div>

          {/* Main Colors */}
          <div className="flex gap-2">
            <div className="flex flex-col gap-1 w-full">
              <div className="flex gap-1 h-3 w-full">
                <div className="bg-primary flex-1 rounded-l-full"></div>
                <div className="bg-secondary flex-1"></div>
                <div className="bg-accent flex-1"></div>
                <div className="bg-neutral flex-1 rounded-r-full"></div>
              </div>
            </div>
          </div>

          {/* Semantic Colors */}
          <div className="flex gap-1 justify-between text-[10px] font-mono opacity-80">
            <div className="flex flex-col items-center gap-1">
              <div className="w-6 h-6 rounded-full bg-primary"></div>
              <span>primary</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-6 h-6 rounded-full bg-info"></div>
              <span>info</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-6 h-6 rounded-full bg-success"></div>
              <span>success</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-6 h-6 rounded-full bg-warning"></div>
              <span>warn</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-6 h-6 rounded-full bg-error"></div>
              <span>error</span>
            </div>
          </div>

          <div className="flex gap-2 mt-1">
            <button className="btn btn-primary btn-xs flex-1">Button</button>
            <button className="btn btn-outline btn-secondary btn-xs flex-1">
              Outline
            </button>
          </div>

          <div className="flex items-center justify-between gap-2 mt-1 px-1">
            <input
              type="checkbox"
              className="toggle toggle-primary toggle-xs"
              defaultChecked
            />
            <input
              type="radio"
              className="radio radio-secondary radio-xs"
              defaultChecked
            />
            <input
              type="checkbox"
              className="checkbox checkbox-accent checkbox-xs"
              defaultChecked
            />
          </div>
        </div>

        {/* Background */}
        <div className="bg-base-200 p-3 mt-auto flex justify-between items-center text-[10px] font-mono opacity-70">
          <div className="flex gap-2">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded bg-base-100 border border-base-content/20"></div>
              <span>b1</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded bg-base-200 border border-base-content/20"></div>
              <span>b2</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded bg-base-300 border border-base-content/20"></div>
              <span>b3</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
