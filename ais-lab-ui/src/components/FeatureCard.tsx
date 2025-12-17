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
      className="feature-card p-8 rounded-3xl bg-base-100 border border-base-content/5 shadow-lg hover:shadow-2xl transition-all duration-300
       hover:-translate-y-2"
      style={{ animationDelay: delay }}
    >
      <div className="mb-6 p-4 bg-base-200 rounded-2xl w-fit">{icon}</div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-base-content/70 leading-relaxed">{description}</p>
    </div>
  );
}

export default FeatureCard;
