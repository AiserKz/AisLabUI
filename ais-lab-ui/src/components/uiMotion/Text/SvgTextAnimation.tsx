interface SvgTextAnimationProps {
  svg: React.ReactNode;
  viewPercentage?: number;
  startPercentage?: number;
  className?: string;
}

export default function SvgTextAnimation({
  svg,
  viewPercentage = 80,
  startPercentage = 5,
  className,
}: SvgTextAnimationProps) {
  return (
    <div
      className={`motion-text-svg ${className} `}
      style={{
        animationTimeline: `view(${viewPercentage}% ${startPercentage}%)`,
      }}
    >
      {svg}
    </div>
  );
}
