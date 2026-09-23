import type { Metadata } from "next";
import { RootShell } from "@/components/layout/RootShell";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { uiContent } from "@/content";

export const metadata: Metadata = {
  title: "404 — Página no encontrada | Manuel Aljama",
};

export default function NotFound() {
  const es = uiContent.es.notFound;
  const en = uiContent.en.notFound;

  return (
    <RootShell lang="es">
      <Container className="flex min-h-[calc(100vh-16rem)] flex-col items-center justify-center py-24 text-center">
        <span className="font-mono text-xs font-semibold tracking-wider text-primary uppercase">
          {es.badge}
        </span>
        <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {es.title} / {en.title}
        </h1>
        <p className="mt-4 max-w-md text-sm text-foreground-muted">
          {es.description}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/" variant="primary" size="md">
            {es.backHome}
          </Button>
          <Button href="/en" variant="secondary" size="md">
            {en.backHome}
          </Button>
        </div>
      </Container>
    </RootShell>
  );
}
