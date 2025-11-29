import {
  Card,
  Checkbox,
  Diff,
  Input,
  InputFile,
  Radio,
  Select,
  Slider,
  Toggle,
  Status,
  Indicator,
  Badge,
  Loading,
  Alert,
  TextRotate,
  Modal,
  Accordion,
  Tooltip,
  Tags,
  Progress,
  RadialProgress,
  ThemeSwitcher,
  Divider,
  Button,
  Avatar,
  Counter,
} from "@ui/index";

import { images } from "@/data/testData";
import { lazy } from "react";
import { Mail } from "lucide-react";

// Тяжелые компоненты lazy
const Carousel = lazy(() => import("@ui/Carousel/Carousel"));
const HoverGallery = lazy(() => import("@ui/Image/HoverGallery"));
const BorderBeam = lazy(() => import("@ui/Animations/BorderBeam"));
const ShadowBeam = lazy(() => import("@ui/Animations/ShadowBeam"));
const Background = lazy(() => import("@ui/Bg/Background"));
const CodeMockup = lazy(() => import("@ui/Mockup/CodeMockup"));
const IphoneMockup = lazy(() => import("@ui/Mockup/IphoneMockup"));

const data = ["React", "TypeScript", "Tailwind", "Motion", "Vite", "UI/UX"];

const beamColors = ["#ff0000", "#00ff00", "#0000ff"];

export const LazyTest = lazy(() =>
  import("@ui/Mockup/CodeMockup").then(
    (module) =>
      new Promise<{ default: React.ComponentType<any> }>((resolve) => {
        setTimeout(() => resolve(module), 2000);
      })
  )
);

type ShowcaseItem = {
  title: string;
  description: string;
  category: string;
  preview: () => React.ReactNode;
  fallback?: React.ReactNode;
};

export const buttons: ShowcaseItem[] = [
  {
    title: "Primary Button",
    description: "Основная кнопка для главных действий",
    category: "Кнопки",
    preview: () => <Button variant="primary">Primary</Button>,
  },
  {
    title: "Outlined Button",
    description: "Кнопка с прозрачным фоном",
    category: "Кнопки",
    preview: () => (
      <Button variant="primary" outlined>
        Outlined
      </Button>
    ),
  },
  {
    title: "Glass Button",
    description: "Кнопка с glass эффектом",
    category: "Кнопки",
    preview: () => <Button glass>Glass</Button>,
  },
];

export const inputs: ShowcaseItem[] = [
  {
    title: "Text Input",
    description: "Текстовое поле с иконкой",
    category: "Формы",
    preview: () => (
      <Input
        placeholder="Email..."
        sizes="sm"
        variant="primary"
        iconLeft={<Mail />}
        className="max-w-xs"
      />
    ),
  },
  {
    title: "File Input",
    description: "Загрузка файлов",
    category: "Формы",
    preview: () => (
      <div className="max-w-xs">
        <InputFile label="Файл" variant="success" />
      </div>
    ),
  },
  {
    title: "Checkbox",
    description: "Переключатель для выбора опций",
    category: "Формы",
    preview: () => <Checkbox label="Checkbox" variant="success" />,
  },
  {
    title: "Radio",
    description: "Радио-кнопка для выбора одного варианта",
    category: "Формы",
    preview: () => <Radio label="Radio" variant="primary" sizes="md" />,
  },
  {
    title: "Select",
    description: "Выпадающий список",
    category: "Формы",
    preview: () => (
      <Select
        options={[
          { value: "1", label: "Option 1" },
          { value: "2", label: "Option 2" },
          { value: "3", label: "Option 3" },
        ]}
        variant="info"
        className="max-w-xs w-full"
      />
    ),
  },
  {
    title: "Toggle",
    description: "Переключатель вкл/выкл",
    category: "Формы",
    preview: () => <Toggle label="Toggle" variant="primary" sizes="md" />,
  },
  {
    title: "Slider",
    description: "Слайдер для выбора значения",
    category: "Формы",
    preview: () => (
      <div>
        <Slider variant="info" className="max-w-xs" />
        <Slider variant="primary" className="max-w-xs" step={25} />
      </div>
    ),
  },
  {
    title: "ThemeSwithcer",
    description: "Переключатель тем",
    category: "Формы",
    preview: () => (
      <div className="flex flex-col justify-center items-center gap-2">
        <ThemeSwitcher className="w-30" />
        <ThemeSwitcher variant="swap" />
        <ThemeSwitcher variant="toggle" />
      </div>
    ),
  },
];

