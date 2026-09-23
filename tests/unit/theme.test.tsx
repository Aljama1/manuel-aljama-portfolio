import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, expect, it, beforeEach } from "vitest";
import {
  ThemeProvider,
  useTheme,
  THEME_STORAGE_KEY,
} from "@/components/theme/ThemeProvider";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

function ThemeConsumer() {
  const { theme, toggleTheme, setTheme } = useTheme();
  return (
    <div>
      <span data-testid="theme-value">{theme}</span>
      <button onClick={toggleTheme}>Toggle</button>
      <button onClick={() => setTheme("light")}>Set Light</button>
      <button onClick={() => setTheme("dark")}>Set Dark</button>
    </div>
  );
}

describe("Theme System", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove("light");
  });

  it("inicia en modo dark por defecto (Dark-first)", () => {
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>,
    );

    expect(screen.getByTestId("theme-value").textContent).toBe("dark");
    expect(document.documentElement.classList.contains("light")).toBe(false);
  });

  it("cambia a modo light al invocar toggleTheme y añade la clase al documentElement", () => {
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>,
    );

    act(() => {
      fireEvent.click(screen.getByText("Toggle"));
    });

    expect(screen.getByTestId("theme-value").textContent).toBe("light");
    expect(document.documentElement.classList.contains("light")).toBe(true);
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe("light");
  });

  it("permite alternar de vuelta a modo dark", () => {
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>,
    );

    act(() => {
      fireEvent.click(screen.getByText("Toggle")); // a light
      fireEvent.click(screen.getByText("Toggle")); // a dark
    });

    expect(screen.getByTestId("theme-value").textContent).toBe("dark");
    expect(document.documentElement.classList.contains("light")).toBe(false);
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe("dark");
  });

  it("ThemeToggle renderiza botón accesible con aria-label", () => {
    render(
      <ThemeProvider>
        <ThemeToggle lang="es" />
      </ThemeProvider>,
    );

    const button = screen.getByRole("button", {
      name: /cambiar a modo claro/i,
    });
    expect(button).toBeInTheDocument();

    act(() => {
      fireEvent.click(button);
    });

    expect(
      screen.getByRole("button", { name: /cambiar a modo oscuro/i }),
    ).toBeInTheDocument();
  });
});
