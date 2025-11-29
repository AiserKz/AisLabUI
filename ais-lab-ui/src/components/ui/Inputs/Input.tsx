import type React from "react";
import { ringVariants } from "../ui.types";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
  error?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  className?: string;
  variant?: keyof typeof variants;
  ringVariant?: keyof typeof ringVariants;
  sizes?: keyof typeof size;
}

const variants = {
  default: "",
  primary: "input-primary",
  secondary: "input-secondary",
  accent: "input-accent",
  info: "input-info",
  success: "input-success",
  warning: "input-warning",
  error: "input-error",
  ghost: "input-ghost",
  neutral: "input-neutral",
  outline: "input-outline",
};

const size = {
  xs: "input-xs",
  sm: "input-sm",
  md: "input-md",
  lg: "input-lg",
  xl: "input-xl",
};

export function Input({
  label,
  error,
  iconLeft,
  iconRight,
  className = "",
  variant = "default",
  ringVariant,
  sizes = "md",
  ...props
}: InputProps) {
  const hasLeft = !!iconLeft;
  const hasRight = !!iconRight;

  return (
    <div className={`form-control`}>
      {label && (
        <label className="label">
          <span className="label-text text-sm">
            {label?.charAt(0).toUpperCase() + label?.slice(1)}
          </span>
        </label>
      )}

      <div className="relative w-full">
        {hasLeft && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-base opacity-80 z-10">
            {iconLeft}
          </span>
        )}

        <input
          {...props}
          className={`input w-full focus:outline-none focus:ring-1 ring-0 transition-all duration-300
            ${ringVariants[ringVariant || variant]} 
            ${className} 
            ${variants[variant]} 
            ${size[sizes]} 
            ${hasLeft ? "pl-10" : ""} 
            ${hasRight ? "pr-10" : ""} 
            ${error ? "input-error" : ""}`}
        />

        {hasRight && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-base opacity-80 z-10">
            {iconRight}
          </span>
        )}
      </div>

      {error && (
        <label className="label">
          <span className="label-text-alt text-error">{error}</span>
        </label>
      )}
    </div>
  );
}

interface InputFileProps extends InputProps {
  variant?: keyof typeof variantsFile;
  sizes?: keyof typeof sizeFile;
}

const variantsFile = {
  default: "",
  primary: "file-input-primary",
  secondary: "file-input-secondary",
  accent: "file-input-accent",
  info: "file-input-info",
  success: "file-input-success",
  warning: "file-input-warning",
  error: "file-input-error",
  ghost: "file-input-ghost",
  neutral: "file-input-neutral",
};

const sizeFile = {
  xs: "file-input-xs",
  sm: "file-input-sm",
  md: "file-input-md",
  lg: "file-input-lg",
  xl: "file-input-xl",
};

export function InputFile({
  label,
  description,
  error,
  className = "",
  variant = "default",
  sizes = "md",
}: InputFileProps) {
  return (
    <div className="fieldset">
      <legend className="fieldset-legend ">{label}</legend>
      <input
        type="file"
        className={`file-input 
          ${className} 
          ${variantsFile[variant]} 
          ${sizeFile[sizes]} `}
      />
      <div className="overflow-hidden">
        <label className="label gap-4">{description}</label>
        {error && <span className="label-text-alt text-error">{error}</span>}
      </div>
    </div>
  );
}

export default Input;
