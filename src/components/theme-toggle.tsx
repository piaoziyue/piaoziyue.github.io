"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  if (!mounted) {
    return (
      <div
        className="fixed top-5 right-5 sm:top-6 sm:right-8 z-50 h-9 w-9"
        aria-hidden="true"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="fixed top-5 right-5 sm:top-6 sm:right-8 z-50 flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200/90 dark:border-[#38332a] bg-white/90 dark:bg-[#23211d]/90 text-zinc-600 dark:text-[#D3CCC0] shadow-sm backdrop-blur-md transition-all duration-200 hover:border-zinc-300 dark:hover:border-[#4d463b] hover:text-zinc-900 dark:hover:text-[#F5EFE6] hover:scale-105 active:scale-95 cursor-pointer"
    >
      {theme === "dark" ? (
        <Sun size={17} className="transition-transform duration-300 rotate-0 text-[#EFE4CF]" />
      ) : (
        <Moon size={17} className="transition-transform duration-300 -rotate-12" />
      )}
    </button>
  );
}

