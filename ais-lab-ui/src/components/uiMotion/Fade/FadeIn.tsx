import { motion, type Variants } from "framer-motion";
import type { BaseMotionProps } from "../motion-index";

interface FadeInProps extends BaseMotionProps {
  children?: React.ReactNode;
  innerClassName?: string;
  power?: number;
}

interface FadeInUpProps extends FadeInProps {
  direction?: "top" | "bottom" | "left" | "right";
}

export default function FadeIn({
  children,
  className = "",
  innerClassName,
  delay = 0,
  duration = 0.5,
  power = 20,
  ease = "easeInOut",
}: FadeInProps) {
  const variants: Variants = {
    hidden: { opacity: 0, y: power },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants}
      transition={{ duration, delay, ease }}
      className={className}
    >
      <div className={innerClassName}>{children}</div>
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
  className = "",
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
  className = "",
  delay = 0,
  duration = 0.5,
  power = 0.9,
  ease = "easeInOut",
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: power }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
