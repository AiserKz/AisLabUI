interface DiffComponents extends React.FC<DiffTextProps> {
  Image: typeof Image;
}

interface DiffImageProps {
  label?: string;
  item1?: string;
  item2?: string;
  filter?: keyof typeof filtered;
  size?: number;
  className?: string;
}

const filtered = {
  none: (_: number) => undefined,
  blur: (size: number) => `blur(${size}px)`,
  grayscale: (size: number) => `grayscale(${size})`,
  sepia: (size: number) => `sepia(${size})`,
  hueRotate: (size: number) => `hue-rotate(${size}deg)`,
  saturate: (size: number) => `saturate(${size})`,
  contrast: (size: number) => `contrast(${size})`,
  brightness: (size: number) => `brightness(${size})`,
  invert: (size: number) => `invert(${size})`,
  opacity: (size: number) => `opacity(${size})`,
};

function Image({
  label = "Image",
  item1,
  item2,
  filter = "none",
  size = 2,
  className = "",
}: DiffImageProps) {
  const filterValue = filtered[filter](size);
  return (
    <figure className={`diff ${className} rounded-box`} tabIndex={0}>
      <div className="diff-item-1" role="img" tabIndex={0}>
        <img
          alt={label}
          src={item1 || item2}
          style={{ filter: item1 ? undefined : filterValue }}
        />
      </div>
      <div className="diff-item-2" role="img">
        <img
          alt="Image"
          src={item2 || item1}
          style={{
            filter: item2 ? undefined : filterValue,
          }}
        />
      </div>
      <div className="diff-resizer"></div>
    </figure>
  );
}

interface DiffTextProps {
  item1?: React.ReactNode;
  item2?: React.ReactNode;
  className?: string;
  itemClassName?: string;
  size?: number;
}

const Diff: DiffComponents = ({
  item1,
  item2,
  className,
  itemClassName,
  size = 3,
}: DiffTextProps) => {
  return (
    <figure className={`diff ${className} rounded-box`} tabIndex={0}>
      <div className="diff-item-1" role="img" tabIndex={0}>
        <div
          className={`bg-primary text-primary-content grid place-content-center font-black ${itemClassName}`}
          style={{ fontSize: `${size}rem` }}
        >
          {item1}
        </div>
      </div>
      <div className="diff-item-2" role="img">
        <div
          className={`bg-base-200 grid place-content-center font-black ${itemClassName}`}
          style={{ fontSize: `${size}rem` }}
        >
          {item2}
        </div>
      </div>
      <div className="diff-resizer"></div>
    </figure>
  );
};
Diff.Image = Image;

export { Diff };
