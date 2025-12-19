import { useEffect, useRef, useState } from "react";

import TitlePage from "@/components/TitlePage";

import { Button } from "@/components/ui";

import { AnimatePresence, motion, useScroll } from "framer-motion";

import SpiralCard from "@/components/SpiralCard";

export default function Tests() {
  const [loading, setLoading] = useState<boolean>(false);
  const [autoLoading, setLoadingAuto] = useState<boolean>(false);
  const timerRef = useRef<number>(0);

  const { scrollYProgress } = useScroll({});

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
              <Button variant="primary" size="lg" onClick={() => setDev(!dev)}>
                {!dev ? "Витрина" : "Разработка"}
              </Button>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {dev ? (
            <div className="pb-100">
              {/* 3. 3D Component Demo Section */}
              <section className="py-32 bg-base-200 overflow-clip ">
                <div className="container mx-auto px-4 h-[600dvh]">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">
                      Готовые компоненты
                    </h2>
                    <p className="text-base-content/60">
                      Все, что нужно для вашего следующего приложения
                    </p>
                  </div>
                  <div className="sticky top-100">
                    <div
                      className="relative h-screen flex items-start justify-center"
                      style={{ perspective: "1600px" }}
                    >
                      {Array.from({ length: 15 }).map((_, i) => (
                        <SpiralCard
                          key={i}
                          index={i}
                          progress={scrollYProgress}
                        >
                          Test
                        </SpiralCard>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          ) : (
            <motion.div
              key="vitrina"
              initial={{ opacity: 0, filter: "blur(10px)", x: 40 }}
              animate={{ opacity: 1, filter: "blur(0px)", x: 0 }}
              transition={{ duration: 0.3 }}
              exit={{ opacity: 0, filter: "blur(10px)", x: 40 }}
              className=""
            ></motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
