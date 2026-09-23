import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

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
});
