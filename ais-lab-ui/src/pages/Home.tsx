import "@/style/Home.css";
import { motion } from "framer-motion";
import { ArrowRight, Code, Zap, Layers, Palette, Terminal, CheckCircle, AlertTriangle, Bell } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-clip bg-base-100 text-base-content">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-clip">
        {/* Background Shapes */}
        <div className="parallax-bg-shape bg-primary/20 w-96 h-96 top-20 left-20 blur-[100px]"></div>
        <div className="parallax-bg-shape bg-secondary/20 w-[500px] h-[500px] bottom-20 right-20 blur-[120px] animation-delay-2000"></div>

        <div className="container mx-auto px-4 z-10 text-center hero-3d-container">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-base-200/50 backdrop-blur-sm border border-base-content/10 mb-4">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
              <span className="text-sm font-medium">v1.0.0 Доступно сейчас</span>
            </div>

            <h1 className="text-7xl md:text-9xl font-black tracking-tighter hero-title hero-3d-element">
              AisLabUi
            </h1>
            
            <p className="text-xl md:text-2xl text-base-content/70 max-w-2xl mx-auto leading-relaxed">
              Ультимативная обертка над <span className="text-primary font-bold">Tailwind + DaisyUI</span>. 
              Создавайте премиальные интерфейсы быстрее, не переписывая один и тот же код.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Link to="/native" className="btn btn-primary btn-lg gap-2 group">
                Начать работу
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/themes" className="btn btn-outline btn-lg gap-2">
                <Palette size={20} />
                Выбрать тему
              </Link>
            </div>
          </motion.div>

          {/* Floating 3D Elements Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-20 relative max-w-4xl mx-auto perspective-1000"
          >
             <div className="mockup-window border border-base-content/10 bg-base-200/50 backdrop-blur-md shadow-2xl transform rotate-x-12 hover:rotate-x-0 transition-transform duration-700">
                <div className="flex justify-center px-4 py-16 bg-base-100/80">
                   <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-2xl">
                      <div className="skeleton h-32 w-full rounded-box"></div>
                      <div className="skeleton h-32 w-full rounded-box"></div>
                      <div className="skeleton h-32 w-full rounded-box"></div>
                   </div>
                </div>
             </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hero-scroll-indicator opacity-50">
          <div className="w-6 h-10 border-2 border-base-content rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-base-content rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* 2. About Section (Scroll Highlight) */}
      <section className="py-32 bg-base-100 relative">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-8">О проекте</h2>
          <p className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="scroll-text-highlight">
              Мы верим в простоту и скорость. AisLabUi создан, чтобы стать мостом между "сырыми" утилитами и готовыми функциональными компонентами.
              Хватит изобретать велосипед. Начните создавать красивые, отзывчивые и доступные интерфейсы одной строкой кода.
              Готов к будущему и создан для современного веба.
            </span>
          </p>
        </div>
      </section>

      {/* 3. 3D Component Demo Section */}
      <section className="py-32 bg-base-200/30 overflow-clip component-demo-perspective">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Готовые компоненты</h2>
              <p className="text-base-content/60">Все, что нужно для вашего следующего приложения</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Card 1 */}
              <div className="component-card-3d component-float-delay-1 p-6 rounded-2xl bg-base-100 shadow-xl border border-base-content/5">
                 <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                       <CheckCircle size={20} />
                    </div>
                    <span className="font-bold">Уведомления</span>
                 </div>
                 <div className="alert alert-success shadow-sm">
                    <span>Операция выполнена успешно!</span>
                 </div>
                 <div className="alert alert-warning mt-2 shadow-sm">
                    <span>Внимание: проверьте данные.</span>
                 </div>
              </div>

              {/* Card 2 */}
              <div className="component-card-3d component-float-delay-2 p-6 rounded-2xl bg-base-100 shadow-xl border border-base-content/5">
                 <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                       <Bell size={20} />
                    </div>
                    <span className="font-bold">Интерактивность</span>
                 </div>
                 <button className="btn btn-primary w-full mb-2">Нажми меня</button>
                 <button className="btn btn-outline btn-secondary w-full">Или меня</button>
              </div>

              {/* Card 3 */}
              <div className="component-card-3d component-float-delay-3 p-6 rounded-2xl bg-base-100 shadow-xl border border-base-content/5">
                 <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                       <AlertTriangle size={20} />
                    </div>
                    <span className="font-bold">Формы</span>
                 </div>
                 <input type="text" placeholder="Введите email" className="input input-bordered w-full mb-2" />
                 <div className="flex gap-2">
                    <input type="checkbox" className="toggle toggle-primary" defaultChecked />
                    <span className="text-sm opacity-70">Активно</span>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 4. Features Section (Scroll Reveal) */}
      <section className="py-32 bg-base-200/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">Почему AisLabUi?</h2>
            <p className="text-base-content/60 max-w-xl mx-auto">
              Все необходимое для создания приложений мирового класса, упакованное в один мощный пакет.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FeatureCard 
              icon={<Zap size={40} className="text-yellow-400" />}
              title="Молниеносно быстро"
              description="Построено на базе Vite и Tailwind, обеспечивая нулевые накладные расходы и мгновенный HMR."
              delay="0s"
            />
            <FeatureCard 
              icon={<Layers size={40} className="text-blue-400" />}
              title="Богатая библиотека"
              description="Более 50+ готовых компонентов: от простых кнопок до сложных таблиц данных."
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
      </section>

      {/* 5. CTA Section */}
      <section className="py-32 relative overflow-clip">
         <div className="absolute inset-0 bg-primary/5"></div>
         <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-5xl font-black mb-8">Готовы к запуску?</h2>
            <p className="text-xl mb-10 opacity-80">Присоединяйтесь к будущему UI-разработки уже сегодня.</p>
            <div className="flex justify-center gap-4">
               <Link to="/native" className="btn btn-primary btn-lg px-12 shadow-xl hover:shadow-primary/50 transition-shadow">
                  Смотреть компоненты
               </Link>
               <a href="https://github.com" target="_blank" rel="noreferrer" className="btn btn-ghost btn-lg gap-2">
                  <Terminal size={20} />
                  GitHub
               </a>
            </div>
         </div>
      </section>

    </div>
  );
}

function FeatureCard({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: string }) {
  return (
    <div 
      className="feature-card p-8 rounded-3xl bg-base-100 border border-base-content/5 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
      style={{ animationDelay: delay }}
    >
      <div className="mb-6 p-4 bg-base-200 rounded-2xl w-fit">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-base-content/70 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
