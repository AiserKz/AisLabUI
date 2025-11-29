import { useState } from "react";
import ComponentCard from "@/components/ComponentCard";
import TitlePage from "@/components/TitlePage";
import { motion } from "framer-motion";
import {
  MousePointerClick,
  PenTool,
  Layers,
  Sparkles,
  Gauge,
  Image as ImageIcon,
  Search,
  X,
  Menu,
} from "lucide-react";
import { Button, Card, Input } from "@/components/ui";
import Status from "@/components/ui/Status/Status";
import Badge from "@/components/ui/Status/Badge";
import ToggleSwitch from "@/components/ui/Inputs/Toggle";
import Tags from "@/components/ui/Tags/Tags";
import Progress from "@/components/ui/Progress/Proggres";
import Counter from "@/components/ui/Counter/Counter";


const components = [
  {
    id: "buttons",
    title: "Кнопки",
    description: "Интерактивные кнопки с различными стилями, размерами и состояниями загрузки",
    category: "Интерактивные",
    icon: MousePointerClick,
    path: "/native#buttons",
    color: "primary",
    preview: (
      <div className="flex gap-2 flex-wrap justify-center">
        <Button variant="primary" size="sm">Primary</Button>
        <Button variant="success" size="sm">Success</Button>
        <Button variant="warning" size="sm" outlined>Outlined</Button>
      </div>
    ),
  },
  {
    id: "inputs",
    title: "Поля ввода",
    description: "Текстовые поля, селекты, чекбоксы, radio и другие элементы форм",
    category: "Формы",
    icon: PenTool,
    path: "/native#inputs",
    color: "info",
    preview: (
      <div className="w-full space-y-2 px-4">
        <Input placeholder="Email..." sizes="sm" variant="info" />
        <ToggleSwitch variant="success" sizes="sm" />
      </div>
    ),
  },
  {
    id: "cards",
    title: "Карточки",
    description: "Универсальные контейнеры для контента с glass эффектом и 3D трансформацией",
    category: "Контейнеры",
    icon: Layers,
    path: "/native#cards",
    color: "success",
    preview: (
      <div className="flex gap-2">
        <Card padding="sm" className="text-xs">Card</Card>
        <Card padding="sm" glass className="text-xs">Glass</Card>
      </div>
    ),
  },
  {
    id: "status",
    title: "Статусы",
    description: "Индикаторы загрузки, бейджи, алерты и уведомления для обратной связи",
    category: "Обратная связь",
    icon: Gauge,
    path: "/native#status",
    color: "warning",
    preview: (
      <div className="flex gap-2 items-center flex-wrap justify-center">
        <Status variant="success" size="sm" animation />
        <Badge label="New" variant="warning" size="sm" />
        <Progress variant="primary" value={60} className="w-20" />
      </div>
    ),
  },
  {
    id: "media",
    title: "Медиа",
    description: "Компоненты для работы с изображениями, галереями и каруселями",
    category: "Медиа",
    icon: ImageIcon,
    path: "/native#media",
    color: "accent",
    preview: (
      <div className="flex gap-2">
        <div className="avatar">
          <div className="w-10 rounded-full bg-primary/20"></div>
        </div>
        <div className="avatar">
          <div className="w-10 rounded-full bg-success/20"></div>
        </div>
      </div>
    ),
  },
  {
    id: "effects",
    title: "Эффекты",
    description: "Анимации, переходы и визуальные эффекты для улучшения UX",
    category: "Эффекты",
    icon: Sparkles,
    path: "/native#effects",
    color: "secondary",
    preview: (
      <div className="flex gap-2 items-center">
        <Counter value={42} size="xl" variant="primary" />
      </div>
    ),
  },
];

const categories = ["Все", "Интерактивные", "Формы", "Контейнеры", "Обратная связь", "Медиа", "Эффекты"];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const filteredComponents = components.filter((component) => {
    const matchesSearch =
      component.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      component.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "Все" || component.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full flex min-h-screen">

      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        className="hidden lg:block w-64 sticky top-0 h-screen overflow-y-auto p-6 pt-8"
      >
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-xs uppercase tracking-wider mb-3 text-base-content/50">
              Поиск
            </h3>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-base-content/40" />
              <input
                type="text"
                placeholder="Найти..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input input-bordered input-sm w-full pl-10 pr-8"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 btn btn-ghost btn-xs btn-circle"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-xs uppercase tracking-wider mb-3 text-base-content/50">
              Категории
            </h3>
            <div className="space-y-1">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-all text-sm ${selectedCategory === category
                    ? "bg-primary text-primary-content font-medium"
                    : "hover:bg-base-200 text-base-content/80"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.aside>

      {/* Mobile Sidebar Toggle */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <Button
          variant="primary"
          className="btn-circle shadow-xl"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Menu className="w-6 h-6" />
        </Button>
      </div>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
            onClick={() => setSidebarOpen(false)}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="lg:hidden fixed inset-y-0 right-0 z-50 w-80 bg-base-100 shadow-2xl p-6 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Фильтры</h2>
              <button onClick={() => setSidebarOpen(false)} className="btn btn-ghost btn-sm btn-circle">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-xs uppercase tracking-wider mb-3 text-base-content/50">
                  Поиск
                </h3>
                <input
                  type="text"
                  placeholder="Найти..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <h3 className="font-semibold text-xs uppercase tracking-wider mb-3 text-base-content/50">
                  Категории
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setSidebarOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all ${selectedCategory === category
                        ? "bg-primary text-primary-content font-medium"
                        : "hover:bg-base-200"
                        }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}

      {/* Main Content */}
      <div className="flex-1 p-6 lg:p-10">
        <div className="max-w-7xl">
          {/* Title */}
          <div className="mb-10">
            <TitlePage
              title="Библиотека компонентов"
              description="Коллекция современных UI компонентов для React с поддержкой DaisyUI и Framer Motion"
            />
          </div>

          {/* Results Count */}
          {(searchQuery || selectedCategory !== "Все") && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-6"
            >
              <p className="text-sm text-base-content/60">
                Найдено: <span className="font-semibold text-base-content">{filteredComponents.length}</span>
              </p>
            </motion.div>
          )}

          {/* Component Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredComponents.map((component, index) => (
              <motion.div
                key={component.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ComponentCard {...component} />
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filteredComponents.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <Search className="w-16 h-16 mx-auto mb-4 text-base-content/20" />
              <h3 className="text-xl font-semibold mb-2">Ничего не найдено</h3>
              <p className="text-base-content/60 mb-4">
                Попробуйте изменить поисковый запрос или фильтры
              </p>
              <Button variant="primary" size="sm" onClick={() => { setSearchQuery(""); setSelectedCategory("Все"); }}>
                Сбросить фильтры
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
