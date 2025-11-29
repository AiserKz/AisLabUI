interface LoadingProps {
  size?: keyof typeof sizes;
  variant?: keyof typeof variants;
  type?: keyof typeof types;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const sizes = {
  xs: "loading-xs",
  sm: "loading-sm",
  md: "loading-md",
  lg: "loading-lg",
  xl: "loading-xl",
};

const variants = {
  default: "",
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
  info: "text-info",
  success: "text-success",
  warning: "text-warning",
  error: "text-error",
};

const types = {
  spinner: "loading-spinner",
  dots: "loading-dots",
  bars: "loading-bars",
  ring: "loading-ring",
  ball: "loading-ball",
  infinity: "loading-infinity",
};

export default function Loading({
  size = "md",
  variant = "default",
  type = "spinner",
  className = "",
  children,
  style,
}: LoadingProps) {
  return (
    <div
      className={`${className} flex flex-col items-center justify-center`}
      style={style}
    >
      <span
        className={`loading ${sizes[size]} ${variants[variant]} ${types[type]}`}
      ></span>
      {children && (
        <div className="mt-1 skeleton skeleton-text">{children}</div>
      )}
    </div>
  );
}
