import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ShowcaseCardProps {
    title: string;
    description: string;
    preview: ReactNode;
    category?: string;
}

export default function ShowcaseCard({
    title,
    description,
    preview,
    category,
}: ShowcaseCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="group"
        >
            <div className="card bg-base-100/80 backdrop-blur-md border border-base-300 hover:border-primary/50 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
                {/* Category Badge */}
                {category && (
                    <div className="absolute top-4 right-4 z-10">
                        <div className="badge badge-primary badge-sm shadow-md">
                            {category}
                        </div>
                    </div>
                )}

                {/* Preview Area */}
                <div className="relative h-56 bg-gradient-to-br from-base-200/50 to-base-300/50 backdrop-blur-sm overflow-hidden border-b border-base-300/50">
                    {/* Glass overlay */}
                    <div className="absolute inset-0 bg-base-100/5 backdrop-blur-[1px]" />

                    {/* Preview Content */}
                    <div className="relative z-10 h-full flex items-center justify-center p-6">
                        {preview}
                    </div>

                    {/* Animated gradient on hover */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 0.1 }}
                        className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent"
                    />
                </div>

                {/* Content */}
                <div className="card-body p-6">
                    <h3 className="card-title text-lg font-bold group-hover:text-primary transition-colors">
                        {title}
                    </h3>
                    <p className="text-sm text-base-content/70 line-clamp-2">
                        {description}
                    </p>

                    {/* Bottom glow effect */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
            </div>
        </motion.div>
    );
}
