interface DivinderProps {
  variant?: keyof typeof variants;
  vertical?: boolean;
  position?: keyof typeof positions;
  className?: string;
  children?: React.ReactNode;
}

const variants = {
  default: "",
  primary: "divider-primary",
  secondary: "divider-secondary",
  accent: "divider-accent",
  neutral: "divider-neutral",
  info: "divider-info",
  success: "divider-success",
  warning: "divider-warning",
  error: "divider-error",
};

const positions = {
  start: "divider-start",
  center: "",
  end: "divider-end",
};

export default function Divider({
  variant = "default",
  vertical = false,
  position = "center",
  className = "",
  children,
  ...props
}: DivinderProps) {
  return (
    <div
      className={`divider ${positions[position]} ${
        vertical ? "divider-horizontal" : "divider-vertical"
      } ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
