import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("Privacy Pages — Accesibilidad WCAG", () => {
  test("sin violaciones WCAG en Privacy ES", async ({ page }) => {
    await page.goto("/privacy");
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("sin violaciones WCAG en Privacy EN", async ({ page }) => {
    await page.goto("/en/privacy");
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
