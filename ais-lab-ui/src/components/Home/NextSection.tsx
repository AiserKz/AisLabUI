import { motion, MotionValue, useTransform } from "framer-motion";
import {
  Code,
  Layers,
  Terminal,
  Zap,
  Palette,
  Sparkles,
  Box,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { FloatingDecoration } from "../FloatingDecoration";

// Данные для карточек модулей
const modules = [
  {
    id: "native",
    title: "NativeUi",
    description: "Базовые компоненты",
    icon: Box,
    color: "primary",
    bgGradient: "from-primary/20 via-primary/10 to-transparent",
    borderColor: "border-primary/20 hover:border-primary/60",
    particleColor: "bg-primary/30",
    textColor: "text-primary",
    shadowColor: "hover:shadow-primary/20",
    link: "/native",
  },
  {
    id: "motion",
    title: "MotionUi",
    description: "Анимации и эффекты",
    icon: Sparkles,
    color: "info",
    bgGradient: "from-info/20 via-info/10 to-transparent",
    borderColor: "border-info/20 hover:border-info/60",
    particleColor: "bg-info/30",
    textColor: "text-info",
    shadowColor: "hover:shadow-info/20",
    link: "/motion",
  },
  {
    id: "theme",
    title: "Theme",
    description: "Темы и стили",
    icon: Palette,
    color: "warning",
    bgGradient: "from-warning/20 via-warning/10 to-transparent",
    borderColor: "border-warning/20 hover:border-warning/60",
    particleColor: "bg-warning/30",
    textColor: "text-warning",
    shadowColor: "hover:shadow-warning/20",
    link: "/theme",
  },
];

export default function NextSection({
  scrollProgress,
  isMobile = false,
}: {
  scrollProgress: MotionValue;
  isMobile?: boolean;
}) {
  const overlayY = useTransform(scrollProgress, [-0.1, 0.2], ["100%", "0%"]);
  return (
    <motion.section
      style={{ y: overlayY, willChange: "transform" }}
      className="absolute bottom-0 left-0 w-full bg-base-200 border-t-2 border-base-content/10 z-20 h-[500vh] soft-edge 
      flex items-center justify-start text-6xl font-black flex-col space-y-40"
    >
      {/* Декоративные фоновые элементы */}
      <div className="absolute top-[40%] left-[5%] w-80 h-80 bg-info/10 rounded-full blur-lg pointer-events-none" />

      <div className="relative h-[150dvh] mt-200 ">
        {/* Плавающая иконка Code слева */}
        <div className="absolute -left-100">
          <FloatingDecoration
            className="bg-purple-400 w-40 h-40 rounded-box flex items-center justify-center shadow-lg shadow-purple-400/40"
            duration={5}
            loop
            variants={{
              visible: { y: [0, 20, 0], rotate: [0, 10, 0, -10, 0] },
            }}
          >
            <Code className="w-20 h-20" />
          </FloatingDecoration>
        </div>

        {/* Плавающая иконка Zap справа */}
        <div className="absolute -right-80 top-20">
          <FloatingDecoration
            className="bg-yellow-400 w-32 h-32 rounded-box flex items-center justify-center shadow-lg shadow-yellow-400/40"
            duration={4}
            delay={0.5}
            loop
            variants={{
              visible: { y: [0, -15, 0], rotate: [0, -8, 0, 8, 0] },
            }}
          >
            <Zap className="w-16 h-16" />
          </FloatingDecoration>
        </div>

        {/* Плавающая иконка Layers */}
        <div className="absolute -left-60 top-80">
          <FloatingDecoration
            className="bg-blue-400 w-24 h-24 rounded-box flex items-center justify-center shadow-lg shadow-blue-400/40"
            duration={6}
            delay={1}
            loop
            variants={{
              visible: {
                y: [0, 12, 0],
                x: [0, 8, 0],
                rotate: [0, 5, 0, -5, 0],
              },
            }}
          >
            <Layers className="w-12 h-12" />
          </FloatingDecoration>
        </div>

        {/* Плавающая иконка Terminal справа снизу */}
        <div className="absolute -right-50 top-100">
          <FloatingDecoration
            className="bg-green-400 w-28 h-28 rounded-box flex items-center justify-center shadow-lg shadow-green-400/40"
            duration={3}
            delay={0.8}
            loop
            variants={{
              visible: { y: [0, -10, 0], scale: [1, 1.05, 1] },
            }}
          >
            <Terminal className="w-14 h-14" />
          </FloatingDecoration>
        </div>

        <div className="containe mx-auto px-4 max-w-4xl sticky top-40">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-8">
            О проекте
          </h2>
          <p className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="scroll-text-highlight">
              AisLabUi создан, чтобы стать мостом между "сырыми" утилитами и
              готовыми функциональными компонентами.
            </span>
          </p>

          {/* Дополнительное описание */}
          <motion.p
            className="text-lg md:text-xl text-base-content/60 mt-8 max-w-2xl font-normal leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Мы объединили лучшие практики UI-разработки в единую, согласованную
            систему компонентов
          </motion.p>
        </div>
      </div>

      <div className="h-[150vh] w-full relative ">
        {/* Заголовок для карусели */}
        <div className="sticky top-20 text-center mb-8 z-10">
          <motion.h3
            className="text-sm font-bold tracking-widest text-primary uppercase mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Наши модули
          </motion.h3>
          <motion.p
            className="text-2xl md:text-3xl font-bold text-base-content/80"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Выберите свой путь
          </motion.p>
        </div>

        {/* карточки модулей */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 sticky top-50 px-4 pb-10 w-full">
          {modules.map((module, index) => {
            const IconComponent = module.icon;
            return (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  to={module.link}
                  className={`group relative block w-92 md:w-72 h-96 rounded-3xl overflow-hidden 
                    border-2 ${module.borderColor} bg-base-100/80 backdrop-blur-sm
                    hover:scale-105 hover:shadow-2xl ${module.shadowColor}
                    transition-all duration-500 cursor-pointer`}
                >
                  {/* Градиентный фон */}
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${module.bgGradient} 
                    opacity-50 group-hover:opacity-80 transition-opacity duration-500`}
                  />

                  {/* Анимированные частицы на фоне */}
                  <div className="absolute inset-0 overflow-hidden">
                    {!isMobile &&
                      [...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`absolute w-2 h-2 ${module.particleColor} rounded-full`}
                          style={{
                            left: `${15 + i * Math.random() * 40}%`,
                            top: `${20 + (i % 3) * Math.random() * 40}%`,
                          }}
                          animate={{
                            y: [0, -20, 0],
                            opacity: [0.3, 0.7, 0.3],
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 3 + i * 0.5,
                            repeat: Infinity,
                            delay: i * 0.3,
                          }}
                        />
                      ))}
                  </div>

                  {/* Иконка */}
                  <div className="absolute top-12 left-1/2 -translate-x-1/2">
                    <motion.div
                      className={`w-24 h-24 rounded-2xl ${module.borderColor} border 
                        flex items-center justify-center group-hover:scale-130 
                        transition-all duration-500`}
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <IconComponent
                        className={`w-12 h-12 ${module.textColor}`}
                      />
                    </motion.div>
                  </div>

                  {/* Контент */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                    <h4 className="text-3xl font-bold mb-2 group-hover:scale-105 transition-transform">
                      {module.title}
                    </h4>
                    <p className="text-base font-normal text-base-content/60 mb-4">
                      {module.description}
                    </p>

                    {/* Кнопка */}
                    <div
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full 
                      bg-${module.color}/10 border ${module.borderColor} text-sm font-medium
                      group-hover:bg-${module.color}/20 transition-colors`}
                    >
                      <span className="text-base-content/80">Перейти</span>
                      <ArrowRight
                        className={`w-4 h-4 ${module.textColor} group-hover:translate-x-1 transition-transform`}
                      />
                    </div>
                  </div>

                  {/* Декоративные углы */}
                  <div
                    className={`absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 ${module.borderColor} rounded-tl-lg 
                    opacity-0 group-hover:opacity-100 transition-opacity`}
                  />
                  <div
                    className={`absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 ${module.borderColor} rounded-tr-lg 
                    opacity-0 group-hover:opacity-100 transition-opacity`}
                  />
                  <div
                    className={`absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 ${module.borderColor} rounded-bl-lg 
                    opacity-0 group-hover:opacity-100 transition-opacity`}
                  />
                  <div
                    className={`absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 ${module.borderColor} rounded-br-lg 
                    opacity-0 group-hover:opacity-100 transition-opacity`}
                  />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Подсказка под карточками */}
        <motion.div
          className="sticky top-160 text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-base text-base-content/40 font-normal flex items-center justify-center gap-2">
            <span className="inline-block w-1 h-1 bg-base-content/40 rounded-full animate-pulse" />
            Выберите модуль для начала работы
            <span className="inline-block w-1 h-1 bg-base-content/40 rounded-full animate-pulse" />
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
