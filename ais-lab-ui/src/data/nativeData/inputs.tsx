import {
  Checkbox,
  Input,
  InputFile,
  Radio,
  Select,
  Slider,
  Toggle,
  ThemeSwitcher,
} from "@ui/index";

import {
  Mail,
  UploadCloud,
  CheckSquare,
  Circle,
  List,
  ToggleLeft,
  Sliders,
  Sun,
} from "lucide-react";
import type { ShowcaseItem } from ".";

const inputs: ShowcaseItem[] = [
  {
    title: "Text Input",
    description: "Текстовое поле с иконкой",
    category: "Формы",
    icon: <Mail className="text-info" />,
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
    icon: <UploadCloud className="text-warning" />,
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
    icon: <CheckSquare className="text-success" />,
    preview: () => <Checkbox label="Checkbox" variant="success" />,
  },
  {
    title: "Radio",
    description: "Радио-кнопка для выбора одного варианта",
    category: "Формы",
    icon: <Circle className="text-primary" />,
    preview: () => <Radio label="Radio" variant="primary" sizes="md" />,
  },
  {
    title: "Select",
    description: "Выпадающий список",
    category: "Формы",
    icon: <List className="text-info" />,
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
    icon: <ToggleLeft className="text-primary" />,
    preview: () => <Toggle label="Toggle" variant="primary" sizes="md" />,
  },
  {
    title: "Slider",
    description: "Слайдер для выбора значения",
    category: "Формы",
    icon: <Sliders className="text-info" />,
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
    icon: <Sun className="text-warning" />,
    preview: () => (
      <div className="flex flex-col justify-center items-center gap-2">
        <ThemeSwitcher className="w-30" />
        <ThemeSwitcher variant="swap" />
        <ThemeSwitcher variant="toggle" />
      </div>
    ),
  },
];
export default inputs;
