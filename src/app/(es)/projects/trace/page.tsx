import type { Metadata } from "next";
import { CaseStudyPage } from "@/components/case-study/CaseStudyPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { getTraceMetadata } from "@/lib/metadata";
import { getTraceStructuredData } from "@/lib/structured-data";
import { traceContent } from "@/content";

export const metadata: Metadata = getTraceMetadata("es");

export default function TraceProjectPage() {
  return (
    <>
      <JsonLd data={getTraceStructuredData("es")} />
      <CaseStudyPage content={traceContent.es} locale="es" />
    </>
  );
}
