import React, { Suspense, useCallback } from "react";
import { Link } from "react-router-dom";
import { Divider, Loading } from "@ui/index";
import { generateId } from "@/utils/id-helper";

import TitlePage from "@/components/TitlePage";
import ShowcaseCard from "@/components/ShowcaseCard";
import Section from "@/components/Section";
import Aside from "@/components/Aside";
import {
  buttons,
  cards,
  effects,
  inputs,
  mediaItems,
  statusItems,
} from "@/data/nativeData/index";
import useSectionObserver from "@/utils/hooks/useSectionObserver";

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

const ShowcaseItem = React.memo(function ShowcaseItem({ c }: { c: any }) {
  const PreviewComponent = c.preview;

  return (
    <Link to={`/view/native/${generateId(c.title)}`} className="block h-full cursor-pointer hover:no-underline">
      <ShowcaseCard
        title={c.title}
        description={c.description}
        category={c.category}
        className="h-full transition-transform hover:scale-[1.01]"
        icon={c.icon}
        preview={
          <Suspense
            fallback={
              <Loading
                className="h-120"
                type="spinner"
                size="xl"
                variant="primary"
              >
                Загрузка...
              </Loading>
            }
          >
            <PreviewComponent />
          </Suspense>
        }
      />
    </Link>
  );
});

export default function NativeUi() {
  const { aciveSection } = useSectionObserver(
    sectionsMeta.map((s) => s.id),
    0.5
  );

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const top = el.getBoundingClientRect().top + window.pageYOffset;
    const offset = 100;
    window.scrollTo({ top: top - offset, behavior: "smooth" });
  };

  const renderArray = useCallback((array: any[]) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {array.map((c, i) => (
          <ShowcaseItem key={i} c={c} />
        ))}
      </div>
    );
  }, []);

  return (
    <div className="w-full justify-center flex flex-col lg:flex-row relative gap-6 px-4 md:px-8">
      <Aside
        sections={sectionsMeta}
        helpMap={helpMap}
        activeContainer={aciveSection}
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
            <Section id="buttons" className="my-12">
               <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-2 h-8 bg-primary rounded-full"></span>
                  Кнопки
                  <span className="text-base-content/30 text-sm font-normal ml-auto">{buttons.length} items</span>
              </h2>
              {renderArray(buttons)}
            </Section>

            {/* INPUTS SECTION */}
            <Section id="inputs" className="my-12">
               <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-2 h-8 bg-success rounded-full"></span>
                  Поля ввода
                  <span className="text-base-content/30 text-sm font-normal ml-auto">{inputs.length} items</span>
              </h2>
              {renderArray(inputs)}
            </Section>

            {/* CARDS SECTION */}
            <Section id="cards" className="my-12">
               <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-2 h-8 bg-warning rounded-full"></span>
                  Карточки
                  <span className="text-base-content/30 text-sm font-normal ml-auto">{cards.length} items</span>
              </h2>
              {renderArray(cards)}
            </Section>

            {/* STATUS & FEEDBACK SECTION */}
            <Section id="status" className="my-12">
               <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-2 h-8 bg-info rounded-full"></span>
                  Статусы и обратная связь
                  <span className="text-base-content/30 text-sm font-normal ml-auto">{statusItems.length} items</span>
              </h2>
              {renderArray(statusItems)}
            </Section>

            {/* MEDIA SECTION */}
            <Section id="media" className="my-12">
               <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-2 h-8 bg-error rounded-full"></span>
                  Медиа
                  <span className="text-base-content/30 text-sm font-normal ml-auto">{mediaItems.length} items</span>
              </h2>
              {renderArray(mediaItems)}
            </Section>

            {/* EFFECTS SECTION */}
            <Section id="effects" className="my-12">
              <Divider variant="accent">
                <span className="text-2xl font-bold">Эффекты и анимации</span>
              </Divider>

              {renderArray(effects)}
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
}
