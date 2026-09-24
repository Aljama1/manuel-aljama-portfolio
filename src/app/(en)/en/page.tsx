import { HomePage } from "@/components/home/HomePage";
import { JsonLd } from "@/components/seo/JsonLd";
import { getHomeStructuredData } from "@/lib/structured-data";

export default function EnHomePage() {
  return (
    <>
      <JsonLd data={getHomeStructuredData("en")} />
      <HomePage locale="en" />
    </>
  );
}
