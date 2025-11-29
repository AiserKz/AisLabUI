import { glassVariants } from "../ui.types";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  variant?: keyof typeof bgVariants;
  glass?: boolean;
  rounded?: boolean;
  shadow?: boolean;
  only?: boolean;
  className?: string;
}

const bgVariants = {
  default: "bg-base-200",
  primary: "bg-primary/40",
  success: "bg-success/40",
  warning: "bg-warning/40",
  error: "bg-error/40",
  accent: "bg-accent/40",
};

const borderVariants = {
  default: "border-base-300",
  primary: "border-primary/60",
  success: "border-success/60",
  warning: "border-warning/60",
  error: "border-error/60",
  accent: "border-accent/60",
};

const shadowColor = {
  default: "shadow-base-200",
  primary: "shadow-primary/40",
  success: "shadow-success/40",
  warning: "shadow-warning/40",
  error: "shadow-error/40",
  accent: "shadow-accent/40",
};

export default function Accordion({
  title,
  children,
  variant = "default",
  glass = false,
  rounded = true,
  shadow = false,
  only = false,
  className = "",
}: AccordionProps) {
  const bgClass = glass
    ? `backdrop-blur-[3px] inset-shadow-[0_0_5px] border-t border-l  ${glassVariants[variant]}`
    : bgVariants[variant];

  return (
    <div
      className={`border collapse collapse-arrow overflow-hidden
        ${bgClass}
        ${borderVariants[variant]} 
        ${rounded ? "rounded-lg" : ""} 
        ${shadow && `shadow-[0_0_15px] ${shadowColor[variant]}`} 
        ${className}
        `}
    >
      <input
        type={only ? "radio" : "checkbox"}
        name="my-accordion"
        defaultChecked
      />
      <span className="collapse-title">{title}</span>
      <div className="collapse-content">{children}</div>
    </div>
  );
}