export const cards: ShowcaseItem[] = [
  {
    title: "Standard Card",
    description: "Базовая карточка для контента",
    category: "Контейнеры",
    preview: () => (
      <Card padding="md" className="w-full bg-base-100">
        <h4 className="font-bold">Карточка</h4>
        <p className="text-sm">Базовый дизайн</p>
      </Card>
    ),
  },
  {
    title: "Glass Card",
    description: "Карточка с glass эффектом",
    category: "Контейнеры",
    preview: () => (
      <Card padding="md" glass className="w-full">
        <h4 className="font-bold">Glass</h4>
        <p className="text-sm">Прозрачность</p>
      </Card>
    ),
  },
  {
    title: "3D Hover Card",
    description: "Карточка с 3D эффектом при наведении",
    category: "Контейнеры",
    preview: () => (
      <Card padding="md" hover3d variant="primary" className="w-full">
        <h4 className="font-bold">3D Effect</h4>
        <p className="text-sm">Hover me</p>
      </Card>
    ),
  },
  {
    title: "Image Card",
    description: "Карточка с изображением",
    category: "Контейнеры",
    preview: () => (
      <Card src={images[3]} overlay="lg" className="h-32 w-full">
        <p className="text-white font-bold text-sm">Image</p>
      </Card>
    ),
  },
  {
    title: "Accordion",
    description: "Раскрывающаяся панель",
    category: "Контейнеры",
    preview: () => (
      <div className="w-full">
        <Accordion title="Открыть" variant="primary">
          Скрытый контент
        </Accordion>
      </div>
    ),
  },
  {
    title: "Modal",
    description: "Модальное окно",
    category: "Контейнеры",
    preview: () => (
      <>
        <Button variant="warning" outlined>
          Открыть Modal
        </Button>
        <Modal
          id="demo-modal"
          isOpen={false}
          position="center"
          variant="primary"
          shadow
          glass
        >
          <h2 className="text-2xl font-bold mb-4">Demo Modal</h2>
          <p className="mb-4">Пример модального окна с glass эффектом</p>
          <Button variant="primary">Закрыть</Button>
        </Modal>
      </>
    ),
  },
  {
    title: "Code Mockup",
    description: "Мокап кода",
    category: "Контейнеры",
    preview: () => (
      <CodeMockup copy variant="primary">
        {`import { Button } from "@aisLab/native-ui";`}
        {` < Button label="Button" /> `}
        {` < Button label="Button" /> `}
      </CodeMockup>
    ),
    fallback: <div className="p-4 bg-base-200 h-24 animate-pulse" />,
  },
];

