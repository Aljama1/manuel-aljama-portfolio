import type { Metadata } from "next";
import { CaseStudyPage } from "@/components/case-study/CaseStudyPage";
import { traceContent } from "@/content";

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
  return <CaseStudyPage content={traceContent.es} locale="es" />;
}
