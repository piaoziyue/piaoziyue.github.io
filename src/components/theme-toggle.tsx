"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  const applyTheme = (newTheme: "light" | "dark") => {
    setTheme(newTheme);
    const isDark = newTheme === "dark";
    if (isDark) {
      document.documentElement.classList.add("dark");
      document.body?.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
      document.documentElement.style.colorScheme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      document.body?.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
      document.documentElement.style.colorScheme = "light";
    }
  };

  useEffect(() => {
    setMounted(true);

    // 1. Initial check: light by default unless explicitly saved as 'dark'
    let initialTheme: "light" | "dark" = "light";
    try {
      const stored = localStorage.getItem("theme");
      if (stored === "dark") {
        initialTheme = "dark";
      } else if (stored === "light") {
        initialTheme = "light";
      } else {
        // Default color mode is light
        initialTheme = "light";
      }
    } catch {
      initialTheme = document.documentElement.classList.contains("dark")
        ? "dark"
        : "light";
    }

    applyTheme(initialTheme);

    // 2. Dynamically respond when OS/browser changes between dark and light mode
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemChange = (e: MediaQueryListEvent) => {
      const systemTheme = e.matches ? "dark" : "light";
      applyTheme(systemTheme);
      try {
        localStorage.setItem("theme", systemTheme);
      } catch {}
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleSystemChange);
    } else {
      // Fallback for older Safari
      mediaQuery.addListener(handleSystemChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleSystemChange);
      } else {
        mediaQuery.removeListener(handleSystemChange);
      }
    };
  }, []);

  const toggleTheme = () => {
    const isCurrentlyDark = document.documentElement.classList.contains("dark");
    const nextTheme = isCurrentlyDark ? "light" : "dark";
    applyTheme(nextTheme);
    try {
      localStorage.setItem("theme", nextTheme);
    } catch {}
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
        <Sun
          size={17}
          className="transition-transform duration-300 rotate-0 text-[#EFE4CF]"
        />
      ) : (
        <Moon
          size={17}
          className="transition-transform duration-300 -rotate-12 text-zinc-600"
        />
      )}
    </button>
  );
}
