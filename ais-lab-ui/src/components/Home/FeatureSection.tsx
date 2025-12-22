import { motion } from "framer-motion";
import FeatureCard from "../FeatureCard";
import { Code, Layers, Zap } from "lucide-react";
import Wave from "../Wave";
import { FloatingDecoration } from "../FloatingDecoration";

export default function FeatureSection() {
  return (
    <section className="py-44 relative overflow-clip z-10 bg-base-200">
      <div className="bg-linear-60 from-primary/30 to-primary/80 w-full h-full absolute top-0"></div>

      {/* Плавающие декоративные элементы */}
      <FloatingDecoration
        className="absolute top-32 left-[10%] w-20 h-20 border-2 border-white/20 rounded-2xl"
        duration={8}
        loop
        variants={{
          visible: {
            rotate: [0, 90, 0],
            y: [0, -10, 0],
          },
        }}
      />

      <FloatingDecoration
        className="absolute bottom-40 right-[15%] w-16 h-16 border-2 border-white/40 rounded-full"
        duration={5}
        loop
        variants={{
          visible: {
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          },
        }}
      />

      <FloatingDecoration
        className="absolute top-1/2 left-[5%] w-8 h-8 bg-white/10 rounded-lg"
        duration={6}
        loop
        variants={{
          visible: {
            y: [0, 20, 0],
            rotate: [0, 45, 0],
          },
        }}
      />

      <Wave delay={0} position="top" flipY animation />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-bold tracking-widest text-white/70 uppercase mb-4">
            Преимущества
          </h2>
          <p className="text-4xl font-bold mb-4">Почему AisLabUi?</p>
          <p className="text-base-content/60 max-w-xl mx-auto">
            Все необходимое для создания приложений мирового класса, упакованное
            в один мощный пакет.
          </p>

          {/* Статистика */}
          <div className="flex items-center justify-center gap-2 md:gap-6 mt-10">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-3xl font-black text-white">50+</p>
              <p className="text-xs text-white/60 uppercase tracking-wider">
                Компонентов
              </p>
            </motion.div>
            <div className="w-px h-10 bg-white/20" />
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-3xl font-black text-white">100%</p>
              <p className="text-xs text-white/60 uppercase tracking-wider">
                TypeScript
              </p>
            </motion.div>
            <div className="w-px h-10 bg-white/20" />
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="text-3xl font-black text-white">∞</p>
              <p className="text-xs text-white/60 uppercase tracking-wider">
                Возможностей
              </p>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <FeatureCard
            icon={<Zap size={40} className="text-yellow-400" />}
            title="Молниеносно быстро"
            description="Построено примущественно на базе CSS, что дает превосходную скорость."
            delay="0s"
          />
          <FeatureCard
            icon={<Layers size={40} className="text-blue-400" />}
            title="Богатая библиотека"
            description="Более 50+ готовых компонентов: от простых кнопок до сложных анимированных компонентов."
            delay="0.2s"
          />
          <FeatureCard
            icon={<Code size={40} className="text-green-400" />}
            title="Для разработчиков"
            description="Полная типизация TypeScript. Интуитивно понятный API, который сразу имеет смысл."
            delay="0.4s"
          />
        </div>
      </div>
      <Wave position="bottom" flipX colorClass="fill-base-100" animation />
    </section>
  );
}
