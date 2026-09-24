import type { Metadata } from "next";
import { CaseStudyPage } from "@/components/case-study/CaseStudyPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { traceContent } from "@/content";
import { getTraceStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: traceContent.es.meta.title,
  description: traceContent.es.meta.description,
  alternates: {
    canonical: "/projects/trace",
    languages: {
      en: "/en/projects/trace",
      es: "/projects/trace",
    },
  },
  openGraph: {
    title: traceContent.es.meta.title,
    description: traceContent.es.meta.description,
    url: "/projects/trace",
    type: "article",
  },
};

export default function TraceProjectPage() {
  return (
    <>
      <JsonLd data={getTraceStructuredData("es")} />
      <CaseStudyPage content={traceContent.es} locale="es" />
    </>
  );
}
