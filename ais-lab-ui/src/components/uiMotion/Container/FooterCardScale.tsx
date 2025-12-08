import type { BaseViewProps } from "../motion-index";
import "../uiMotion.css";

interface FooterCardScaleProps extends BaseViewProps {
  children?: React.ReactNode;
}

export default function FooterCardScale({
  startPercentage = 20,
  viewPercentage = 90,
  className = "text-8xl items-center justify-center bg-base-200 border-t-2 border-primary ",
  children,
}: FooterCardScaleProps) {
  return (
    <div
      className={`motion-footer-content flex min-h-100 w-100 ${className}`}
      style={{
        animationTimeline: `view(${viewPercentage}% ${startPercentage}%)`,
      }}
    >
      {children}
    </div>
  );
}
