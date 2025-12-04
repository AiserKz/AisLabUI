import "../index.css";
import { bgVariants, type AnimationBaseProps } from "../ui.types";

interface BorderBeamProps extends AnimationBaseProps {
  colorCustom?: string[];

  count?: 2 | 4;
  glow?: boolean;
  glowOpacity?: number;
  thickness?: number;
  variant?: keyof typeof bgVariants;
  blur?: boolean;
}

export default function BorderBeam({
  children,
  className,
  duration = 15,
  colorCustom,
  delay = 0,
  reverse = false,
  size = 20,
  count = 2,
  glow = false,
  glowOpacity = 0.6,
  thickness = 0,
  variant = "primary",
  blur = false,
  disabled = false,
}: BorderBeamProps) {
  if (disabled) return <div className={className}>{children}</div>;

  const countLines = count;
  const colors =
    colorCustom?.slice(0, countLines) ||
    Array(countLines).fill("var(--current-color)");
  const gap = 10;
  const segment = 360 / countLines;

  const gapAngle = Math.min(gap, segment - 1);
  let gradientParts: string[] = [];

  colors.forEach((color, i) => {
    const start = segment * i;

    const lineLengthAngle = (segment - gapAngle) * (size / 100);
    gradientParts.push(`${color} ${start}deg ${start + lineLengthAngle}deg`);
    gradientParts.push(
      `transparent ${start + lineLengthAngle}deg ${start + segment}deg`
    );
  });

  const gradientString = `conic-gradient(from var(--deg) at center, 
  ${gradientParts.join(", ")})`;

  return (
    <div
      className={`relative ${className} p-1 animated-border ${
        glow ? "" : "no-glow"
      } `}
      style={
        {
          "--border_size": `-${thickness}px`,
          "--current-color": `var(--color-${variant})`,
          "--glow-opacity": glow ? glowOpacity : 0,
          "--background-gradient": gradientString,
          "--blur-border": blur ? "2.5px" : "0px",
          animation: `autoRotate ${duration}s linear infinite ${delay}s ${
            reverse ? "reverse" : ""
          }`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
