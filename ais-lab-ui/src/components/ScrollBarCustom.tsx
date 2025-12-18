import {
  motion,
  MotionValue,
  useMotionValue,
  useTransform,
} from "framer-motion";

import { useEffect, useRef, useState } from "react";

interface ScrollBarCustomProps {
  scrollY: MotionValue;
  disableNativeScrollbar?: boolean;
}

export default function ScrollBarCustom({
  scrollY,
  disableNativeScrollbar,
}: ScrollBarCustomProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [trackSize, setTrackSize] = useState(0);
  const [scrollRange, setScrollRange] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const thumbHeight = 60;

  // Трансформации для позиции
  const thumbY = useTransform(scrollY, [0, scrollRange], [0, trackSize]);

  // Процент прокрутки
  const scrollPercent = useTransform(scrollY, [0, scrollRange], [0, 100]);
  const displayPercent = useMotionValue(0);

  // Обновляем процент
  useEffect(() => {
    const unsubscribe = scrollPercent.on("change", (v) => {
      displayPercent.set(Math.round(v));
    });
    return unsubscribe;
  }, [scrollPercent, displayPercent]);

  // Скрытие нативного скроллбара
  useEffect(() => {
    const html = document.documentElement;

    if (disableNativeScrollbar) {
      html.classList.add("hide-scrollbar");
    } else {
      html.classList.remove("hide-scrollbar");
    }

    return () => {
      html.classList.remove("hide-scrollbar");
    };
  }, [disableNativeScrollbar]);

  // Измерение размеров
  useEffect(() => {
    const measure = () => {
      setScrollRange(
        Math.max(document.documentElement.scrollHeight - window.innerHeight, 1)
      );
      if (trackRef.current) {
        setTrackSize(trackRef.current.offsetHeight - thumbHeight);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Клик на трек для навигации
  const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!trackRef.current) return;

    const rect = trackRef.current.getBoundingClientRect();
    const clickY = e.clientY - rect.top - thumbHeight / 2;
    const percentage = Math.max(0, Math.min(1, clickY / trackSize));
    const targetScroll = percentage * scrollRange;
    scrollToSmooth(targetScroll);
  };

  // Плавный скролл для клика
  const scrollToSmooth = (position: number) => {
    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  };

  // Мгновенный скролл для drag
  const scrollToInstant = (position: number) => {
    window.scrollTo({
      top: position,
      behavior: "auto",
    });
  };

  // Drag логика
  const handleDragStart = (e: React.PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handleDragMove = (e: React.PointerEvent) => {
    if (!isDragging || !trackRef.current) return;
    e.preventDefault();

    const rect = trackRef.current.getBoundingClientRect();
    const dragY = e.clientY - rect.top - thumbHeight / 2;
    const percentage = Math.max(0, Math.min(1, dragY / trackSize));
    const targetScroll = percentage * scrollRange;

    scrollToInstant(targetScroll);
  };

  const handleDragEnd = (e: React.PointerEvent) => {
    setIsDragging(false);
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  };

  return (
    <div
      ref={trackRef}
      className="fixed right-0 md:right-8 bottom-20 top-20 w-4 z-40 cursor-pointer group"
      onClick={handleTrackClick}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Трек */}
      <motion.div
        className="absolute inset-0 bg-base-content/10 rounded-full"
        animate={{
          opacity: isHovering || isDragging ? 0.4 : 0.15,
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Thumb */}
      <motion.div
        className="absolute left-0 right-0 bg-primary rounded-field cursor-grab active:cursor-grabbing select-none touch-none"
        style={{
          height: thumbHeight,
          y: thumbY,
        }}
        animate={{
          opacity: isDragging || isHovering ? 1 : 0.7,
          scale: isDragging ? 1.15 : isHovering ? 1.08 : 1,
          boxShadow:
            isDragging || isHovering
              ? "0 0 15px var(--color-primary)"
              : "0 0 5px var(--color-primary)",
        }}
        transition={{ duration: 0.15 }}
        onPointerDown={handleDragStart}
        onPointerMove={handleDragMove}
        onPointerUp={handleDragEnd}
        onPointerCancel={handleDragEnd}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Внутренние линии */}
        <div className="absolute inset-x-1 top-1/2 -translate-y-1/2 flex flex-col gap-0.5 opacity-40 pointer-events-none">
          <div className="h-px bg-primary-content rounded-full" />
          <div className="h-px bg-primary-content rounded-full" />
          <div className="h-px bg-primary-content rounded-full" />
        </div>
      </motion.div>

      {/* Процент */}
      <motion.div
        className="absolute right-7 text-xs font-mono whitespace-nowrap pointer-events-none"
        style={{ y: thumbY }}
        animate={{
          opacity: isHovering || isDragging ? 0.8 : 0.3,
          x: isHovering || isDragging ? 0 : 5,
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="h-[60px] flex items-center text-base-content">
          <motion.span>{displayPercent}</motion.span>
          <span className="text-base-content/50">%</span>
        </div>
      </motion.div>
    </div>
  );
}
