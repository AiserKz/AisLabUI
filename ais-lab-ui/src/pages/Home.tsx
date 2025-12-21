import AboutSection from "@/components/Home/AboutSection";
import ComponentDemoSection from "@/components/Home/ComponentDemoSection";
import CTASection from "@/components/Home/CTASection";
import FeatureSection from "@/components/Home/FeatureSection";
import HeroSection from "@/components/Home/HeroSection";
import NextSection from "@/components/Home/NextSection";
import ScrollBarCustom from "@/components/ScrollBarCustom";
import ScrollLightPath from "@/components/ScrollLightPath";

import "@/style/Home.css";
import useIsMobile from "@/utils/hooks/useIsMobile";
import { useMotionValue } from "framer-motion";
import { ReactLenis, useLenis, type LenisRef } from "lenis/react";

import { useEffect, useRef } from "react";

function calcProgress(scroll: number, start: number, range: number) {
  if (range <= 0) return 0;
  const p = (scroll - start) / range;
  return Math.min(Math.max(p, 0), 1);
}

export default function Home() {
  const isMobile = useIsMobile();
  const lenisRef = useRef<LenisRef | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const containerComponentRef = useRef<HTMLDivElement>(null);
  const scrollProgress = useMotionValue(0);
  const scrollY = useMotionValue(0);
  const currentScrollY = useMotionValue(0);

  const section1 = useRef({ start: 0, range: 0 });
  const section2 = useRef({ start: 0, range: 0 });

  useEffect(() => {
    const measureSection = (
      ref: React.RefObject<HTMLDivElement | null>,
      section: any
    ) => {
      if (!ref.current) return;
      section.start = ref.current.offsetTop;
      section.range = ref.current.offsetHeight - window.innerHeight;
    };

    const onResize = () => {
      measureSection(containerRef, section1.current);
      measureSection(containerComponentRef, section2.current);
    };

    // Инициализация
    measureSection(containerRef, section1.current);
    measureSection(containerComponentRef, section2.current);

    // ResizeObserver для динамических блоков
    const ro = new ResizeObserver(() => {
      measureSection(containerRef, section1.current);
      measureSection(containerComponentRef, section2.current);
    });

    if (containerRef.current) ro.observe(containerRef.current);
    if (containerComponentRef.current)
      ro.observe(containerComponentRef.current);

    window.addEventListener("resize", onResize);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useLenis(({ scroll }) => {
    currentScrollY.set(scroll);

    const s1 = section1.current;
    const s2 = section2.current;

    scrollProgress.set(calcProgress(scroll, s1.start, s1.range));

    scrollY.set(calcProgress(scroll, s2.start, s2.range));
  });

  return (
    <ReactLenis
      root
      options={{ autoRaf: true, smoothWheel: !isMobile, lerp: 0.03 }}
      ref={lenisRef}
    >
      <div className="min-h-screen overflow-x-clip bg-base-100 text-base-content">
        {/* Scroll Bar */}
        {!isMobile && (
          <>
            <ScrollLightPath scrollY={currentScrollY} />
            <ScrollBarCustom
              scrollY={currentScrollY}
              lenisRef={lenisRef}
              disableNativeScrollbar
            />
          </>
        )}

        <div ref={containerRef} className="relative h-[600vh]">
          {/* 1. Hero Section */}
          <HeroSection scrollProgress={scrollProgress} />
          {/* Next Section */}
          <NextSection scrollProgress={scrollProgress} isMobile={isMobile} />
        </div>

        {/* 2. About Section (Split → Flip → Explain) */}
        <AboutSection isMobile={isMobile} />

        {/* 3. 3D Component Demo Section */}
        <ComponentDemoSection
          ref={containerComponentRef}
          scrollY={scrollY}
          isMobile={isMobile}
        />

        {/* 4. Features Section (Scroll Reveal) */}
        <FeatureSection />

        {/* 5. CTA Section */}
        <CTASection />
      </div>
    </ReactLenis>
  );
}
