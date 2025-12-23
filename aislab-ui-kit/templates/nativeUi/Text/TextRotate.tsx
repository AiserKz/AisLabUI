interface TextRotateProps {
  className?: string;
  children: React.ReactNode;
}

export default function TextRotate({ className, children }: TextRotateProps) {
  return (
    <span className={`text-rotate ${className}`}>
      <span>{children}</span>
    </span>
  );
}
