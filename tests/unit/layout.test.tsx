import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

describe("Layout Components", () => {
  describe("Header", () => {
    it("muestra la marca MANUEL ALJAMA con enlace a la home", () => {
      render(
        <ThemeProvider>
          <Header lang="es" />
        </ThemeProvider>,
      );

      const brand = screen.getByRole("link", { name: "MANUEL ALJAMA" });
      expect(brand).toBeInTheDocument();
      expect(brand).toHaveAttribute("href", "/");
    });

    it("contiene los enlaces de navegación Work, About, How I Build y Contact", () => {
      render(
        <ThemeProvider>
          <Header lang="es" />
        </ThemeProvider>,
      );

      expect(screen.getByRole("link", { name: "Work" })).toHaveAttribute(
        "href",
        "#projects",
      );
      expect(screen.getByRole("link", { name: "About" })).toHaveAttribute(
        "href",
        "#about",
      );
      expect(screen.getByRole("link", { name: "How I Build" })).toHaveAttribute(
        "href",
        "#how-i-build",
      );
      expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute(
        "href",
        "#contact",
      );
    });

    it("abre el menú móvil y se cierra al pulsar un enlace de ancla", () => {
      render(
        <ThemeProvider>
          <Header lang="es" />
        </ThemeProvider>,
      );

      const menuButton = screen.getByRole("button", { name: /abrir menú/i });
      fireEvent.click(menuButton);

      // Ahora el menú está abierto
      const dialog = screen.getByRole("dialog", {
        name: /menú de navegación/i,
      });
      expect(dialog).toBeInTheDocument();

      // Pulsar un ancla dentro del menú debe cerrarlo según la constitución
      const workLinks = screen.getAllByRole("link", { name: "Work" });
      const mobileWorkLink = workLinks[workLinks.length - 1];
      if (mobileWorkLink) {
        fireEvent.click(mobileWorkLink);
      }

      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });

  describe("Footer", () => {
    it("muestra el nombre, rol y tagline aprobados en español", () => {
      render(<Footer lang="es" />);

      expect(screen.getByText("MANUEL ALJAMA")).toBeInTheDocument();
      expect(screen.getByText("Software Developer")).toBeInTheDocument();
      expect(
        screen.getByText("Construyo ideas. Aprendo. Itero."),
      ).toBeInTheDocument();
    });

    it("muestra el tagline en inglés cuando lang='en'", () => {
      render(<Footer lang="en" />);

      expect(
        screen.getByText("Building ideas. Learning. Iterating."),
      ).toBeInTheDocument();
    });

    it("contiene enlaces a GitHub, LinkedIn y Email", () => {
      render(<Footer lang="es" />);

      const github = screen.getByRole("link", { name: "GitHub" });
      expect(github).toHaveAttribute("href", "https://github.com/Aljama1");

      const linkedin = screen.getByRole("link", { name: "LinkedIn" });
      expect(linkedin).toHaveAttribute("href", "https://linkedin.com");

      const email = screen.getByRole("link", { name: "Email" });
      expect(email).toHaveAttribute("href", "mailto:manuelaljama9@gmail.com");
    });

    it("incluye el copyright 2026", () => {
      render(<Footer lang="es" />);
      expect(screen.getByText("© 2026 Manuel Aljama")).toBeInTheDocument();
    });
  });
});
