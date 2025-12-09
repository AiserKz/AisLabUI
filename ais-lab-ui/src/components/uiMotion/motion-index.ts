import type { Transition } from "motion";

interface BaseMotionProps {
  duration?: number;
  delay?: number;
  className?: string;
  loop?: boolean;
  ease?:
    | "easeIn"
    | "easeOut"
    | "easeInOut"
    | "linear"
    | "anticipate"
    | "backIn"
    | "backOut"
    | "backInOut"
    | "circIn"
    | "circOut"
    | "circInOut";
}

interface MotionHelperOptions {
  trigger?: "hover" | "click" | "scroll" | "load";
  animationProps?: any;
  initialProps?: any;
  transition?: Transition;
  repeatType?: "reverse" | "loop" | "mirror";
  disabled?: boolean;
}

interface BaseViewProps {
  viewPercentage?: number;
  startPercentage?: number;
  className?: string;
}

const bgVariants = {
  default: "bg-base-200",
  primary: "bg-primary",
  secondary: "bg-secondary",
  accent: "bg-accent",
  info: "bg-info",
  success: "bg-success",
  warning: "bg-warning",
  error: "bg-error",
  ghost: "bg-transparent",
  neutral: "bg-neutral",
};

export function getMotionProps({
  trigger = "load",
  animationProps = {},
  initialProps = {},
  transition = {},
  repeatType = "reverse",
  disabled = false,
}: MotionHelperOptions) {
  if (disabled) return {};
  const motionTransition = { ...transition, repeatType };

  switch (trigger) {
    case "hover":
      return {
        whileHover: animationProps,
        transition: motionTransition,
      };
    case "click":
      return {
        whileTap: animationProps,
        transition: motionTransition,
      };
    case "scroll":
      return {
        initial: initialProps,
        whileInView: animationProps,
        viewport: { once: true },
        transition: motionTransition,
      };
    case "load":
      return {
        initial: initialProps,
        whileInView: animationProps,
        transition: motionTransition,
      };
    default:
      return {
        initial: initialProps,
        whileInView: animationProps,
        transition: motionTransition,
      };
  }
}
export { bgVariants };

export type { BaseMotionProps, BaseViewProps };
