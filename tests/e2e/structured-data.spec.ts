import { test, expect } from "@playwright/test";

test.describe("Structured Data (JSON-LD) — E2E validation", () => {
  test("Home ES (/) renders valid JSON-LD with WebSite, Person, and WebPage", async ({
    page,
  }) => {
    await page.goto("/");

    const jsonLdScript = page.locator('script[type="application/ld+json"]');
    await expect(jsonLdScript).toHaveCount(1);

    const jsonContent = await jsonLdScript.textContent();
    expect(jsonContent).toBeTruthy();

    const data = JSON.parse(jsonContent!);
    expect(data["@context"]).toBe("https://schema.org");
    expect(Array.isArray(data["@graph"])).toBe(true);

    const types = data["@graph"].map(
      (item: Record<string, unknown>) => item["@type"],
    );
    expect(types).toContain("WebSite");
    expect(types).toContain("Person");
    expect(types).toContain("WebPage");

    const person = data["@graph"].find(
      (item: Record<string, unknown>) => item["@type"] === "Person",
    );
    expect(person.name).toBe("Manuel Aljama");
    expect(person.jobTitle).toBeUndefined();
    expect(person.sameAs).toEqual(["https://github.com/Aljama1"]);
    expect(person.worksFor).toBeUndefined();

    const webpage = data["@graph"].find(
      (item: Record<string, unknown>) => item["@type"] === "WebPage",
    );
    expect(webpage.inLanguage).toBe("es");
    expect(webpage.description).toContain(
      "Portfolio de Manuel Aljama. Convierto ideas en software real.",
    );
  });

  test("Home EN (/en/) renders valid JSON-LD with localized English content", async ({
    page,
  }) => {
    await page.goto("/en/");

    const jsonLdScript = page.locator('script[type="application/ld+json"]');
    await expect(jsonLdScript).toHaveCount(1);

    const jsonContent = await jsonLdScript.textContent();
    const data = JSON.parse(jsonContent!);

    const webpage = data["@graph"].find(
      (item: Record<string, unknown>) => item["@type"] === "WebPage",
    );
    expect(webpage.inLanguage).toBe("en");
    expect(webpage.description).toBe(
      "Portfolio of Manuel Aljama. I turn ideas into real software.",
    );
    expect(webpage.description).not.toMatch(/\b(de|con|para|ideas en)\b/i);
  });

  test("Trace ES (/projects/trace/) renders valid JSON-LD with CreativeWork", async ({
    page,
  }) => {
    await page.goto("/projects/trace/");

    const jsonLdScript = page.locator('script[type="application/ld+json"]');
    await expect(jsonLdScript).toHaveCount(1);

    const jsonContent = await jsonLdScript.textContent();
    const data = JSON.parse(jsonContent!);

    const types = data["@graph"].map(
      (item: Record<string, unknown>) => item["@type"],
    );
    expect(types).toContain("CreativeWork");
    expect(types).toContain("WebPage");
    expect(types).not.toContain("SoftwareApplication");

    const creativeWork = data["@graph"].find(
      (item: Record<string, unknown>) => item["@type"] === "CreativeWork",
    );
    expect(creativeWork.name).toBe("Trace");
    expect(creativeWork.inLanguage).toBe("es");
    expect(creativeWork.sameAs).toEqual(["https://github.com/Aljama1/Trace"]);
    expect(creativeWork.offers).toBeUndefined();
    expect(creativeWork.aggregateRating).toBeUndefined();

    const webpage = data["@graph"].find(
      (item: Record<string, unknown>) => item["@type"] === "WebPage",
    );
    expect(webpage.mainEntity).toEqual({
      "@id": creativeWork["@id"],
    });
  });

  test("Trace EN (/en/projects/trace/) renders valid JSON-LD with localized English content", async ({
    page,
  }) => {
    await page.goto("/en/projects/trace/");

    const jsonLdScript = page.locator('script[type="application/ld+json"]');
    await expect(jsonLdScript).toHaveCount(1);

    const jsonContent = await jsonLdScript.textContent();
    const data = JSON.parse(jsonContent!);

    const creativeWork = data["@graph"].find(
      (item: Record<string, unknown>) => item["@type"] === "CreativeWork",
    );
    expect(creativeWork.name).toBe("Trace");
    expect(creativeWork.inLanguage).toBe("en");
    expect(creativeWork.headline).toBe(
      "Bridging table service and kitchen operations seamlessly",
    );
    expect(creativeWork.description).toContain(
      "A cross-platform application designed to streamline the hospitality service cycle",
    );

    // Verify absence of Spanish leakage
    const combined = `${creativeWork.headline} ${creativeWork.description}`;
    expect(combined).not.toMatch(
      /\b(aplicación|hostelería|sala|cocina|facturación)\b/i,
    );
  });
});
