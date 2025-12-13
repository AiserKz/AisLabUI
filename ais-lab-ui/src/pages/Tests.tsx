import { images } from "@/data/testData";
import { useEffect, useRef, useState } from "react";

import UiCardsTest from "@/components/UiCardsTest";
import TitlePage from "@/components/TitlePage";
import Background from "@/components/ui/Bg/Background";
import { Button } from "@/components/ui";

import { AnimatePresence, motion } from "framer-motion";

import SpliteImageCard from "@/components/uiMotion/Image/SpliteImageCard";

import { ReactLenis, type LenisRef } from "lenis/react";

export default function Tests() {
  const [loading, setLoading] = useState<boolean>(false);
  const [autoLoading, setLoadingAuto] = useState<boolean>(false);
  const timerRef = useRef<number>(0);

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

  const [dev, setDev] = useState<boolean>(
    localStorage.getItem("dev") === "true"
  );

  const handleLoadingAuto = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (autoLoading) {
      setLoadingAuto(false);
      return;
    }
    setLoadingAuto(true);
    timerRef.current = window.setInterval(() => {
      handleLoading();
    }, 10000);
  };
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 200);
  };

  useEffect(() => {
    localStorage.setItem("dev", String(dev));
  }, [dev]);

  return (
    <ReactLenis
      root
      options={{ autoRaf: false, smoothWheel: true, lerp: 0.03 }}
      ref={lenisRef}
    >
      <div className="w-full max-w-7xl mx-auto justify-center flex">
        <div className=" w-full">
          <div>
            <TitlePage title="Тесты" description="Тестовые компоненты" />
            <div className="w-full flex items-center justify-between">
              <div>
                <p className="mr-4">Загрузка:</p>
                <Button variant="primary" size="lg" onClick={handleLoading}>
                  {!loading ? "Загрузить" : "Скрыть"}
                </Button>
              </div>
              <div>
                <p>Автоматическая загрузка:</p>
                <Button variant="primary" size="lg" onClick={handleLoadingAuto}>
                  {autoLoading ? "Остановить" : "Запустить"}
                </Button>
              </div>
              <div>
                <p className="mr-4">Режим:</p>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => setDev(!dev)}
                >
                  {!dev ? "Витрина" : "Разработка"}
                </Button>
              </div>
            </div>
          </div>
          <AnimatePresence>
            {dev ? (
              <div className="pb-0"></div>
            ) : (
              <motion.div
                key="vitrina"
                initial={{ opacity: 0, filter: "blur(10px)", x: 40 }}
                animate={{ opacity: 1, filter: "blur(0px)", x: 0 }}
                transition={{ duration: 0.3 }}
                exit={{ opacity: 0, filter: "blur(10px)", x: 40 }}
                className=""
              >
                <div className="space-y-10 flex flex-col justify-center my-100">
                  <SpliteImageCard src={images[10]} height={450} />
                </div>

                <UiCardsTest
                  title="Background - Wave Ring"
                  className="overflow-hidden min-h-80 relative bg-transparent"
                >
                  <Background animation="wave" duration={3} />
                </UiCardsTest>

                <UiCardsTest
                  title="Background - Multi Wave"
                  className="overflow-hidden min-h-80 relative bg-transparent"
                >
                  <Background.Parallax
                    sensitivity={2}
                    smooth
                    smoothness={0.1}
                  />
                  <Background
                    shift={30}
                    animation="move"
                    angle={30}
                    glow
                    variant="grid"
                    dotSize={1}
                    color="info"
                    size={60}
                    paralax
                  />
                </UiCardsTest>

                <UiCardsTest
                  title="Background - Pulse Ring"
                  className="overflow-hidden relative min-h-80 bg-transparent"
                >
                  <Background
                    animation="pulseRing"
                    paralax
                    duration={2}
                    color="warning"
                    angle={30}
                  />
                </UiCardsTest>
                <UiCardsTest
                  title="Background - Pulse Ring"
                  className="overflow-hidden relative min-h-80 bg-transparent"
                >
                  <Background
                    src={images[3]}
                    paralax
                    duration={5}
                    color="warning"
                    className="bg-black"
                    shift={60}
                  />
                </UiCardsTest>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </ReactLenis>
  );
}
