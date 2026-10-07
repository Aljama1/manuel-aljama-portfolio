import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

describe("Base UI Components", () => {
  describe("Container", () => {
    it("renderiza un contenedor con max-w-[1280px] y padding", () => {
      render(<Container data-testid="container">Contenido</Container>);
      const container = screen.getByTestId("container");
      expect(container).toHaveClass("max-w-[1280px]");
      expect(container).toHaveClass("mx-auto");
      expect(container).toHaveTextContent("Contenido");
    });

    it("soporta polimorfismo de etiqueta mediante la prop 'as'", () => {
      render(
        <Container as="header" data-testid="container-header">
          Header
        </Container>,
      );
      const container = screen.getByTestId("container-header");
      expect(container.tagName.toLowerCase()).toBe("header");
    });
  });

  describe("Section", () => {
    it("renderiza una etiqueta <section> con id para anchors", () => {
      render(
        <Section id="projects" data-testid="section-projects">
          <h2>Proyectos</h2>
        </Section>,
      );
      const section = screen.getByTestId("section-projects");
      expect(section.tagName.toLowerCase()).toBe("section");
      expect(section).toHaveAttribute("id", "projects");
      expect(section).toHaveClass("py-16");
    });
  });

  describe("Button", () => {
    it("renderiza botón primario por defecto", () => {
      render(<Button>Acción principal</Button>);
      const button = screen.getByRole("button", { name: "Acción principal" });
      expect(button).toHaveClass("bg-primary");
      expect(button).toHaveClass("text-background");
    });

    it("renderiza variante secundaria", () => {
      render(<Button variant="secondary">Acción secundaria</Button>);
      const button = screen.getByRole("button", { name: "Acción secundaria" });
      expect(button).toHaveClass("bg-surface");
      expect(button).toHaveClass("border-border");
    });

    it("renderiza variante ghost", () => {
      render(<Button variant="ghost">Detalles</Button>);
      const button = screen.getByRole("button", { name: "Detalles" });
      expect(button).toHaveClass("text-foreground-muted");
    });

    it("renderiza enlace Next.js cuando se proporciona href interno", () => {
      render(<Button href="/projects/trace">Ver Trace</Button>);
      const link = screen.getByRole("link", { name: "Ver Trace" });
      expect(link).toHaveAttribute("href", "/projects/trace");
    });

    it("renderiza enlace externo seguro cuando external=true", () => {
      render(
        <Button href="https://github.com/Aljama1" external>
          GitHub
        </Button>,
      );
      const link = screen.getByRole("link", { name: "GitHub" });
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });

    it("aplica disabled correctamente", () => {
      render(<Button disabled>Desactivado</Button>);
      const button = screen.getByRole("button", { name: "Desactivado" });
      expect(button).toBeDisabled();
    });
  });

  describe("ScrollReveal", () => {
    it("renderiza contenido y aplica las clases scroll-reveal con separación limpia de espacio", async () => {
      render(
        <ScrollReveal data-testid="reveal-item">
          <span>Contenido animado</span>
        </ScrollReveal>,
      );

      const item = screen.getByText("Contenido animado").parentElement!;
      expect(item).toBeInTheDocument();
      // Verificamos que la clase base esté presente
      expect(item.className).toContain("scroll-reveal");
      // Verificamos que no exista el bug de concatenación sin espacio
      expect(item.className).not.toContain("scroll-revealis-revealed");
    });

    it("combina className personalizada con scroll-reveal e is-revealed correctamente", async () => {
      render(
        <ScrollReveal className="custom-card max-w-3xl">
          <span>Card personalizada</span>
        </ScrollReveal>,
      );

      const item = screen.getByText("Card personalizada").parentElement!;
      expect(item).toHaveClass("max-w-3xl");
      expect(item).toHaveClass("custom-card");
      expect(item).toHaveClass("scroll-reveal");

      await waitFor(() => {
        expect(item).toHaveClass("is-revealed");
      });
      expect(item.className).not.toContain("scroll-revealis-revealed");
    });

    it("aplica animationDelay cuando delayMs > 0 y es visible", async () => {
      render(
        <ScrollReveal delayMs={250}>
          <span>Retardado</span>
        </ScrollReveal>,
      );

      const item = screen.getByText("Retardado").parentElement!;
      await waitFor(() => {
        expect(item.style.animationDelay).toBe("250ms");
      });
    });

    it("activa visibilidad inmediata cuando prefers-reduced-motion está habilitado", async () => {
      const originalMatchMedia = window.matchMedia;
      window.matchMedia = vi.fn().mockImplementation((query: string) => ({
        matches: query === "(prefers-reduced-motion: reduce)",
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      }));

      try {
        render(
          <ScrollReveal>
            <span>Accesibilidad de movimiento</span>
          </ScrollReveal>,
        );

        const item = screen.getByText(
          "Accesibilidad de movimiento",
        ).parentElement!;
        expect(item).toHaveClass("scroll-reveal");
        await waitFor(() => {
          expect(item).toHaveClass("is-revealed");
        });
      } finally {
        window.matchMedia = originalMatchMedia;
      }
    });
  });
});
