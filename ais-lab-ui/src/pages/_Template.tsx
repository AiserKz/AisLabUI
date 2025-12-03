import "@/style/Tests.css";
import "@/style/tests3.css";
import "@/style/tests4.css";
import { images } from "@/data/testData";

import { ArrowDown, Settings } from "lucide-react";

import { motion } from "framer-motion";
import TextLabelSvg from "@/components/TextLabelSvg";

export default function Template() {
  return (
    <>
      <div className="min-h-[70vh] text-center text-8xl font-bold flex justify-center items-center">
        <div className="flex items-center flex-col justify-center gap-4">
          <h1>Down</h1>
          <motion.span
            animate={{ y: [0, 20, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <ArrowDown size={110} />
          </motion.span>
        </div>
      </div>
      <div className="w-full space-y-20">
        <div className="flex w-full justify-around text-black">
          <div className="test1 bg-purple-300 center">Rotate</div>
          <div className="test2 bg-amber-200 center">Rotate3D</div>
          <div className="test3 bg-emerald-200 center">ScrollView</div>
        </div>

        <div className="image-list flex w-full justify-around text-black">
          <img src={images[0]} alt="" className="image-1 center object-cover" />
          <img src={images[1]} alt="" className="image-2 center object-cover" />
          <img src={images[2]} alt="" className="image-3 center object-cover" />
          <img src={images[3]} alt="" className="image-4 center object-cover" />
        </div>

        <div className="flex justify-around gap-4 w-full h-[120dvh]">
          <div className="stack-group">
            {[...Array(4).keys()].map((_, i) => (
              <img
                className="stack-card rounded-box object-cover"
                key={i}
                src={images[i + 1]}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-around gap-4 w-full text-black">
          <div className="stack-test-2 ">
            <div className="stack-card-2 bg-purple-300">1</div>
            <div className="stack-card-2 bg-amber-300">2</div>
            <div className="stack-card-2 bg-orange-300">3</div>
            <div className="stack-card-2 bg-green-300">4</div>
          </div>
        </div>

        <div className="text-list flex flex-col w-full text-center space-y-10">
          {[...Array(7).keys()].map((_, i) => (
            <span key={i} className="text-7xl blurFade">
              AisLabUi {i + 1}
            </span>
          ))}
        </div>

        <div className="carousel-test">
          <div className="group-test">
            {[...images, ...images].map((image, i) => (
              <div key={i} className="card-test overflow-hidden">
                <img
                  src={image}
                  alt=""
                  className="w-full h-full object-cover rounded-box"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-full justify-center">
          <div className="test-stack w-100 h-65 p-10 overflow-hidden">
            <div className="bg-info w-50 h-50 rounded-box card-stack">1</div>
            <div className="bg-primary w-50 h-50 rounded-box card-stack">2</div>
            <div className="bg-warning w-50 h-50 rounded-box card-stack">3</div>
            <div className="bg-accent w-50 h-50 rounded-box card-stack">4</div>
          </div>
        </div>

        <div className="flex w-full justify-center ">
          <div className="overflow-y-scroll h-120 bg-base-300 rounded-box p-6 hide-scrollbar">
            {[...Array(100).keys()].map((_, i) => (
              <span
                key={i}
                className="w-50 h-20 bg-base-200 flex items-center justify-center rounded-field test-item transition-all duration-300"
              >
                Text {i + 1}
              </span>
            ))}
          </div>
        </div>

        {/* New CSS Effects Section */}
        <div className="w-full space-y-20 py-20">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold mb-10">New CSS Effects</h2>

            {/* 1. Scroll Reveal Text */}
            <div className="h-[50vh] flex items-center justify-center">
              <h2 className="scroll-reveal-text">Scroll to Reveal This Text</h2>
            </div>

            {/* 2. 3D Rotate Cube */}
            <div className="scroll-rotate-wrapper">
              <div className="scroll-rotate-box">3D</div>
            </div>

            {/* 3. Neon Pulse Card */}
            <div className="neon-pulse-card"></div>

            {/* 4. Shimmer Button */}
            <button className="shimmer-btn">Hover Me</button>

            {/* 5. Scroll Scale Blur */}
            <div className="scroll-scale-blur">
              <h3>Scale & Blur</h3>
            </div>

            {/* 6. Glitch Text */}
            <div className="py-10">
              <div className="glitch-text" data-text="GLITCH EFFECT">
                GLITCH EFFECT
              </div>
            </div>

            {/* 7. Gradient Border Rotate */}
            <div className="gradient-border-card"></div>

            {/* 8. Scroll Typing */}
            <div className="flex justify-center py-10">
              <div className="scroll-typing">Typing effect on scroll...</div>
            </div>

            {/* 9. Floating Bubbles */}
            <div className="bubbles-container bg-base-200">
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
            </div>

            {/* 10. 3D Flip Card */}
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h2>Hover Me</h2>
                </div>
                <div className="flip-card-back">
                  <h2>Back Side</h2>
                </div>
              </div>
            </div>

            {/* 11. Scroll Progress Card */}
            <div className="scroll-progress-card">
              <div className="scroll-progress-bar"></div>
              <h3 className="z-10 font-bold text-2xl">Scroll Progress</h3>
            </div>

            {/* 13. Focus Blur */}
            <div className="flex justify-center ">
              <div className="focus-blur-container">
                <div className="focus-blur-item">1</div>
                <div className="focus-blur-item">2</div>
                <div className="focus-blur-item">3</div>
                <div className="focus-blur-item">4</div>
                <div className="focus-blur-item">5</div>
              </div>
            </div>

            {/* 14. Scroll Rotation Gallery */}
            <div className="py-10">
              <div className="scroll-gallery-item">A</div>
              <div className="scroll-gallery-item">B</div>
              <div className="scroll-gallery-item">C</div>
            </div>

            {/* 15. Liquid Button */}
            <button
              className="liquid-btn"
              onMouseMove={(e) => {
                const btn = e.currentTarget;
                const x = e.nativeEvent.offsetX;
                const y = e.nativeEvent.offsetY;
                btn.style.setProperty("--x", x + "px");
                btn.style.setProperty("--y", y + "px");
              }}
            >
              <span>Liquid Hover</span>
            </button>
          </div>
        </div>

        {/* Tests 3: Scroll-Driven Effects */}
        <div className="w-full space-y-96 py-20 ">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold mb-10">
              Scroll-Driven Effects (Tests 3)
            </h2>

            {/* 1. Scroll Highlight Text */}
            <div className="py-20">
              <span className="scroll-highlight-text">
                Reading this text highlights it as you scroll down.
              </span>
            </div>

            {/* 2. Parallax Image Reveal */}
            <div className="flex justify-center items-center">
              <div className="parallax-wrapper w-120">
                <img
                  src={images[3]}
                  alt="Parallax"
                  className="parallax-image rounded-box"
                />
              </div>
            </div>
            {/* 3. Expanding Width Card */}
            <div className="expanding-card bg-linear-90 from-primary/80 to-info/80 mt-50 mx-auto">
              Expand on Scroll
            </div>

            {/* 4. Scroll Rotation Gear */}
            <div className="scroll-gear mt-50 mx-auto">
              <div className="w-full h-full border-4 border-dashed border-primary rounded-full flex items-center justify-center">
                <Settings size={100} />
              </div>
            </div>

            {/* 5. Sticky Stack Effect */}
            <div className="sticky-stack-wrapper my-50">
              <div className="sticky-card">Card 1</div>
              <div className="sticky-card">Card 2</div>
              <div className="sticky-card">Card 3</div>
              <div className="sticky-card">Card 4</div>
            </div>

            {/* 6. Blur to Focus Text */}
            <div className="blur-focus-text my-100">FOCUS</div>

            {/* 7. Perspective Tilt Scroll */}
            <div className="perspective-tilt-card my-100 mx-auto">3D Tilt</div>

            {/* 8. Horizontal Scroll Simulation */}
            <div className="">
              <div className="horizontal-scroll-sim my-100">
                <div className="h-card">Item 1</div>
                <div className="h-card">Item 2</div>
                <div className="h-card">Item 3</div>
                <div className="h-card">Item 4</div>
                <div className="h-card">Item 5</div>
                <div className="h-card">Item 6</div>
              </div>
            </div>

            {/* 9. Scroll Parallax BG */}
            <div className="rounded-box px-10 h-dvh  parallax-layer">
              <div className="h-[200%] w-full bg-base-100">
                <img
                  src={images.at(-1)}
                  alt=""
                  className="paralax-bg rounded-box"
                />
              </div>
            </div>

            {/* Zoom in on scroll */}
            <div className="zoom-card-container mt-100">
              <div className="zoom-card">Zoom In On Scroll</div>
            </div>
          </div>

          {/* Text Svg visable */}
          <div className="flex justify-center items-center mt-200 min-h-screen ">
            <div className="text-svg justify-center flex flex-col items-center w-full">
              <h1 className="text-4xl font-bold text-center">SVG Text</h1>
              <TextLabelSvg />
            </div>
          </div>

          {/* Text on blur */}
          <div className="flex justify-center items-center">
            <div className="text-center text-8xl reveal-text ">
              <span>N</span>
              <span>a</span>
              <span>t</span>
              <span>i</span>
              <span>v</span>
              <span>e </span>
              <span>U</span>
              <span>I</span>
            </div>
          </div>

          {/* BG Animation FUll */}
          <div className="flex justify-center mt-200">
            <div className="bg-container">
              <div className="bg-cone bg-linear-90 from-base-200 to-base-300 text-9xl border-t-2 shadow-[0_-20px_40px] border-primary shadow-primary/25">
                END
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
