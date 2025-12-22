interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof variants;
  outlined?: boolean;
  dashed?: boolean;
  soft?: boolean;
  Icon?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

const variants = {
  default: "",
  info: "alert-info",
  success: "alert-success",
  warning: "alert-warning",
  error: "alert-error",
};

export default function Alert({
  variant = "default",
  outlined = false,
  dashed = false,
  soft = false,
  Icon,
  className,
  children,
  ...props
}: AlertProps) {
  return (
    <div
      className={`alert 
        ${outlined && "alert-outline"}
        ${dashed && "alert-dash"}
        ${soft && "alert-soft"}
        ${variants[variant]} 

        ${className} `}
      {...props}
    >
      {Icon && Icon}
      {children}
    </div>
  );
}
