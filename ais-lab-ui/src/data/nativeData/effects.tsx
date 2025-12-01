import { TextRotate, Counter } from "@ui/index";
import { lazy } from "react";
import type { ShowcaseItem } from ".";
import { Hash, Repeat, Zap, Layers, Grid, Heart } from "lucide-react";

// Тяжелые компоненты lazy
const BorderBeam = lazy(() => import("@ui/Animations/BorderBeam"));
const ShadowBeam = lazy(() => import("@ui/Animations/ShadowBeam"));
const Background = lazy(() => import("@ui/Bg/Background"));

const data = ["React", "TypeScript", "Tailwind", "Motion", "Vite", "UI/UX"];

const beamColors = ["#ff0000", "#00ff00", "#0000ff"];

const effects: ShowcaseItem[] = [
  {
    title: "Counter",
    description: "Анимированный счетчик",
    category: "Эффекты",
    icon: <Hash className="text-primary" />,
    preview: () => (
      <div className="flex gap-4">
        <Counter value={42} size="2xl" variant="primary" />
        <Counter value={99} size="2xl" variant="success" />
      </div>
    ),
  },
  {
    title: "Text Rotate",
    description: "Вращение текста",
    category: "Эффекты",
    icon: <Repeat className="text-accent" />,
    preview: () => (
      <TextRotate className="text-lg font-bold text-primary">
        {data.map((tag, i) => (
          <span key={i}>{tag}</span>
        ))}
      </TextRotate>
    ),
  },
  {
    title: "Border Beam",
    description: "Анимированная граница",
    category: "Эффекты",
    icon: <Zap className="text-error" />,
    preview: () => (
      <BorderBeam
        duration={10}
        size={10}
        thickness={2}
        glow
        variant="error"
        blur
      >
        <div className="p-4 font-bold bg-base-100">Border Beam</div>
      </BorderBeam>
    ),
    fallback: <div className="p-4 font-bold bg-base-100">Border Beam</div>,
  },
  {
    title: "Shadow Beam",
    description: "Анимированная тень",
    category: "Эффекты",
    icon: <Layers className="text-warning" />,
    preview: () => (
      <ShadowBeam colors={beamColors}>
        <div className="p-4 font-bold bg-base-100 rounded-xl">Shadow Beam</div>
      </ShadowBeam>
    ),
    fallback: (
      <div className="p-4 font-bold bg-base-100 rounded-xl">Shadow Beam</div>
    ),
  },
  {
    title: "Background Dots",
    description: "Задний фон",
    category: "Эффекты",
    icon: <Grid className="text-info" />,
    preview: () => (
      <Background
        duration={40}
        glow
        variant="dots"
        gap={20}
        size={30}
        dotSize={2}
        angle={30}
        animation="move"
      />
    ),
    fallback: <div className="h-20 w-full bg-base-200" />,
  },
  {
    title: "Background Grid",
    description: "Задний фон",
    category: "Эффекты",
    icon: <Grid className="text-success" />,
    preview: () => (
      <Background
        duration={3}
        variant="grid"
        color="error"
        gap={20}
        size={30}
        dotSize={2}
        angle={30}
        animation="wave"
      />
    ),
    fallback: <div className="h-20 w-full bg-base-200" />,
  },
  {
    title: "Background Custom",
    description: "Задний фон",
    category: "Эффекты",
    icon: <Heart className="text-error" />,
    preview: () => (
      <Background
        duration={30}
        customPattern="💕"
        gap={60}
        color="error"
        glow
        size={40}
        angle={10}
        reverse
        animation="move"
      />
    ),
    fallback: <div className="h-20 w-full bg-base-200" />,
  },
];
export default effects;
