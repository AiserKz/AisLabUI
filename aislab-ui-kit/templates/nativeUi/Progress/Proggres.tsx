interface ProgressProps extends React.HTMLAttributes<HTMLProgressElement> {
  variant?: keyof typeof variants;
  value?: number;
  min?: number;
  max?: number;
  label?: string;
  showLabel?: boolean;
  className?: string;
}

const variants = {
  default: "",
  primary: "progress-primary",
  secondary: "progress-secondary",
  accent: "progress-accent",
  info: "progress-info",
  success: "progress-success",
  warning: "progress-warning",
  error: "progress-error",
};

export default function Progress({
  variant = "default",
  value,
  min,
  max = 100,
  label,
  showLabel,
  className,
  ...props
}: ProgressProps) {
  return (
    <div className="m-0">
      {showLabel && (
        <div className="flex justify-between text-xs text-base-content/60 gap-4">
          <span>{label}</span>
          <span>{value || 0}%</span>
        </div>
      )}
      <progress
        value={value}
        max={max}
        className={`progress 
        ${variants[variant]} 
        ${className}
        `}
        {...props}
      />
    </div>
  );
}

const radialVariants = {
  default: "",
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
  info: "text-info",
  success: "text-success",
  warning: "text-warning",
  error: "text-error",
};

export function RadialProgress({
  value = 0,
  variant = "default",
  className,
}: ProgressProps) {
  return (
    <div
      className={`radial-progress transition-all ${radialVariants[variant]} ${className}`}
      style={{ "--value": value } as React.CSSProperties}
      aria-valuenow={value}
      role="progressbar"
    >
      {value}%
    </div>
  );
}
