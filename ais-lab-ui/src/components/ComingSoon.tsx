import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface ComingSoonProps {
    title?: string;
    description?: string;
}

export default function ComingSoon({
    title = "Скоро здесь что-то появится",
    description = "Эта страница находится в разработке. Следите за обновлениями!"
}: ComingSoonProps) {
    return (
        <div className="w-full min-h-[70vh] flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl w-full"
            >
                {/* Main Card */}
                <div className="relative">
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-primary/5 blur-3xl -z-10"></div>

                    {/* Card Content */}
                    <div className="card bg-base-100 border border-base-300 shadow-2xl backdrop-blur-sm">
                        <div className="card-body items-center text-center p-12 md:p-16">
                            {/* Floating Icons */}
                            <div className="relative mb-8">
                                <div className="flex gap-8 items-center justify-center">
                                    {[0, 1, 2].map((i) => (
                                        <motion.div
                                            key={i}
                                            animate={{
                                                y: [0, -20, 0],
                                                opacity: [0.5, 1, 0.5],
                                            }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                                delay: i * 0.4,
                                                ease: "easeInOut",
                                            }}
                                        >
                                            <Sparkles className="w-8 h-8 text-primary" />
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Title */}
                            <h2 className="text-4xl md:text-5xl font-bold mb-4">
                                {title}
                            </h2>

                            {/* Description */}
                            <p className="text-base-content/60 text-lg mb-8 max-w-xl">
                                {description}
                            </p>

                            {/* Progress Dots */}
                            <div className="flex gap-3 items-center">
                                {[0, 1, 2, 3].map((i) => (
                                    <motion.div
                                        key={i}
                                        className="w-2 h-2 rounded-full bg-primary"
                                        animate={{
                                            scale: [1, 1.5, 1],
                                            opacity: [0.5, 1, 0.5],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: i * 0.2,
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
