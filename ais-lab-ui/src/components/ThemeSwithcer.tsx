import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeSwithcer() {
  const [isLight, setIsLight] = useState<boolean>(() => {
    const saved = localStorage.getItem("theme");
    if (!saved) return false;
    return saved === "light";
  });

  const toggleTheme = () => setIsLight((v) => !v);

  useEffect(() => {
    const theme = isLight ? "light" : "dark";
    localStorage.setItem("theme", theme);
    document.documentElement.dataset.theme = theme;
  }, [isLight]);

  return (
    <button
      className="p-2 rounded-lg bg-base-content/5 border border-base-content/40 hover:bg-base-content/10 hover:border-base-content/60 transition-all"
      onClick={toggleTheme}
    >
      {isLight ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
}
