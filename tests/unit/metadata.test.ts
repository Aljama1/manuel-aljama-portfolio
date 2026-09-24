import { describe, expect, it } from "vitest";
import { profile, traceContent } from "@/content";
import { getHomeMetadata, getTraceMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/site";

describe("Metadata & Open Graph Generators", () => {
  describe("getHomeMetadata", () => {
    it("generates correct Spanish metadata for Home", () => {
      const meta = getHomeMetadata("es");

      expect(meta.metadataBase?.toString()).toBe(new URL(SITE_URL).toString());
      expect(meta.title).toBe("Manuel Aljama — Software Developer");
      expect(meta.description).toContain(
        "Portfolio de Manuel Aljama. Convierto ideas en software real.",
      );
      expect(meta.alternates?.canonical).toBe("/");
      expect(meta.alternates?.languages).toEqual({
        es: "/",
        en: "/en",
      });

      const og = meta.openGraph as Record<string, unknown>;
      expect(og.type).toBe("website");
      expect(og.siteName).toBe(profile.name);
      expect(og.title).toBe("Manuel Aljama — Software Developer");
      expect(og.description).toContain("Portfolio de Manuel Aljama.");
      expect(og.url).toBe("/");
      expect(og.locale).toBe("es_ES");
      expect(og.alternateLocale).toEqual(["en_US"]);
      expect(og.images).toBeUndefined();

      const tw = meta.twitter as Record<string, unknown>;
      expect(tw.card).toBe("summary");
      expect(tw.title).toBe(og.title);
      expect(tw.description).toBe(og.description);
    });

    it("generates correct English metadata for Home with zero Spanish leakage", () => {
      const meta = getHomeMetadata("en");

      expect(meta.metadataBase?.toString()).toBe(new URL(SITE_URL).toString());
      expect(meta.title).toBe("Manuel Aljama — Software Developer");
      expect(meta.description).toBe(
        "Portfolio of Manuel Aljama. I turn ideas into real software.",
      );
      expect(meta.alternates?.canonical).toBe("/en");
      expect(meta.alternates?.languages).toEqual({
        es: "/",
        en: "/en",
      });

      const og = meta.openGraph as Record<string, unknown>;
      expect(og.type).toBe("website");
      expect(og.siteName).toBe(profile.name);
      expect(og.title).toBe("Manuel Aljama — Software Developer");
      expect(og.description).toBe(
        "Portfolio of Manuel Aljama. I turn ideas into real software.",
      );
      expect(og.url).toBe("/en");
      expect(og.locale).toBe("en_US");
      expect(og.alternateLocale).toEqual(["es_ES"]);
      expect(og.images).toBeUndefined();

      const desc = og.description as string;
      expect(desc).not.toMatch(/\b(de|con|para|ideas en)\b/i);

      const tw = meta.twitter as Record<string, unknown>;
      expect(tw.card).toBe("summary");
    });

    it("maintains structural parity between ES and EN for Home metadata", () => {
      const esMeta = getHomeMetadata("es");
      const enMeta = getHomeMetadata("en");

      expect(Object.keys(esMeta)).toEqual(Object.keys(enMeta));
      expect(Object.keys(esMeta.openGraph ?? {})).toEqual(
        Object.keys(enMeta.openGraph ?? {}),
      );
      expect(Object.keys(esMeta.twitter ?? {})).toEqual(
        Object.keys(enMeta.twitter ?? {}),
      );
    });
  });

  describe("getTraceMetadata", () => {
    it("generates correct Spanish metadata for Trace Case Study", () => {
      const meta = getTraceMetadata("es");

      expect(meta.metadataBase?.toString()).toBe(new URL(SITE_URL).toString());
      expect(meta.title).toBe(traceContent.es.meta.title);
      expect(meta.description).toBe(traceContent.es.meta.description);
      expect(meta.alternates?.canonical).toBe("/projects/trace");
      expect(meta.alternates?.languages).toEqual({
        es: "/projects/trace",
        en: "/en/projects/trace",
      });

      const og = meta.openGraph as Record<string, unknown>;
      expect(og.type).toBe("article");
      expect(og.siteName).toBe(profile.name);
      expect(og.title).toBe(traceContent.es.meta.title);
      expect(og.description).toBe(traceContent.es.meta.description);
      expect(og.url).toBe("/projects/trace");
      expect(og.locale).toBe("es_ES");
      expect(og.alternateLocale).toEqual(["en_US"]);

      const images = og.images as Array<Record<string, unknown>>;
      expect(images).toHaveLength(1);
      expect(images[0]?.url).toBe("/media/projects/trace/demo-poster.png");
      expect(images[0]?.width).toBe(1280);
      expect(images[0]?.height).toBe(720);
      expect(images[0]?.type).toBe("image/png");
      expect(images[0]?.alt).toContain("Demo del producto");

      const tw = meta.twitter as Record<string, unknown>;
      expect(tw.card).toBe("summary_large_image");
      expect(tw.title).toBe(traceContent.es.meta.title);
      expect(tw.description).toBe(traceContent.es.meta.description);
      expect(tw.images).toEqual(["/media/projects/trace/demo-poster.png"]);
    });

    it("generates correct English metadata for Trace with localized image alt and zero Spanish leakage", () => {
      const meta = getTraceMetadata("en");

      expect(meta.metadataBase?.toString()).toBe(new URL(SITE_URL).toString());
      expect(meta.title).toBe(traceContent.en.meta.title);
      expect(meta.description).toBe(traceContent.en.meta.description);
      expect(meta.alternates?.canonical).toBe("/en/projects/trace");
      expect(meta.alternates?.languages).toEqual({
        es: "/projects/trace",
        en: "/en/projects/trace",
      });

      const og = meta.openGraph as Record<string, unknown>;
      expect(og.type).toBe("article");
      expect(og.siteName).toBe(profile.name);
      expect(og.title).toBe(traceContent.en.meta.title);
      expect(og.description).toBe(traceContent.en.meta.description);
      expect(og.url).toBe("/en/projects/trace");
      expect(og.locale).toBe("en_US");
      expect(og.alternateLocale).toEqual(["es_ES"]);

      const images = og.images as Array<Record<string, unknown>>;
      expect(images).toHaveLength(1);
      expect(images[0]?.url).toBe("/media/projects/trace/demo-poster.png");
      expect(images[0]?.width).toBe(1280);
      expect(images[0]?.height).toBe(720);
      expect(images[0]?.alt).toBe(
        "Trace — Product demo and real-time ordering",
      );

      // Verify no Spanish leakage in English metadata
      const text = `${og.title} ${og.description} ${images[0]?.alt}`;
      expect(text).not.toMatch(
        /\b(aplicación|hostelería|sala|cocina|comandería|facturación)\b/i,
      );

      const tw = meta.twitter as Record<string, unknown>;
      expect(tw.card).toBe("summary_large_image");
      expect(tw.images).toEqual(["/media/projects/trace/demo-poster.png"]);
    });

    it("maintains structural parity between ES and EN for Trace metadata", () => {
      const esMeta = getTraceMetadata("es");
      const enMeta = getTraceMetadata("en");

      expect(Object.keys(esMeta)).toEqual(Object.keys(enMeta));
      expect(Object.keys(esMeta.openGraph ?? {})).toEqual(
        Object.keys(enMeta.openGraph ?? {}),
      );
      expect(Object.keys(esMeta.twitter ?? {})).toEqual(
        Object.keys(enMeta.twitter ?? {}),
      );
    });
  });
});
