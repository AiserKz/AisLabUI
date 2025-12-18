function FeatureCard({
  icon,
  title,
  description,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}) {
  return (
    <div
      className="feature-card transition-transform duration-300 group pb-8
       hover:-translate-y-2"
      style={{ animationDelay: delay }}
    >
      <div
        className="absolute inset-0 bg-base-200 rounded-3xl"
        style={{
          clipPath:
            'path("M0,24 L0,160 A 30,20 0,0,0 450,300 L450,0 L300,0 A 20,20 0,0,0 280,20 L280,110 A 20,20 0,0,1 260,130 L20,130 A 20,20 0,0,0 0,150 Z")',
        }}
      />
      <div
        className="feature-head bg-base-200 rounded-2xl flex items-center px-4 border border-transparent group-hover:border-info transition-all duration-500
        group-hover:-translate-y-2
      "
      >
        <div className="mb-1 p-4 bg-base-200 rounded-2xl w-fit">{icon}</div>
        <h3 className="text-xl font-bold mb-4">{title}</h3>
      </div>
      <div className="feature-body p-8">
        <p className="text-base-content/70 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
