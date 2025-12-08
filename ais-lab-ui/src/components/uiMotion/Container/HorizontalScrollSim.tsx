import type { BaseViewProps } from "../motion-index";

interface HorizontalScrollSimProps extends BaseViewProps {
  children: React.ReactNode;
}

export default function HorizontalScrollSim({
  startPercentage = 20,
  viewPercentage = 100,
  className,
  children,
}: HorizontalScrollSimProps) {
  return (
    <div
      className={`motion-horizontal-scroll-sim ${className}`}
      style={{
        animationRange: `entry ${startPercentage}% ${viewPercentage}%`,
      }}
    >
      {children}
    </div>
  );
}
