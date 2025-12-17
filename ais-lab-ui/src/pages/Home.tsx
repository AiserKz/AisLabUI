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
    function measure() {
      if (containerRef.current) {
        const el = containerRef.current;
        section1.current.start = el.offsetTop;
        section1.current.range = el.offsetHeight - window.innerHeight;
      }

      if (containerComponentRef.current) {
        const el = containerComponentRef.current;
        section2.current.start = el.offsetTop;
        section2.current.range = el.offsetHeight - window.innerHeight;
      }
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useLenis(({ scroll }) => {
    currentScrollY.set(scroll);

    const s1 = section1.current;
    const s2 = section2.current;

    scrollProgress.set(calcProgress(scroll, s1.start, s1.range));
    scrollY.set(calcProgress(scroll, s2.start, s2.range));
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
              </motion.div>

              {/* Floating 3D Elements Mockup */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="mt-20 relative max-w-4xl mx-auto perspective-1000"
              >
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
            <div className="relative h-[150dvh] mt-200 ">
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
              </div>
            </div>

            <div className="h-[200vh] w-full relative">
              <div className=" flex items-center justify-center gap-6  card-show-carousel sticky top-40">
                <div className="bg-primary rounded-box card-carousel-item overflow-clip">
                  NativeUi
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
                  MotionUi
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
                  Theme
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
            </div>
          </motion.section>
        </div>

        {/* 2. About Section (Split → Flip → Explain) */}
        <section className="py-32 relative pb-100">
          <div className="container mx-auto px-4 max-w-5xl">
            {/* Intro text */}
            <div className="mb-20 text-center space-y-4">
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
            </div>

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
        <section className="py-32 bg-base-200 overflow-clip ">
          <div
            ref={containerComponentRef}
            className="container mx-auto px-4 h-[500dvh] "
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Готовые компоненты</h2>
              <p className="text-base-content/60">
                Все, что нужно для вашего следующего приложения
              </p>
            </div>
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
        <section className="py-44 relative overflow-clip ">
          <div className="bg-linear-60 from-primary/30 to-primary/80 w-full h-full absolute top-0"></div>
          <Wave delay={0} position="top" flipY animation />
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold mb-4">Почему AisLabUi?</h2>
              <p className="text-base-content/60 max-w-xl mx-auto">
                Все необходимое для создания приложений мирового класса,
                упакованное в один мощный пакет.
              </p>
            </div>

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
        <section className="py-32 relative overflow-clip">
          <div className="absolute inset-0 "></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-5xl font-black mb-8">Готовы к запуску?</h2>
            <p className="text-xl mb-10 opacity-80">
              Присоединяйтесь к будущему UI-разработки уже сегодня.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                to="/native"
                className="btn btn-primary btn-lg px-12 shadow-[0_0_20px_6px_transparent] hover:ring-2 ring-primary hover:shadow-primary/50 transition-shadow duration-400"
              >
                Смотреть компоненты
              </Link>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost btn-lg gap-2"
              >
                <Terminal size={20} />
                GitHub
              </a>
            </div>
          </div>
        </section>
      </div>
    </ReactLenis>
  );
}
