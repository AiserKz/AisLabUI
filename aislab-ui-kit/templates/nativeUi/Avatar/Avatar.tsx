import { bgVariants, masks, ringVariants, textBgContent } from "../ui.types";

interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  src?: string;
  variant?: keyof typeof bgVariants;
  size?: keyof typeof sizes;
  indicator?: boolean;
  online?: boolean;
  ring?: boolean;
  ringVariant?: keyof typeof ringVariants;
  rounded?: boolean;
  mask?: keyof typeof masks;
  className?: string;
  children?: React.ReactNode;
}

const sizes = {
  xs: "w-8",
  sm: "w-12",
  md: "w-16",
  lg: "w-20",
  xl: "w-32",
};

export default function Avatar({
  label,
  src,
  variant = "default",
  size = "md",
  indicator,
  online = false,
  ring = false,
  ringVariant = "primary",
  rounded = false,
  mask = "none",
  className = "",
  children,
}: TooltipProps) {
  return (
    <div className={`avatar relative`}>
      <div
        className={`mask
        ${indicator && (online ? "avatar-online" : "avatar-offline")}
        ${rounded ? "rounded-full" : "rounded-field"}
        ${masks[mask]} 
        ${sizes[size]}
        ${className}
        ${
          ring &&
          `ring ${ringVariants[ringVariant]} ring-2 ring-offset-2 ring-offset-base-100`
        }`}
      >
        {src ? (
          <img src={src} alt={label} />
        ) : (
          <div
            className={`flex items-center justify-center h-full w-full text-xl font-bold ${textBgContent[variant]} ${bgVariants[variant]}`}
          >
            {label ? label.slice(0, 2).toUpperCase() : "A"}
          </div>
        )}
      </div>
      {children}
    </div>
  );
}
