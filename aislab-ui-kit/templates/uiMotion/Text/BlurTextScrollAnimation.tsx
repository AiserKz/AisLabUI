import type React from "react";
import type { BaseViewProps } from "../motion-index";
import "../uiMotion.css";

interface BlurTextComponents {
  Text: React.FC<BlurTextProps>;
}

interface BlurTextProps extends React.BaseHTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  className?: string;
}

interface BlurTextScrollAnimationProps extends BaseViewProps {
  children?: React.ReactNode;
}

const BlurTextScrollAnimation: BlurTextComponents &
  React.FC<BlurTextScrollAnimationProps> = ({
  viewPercentage = 10,
  startPercentage = 30,
  className = "text-center space-y-8",
  children,
}: BlurTextScrollAnimationProps) => {
  return (
    <div
      className={`flex flex-col motion-blur-in-scroll-container ${className}`}
      style={
        {
          "--blurInScroll-viewPercentage": `${viewPercentage}%`,
          "--blurInScroll-startPercentage": `${startPercentage}%`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
};

function Text({ children, className = "text-7xl", ...props }: BlurTextProps) {
  return (
    <span className={`motion-blur-in-scroll ${className}`} {...props}>
      {children}
    </span>
  );
}

BlurTextScrollAnimation.Text = Text;

export default BlurTextScrollAnimation;
