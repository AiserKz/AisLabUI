import type React from "react";
import { ringVariants } from "../ui.types";

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  variant?: keyof typeof variants;
  ringVariant?: keyof typeof ringVariants;
  sizes?: keyof typeof size;
  disabled?: boolean;
  className?: string;
}

const variants = {
  primary: "radio-primary",
  secondary: "radio-secondary",
  accent: "radio-accent",
  info: "radio-info",
  success: "radio-success",
  warning: "radio-warning",
  error: "radio-error",
  neutral: "radio-neutral",
};

const size = {
  xs: "radio-xs",
  sm: "radio-sm",
  md: "radio-md",
  lg: "radio-lg",
  xl: "radio-xl",
};

export function Radio({
  label,
  variant = "neutral",
  ringVariant,
  sizes = "md",
  disabled = false,
  className = "",
  ...props
}: RadioProps) {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="radio"
        disabled={disabled}
        className={`radio  ring-0 transition-all duration-300
        ${!disabled && "hover:ring-2"}
        ${ringVariants[ringVariant || variant]}
        ${variants[variant]}
        ${size[sizes]}
        ${className}`}
        {...props}
      />
      {label && <span>{label}</span>}
    </label>
  );
}

export default Radio;
