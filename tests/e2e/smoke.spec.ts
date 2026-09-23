import { test, expect } from "@playwright/test";

test.describe("Smoke — rutas principales", () => {
  test("home ES (/) carga correctamente", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Manuel Aljama/);
  });

  test("home EN (/en/) carga correctamente", async ({ page }) => {
    await page.goto("/en/");
    await expect(page).toHaveTitle(/Manuel Aljama/);
  });

  test("Trace ES (/projects/trace/) carga correctamente", async ({ page }) => {
    await page.goto("/projects/trace/");
    await expect(page.locator("h1")).toContainText("Trace");
  });

  test("Trace EN (/en/projects/trace/) carga correctamente", async ({
    page,
  }) => {
    await page.goto("/en/projects/trace/");
    await expect(page.locator("h1")).toContainText("Trace");
  });

  test("HTML lang='es' en la ruta raíz", async ({ page }) => {
    await page.goto("/");
    const lang = await page.locator("html").getAttribute("lang");
    expect(lang).toBe("es");
  });

  test("HTML lang='en' en la ruta /en/", async ({ page }) => {
    await page.goto("/en/");
    const lang = await page.locator("html").getAttribute("lang");
    expect(lang).toBe("en");
  });
});
