import "../index.css";
import {
  bgVariants,
  roundedVariant,
  type AnimationBaseProps,
} from "../ui.types";

interface BorderBeamProps extends AnimationBaseProps {
  colorFrom?: string;
  colorTo?: string;

  count?: 2 | 4;
  glow?: boolean;
  glowOpacity?: number;
  thickness?: number;
  variant?: keyof typeof bgVariants;
  blur?: boolean;
  rounded?: keyof typeof roundedVariant;
}

export default function BorderBeam({
  children,
  className,
  duration = 15,
  colorFrom,
  colorTo,
  delay = 0,
  reverse = false,
  size = 10,
  count = 2,
  glow = false,
  glowOpacity = 0.4,
  thickness = 0,
  variant = "primary",
  blur = false,
  disabled = false,
  rounded = "default",
}: BorderBeamProps) {
  const renderBorder = (i: number) => {
    const angles = count === 4 ? [0, 90] : [0, 180];
    const angle = angles[i];

    return (
      <div
        key={i}
        className="absolute h-[1000%] w-full flex items-center justify-center"
        style={{
          animation: `rotate360 ${duration}s linear infinite ${delay}s 
          ${reverse ? "reverse" : ""}`,
          transformOrigin: "center",
        }}
      >
        <div
          className={`${bgVariants[variant]}`}
          style={{
            width: `calc(${size}px * 4)`,
            height: "100%",
            background:
              colorFrom && colorTo
                ? `conic-gradient(${colorFrom}, ${colorTo}, ${colorFrom})`
                : undefined,
            transform: `rotate(${angle}deg)`,
            transformOrigin: "center",
            filter: blur ? "blur(10px)" : undefined,
          }}
        />
      </div>
    );
  };

  const renderGlow = (i: number) => {
    const angles = count === 4 ? [0, 90] : [0, 180];
    const angle = angles[i];

    return (
      <div
        key={i}
        className="absolute h-[115%] flex items-center justify-center"
        style={{
          transformOrigin: "center",
          animation: `rotate360 ${duration}s linear infinite ${delay}s ${reverse ? "reverse" : ""
            }`,
          background: "transparent",
          filter: "blur(30px)",
        }}
      >
        <div
          className={`${bgVariants[variant]}`}
          style={{
            transform: `rotate(${angle}deg)`,
            transformOrigin: "center",
            width: `calc(${size}px * 4)`,
            height: "90%",
            background:
              colorFrom && colorTo
                ? `conic-gradient(${colorFrom}, ${colorTo}, ${colorFrom})`
                : undefined,
            opacity: glowOpacity,
          }}
        />
      </div>
    );
  };

  return (
    <div className={`relative p-px ${className}`}>
      {children}

      {!disabled && (
        <>
          {glow && (
            <div className="absolute inset-0 rounded pointer-events-none flex justify-center items-center z-[-1] fade-in-animation">
              {[...Array(count / 2)].map((_, i) => renderGlow(i))}
            </div>
          )}
          <div
            className={`absolute inset-0 pointer-events-none flex justify-center items-center z-[-1] fade-in-animation overflow-hidden
                ${roundedVariant[rounded]}
                `}
            style={{
              width: `calc(100% + ${thickness}px)`,
              height: `calc(100% + ${thickness}px)`,
              marginLeft: `-${thickness / 2}px`,
              marginTop: `-${thickness / 2}px`,
            }}
          >
            {[...Array(count / 2)].map((_, i) => renderBorder(i))}
          </div>
        </>
      )}
    </div>
  );
}
