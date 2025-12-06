type TextAnimationCounterProps = {
  text: string;
  className?: string;
};

export default function TextAnimationCounter({
  text,
  className,
}: TextAnimationCounterProps) {
  return (
    <div className={`text-center text-8xl motion-reveal-text ${className}`}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="inline-block motion-reveal-text-content"
          style={{
            animationDelay: `${index * 0.1}s`,
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );
}
