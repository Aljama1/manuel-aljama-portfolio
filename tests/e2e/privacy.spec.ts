import { test, expect } from "@playwright/test";

test.describe("Privacy Pages — Rutas y navegación", () => {
  test("ES Privacy (/privacy) carga correctamente y muestra el contenido", async ({
    page,
  }) => {
    const errors: string[] = [];
    page.on("console", (msg) => {
      if (
        msg.type() === "error" &&
        !msg.text().includes("_vercel/insights") &&
        !msg.text().includes("404 (Not Found)")
      ) {
        errors.push(msg.text());
      }
    });
    page.on("pageerror", (error) => errors.push(error.message));

    await page.goto("/privacy");

    // Verificar encabezado
    await expect(
      page.getByRole("heading", { name: "Política de Privacidad" }),
    ).toBeVisible();

    // Verificar secciones
    await expect(
      page.getByRole("heading", { name: "Analítica Web" }),
    ).toBeVisible();

    // Sin errores de consola
    expect(errors).toHaveLength(0);
  });

  test("EN Privacy (/en/privacy) carga correctamente y muestra el contenido", async ({
    page,
  }) => {
    const errors: string[] = [];
    page.on("console", (msg) => {
      if (
        msg.type() === "error" &&
        !msg.text().includes("_vercel/insights") &&
        !msg.text().includes("404 (Not Found)")
      ) {
        errors.push(msg.text());
      }
    });
    page.on("pageerror", (error) => errors.push(error.message));

    await page.goto("/en/privacy");

    // Verificar encabezado
    await expect(
      page.getByRole("heading", { name: "Privacy Policy" }),
    ).toBeVisible();

    // Verificar secciones
    await expect(
      page.getByRole("heading", { name: "Web Analytics" }),
    ).toBeVisible();

    // Sin errores de consola
    expect(errors).toHaveLength(0);
  });

  test("Navegación desde el Footer (ES)", async ({ page }) => {
    await page.goto("/");
    const footerLink = page.getByRole("link", { name: "Privacidad" });
    await expect(footerLink).toBeVisible();
    await footerLink.click();
    await expect(page).toHaveURL(/.*\/privacy/);
    await expect(
      page.getByRole("heading", { name: "Política de Privacidad" }),
    ).toBeVisible();
  });

  test("Navegación desde el Footer (EN)", async ({ page }) => {
    await page.goto("/en");
    const footerLink = page.getByRole("link", { name: "Privacy" });
    await expect(footerLink).toBeVisible();
    await footerLink.click();
    await expect(page).toHaveURL(/.*\/en\/privacy/);
    await expect(
      page.getByRole("heading", { name: "Privacy Policy" }),
    ).toBeVisible();
  });

  test("Responsive básico en 390px (mobile) para /privacy", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/privacy");

    // Verificar desbordamiento
    const hasHorizontalOverflow = await page.evaluate(() => {
      return (
        document.documentElement.scrollWidth > window.innerWidth ||
        document.body.scrollWidth > window.innerWidth
      );
    });
    expect(hasHorizontalOverflow).toBe(false);

    // Menú hamburguesa debe estar disponible y funcionar
    const menuBtn = page.getByRole("button", { name: "Abrir menú" });
    await expect(menuBtn).toBeVisible();
  });
});
