interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  outlined?: boolean;
  dashed?: boolean;
  soft?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const variants = {
  default: "",
  primary: "badge-primary",
  secondary: "badge-secondary",
  accent: "badge-accent",
  info: "badge-info",
  success: "badge-success",
  warning: "badge-warning",
  error: "badge-error",
  neutral: "badge-neutral",
  ghost: "badge-ghost",
};

const sizes = {
  xs: "badge-xs",
  sm: "badge-sm",
  md: "badge-md",
  lg: "badge-lg",
  xl: "badge-xl",
};

export default function Badge({
  label,
  variant = "default",
  size = "md",
  outlined = false,
  dashed = false,
  soft = false,
  className = "",
  children,
}: BadgeProps) {
  return (
    <div
      className={`badge 
    ${outlined && "badge-outline"}
    ${dashed && "badge-dash"}
    ${soft && "badge-soft"}
    ${variants[variant]} 
    ${sizes[size]} 
    ${className} `}
    >
      {label} {children}
    </div>
  );
}
