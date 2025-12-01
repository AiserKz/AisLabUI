import { MousePointerClickIcon } from "lucide-react";
import type { ShowcaseItem } from ".";
import { Button } from "@ui/index";

const buttons: ShowcaseItem[] = [
  {
    title: "Primary Button",
    description: "Основная кнопка для главных действий",
    category: "Кнопки",
    preview: () => <Button variant="primary">Primary</Button>,
    icon: <MousePointerClickIcon className="text-warning" />,
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
    icon: <MousePointerClickIcon className="text-warning" />,
  },
  {
    title: "Glass Button",
    description: "Кнопка с glass эффектом",
    category: "Кнопки",
    preview: () => <Button glass>Glass</Button>,
    icon: <MousePointerClickIcon className="text-warning" />,
  },
];
export default buttons;
