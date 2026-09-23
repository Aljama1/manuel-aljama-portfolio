import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("Accesibilidad — home ES", () => {
  test("no debe tener violaciones WCAG en /", async ({ page }) => {
    await page.goto("/");
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });
});

test.describe("Accesibilidad — home EN", () => {
  test("no debe tener violaciones WCAG en /en/", async ({ page }) => {
    await page.goto("/en/");
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });
});
