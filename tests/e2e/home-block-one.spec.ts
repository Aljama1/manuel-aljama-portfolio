import { expect, test } from "@playwright/test";

test.describe("Home Block 1 responsive layout", () => {
  for (const viewport of [
    { width: 390, height: 844 },
    { width: 768, height: 1024 },
    { width: 1024, height: 900 },
    { width: 1440, height: 1000 },
  ]) {
    test(`has no horizontal overflow at ${viewport.width}px`, async ({
      page,
    }) => {
      await page.setViewportSize(viewport);
      await page.goto("/");

      const dimensions = await page.evaluate(() => ({
        viewportWidth: window.innerWidth,
        documentWidth: document.documentElement.scrollWidth,
      }));

      expect(dimensions.documentWidth).toBeLessThanOrEqual(
        dimensions.viewportWidth,
      );
      await expect(page.locator("h1")).toBeVisible();
      await expect(page.locator("#projects")).toBeVisible();
      await expect(page.locator("#about")).toBeVisible();
      await expect(page.locator("#how-i-build")).toBeVisible();
      await expect(page.locator("#ai-engineering")).toBeVisible();
    });
  }

  test("anchors scroll to respective sections", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto("/");

    // Navegar a About
    await page.locator("header nav a[href='#about']").click();
    await expect(page.locator("#about")).toBeInViewport();

    // Navegar a How I Build
    await page.locator("header nav a[href='#how-i-build']").click();
    await expect(page.locator("#how-i-build")).toBeInViewport();
  });
});
