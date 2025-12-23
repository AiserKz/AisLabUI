import type React from "react";

interface TagsProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  children?: React.ReactNode;
}

const variants = {
  default: "hover:border-base-200 hover:shadow-base-200/20",
  primary: "hover:border-primary hover:shadow-primary/20",
  info: "hover:border-info hover:shadow-info/20",
  accent: "hover:border-accent hover:shadow-accent/20",
  success: "hover:border-success hover:shadow-success/20",
  warning: "hover:border-warning hover:shadow-warning/20",
  error: "hover:border-error hover:shadow-error/20",
};

const sizes = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg",
  xl: "text-xl",
};

export default function Tags({
  variant = "default",
  size = "md",
  className,
  children,
  ...props
}: TagsProps) {
  return (
    <div
      className={`px-4 py-2 bg-base-300 border rounded-full cursor-pointer 
        border-white/10 transition-all duration-300 
        hover:scale-105 hover:shadow-[0_0_20px] 
        text-sm text-center w-fit
        ${variants[variant]}
        ${sizes[size]}
        ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
