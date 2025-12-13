import {
  BlurTextScrollAnimation,
  CounterTextAnimation,
  SvgTextAnimation,
} from "@/components/uiMotion/Text";
import FadeIn from "@/components/uiMotion/Fade/FadeIn";
import LetterGlitch from "@/components/uiMotion/BG/LetterGlitch";
import { Float as TransformFloat } from "@/components/uiMotion/Transform/Transform";
import type {
  ComponentControllProps,
  PropControl,
} from "@/types/component-controls";
import TextLabelSvg from "@/components/TextLabelSvg";
import CardTilt from "@/components/uiMotion/Container/CardTilt";
import CardZoomToScroll from "@/components/uiMotion/Container/CardZoomToScroll";
import HorizontalScrollSim from "@/components/uiMotion/Container/HorizontalScrollSim";
import FocusToScrollAnimation from "@/components/uiMotion/Container/FocusToScrollAnimation";
import FooterCardScale from "@/components/uiMotion/Container/FooterCardScale";
import CardStackFour from "@/components/uiMotion/Container/CardStackFour";
import SpliteImageCard from "@/components/uiMotion/Image/SpliteImageCard";
import { images } from "../testData";
import MaskImage from "@/components/uiMotion/Image/MaskImage";
import InfinityCarousel from "@/components/uiMotion/Image/InfiniteCarousel";

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
const variants = [
  "default",
  "primary",
  "secondary",
  "accent",
  "info",
  "success",
  "warning",
  "error",
];

const baseViewControllers: PropControl[] = [
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
];

