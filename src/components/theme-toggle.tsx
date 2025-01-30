// theme-toggle.tsx
import { useTheme } from "./theme-provider";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
    >
      {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
    </button>
  );
};