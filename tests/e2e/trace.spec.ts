import { test, expect } from "@playwright/test";

test.describe("Trace Case Study — Rutas y navegación", () => {
  test("Trace ES (/projects/trace/) carga con todos los bloques editoriales", async ({
    page,
  }) => {
    await page.goto("/projects/trace/");

    await expect(page).toHaveTitle(/Trace — Case Study/);
    await expect(page.locator("h1")).toContainText("Trace");

    // Overview, Problema y Solución visibles
    await expect(page.locator("#overview")).toBeVisible();
    await expect(page.locator("#problem")).toBeVisible();
    await expect(page.locator("#solution")).toBeVisible();
    await expect(page.locator("#product-flow")).toBeVisible();
    await expect(page.locator("#demo")).toBeVisible();

    const videoES = page.locator("#demo video");
    await expect(videoES).toBeVisible();
    await expect(videoES).toHaveAttribute("controls", "");
    await expect(videoES).toHaveAttribute("preload", "metadata");
    await expect(videoES).toHaveAttribute(
      "poster",
      "/media/projects/trace/demo-poster.png",
    );
    await expect(videoES.locator("source")).toHaveAttribute(
      "src",
      "/media/projects/trace/demo.mp4",
    );
    await expect(videoES).not.toHaveAttribute("autoplay", "");

    await expect(page.locator("#architecture")).toBeVisible();
    await expect(page.locator("#decisions")).toBeVisible();
    await expect(page.locator("#challenges")).toBeVisible();
    await expect(page.locator("#testing")).toBeVisible();
    await expect(page.locator("#security")).toBeVisible();
    await expect(page.locator("#result")).toBeVisible();
    await expect(page.locator("#learnings")).toBeVisible();
    await expect(page.locator("#deep-dive")).toBeVisible();
    await expect(page.locator("#navigation")).toBeVisible();

    // Enlace a GitHub factual
    const githubLink = page
      .getByRole("link", { name: /ver código en github/i })
      .first();
    await expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/Aljama1/Trace",
    );

    // Botón volver a proyectos redirige a /#projects
    const backBtn = page
      .getByRole("link", { name: /volver a proyectos/i })
      .first();
    await expect(backBtn).toHaveAttribute("href", /\/?#projects$/);

    // Asisteo no debe tener enlace desde Trace
    const asisteoLinks = page.locator('a[href*="asisteo"]');
    await expect(asisteoLinks).toHaveCount(0);
  });

  test("Trace EN (/en/projects/trace/) carga correctamente en inglés", async ({
    page,
  }) => {
    await page.goto("/en/projects/trace/");

    await expect(page).toHaveTitle(/Trace — Case Study/);
    await expect(page.locator("h1")).toContainText("Trace");

    // Headings en inglés
    await expect(
      page.getByRole("heading", { level: 2, name: /bridging table service/i }),
    ).toBeVisible();

    // Sección demo visible y con video
    await expect(page.locator("#demo")).toBeVisible();
    const videoEN = page.locator("#demo video");
    await expect(videoEN).toBeVisible();
    await expect(videoEN).toHaveAttribute(
      "poster",
      "/media/projects/trace/demo-poster.png",
    );
    await expect(videoEN.locator("source")).toHaveAttribute(
      "src",
      "/media/projects/trace/demo.mp4",
    );

    // Enlace GitHub en inglés
    const githubLink = page
      .getByRole("link", { name: /view code on github/i })
      .first();
    await expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/Aljama1/Trace",
    );

    // Botón volver a proyectos en inglés
    const backBtn = page
      .getByRole("link", { name: /back to projects/i })
      .first();
    await expect(backBtn).toHaveAttribute("href", /\/en\/?#projects$/);
  });
});