export const motionPreviewData: ComponentControllProps[] = [
  {
    id: 1,
    title: "Blur Text Scroll",
    description: "Motion/Text",
    component: BlurTextScrollAnimation,
    controllers: [...baseViewControllers],
    defaultProps: {},
    previewText: <div className="text-6xl">MotionUi</div>,
  },
  {
    id: 2,
    title: "Text Counter",
    description: "Motion/Text",
    component: CounterTextAnimation,
    controllers: [...baseViewControllers],
    defaultProps: {},
  },
  {
    id: 3,
    title: "SVG Text Draw",
    description: "Motion/Text",
    component: SvgTextAnimation,
    controllers: [
      ...baseViewControllers,
      {
        name: "glow",
        label: "Glow",
        type: "boolean",
      },
    ],
    defaultProps: { svg: <TextLabelSvg /> },
  },
  {
    id: 4,
    title: "CardTilt",
    description: "Motion/Transform",
    component: CardTilt,
    controllers: [...baseViewControllers],
    previewText: (
      <div className="bg-primary flex items-center justify-center text-4xl rounded-box w-60 h-80">
        AisLabUI
      </div>
    ),
  },
  {
    id: 5,
    title: "CardZoomToScroll",
    description: "Motion/Transform",
    component: CardZoomToScroll,
    controllers: [...baseViewControllers],
    previewText: (
      <div className="bg-primary flex items-center justify-center text-4xl rounded-box w-60 h-40 rounded-box">
        AisLabUI
      </div>
    ),
  },
  {
    id: 6,
    title: "HorizontalScrollSim",
    description: "Motion/Card",
    component: HorizontalScrollSim,
    controllers: [...baseViewControllers],
    previewText: ["AisLabUi", "NativeUi", "MotionUi", "Tailwind", "React"].map(
      (tag, i) => (
        <div
          key={i}
          className="bg-primary flex items-center justify-center text-4xl rounded-box w-60 h-40 rounded-box"
        >
          {tag}
        </div>
      )
    ),
  },
  {
    id: 7,
    title: "FocusToScrollAnimation",
    description: "Motion/Card",
    component: FocusToScrollAnimation,
    controllers: [...baseViewControllers],
    previewText: <div className="text-8xl font-bold">AisLabUI</div>,
  },
  {
    id: 8,
    title: "FooterCardScale",
    description: "Motion/Card",
    component: FooterCardScale,
    controllers: [
      ...baseViewControllers,
      {
        name: "variant",
        type: "select",
        options: variants,
        defaultValue: "primary",
      },
    ],
    previewText: <div className="text-8xl font-bold">AisLabUI</div>,
  },
  {
    id: 9,
    title: "CardStackFour",
    description: "Motion/Card",
    component: CardStackFour,
    controllers: [...baseViewControllers],
    previewText: [1, 2, 3, 4].map((tag, i) => (
      <CardStackFour.Card key={i}>
        <div
          className={`flex items-center justify-center text-4xl rounded-box w-60 h-100 rounded-box ${
            i % 2 == 0 ? "bg-primary" : "bg-info"
          }`}
        >
          {tag}
        </div>
      </CardStackFour.Card>
    )),
  },
  {
    id: 10,
    title: "SplitImageCard",
    description: "Motion/Image",
    component: SpliteImageCard,
    controllers: [
      {
        name: "src",
        label: "Src",
        type: "text",
      },
      {
        name: "height",
        label: "Height",
        type: "number",
        min: 100,
        max: 1000,
      },
      {
        name: "count",
        label: "Count",
        type: "select",
        options: [2, 3, 4, 5],
      },
      {
        name: "top",
        label: "Top",
        type: "number",
        max: 1000,
      },
      {
        name: "item1",
        label: "Item 1",
        type: "text",
      },
      {
        name: "item2",
        label: "Item 2",
        type: "text",
      },
      {
        name: "item3",
        label: "Item 3",
        type: "text",
      },
      {
        name: "item4",
        label: "Item 4",
        type: "text",
      },
      {
        name: "item5",
        label: "Item 5",
        type: "text",
      },
    ],
    defaultProps: { src: images[3], height: 300, count: 3, top: 300 },
    previewText: "AisLabUI",
  },
  {
    id: 11,
    title: "CardStack",
    description: "Motion/Card",
    component: MaskImage,
    controllers: [
      {
        name: "src",
        label: "Src",
        type: "text",
      },
      {
        name: "variant",
        label: "Variant",
        type: "select",
        options: ["blur", "grayscale", "brightness"],
      },
      {
        name: "radius",
        label: "Radius",
        type: "number",
        min: 10,
        max: 500,
      },
    ],
    defaultProps: { src: images[3], variant: "grayscale", radius: 300 },
  },
  {
    id: 12,
    title: "Fade In",
    description: "Motion/Simple",
    component: FadeIn,
    previewText: <div className="btn btn-primary">AisLabUi</div>,
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
    id: 13,
    title: "Letter Glitch",
    description: "Motion/Simple",
    component: LetterGlitch,
    controllers: [
      {
        name: "glitchSpeed",
        label: "Glitch Speed",
        type: "number",
        min: 0.1,
        max: 100,
      },
      {
        name: "smooth",
        label: "Smooth",
        type: "boolean",
      },
      {
        name: "centerVignette",
        label: "Center Vignette",
        type: "boolean",
      },
      {
        name: "outerVignette",
        label: "Outer Vignette",
        type: "boolean",
      },
      {
        name: "characters",
        label: "Characters",
        type: "text",
      },
    ],
    defaultProps: {
      glitchSpeed: 80,
      outerVignette: true,
      centerVignette: false,
      characters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789",
    },
  },
  // BD = PosterSql, Frontend = ReactVite, Backend = FastApi, Auth = JWT Token
  {
    id: 14,
    title: "3D Float",
    description: "Motion/Transform",
    component: TransformFloat,
    controllers: [],
    defaultProps: {},
    previewText: (
      <div className="w-32 h-32 bg-primary rounded-xl shadow-xl flex items-center justify-center text-secondary-content font-bold">
        Float
      </div>
    ),
  },
  {
    id: 15,
    title: "Infinite Carousel",
    description: "Motion/Transform",
    component: InfinityCarousel,
    controllers: [
      {
        name: "vertical",
        label: "Vertical",
        type: "boolean",
      },
      {
        name: "size",
        label: "Size",
        type: "number",
        max: 100,
      },
      {
        name: "duration",
        label: "Duration",
        type: "number",
        max: 100,
      },
      {
        name: "delay",
        label: "Delay",
        type: "number",
        max: 60,
      },
      {
        name: "loop",
        label: "Loop",
        type: "boolean",
      },
      {
        name: "linearOpacity",
        label: "Linear Opacity",
        type: "number",
      },
    ],
    defaultProps: {
      size: 15,
      images: images,
      duration: 30,
      ease: "linear",
      loop: true,
      linearOpacity: 20,
    },
    previewText: (
      <div className="w-32 h-32 bg-primary rounded-xl shadow-xl flex items-center justify-center text-secondary-content font-bold">
        Float
      </div>
    ),
  },
];
