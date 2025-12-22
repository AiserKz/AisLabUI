import { motion, type Variants } from "framer-motion";

type FloatingDecorationProps = {
  className?: string;
  children?: React.ReactNode;
  duration?: number;
  delay?: number;
  once?: boolean;
  variants?: Variants;
  loop?: boolean;
  disable?: boolean;
};

const defaultVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

export function FloatingDecoration({
  className,
  children,
  duration = 4,
  delay = 0,
  once = false,
  variants = defaultVariants,
  loop = false,
  disable = false,
}: FloatingDecorationProps) {
  if (disable) return <>{children}</>;
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: "easeInOut",
        repeat: loop ? Infinity : 0,
      }}
      style={{
        willChange: "transform",
        pointerEvents: "none",
      }}
    >
      {children}
    </motion.div>
  );
}
