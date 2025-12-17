import type { MotionValue } from "motion";
import {
  useMotionValue,
  useMotionValueEvent,
  useSpring,
  motion,
  useTransform,
} from "motion/react";
import { useEffect, useRef } from "react";

interface ScrollLightPathProps {
  scrollY: MotionValue;
  circle?: boolean;
}

export default function ScrollLightPath({
  scrollY,
  circle,
}: ScrollLightPathProps) {
  const pathRaf = useRef<SVGPathElement | null>(null);
  const pathLenght = useRef(0);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const pathProgress = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 120, damping: 25 });
  const smoothY = useSpring(y, { stiffness: 120, damping: 25 });

  const smoothProgress = useSpring(pathProgress, {
    stiffness: 60,
    damping: 35,
  });

  useEffect(() => {
    if (pathRaf.current) {
      pathLenght.current = pathRaf.current.getTotalLength();
    }
  }, []);

  const smoothPathOffset = useTransform(
    smoothProgress,
    [0, 1],
    [pathLenght.current, 0]
  );

  useMotionValueEvent(scrollY, "change", () => {
    const pathEl = pathRaf.current;
    if (!pathEl) return;

    const pathLength = pathEl.getTotalLength();
    const scrollableHeight = document.body.scrollHeight - window.innerHeight;

    let progress = scrollY.get() / scrollableHeight;
    progress = Math.min(Math.max(progress, 0), 1);

    const point = pathEl.getPointAtLength(progress * pathLength);

    x.set(point.x);
    y.set(point.y);

    pathProgress.set(progress);
  });

  return (
    <>
      <div className="absolute left-0 top-0 w-full h-full pointer-events-none">
        {/* PATH */}
        <svg
          viewBox="0 0 500 1200"
          preserveAspectRatio="none"
          style={{
            width: "95%",
            height: "92%",
            filter: `drop-shadow(0px 0px 15px var(--color-primary))`,
          }}
          className={`stroke-primary`}
        >
          <motion.path
            ref={pathRaf}
            d={
              "M187.753 1.71814C187.753 1.71814 -50.7471 143.218 12.7531 223.718C76.2534 304.218 500.753 357.218 491.253 475.218C481.753 593.218 156.253 981.218 218.253 1102.22C280.253 1223.22 224.253 1919.72 174.253 1963.22"
            }
            strokeWidth={1}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={pathLenght.current + 20}
            strokeDashoffset={smoothPathOffset}
          />
        </svg>
      </div>
      {/* LIGHT BALL */}
      {circle && (
        <div className="absolute left-0 top-0 w-full h-full">
          <svg
            viewBox="0 0 500 1200"
            preserveAspectRatio="none"
            style={{ width: "95%", height: "92%" }}
            className={`fill-primary `}
          >
            <motion.circle
              cx={smoothX}
              cy={smoothY}
              r={4}
              stroke="none"
              strokeLinecap="round"
              filter="blur(2px)"
              className="fill-primary"
            />
          </svg>
        </div>
      )}
    </>
  );
}
