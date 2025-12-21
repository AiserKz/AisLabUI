import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

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
  const rawProgress = useMotionValue(0);
  const items = [item1, item2, item3, item4, item5];

  useEffect(() => {
    let ticking = false; // флаг, чтобы ограничить обновления до одного на кадр

    function handleScroll() {
      if (!ref.current) return;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = ref.current!.getBoundingClientRect();
          const viewportH = window.innerHeight;
          const containerH = rect.height;
          const animationRange = containerH - viewportH;

          const raw = Math.min(1, Math.max(0, -rect.top / animationRange));
          const p = mapProgress(raw, 0, 0.7);
          rawProgress.set(p);

          ticking = false; // разрешаем следующее обновление
        });
        ticking = true; // пока ждём requestAnimationFrame, новые скроллы игнорируем
      }
    }

    handleScroll(); // вызов сразу для корректного состояния
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      // console.log("Изображение загружено заранее");
    };
  }, [src]);

  const getItem = (i: number) => items[i];

  const count = Math.max(2, Math.min(5, _count));
  // Тригеры прокрутки
  const splitOffset = useTransform(rawProgress, (p) => Math.max(0, p) * 50);
  const scale = useTransform(rawProgress, [0, 0.2], [1.1, 1]);
  const rotateMotion = useTransform(rawProgress, [0.5, 1], [0, 180]);
  const isSplit = useTransform(splitOffset, (so) => so > 10);

  const center = (count - 1) / 2; // центральная карточка

  return (
    <div ref={ref} className={`relative h-[300dvh] w-full ${className} `}>
      <div className="sticky" style={{ top: `${top}px`, perspective: 1000 }}>
        {/* Три части */}
        <motion.div
          className="absolute inset-0 flex items-start justify-center transition-all duration-500 ease-linear "
          style={{ scale }}
        >
          <div className="flex">
            {Array.from({ length: count }).map((_, i) => {
              const borderRadius = useTransform(isSplit, (split) => {
                if (split) return "var(--radius-box)";
                if (i === 0) return "var(--radius-box) 0 0 var(--radius-box)";
                if (i === count - 1)
                  return "0 var(--radius-box) var(--radius-box) 0";
                return i === center ? "0" : "0"; // центральная карточка без border-radius
              });
              const offsetX = useTransform(splitOffset, (so) =>
                Math.round((i - center) * so)
              );

              const backOffsetX = useTransform(splitOffset, (so) =>
                Math.round(-(i - center) * so)
              );

              const bgPositionX = `${(i * 100) / (count - 1)}%`;
              const bgSize = `${count * 100}% auto`;

              const cardWidth = height / count + height * 0.4;
              const transition = `border-radius 0.5s ease-in-out`;

              return (
                <motion.div
                  key={i}
                  style={{
                    rotateY: rotateMotion,
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                  }}
                  className="relative "
                >
                  <motion.div
                    className=" bg-cover bg-center object-cover"
                    style={{
                      backgroundImage: `url(${src})`,
                      width: cardWidth,
                      height,
                      backgroundPosition: `${bgPositionX} 0px`,
                      backgroundSize: bgSize,
                      x: offsetX,
                      backfaceVisibility: "hidden",
                      borderRadius: borderRadius,
                      willChange: "transform",
                      transition: transition,
                    }}
                  />
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                      width: cardWidth,
                      height,
                      x: backOffsetX,
                      backfaceVisibility: "hidden",
                      rotateY: 180,
                      borderRadius: borderRadius,
                      willChange: "transform",
                      transition: transition,
                    }}
                  >
                    {getItem(i) || (
                      <p className="text-5xl font-bold">{i + 1}</p>
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
