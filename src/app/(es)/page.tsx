import { Container } from "@/components/ui/Container";
import { homeContent } from "@/content";

export default function HomePage() {
  const { hero } = homeContent.es;

  return (
    <Container className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center py-20 text-center">
      <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        {hero.name}
      </h1>
      <p className="mt-4 max-w-md text-foreground-muted">{hero.headline}</p>
    </Container>
  );
}
