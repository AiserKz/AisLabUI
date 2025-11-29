import { motion } from "framer-motion";

type SectionProps = {
  children: React.ReactNode;
  onViewEntry?: () => void;
  className?: string;
};

export default function Section({
  children,
  className,
  onViewEntry,
}: SectionProps) {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.2 }}
      onViewportEnter={() => onViewEntry?.()}
    >
      {children}
    </motion.section>
  );
}
