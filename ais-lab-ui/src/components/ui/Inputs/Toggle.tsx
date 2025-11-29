import type React from "react";

interface ToggleProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  rightLabel?: boolean;
  variant?: keyof typeof variants;
  sizes?: keyof typeof size;
  icon?: React.ReactNode;
  className?: string;
}

const size = {
  xs: "toggle-xs",
  sm: "toggle-sm",
  md: "toggle-md",
  lg: "toggle-lg",
  xl: "toggle-xl",
};

const variants = {
  primary: "toggle-primary",
  secondary: "toggle-secondary",
  accent: "toggle-accent",
  info: "toggle-info",
  success: "toggle-success",
  warning: "toggle-warning",
  error: "toggle-error",
  neutral: "toggle-neutral",
};

export default function Toggle({
  label,
  rightLabel,
  variant = "neutral",
  sizes = "md",
  icon: Icon,
  className = "",
  ...props
}: ToggleProps) {
  return (
    <div className="flex space-x-2">
      {!rightLabel && (
        <>
          {label && <span>{label}</span>}
          {Icon && Icon}
        </>
      )}
      <input
        type="checkbox"
        defaultChecked
        className={`toggle ${variants[variant]} `}
        {...props}
      />

      {rightLabel && (
        <>
          {label && <span>{label}</span>}
          {Icon && Icon}
        </>
      )}
    </div>
  );
}
