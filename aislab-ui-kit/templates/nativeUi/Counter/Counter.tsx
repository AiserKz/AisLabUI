interface CounterProps {
  value: number;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
}

const sizes = {
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
  "6xl": "text-6xl",
  "7xl": "text-7xl",
  "8xl": "text-8xl",
  "9xl": "text-9xl",
};

const variants = {
  default: "text-base-content",
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
  info: "text-info",
  success: "text-success",
  warning: "text-warning",
  error: "text-error",
  ghost: "text-ghost",
  neutral: "text-neutral",
};

export default function Counter({
  value,
  variant = "default",
  size = "xl",
}: CounterProps) {
  return (
    <span className={`countdown font-mono ${sizes[size]} ${variants[variant]}`}>
      <span
        style={{ "--value": value, "--digits": 2 } as React.CSSProperties}
        aria-live="polite"
        aria-label={value.toString()}
      >
        {value}
      </span>
    </span>
  );
}
