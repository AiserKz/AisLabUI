import type React from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  variant?: keyof typeof variants;
  sizes?: keyof typeof size;
  rounded?: boolean;
  className?: string;
}

const variants = {
  default: "",
  primary: "checkbox-primary",
  secondary: "checkbox-secondary",
  accent: "checkbox-accent",
  neutral: "checkbox-neutral",
  success: "checkbox-success",
  warning: "checkbox-warning",
  info: "checkbox-info",
  error: "checkbox-error",
};

const size = {
  xs: "checkbox-xs",
  sm: "checkbox-sm",
  md: "checkbox-md",
  lg: "checkbox-lg",
  xl: "checkbox-xl",
};

export function Checkbox({
  label,
  sizes = "md",
  variant = "default",
  rounded = false,
  className = "",
  ...props
}: CheckboxProps) {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        className={`checkbox
            ${size[sizes]}
            ${variants[variant]}
            ${rounded && "rounded-full"}
            ${className}`}
        {...props}
      />
      {label && <span>{label}</span>}
    </label>
  );
}

export default Checkbox;
