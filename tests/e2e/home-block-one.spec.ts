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
      await expect(page.locator("#skills")).toBeVisible();
      await expect(page.locator("#experience")).toBeVisible();
      await expect(page.locator("#contact")).toBeVisible();
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

    // Navegar a Contact
    await page.locator("header nav a[href='#contact']").click();
    await expect(page.locator("#contact")).toBeInViewport();
  });

  test("renders confirmed contact channels and hides LinkedIn and CV when undefined", async ({
    page,
  }) => {
    await page.goto("/");

    // GitHub real existe y es visible
    const githubLinks = page.locator("a[href='https://github.com/Aljama1']");
    expect(await githubLinks.count()).toBeGreaterThanOrEqual(1);

    // Email confirmado existe y es visible
    const emailLinks = page.locator("a[href='mailto:manuelaljama9@gmail.com']");
    expect(await emailLinks.count()).toBeGreaterThanOrEqual(1);

    // LinkedIn NO debe existir en la página mientras no haya URL real
    const linkedinLinks = page.locator("a[href*='linkedin.com']");
    expect(await linkedinLinks.count()).toBe(0);

    // Botón de CV NO debe existir mientras no haya archivo real
    const cvLinks = page.locator("a[href*='.pdf']");
    expect(await cvLinks.count()).toBe(0);
  });
});
