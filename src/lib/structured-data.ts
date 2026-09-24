import type { Locale } from "@/content";
import { profile, projects, traceContent } from "@/content";
import { SITE_URL } from "./site";

export interface SchemaThing {
  "@type": string;
  "@id"?: string;
  [key: string]: unknown;
}

export interface SchemaGraph {
  "@context": "https://schema.org";
  "@graph": SchemaThing[];
}

export type StructuredData = SchemaGraph;

/**
 * Genera el grafo de datos estructurados Schema.org para la Home en el idioma indicado.
 * Entidades: WebSite, Person, WebPage.
 */
export function getHomeStructuredData(locale: Locale): SchemaGraph {
  const pageUrl = locale === "es" ? `${SITE_URL}/` : `${SITE_URL}/en/`;
  const homeTitle = "Manuel Aljama — Software Developer";
  const homeDescription =
    locale === "es"
      ? "Portfolio de Manuel Aljama. Convierto ideas en software real."
      : "Portfolio of Manuel Aljama. I turn ideas into real software.";

  const sameAsProfiles = [profile.githubUrl, profile.linkedInUrl].filter(
    (url): url is string => Boolean(url),
  );

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: profile.name,
        description: homeDescription,
        inLanguage: locale,
        publisher: {
          "@id": `${SITE_URL}/#person`,
        },
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: profile.name,
        url: `${SITE_URL}/`,
        sameAs: sameAsProfiles,
        ...(profile.email ? { email: profile.email } : {}),
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: homeTitle,
        description: homeDescription,
        inLanguage: locale,
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        about: {
          "@id": `${SITE_URL}/#person`,
        },
      },
    ],
  };
}

/**
 * Genera el grafo de datos estructurados Schema.org para el Case Study de Trace en el idioma indicado.
 * Entidades: WebSite, Person, WebPage, CreativeWork.
 */
export function getTraceStructuredData(locale: Locale): SchemaGraph {
  const content = traceContent[locale];
  const pagePath =
    projects.trace.caseStudyPath?.[locale] ??
    (locale === "es" ? "/projects/trace/" : "/en/projects/trace/");
  const pageUrl = `${SITE_URL}${pagePath}`;

  const sameAsProfiles = [profile.githubUrl, profile.linkedInUrl].filter(
    (url): url is string => Boolean(url),
  );

  const traceRepoUrls = [content.hero.githubUrl].filter((url): url is string =>
    Boolean(url),
  );

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: profile.name,
        inLanguage: locale,
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: profile.name,
        url: `${SITE_URL}/`,
        sameAs: sameAsProfiles,
        ...(profile.email ? { email: profile.email } : {}),
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: content.meta.title,
        description: content.meta.description,
        inLanguage: locale,
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        mainEntity: {
          "@id": `${pageUrl}#project`,
        },
      },
      {
        "@type": "CreativeWork",
        "@id": `${pageUrl}#project`,
        name: content.hero.title,
        headline: content.overview.title,
        description: content.hero.subtitle,
        inLanguage: locale,
        url: pageUrl,
        author: {
          "@id": `${SITE_URL}/#person`,
        },
        creator: {
          "@id": `${SITE_URL}/#person`,
        },
        keywords: content.hero.stack,
        sameAs: traceRepoUrls,
      },
    ],
  };
}
