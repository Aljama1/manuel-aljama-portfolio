"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";
import { uiContent } from "@/content";

interface ThemeToggleProps {
  lang?: "es" | "en";
  className?: string;
}

const emptySubscribe = () => () => {};

export function ThemeToggle({ lang = "es", className = "" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  const t = uiContent[lang].theme;
  const label = theme === "dark" ? t.toLight : t.toDark;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className={`inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface text-foreground-muted transition-colors hover:bg-surface-raised hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${className}`}
    >
      {!mounted ? (
        <span className="h-4 w-4" aria-hidden="true" />
      ) : theme === "dark" ? (
        <Sun className="h-4 w-4" aria-hidden="true" />
      ) : (
        <Moon className="h-4 w-4" aria-hidden="true" />
      )}
    </button>
  );
}
