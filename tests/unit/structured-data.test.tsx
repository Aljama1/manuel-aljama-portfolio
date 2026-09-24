import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { JsonLd, safeJsonLdReplacer } from "@/components/seo/JsonLd";
import { profile } from "@/content";
import { SITE_URL } from "@/lib/site";
import {
  getHomeStructuredData,
  getTraceStructuredData,
} from "@/lib/structured-data";

describe("Structured Data (JSON-LD)", () => {
  describe("safeJsonLdReplacer", () => {
    it("escapes '<' as '\\u003c' to prevent script breakout", () => {
      const payload = {
        title: "Test <script>alert('xss')</script> & </script>",
      };
      const serialized = safeJsonLdReplacer(payload);

      expect(serialized).not.toContain("<script");
      expect(serialized).not.toContain("</script");
      expect(serialized).toContain("\\u003cscript");
      expect(serialized).toContain("\\u003c/script");

      // Verify it safely parses back to the exact same JSON
      const parsed = JSON.parse(serialized);
      expect(parsed).toEqual(payload);
    });
  });

  describe("JsonLd Component", () => {
    it("renders a script tag with type application/ld+json and valid parsed JSON", () => {
      const data = getHomeStructuredData("es");
      const { container } = render(<JsonLd data={data} />);

      const script = container.querySelector(
        'script[type="application/ld+json"]',
      );
      expect(script).not.toBeNull();

      const parsed = JSON.parse(script!.textContent ?? "");
      expect(parsed["@context"]).toBe("https://schema.org");
      expect(Array.isArray(parsed["@graph"])).toBe(true);
    });
  });

  describe("Home structured data (ES & EN)", () => {
    it("generates valid schema with @context and @graph for ES", () => {
      const esData = getHomeStructuredData("es");
      expect(esData["@context"]).toBe("https://schema.org");
      expect(Array.isArray(esData["@graph"])).toBe(true);

      const types = esData["@graph"].map((item) => item["@type"]);
      expect(types).toEqual(["WebSite", "Person", "WebPage"]);
    });

    it("generates valid schema with @context and @graph for EN", () => {
      const enData = getHomeStructuredData("en");
      expect(enData["@context"]).toBe("https://schema.org");
      expect(Array.isArray(enData["@graph"])).toBe(true);

      const types = enData["@graph"].map((item) => item["@type"]);
      expect(types).toEqual(["WebSite", "Person", "WebPage"]);
    });

    it("maintains structural parity between ES and EN", () => {
      const esData = getHomeStructuredData("es");
      const enData = getHomeStructuredData("en");

      expect(esData["@graph"].length).toBe(enData["@graph"].length);
      esData["@graph"].forEach((item, index) => {
        expect(item["@type"]).toBe(enData["@graph"][index]?.["@type"]);
        expect(Object.keys(item)).toEqual(
          Object.keys(enData["@graph"][index] ?? {}),
        );
      });
    });

    it("uses absolute URLs starting with SITE_URL", () => {
      const esData = getHomeStructuredData("es");
      const enData = getHomeStructuredData("en");

      const websiteEs = esData["@graph"].find(
        (item) => item["@type"] === "WebSite",
      );
      const personEs = esData["@graph"].find(
        (item) => item["@type"] === "Person",
      );
      const webpageEs = esData["@graph"].find(
        (item) => item["@type"] === "WebPage",
      );

      const webpageEn = enData["@graph"].find(
        (item) => item["@type"] === "WebPage",
      );

      expect(websiteEs?.url).toBe(`${SITE_URL}/`);
      expect(websiteEs?.["@id"]).toBe(`${SITE_URL}/#website`);

      expect(personEs?.url).toBe(`${SITE_URL}/`);
      expect(personEs?.["@id"]).toBe(`${SITE_URL}/#person`);

      expect(webpageEs?.url).toBe(`${SITE_URL}/`);
      expect(webpageEs?.["@id"]).toBe(`${SITE_URL}/#webpage`);

      expect(webpageEn?.url).toBe(`${SITE_URL}/en/`);
      expect(webpageEn?.["@id"]).toBe(`${SITE_URL}/en/#webpage`);
    });

    it("does not include invented Person data (LinkedIn, fake companies, fake metrics)", () => {
      const esData = getHomeStructuredData("es");
      const person = esData["@graph"].find(
        (item) => item["@type"] === "Person",
      );

      expect(person).toBeDefined();
      expect(person?.name).toBe(profile.name);
      expect(person?.jobTitle).toBe(profile.role);
      expect(person?.sameAs).toEqual([profile.githubUrl]);

      // Assert absence of unverified/unpresent attributes
      expect(person?.["worksFor"]).toBeUndefined();
      expect(person?.["alumniOf"]).toBeUndefined();
      expect(person?.["address"]).toBeUndefined();
      expect(person?.["award"]).toBeUndefined();
      expect(person?.["hasCredential"]).toBeUndefined();
      expect(person?.sameAs).not.toContain("https://linkedin.com");
    });

    it("has inLanguage 'es' for ES and 'en' for EN without Spanish leakage in EN Home", () => {
      const esData = getHomeStructuredData("es");
      const enData = getHomeStructuredData("en");

      const webpageEs = esData["@graph"].find(
        (item) => item["@type"] === "WebPage",
      );
      const webpageEn = enData["@graph"].find(
        (item) => item["@type"] === "WebPage",
      );

      expect(webpageEs?.inLanguage).toBe("es");
      expect(webpageEn?.inLanguage).toBe("en");

      // Verify English description has no Spanish words
      const enDescription = (webpageEn?.description as string) || "";
      expect(enDescription).toContain("Portfolio of Manuel Aljama");
      expect(enDescription).not.toMatch(/\b(de|con|para|ideas en software)\b/i);
    });
  });

  describe("Trace Case Study structured data (ES & EN)", () => {
    it("generates valid schema with @context and @graph for ES", () => {
      const esData = getTraceStructuredData("es");
      expect(esData["@context"]).toBe("https://schema.org");
      expect(Array.isArray(esData["@graph"])).toBe(true);

      const types = esData["@graph"].map((item) => item["@type"]);
      expect(types).toEqual(["WebSite", "Person", "WebPage", "CreativeWork"]);
    });

    it("generates valid schema with @context and @graph for EN", () => {
      const enData = getTraceStructuredData("en");
      expect(enData["@context"]).toBe("https://schema.org");
      expect(Array.isArray(enData["@graph"])).toBe(true);

      const types = enData["@graph"].map((item) => item["@type"]);
      expect(types).toEqual(["WebSite", "Person", "WebPage", "CreativeWork"]);
    });

    it("maintains structural parity between ES and EN", () => {
      const esData = getTraceStructuredData("es");
      const enData = getTraceStructuredData("en");

      expect(esData["@graph"].length).toBe(enData["@graph"].length);
      esData["@graph"].forEach((item, index) => {
        expect(item["@type"]).toBe(enData["@graph"][index]?.["@type"]);
        expect(Object.keys(item)).toEqual(
          Object.keys(enData["@graph"][index] ?? {}),
        );
      });
    });

    it("uses CreativeWork for the case study, linking to Person and WebPage", () => {
      const esData = getTraceStructuredData("es");

      const webpage = esData["@graph"].find(
        (item) => item["@type"] === "WebPage",
      );
      const work = esData["@graph"].find(
        (item) => item["@type"] === "CreativeWork",
      );

      expect(work).toBeDefined();
      expect(work?.name).toBe("Trace");
      expect(work?.author).toEqual({ "@id": `${SITE_URL}/#person` });
      expect(work?.creator).toEqual({ "@id": `${SITE_URL}/#person` });

      expect(webpage?.mainEntity).toEqual({
        "@id": `${SITE_URL}/projects/trace/#project`,
      });
      expect(webpage?.isPartOf).toEqual({
        "@id": `${SITE_URL}/#website`,
      });
    });

    it("uses absolute URLs starting with SITE_URL", () => {
      const esData = getTraceStructuredData("es");
      const enData = getTraceStructuredData("en");

      const webpageEs = esData["@graph"].find(
        (item) => item["@type"] === "WebPage",
      );
      const workEs = esData["@graph"].find(
        (item) => item["@type"] === "CreativeWork",
      );

      const webpageEn = enData["@graph"].find(
        (item) => item["@type"] === "WebPage",
      );
      const workEn = enData["@graph"].find(
        (item) => item["@type"] === "CreativeWork",
      );

      expect(webpageEs?.url).toBe(`${SITE_URL}/projects/trace/`);
      expect(workEs?.url).toBe(`${SITE_URL}/projects/trace/`);

      expect(webpageEn?.url).toBe(`${SITE_URL}/en/projects/trace/`);
      expect(workEn?.url).toBe(`${SITE_URL}/en/projects/trace/`);
    });

    it("does not use SoftwareApplication and does not invent commercial properties", () => {
      const esData = getTraceStructuredData("es");
      const enData = getTraceStructuredData("en");

      [esData, enData].forEach((data) => {
        const types = data["@graph"].map((item) => item["@type"]);
        expect(types).not.toContain("SoftwareApplication");

        const work = data["@graph"].find(
          (item) => item["@type"] === "CreativeWork",
        );
        expect(work?.["offers"]).toBeUndefined();
        expect(work?.["price"]).toBeUndefined();
        expect(work?.["priceCurrency"]).toBeUndefined();
        expect(work?.["aggregateRating"]).toBeUndefined();
        expect(work?.["review"]).toBeUndefined();
        expect(work?.["operatingSystem"]).toBeUndefined();
      });
    });

    it("includes factual repository link in sameAs", () => {
      const esData = getTraceStructuredData("es");
      const work = esData["@graph"].find(
        (item) => item["@type"] === "CreativeWork",
      );
      expect(work?.sameAs).toEqual(["https://github.com/Aljama1/Trace"]);
    });

    it("does not leak Spanish copy into English Trace structured data", () => {
      const enData = getTraceStructuredData("en");
      const webpage = enData["@graph"].find(
        (item) => item["@type"] === "WebPage",
      );
      const work = enData["@graph"].find(
        (item) => item["@type"] === "CreativeWork",
      );

      expect(webpage?.inLanguage).toBe("en");
      expect(work?.inLanguage).toBe("en");

      const title = (webpage?.name as string) || "";
      const desc = (webpage?.description as string) || "";
      const headline = (work?.headline as string) || "";
      const workDesc = (work?.description as string) || "";

      // Must be localized in English
      expect(desc).toContain("cross-platform hospitality application");
      expect(headline).toBe(
        "Bridging table service and kitchen operations seamlessly",
      );
      expect(workDesc).toContain("A cross-platform application designed");

      // Verify no Spanish leakage in English strings
      const combinedEnglishText = `${title} ${desc} ${headline} ${workDesc}`;
      expect(combinedEnglishText).not.toMatch(
        /\b(aplicación|hostelería|sala|cocina|trazabilidad|facturación|comandería)\b/i,
      );
    });
  });
});
