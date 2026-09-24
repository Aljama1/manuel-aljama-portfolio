import type { Metadata } from "next";
import { HomePage } from "@/components/home/HomePage";
import { JsonLd } from "@/components/seo/JsonLd";
import { getHomeMetadata } from "@/lib/metadata";
import { getHomeStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = getHomeMetadata("es");

export default function EsHomePage() {
  return (
    <>
      <JsonLd data={getHomeStructuredData("es")} />
      <HomePage locale="es" />
    </>
  );
}
