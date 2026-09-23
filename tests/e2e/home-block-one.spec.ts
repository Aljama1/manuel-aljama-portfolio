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
    });
  }
});
