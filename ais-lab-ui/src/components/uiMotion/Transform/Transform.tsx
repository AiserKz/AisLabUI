import { motion } from "framer-motion";
import { getMotionProps, type BaseMotionProps } from "../motion-index";

interface PulseProps extends BaseMotionProps {
  children?: React.ReactNode;
  power?: number;
  repeatType?: "reverse" | "loop" | "mirror";
  disabled?: boolean;
  trigger?: "hover" | "click" | "scroll" | "load";
  repeat?: boolean;
}

export function Pulse({
  children,
  delay = 0,
  duration = 1,
  power = 1.05,
  ease = "easeInOut",
  repeatType = "reverse",
  disabled = false,
  trigger = "hover",
  repeat = true,
  className,
}: PulseProps) {
  if (disabled) return <div className={className}>{children}</div>;
  const motionProps = getMotionProps({
    trigger,
    animationProps: { scale: power },
    initialProps: { scale: 1 },
    transition: {
      delay,
      duration,
      ease: ease,
      repeat: repeat ? Infinity : 0,
      repeatType: repeatType,
    },
    disabled,
  });
  return (
    <motion.div {...motionProps} className={className}>
      {children}
    </motion.div>
  );
}

export function Bounce({
  children,
  delay = 0,
  duration = 1,
  power = -10,
  ease = "linear",
  repeatType = "reverse",
  disabled = false,
  trigger = "hover",
  repeat = true,
  className,
}: PulseProps) {
  if (disabled) return <div className={className}>{children}</div>;
  const motionProps = getMotionProps({
    trigger,
    animationProps: { y: power },

    transition: {
      delay,
      duration,
      ease: ease,
      repeat: repeat ? Infinity : 0,
      repeatType: repeatType,
    },
    disabled,
  });

  return (
    <motion.div {...motionProps} className={className}>
      {children}
    </motion.div>
  );
}

export function Rotate({
  children,
  delay = 0,
  duration = 10,
  power = 360,
  ease = "linear",
  repeatType = "loop",
  disabled = false,
  trigger = "hover",
  repeat = true,
  className,
}: PulseProps) {
  if (disabled) return <div className={className}>{children}</div>;
  const motionProps = getMotionProps({
    trigger,
    animationProps: { rotate: power },

    transition: {
      delay,
      duration,
      ease: ease,
      repeat: repeat ? Infinity : 0,
      repeatType: repeatType,
    },
    disabled,
  });
  return (
    <motion.div {...motionProps} className={className}>
      {children}
    </motion.div>
  );
}

export function Float({
  children,
  delay = 0,
  duration = 5,
  power = 20,
  ease = "linear",
  repeatType = "reverse",
  disabled = false,
  trigger = "load",
  repeat = true,
  className,
}: PulseProps) {
  if (disabled) return <div className={className}>{children}</div>;
  const motionProps = getMotionProps({
    trigger,
    animationProps: { y: [0, power, 0], rotate: [-5, 5, -5] },
    transition: {
      delay,
      duration,
      ease: ease,
      repeat: repeat ? Infinity : 0,
      repeatType: repeatType,
    },
    disabled,
  });
  return (
    <motion.div {...motionProps} className={className}>
      {children}
    </motion.div>
  );
}

export function Shake({
  children,
  delay = 1,
  duration = 0.5,
  power = 5,
  ease = "easeInOut",
  repeatType = "mirror",
  disabled = false,
  trigger = "hover",
  repeat = true,
  className,
}: PulseProps) {
  if (disabled) return <div className={className}>{children}</div>;
  const motionProps = getMotionProps({
    trigger,
    animationProps: { x: [0, power, -power, 0] },
    initialProps: { x: 0 },
    transition: {
      delay,
      duration,
      ease: ease,
      repeat: repeat ? Infinity : 0,
      repeatType: repeatType,
    },
    disabled,
  });
  return (
    <motion.div {...motionProps} className={className}>
      {children}
    </motion.div>
  );
}

export function Flip({
  children,
  delay = 2,
  duration = 2,
  power = 180,
  ease = "easeInOut",
  repeatType = "reverse",
  disabled = false,
  trigger = "load",
  repeat = true,
  direction = "vertical",
  className,
}: PulseProps & { direction?: "horizontal" | "vertical" }) {
  if (disabled) return <div className={className}>{children}</div>;

  const motionProps = getMotionProps({
    trigger,
    animationProps:
      direction === "horizontal" ? { rotateY: power } : { rotateX: power },
    initialProps: direction === "horizontal" ? { rotateY: 0 } : { rotateX: 0 },
    transition: {
      delay,
      duration,
      ease: ease,
      repeat: repeat ? Infinity : 0,
      repeatType: repeatType,
    },
    disabled,
  });
  return (
    <motion.div {...motionProps} className={className}>
      {children}
    </motion.div>
  );
}
