import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("Trace Case Study — Accesibilidad WCAG", () => {
  test("sin violaciones WCAG en Trace ES (modo oscuro)", async ({ page }) => {
    await page.goto("/projects/trace/");
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });

  test("sin violaciones WCAG en Trace ES (modo claro)", async ({ page }) => {
    await page.goto("/projects/trace/");
    const themeBtn = page
      .getByRole("button", { name: /cambiar a modo claro/i })
      .first();
    await themeBtn.click();
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });

  test("sin violaciones WCAG en Trace EN (modo oscuro)", async ({ page }) => {
    await page.goto("/en/projects/trace/");
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });

  test("sin violaciones WCAG en Trace EN (modo claro)", async ({ page }) => {
    await page.goto("/en/projects/trace/");
    const themeBtn = page
      .getByRole("button", { name: /switch to light mode/i })
      .first();
    await themeBtn.click();
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });
});
