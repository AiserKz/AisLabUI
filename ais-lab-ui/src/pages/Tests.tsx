import { images } from "@/data/testData";
import { useEffect, useState } from "react";

import UiCardsTest from "@/components/UiCardsTest";
import TitlePage from "@/components/TitlePage";
import Background from "@/components/ui/Bg/Background";
import { Button } from "@/components/ui";

export default function Tests() {
  const [loading, setLoading] = useState<boolean>(false);

  const [open, setOpen] = useState<boolean>(false);

  const [value, setValue] = useState<number>(0);
  const [data] = useState<string[]>([
    "React",
    "TypeScript",
    "Tailwind",
    "Motion",
    "Vite",
    "UI/UX",
    "Figma",
  ]);
  const handleTest = () => setLoading(!loading);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setValue((prev) => prev + 1);
  //   }, 2000);
  //   return () => clearInterval(interval);
  // }, []);

  // useEffect(() => {
  //   if (value > 100) setValue(0);
  // }, [value]);

  const [dev, setDev] = useState<boolean>(
    localStorage.getItem("dev") === "true"
  );

  useEffect(() => {
    localStorage.setItem("dev", String(dev));
  }, [dev]);

  return (
    <div className="w-full justify-center flex">
      <div className="max-w-7xl w-full">
        <div>
          <TitlePage title="Тесты" description="Тестовые компоненты" />
          <div className="w-full flex items-center justify-end">
            <Button variant="primary" size="lg" onClick={() => setDev(!dev)}>
              {!dev ? "Витрина" : "Разработка"}
            </Button>
          </div>
        </div>
        {dev ? (
          <div className="flex gap-4 flex-wrap"></div>
        ) : (
          <div className="mt-4 columns-1 md:columns-3 gap-4 pb-10 space-y-4">
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
              <Background.Parallax sensitivity={2} smooth smoothness={0.1} />
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
          </div>
        )}
      </div>
    </div>
  );
}
