import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import { Link } from "react-router-dom";
import { FloatingDecoration } from "../FloatingDecoration";

export default function CTASection() {
  return (
    <section className="py-54 relative ">
      {/* Анимированный фоновый градиент */}

      {/* Декоративные круги */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-lg pointer-events-none" />

      {/* Плавающие элементы */}
      <FloatingDecoration
        className="absolute top-20 left-[20%] w-4 h-4 bg-primary/60 rounded-full"
        duration={4}
        loop
        variants={{
          hidden: { y: 0, x: 0 },
          visible: { y: [0, -20, 0], x: [0, 10, 0] },
        }}
      />

      <FloatingDecoration
        className="absolute bottom-20 right-[20%] w-3 h-3 bg-primary/40 rounded-full"
        duration={5}
        loop
        variants={{
          hidden: { y: 0, x: 0 },
          visible: {
            y: [0, 15, 0],
            x: [0, -8, 0],
          },
        }}
      />
      <FloatingDecoration
        className="absolute top-1/3 right-[10%] w-2 h-2 bg-accent/50 rounded-full"
        duration={3}
        loop
        variants={{
          visible: {
            y: [0, -10, 0],
          },
        }}
      />
      <FloatingDecoration
        className="absolute bottom-1/3 left-[20%] w-5 h-5 border border-primary/20 rounded-lg"
        duration={8}
        loop
        variants={{
          visible: {
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          },
        }}
      />

      <div className="container mx-auto px-4 text-center relative z-10 ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Декоративный элемент над заголовком */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <FloatingDecoration
              className="w-16 h-0.5 bg-linear-to-r from-transparent to-primary/50 rounded-full"
              duration={2}
              loop
              variants={{
                visible: {
                  scaleX: [0.8, 1, 0.8],
                },
              }}
            />
            <FloatingDecoration
              className="w-3 h-3 bg-primary rounded-full"
              duration={2}
              loop
              variants={{
                visible: {
                  scale: [1, 1.3, 1],
                },
              }}
            />
            <FloatingDecoration
              className="w-16 h-0.5 bg-linear-to-l from-transparent to-primary/50 rounded-full"
              duration={2}
              loop
              variants={{
                visible: {
                  scaleX: [0.8, 1, 0.8],
                },
              }}
            />
          </div>

          <h2
            className="text-5xl font-black mb-6 bg-linear-to-r from-base-content via-primary h-26 md:h-15
          to-base-content bg-clip-text text-transparent bg-size-[200%_auto] animate-[gradient_3s_linear_infinite]"
          >
            Готовы к запуску?
          </h2>
          <p className="text-xl mb-10 opacity-80 max-w-lg mx-auto">
            Мы надеемся на то что наша библиотека поможет вам быстро и
            эффективно разработать веб-сервисы.🥰
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/native" className="group relative">
              <motion.div
                className="relative px-8 py-4 rounded-box bg-base-200 font-bold text-lg
                  overflow-hidden cursor-pointer shadow-[0_0_20px] shadow-transparent hover:shadow-primary/50 transition-shadow duration-500"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Контент кнопки */}
                <span className="relative flex items-center gap-3 z-1">
                  <span>Начать</span>
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </span>

                <div className="top-0 -right-5 absolute bg-primary/70 w-5 h-full z-0 group-hover:w-[130%] transition-all duration-700 ease-in-out delay-100"></div>
              </motion.div>
            </Link>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <a
                href="https://github.com/AiserKz/AisLabUI"
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost btn-lg gap-2 border border-base-content/10 hover:bg-base-content/5"
              >
                <Terminal size={20} />
                GitHub
              </a>
            </motion.div>
          </div>

          {/* Футер текст */}
          <p className="mt-12 text-sm text-base-content/40">
            Бесплатно • Open Source • MIT License
          </p>
        </motion.div>
      </div>
    </section>
  );
}
