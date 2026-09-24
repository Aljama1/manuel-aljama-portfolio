import type { ReactElement } from "react";
import type { StructuredData } from "@/lib/structured-data";

export interface JsonLdProps {
  data: StructuredData;
}

/**
 * Serializa de forma segura un objeto para su inclusión en una etiqueta <script type="application/ld+json">.
 * Reemplaza '<' por el escape Unicode '\u003c' para evitar cierres prematuros de script o inyecciones HTML.
 */
export function safeJsonLdReplacer(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function JsonLd({ data }: JsonLdProps): ReactElement {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: safeJsonLdReplacer(data),
      }}
    />
  );
}
