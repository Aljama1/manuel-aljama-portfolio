import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("Accesibilidad WCAG — Portfolio", () => {
  test("sin violaciones WCAG en Home ES (modo oscuro)", async ({ page }) => {
    await page.goto("/");
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });

  test("sin violaciones WCAG en Home ES (modo claro)", async ({ page }) => {
    await page.goto("/");
    const themeBtn = page
      .getByRole("button", { name: /cambiar a modo claro/i })
      .first();
    await themeBtn.click();
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });

  test("sin violaciones WCAG en Home EN", async ({ page }) => {
    await page.goto("/en/");
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });

  test("sin violaciones WCAG en Trace ES", async ({ page }) => {
    await page.goto("/projects/trace/");
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });

  test("sin violaciones WCAG en Trace EN", async ({ page }) => {
    await page.goto("/en/projects/trace/");
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });

  test("sin violaciones WCAG en 404 ES", async ({ page }) => {
    await page.goto("/ruta-inexistente-es");
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });

  test("sin violaciones WCAG en 404 EN", async ({ page }) => {
    await page.goto("/en/non-existent-en");
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });
});
