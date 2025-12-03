import { motion } from "framer-motion";
import type { BaseMotionProps } from "..";

interface FadeInProps extends BaseMotionProps {
  children?: React.ReactNode;
  power?: number;
}

interface FadeInUpProps extends FadeInProps {
  direction?: "top" | "bottom" | "left" | "right";
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 1,
  power = 1,
  ease = "easeInOut",
  className,
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: power }}
      transition={{ delay, duration, ease: ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeInMove({
  children,
  delay = 0,
  duration = 1,
  direction = "bottom",
  power = 20,
  ease = "easeInOut",
  className,
}: FadeInUpProps) {
  const x = direction === "left" ? -power : direction === "right" ? power : 0;
  const y = direction === "top" ? -power : direction === "bottom" ? power : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: y, x: x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      exit={{ opacity: 0, y: y, x: x }}
      transition={{ delay, duration, ease: ease }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeInScale({
  children,
  delay = 0,
  duration = 1,
  power = 0.9,
  ease = "easeInOut",
  className,
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: power }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: power }}
      transition={{ delay, duration, ease: ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
