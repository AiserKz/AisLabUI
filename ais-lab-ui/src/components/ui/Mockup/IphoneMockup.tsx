interface IphoneMockupProps {
  label?: string;
  screenImageSrc?: string;
  camera?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export default function IphoneMockup({
  label,
  screenImageSrc,
  camera = true,
  className = "",
  children,
}: IphoneMockupProps) {
  return (
    <div className={`mockup-phone ${className}`}>
      {camera && <div className="mockup-phone-camera"></div>}
      <div className="mockup-phone-display text-center relative">
        {label && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            {label}
          </div>
        )}
        <div className="screen w-full h-full">
          <img
            src={screenImageSrc}
            alt={label}
            draggable={false}
            className="object-cover w-full h-full select-none pointer-events-none"
          />
        </div>
      </div>
      {children}
    </div>
  );
}
