import { motion, MotionValue } from "framer-motion";
import { Layers } from "lucide-react";
import SpiralCard from "../SpiralCard";
import Wave from "../Wave";

const viewComponents = [
  { name: "Button", image: "/images/components/button.png" },
  { name: "Card", image: "/images/components/card.png" },
  { name: "Progress", image: "/images/components/progress.png" },
  { name: "RadialProgress", image: "/images/components/radialprogress.png" },
  { name: "Loading", image: "/images/components/loading.png" },
  { name: "Avatar", image: "/images/components/avatar.png" },
  { name: "BorderBeam", image: "/images/components/borderbeam.png" },
  { name: "Tags", image: "/images/components/tags.png" },
  { name: "Border", image: "/images/components/border.png" },
  { name: "InputFile", image: "/images/components/inputFile.png" },
];

export default function ComponentDemoSection({
  scrollY,
  ref,
  isMobile = false,
}: {
  scrollY: MotionValue;
  ref: React.RefObject<HTMLDivElement | null>;
  isMobile?: boolean;
}) {
  return (
    <section className="py-32 overflow-clip relative h-fit" ref={ref}>
      <div className="absolute inset-0 bg-base-200" />
      <Wave
        position="top"
        flipY
        colorClass="fill-base-100"
        className="w-full"
        animation={!isMobile}
      />

      {/* SVG Волна слева эффект пещеры */}
      <svg
        aria-hidden="true"
        focusable="false"
        className="absolute left-0 top-0 h-[95%] w-24 md:w-94 pointer-events-none hidden md:block"
        viewBox="0 0 100 1000"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient
            id="caveGradientLeft"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop
              offset="0%"
              stopColor="var(--color-primary)"
              stopOpacity="1"
            />
            <stop
              offset="100%"
              stopColor="var(--color-primary)"
              stopOpacity="0"
            />
          </linearGradient>
        </defs>
        <path
          d="M0,0 
             C30,50 20,100 35,150 
             C50,200 15,250 25,300 
             C35,350 45,400 30,450 
             C15,500 40,550 35,600 
             C30,650 20,700 40,750 
             C60,800 25,850 35,900
              C40,940 8,970 2,990
              C1,995 0,998 0,1000
              L0,1000 Z
            "
          fill="url(#caveGradientLeft)"
        />
      </svg>

      {/* SVG Волна справа эффект пещеры */}
      <svg
        aria-hidden="true"
        focusable="false"
        className="absolute right-0 top-0 h-[95%] w-24 md:w-92 pointer-events-none z-10 hidden md:block"
        viewBox="0 0 100 1000"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient
            id="caveGradientRight"
            x1="100%"
            y1="0%"
            x2="0%"
            y2="0%"
          >
            <stop
              offset="0%"
              stopColor="var(--color-primary)"
              stopOpacity="1"
            />
            <stop
              offset="100%"
              stopColor="var(--color-primary)"
              stopOpacity="0"
            />
          </linearGradient>
        </defs>
        <path
          d="M100,0 
             C70,60 80,120 65,180 
             C50,240 85,300 75,360 
             C65,420 55,480 70,540 
             C85,600 60,660 65,700 
             C90,780 60,840 70,900 
             C90,960 75,980 100,1000 
             L100,1000 Z"
          fill="url(#caveGradientRight)"
        />
      </svg>

      <div className="container mx-auto px-4 h-fit md:h-[400dvh]  relative z-10">
        {/* Улучшенный заголовок */}
        <motion.div
          className="text-center mb-16 relative backdrop-blur-xs"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Фон заголовка с градиентом */}
          <div className="absolute inset-0 bg-base-200/10  to-transparent rounded-box -z-10" />

          {/* Иконка над заголовком */}
          <motion.div
            className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 mb-6"
            whileInView={{ y: [0, -4, 0] }}
            viewport={{ once: true }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Layers className="w-7 h-7 text-primary" />
          </motion.div>

          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">
            Компоненты
          </h2>
          <p className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-base-content via-primary to-base-content bg-clip-text text-transparent bg-size-[200%_auto]">
            Готовые компоненты
          </p>
          <p className="text-base-content/60 max-w-lg mx-auto text-lg">
            Все, что нужно для вашего следующего приложения — прямо из коробки
          </p>

          {/* Декоративные элементы под заголовком */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <span className="w-16 h-0.5 bg-linear-to-r from-transparent to-primary/40 rounded-full" />
            <span className="w-3 h-3 bg-primary rounded-full" />
            <span className="w-16 h-0.5 bg-linear-to-l from-transparent to-primary/40 rounded-full" />
          </div>

          {/* Счетчик компонентов */}
          <div className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full bg-base-100/50 border border-base-content/10">
            <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
            <span className="text-sm text-base-content/70">
              {viewComponents.length}+ компонентов
            </span>
          </div>
        </motion.div>

        <div className="md:sticky top-50 md:top-50 ">
          <div
            className="relative min-h-screen h-full flex items-start justify-center flex-wrap gap-3"
            style={{ perspective: isMobile ? "0px" : "1600px" }}
          >
            {viewComponents.map((component, i) =>
              isMobile ? (
                <div
                  key={i}
                  className=" rounded-xl overflow-hidden border border-base-content/15 shadow-md bg-base-100 flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                >
                  {/* Изображение */}
                  <div className="flex-1 overflow-hidden rounded-t-xl">
                    <img
                      src={component.image}
                      alt={component.name}
                      className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  {/* Нижняя часть с названием */}
                  <div className="px-4 py-2 bg-base-100 flex items-center justify-center">
                    <span className="text-lg font-semibold text-base-content">
                      {component.name}
                    </span>
                  </div>
                </div>
              ) : (
                <SpiralCard
                  radius={isMobile ? 220 : 300}
                  key={i}
                  index={i + 1}
                  progress={scrollY}
                  speed={5}
                >
                  <div className="relative w-64 h-44 md:w-84 md:h-54 group">
                    {/* Улучшенный title блок */}
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-10">
                      <div
                        className="flex items-center gap-2 px-4 py-2 bg-base-100 rounded-full border border-base-content/10 
                    group-hover:scale-105 group-hover:-translate-y-2 transition-transform duration-300"
                      >
                        <span className="w-2 h-2 bg-primary rounded-full" />
                        <h4 className="text-lg font-semibold whitespace-nowrap">
                          {component.name}
                        </h4>
                      </div>
                    </div>

                    {/* Карточка с изображением */}
                    <div className="absolute inset-0 overflow-clip w-full h-full rounded-box border border-base-content/10 shadow-primary/20 group-hover:shadow-xl group-hover:border-primary/30 transition-all duration-300">
                      <img
                        src={component.image}
                        alt={component.name}
                        className="object-cover w-full h-full object-center transform-gpu group-hover:scale-[1.55] transition-transform duration-500"
                      />
                      {/* Оверлей при ховере */}
                      <div className="absolute inset-0 bg-linear-to-t from-base-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Декоративные уголки */}
                    <div className="absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 border-primary/30 rounded-tl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 border-r-2 border-t-2 border-primary/30 rounded-tr opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute -bottom-1 -left-1 w-3 h-3 border-l-2 border-b-2 border-primary/30 rounded-bl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-primary/30 rounded-br opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </SpiralCard>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
