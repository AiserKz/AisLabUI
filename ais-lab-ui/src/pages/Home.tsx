import FeatureCard from "@/components/FeatureCard";
import ScrollLightPath from "@/components/ScrollLightPath";
import SpiralCard from "@/components/SpiralCard";
import SpliteImageCard from "@/components/uiMotion/Image/SpliteImageCard";
import Wave from "@/components/Wave";
import "@/style/Home.css";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ReactLenis, useLenis, type LenisRef } from "lenis/react";
import { ArrowRight, Code, Zap, Layers, Terminal } from "lucide-react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function calcProgress(scroll: number, start: number, range: number) {
  if (range <= 0) return 0;
  const p = (scroll - start) / range;
  return Math.min(Math.max(p, 0), 1);
}

export default function Home() {
  const lenisRef = useRef<LenisRef | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const containerComponentRef = useRef<HTMLDivElement>(null);
  const scrollProgress = useMotionValue(0);
  const scrollY = useMotionValue(0);
  const currentScrollY = useMotionValue(0);

  const section1 = useRef({ start: 0, range: 0 });
  const section2 = useRef({ start: 0, range: 0 });
  useEffect(() => {
    const measureSection = (
      ref: React.RefObject<HTMLDivElement | null>,
      section: any
    ) => {
      if (!ref.current) return; // обязательно проверяем
      section.start = ref.current.offsetTop;
      section.range = ref.current.offsetHeight - window.innerHeight;
    };

    // Инициализация сразу
    measureSection(containerRef, section1.current);
    measureSection(containerComponentRef, section2.current);

    // ResizeObserver для динамических блоков
    const ro = new ResizeObserver(() => {
      measureSection(containerRef, section1.current);
      measureSection(containerComponentRef, section2.current);
    });

    if (containerRef.current) ro.observe(containerRef.current);
    if (containerComponentRef.current)
      ro.observe(containerComponentRef.current);

    window.addEventListener("resize", () => {
      measureSection(containerRef, section1.current);
      measureSection(containerComponentRef, section2.current);
    });

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", () => {
        measureSection(containerRef, section1.current);
        measureSection(containerComponentRef, section2.current);
      });
    };
  }, []);

  useLenis(({ scroll }) => {
    currentScrollY.set(scroll);

    const s1 = section1.current;
    const s2 = section2.current;

    scrollProgress.set(calcProgress(scroll, s1.start, s1.range));

    scrollY.set(calcProgress(scroll, s2.start, s2.range));
    console.log(calcProgress(scroll, s2.start, s2.range));
  });

  const overlayY = useTransform(scrollProgress, [0, 0.3], ["100%", "0%"]);
  const heroScale = useTransform(scrollProgress, [0, 0.7], [1, 0.92]);
  const heroOpacity = useTransform(scrollProgress, [0.2, 0.7], [1, 0.6]);
  const heroRotate = useTransform(scrollProgress, [0.3, 0.7], [0, -12]);

  return (
    <ReactLenis
      root
      options={{ autoRaf: true, smoothWheel: true, lerp: 0.03 }}
      ref={lenisRef}
    >
      <div className="min-h-screen overflow-x-clip bg-base-100 text-base-content">
        <ScrollLightPath scrollY={currentScrollY} />

        <div ref={containerRef} className="relative h-[600vh]">
          {/* 1. Hero Section */}
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
                  <span className="text-sm font-medium">
                    v1.0.0 Доступно сейчас
                  </span>
                </div>

                <h1 className="text-7xl md:text-9xl font-black tracking-tighter hero-title hero-3d-element">
                  AisLabUI
                </h1>

                <p className="text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed hero-description h-30 overflow-hidden">
                  Ультимативная обертка над{" "}
                  <span className="text-primary font-bold">
                    Tailwind + DaisyUI.
                  </span>
                  <br /> Создаем премиальные интерфейсы быстрее, не переписывая
                  один и тот же код.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                  <Link
                    to="/native"
                    className="btn btn-primary btn-lg gap-2 group"
                  >
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
          {/* Next Section */}
          <motion.section
            style={{ y: overlayY, willChange: "transform" }}
            className="absolute bottom-0 left-0 w-full bg-base-200 border-t-2 border-base-content/10 z-20 h-[500vh]
              
              soft-edge
               flex items-center justify-start text-6xl font-black flex-col space-y-40"
          >
            {/* Декоративные фоновые элементы - упрощены */}
            <div className="absolute top-[10%] right-[10%] w-96 h-96 bg-primary/10 rounded-full blur-lg pointer-events-none" />
            <div className="absolute top-[40%] left-[5%] w-80 h-80 bg-info/10 rounded-full blur-lg pointer-events-none" />

            <div className="relative h-[150dvh] mt-200 ">
              {/* Плавающая иконка Code слева */}
              <div className="absolute -left-100">
                <motion.div
                  className="bg-purple-400 w-40 h-40 rounded-box flex items-center justify-center shadow-xl shadow-purple-400/20"
                  animate={{ y: [0, 20, 0], rotate: [0, 10, 0, -10, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Code className="w-20 h-20" />
                </motion.div>
              </div>

              {/* Плавающая иконка Zap справа */}
              <div className="absolute -right-80 top-20">
                <motion.div
                  className="bg-yellow-400 w-32 h-32 rounded-box flex items-center justify-center shadow-xl shadow-yellow-400/20"
                  animate={{ y: [0, -15, 0], rotate: [0, -8, 0, 8, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  <Zap className="w-16 h-16" />
                </motion.div>
              </div>

              {/* Плавающая иконка Layers */}
              <div className="absolute -left-60 top-80">
                <motion.div
                  className="bg-blue-400 w-24 h-24 rounded-box flex items-center justify-center shadow-xl shadow-blue-400/20"
                  animate={{
                    y: [0, 12, 0],
                    x: [0, 8, 0],
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  <Layers className="w-12 h-12" />
                </motion.div>
              </div>

              {/* Плавающая иконка Terminal справа снизу */}
              <div className="absolute -right-50 top-100">
                <motion.div
                  className="bg-green-400 w-28 h-28 rounded-box flex items-center justify-center shadow-xl shadow-green-400/20"
                  animate={{
                    y: [0, -10, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.8,
                  }}
                >
                  <Terminal className="w-14 h-14" />
                </motion.div>
              </div>

              <div className="containe mx-auto px-4 max-w-4xl sticky top-40">
                <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-8">
                  О проекте
                </h2>
                <p className="text-4xl md:text-5xl font-bold leading-tight">
                  <span className="scroll-text-highlight">
                    AisLabUi создан, чтобы стать мостом между "сырыми" утилитами
                    и готовыми функциональными компонентами.
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
                  Мы объединили лучшие практики UI-разработки в единую,
                  согласованную систему компонентов
                </motion.p>
              </div>
            </div>

            <div className="h-[200vh] w-full relative">
              {/* Заголовок для карусели */}
              <div className="sticky top-10 text-center mb-8 z-10">
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

              <div className=" flex items-center justify-center gap-6  card-show-carousel sticky top-40">
                <div className="bg-primary rounded-box card-carousel-item overflow-clip group">
                  <span className="relative z-10 drop-shadow-lg transition-transform group-hover:scale-110">
                    NativeUi
                  </span>
                  <span className="absolute bottom-4 left-4 right-4 text-xs text-white/70 font-normal z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    Базовые компоненты
                  </span>
                  <span className="absolute feature-video">
                    <video
                      src="https://play.vsthemes.org/fhd/56/72856.webm"
                      className="w-full h-full object-cover "
                      muted
                      loop
                      onMouseEnter={(e) => e.currentTarget.play()}
                      onMouseLeave={(e) => e.currentTarget.pause()}
                    ></video>
                  </span>
                </div>
                <div className="bg-info rounded-box card-carousel-item group overflow-clip">
                  <span className="relative z-10 drop-shadow-lg transition-transform group-hover:scale-110">
                    MotionUi
                  </span>
                  <span className="absolute bottom-4 left-4 right-4 text-xs text-white/70 font-normal z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    Анимации и эффекты
                  </span>
                  <span className="absolute feature-video">
                    <video
                      src="https://cdn.pixabay.com/video/2024/03/26/205733-927672950_large.mp4"
                      className="w-full h-full object-cover "
                      muted
                      loop
                      onMouseEnter={(e) => e.currentTarget.play()}
                      onMouseLeave={(e) => e.currentTarget.pause()}
                    ></video>
                  </span>
                </div>
                <div className="bg-error rounded-box card-carousel-item group overflow-clip">
                  <span className="relative z-10 drop-shadow-lg transition-transform group-hover:scale-110">
                    Theme
                  </span>
                  <span className="absolute bottom-4 left-4 right-4 text-xs text-white/70 font-normal z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    Темы и стили
                  </span>
                  <span className="absolute feature-video">
                    <video
                      src="https://cdn.pixabay.com/video/2024/12/19/247733_large.mp4"
                      className="w-full h-full object-cover "
                      muted
                      loop
                      onMouseEnter={(e) => e.currentTarget.play()}
                      onMouseLeave={(e) => e.currentTarget.pause()}
                    ></video>
                  </span>
                </div>
              </div>

              {/* Подсказка под каруселью */}
              <motion.div
                className="sticky top-[80vh] text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="text-base text-base-content/40 font-normal flex items-center justify-center gap-2">
                  <span className="inline-block w-1 h-1 bg-base-content/40 rounded-full animate-pulse" />
                  Наведите на карточку для предпросмотра
                  <span className="inline-block w-1 h-1 bg-base-content/40 rounded-full animate-pulse" />
                </p>
              </motion.div>
            </div>
          </motion.section>
        </div>

        {/* 2. About Section (Split → Flip → Explain) */}
        <section className="py-32 relative pb-100 ">
          {/* Декоративные фоновые элементы */}
          <div className="absolute top-20 left-[5%] w-72 h-72 bg-info/8 rounded-full blur-xl pointer-events-none" />
          <div className="absolute bottom-40 right-[10%] w-80 h-80 bg-accent/8 rounded-full blur-xl pointer-events-none" />

          {/* Плавающие декоративные точки */}
          <motion.div
            className="absolute top-32 right-[20%] w-3 h-3 bg-primary rounded-full"
            animate={{ y: [0, -15, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-60 left-[15%] w-2 h-2 bg-info rounded-full"
            animate={{ y: [0, 10, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
          />
          <motion.div
            className="absolute bottom-60 right-[25%] w-4 h-4 bg-accent rounded-full"
            animate={{ y: [0, -12, 0], opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
          />

          <div className="container mx-auto px-4 max-w-5xl relative z-10">
            {/* Intro text */}
            <motion.div
              className="mb-20 text-center space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase">
                О чём AisLabUI
              </h2>
              <p className="text-3xl md:text-4xl font-bold leading-tight">
                Одна обёртка — несколько слоёв,
                <br />
                чтобы не писать одно и то же в каждом проекте
              </p>
              <p className="text-base-content/60 max-w-2xl mx-auto">
                AisLabUI аккуратно расширяет DaisyUI, добавляя готовые
                визуальные паттерны, motion и эффекты — без ломки привычного
                стека.
              </p>

              {/* Декоративная линия */}
              <div className="flex items-center justify-center gap-2 pt-4">
                <span className="w-8 h-0.5 bg-primary/30 rounded-full" />
                <span className="w-2 h-2 bg-primary rounded-full" />
                <span className="w-8 h-0.5 bg-primary/30 rounded-full" />
              </div>
            </motion.div>

            {/* Split Image Card */}
            <SpliteImageCard
              src="/card-bg.webp"
              item1={
                <div
                  className="h-full w-full flex flex-col justify-start p-6 space-y-5 relative border border-info/30"
                  style={{
                    borderRadius: "inherit",
                  }}
                >
                  <div className="absolute inset-0 h-full rounded-box bg-linear-to-br from-info/10 to-transparent pointer-events-none" />

                  <div className="flex items-center space-x-3">
                    <div className="p-4 border border-info/60 rounded-box bg-base-200/70 backdrop-blur-sm">
                      <Layers className="w-7 h-7 text-info" />
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight">
                      Visual
                    </h3>
                  </div>

                  <p className="text-base-content/70 leading-relaxed max-w-sm">
                    Готовые визуальные паттерны для чистых и аккуратных
                    интерфейсов.
                  </p>

                  <ul className="text-sm space-y-2 text-base-content/60">
                    <li>• стекло</li>
                    <li>• тени</li>
                    <li>• hover / focus</li>
                  </ul>
                </div>
              }
              item2={
                <div
                  className="h-full w-full flex flex-col justify-start p-6 space-y-5 relative border border-accent/30"
                  style={{
                    borderRadius: "inherit",
                  }}
                >
                  <div className="absolute inset-0 h-full rounded-box bg-linear-to-br from-accent/10 to-transparent pointer-events-none" />

                  <div className="flex items-center space-x-3">
                    <div className="p-4 border border-accent/60 rounded-box bg-base-200/70 backdrop-blur-sm">
                      <Zap className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight">
                      Motion
                    </h3>
                  </div>

                  <p className="text-base-content/70 leading-relaxed max-w-sm">
                    Спокойные и предсказуемые анимации без лишней настройки.
                  </p>

                  <ul className="text-sm space-y-2 text-base-content/60">
                    <li>• микро-motion</li>
                    <li>• hover / press</li>
                    <li>• единый ритм</li>
                  </ul>
                </div>
              }
              item3={
                <div
                  className="h-full w-full flex flex-col justify-start p-6 space-y-5 relative border border-primary/0"
                  style={{ borderRadius: "inherit" }}
                >
                  <div className="absolute inset-0 h-full rounded-box bg-linear-to-br from-primary/10 to-transparent pointer-events-none" />

                  <div className="flex items-center space-x-3">
                    <div className="p-4 border border-primary/60 rounded-box bg-base-200/70 backdrop-blur-sm">
                      <Code className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight">
                      Integration
                    </h3>
                  </div>

                  <p className="text-base-content/70 leading-relaxed max-w-sm">
                    AisLabUI подключается как дополнительный слой, не вмешиваясь
                    в существующую архитектуру проекта.
                  </p>

                  <ul className="text-sm space-y-2 text-base-content/60">
                    <li>- работает поверх Tailwind и DaisyUI</li>
                    <li>- не переопределяет ваши классы</li>
                    <li>- устанавливается через npm</li>
                  </ul>

                  <div className="mt-2 text-xs font-mono text-base-content/40">
                    npm install aislabui
                  </div>
                </div>
              }
            />
          </div>
        </section>

        {/* 3. 3D Component Demo Section */}
        <section
          className="py-32 overflow-clip relative"
          ref={containerComponentRef}
        >
          <div className="absolute inset-0 bg-base-200" />
          {/* Декоративные фоновые круги - упрощены для производительности */}
          <div className="absolute top-[20%] left-[5%] w-96 h-96 bg-primary/5 rounded-full blur-xl pointer-events-none" />
          <div className="absolute bottom-[20%] right-[5%] w-80 h-80 bg-accent/5 rounded-full blur-xl pointer-events-none" />

          <div className="container mx-auto px-4 h-[500dvh] relative z-10">
            <motion.div
              className="text-center mb-16"
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
                Все, что нужно для вашего следующего приложения — прямо из
                коробки
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

        {/* 4. Features Section (Scroll Reveal) */}
        <section className="py-44 relative overflow-clip z-10">
          <div className="bg-linear-60 from-primary/30 to-primary/80 w-full h-full absolute top-0 "></div>

          {/* Плавающие декоративные элементы */}
          <motion.div
            className="absolute top-32 left-[10%] w-20 h-20 border-2 border-white/20 rounded-2xl"
            animate={{ rotate: [0, 90, 0], y: [0, -10, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-40 right-[15%] w-16 h-16 border-2 border-white/15 rounded-full"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-1/2 left-[5%] w-8 h-8 bg-white/10 rounded-lg"
            animate={{ y: [0, 20, 0], rotate: [0, 45, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          />

          <Wave delay={0} position="top" flipY animation />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold tracking-widest text-white/70 uppercase mb-4">
                Преимущества
              </h2>
              <p className="text-4xl font-bold mb-4">Почему AisLabUi?</p>
              <p className="text-base-content/60 max-w-xl mx-auto">
                Все необходимое для создания приложений мирового класса,
                упакованное в один мощный пакет.
              </p>

              {/* Статистика */}
              <div className="flex items-center justify-center gap-8 mt-10">
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <p className="text-3xl font-black text-white">50+</p>
                  <p className="text-xs text-white/60 uppercase tracking-wider">
                    Компонентов
                  </p>
                </motion.div>
                <div className="w-px h-10 bg-white/20" />
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <p className="text-3xl font-black text-white">100%</p>
                  <p className="text-xs text-white/60 uppercase tracking-wider">
                    TypeScript
                  </p>
                </motion.div>
                <div className="w-px h-10 bg-white/20" />
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <p className="text-3xl font-black text-white">∞</p>
                  <p className="text-xs text-white/60 uppercase tracking-wider">
                    Возможностей
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <FeatureCard
                icon={<Zap size={40} className="text-yellow-400" />}
                title="Молниеносно быстро"
                description="Построено примущественно на базе CSS, что дает превосходную скорость."
                delay="0s"
              />
              <FeatureCard
                icon={<Layers size={40} className="text-blue-400" />}
                title="Богатая библиотека"
                description="Более 50+ готовых компонентов: от простых кнопок до сложных анимированных компонентов."
                delay="0.2s"
              />
              <FeatureCard
                icon={<Code size={40} className="text-green-400" />}
                title="Для разработчиков"
                description="Полная типизация TypeScript. Интуитивно понятный API, который сразу имеет смысл."
                delay="0.4s"
              />
            </div>
          </div>
          <Wave position="bottom" flipX colorClass="fill-base-100" animation />
        </section>

        {/* 5. CTA Section */}
        <section className="py-54 relative ">
          {/* Анимированный фоновый градиент */}

          {/* Декоративные круги */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-lg pointer-events-none" />

          {/* Плавающие элементы */}
          <motion.div
            className="absolute top-20 left-[20%] w-4 h-4 bg-primary/30 rounded-full"
            animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-[20%] w-3 h-3 bg-secondary/40 rounded-full"
            animate={{ y: [0, 15, 0], x: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
          />
          <motion.div
            className="absolute top-1/3 right-[10%] w-2 h-2 bg-accent/50 rounded-full"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          />
          <motion.div
            className="absolute bottom-1/3 left-[10%] w-5 h-5 border border-primary/20 rounded-lg"
            animate={{ rotate: [0, 180, 360], scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />

          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Декоративный элемент над заголовком */}
              <div className="flex items-center justify-center gap-2 mb-6">
                <motion.span
                  className="w-16 h-0.5 bg-linear-to-r from-transparent to-primary/50 rounded-full"
                  animate={{ scaleX: [0.8, 1, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.span
                  className="w-3 h-3 bg-primary rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.span
                  className="w-16 h-0.5 bg-linear-to-l from-transparent to-primary/50 rounded-full"
                  animate={{ scaleX: [0.8, 1, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>

              <h2 className="text-5xl font-black mb-4 bg-linear-to-r from-base-content via-primary to-base-content bg-clip-text text-transparent bg-size-[200%_auto] animate-[gradient_3s_linear_infinite]">
                Готовы к запуску?
              </h2>
              <p className="text-xl mb-10 opacity-80 max-w-lg mx-auto">
                Присоединяйтесь к будущему UI-разработки уже сегодня.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to="/native"
                    className="btn btn-primary btn-lg px-12 shadow-primary/40 shadow-[0_0_0px_0px] hover:shadow-[0_0_10px_4px] hover:shadow-primary/40 transition-shadow duration-600"
                  >
                    Смотреть компоненты
                    <ArrowRight className="ml-2" />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a
                    href="https://github.com/AiserKz/AisLabUI"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-ghost btn-lg gap-2 border border-base-content/10 hover:bg-base-content/5"
                  >
                    <Terminal size={20} />
                    GitHub
                  </a>
                </motion.div>
              </div>

              {/* Футер текст */}
              <p className="mt-12 text-sm text-base-content/40">
                Бесплатно • Open Source • MIT License
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </ReactLenis>
  );
}
