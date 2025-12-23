interface IndicatorProps extends React.HTMLAttributes<HTMLSpanElement> {
  value?: any;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  position?: keyof typeof positions;
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
};

const sizes = {
  xs: "badge-xs",
  sm: "badge-sm",
  md: "badge-md",
  lg: "badge-lg",
  xl: "badge-xl",
};

const positions = {
  topStart: "indicator-top indicator-start",
  topCenter: "indicator-top indicator-center",
  topEnd: "indicator-top indicator-end",
  centerStart: "indicator-middle indicator-start",
  center: "indicator-middle indicator-center",
  centerEnd: "indicator-middle indicator-end",
  bottomStart: "indicator-bottom indicator-start",
  bottomCenter: "indicator-bottom indicator-center",
  bottomEnd: "indicator-bottom indicator-end",
};

export default function Indicator({
  value,
  variant = "default",
  size = "xs",
  position = "topEnd",
  className = "",
  children,
  ...props
}: IndicatorProps) {
  return (
    <div className="indicator">
      <span
        className={`indicator-item badge ${variants[variant]} ${sizes[size]} ${className} ${positions[position]}`}
        {...props}
      >
        {value}
      </span>
      {children}
    </div>
  );
}
