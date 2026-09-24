import type { Metadata } from "next";
import type { Locale } from "@/content";
import { profile, traceContent } from "@/content";
import { SITE_URL } from "./site";

/**
 * Genera la metadata completa (incluyendo Open Graph y Twitter Cards) para la Home.
 */
export function getHomeMetadata(locale: Locale): Metadata {
  const isEs = locale === "es";
  const title = "Manuel Aljama — Software Developer";
  const description = isEs
    ? "Portfolio de Manuel Aljama. Convierto ideas en software real."
    : "Portfolio of Manuel Aljama. I turn ideas into real software.";
  const path = isEs ? "/" : "/en";

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: {
      canonical: path,
      languages: {
        es: "/",
        en: "/en",
      },
    },
    openGraph: {
      type: "website",
      siteName: profile.name,
      title,
      description,
      url: path,
      locale: isEs ? "es_ES" : "en_US",
      alternateLocale: [isEs ? "en_US" : "es_ES"],
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

/**
 * Genera la metadata completa (incluyendo Open Graph y Twitter Cards) para el Case Study de Trace.
 * Utiliza la captura real 16:9 HD del vídeo demo existente en public/media/projects/trace/demo-poster.webp.
 */
export function getTraceMetadata(locale: Locale): Metadata {
  const isEs = locale === "es";
  const content = traceContent[locale];
  const path = isEs ? "/projects/trace" : "/en/projects/trace";
  const imageAlt = isEs
    ? "Trace — Demo del producto y comandería en tiempo real"
    : "Trace — Product demo and real-time ordering";

  return {
    metadataBase: new URL(SITE_URL),
    title: content.meta.title,
    description: content.meta.description,
    alternates: {
      canonical: path,
      languages: {
        es: "/projects/trace",
        en: "/en/projects/trace",
      },
    },
    openGraph: {
      type: "article",
      siteName: profile.name,
      title: content.meta.title,
      description: content.meta.description,
      url: path,
      locale: isEs ? "es_ES" : "en_US",
      alternateLocale: [isEs ? "en_US" : "es_ES"],
      images: [
        {
          url: "/media/projects/trace/demo-poster.webp",
          width: 1280,
          height: 720,
          alt: imageAlt,
          type: "image/webp",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: content.meta.title,
      description: content.meta.description,
      images: ["/media/projects/trace/demo-poster.webp"],
    },
  };
}
