import type { Metadata } from "next";
import { CaseStudyPage } from "@/components/case-study/CaseStudyPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { getTraceMetadata } from "@/lib/metadata";
import { getTraceStructuredData } from "@/lib/structured-data";
import { traceContent } from "@/content";

export const metadata: Metadata = getTraceMetadata("en");

export default function EnTraceProjectPage() {
  return (
    <>
      <JsonLd data={getTraceStructuredData("en")} />
      <CaseStudyPage content={traceContent.en} locale="en" />
    </>
  );
}
