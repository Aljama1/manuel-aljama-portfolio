import { HomePage } from "@/components/home/HomePage";
import { JsonLd } from "@/components/seo/JsonLd";
import { getHomeStructuredData } from "@/lib/structured-data";

export default function EsHomePage() {
  return (
    <>
      <JsonLd data={getHomeStructuredData("es")} />
      <HomePage locale="es" />
    </>
  );
}
