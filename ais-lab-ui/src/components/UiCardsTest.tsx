interface UiCardsTestProps {
  title?: string;
  src?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function UiCardsTest({
  title,
  src,
  className,
  children,
}: UiCardsTestProps) {
  return (
    <div
      className={`bg-base-200 rounded-box p-6 space-y-2 space-x-2 border border-white/10 break-inside-avoid
        hover:border-blue-400/60 hover:shadow-[0_0_10px] hover:shadow-blue-400/20 transition-all duration-500 
        hover:inset-shadow-blue-400/60 hover:inset-shadow-[0_0_5px]
        ${className} `}
      style={
        src
          ? {
              backgroundImage: `url(${src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {}
      }
    >
      <div className="flex items-center gap-2">
        <h4 className="text-xl">{title}</h4>
        <div className="w-full h-px bg-white/30" />
      </div>
      {children}
    </div>
  );
}
