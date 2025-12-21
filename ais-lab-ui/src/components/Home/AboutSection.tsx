import { motion } from "framer-motion";
import SpliteImageCard from "../uiMotion/Image/SpliteImageCard";
import { Code, Layers, Zap } from "lucide-react";
import { FloatingDecoration } from "../FloatingDecoration";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  options?: string[];
  borderColor?: string;
  bgColor?: string;
};

const data: FeatureCardProps[] = [
  {
    title: "Visual",
    description:
      "Готовые визуальные паттерны для чистых и аккуратных интерфейсов.",
    icon: <Layers className="w-7 h-7 text-info" />,
    options: ["стекло", "тени", "hover / focus"],
    borderColor: "border-info/30",
    bgColor: "from-info/10",
  },
  {
    title: "Motion",
    description: "Спокойные и предсказуемые анимации без лишней настройки.",
    icon: <Zap className="w-7 h-7 text-accent" />,
    options: ["микро-motion", "макро-motion", "transition"],
    borderColor: "border-accent/30",
    bgColor: "from-accent/10",
  },
  {
    title: "Integration",
    description:
      "AisLabUI подключается как дополнительный слой, не вмешиваясь в существующую архитектуру проекта.",
    icon: <Code className="w-7 h-7 text-primary" />,
    options: [
      "работает поверх Tailwind и DaisyUI",
      "не переопределяет ваши классы",
      "устанавливается через npm",
    ],
    borderColor: "border-primary/30",
    bgColor: "from-primary/10",
  },
];

export default function AboutSection({
  isMobile = false,
}: {
  isMobile?: boolean;
}) {
  const renderItem = ({
    title,
    description,
    icon,
    options,
    borderColor,
    bgColor,
  }: FeatureCardProps) => {
    return (
      <div
        className={`feature-card h-full w-full flex flex-col justify-start p-6 space-y-5 relative border ${borderColor} bg-base-200/70 rounded-box backdrop-blur-xs`}
      >
        <div
          className={`absolute inset-0 h-full rounded-box bg-linear-to-br ${bgColor} to-transparent pointer-events-none`}
        />

        <div className="flex items-center space-x-3">
          <div
            className={`p-4 border ${borderColor} rounded-box bg-base-200/70 backdrop-blur-sm`}
          >
            {icon}
          </div>
          <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
        </div>

        <p className="text-base-content/70 leading-relaxed max-w-sm">
          {description}
        </p>

        <ul className="text-sm space-y-2 text-base-content/60">
          {options?.map((option) => (
            <li>• {option}</li>
          ))}
        </ul>
      </div>
    );
  };
  return (
    <section className="py-32 relative pb-100 ">
      {/* Декоративные фоновые элементы */}
      <div className="absolute top-20 left-[5%] w-72 h-72 bg-info/8 rounded-full blur-xl pointer-events-none" />

      {/* Плавающие декоративные точки */}
      <FloatingDecoration
        className="absolute top-32 right-[20%] w-3 h-3 bg-primary rounded-full"
        duration={3}
        loop
        variants={{
          visible: {
            y: [0, -15, 0],
            opacity: [0.5, 1, 0.5],
          },
        }}
      />
      <FloatingDecoration
        className="absolute top-60 left-[15%] w-2 h-2 bg-info rounded-full"
        duration={4}
        loop
        delay={0.5}
        variants={{
          visible: {
            y: [0, 10, 0],
            opacity: [0.3, 0.8, 0.3],
          },
        }}
      />
      <FloatingDecoration
        className="absolute bottom-60 right-[25%] w-4 h-4 bg-accent rounded-full"
        duration={3.5}
        loop
        delay={1}
        variants={{
          visible: {
            y: [0, -12, 0],
            opacity: [0.4, 0.9, 0.4],
          },
        }}
      />

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        {/* Intro text */}
        <motion.div
          className="mb-20 text-center space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase">
            О чём AisLabUI
          </h2>
          <p className="text-3xl md:text-4xl font-bold leading-tight">
            Одна обёртка - несколько слоёв,
            <br />
            чтобы не писать одно и то же в каждом проекте
          </p>
          <p className="text-base-content/60 max-w-2xl mx-auto">
            AisLabUI аккуратно расширяет DaisyUI, добавляя готовые визуальные
            паттерны, motion и эффекты - без ломки привычного стека.
          </p>

          {/* Декоратция */}
          <div className="flex items-center justify-center gap-2 pt-4">
            <span className="w-8 h-0.5 bg-primary/30 rounded-full" />
            <span className="w-2 h-2 bg-primary rounded-full" />
            <span className="w-8 h-0.5 bg-primary/30 rounded-full" />
          </div>
        </motion.div>

        {/* Split Image Card */}
        {isMobile ? (
          <div className="flex flex-wrap gap-8">
            {data.map((item) => renderItem(item))}
          </div>
        ) : (
          <SpliteImageCard
            src="/card-bg720.webp"
            item1={renderItem(data[0])}
            item2={renderItem(data[1])}
            item3={renderItem(data[2])}
          />
        )}
      </div>
    </section>
  );
}
