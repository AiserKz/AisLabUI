import { bgVariants } from "../ui.types";
import "../index.css";
import React, { useEffect, useState } from "react";

interface ParallaxProps {
  enabled?: boolean;
  sensitivity?: number; // Множитель чувствительности (по умолчанию 1)
  invert?: boolean; // Инвертировать направление
  axis?: "x" | "y" | "both"; // Ограничить ось
  smooth?: boolean; // Включить плавность
  smoothness?: number; // Коэффициент плавности (0.01 - 1), меньше = плавнее
}

function Parallax({
  enabled = true,
  sensitivity = 1,
  invert = false,
  axis = "both",
  smooth = false,
  smoothness = 0.1,
}: ParallaxProps) {
  useEffect(() => {
    if (!enabled) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let animationFrameId: number;

    const handleMove = (e: PointerEvent) => {
      let x = (e.clientX / window.innerWidth - 0.5) * 2;
      let y = (e.clientY / window.innerHeight - 0.5) * 2;

      // Применяем чувствительность и инверсию
      const multiplier = invert ? -sensitivity : sensitivity;
      x *= multiplier;
      y *= multiplier;

      // Ограничение по осям
      if (axis === "y") x = 0;
      if (axis === "x") y = 0;

      if (smooth) {
        targetX = x;
        targetY = y;
      } else {
        document.documentElement.style.setProperty("--parallax-x", `${x}`);
        document.documentElement.style.setProperty("--parallax-y", `${y}`);
      }
    };

    const updateSmooth = () => {
      if (!smooth) return;

      // Линейная интерполяция (lerp)
      currentX += (targetX - currentX) * smoothness;
      currentY += (targetY - currentY) * smoothness;

      document.documentElement.style.setProperty("--parallax-x", `${currentX}`);
      document.documentElement.style.setProperty("--parallax-y", `${currentY}`);

      animationFrameId = requestAnimationFrame(updateSmooth);
    };

    document.addEventListener("pointermove", handleMove);

    if (smooth) {
      animationFrameId = requestAnimationFrame(updateSmooth);
    }

    return () => {
      document.removeEventListener("pointermove", handleMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [enabled, sensitivity, invert, axis, smooth, smoothness]);

  return null;
}

interface BackgroundProps {
  src?: string;
  size?: number; // шаг сетки
  gap?: number; // отступ для кастомного паттерна
  dotSize?: number; // размер точки
  color?: keyof typeof bgVariants;
  colorCustom?: string;
  customPattern?: string;
  angle?: number;
  variant?: keyof typeof variants;
  glow?: boolean;
  opacity?: number;

  animation?: keyof typeof animations;
  reverse?: boolean;
  duration?: number;
  paralax?: boolean;
  shift?: number; // Сила смещения слоя в пикселях

  className?: string;
}

interface BackgroundComponentProps extends React.FC<BackgroundProps> {
  Parallax: typeof Parallax;
}

const variants = {
  dots: (dotSize = 2, color = "white") =>
    `radial-gradient(circle, ${color} ${dotSize}px, transparent 1px)`,
  grid: (lineSize = 1, color = "white") =>
    `
    linear-gradient(${color} ${lineSize}px, transparent ${lineSize}px),
    linear-gradient(90deg, ${color} ${lineSize}px, transparent ${lineSize}px)
  `,
  lines: (line = 1, color = "white") =>
    `linear-gradient(${color} ${line}px, transparent ${line}px)`,
};

const animations = {
  none: () => "",
  pulse: (duration: number) => `pulseOpacity ${duration}s ease-in-out infinite`,
  move: (duration: number) => `bgMove ${duration}s linear infinite`,
  rotate: (duration: number) => `rotate360 ${duration * 4}s linear infinite`,
  glitch: (duration: number) => `glitchNoise ${duration}s linear infinite`,
  wave: (duration: number) => `rippleWave ${duration}s linear infinite`,
  multiWave: (duration: number) => `multiRipple ${duration}s linear infinite`,
  pulseRing: (duration: number) =>
    `pulseRing ${duration}s ease-in-out infinite`,
};

const maskOn = (animation: keyof typeof animations) => {
  switch (animation) {
    case "wave":
    case "multiWave":
    case "pulseRing":
      return true;
    default:
      return false;
  }
};

const Background: BackgroundComponentProps = ({
  src,
  size = 30,
  gap = 16,
  dotSize = 2,
  color = "primary",
  colorCustom,
  customPattern,
  angle = 0,
  variant = "dots",
  glow = false,
  opacity = 1,

  animation = "none",
  reverse = false,
  duration = 10,
  paralax = false,
  shift = 20, // сила смещения слоя в пикселях

  className = "z-[-1]",
}) => {
  const [patternUrl, setPatternUrl] = useState<string | null>(null);

  // Генерация паттерна из изображения или текста
  useEffect(() => {
    if (!customPattern) {
      setPatternUrl(null);
      return;
    }

    // Простая проверка на URL
    const isUrl = /^(https?:\/\/|data:|\/|\.)/.test(customPattern);
    const tileSize = size + gap;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = tileSize;
    canvas.height = tileSize;

    if (!ctx) return;

    if (isUrl) {
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.src = customPattern;

      img.onload = () => {
        // Рисуем изображение по центру тайла
        const offset = gap / 2;
        ctx.drawImage(img, offset, offset, size, size);
        setPatternUrl(canvas.toDataURL());
      };

      img.onerror = () => {
        console.warn(
          "Failed to load pattern image, falling back to simple url"
        );
        setPatternUrl(customPattern);
      };
    } else {
      // Рендеринг текста/эмодзи
      // Используем системный шрифт для лучшей поддержки эмодзи
      ctx.font = `${size}px sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      const center = tileSize / 2;
      // Небольшая коррекция по вертикали
      ctx.fillText(customPattern, center, center + size * 0.1);
      setPatternUrl(canvas.toDataURL());
    }
  }, [customPattern, size, gap]);

  const baseColor = colorCustom
    ? colorCustom || "white"
    : `var(--color-${color})`;

  const anim = animations[animation] ? animations[animation](duration) : "";

  const maskStyle: React.CSSProperties = maskOn(animation)
    ? {
        maskImage:
          "radial-gradient(circle, transparent 1%, white 50%, transparent 55%)",
        WebkitMaskImage:
          "radial-gradient(circle, transparent 1%, white 50%, transparent 55%)",
        maskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskOrigin: "border-box",
        WebkitMaskOrigin: "border-box",
      }
    : {};

  // Определяем фон
  let bgImage = variants[variant](dotSize, baseColor);
  let bgSize = `${size}px ${size}px`;

  if (src) {
    bgImage = `url(${src})`;
    bgSize = "cover";
  } else if (customPattern && patternUrl) {
    bgImage = `url(${patternUrl})`;
    // Если это сгенерированный паттерн (data uri), то размер авто (тайл уже нужного размера)
    // Если это фоллбэк (обычный url), то используем size
    bgSize = patternUrl.startsWith("data:") ? "auto" : `${size}px ${size}px`;
  }

  const backgroundStyle: React.CSSProperties = {
    backgroundImage: bgImage,
    backgroundSize: bgSize,
    filter: glow ? `drop-shadow(0 0 6px ${baseColor})` : undefined,
    animation: `${anim} ${reverse ? "reverse" : ""}`,
    opacity,
    backgroundRepeat: "repeat",
    // Убрали backgroundPosition: "center", чтобы паттерн начинался от края и не создавал разрывов
    // Передаем переменную для силы параллакса
    // @ts-ignore
    "--parallax-shift": `${shift}px`,
  };

  return (
    <div className={`absolute -inset-1 overflow-hidden  ${className}`}>
      <div
        className="w-full h-full"
        style={{
          transform: `rotate(${angle}deg)`,
        }}
      >
        {/* Основной слой */}
        <div
          className={`absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 ${
            paralax && "parallax-layer"
          }`}
          style={{ ...backgroundStyle, ...maskStyle }}
        />
      </div>
    </div>
  );
};

Background.Parallax = Parallax;

export default Background;
