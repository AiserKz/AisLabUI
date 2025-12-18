import { motion } from "framer-motion";
import SpliteImageCard from "../uiMotion/Image/SpliteImageCard";
import { Code, Layers, Zap } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-32 relative pb-100 ">
      {/* Декоративные фоновые элементы */}
      <div className="absolute top-20 left-[5%] w-72 h-72 bg-info/8 rounded-full blur-xl pointer-events-none" />

      {/* Плавающие декоративные точки */}
      <motion.div
        className="absolute top-32 right-[20%] w-3 h-3 bg-primary rounded-full"
        animate={{ y: [0, -15, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-60 left-[15%] w-2 h-2 bg-info rounded-full"
        animate={{ y: [0, 10, 0], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-60 right-[25%] w-4 h-4 bg-accent rounded-full"
        animate={{ y: [0, -12, 0], opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
      />

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        {/* Intro text */}
        <motion.div
          className="mb-20 text-center space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase">
            О чём AisLabUI
          </h2>
          <p className="text-3xl md:text-4xl font-bold leading-tight">
            Одна обёртка — несколько слоёв,
            <br />
            чтобы не писать одно и то же в каждом проекте
          </p>
          <p className="text-base-content/60 max-w-2xl mx-auto">
            AisLabUI аккуратно расширяет DaisyUI, добавляя готовые визуальные
            паттерны, motion и эффекты — без ломки привычного стека.
          </p>

          {/* Декоративная линия */}
          <div className="flex items-center justify-center gap-2 pt-4">
            <span className="w-8 h-0.5 bg-primary/30 rounded-full" />
            <span className="w-2 h-2 bg-primary rounded-full" />
            <span className="w-8 h-0.5 bg-primary/30 rounded-full" />
          </div>
        </motion.div>

        {/* Split Image Card */}
        <SpliteImageCard
          src="/card-bg.webp"
          item1={
            <div
              className="h-full w-full flex flex-col justify-start p-6 space-y-5 relative border border-info/30 bg-base-200/70"
              style={{
                borderRadius: "inherit",
              }}
            >
              <div className="absolute inset-0 h-full rounded-box bg-linear-to-br from-info/10 to-transparent pointer-events-none" />

              <div className="flex items-center space-x-3">
                <div className="p-4 border border-info/60 rounded-box bg-base-200/70 backdrop-blur-sm">
                  <Layers className="w-7 h-7 text-info" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight">Visual</h3>
              </div>

              <p className="text-base-content/70 leading-relaxed max-w-sm">
                Готовые визуальные паттерны для чистых и аккуратных интерфейсов.
              </p>

              <ul className="text-sm space-y-2 text-base-content/60">
                <li>• стекло</li>
                <li>• тени</li>
                <li>• hover / focus</li>
              </ul>
            </div>
          }
          item2={
            <div
              className="h-full w-full flex flex-col justify-start p-6 space-y-5 relative border border-accent/30 bg-base-200/70"
              style={{
                borderRadius: "inherit",
              }}
            >
              <div className="absolute inset-0 h-full rounded-box bg-linear-to-br from-accent/10 to-transparent pointer-events-none" />

              <div className="flex items-center space-x-3">
                <div className="p-4 border border-accent/60 rounded-box bg-base-200/70 backdrop-blur-sm">
                  <Zap className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight">Motion</h3>
              </div>

              <p className="text-base-content/70 leading-relaxed max-w-sm">
                Спокойные и предсказуемые анимации без лишней настройки.
              </p>

              <ul className="text-sm space-y-2 text-base-content/60">
                <li>• микро-motion</li>
                <li>• hover / press</li>
                <li>• единый ритм</li>
              </ul>
            </div>
          }
          item3={
            <div
              className="h-full w-full flex flex-col justify-start p-6 space-y-5 relative border border-primary/30 bg-base-200/70"
              style={{ borderRadius: "inherit" }}
            >
              <div className="absolute inset-0 h-full rounded-box bg-linear-to-br from-primary/10 to-transparent pointer-events-none" />

              <div className="flex items-center space-x-3">
                <div className="p-4 border border-primary/60 rounded-box bg-base-200/70 backdrop-blur-sm">
                  <Code className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight">
                  Integration
                </h3>
              </div>

              <p className="text-base-content/70 leading-relaxed max-w-sm">
                AisLabUI подключается как дополнительный слой, не вмешиваясь в
                существующую архитектуру проекта.
              </p>

              <ul className="text-sm space-y-2 text-base-content/60">
                <li>- работает поверх Tailwind и DaisyUI</li>
                <li>- не переопределяет ваши классы</li>
                <li>- устанавливается через npm</li>
              </ul>

              <div className="mt-2 text-xs font-mono text-base-content/40">
                npm install aislabui
              </div>
            </div>
          }
        />
      </div>
    </section>
  );
}
