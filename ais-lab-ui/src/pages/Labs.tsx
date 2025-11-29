import ComingSoon from "@/components/ComingSoon";
import TitlePage from "@/components/TitlePage";

export default function Labs() {
  return (
    <div className="w-full justify-center flex">
      <div className="max-w-7xl w-full">
        <TitlePage title="Labs" description="Экспериментальные компоненты" />
        <ComingSoon
          title="Экспериментальная зона"
          description="Здесь будут представлены экспериментальные и инновационные UI компоненты. Следите за обновлениями!"
        />
      </div>
    </div>
  );
}
