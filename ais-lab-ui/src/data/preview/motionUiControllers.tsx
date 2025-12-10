import {
  BlurTextScrollAnimation,
  CounterTextAnimation,
  SvgTextAnimation,
} from "@/components/uiMotion/Text";
import FadeIn from "@/components/uiMotion/Fade/FadeIn";
import LetterGlitch from "@/components/uiMotion/BG/LetterGlitch";
import { Float as TransformFloat } from "@/components/uiMotion/Transform/Transform";
import type { ComponentControllProps } from "@/types/component-controls";

// Common animation easing options
const easeOptions = [
  "linear",
  "easeIn",
  "easeOut",
  "easeInOut",
  "circIn",
  "circOut",
  "circInOut",
  "backIn",
  "backOut",
  "backInOut",
  "anticipate",
];

export const motionPreviewData: ComponentControllProps[] = [
  {
    id: 1,
    title: "Blur Text Scroll",
    description: "Motion/Text",
    component: BlurTextScrollAnimation,
    controllers: [
      {
        name: "viewPercentage",
        label: "View Percentage",
        type: "number",
        min: 0,
        max: 100,
        step: 1,
        defaultValue: 10,
      },
      {
        name: "startPercentage",
        label: "Start Percentage",
        type: "number",
        min: 0,
        max: 100,
        step: 1,
        defaultValue: 30,
      },
    ],
    defaultProps: {},
    previewText: <div className="text-6xl">MotionUi</div>,
  },
  {
    id: 2,
    title: "Text Counter",
    description: "Motion/Text",
    component: CounterTextAnimation,
    controllers: [],
    defaultProps: {},
  },
  {
    id: 3,
    title: "SVG Text Draw",
    description: "Motion/Text",
    component: SvgTextAnimation,
    controllers: [],
    defaultProps: {},
  },
  {
    id: 4,
    title: "Fade In",
    description: "Motion/Simple",
    component: FadeIn,
    previewText: "Hello World",
    controllers: [
      {
        name: "duration",
        label: "Duration",
        type: "number",
        min: 0.1,
        max: 5,
        step: 0.1,
        defaultValue: 0.5,
      },
      {
        name: "delay",
        label: "Delay",
        type: "number",
        min: 0,
        max: 2,
        step: 0.1,
        defaultValue: 0,
      },
      {
        name: "power",
        label: "Power (Distance)",
        type: "number",
        min: 0,
        max: 100,
        step: 5,
        defaultValue: 20,
      },
      {
        name: "ease",
        label: "Ease",
        type: "select",
        options: easeOptions,
        defaultValue: "easeInOut",
      },
    ],
    defaultProps: {
      duration: 0.5,
      delay: 0,
      power: 20,
      ease: "easeInOut",
      innerClassName:
        "p-4 bg-primary text-primary-content rounded-box shadow-xl font-bold",
    },
  },
  {
    id: 5,
    title: "Letter Glitch",
    description: "Motion/Simple",
    component: LetterGlitch,
    controllers: [],
    defaultProps: {},
  },
  {
    id: 6,
    title: "3D Float",
    description: "Motion/Transform",
    component: TransformFloat,
    controllers: [],
    defaultProps: {},
    previewText: (
      <div className="w-32 h-32 bg-secondary rounded-xl shadow-xl flex items-center justify-center text-secondary-content font-bold">
        Float
      </div>
    ),
  },
];
