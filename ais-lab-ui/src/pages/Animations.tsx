import React, { Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { Loading } from "@ui/index";
import TitlePage from "@/components/TitlePage";
import Section from "@/components/Section";
import Aside from "@/components/Aside";
import useSectionObserver from "@/utils/hooks/useSectionObserver";
import { animationsData } from "@/data/animationsData";

import ShowcaseCard from "@/components/ShowcaseCard";
import { Play, Layers } from "lucide-react";

const AnimationShowcaseItem = React.memo(function AnimationShowcaseItem({
  item,
}: {
  item: any;
}) {
  const Component = item.component;
  const isVideo = !!item.video;
  const navigate = useNavigate();

  const PreviewContent = () => (
    <div className="w-full h-full flex items-center justify-center">
      {isVideo ? (
        <video
          src={item.video}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center p-4">
          <Suspense fallback={<Loading />}>
            {item.props ? <Component {...item.props} /> : <Component />}
          </Suspense>
        </div>
      )}
    </div>
  );

  const card = (
    <ShowcaseCard
      title={item.title}
      description={item.description}
      icon={
        isVideo ? (
          <Play className="w-6 h-6 text-primary" />
        ) : (
          <Layers className="w-6 h-6 text-primary" />
        )
      }
      category={isVideo ? "Video" : "Component"}
      className="h-full"
      preview={<PreviewContent />}
      padding={false}
      onClick={() => navigate(`/view/animations/${item.id}`)}
    />
  );

  if (isVideo) return card;

  return card;
});

export default function Animations() {
  const { aciveSection } = useSectionObserver(
    animationsData.map((s) => s.id),
    0.5
  );

  return (
    <div className="w-full justify-center flex flex-col lg:flex-row relative gap-6 px-4 md:px-8 pb-20">
      <Aside
        sections={animationsData.map((s) => ({
          id: s.id,
          title: s.title,
          length: s.items.length,
        }))}
        activeContainer={aciveSection}
        scrollToSection={(id) => {
          const el = document.getElementById(id);
          if (el) {
            const top =
              el.getBoundingClientRect().top + window.pageYOffset - 100;
            window.scrollTo({ top, behavior: "smooth" });
          }
        }}
        helpMap={{}}
      />

      <div className="flex-1 w-full max-w-5xl space-y-12">
        <TitlePage
          title="Библиотека анимаций"
          description="Коллекция готовых эффектов и переходов. Используйте видео-превью для сложных компонентов и живые демо для простых."
        />

        {animationsData.map((section) => (
          <Section key={section.id} id={section.id}>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-primary rounded-full"></span>
              {section.title}
              <span className="text-base-content/30 text-sm font-normal ml-auto">
                {section.items.length} items
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.items.map((item, i) => (
                <AnimationShowcaseItem key={i} item={item} />
              ))}
            </div>
          </Section>
        ))}
      </div>
    </div>
  );
}
