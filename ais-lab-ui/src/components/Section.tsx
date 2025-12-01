import { motion } from "framer-motion";

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  onViewEntry?: () => void;
  className?: string;
}

export default function Section({
  id,
  children,
  className,
  onViewEntry,
}: SectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      onViewportEnter={() => onViewEntry?.()}
    >
      {children}
    </motion.section>
  );
}
