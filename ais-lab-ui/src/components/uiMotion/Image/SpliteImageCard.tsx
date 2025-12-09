import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function mapProgress(raw: number, start: number, end: number) {
  return Math.min(1, Math.max(0, (raw - start) / (end - start)));
}

interface SpliteImageCardProps {
  src: string;
  height?: number;
  top?: number;
  count?: 2 | 3 | 4 | 5;
  className?: string;
  item1?: React.ReactNode;
  item2?: React.ReactNode;
  item3?: React.ReactNode;
  item4?: React.ReactNode;
  item5?: React.ReactNode;
}

export default function SpliteImageCard({
  src = "",
  height = 400,
  count: _count = 3,
  top = 200,
  className = "",

  item1,
  item2,
  item3,
  item4,
  item5,
}: SpliteImageCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const [progress, setProgress] = useState<number>(0);
  const rawProgress = useMotionValue(0);
  const items = [item1, item2, item3, item4, item5];

  useEffect(() => {
    function handleScroll() {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();

      const viewportH = window.innerHeight;
      const containerH = rect.height;

      const animationRange = containerH - viewportH;

      const raw = Math.min(1, Math.max(0, -rect.top / animationRange));
      const p = mapProgress(raw, 0, 0.7); // от 0% до 80%
      rawProgress.set(p);
      setProgress(p);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getItem = (i: number) => items[i];

  const count = Math.max(2, Math.min(5, _count));
  // Тригеры прокрутки
  const splitOffset = Math.max(0, progress - 0.2) * 70;
  const scale = useTransform(rawProgress, [0, 0.2], [1.1, 1]);
  const rotateMotion = useTransform(rawProgress, [0.5, 1], [0, 180]);

  const center = (count - 1) / 2; // центральная карточка

  return (
    <div ref={ref} className={`relative h-[300dvh] w-full ${className} `}>
      <div className="sticky" style={{ top: `${top}px` }}>
        {/* Три части */}
        <motion.div
          className="absolute inset-0 flex items-start justify-center transition-all duration-500 ease-linear"
          style={{ scale }}
        >
          <div className="flex">
            {Array.from({ length: count }).map((_, i) => {
              const styleBorder =
                splitOffset > 10
                  ? "var(--radius-box)"
                  : i === 0
                  ? "var(--radius-box) 0 0 var(--radius-box)"
                  : i === count - 1
                  ? "0 var(--radius-box) var(--radius-box) 0"
                  : "0";
              const offsetX = Math.round((i - center) * splitOffset);

              const bgPositionX = `${(i * 100) / (count - 1)}%`;
              const bgSize = `${count * 100}% auto`;

              const cardWidth = height / count + height * 0.4;

              return (
                <motion.div
                  key={i}
                  style={{
                    rotateY: rotateMotion,
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                  }}
                  className="relative"
                >
                  <div
                    className=" bg-cover bg-center transition-all duration-300 object-cover"
                    style={{
                      backgroundImage: `url(${src})`,
                      width: cardWidth,
                      height,
                      backgroundPosition: `${bgPositionX} 0px`,
                      backgroundSize: bgSize,
                      transform: `translateX(${offsetX}px)`,
                      backfaceVisibility: "hidden",
                      borderRadius: styleBorder,
                    }}
                  />
                  <div
                    className="absolute inset-0 bg-base-300 flex items-center justify-center transition-all duration-300"
                    style={{
                      width: cardWidth,
                      height,
                      transform: `rotateY(180deg) translateX(${offsetX}px)`,
                      backfaceVisibility: "hidden",
                      borderRadius: styleBorder,
                    }}
                  >
                    {getItem(i) || (
                      <p className="text-5xl font-bold">{i + 1}</p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
