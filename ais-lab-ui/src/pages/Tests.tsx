import { images } from "@/data/testData";
import { useEffect, useRef, useState } from "react";

import UiCardsTest from "@/components/UiCardsTest";
import TitlePage from "@/components/TitlePage";
import Background from "@/components/ui/Bg/Background";
import { BorderBeam, Button, Card } from "@/components/ui";

import { AnimatePresence, motion } from "framer-motion";
import FadeIn, {
  FadeInMove,
  FadeInScale,
} from "@/components/uiMotion/Fade/FadeIn";
import {
  Bounce,
  Flip,
  Float,
  Pulse,
  Shake,
} from "@/components/uiMotion/Transform/Transform";
import LetterGlitch from "@/components/uiMotion/BG/LetterGlitch";

import MaskImage from "@/components/uiMotion/Image/MaskImage";
import SpliteImageCard from "@/components/uiMotion/Image/SpliteImageCard";
import InfinityCarousel from "@/components/uiMotion/Image/InfiniteCarousel";
import TextLabelSvg from "@/components/TextLabelSvg";
import SvgTextAnimation from "@/components/uiMotion/Text/SvgTextAnimation";
import TextAnimationCounter from "@/components/uiMotion/Text/CounterTextAnimation";
import FocusToScrollAnimation from "@/components/uiMotion/Container/FocusToScrollAnimation";
import CardTilt from "@/components/uiMotion/Container/CardTilt";
import HorizontalScrollSim from "@/components/uiMotion/Container/HorizontalScrollSim";
import CardZoomToScroll from "@/components/uiMotion/Container/CardZoomToScroll";
import CardStackFour from "@/components/uiMotion/Container/CardStackFour";
import BlurTextScrollAnimation from "@/components/uiMotion/Text/BlurTextScrollAnimation";
import FooterCardScale from "@/components/uiMotion/Container/FooterCardScale";

