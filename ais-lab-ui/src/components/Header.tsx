import { BoxesIcon, SearchCode, Settings, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ThemeSwithcer } from "./ThemeSwithcer";
import useTitle from "../utils/hooks/useTitle";
import { useScroll, useTransform, motion } from "motion/react";

const pages: Record<string, string> = {
  "/": "Главная",
  "/labs": "Эксперименты",
  "/animate": "Анимации",
  "/native": "Native UI",
  "/theme": "Темы",
  "/tests": "Тесты",
};

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { setTitle } = useTitle(pages[location.pathname]);
  const [currentPage, setCurrentPage] = useState<string>(
    pages[location.pathname] || "Главная"
  );
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const isMobile =
    typeof window !== "undefined" ? window.innerWidth < 768 : false;

  const { scrollY } = useScroll();
  const width = useTransform(
    scrollY,
    [0, 200],
    isMobile ? ["95%", "85%"] : ["75%", "70%"]
  );
  const fade = useTransform(scrollY, [0, 200], [1, 0.92]);
  const offset = useTransform(scrollY, [0, 200], [0, -2]);

  useEffect(() => {
    setCurrentPage(pages[location.pathname || "/"]);
    setTitle(pages[location.pathname || "/"]);
  }, [location.pathname]);

  const handleCloseMobile = () => {
    if (
      typeof document !== "undefined" &&
      document.activeElement instanceof HTMLElement
    ) {
      try {
        document.activeElement.blur();
      } catch (e) {}
    }
    setMobileOpen(false);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleCloseMobile();
      }
    };
    if (mobileOpen) {
      window.addEventListener("keydown", onKey);
    }
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 flex pt-4 justify-center z-50">
      <motion.nav
        style={{ width: width, opacity: fade, y: offset }}
        className="max-w-8xl bg-base-200 rounded-box border-t border-l border-base-content/20 backdrop-blur-md
      hover:border-blue-400 hover:shadow-[-5px_-5px_10px] shadow-blue-400/30 transition-all duration-500 delay-100 "
      >
        <div className="flex items-center justify-between px-6 h-16">
          <div className="flex items-center gap-4 md:gap-8">
            <div
              className="flex items-center gap-2 cursor-pointer"
              role="button"
              onClick={() => navigate("/")}
            >
              <div className="p-1.5 bg-linear-120 from-blue-400 to-indigo-600 rounded-xl">
                <BoxesIcon className="w-8 h-8 text-white" />
              </div>
              <span className="text-lg">AisLabUI</span>
            </div>

            {/* Desktop nav: hidden on small screens */}
            <div className="hidden md:flex items-center gap-1">
              {Object.entries(pages).map(([page, name]) => (
                <Link
                  key={page}
                  to={page}
                  className={`px-4 py-2 rounded-lg text-sm transition-all duration-200 cursor-pointer border 
                    ${
                      name === currentPage
                        ? `bg-base-300 border-blue-400/50 shadow-[0_0_10px] shadow-blue-400/20 scale-105 translate-y-1`
                        : "hover:bg-base-content/15 text-base-content/80 border-transparent"
                    }`}
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>

          {/* правая сторона */}
          <div className="flex items-center gap-3">
            <div className="relative hidden sm:block">
              <SearchCode className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-base-content/30" />
              <input
                type="text"
                placeholder="Поиск компонентов..."
                className="pl-10 pr-4 py-2 w-64 bg-white/5 border border-white/10 rounded-lg text-sm placeholder:text-base-content/30 focus:outline-none 
                focus:ring-1 focus:ring-blue-400 transition-all duration-200"
              />
            </div>

            <div className="hidden sm:flex items-center gap-3">
              <ThemeSwithcer />
              <button className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:border-white/20">
                <Settings className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((s) => !s)}
              className="p-2 rounded-md bg-white/5 border border-white/10 md:hidden"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* mobile slide-over menu */}
      </motion.nav>
      {typeof document !== "undefined" &&
        createPortal(
          <div
            className={`fixed inset-0 z-50 md:hidden ${
              mobileOpen ? "pointer-events-auto" : "pointer-events-none"
            }`}
            aria-hidden={!mobileOpen}
          >
            <div
              className={`absolute inset-0 transition-opacity duration-300 ${
                mobileOpen
                  ? "opacity-100 pointer-events-auto bg-black/60 backdrop-blur-[1px] z-40"
                  : "opacity-0 pointer-events-none bg-transparent"
              }`}
              onClick={handleCloseMobile}
            />

            <aside
              className={`fixed top-0 right-0 h-full w-72 bg-base-200 shadow-xl transform transition-transform duration-300 z-50 ${
                mobileOpen
                  ? "translate-x-0 pointer-events-auto"
                  : "translate-x-full pointer-events-none"
              }`}
              role="dialog"
              aria-modal="true"
            >
              <div className="flex items-center justify-between px-4 py-4 border-b border-base-content/40">
                <div className="flex items-center gap-2">
                  <div className="p-1 bg-linear-120 from-blue-400 to-indigo-600 rounded-xl">
                    <BoxesIcon className="w-6 h-6" />
                  </div>
                  <span className="font-semibold text-2xl">Меню</span>
                </div>
                <button
                  aria-label="Закрыть"
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-md bg-base-content/5 border border-base-content/40"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="px-4 py-6 space-y-4">
                {Object.entries(pages).map(([page, name]) => (
                  <button
                    key={page}
                    onClick={() => {
                      navigate(page);
                      setMobileOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors text-lg duration-150 ${
                      name === currentPage
                        ? "bg-base-content/15 "
                        : "hover:bg-base-content/5 text-base-content/80"
                    }`}
                  >
                    {name}
                  </button>
                ))}

                <div className="pt-4 border-t border-base-content/40">
                  <div className="mb-3">
                    <div className="relative">
                      <SearchCode className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-base-content/30" />
                      <input
                        type="text"
                        placeholder="Поиск..."
                        className="pl-10 pr-3 py-2 w-full bg-base-300 border border-base-content/40 rounded-lg text-sm placeholder:text-base-content/30 focus:outline-none focus:ring-1 focus:ring-blue-400"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <ThemeSwithcer />
                    <button className="p-2 rounded-lg bg-base-content/5 border border-base-content/40 hover:bg-base-content/10 hover:border-base-content/60 transition-all">
                      <Settings className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </nav>
            </aside>
          </div>,
          document.body
        )}
    </header>
  );
}
