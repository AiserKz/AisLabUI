import ComingSoon from "@/components/ComingSoon";
import TitlePage from "@/components/TitlePage";

export default function Animations() {
  return (
    <div className="w-full justify-center flex">
      <div className="max-w-7xl w-full">
        <TitlePage title="Анимации" description="Библиотека эффектов" />
        <ComingSoon
          title="Библиотека анимаций"
          description="Коллекция готовых анимаций и переходов для вашего проекта. В разработке!"
        />
      </div>
    </div>
  );
}
