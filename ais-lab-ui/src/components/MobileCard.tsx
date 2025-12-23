export default function MobileCard({
  item,
}: {
  item: { image: string; name: string };
}) {
  return (
    <div className=" rounded-xl overflow-hidden border border-base-content/15 shadow-md bg-base-100 flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      {/* Изображение */}
      <div className="flex-1 overflow-hidden rounded-t-xl">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Нижняя часть с названием */}
      <div className="px-4 py-2 bg-base-100 flex items-center justify-center">
        <span className="text-lg font-semibold text-base-content">
          {item.name}
        </span>
      </div>
    </div>
  );
}
