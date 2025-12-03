import ComingSoon from "@/components/ComingSoon";
import TitlePage from "@/components/TitlePage";
import Template from "./_Template";
import { useEffect, useRef } from "react";
import ReactLenis, { type LenisRef } from "lenis/react";

export default function Labs() {
  const lenisRef = useRef<LenisRef | null>(null);
  useEffect(() => {
    let refId: number;

    const update = (time: number) => {
      lenisRef.current?.lenis?.raf(time);
      refId = requestAnimationFrame(update);
    };

    refId = requestAnimationFrame(update);

    return () => cancelAnimationFrame(refId);
  }, []);

  return (
    <ReactLenis
      root
      options={{ autoRaf: false, smoothWheel: true, lerp: 0.03 }}
      ref={lenisRef}
    >
      <div className="w-full justify-center flex">
        <div className="max-w-7xl w-full">
          <TitlePage title="Labs" description="Экспериментальные компоненты" />
          <ComingSoon
            title="Экспериментальная зона"
            description="Здесь будут представлены экспериментальные и инновационные UI компоненты. Следите за обновлениями!"
          />
          <Template />
        </div>
      </div>
    </ReactLenis>
  );
}
