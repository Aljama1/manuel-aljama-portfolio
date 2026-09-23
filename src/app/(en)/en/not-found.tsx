import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { uiContent } from "@/content";

export const metadata: Metadata = {
  title: "404 — Page Not Found | Manuel Aljama",
};

export default function EnNotFound() {
  const t = uiContent.en.notFound;

  return (
    <Container className="flex min-h-[calc(100vh-16rem)] flex-col items-center justify-center py-24 text-center">
      <span className="font-mono text-xs font-semibold tracking-wider text-primary uppercase">
        {t.badge}
      </span>
      <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {t.title}
      </h1>
      <p className="mt-4 max-w-md text-sm text-foreground-muted">
        {t.description}
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button href="/en" variant="primary" size="md">
          {t.backHome}
        </Button>
      </div>
    </Container>
  );
}
