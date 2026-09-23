import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("Home Block 1 accessibility", () => {
  test("has no Axe violations in Home EN light mode", async ({ page }) => {
    await page.goto("/en/");
    await page
      .getByRole("button", { name: /switch to light mode/i })
      .first()
      .click();

    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });
});
