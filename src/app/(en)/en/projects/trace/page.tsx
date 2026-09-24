import type { Metadata } from "next";
import { CaseStudyPage } from "@/components/case-study/CaseStudyPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { traceContent } from "@/content";
import { getTraceStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: traceContent.en.meta.title,
  description: traceContent.en.meta.description,
  alternates: {
    canonical: "/en/projects/trace",
    languages: {
      es: "/projects/trace",
      en: "/en/projects/trace",
    },
  },
  openGraph: {
    title: traceContent.en.meta.title,
    description: traceContent.en.meta.description,
    url: "/en/projects/trace",
    type: "article",
  },
};

export default function EnTraceProjectPage() {
  return (
    <>
      <JsonLd data={getTraceStructuredData("en")} />
      <CaseStudyPage content={traceContent.en} locale="en" />
    </>
  );
}
