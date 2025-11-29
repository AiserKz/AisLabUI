import ComingSoon from "@/components/ComingSoon";
import TitlePage from "@/components/TitlePage";

export default function Themes() {
  return (
    <div className="w-full justify-center flex">
      <div className="max-w-7xl w-full">
        <TitlePage title="Темы" description="Настройка внешнего вида" />
        <ComingSoon
          title="Система тем"
          description="Управление темами, цветовыми схемами и персонализация интерфейса. Скоро появится!"
        />
      </div>
    </div>
  );
}
