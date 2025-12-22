import type { BaseViewProps } from "../motion-index";

interface FocusToScrollAnimationProps extends BaseViewProps {
  children: React.ReactNode;
}

export default function FocusToScrollAnimation({
  viewPercentage = 40,
  startPercentage = 30,
  className,
  children,
}: FocusToScrollAnimationProps) {
  return (
    <div
      className={`motion-blur-focus ${className}`}
      style={{
        animationTimeline: `view()`,
        animationRange: `entry ${startPercentage}% cover ${viewPercentage}%`,
      }}
    >
      {children}
    </div>
  );
}
