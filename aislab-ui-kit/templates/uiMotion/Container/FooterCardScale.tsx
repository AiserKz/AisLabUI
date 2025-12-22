import { type BaseViewProps, bgVariants } from "../motion-index";
import "../uiMotion.css";

interface FooterCardScaleProps extends BaseViewProps {
  variant?: keyof typeof bgVariants;
  children?: React.ReactNode;
}

export default function FooterCardScale({
  variant = "default",
  viewPercentage = 100,
  startPercentage = 0,
  className = "text-8xl items-center justify-center bg-base-200 border-t-2 border-primary ",
  children,
}: FooterCardScaleProps) {
  const bgStyle = bgVariants[variant];
  return (
    <div
      className={`motion-footer-content flex min-h-100 w-100 ${className} ${bgStyle}`}
      style={{
        animationTimeline: `view(${viewPercentage}% ${startPercentage}%)`,
      }}
    >
      {children}
    </div>
  );
}
