import type { MotionValue } from "motion";
import { useTransform, motion } from "motion/react";

const rotation = 3;
const vertical = 260;
const depth = 100;

const delay = 0.35;

function SpiralCard({
  radius = 220,
  index,
  progress,
  children,
  speed = 6,
}: {
  radius?: number;
  index: number;
  progress: MotionValue;
  children?: React.ReactNode;
  speed?: number;
}) {
  const t = useTransform(progress, (v) => v * speed - index * delay);

  const angle = useTransform(t, (v) => v * rotation);

  const x = useTransform(angle, (a) => Math.cos(a) * radius);
  const y = useTransform(t, (v) => -v * vertical + 300);
  const z = useTransform(t, (v) => -depth + v * depth);

  const rotateY = useTransform(angle, (a) => -a * (180 / Math.PI) + 90);

  const rotateX = useTransform(t, [-0.4, 0.3], [18, -6]);

  const scale = useTransform(t, [-0.3, 0, 1, 2], [0.6, 1, 1, 0.6]);
  const opacity = useTransform(t, [-0.4, -0.1, 1, 3], [0, 1, 1, 0.1]);
  const zIndex = useTransform(t, [-0.4, 0.2], [-5, 10]);

  return (
    <motion.div
      className="absolute w-82 h-54 border rounded-box bg-primary shadow-xl flex items-center justify-center font-semibold"
      style={{
        transformStyle: "preserve-3d",
        translateX: x,
        translateY: y,
        translateZ: z,
        rotateY,
        rotateX,
        scale,
        opacity,
        zIndex,
      }}
    >
      {children}
    </motion.div>
  );
}

export default SpiralCard;
