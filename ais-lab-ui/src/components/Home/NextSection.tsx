import { motion, MotionValue, useTransform } from "framer-motion";
import { Code, Layers, Terminal, Zap } from "lucide-react";

export default function NextSection({
  scrollProgress,
}: {
  scrollProgress: MotionValue;
}) {
  const overlayY = useTransform(scrollProgress, [0, 0.3], ["100%", "0%"]);
  return (
    <motion.section
      style={{ y: overlayY, willChange: "transform" }}
      className="absolute bottom-0 left-0 w-full bg-base-200 border-t-2 border-base-content/10 z-20 h-[500vh]
              
              soft-edge
               flex items-center justify-start text-6xl font-black flex-col space-y-40"
    >
      {/* Декоративные фоновые элементы - упрощены */}
      <div className="absolute top-[10%] right-[10%] w-96 h-96 bg-primary/10 rounded-full blur-lg pointer-events-none" />
      <div className="absolute top-[40%] left-[5%] w-80 h-80 bg-info/10 rounded-full blur-lg pointer-events-none" />

      <div className="relative h-[150dvh] mt-200 ">
        {/* Плавающая иконка Code слева */}
        <div className="absolute -left-100">
          <motion.div
            className="bg-purple-400 w-40 h-40 rounded-box flex items-center justify-center shadow-xl shadow-purple-400/20"
            animate={{ y: [0, 20, 0], rotate: [0, 10, 0, -10, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Code className="w-20 h-20" />
          </motion.div>
        </div>

        {/* Плавающая иконка Zap справа */}
        <div className="absolute -right-80 top-20">
          <motion.div
            className="bg-yellow-400 w-32 h-32 rounded-box flex items-center justify-center shadow-xl shadow-yellow-400/20"
            animate={{ y: [0, -15, 0], rotate: [0, -8, 0, 8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            <Zap className="w-16 h-16" />
          </motion.div>
        </div>

        {/* Плавающая иконка Layers */}
        <div className="absolute -left-60 top-80">
          <motion.div
            className="bg-blue-400 w-24 h-24 rounded-box flex items-center justify-center shadow-xl shadow-blue-400/20"
            animate={{
              y: [0, 12, 0],
              x: [0, 8, 0],
              rotate: [0, 5, 0, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <Layers className="w-12 h-12" />
          </motion.div>
        </div>

        {/* Плавающая иконка Terminal справа снизу */}
        <div className="absolute -right-50 top-100">
          <motion.div
            className="bg-green-400 w-28 h-28 rounded-box flex items-center justify-center shadow-xl shadow-green-400/20"
            animate={{
              y: [0, -10, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8,
            }}
          >
            <Terminal className="w-14 h-14" />
          </motion.div>
        </div>

        <div className="containe mx-auto px-4 max-w-4xl sticky top-40">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-8">
            О проекте
          </h2>
          <p className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="scroll-text-highlight">
              AisLabUi создан, чтобы стать мостом между "сырыми" утилитами и
              готовыми функциональными компонентами.
            </span>
          </p>

          {/* Дополнительное описание */}
          <motion.p
            className="text-lg md:text-xl text-base-content/60 mt-8 max-w-2xl font-normal leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Мы объединили лучшие практики UI-разработки в единую, согласованную
            систему компонентов
          </motion.p>
        </div>
      </div>

      <div className="h-[200vh] w-full relative">
        {/* Заголовок для карусели */}
        <div className="sticky top-10 text-center mb-8 z-10">
          <motion.h3
            className="text-sm font-bold tracking-widest text-primary uppercase mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Наши модули
          </motion.h3>
          <motion.p
            className="text-2xl md:text-3xl font-bold text-base-content/80"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Выберите свой путь
          </motion.p>
        </div>

        <div className=" flex items-center justify-center gap-6  card-show-carousel sticky top-40">
          <div className="bg-primary rounded-box card-carousel-item overflow-clip group">
            <span className="relative z-10 drop-shadow-lg transition-transform group-hover:scale-110">
              NativeUi
            </span>
            <span className="absolute bottom-4 left-4 right-4 text-xs text-white/70 font-normal z-10 opacity-0 group-hover:opacity-100 transition-opacity">
              Базовые компоненты
            </span>
            <span className="absolute feature-video">
              <video
                src="https://play.vsthemes.org/fhd/56/72856.webm"
                className="w-full h-full object-cover "
                muted
                loop
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => e.currentTarget.pause()}
              ></video>
            </span>
          </div>
          <div className="bg-info rounded-box card-carousel-item group overflow-clip">
            <span className="relative z-10 drop-shadow-lg transition-transform group-hover:scale-110">
              MotionUi
            </span>
            <span className="absolute bottom-4 left-4 right-4 text-xs text-white/70 font-normal z-10 opacity-0 group-hover:opacity-100 transition-opacity">
              Анимации и эффекты
            </span>
            <span className="absolute feature-video">
              <video
                src="https://cdn.pixabay.com/video/2024/03/26/205733-927672950_large.mp4"
                className="w-full h-full object-cover "
                muted
                loop
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => e.currentTarget.pause()}
              ></video>
            </span>
          </div>
          <div className="bg-error rounded-box card-carousel-item group overflow-clip">
            <span className="relative z-10 drop-shadow-lg transition-transform group-hover:scale-110">
              Theme
            </span>
            <span className="absolute bottom-4 left-4 right-4 text-xs text-white/70 font-normal z-10 opacity-0 group-hover:opacity-100 transition-opacity">
              Темы и стили
            </span>
            <span className="absolute feature-video">
              <video
                src="https://cdn.pixabay.com/video/2024/12/19/247733_large.mp4"
                className="w-full h-full object-cover "
                muted
                loop
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => e.currentTarget.pause()}
              ></video>
            </span>
          </div>
        </div>

        {/* Подсказка под каруселью */}
        <motion.div
          className="sticky top-[80vh] text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-base text-base-content/40 font-normal flex items-center justify-center gap-2">
            <span className="inline-block w-1 h-1 bg-base-content/40 rounded-full animate-pulse" />
            Наведите на карточку для предпросмотра
            <span className="inline-block w-1 h-1 bg-base-content/40 rounded-full animate-pulse" />
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