export const statusItems: ShowcaseItem[] = [
  {
    title: "Progress Bar",
    description: "Линейный индикатор прогресса",
    category: "Обратная связь",
    preview: () => (
      <div className="w-full max-w-xs space-y-2">
        <Progress variant="primary" value={60} label="Загрузка..." showLabel />
        <Progress variant="success" value={80} showLabel />
        <Progress variant="warning" value={100} />
        <Progress variant="error" />
      </div>
    ),
  },
  {
    title: "Radial Progress",
    description: "Круговой индикатор прогресса",
    category: "Обратная связь",
    preview: () => (
      <div className="flex gap-4">
        <RadialProgress value={65} variant="info" />
        <RadialProgress value={85} variant="success" />
      </div>
    ),
  },
  {
    title: "Status Indicator",
    description: "Индикатор статуса",
    category: "Обратная связь",
    preview: () => (
      <div className="flex gap-3 items-center">
        <Status variant="info" size="xs" animation />
        <Status variant="success" size="sm" animation />
        <Status variant="primary" size="md" animation />
        <Status variant="warning" size="lg" animation />
        <Status variant="error" size="xl" animation bounce />
      </div>
    ),
  },
  {
    title: "Loading",
    description: "Индикатор загрузки",
    category: "Обратная связь",
    preview: () => (
      <div className="flex gap-4">
        <Loading variant="primary" type="bars" size="xs" />
        <Loading variant="success" type="ball" size="sm" />
        <Loading variant="warning" type="dots" size="md" />
        <Loading variant="default" type="spinner" size="md" />
        <Loading variant="error" type="ring" size="lg" />
        <Loading variant="info" type="infinity" size="xl" />
      </div>
    ),
  },
  {
    title: "Badge",
    description: "Маркеры и метки",
    category: "Обратная связь",
    preview: () => (
      <div className="flex flex-wrap gap-2">
        <Badge label="Small" variant="primary" size="xs" />
        <Badge label="New" variant="primary" size="sm" />
        <Badge label="Hot" variant="error" size="md" />
        <Badge label="Sale" variant="success" size="lg" soft />
        <Badge label="Large" variant="warning" size="xl" dashed />
      </div>
    ),
  },
  {
    title: "Tags",
    description: "Теги для категоризации",
    category: "Обратная связь",
    preview: () => (
      <div className="flex gap-2 flex-wrap">
        <Tags variant="primary">React</Tags>
        <Tags variant="info">TypeScript</Tags>
        <Tags variant="success">Tailwind</Tags>
      </div>
    ),
  },
  {
    title: "Alert",
    description: "Уведомления и сообщения",
    category: "Обратная связь",
    preview: () => (
      <div className="w-full max-w-xs space-y-2">
        <Alert variant="info" className="text-xs py-2">
          Info
        </Alert>
        <Alert variant="success" outlined className="text-xs py-2">
          Success
        </Alert>
      </div>
    ),
  },
  {
    title: "Tooltip",
    description: "Всплывающая подсказка",
    category: "Обратная связь",
    preview: () => (
      <div className="flex gap-2">
        <Tooltip value="Top" variant="primary" position="top">
          <Button size="sm">Top</Button>
        </Tooltip>
        <Tooltip value="Bottom" variant="success" position="bottom">
          <Button size="sm" variant="success">
            Bottom
          </Button>
        </Tooltip>
      </div>
    ),
  },
  {
    title: "Indicator",
    description: "Индикатор на элементе",
    category: "Обратная связь",
    preview: () => (
      <Indicator variant="error" value={5} position="topEnd">
        <Button variant="accent" size="sm">
          Mail
        </Button>
      </Indicator>
    ),
  },
  {
    title: "Divider",
    description: "Разделитель",
    category: "Обратная связь",
    preview: () => (
      <div className="w-full max-w-xs space-y-2">
        <Divider variant="primary" position="start">
          <span className="text-sm font-bold">Divider</span>
        </Divider>
        <Divider variant="success">
          <span className="text-sm font-bold">Divider</span>
        </Divider>
        <Divider variant="warning" position="end">
          <span className="text-sm font-bold">Divider</span>
        </Divider>
      </div>
    ),
  },
];

export const mediaItems: ShowcaseItem[] = [
  {
    title: "Avatar",
    description: "Аватары пользователей",
    category: "Медиа",
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
    title: "Avatar Placeholder",
    description: "Аватары с инициалами",
    category: "Медиа",
    preview: () => (
      <div className="flex gap-3">
        <Avatar label="AI" size="md" indicator rounded variant="success" />
        <Avatar label="UI" size="md" variant="primary" />
      </div>
    ),
  },
  {
    title: "Carousel",
    description: "Карусель изображений",
    category: "Медиа",
    preview: () => (
      <div className="h-full w-full overflow-hidden">
        <Carousel imageData={images.slice(3, 7)} only objectFit="scaleDown" />
      </div>
    ),
    fallback: <div className="h-40 bg-base-200 animate-pulse" />,
  },
  {
    title: "Hover Gallery",
    description: "Галерея с эффектом при наведении",
    category: "Медиа",
    preview: () => (
      <HoverGallery className="w-full bg-base-300 h-40 rounded-xl">
        {images.slice(3, 4).map((img, i) => (
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
    title: "Diff Image",
    description: "Сравнение изображений",
    category: "Медиа",
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
    title: "Iphone Mockup",
    description: "Мокап для мобильных приложений",
    category: "Медиа",
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

export const effects: ShowcaseItem[] = [
  {
    title: "Counter",
    description: "Анимированный счетчик",
    category: "Эффекты",
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
    preview: () => (
      <Background
        duration={3}
        variant="grid"
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
