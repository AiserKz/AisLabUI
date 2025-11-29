import type React from "react";

interface SliderProps extends React.HTMLAttributes<HTMLInputElement> {
  value?: number;
  variant?: keyof typeof varitants;
  size?: keyof typeof sizes;
  min?: number;
  max?: number;
  step?: number;
  className?: string;
}

const varitants = {
  default: "",
  primary: "range-primary",
  secondary: "range-secondary",
  accent: "range-accent",
  info: "range-info",
  success: "range-success",
  warning: "range-warning",
  error: "range-error",
  neutral: "range-neutral",
};

const sizes = {
  xs: "range-xs",
  sm: "range-sm",
  md: "range-md",
  lg: "range-lg",
  xl: "range-xl",
};

export default function Slider({
  value,
  variant = "default",
  size = "xs",
  min = 0,
  max = 100,
  step = 1,
  className,
  ...props
}: SliderProps) {
  return (
    <input
      type="range"
      {...(value !== undefined ? { value: value } : { defaultValue: 0 })}
      min={min}
      max={max}
      step={step}
      className={`range ${varitants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  );
}
