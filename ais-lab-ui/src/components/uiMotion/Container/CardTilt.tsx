import type { BaseViewProps } from "../motion-index";

interface CardTiltProps extends BaseViewProps {
  children: React.ReactNode;
}

export default function CardTilt({
  viewPercentage = 70,
  startPercentage = 50,
  className,
  children,
}: CardTiltProps) {
  return (
    <div
      className={`motion-perspective-tilt-card rounded-box ${className}`}
      style={{
        animationTimeline: `view()`,
        animationRange: `entry ${startPercentage}% cover ${viewPercentage}%`,
      }}
    >
      {children}
    </div>
  );
}
