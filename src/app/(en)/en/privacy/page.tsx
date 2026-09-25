import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { privacyContent } from "@/content";

import { getPrivacyMetadata } from "@/lib/metadata";

export const metadata: Metadata = getPrivacyMetadata("en");

export default function PrivacyPage() {
  const content = privacyContent.en;

  return (
    <Container className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {content.title}
        </h1>
        <p className="mt-4 font-mono text-sm text-foreground-muted">
          {content.lastUpdated}
        </p>

        <div className="mt-16 space-y-12">
          {content.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground">
                {section.heading}
              </h2>
              <div className="mt-4 space-y-4 font-sans text-base leading-relaxed text-foreground-muted">
                {section.content.split("\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </Container>
  );
}
