interface HoverGalleryProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

export default function HoverGallery({
  className,
  children,
  ...props
}: HoverGalleryProps) {
  return (
    <figure {...props} className={`hover-gallery ${className}`}>
      {children}
    </figure>
  );
}
