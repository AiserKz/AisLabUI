import { motion, MotionValue, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection({
  scrollProgress,
}: {
  scrollProgress: MotionValue;
}) {
  const heroScale = useTransform(scrollProgress, [0, 0.7], [1, 0.92]);
  const heroOpacity = useTransform(scrollProgress, [0.2, 0.7], [1, 0.6]);
  const heroRotate = useTransform(scrollProgress, [0.3, 0.7], [0, -12]);
  return (
    <section className="relative min-h-screen flex items-start justify-center scroll-zoom-animation perspective-distant">
      {/* Background Shapes */}
      <div className="parallax-bg-shape bg-primary/20 w-96 h-96 top-20 left-20 " />

      {/* Дополнительные фоновые градиенты */}
      <div className="absolute top-[10%] right-[10%] w-80 h-80 bg-secondary/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-[20%] left-[15%] w-64 h-64 bg-accent/10 rounded-full blur-2xl pointer-events-none" />

      {/* Плавающие геометрические фигуры по углам */}
      <motion.div
        className="absolute top-32 left-[8%] w-16 h-16 border-2 border-primary/20 rounded-2xl"
        animate={{ rotate: [0, 90, 180, 270, 360], y: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-48 right-[10%] w-12 h-12 border-2 border-info/25 rounded-full"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-[35%] left-[5%] w-8 h-8 bg-primary/20 rounded-lg"
        animate={{ y: [0, 15, 0], rotate: [0, 45, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-[40%] right-[8%] w-14 h-14 border border-accent/20 rounded-xl"
        animate={{ rotate: [0, -90, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Плавающие точки */}
      <motion.div
        className="absolute top-40 left-[25%] w-3 h-3 bg-primary rounded-full"
        animate={{ y: [0, -20, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-60 right-[25%] w-2 h-2 bg-secondary rounded-full"
        animate={{ y: [0, 15, 0], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-[45%] left-[30%] w-2 h-2 bg-accent rounded-full"
        animate={{ y: [0, -12, 0], x: [0, 8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
      />
      <motion.div
        className="absolute top-[30%] right-[15%] w-4 h-4 bg-info/50 rounded-full"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, delay: 0.8 }}
      />

      {/* Декоративные линии */}
      <div className="absolute top-[20%] left-[3%] w-20 h-0.5 bg-linear-to-r from-primary/30 to-transparent rounded-full" />
      <div className="absolute top-[25%] right-[3%] w-16 h-0.5 bg-linear-to-l from-info/30 to-transparent rounded-full" />

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
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-base-200/50 mb-4 border animate-border-pulse">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
            <span className="text-sm font-medium">v1.0.0 Доступно сейчас</span>
          </div>

          <h1 className="text-7xl md:text-9xl font-black tracking-tighter hero-title hero-3d-element">
            AisLabUI
          </h1>

          <p className="text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed hero-description h-30 overflow-hidden">
            Ультимативная обертка над{" "}
            <span className="text-primary font-bold">Tailwind + DaisyUI.</span>
            <br /> Создаем премиальные интерфейсы быстрее, не переписывая один и
            тот же код.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link to="/native" className="btn btn-primary btn-lg gap-2 group">
              Начать
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          {/* Декоративный элемент скролла */}
          <motion.div
            className="flex flex-col items-center gap-2 mt-12"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-xs text-base-content/40 uppercase tracking-widest">
              Скролл
            </span>
            <div className="w-6 h-10 border-2 border-base-content/20 rounded-full flex justify-center pt-2">
              <motion.div
                className="w-1.5 h-2.5 bg-primary/60 rounded-full"
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
          className="mt-20 relative max-w-4xl mx-auto perspective-1000"
        >
          {/* Декоративные элементы вокруг mockup */}
          <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-primary/30 rounded-tl-lg" />
          <div className="absolute -top-4 -right-4 w-8 h-8 border-r-2 border-t-2 border-primary/30 rounded-tr-lg" />
          <div className="absolute -bottom-4 -left-4 w-8 h-8 border-l-2 border-b-2 border-primary/30 rounded-bl-lg" />
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-primary/30 rounded-br-lg" />

          <div
            className="mockup-window border border-base-content/10 bg-base-200/50 backdrop-blur-md 
            hover:border-primary/50 hover:shadow-primary/20 hover:shadow-md
            shadow-2xl transform transition-all duration-700"
          >
            <div className="flex justify-center px-4 py-16 bg-base-100/80">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-2xl">
                <div className="skeleton h-32 w-full rounded-box"></div>
                <div className="skeleton h-32 w-full rounded-box"></div>
                <div className="skeleton h-32 w-full rounded-box"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
