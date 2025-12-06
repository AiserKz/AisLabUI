import type { BaseMotionProps } from "..";
import "../uiMotion.css";

interface InfinityCarouselProps extends Omit<BaseMotionProps, "ease"> {
  images?: any[];
  vertical?: boolean;
  size?: number;
  ease?: "linear" | "ease-in-out" | "ease-in" | "ease-out";
  linearOpacity?: number;
}

export default function InfinityCarousel({
  images = [],
  vertical = false,
  size = 20,
  duration = 35,
  ease = "linear",
  delay = 0,
  loop = true,
  linearOpacity = 20,
  className = "",
}: InfinityCarouselProps) {
  return (
    <div
      className={`motion-carousel relative ${className}`}
      style={{ display: vertical ? "" : "flex" }}
    >
      <div
        className={`
            ${
              vertical
                ? "motion-carousel-content-vertical"
                : "motion-carousel-content-horizontal"
            }`}
        style={{
          animation: `
        ${vertical ? "infinite-move-vertical" : "infinite-move-horizontal"} 
        ${duration}s  
        ${ease} 
        ${loop && "infinite"}`,
          animationDelay: `${delay}s`,
        }}
      >
        {[...images, ...images].map((image, i) => (
          <div
            key={i}
            className="motion-carousel-item overflow-hidden"
            style={{
              flex: `0 0 ${size}em`,
            }}
          >
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover rounded-box"
            />
          </div>
        ))}
      </div>
      <div
        className={`absolute to-base-100 from-60% from-transparent
        ${vertical ? "bg-linear-to-t top-0" : "bg-linear-to-l left-0 "}`}
        style={{
          height: vertical ? `${linearOpacity}%` : "100%",
          width: vertical ? "100%" : `${linearOpacity}%`,
        }}
      />
      <div
        className={`absolute to-base-100 from-60% from-transparent
        ${vertical ? "bg-linear-to-b bottom-0" : "bg-linear-to-r right-0 "}`}
        style={{
          height: vertical ? `${linearOpacity}%` : "100%",
          width: vertical ? "100%" : `${linearOpacity}%`,
        }}
      />
    </div>
  );
}
