import type React from "react";
import "../index.css";
import { type AnimationBaseProps, bgVariants } from "../ui.types";

interface ShadowBeamProps extends AnimationBaseProps {
  variant?: keyof typeof bgVariants | "rainbow";
  animationType?: keyof typeof animationTypes;
  colors?: string[];
}

const shadowVariants: Record<string, string> = {
  primary: "shadow-[0_0_5px_10px] shadow-primary/60",
  secondary: "shadow-[0_0_4px_8px] shadow-secondary/50",
  info: "shadow-[0_0_5px_10px] shadow-info/60",
  success: "shadow-[0_0_5px_10px] shadow-success/60",
  warning: "shadow-[0_0_5px_10px] shadow-warning/60",
  error: "shadow-[0_0_5px_10px] shadow-error/60",
};

const animationTypes = {
  rotate: "breathe",
  pulse: "pulse",
};

const ShadowBeam = ({
  variant = "primary",
  colors,
  animationType = "rotate",
  size = 8,
  duration = 10,
  delay = 0,
  reverse = false,
  disabled = false,
  className,
  children,
}: ShadowBeamProps) => {
  const isRainbow = variant === "rainbow" || (!!colors && colors.length > 0);

  const rainBowColors = colors || [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
    "red",
  ];

  const animatedGradient = `linear-gradient(
    10deg,
    var(--color-${variant}) 0%,
    rgba(0,0,0,0.1) 10%,
    var(--color-${variant}) 20%,
    rgba(0,0,0,0.1) 30%,
    var(--color-${variant}) 40%,
    rgba(0,0,0,0.1) 50%,
    var(--color-${variant}) 60%,
    rgba(0,0,0,0.1) 70%,
    var(--color-${variant}) 80%,
    rgba(0,0,0,0.1) 90%,
    var(--color-${variant}) 100%
)`;

  return (
    <div className={`relative ${className}`}>
      {children}
      {!disabled && (
        <div
          className={`absolute inset-0 pointer-events-none rounded-md z-[-1] 
            ${!isRainbow && shadowVariants[variant]}
            `}
          style={
            {
              "--target-opacity": size / 10,
              backgroundImage: isRainbow
                ? `conic-gradient(from 0deg, ${rainBowColors.join(", ")})`
                : animatedGradient,

              filter: isRainbow ? "blur(30px)" : "blur(15px)",
              animation: `${animationTypes[animationType]} ${duration}s linear 
                ${reverse ? "reverse" : ""} ${delay}s infinite, 
                fadeIn 1s ease-out forwards,
                pulseGlow 20s ease-in-out infinite
                `,

              opacity: size / 10,
              backgroundSize: "200% 100%",
            } as React.CSSProperties
          }
        />
      )}
    </div>
  );
};

export default ShadowBeam;
