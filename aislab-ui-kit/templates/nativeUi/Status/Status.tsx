interface StatusProps {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  animation?: boolean;
  bounce?: boolean;
  className?: string;
}

const variants = {
  default: "",
  neutral: "status-neutral",
  primary: "status-primary",
  secondary: "status-secondary",
  accent: "status-accent",
  info: "status-info",
  success: "status-success",
  warning: "status-warning",
  error: "status-error",
};

const sizes = {
  xs: "status-xs",
  sm: "status-sm",
  md: "status-md",
  lg: "status-lg",
  xl: "status-xl",
};

export default function Status({
  variant = "default",
  size = "md",
  animation = false,
  bounce = false,
  className = "",
}: StatusProps) {
  return (
    <div
      className={`inline-grid *:[grid-area:1/1] ${className} ${
        bounce && "animate-bounce"
      }`}
    >
      <div className={`status ${variants[variant]} ${sizes[size]} `}></div>
      {animation && (
        <div
          className={`status ${variants[variant]} ${sizes[size]} animate-ping `}
        ></div>
      )}
    </div>
  );
}
