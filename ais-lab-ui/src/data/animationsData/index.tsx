import {
  BlurTextScrollAnimation,
  CounterTextAnimation,
  SvgTextAnimation,
} from "../../components/uiMotion/Text";
import FadeIn from "../../components/uiMotion/Fade/FadeIn";
import LetterGlitch from "../../components/uiMotion/BG/LetterGlitch";
import { Float as TransformFloat } from "../../components/uiMotion/Transform/Transform";

export const animationsData = [
  {
    id: "text",
    title: "Текст",
    items: [
      {
        id: 1,
        title: "Blur Text Scroll",
        video: "/video/motion/BlurTextScroll.mp4",
        component: BlurTextScrollAnimation,
        description: "Текст плавно становится четким при скролле.",
      },
      {
        id: 2,
        title: "Text Counter",
        video: "/video/motion/TextCounter.mp4",
        component: CounterTextAnimation,
        description: "Анимация счетчика чисел с настройкой скорости.",
      },
      {
        id: 3,
        title: "SVG Text Draw",
        video: "/video/motion/SvgText.mp4",
        component: SvgTextAnimation,
        description: "Эффект прорисовки контура текста SVG.",
      },
    ],
  },
  {
    id: "scroll",
    title: "Скролл",
    items: [
      {
        id: 4,
        title: "Card Tilt",
        video: "/video/motion/CardTilt.mp4",
        description: "3D наклон карточки при скролле.",
      },
      {
        id: 5,
        title: "Zoom to Scroll",
        video: "/video/motion/CardZoomToScroll.mp4",
        description: "Увеличение элемента при прокрутке страницы.",
      },
      {
        id: 6,
        title: "Horizontal Scroll",
        video: "/video/motion/HorizontalScrollSim.mp4",
        description:
          "Симуляция горизонтального скролла при вертикальной прокрутке.",
      },
      {
        id: 7,
        title: "Focus Scroll",
        video: "/video/motion/ScrollFocus.mp4",
        description: "Фокусировка на элементе по центру экрана.",
      },
      {
        id: 8,
        title: "Footer Reveal",
        video: "/video/motion/FooterEnd.mp4",
        description: "Эффект появления футера из-под контента.",
      },
    ],
  },
  {
    id: "cards",
    title: "Карточки",
    items: [
      {
        id: 9,
        title: "Stack Cards",
        video: "/video/motion/FourCard.mp4",
        description: "Стопка карточек, раскрывающаяся при скролле.",
      },
      {
        id: 10,
        title: "Split Image",
        video: "/video/motion/SplitImage.mp4",
        description: "Разделение изображения при наведении или скролле.",
      },
      {
        id: 11,
        title: "Image Mask",
        video: "/video/motion/ImageMask.mp4",
        description: "Маска изображения с курсором-фонариком.",
      },
    ],
  },
  {
    id: "simple",
    title: "Компоненты",
    items: [
      {
        id: 12,
        title: "Fade In",
        component: FadeIn,
        description: "Простое и плавное появление элемента.",
        props: {
          children: "Hello World",
          innerClassName:
            "p-4 bg-primary text-primary-content rounded-box shadow-xl font-bold",
        },
        controls: [
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
            options: [
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
            ],
            defaultValue: "easeInOut",
          },
        ],
      },
      {
        id: 13,
        title: "Letter Glitch",
        component: LetterGlitch,
        description: "Эффект глитча текста при наведении.",
      },
      {
        id: 14,
        title: "3D Float",
        component: TransformFloat,
        description: "3D трансформация и левитация элемента.",
        props: {
          children: (
            <div className="w-32 h-32 bg-secondary rounded-xl shadow-xl flex items-center justify-center text-secondary-content font-bold">
              Float
            </div>
          ),
        },
      },
    ],
  },
  {
    id: "complex",
    title: "Сложные",
    items: [
      {
        id: 15,
        title: "Infinite Carousel",
        video: "/video/motion/InfinitiCarousel.mp4",
        description: "Бесконечная карусель логотипов или карточек.",
      },
    ],
  },
];
