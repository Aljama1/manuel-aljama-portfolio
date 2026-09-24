import type { Metadata } from "next";
import { HomePage } from "@/components/home/HomePage";
import { JsonLd } from "@/components/seo/JsonLd";
import { getHomeMetadata } from "@/lib/metadata";
import { getHomeStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = getHomeMetadata("en");

export default function EnHomePage() {
  return (
    <>
      <JsonLd data={getHomeStructuredData("en")} />
      <HomePage locale="en" />
    </>
  );
}
