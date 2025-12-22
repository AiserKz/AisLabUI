interface ModalProps {
  id?: string | number;
  variant?: keyof typeof variants;
  shadow?: boolean;
  isOpen?: boolean;
  onClose?: () => void;
  position?: keyof typeof positions;
  blur?: boolean;
  glass?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const positions = {
  top: "modal-top",
  center: "modal-middle",
  bottom: "modal-bottom",
  left: "modal-start",
  right: "modal-end",
};

const variants = {
  default: "",
  primary: "bg-primary",
  secondary: "bg-secondary",
  accent: "bg-accent",
  info: "bg-info",
  success: "bg-success",
  warning: "bg-warning",
  error: "bg-error",
  neutral: "bg-neutral",
};
const glassVariants = {
  default: "bg-base-200/80",
  primary: "bg-primary/60",
  secondary: "bg-secondary/60",
  accent: "bg-accent/60",
  info: "bg-info/60",
  success: "bg-success/60",
  warning: "bg-warning/60",
  error: "bg-error/60",
  neutral: "bg-neutral/60",
};

const shadowVariants = {
  default: "",
  primary: "shadow-primary/60 border-primary/80",
  secondary: "shadow-secondary/60 border-secondary/80",
  accent: "shadow-accent/60 border-accent/80",
  info: "shadow-info/60 border-info/80",
  success: "shadow-success/60 border-success/80",
  warning: "shadow-warning/60 border-warning/80",
  error: "shadow-error/60 border-error/80",
  neutral: "shadow-neutral/60 border-neutral/80",
};

export default function Modal({
  id = "my_modal",
  variant = "default",
  shadow = false,
  isOpen = false,
  onClose,
  position = "center",
  blur = false,
  glass = false,
  className,
  children,
}: ModalProps) {
  const shadowClass = shadow ? shadowVariants[variant] : "";
  const bgClass = glass ? glassVariants[variant] : variants[variant];

  return (
    <div
      id={id?.toString()}
      className={`modal backdrop-brightness-50 
            ${positions[position]} 
            ${blur && "backdrop-blur-sm"}
            ${isOpen && "modal-open"}`}
      role="dialog"
    >
      <div
        className={`modal-box
                ${shadow && `shadow-[0_0_20px] ${shadowClass} border`}
                ${bgClass}
                ${className} `}
      >
        {onClose && (
          <button
            onClick={onClose}
            className="px-2 py-1 hover:bg-white/10 rounded-full  hover:scale-105 transition-all duration-300 absolute right-2 top-2"
          >
            ✕
          </button>
        )}

        {children}
      </div>
      <label
        htmlFor={id?.toString()}
        className="modal-backdrop"
        onClick={onClose}
      ></label>
    </div>
  );
}
