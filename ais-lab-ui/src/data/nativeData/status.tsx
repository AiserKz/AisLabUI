import {
  Status,
  Indicator,
  Badge,
  Loading,
  Alert,
  Tooltip,
  Tags,
  Progress,
  RadialProgress,
  Divider,
  Button,
} from "@ui/index";
import type { ShowcaseItem } from ".";
import {
  Activity,
  PieChart,
  Circle,
  Loader,
  Tag,
  Tag as TagIcon,
  AlertTriangle,
  Info,
  Bell,
  Minus,
} from "lucide-react";

const statusItems: ShowcaseItem[] = [
  {
    id: 19,
    title: "Progress Bar",
    description: "Линейный индикатор прогресса",
    category: "Обратная связь",
    icon: <Activity className="text-primary" />,
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
    id: 20,
    title: "Radial Progress",
    description: "Круговой индикатор прогресса",
    category: "Обратная связь",
    icon: <PieChart className="text-info" />,
    preview: () => (
      <div className="flex gap-4">
        <RadialProgress value={65} variant="info" />
        <RadialProgress value={85} variant="success" />
      </div>
    ),
  },
  {
    id: 21,
    title: "Status Indicator",
    description: "Индикатор статуса",
    category: "Обратная связь",
    icon: <Circle className="text-success" />,
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
    id: 22,
    title: "Loading",
    description: "Индикатор загрузки",
    category: "Обратная связь",
    icon: <Loader className="text-primary" />,
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
    id: 23,
    title: "Badge",
    description: "Маркеры и метки",
    category: "Обратная связь",
    icon: <Tag className="text-warning" />,
    preview: () => (
      <div className="flex flex-wrap gap-2 items-center justify-center">
        <Badge label="Small" variant="primary" size="xs" />
        <Badge label="New" variant="primary" size="sm" />
        <Badge label="Hot" variant="error" size="md" />
        <Badge label="Sale" variant="success" size="lg" soft />
        <Badge label="Large" variant="warning" size="xl" dashed />
      </div>
    ),
  },
  {
    id: 24,
    title: "Tags",
    description: "Теги для категоризации",
    category: "Обратная связь",
    icon: <TagIcon className="text-info" />,
    preview: () => (
      <div className="flex gap-2 flex-wrap items-center justify-center">
        <Tags variant="primary">React</Tags>
        <Tags variant="info">TypeScript</Tags>
        <Tags variant="success">Tailwind</Tags>
        <Tags variant="warning">Redux</Tags>
        <Tags variant="error">Next.js</Tags>
      </div>
    ),
  },
  {
    id: 25,
    title: "Alert",
    description: "Уведомления и сообщения",
    category: "Обратная связь",
    icon: <AlertTriangle className="text-error" />,
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
    id: 26,
    title: "Tooltip",
    description: "Всплывающая подсказка",
    category: "Обратная связь",
    icon: <Info className="text-primary" />,
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
    id: 27,
    title: "Indicator",
    description: "Индикатор на элементе",
    category: "Обратная связь",
    icon: <Bell className="text-warning" />,
    preview: () => (
      <Indicator variant="error" value={5} position="topEnd">
        <Button variant="accent" size="sm">
          Mail
        </Button>
      </Indicator>
    ),
  },
  {
    id: 28,
    title: "Divider",
    description: "Разделитель",
    category: "Обратная связь",
    icon: <Minus className="text-info" />,
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

export default statusItems;
