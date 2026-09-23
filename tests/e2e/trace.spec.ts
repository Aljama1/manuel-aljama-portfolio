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

test.describe("Trace Case Study — Responsive layout", () => {
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
});
