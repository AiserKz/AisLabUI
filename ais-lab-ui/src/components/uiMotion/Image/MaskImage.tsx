import "../uiMotion.css";
import { useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

interface MaskImageProps {
  src: string;
  variant?: keyof typeof variants;
  radius?: number;
  className?: string;
}

const variants = {
  blur: "blur-sm",
  brightness: "brightness-50",
  saturate: "saturate-0",
  grayscale: "grayscale",
};

export default function MaskImage({
  src,
  variant = "saturate",
  radius = 400,
  className,
}: MaskImageProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, { damping: 25, stiffness: 150 });
  const y = useSpring(mouseY, { damping: 25, stiffness: 150 });

  const [maskStyle, setMaskStyle] = useState("");

  useEffect(() => {
    function updateMask() {
      setMaskStyle(
        `radial-gradient(circle ${radius}px at ${x.get()}px ${y.get()}px, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)`
      );
    }

    updateMask();

    const unsubscribeX = x.on("change", updateMask);
    const unsubscribeY = y.on("change", updateMask);
    return () => {
      unsubscribeX();
      unsubscribeY();
    };
  }, [x, y, radius]);

  return (
    <div
      className={`relative rounded-box overflow-hidden h-fit ${className}`}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }}
    >
      <img
        src={src}
        className={`w-full h-auto filter ${variants[variant]}`}
        alt=""
      />

      <div
        style={{
          WebkitMaskImage: maskStyle,
          maskImage: maskStyle,
        }}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      >
        <img src={src} className="w-full h-auto" alt="" />
      </div>
    </div>
  );
}
