import { Card, Modal, Accordion, Button } from "@ui/index";

import { images } from "@/data/testData";
import { lazy } from "react";
import type { ShowcaseItem } from ".";
import {
  CreditCard,
  Droplet,
  Layers,
  Image as ImageIcon,
  ChevronDown,
  Maximize2,
  Code,
} from "lucide-react";

// Тяжелые компоненты lazy
const CodeMockup = lazy(() => import("@ui/Mockup/CodeMockup"));

const cards: ShowcaseItem[] = [
  {
    title: "Standard Card",
    description: "Базовая карточка для контента",
    category: "Контейнеры",
    icon: <CreditCard className="text-primary" />,
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
    icon: <Droplet className="text-info" />,
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
    icon: <Layers className="text-accent" />,
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
    icon: <ImageIcon className="text-success" />,
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
    icon: <ChevronDown className="text-warning" />,
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
    icon: <Maximize2 className="text-error" />,
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
    icon: <Code className="text-primary" />,
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
export default cards;
