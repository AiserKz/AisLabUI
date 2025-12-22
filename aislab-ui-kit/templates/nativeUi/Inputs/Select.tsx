import type React from "react";
import { ringVariants } from "../ui.types";

interface Option {
  value: string;
  label: string;
  disabled?: boolean;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  description?: string;
  error?: string;
  icon?: React.ReactNode;
  options?: Option[];
  variant?: keyof typeof variants;
  ringVariant?: keyof typeof ringVariants;
  sizes?: keyof typeof size;
  className?: string;
}

const variants = {
  primary: "select-primary",
  secondary: "select-secondary",
  accent: "select-accent",
  info: "select-info",
  success: "select-success",
  warning: "select-warning",
  error: "select-error",
  ghost: "select-ghost",
  neutral: "select-neutral",
};

const size = {
  xs: "select-xs",
  sm: "select-sm",
  md: "select-md",
  lg: "select-lg",
  xl: "select-xl",
};

export function Select({
  label,
  description,
  error,
  icon,
  options = [],
  variant = "neutral",
  ringVariant,
  sizes = "md",
  className = "",
  children,
  ...props
}: SelectProps) {
  const hasIcon = !!icon;

  return (
    <fieldset className={`fieldset ${className}`}>
      {label && (
        <legend className="fieldset-legend">
          {label?.charAt(0).toUpperCase() + label?.slice(1)}
        </legend>
      )}

      <div className="relative">
        <select
          {...props}
          className={`select w-full outline-none hover:ring-2 ring-0 transition-all duration-300
            ${ringVariants[ringVariant || variant]}
            ${hasIcon ? "pr-10" : ""} 
            ${variants[variant]} 
            ${size[sizes]}
            ${error ? "select-error" : ""}`}
        >
          {options.length > 0
            ? options.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))
            : children}
        </select>

        {hasIcon && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 opacity-80">
            {icon}
          </span>
        )}
      </div>
      {description && <span className="label">{description}</span>}
      {error && (
        <label className="label">
          <span className="label-text-alt text-error">{error}</span>
        </label>
      )}
    </fieldset>
  );
}

export default Select;
