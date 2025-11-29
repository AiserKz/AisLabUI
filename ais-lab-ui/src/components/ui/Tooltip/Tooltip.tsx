interface TooltipProps {
  value?: string;
  variant?: keyof typeof variants;
  position?: keyof typeof positions;
  isOpen?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const variants = {
  default: "",
  primary: "tooltip-primary",
  secondary: "tooltip-secondary",
  accent: "tooltip-accent",
  info: "tooltip-info",
  success: "tooltip-success",
  warning: "tooltip-warning",
  error: "tooltip-error",
  neutral: "tooltip-neutral",
};

const positions = {
  top: "tooltip-top",
  bottom: "tooltip-bottom",
  left: "tooltip-left",
  right: "tooltip-right",
};

export default function Tooltip({
  value,
  variant = "default",
  position = "top",
  isOpen = false,
  className = "",
  children,
  ...props
}: TooltipProps) {
  return (
    <div
      className={`tooltip ${positions[position]} ${
        variants[variant]
      } ${className} ${isOpen && "tooltip-open"}`}
      data-tip={value}
      {...props}
    >
      {children}
    </div>
  );
}
