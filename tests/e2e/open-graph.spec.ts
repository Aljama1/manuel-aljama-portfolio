import { test, expect } from "@playwright/test";

test.describe("Open Graph & Twitter Cards Metadata — E2E validation", () => {
  test("Home ES (/) renders complete Open Graph & Twitter metadata without fake images", async ({
    page,
  }) => {
    await page.goto("/");

    // Open Graph
    await expect(page.locator('meta[property="og:type"]')).toHaveAttribute(
      "content",
      "website",
    );
    await expect(page.locator('meta[property="og:site_name"]')).toHaveAttribute(
      "content",
      "Manuel Aljama",
    );
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
      "content",
      "Manuel Aljama — Software Developer",
    );
    await expect(
      page.locator('meta[property="og:description"]'),
    ).toHaveAttribute(
      "content",
      "Portfolio de Manuel Aljama. Convierto ideas en software real.",
    );
    await expect(page.locator('meta[property="og:locale"]')).toHaveAttribute(
      "content",
      "es_ES",
    );
    await expect(
      page.locator('meta[property="og:locale:alternate"]'),
    ).toHaveAttribute("content", "en_US");

    // Verified: No fake image on Home
    await expect(page.locator('meta[property="og:image"]')).toHaveCount(0);

    // Twitter Card
    await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute(
      "content",
      "summary",
    );
    await expect(page.locator('meta[name="twitter:title"]')).toHaveAttribute(
      "content",
      "Manuel Aljama — Software Developer",
    );

    // Canonical & alternates
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      /https:\/\/manuelaljama\.com\/?$/,
    );
    await expect(
      page.locator('link[rel="alternate"][hreflang="es"]'),
    ).toHaveAttribute("href", /https:\/\/manuelaljama\.com\/?$/);
    await expect(
      page.locator('link[rel="alternate"][hreflang="en"]'),
    ).toHaveAttribute("href", /https:\/\/manuelaljama\.com\/en\/?$/);

    // Verify no duplicate og:title or og:description
    await expect(page.locator('meta[property="og:title"]')).toHaveCount(1);
    await expect(page.locator('meta[property="og:description"]')).toHaveCount(
      1,
    );
  });

  test("Home EN (/en/) renders localized Open Graph & Twitter metadata without Spanish leakage", async ({
    page,
  }) => {
    await page.goto("/en/");

    await expect(page.locator('meta[property="og:type"]')).toHaveAttribute(
      "content",
      "website",
    );
    await expect(page.locator('meta[property="og:site_name"]')).toHaveAttribute(
      "content",
      "Manuel Aljama",
    );
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
      "content",
      "Manuel Aljama — Software Developer",
    );
    await expect(
      page.locator('meta[property="og:description"]'),
    ).toHaveAttribute(
      "content",
      "Portfolio of Manuel Aljama. I turn ideas into real software.",
    );
    await expect(page.locator('meta[property="og:locale"]')).toHaveAttribute(
      "content",
      "en_US",
    );
    await expect(
      page.locator('meta[property="og:locale:alternate"]'),
    ).toHaveAttribute("content", "es_ES");

    // No fake image on Home EN
    await expect(page.locator('meta[property="og:image"]')).toHaveCount(0);

    // Twitter Card
    await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute(
      "content",
      "summary",
    );

    // Canonical
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      /https:\/\/manuelaljama\.com\/en\/?$/,
    );

    // Verify absence of duplicate tags
    await expect(page.locator('meta[property="og:title"]')).toHaveCount(1);
    await expect(page.locator('meta[property="og:description"]')).toHaveCount(
      1,
    );
  });

  test("Trace ES (/projects/trace/) renders Open Graph with real demo-poster.png", async ({
    page,
  }) => {
    await page.goto("/projects/trace/");

    await expect(page.locator('meta[property="og:type"]')).toHaveAttribute(
      "content",
      "article",
    );
    await expect(page.locator('meta[property="og:site_name"]')).toHaveAttribute(
      "content",
      "Manuel Aljama",
    );
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
      "content",
      /Trace — Case Study/,
    );
    await expect(
      page.locator('meta[property="og:description"]'),
    ).toHaveAttribute("content", /Case study de Trace/);
    await expect(page.locator('meta[property="og:locale"]')).toHaveAttribute(
      "content",
      "es_ES",
    );
    await expect(
      page.locator('meta[property="og:locale:alternate"]'),
    ).toHaveAttribute("content", "en_US");

    // Image attributes
    const ogImage = page.locator('meta[property="og:image"]');
    await expect(ogImage).toHaveCount(1);
    await expect(ogImage).toHaveAttribute(
      "content",
      /https:\/\/manuelaljama\.com\/media\/projects\/trace\/demo-poster\.png$/,
    );
    await expect(
      page.locator('meta[property="og:image:width"]'),
    ).toHaveAttribute("content", "1280");
    await expect(
      page.locator('meta[property="og:image:height"]'),
    ).toHaveAttribute("content", "720");
    await expect(page.locator('meta[property="og:image:alt"]')).toHaveAttribute(
      "content",
      /Demo del producto/,
    );

    // Twitter Card
    await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute(
      "content",
      "summary_large_image",
    );
    await expect(page.locator('meta[name="twitter:image"]')).toHaveAttribute(
      "content",
      /https:\/\/manuelaljama\.com\/media\/projects\/trace\/demo-poster\.png$/,
    );

    // Canonical
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      /https:\/\/manuelaljama\.com\/projects\/trace\/?$/,
    );

    // Verify absence of duplicate tags
    await expect(page.locator('meta[property="og:title"]')).toHaveCount(1);
    await expect(page.locator('meta[property="og:description"]')).toHaveCount(
      1,
    );
  });

  test("Trace EN (/en/projects/trace/) renders localized Open Graph with real demo-poster.png", async ({
    page,
  }) => {
    await page.goto("/en/projects/trace/");

    await expect(page.locator('meta[property="og:type"]')).toHaveAttribute(
      "content",
      "article",
    );
    await expect(page.locator('meta[property="og:site_name"]')).toHaveAttribute(
      "content",
      "Manuel Aljama",
    );
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
      "content",
      /Trace — Case Study/,
    );
    await expect(
      page.locator('meta[property="og:description"]'),
    ).toHaveAttribute("content", /Case study of Trace/);
    await expect(page.locator('meta[property="og:locale"]')).toHaveAttribute(
      "content",
      "en_US",
    );
    await expect(
      page.locator('meta[property="og:locale:alternate"]'),
    ).toHaveAttribute("content", "es_ES");

    // Image attributes
    const ogImage = page.locator('meta[property="og:image"]');
    await expect(ogImage).toHaveCount(1);
    await expect(ogImage).toHaveAttribute(
      "content",
      /https:\/\/manuelaljama\.com\/media\/projects\/trace\/demo-poster\.png$/,
    );
    await expect(
      page.locator('meta[property="og:image:width"]'),
    ).toHaveAttribute("content", "1280");
    await expect(
      page.locator('meta[property="og:image:height"]'),
    ).toHaveAttribute("content", "720");
    await expect(page.locator('meta[property="og:image:alt"]')).toHaveAttribute(
      "content",
      "Trace — Product demo and real-time ordering",
    );

    // Twitter Card
    await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute(
      "content",
      "summary_large_image",
    );
    await expect(page.locator('meta[name="twitter:image"]')).toHaveAttribute(
      "content",
      /https:\/\/manuelaljama\.com\/media\/projects\/trace\/demo-poster\.png$/,
    );

    // Canonical
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      /https:\/\/manuelaljama\.com\/en\/projects\/trace\/?$/,
    );

    // Verify absence of duplicate tags
    await expect(page.locator('meta[property="og:title"]')).toHaveCount(1);
    await expect(page.locator('meta[property="og:description"]')).toHaveCount(
      1,
    );
  });
});
