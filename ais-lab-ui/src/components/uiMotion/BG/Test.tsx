interface TestProps {
  images?: string[];
  className?: string;
}

export default function Test({ images = [], className = "" }: TestProps) {
  return (
    <div className={`relative w-full bg-base-200 rounded-box ${className} `}>
      <div className="motion-carousel">
        <div className="group-test">
          {[...images, ...images].map((image, i) => (
            <div key={i} className="card-test overflow-hidden">
              <img
                src={image}
                alt=""
                className="w-full h-full object-cover rounded-box"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
