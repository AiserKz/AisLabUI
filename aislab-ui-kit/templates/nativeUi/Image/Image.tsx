import { aspectRatioVarinats } from "../ui.types";

interface ImageComponent extends React.FC<ImageProps> {
  Items: typeof ImageItems;
}

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
  objectFit?: keyof typeof objectFitVariants;
  aspectRatio?: keyof typeof aspectRatioVarinats;
  fallbackSrc?: string;
  className?: string;
  children?: React.ReactNode;
}

const objectFitVariants = {
  contain: "object-contain",
  cover: "object-cover",
  none: "object-none",
  scaleDown: "object-scale-down",
  fill: "object-fill",
};

const Image: ImageComponent = ({
  src,
  alt,
  objectFit = "none",
  aspectRatio = "default",
  fallbackSrc,
  className,
  children,
  ...props
}: ImageProps) => {
  return (
    <div className="relative">
      <img
        src={src || fallbackSrc}
        onError={(e) => {
          (e.target as HTMLImageElement).src = fallbackSrc || "None";
        }}
        alt={alt}
        className={`rounded-box
            ${className} 
            ${objectFitVariants[objectFit]}
            ${aspectRatioVarinats[aspectRatio]}
        `}
        {...props}
      />
      {children && <div className="absolute inset-0">{children}</div>}
    </div>
  );
};

interface ImageItemsProps {
  className?: string;
  posItem?: keyof typeof positionItems;
  posJustify?: keyof typeof positionJustify;
  children: React.ReactNode;
}

const positionItems = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
};

const positionJustify = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
};

function ImageItems({
  className,
  posItem = "center",
  posJustify = "center",
  children,
}: ImageItemsProps) {
  return (
    <div
      className={`flex h-full 
        ${positionItems[posItem]}
        ${positionJustify[posJustify]}
        ${className}
    `}
    >
      {children}
    </div>
  );
}

Image.Items = ImageItems;

export default Image;
