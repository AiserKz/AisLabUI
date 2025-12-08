import type { BaseViewProps } from "../motion-index";

interface TextAnimationCounterProps extends BaseViewProps {
  text: string;
}

export default function TextAnimationCounter({
  text,
  viewPercentage = 0,
  startPercentage = 0,
  className,
}: TextAnimationCounterProps) {
  return (
    <div className={`text-center text-8xl motion-reveal-text ${className}`}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="inline-block motion-reveal-text-content"
          style={{
            animationTimeline: `view(${viewPercentage}% ${startPercentage}%)`,
            animationDelay: `${index * 0.1}s`,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
}
