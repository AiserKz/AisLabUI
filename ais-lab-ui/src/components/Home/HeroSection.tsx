import { motion, MotionValue, useTransform } from "framer-motion";
import { ArrowRight, Github, Zap, Box, Palette, Code } from "lucide-react";
import { Link } from "react-router-dom";
import TextLabelSvg from "../TextLabelSvg";
import { BorderBeam } from "../ui";

export default function HeroSection({
  scrollProgress,
}: {
  scrollProgress: MotionValue;
}) {
  const heroScale = useTransform(scrollProgress, [0, 0.7], [1, 0.92]);
  const heroOpacity = useTransform(scrollProgress, [0.2, 0.7], [1, 0.6]);
  const heroRotate = useTransform(scrollProgress, [0.1, 0.5], [0, -12]);

  return (
    <section className="relative min-h-screen flex items-start justify-center scroll-zoom-animation perspective-distant">
      {/* Background Shapes */}
      <div className="parallax-bg-shape bg-primary/20 w-96 h-96 top-20 left-20" />

      {/* Фоновые градиенты - симметрично */}
      <div className="absolute bottom-[25%] right-[15%] w-56 h-56 bg-primary/8 rounded-full blur-2xl pointer-events-none" />

      {/* Геометрические фигуры - организованы симметрично */}
      <motion.div
        className="absolute top-32 left-[8%] w-14 h-14 border-2 border-primary/15 rounded-2xl"
        animate={{ rotate: [0, 180, 360], y: [0, -8, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-32 right-[8%] w-14 h-14 border-2 border-info/15 rounded-2xl"
        animate={{ rotate: [360, 180, 0], y: [0, -8, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-[30%] left-[6%] w-10 h-10 border border-secondary/20 rounded-full"
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-[30%] right-[6%] w-10 h-10 border border-accent/20 rounded-full"
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, delay: 2 }}
      />

      {/* Плавающие точки - симметрично */}
      <motion.div
        className="absolute top-48 left-[18%] w-2 h-2 bg-primary/50 rounded-full"
        animate={{ y: [0, -15, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-48 right-[18%] w-2 h-2 bg-info/50 rounded-full"
        animate={{ y: [0, -15, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
      />
      <motion.div
        className="absolute top-72 left-[12%] w-3 h-3 bg-secondary/40 rounded-full"
        animate={{ y: [0, 12, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
      />
      <motion.div
        className="absolute top-72 right-[12%] w-3 h-3 bg-accent/40 rounded-full"
        animate={{ y: [0, 12, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, delay: 2 }}
      />

      <motion.div
        style={{
          scale: heroScale,
          opacity: heroOpacity,
          rotateX: heroRotate,
          transformOrigin: "center top",
        }}
        className="container mx-auto px-4 z-10 text-center hero-3d-container sticky top-40"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-2"
        >
          {/* Бейдж версии */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-box bg-base-200/60 animate-border-pulse">
            <Code className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">v1.0.0 - Новый релиз</span>
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
          </div>

          {/* Заголовок*/}
          <div className="w-full flex items-start justify-center py-5">
            <div className="w-1/2 hero-title-animate">
              <TextLabelSvg />
            </div>
          </div>

          {/* Структурированное описание */}
          <div className="max-w-2xl mx-auto space-y-4 hero-description ">
            <p className="text-xl md:text-2xl leading-relaxed text-base-content/80">
              Премиальная библиотека компонентов
            </p>
            <p className="text-base md:text-lg text-base-content/60 leading-relaxed">
              Расширяем возможности{" "}
              <span className="text-primary font-semibold">Tailwind</span> и{" "}
              <span className="text-info font-semibold">DaisyUI</span> - готовые
              паттерны, анимации и эффекты для быстрой разработки интерфейсов
            </p>
          </div>

          {/* Мини-статистика */}
          <div className="flex items-center justify-center gap-6 pt-2">
            <div className="flex items-center gap-2 text-sm text-base-content/50">
              <Box className="w-4 h-4 text-primary" />
              <span>50+ компонентов</span>
            </div>
            <div className="w-px h-4 bg-base-content/20" />
            <div className="flex items-center gap-2 text-sm text-base-content/50">
              <Palette className="w-4 h-4 text-info" />
              <span>Темизация</span>
            </div>
            <div className="w-px h-4 bg-base-content/20" />
            <div className="flex items-center gap-2 text-sm text-base-content/50">
              <Zap className="w-4 h-4 text-warning" />
              <span>TypeScript</span>
            </div>
          </div>

          {/* Кнопки действий - улучшенные */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            {/* Главная кнопка - уникальный дизайн */}
            <Link to="/native" className="group relative">
              <BorderBeam className="rounded-box" glow delay={3} disabled>
                <motion.div
                  className="relative px-8 py-4 rounded-box bg-base-200 font-bold text-lg
                  overflow-hidden cursor-pointer shadow-[0_0_20px] shadow-transparent hover:shadow-primary/50 transition-shadow duration-500"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Контент кнопки */}
                  <span className="relative flex items-center gap-3 z-1">
                    <span>Начать</span>
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.span>
                  </span>

                  <div className="top-0 -right-5 absolute bg-primary/70 w-5 h-full z-0 group-hover:w-[130%] transition-all duration-700 ease-in-out delay-100"></div>
                </motion.div>
              </BorderBeam>
            </Link>

            {/* Вторичная кнопка - GitHub */}
            <motion.a
              href="https://github.com/AiserKz/AisLabUI"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-4 rounded-2xl border border-base-content/15 
                text-base-content/70 font-medium hover:bg-base-content/5 hover:border-base-content/25
                transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </motion.a>
          </div>

          {/* Декоративный элемент скролла */}
          <motion.div
            className="flex flex-col items-center gap-2 pt-8"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-xs text-base-content/30 uppercase tracking-widest">
              Scroll
            </span>
            <div className="w-6 h-10 border-2 border-base-content/15 rounded-full flex justify-center pt-2">
              <motion.div
                className="w-1.5 h-2.5 bg-primary/50 rounded-full"
                animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Floating 3D Elements Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 relative max-w-4xl mx-auto perspective-1000"
        >
          {/* Декоративные углы */}
          <motion.div
            className="absolute -top-3 -left-3 w-6 h-6 border-l-2 border-t-2 border-primary/40 rounded-tl-lg"
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute -top-3 -right-3 w-6 h-6 border-r-2 border-t-2 border-info/40 rounded-tr-lg"
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
          <motion.div
            className="absolute -bottom-3 -left-3 w-6 h-6 border-l-2 border-b-2 border-info/40 rounded-bl-lg"
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
          <motion.div
            className="absolute -bottom-3 -right-3 w-6 h-6 border-r-2 border-b-2 border-primary/40 rounded-br-lg"
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
          />

          <div
            className="mockup-window border border-base-content/10 bg-base-200/50 backdrop-blur-md 
            hover:border-primary/40 hover:shadow-primary/10 hover:shadow-lg
            shadow-xl transition-all duration-500"
          >
            <div className="flex justify-center px-4 py-14 bg-base-100/80">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-2xl">
                <div className="skeleton h-28 w-full rounded-box" />
                <div className="skeleton h-28 w-full rounded-box" />
                <div className="skeleton h-28 w-full rounded-box" />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
