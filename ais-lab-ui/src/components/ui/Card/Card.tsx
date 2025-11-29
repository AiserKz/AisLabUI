import type React from "react";
import { bgVariants, glassVariants, textBgContent } from "../ui.types";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof bgVariants;
  shadow?: boolean;
  padding?: keyof typeof paddingVariants;
  dashed?: boolean;
  hover3d?: boolean;
  glass?: boolean;
  src?: string;
  overlay?: keyof typeof overlayVariants;
}

const paddingVariants = {
  xs: "p-1",
  sm: "p-2",
  md: "p-4",
  lg: "p-6",
  xl: "p-8",
  "2xl": "p-10",
  "3xl": "p-12",
};

const overlayVariants = {
  none: "",
  xs: "bg-black/10",
  sm: "bg-black/20",
  md: "bg-black/30",
  lg: "bg-black/40",
  xl: "bg-black/50",
  "2xl": "bg-black/60",
  "3xl": "bg-black/70",
  "4xl": "bg-black/80",
  "5xl": "bg-black/90",
};

export function Card({
  variant = "default",
  children,
  className = "bg-base-300",
  shadow = true,
  padding = "md",
  dashed = false,
  hover3d = false,
  glass = false,
  src,
  overlay = "md",
  ...props
}: CardProps) {
  const renderCard = () => {
    const bgClass = glass
      ? `backdrop-blur-[3px] inset-shadow-[0_0_5px] border-t border-l  ${glassVariants[variant]}`
      : bgVariants[variant];

    return (
      <div
        className={`card
              ${shadow ? "shadow-md" : ""} 
              ${bgClass}
              ${textBgContent[variant]}
              ${paddingVariants[padding]} 
              ${className} 
              ${dashed && "card-dash"}
              `}
        style={
          src
            ? {
                backgroundImage: `url(${src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : {}
        }
        {...props}
      >
        {src && (
          <div
            className={`absolute inset-0 ${overlayVariants[overlay]} rounded-2xl pointer-events-none`}
          />
        )}

        <div className="relative z-10">{children}</div>
      </div>
    );
  };

  return (
    <>
      {hover3d ? (
        <div className="hover-3d w-full">
          <figure className="rounded-2xl">{renderCard()}</figure>

          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i}></div>
          ))}
        </div>
      ) : (
        renderCard()
      )}
    </>
  );
}

export default Card;
