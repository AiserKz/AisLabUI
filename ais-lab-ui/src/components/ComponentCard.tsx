import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

interface ComponentCardProps {
    title: string;
    description: string;
    category: string;
    icon: LucideIcon;
    preview: ReactNode;
    path: string;
    color?: string;
}

export default function ComponentCard({
    title,
    description,
    category,
    icon: Icon,
    preview,
    path,
    color = "primary",
}: ComponentCardProps) {
    const navigate = useNavigate();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            onClick={() => navigate(path)}
            className="cursor-pointer group"
        >
            <div className="card bg-base-100 border border-base-300 hover:border-primary/50 transition-all duration-300 overflow-hidden h-full hover:shadow-xl">
                {/* Preview Area with Glass Effect */}
                <div className="relative h-52 bg-gradient-to-br from-base-200/50 to-base-300/50 backdrop-blur-sm overflow-hidden">
                    {/* Preview Content */}
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                        {preview}
                    </div>

                    {/* Glass Overlay on Hover */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-base-100/10 backdrop-blur-[2px] flex items-center justify-center"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileHover={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="flex items-center gap-2 text-primary font-semibold"
                        >
                            <span>Открыть</span>
                            <ArrowRight className="w-5 h-5" />
                        </motion.div>
                    </motion.div>

                    {/* Category Badge */}
                    <div className="absolute top-3 right-3">
                        <div className={`badge badge-${color} badge-sm gap-1 shadow-md`}>
                            {category}
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="card-body p-6">
                    <div className="flex items-start gap-3">
                        <div className={`p-2.5 rounded-lg bg-${color}/10 flex-shrink-0`}>
                            <Icon className={`w-5 h-5 text-${color}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="card-title text-lg mb-2 group-hover:text-primary transition-colors truncate">
                                {title}
                            </h3>
                            <p className="text-sm text-base-content/70 line-clamp-2">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
