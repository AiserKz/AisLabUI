import type { BaseViewProps } from "../motion-index";

interface CardZoomToScrollProps extends BaseViewProps {
  children: React.ReactNode;
}

export default function CardZoomToScroll({
  viewPercentage = 100,
  startPercentage = 90,
  className,
  children,
}: CardZoomToScrollProps) {
  return (
    <div
      className={`motion-zoom-card bg-primary flex justify-center items-center h-100 rounded-box ${className}`}
      style={{
        animationTimeline: `view()`,
        animationRange: `entry ${startPercentage}% cover ${viewPercentage}%`,
      }}
    >
      {children}
    </div>
  );
}