// <motion.div
//   key="dev"
//   initial={{ opacity: 0, filter: "blur(10px)", x: -40 }}
//   animate={{ opacity: 1, filter: "blur(0px)", x: 0 }}
//   transition={{ duration: 0.3 }}
//   exit={{ opacity: 0, filter: "blur(10px)", x: -40 }}
//   className="flex flex-col gap-10 items-center justify-center pb-60"
// >
// </motion.div>
export default function Tests() {
  const [loading, setLoading] = useState<boolean>(false);
  const [autoLoading, setLoadingAuto] = useState<boolean>(false);
  const timerRef = useRef<number>(0);

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
    <div className="w-full justify-center flex">
      <div className="max-w-7xl w-full">
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
            <div className="pb-2000">
              {!loading && (
                <div className="space-y-10 flex flex-col justify-center">
                  {/* <Test /> */}
                  <div className="flex justify-center">
                    <MaskImage src={images[3]} className="w-100" radius={150} />
                  </div>
                  <div className=" flex justify-center items-center">
                    <BorderBeam
                      className="w-fit h-fit rounded-box"
                      size={40}
                      glow
                    >
                      <Card
                        className="w-200 h-100 flex justify-center items-center text-6xl"
                        variant="default"
                      >
                        AisLabUi
                      </Card>
                    </BorderBeam>
                  </div>
                  <div className="flex justify-center my-100">
                    <CardStackFour>
                      {[1, 2, 3, 4].map((item, index) => (
                        <CardStackFour.Card
                          key={index}
                          className="w-55 h-90 text-6xl bg-base-300"
                        >
                          {item}
                        </CardStackFour.Card>
                      ))}
                    </CardStackFour>
                  </div>
                  <div className="flex flex-col space-y-10 items-center justify-center my-100">
                    <BlurTextScrollAnimation>
                      {[
                        "Aiser",
                        "Lab",
                        "UI",

                        "Animation",
                        "Blur",
                        "NativeUi",
                      ].map((item, _) => (
                        <BlurTextScrollAnimation.Text>
                          {item}
                        </BlurTextScrollAnimation.Text>
                      ))}
                    </BlurTextScrollAnimation>
                  </div>

                  <div className="overflow-hid">
                    <SpliteImageCard src={images[10]} height={450} />
                  </div>
                  <InfinityCarousel
                    images={images}
                    className="h-200 w-100"
                    vertical
                  />
                  <InfinityCarousel images={images} />

                  <div className="flex justify-center">
                    <SvgTextAnimation svg={<TextLabelSvg />} />
                  </div>

                  <div className="h-[300dvh] mt-100">
                    <div className="flex justify-center sticky top-100">
                      <TextAnimationCounter text="AisLab" />
                    </div>
                  </div>
                  <div className="h-[300dvh] mt-100">
                    <div className="flex justify-center sticky top-100">
                      <TextAnimationCounter
                        text="Native UI"
                        viewPercentage={70}
                      />
                    </div>
                  </div>
                  <div className="flex justify-center my-100">
                    <FocusToScrollAnimation>
                      <span className="text-8xl font-bold">MotionUI</span>
                    </FocusToScrollAnimation>
                  </div>
                  <div className="flex justify-center">
                    <CardTilt className="h-100 w-70 bg-primary flex justify-center items-center">
                      <span className="text-3xl font-bold">MotionUI</span>
                    </CardTilt>
                  </div>
                  <div className="flex justify-center mt-100">
                    <HorizontalScrollSim>
                      {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div
                          key={item}
                          className="p-5 rounded-box text-2xl bg-linear-to-l to-info from-info/70"
                        >
                          Item {item}
                        </div>
                      ))}
                    </HorizontalScrollSim>
                  </div>
                  <div className="flex my-100">
                    <div className="h-[400dvh] bg-base-200 w-full">
                      <CardZoomToScroll className="sticky top-80">
                        <span className="text-3xl font-bold">MotionUI</span>
                      </CardZoomToScroll>
                    </div>
                  </div>
                  <div className="mt-100 flex items-center justify-center">
                    <FooterCardScale>
                      <div>End</div>
                    </FooterCardScale>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <motion.div
              key="vitrina"
              initial={{ opacity: 0, filter: "blur(10px)", x: 40 }}
              animate={{ opacity: 1, filter: "blur(0px)", x: 0 }}
              transition={{ duration: 0.3 }}
              exit={{ opacity: 0, filter: "blur(10px)", x: 40 }}
              className="mt-4 columns-1 md:columns-3 gap-4 pb-10 space-y-4"
            >
              <FadeIn>
                <UiCardsTest title="FadeIn">FadeIn</UiCardsTest>
              </FadeIn>
              <FadeInMove>
                <UiCardsTest title="FadeInMove">FadeInMove</UiCardsTest>
              </FadeInMove>
              <FadeInScale>
                <UiCardsTest title="FadeInScale"></UiCardsTest>
              </FadeInScale>
              <Pulse>
                <UiCardsTest title="Pulse">Pulse</UiCardsTest>
              </Pulse>
              <Bounce>
                <UiCardsTest title="Bounce">Bounce</UiCardsTest>
              </Bounce>
              {/* <Rotate>
                    <UiCardsTest title="Rotate">Rotate</UiCardsTest>
                  </Rotate> */}
              <Float>
                <UiCardsTest title="Float">Float</UiCardsTest>
              </Float>
              <Shake>
                <UiCardsTest title="Shake">Shake</UiCardsTest>
              </Shake>
              <Flip>
                <UiCardsTest title="Flip">Flip</UiCardsTest>
              </Flip>
              <UiCardsTest title="LetterGlitch">
                <LetterGlitch
                  glitchColors={["#2b4539", "#61dca3", "#61b3dc"]}
                  characters="AisLabUi"
                  glitchSpeed={100}
                  outerVignette
                />
              </UiCardsTest>
              <UiCardsTest title="Test" className="relative overflow-hidden">
                <motion.div
                  className="absolute w-full h-full bg-linear-to-r from-purple-500 via-pink-500 to-red-500"
                  animate={{ x: ["0%", "100%", "0%"] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </UiCardsTest>
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
