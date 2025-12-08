import type { BaseViewProps } from "../motion-index";

interface SvgTextAnimationProps extends BaseViewProps {
  svg: React.ReactNode;
  glow?: boolean;
}

export default function SvgTextAnimation({
  svg,
  viewPercentage = 70,
  startPercentage = 0,
  glow = false,
  className,
}: SvgTextAnimationProps) {
  return (
    <div
      className={`motion-text-svg ${className} `}
      style={
        {
          "--filter-svg": glow
            ? "drop-shadow(0 0 2px var(--color-base-content))"
            : "",
          "--view-option": `view(${viewPercentage}% ${startPercentage}%)`,
          animationTimeline: `view(${viewPercentage}% ${startPercentage}%)`,
        } as React.CSSProperties
      }
    >
      {svg}
    </div>
  );
}
