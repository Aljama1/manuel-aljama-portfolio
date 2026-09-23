import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { RootShell } from "@/components/layout/RootShell";

describe("RootShell smoke test", () => {
  it("renders children correctly", () => {
    render(
      <RootShell lang="es">
        <p>Contenido de prueba</p>
      </RootShell>,
    );

    expect(screen.getByText("Contenido de prueba")).toBeInTheDocument();
  });

  it("aplica el atributo lang='es' al html del documento", () => {
    // RootShell renderiza <html lang={lang}>. En jsdom, el container es un
    // div interno al <body>, por lo que el <html> renderizado se fusiona con
    // document.documentElement. Verificamos a través del árbol renderizado.
    const { baseElement } = render(
      <RootShell lang="es">
        <p>test es</p>
      </RootShell>,
    );
    // baseElement es document.body; el html renderizado está en su interior
    const html = baseElement.closest("html");
    expect(html?.getAttribute("lang")).toBe("es");
  });

  it("aplica el atributo lang='en' al html del documento", () => {
    const { baseElement } = render(
      <RootShell lang="en">
        <p>test en</p>
      </RootShell>,
    );
    const html = baseElement.closest("html");
    expect(html?.getAttribute("lang")).toBe("en");
  });
});
