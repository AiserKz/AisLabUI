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
        id: "blur-text",
        title: "Blur Text Scroll",
        video: "/video/motion/BlurTextScroll.mp4",
        component: BlurTextScrollAnimation,
        description: "Текст плавно становится четким при скролле.",
      },
      {
        id: "counter-text",
        title: "Text Counter",
        video: "/video/motion/TextCounter.mp4",
        component: CounterTextAnimation,
        description: "Анимация счетчика чисел с настройкой скорости.",
      },
      {
        id: "svg-text",
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
        id: "card-tilt",
        title: "Card Tilt",
        video: "/video/motion/CardTilt.mp4",
        description: "3D наклон карточки при скролле.",
      },
      {
        id: "card-zoom",
        title: "Zoom to Scroll",
        video: "/video/motion/CardZoomToScroll.mp4",
        description: "Увеличение элемента при прокрутке страницы.",
      },
      {
        id: "horizontal-sim",
        title: "Horizontal Scroll",
        video: "/video/motion/HorizontalScrollSim.mp4",
        description: "Симуляция горизонтального скролла при вертикальной прокрутке.",
      },
      {
        id: "scroll-focus",
        title: "Focus Scroll",
        video: "/video/motion/ScrollFocus.mp4",
        description: "Фокусировка на элементе по центру экрана.",
      },
      {
        id: "footer-reveal",
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
        id: "four-cards",
        title: "Stack Cards",
        video: "/video/motion/FourCard.mp4",
        description: "Стопка карточек, раскрывающаяся при скролле.",
      },
      {
        id: "split-image",
        title: "Split Image",
        video: "/video/motion/SplitImage.mp4",
        description: "Разделение изображения при наведении или скролле.",
      },
      {
        id: "image-mask",
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
        id: "fade-in",
        title: "Fade In",
        component: FadeIn,
        description: "Простое и плавное появление элемента.",
        props: { children: "Hello World", innerClassName: "p-4 bg-primary text-primary-content rounded-box shadow-xl font-bold" },
        controls: [
          { name: "duration", label: "Duration", type: "number", min: 0.1, max: 5, step: 0.1, defaultValue: 0.5 },
          { name: "delay", label: "Delay", type: "number", min: 0, max: 2, step: 0.1, defaultValue: 0 },
          { name: "power", label: "Power (Distance)", type: "number", min: 0, max: 100, step: 5, defaultValue: 20 },
          { name: "ease", label: "Ease", type: "select", options: ["linear", "easeIn", "easeOut", "easeInOut", "circIn", "circOut", "circInOut", "backIn", "backOut", "backInOut", "anticipate"], defaultValue: "easeInOut" }
        ]
      },
      {
        id: "letter-glitch",
        title: "Letter Glitch",
        component: LetterGlitch,
        description: "Эффект глитча текста при наведении.",
      },
      {
        id: "transform",
        title: "3D Float",
        component: TransformFloat,
        description: "3D трансформация и левитация элемента.",
        props: { children: <div className="w-32 h-32 bg-secondary rounded-xl shadow-xl flex items-center justify-center text-secondary-content font-bold">Float</div> }
      },
    ],
  },
  {
    id: "complex",
    title: "Сложные",
    items: [
      {
        id: "infinite-carousel",
        title: "Infinite Carousel",
        video: "/video/motion/InfinitiCarousel.mp4",
        description: "Бесконечная карусель логотипов или карточек.",
      },
    ],
  },
];
