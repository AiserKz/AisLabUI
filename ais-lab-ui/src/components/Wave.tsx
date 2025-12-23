interface WaveProps {
  /** SVG path, если не передан - используется дефолтный */
  path?: string;

  /** Tailwind-класс цвета, например: fill-base-200 */
  colorClass?: string;

  /** Позиция волны */
  position?: "top" | "bottom";

  /** Отразить по вертикали */
  flipY?: boolean;

  /** Отразить по горизонтали */
  flipX?: boolean;

  /** Tailwind-классы высоты */
  heightClass?: string;

  /** Анимация */
  animation?: boolean;
  // Параметры анимации
  duration?: number;
  delay?: number;

  /** Дополнительные классы */
  className?: string;
}

const DEFAULT_PATH =
  "M0 252L26.7 267.2C53.3 282.3 106.7 312.7 160 314.8C213.3 317 266.7 291 320 296.8C373.3 302.7 426.7 340.3 480 347.3C533.3 354.3 586.7 330.7 640 313C693.3 295.3 746.7 283.7 800 288.3C853.3 293 906.7 314 933.3 324.5L960 335L960 541L933.3 541C906.7 541 853.3 541 800 541C746.7 541 693.3 541 640 541C586.7 541 533.3 541 480 541C426.7 541 373.3 541 320 541C266.7 541 213.3 541 160 541C106.7 541 53.3 541 26.7 541L0 541Z";

export default function Wave({
  path = DEFAULT_PATH,
  colorClass = "fill-base-200",
  position = "bottom",
  flipX = false,
  flipY = false,
  heightClass = "h-24 sm:h-32 md:h-40 lg:h-48 xl:h-56",

  animation = false,
  duration = 20,
  delay = 1,

  className = "",
}: WaveProps) {
  return (
    <div
      className={`
      absolute left-0 w-full overflow-hidden
      ${position === "top" ? "top-0" : "bottom-0"}
      ${flipX && "scale-x-[-1]"}
      ${flipY && "scale-y-[-1]"}
      z-0
    `}
    >
      <svg
        aria-hidden="true"
        focusable="false"
        className={`
        relative
        ${heightClass}
        ${animation && "animate-wave"}
        ${colorClass}
        ${className}
      `}
        viewBox="0 0 960 540"
        preserveAspectRatio="none"
        style={{
          ["--wave-duration" as any]: `${duration}s`,
          ["--wave-delay" as any]: `${delay}s`,
        }}
      >
        <path d={path} />
      </svg>
    </div>
  );
}
