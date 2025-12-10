import { Diff, Avatar } from "@ui/index";

import { images } from "@/data/testData";
import { lazy } from "react";
import type { ShowcaseItem } from ".";
import {
  User,
  Users,
  Image as ImageIcon,
  Repeat,
  Shuffle,
  Smartphone,
} from "lucide-react";

// Тяжелые компоненты lazy
const Carousel = lazy(() => import("@ui/Carousel/Carousel"));
const HoverGallery = lazy(() => import("@ui/Image/HoverGallery"));
const IphoneMockup = lazy(() => import("@ui/Mockup/IphoneMockup"));

const mediaItems: ShowcaseItem[] = [
  {
    id: 29,
    title: "Avatar",
    description: "Аватары пользователей",
    category: "Медиа",
    icon: <User className="text-primary" />,
    preview: () => (
      <div className="flex gap-3">
        <Avatar src={images[1]} size="md" rounded indicator ring />
        <Avatar
          src={images[2]}
          size="md"
          mask="heart"
          variant="primary"
          indicator
          online
        />
      </div>
    ),
  },
  {
    id: 30,
    title: "Avatar Placeholder",
    description: "Аватары с инициалами",
    category: "Медиа",
    icon: <Users className="text-success" />,
    preview: () => (
      <div className="flex gap-3">
        <Avatar label="AI" size="md" indicator rounded variant="success" />
        <Avatar label="UI" size="md" variant="primary" />
      </div>
    ),
  },
  {
    id: 31,
    title: "Carousel",
    description: "Карусель изображений",
    category: "Медиа",
    icon: <ImageIcon className="text-info" />,
    preview: () => (
      <div className="h-full w-full overflow-hidden">
        <Carousel imageData={images.slice(3, 7)} only objectFit="scaleDown" />
      </div>
    ),
    fallback: <div className="h-40 bg-base-200 animate-pulse" />,
  },
  {
    id: 32,
    title: "Hover Gallery",
    description: "Галерея с эффектом при наведении",
    category: "Медиа",
    icon: <Repeat className="text-accent" />,
    preview: () => (
      <HoverGallery className="w-full bg-base-300 h-40">
        {images.slice(1, 4).map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Gallery ${i + 1}`}
            className="object-cover"
          />
        ))}
      </HoverGallery>
    ),
    fallback: (
      <div className="w-full bg-base-200 h-40 rounded-xl animate-pulse" />
    ),
  },
  {
    id: 33,
    title: "Diff Image",
    description: "Сравнение изображений",
    category: "Медиа",
    icon: <Shuffle className="text-warning" />,
    preview: () => (
      <div className="w-full h-full">
        <Diff.Image
          className="z-20 h-full"
          item1={images[3]}
          item2={images[4]}
          filter="blur"
          size={1}
        />
      </div>
    ),
  },
  {
    id: 34,
    title: "Iphone Mockup",
    description: "Мокап для мобильных приложений",
    category: "Медиа",
    icon: <Smartphone className="text-error" />,
    preview: () => (
      <div className="w-full h-full">
        <IphoneMockup label="Mockup" screenImageSrc={images[3]} />
      </div>
    ),
    fallback: (
      <div className="h-48 w-32 bg-base-200 rounded-md animate-pulse" />
    ),
  },
];
export default mediaItems;
