interface TitlePageProps {
  title?: string;
  description?: string;
}

export default function TitlePage({ title, description }: TitlePageProps) {
  return (
    <div className="space-y-2">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-sm text-base-content/60">{description}</p>
      <span className="divider divider-primary"></span>
    </div>
  );
}
