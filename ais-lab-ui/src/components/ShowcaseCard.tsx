import { motion } from "framer-motion";
import { SparklesIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ShowcaseCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  preview: ReactNode;
  category?: string;
  padding?: boolean;

  to?: string;
  className?: string;
}

const categoryColors = {
  Медиа: "badge-error",
  "Обратная связь": "badge-info",
  Контейнеры: "badge-warning",
  Формы: "badge-success",
  Кнопки: "badge-primary",
  Эффекты: "badge-accent",
};

export default function ShowcaseCard({
  icon: Icon,
  title,
  description,
  preview,
  category,
  padding = true,

  to,
  className,
}: ShowcaseCardProps) {
  return (
    <div
      className={`group ${className} hover:scale-105 transition-all duration-300`}
    >
      <div className="card bg-base-100/80 border border-base-300 hover:border-primary/50 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
        {/* Category Badge */}
        {category && (
          <div className="absolute top-4 right-4 z-20">
            <div
              className={`badge badge-sm shadow-md ${
                categoryColors[category as keyof typeof categoryColors] ||
                "badge-primary"
              }`}
            >
              {category}
            </div>
          </div>
        )}

        {/* Preview Area */}
        <div className="relative h-56 bg-linear-to-br from-base-200/50 to-base-300/50  overflow-hidden border-b border-base-300/50">
          {/* Glass overlay */}
          <div className="absolute inset-0 bg-base-100/5 backdrop-blur-[1px]" />

          {/* Preview Content */}
          <div
            className={
              padding
                ? "relative z-10 h-full flex items-center justify-center p-6"
                : "relative z-10 h-full flex items-center justify-center"
            }
          >
            {preview}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.1 }}
            className="absolute inset-0 bg-linear-to-br from-primary via-secondary to-accent"
          />
        </div>

        {/* Content */}
        <Link to={to || "#"} className="card-body p-6 cursor-pointer">
          <div className="flex space-x-3 items-start">
            <div className="flex items-center justify-center bg-base-200/60 rounded-field p-3">
              {Icon || <SparklesIcon />}
            </div>
            <div>
              <h3 className="card-title text-lg font-bold group-hover:text-primary transition-colors">
                {title}
              </h3>
              <p className="text-sm text-base-content/70 line-clamp-2">
                {description}
              </p>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-info via-primary to-primary opacity-0 group-hover:opacity-100 transition-all duration-300" />
        </Link>
      </div>
    </div>
  );
}
