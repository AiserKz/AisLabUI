import { type Variants } from "framer-motion";

export const fade: Variants = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition: { duration: 0.1 } },
  exit: { opacity: 0, transition: { duration: 0.1 } },
};

export const slide: Variants = {
  initial: { y: 40, opacity: 0 },
  enter: { y: 0, opacity: 1 },
  exit: { y: -40, opacity: 0 },
};
export default function PageTransitions({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