test.describe("Trace Case Study — Responsive layout y Mobile Drawer", () => {
  const viewports = [
    { width: 390, height: 844, name: "390px (mobile)" },
    { width: 768, height: 1024, name: "768px (tablet)" },
    { width: 1024, height: 768, name: "1024px (desktop small)" },
    { width: 1440, height: 900, name: "1440px (desktop wide)" },
  ];

  for (const vp of viewports) {
    test(`sin desbordamiento horizontal en ${vp.name}`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto("/projects/trace/");

      const hasHorizontalOverflow = await page.evaluate(() => {
        return (
          document.documentElement.scrollWidth >
          document.documentElement.clientWidth
        );
      });

      expect(hasHorizontalOverflow).toBe(false);
    });
  }

  test("drawer móvil en 390x844 cubre el viewport y se cierra al navegar", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/projects/trace/");

    // Abrir menú móvil
    const menuButton = page.locator('button[aria-expanded="false"]').first();
    await expect(menuButton).toBeVisible();
    await menuButton.click();

    // El drawer dialog debe estar visible y montado
    const drawerDialog = page.getByRole("dialog");
    await expect(drawerDialog).toBeVisible();

    // Comprobar que no queda colapsado a ~49px dentro del header con backdrop-filter
    const box = await drawerDialog.boundingBox();
    expect(box).not.toBeNull();
    if (box) {
      // Debe ocupar desde top 64px hasta la base del viewport (844px), con una altura sustancial (aprox 780px)
      expect(box.height).toBeGreaterThan(600);
      expect(box.y).toBeGreaterThanOrEqual(60);
    }

    // Al pulsar un enlace de navegación, debe cerrarse el drawer
    const navLink = drawerDialog.getByRole("link").first();
    await navLink.click();

    await expect(drawerDialog).toBeHidden();
  });
});

test.describe("Trace Case Study — I18n de diagramas conceptuales", () => {
  test("los diagramas en EN muestran terminología en inglés sin fugas en español", async ({
    page,
  }) => {
    await page.goto("/en/projects/trace/");

    // Diagrama de flujo de producto
    const flowSection = page.locator("#product-flow");
    await expect(flowSection).toBeVisible();
    await expect(flowSection).toContainText("Diner");
    await expect(flowSection).toContainText("Staff");
    await expect(flowSection).toContainText("System");
    await expect(flowSection).not.toContainText("Comensal");
    await expect(flowSection).not.toContainText("Personal");
    await expect(flowSection).not.toContainText("Recorrido completo");

    // Diagrama de arquitectura
    const archSection = page.locator("#architecture");
    await expect(archSection).toBeVisible();
    await expect(archSection).toContainText("01 / Client & Reactive UI");
    await expect(archSection).toContainText("Layer separation");
    await expect(archSection).toContainText("Key components:");
    await expect(archSection).toContainText("Native capabilities:");
    await expect(archSection).toContainText("Firebase infrastructure:");
    await expect(archSection).not.toContainText("Componentes clave:");
    await expect(archSection).not.toContainText("Capacidades nativas:");
    await expect(archSection).not.toContainText("Infraestructura Firebase:");
    await expect(archSection).not.toContainText("Separación de capas");
  });

  test("los diagramas en ES muestran terminología localizada en español", async ({
    page,
  }) => {
    await page.goto("/projects/trace/");

    // Diagrama de flujo de producto
    const flowSection = page.locator("#product-flow");
    await expect(flowSection).toBeVisible();
    await expect(flowSection).toContainText("Comensal");
    await expect(flowSection).toContainText("Personal");
    await expect(flowSection).toContainText("Sistema");
    await expect(flowSection).toContainText("Recorrido completo");

    // Diagrama de arquitectura
    const archSection = page.locator("#architecture");
    await expect(archSection).toBeVisible();
    await expect(archSection).toContainText("01 / Client & Reactive UI");
    await expect(archSection).toContainText("Separación de capas");
    await expect(archSection).toContainText("Componentes clave:");
    await expect(archSection).toContainText("Capacidades nativas:");
    await expect(archSection).toContainText("Infraestructura Firebase:");
  });
});
