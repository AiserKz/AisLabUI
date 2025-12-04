import { images } from "@/data/testData";
import { useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function Test() {
  const radius = 200;
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, { damping: 25, stiffness: 150 });
  const y = useSpring(mouseY, { damping: 25, stiffness: 150 });

  const [maskStyle, setMaskStyle] = useState("");

  useEffect(() => {
    const unsubscribeX = x.onChange((v) => updateMask());
    const unsubscribeY = y.onChange((v) => updateMask());
    function updateMask() {
      setMaskStyle(
        `radial-gradient(circle ${radius}px at ${x.get()}px ${y.get()}px, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)`
      );
    }
    return () => {
      unsubscribeX();
      unsubscribeY();
    };
  }, [x, y, radius]);

  const src = images[3];
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-900">
      {/* Черно-белое изображение */}
      <div
        className="relative rounded-box overflow-hidden select-none"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          mouseX.set(e.clientX - rect.left);
          mouseY.set(e.clientY - rect.top);
        }}
      >
        <img
          src={src}
          alt="image"
          className="w-[600px] h-auto filter saturate-0 relative select-none"
        />

        <div
          style={{
            WebkitMaskImage: maskStyle,
            maskImage: maskStyle,
          }}
          className="absolute w-[600px] top-0 h-auto pointer-events-none"
        >
          <img src={src} alt="image-color" className="w-[600px] h-auto" />
        </div>
      </div>
    </div>
  );
}
