import TitlePage from "@/components/TitlePage";
import ShowcaseCard from "@/components/ShowcaseCard";
import { Suspense, useCallback, useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";

import { Divider, Loading } from "@ui/index";

import Section from "@/components/Section";
import {
  buttons,
  cards,
  effects,
  inputs,
  mediaItems,
  statusItems,
} from "@/data/nativeUiData";

const sectionHeight = (length: number) => {
  const cardHeight = 320;
  const rowGap = 28;
  const cols = 3;

  const rows = Math.ceil(length / cols);
  const sectionHeight = rows * cardHeight + (rows - 1) * rowGap;

  return sectionHeight;
};

const sectionsMeta = [
  { id: "buttons", title: "Кнопки", length: buttons.length },
  { id: "inputs", title: "Поля ввода", length: inputs.length },
  { id: "cards", title: "Карточки", length: cards.length },
  { id: "status", title: "Статусы", length: statusItems.length },
  { id: "media", title: "Медиа", length: mediaItems.length },
  { id: "effects", title: "Эффекты", length: effects.length },
];

const helpMap: Record<string, string> = {
  buttons:
    "Короткие рекомендации по использованию кнопок: primary для основных действий, outlined для второстепенных.",
  inputs:
    "Поля ввода: используйте подсказки и валидацию. Удобно показывать иконки слева для контекстного смысла.",
  cards:
    "Карточки: контейнеры для группирования; можно применять glass/hover эффекты для акцента.",
  status:
    "Статусы: индикаторы и алерты помогают пользователю понять состояние сразу.",
  media:
    "Медиа: используйте ленивую загрузку для галерей и мокапов, чтобы снизить нагрузку.",
  effects:
    "Эффекты: анимации должны быть ненавязчивыми и не мешать восприятию.",
};

export default function NativeUi() {
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const [activeContainer, setActiveContainer] = useState<string>("buttons");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const ids = sectionsMeta.map((s) => s.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveContainer(entry.target.id);
          }
        });
      },
      { root: null, threshold: 0.45 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        sectionRefs.current[id] = el as HTMLElement;
        observer.observe(el);
      }
    });

    return () => {
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const onSectionView = useCallback((name: string) => {
    setActiveContainer(name);
  }, []);

  const SuspenseWrapper = ({
    children,
    fallback,
    heightfallback,
  }: {
    children: React.ReactNode;
    fallback?: React.ReactNode;
    heightfallback?: number;
  }) => {
    return (
      <Suspense
        fallback={
          fallback ?? (
            <Loading
              className="h-120"
              type="spinner"
              size="xl"
              variant="primary"
              style={{ minHeight: heightfallback ?? "120px" }}
            >
              Загрузка...
            </Loading>
          )
        }
      >
        {children}
      </Suspense>
    );
  };
  console.log("render");

  const renderArray = (array: any[]) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {array.map((c, i) => (
          <motion.div
            key={`${c.title}-${i}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.2, delay: i * 0.1 }}
          >
            <ShowcaseCard
              title={c.title}
              description={c.description}
              category={c.category}
              preview={c.preview()}
            />
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full justify-center flex flex-col lg:flex-row relative gap-6 px-4 md:px-8">
      {/* Mobile Navigation */}
      <div className="lg:hidden sticky top-20 z-20 bg-base-100/80 backdrop-blur-md py-2 -mx-4 px-4 overflow-x-auto flex gap-2 no-scrollbar border-b border-white/5">
        {sectionsMeta.map((s) => (
          <button
            key={s.id}
            onClick={() => scrollToSection(s.id)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeContainer === s.id
                ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20"
                : "bg-base-200 text-base-content/70 hover:bg-base-300"
            }`}
          >
            {s.title}
          </button>
        ))}
      </div>

      <Aside
        activeContainer={activeContainer}
        scrollToSection={scrollToSection}
      />
      <div className="max-w-5xl w-full py-10">
        <TitlePage
          title="Native UI компоненты"
          description="Полная библиотека готовых компонентов для вашего проекта"
        />
        {/* LEFT HELP PANEL */}

        <div className="flex relative">
          <div className="">
            {/* BUTTONS SECTION */}
            <Section
              className="my-12"
              onViewEntry={() => onSectionView("buttons")}
            >
              <div id="buttons">
                <Divider>
                  <span className="text-2xl font-bold">Кнопки</span>
                </Divider>
                <SuspenseWrapper heightfallback={sectionHeight(buttons.length)}>
                  {renderArray(buttons)}
                </SuspenseWrapper>
              </div>
            </Section>

            {/* INPUTS SECTION */}
            <Section
              className="my-12"
              onViewEntry={() => onSectionView("inputs")}
            >
              <div id="inputs">
                <Divider variant="success">
                  <span className="text-2xl font-bold">Поля ввода</span>
                </Divider>
                <SuspenseWrapper heightfallback={sectionHeight(inputs.length)}>
                  {renderArray(inputs)}
                </SuspenseWrapper>
              </div>
            </Section>

            {/* CARDS SECTION */}
            <Section
              className="my-12"
              onViewEntry={() => onSectionView("cards")}
            >
              <div id="cards">
                <Divider variant="warning">
                  <span className="text-2xl font-bold">Карточки</span>
                </Divider>
                <SuspenseWrapper heightfallback={sectionHeight(cards.length)}>
                  {renderArray(cards)}
                </SuspenseWrapper>
              </div>
            </Section>

            {/* STATUS & FEEDBACK SECTION */}
            <Section
              className="my-12"
              onViewEntry={() => onSectionView("status")}
            >
              <div id="status">
                <Divider variant="info">
                  <span className="text-2xl font-bold">
                    Статусы и обратная связь
                  </span>
                </Divider>
                <SuspenseWrapper
                  heightfallback={sectionHeight(statusItems.length)}
                >
                  {renderArray(statusItems)}
                </SuspenseWrapper>
              </div>
            </Section>

            {/* MEDIA SECTION */}
            <Section
              className="my-12"
              onViewEntry={() => onSectionView("media")}
            >
              <div id="media">
                <Divider variant="error">
                  <span className="text-2xl font-bold">Медиа</span>
                </Divider>
                <SuspenseWrapper
                  heightfallback={sectionHeight(mediaItems.length)}
                >
                  {renderArray(mediaItems)}
                </SuspenseWrapper>
              </div>
            </Section>

            {/* EFFECTS SECTION */}
            <Section
              className="my-12"
              onViewEntry={() => onSectionView("effects")}
            >
              <div id="effects">
                <Divider variant="accent">
                  <span className="text-2xl font-bold">Эффекты и анимации</span>
                </Divider>
                <SuspenseWrapper heightfallback={sectionHeight(effects.length)}>
                  {renderArray(effects)}
                </SuspenseWrapper>
              </div>
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
}

function Aside({
  activeContainer,
  scrollToSection,
}: {
  activeContainer: string;
  scrollToSection: (id: string) => void;
}) {
  return (
    <aside className="hidden lg:block w-72 shrink-0 relative">
      <div className="sticky top-24">
        <div className="bg-base-200/60 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
          <h4 className="font-semibold mb-4 px-2 text-lg">Навигация</h4>
          <ul className="space-y-1">
            {sectionsMeta.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => scrollToSection(s.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-xl transition-all duration-200 flex items-center justify-between group ${
                    activeContainer === s.id
                      ? "bg-blue-500/10 text-blue-400 font-medium"
                      : "hover:bg-white/5 text-base-content/60 hover:text-base-content"
                  }`}
                >
                  <span>{s.title}</span>
                  {activeContainer === s.id && (
                    <motion.div
                      layoutId="active-dot"
                      className="w-1.5 h-1.5 rounded-full bg-blue-400"
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6 pt-6 border-t border-white/5 px-2">
            <p className="text-xs font-medium text-base-content/40 uppercase tracking-wider mb-2">
              Подсказка
            </p>
            <p className="text-sm text-base-content/70 leading-relaxed">
              {helpMap[activeContainer]}
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
