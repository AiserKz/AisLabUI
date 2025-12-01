import { useEffect, useRef, useState } from "react";

export default function useSectionObserver(
  sectionIds: string[],
  threshold: number
) {
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const [aciveSection, setActiveSection] = useState<string>(sectionIds[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        threshold,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        sectionRefs.current[id] = el as HTMLElement;
        observer.observe(el);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
      observer.disconnect();
    };
  }, [sectionIds, threshold]);

  return { aciveSection, sectionRefs, setActiveSection };
}
