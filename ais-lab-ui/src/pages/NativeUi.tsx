import { Suspense } from "react";
import { motion } from "framer-motion";

import { Divider, Loading } from "@ui/index";

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

  const renderArray = (array: any[]) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {array.map((c, i) => (
          <motion.div
            key={`${c.title}-${i}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 0.3, delay: i * 0.2 }}
            className={`transform transition-transform duration-300 transform-gpu hover:-translate-y-1`}
          >
            <ShowcaseCard
              title={c.title}
              description={c.description}
              category={c.category}
              className="h-full"
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
                  {c.preview()}
                </Suspense>
              }
            />
          </motion.div>
        ))}
      </div>
    );
  };

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
              <Divider>
                <span className="text-2xl font-bold">Кнопки</span>
              </Divider>
              {renderArray(buttons)}
            </Section>

            {/* INPUTS SECTION */}
            <Section id="inputs" className="my-12">
              <Divider variant="success">
                <span className="text-2xl font-bold">Поля ввода</span>
              </Divider>
              {renderArray(inputs)}
            </Section>

            {/* CARDS SECTION */}
            <Section id="cards" className="my-12">
              <Divider variant="warning">
                <span className="text-2xl font-bold">Карточки</span>
              </Divider>
              {renderArray(cards)}
            </Section>

            {/* STATUS & FEEDBACK SECTION */}
            <Section id="status" className="my-12">
              <Divider variant="info">
                <span className="text-2xl font-bold">
                  Статусы и обратная связь
                </span>
              </Divider>
              {renderArray(statusItems)}
            </Section>

            {/* MEDIA SECTION */}
            <Section id="media" className="my-12">
              <Divider variant="error">
                <span className="text-2xl font-bold">Медиа</span>
              </Divider>
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
