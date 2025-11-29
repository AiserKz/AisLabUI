interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  imageData?: string[];
  vertical?: boolean;
  only?: boolean;
  objectFit?: keyof typeof objectFitVariants;
  className?: string;
}

const objectFitVariants = {
  cover: "object-cover",
  contain: "object-contain",
  none: "object-none",
  scaleDown: "object-scale-down",
};

export default function Carousel({
  imageData = [],
  vertical = false,
  only = false,
  objectFit = "cover",
  className = "",
  ...props
}: CarouselProps) {
  return (
    <div
      className={`carousel rounded ${
        vertical ? "carousel-vertical" : "carousel-horizontal"
      } ${className}`}
      {...props}
    >
      {imageData.map((image, index) => (
        <div
          key={index}
          className={`carousel-item ${only && "w-full h-full"} `}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className={`w-full h-full ${objectFitVariants[objectFit]}`}
          />
        </div>
      ))}
    </div>
  );
}
