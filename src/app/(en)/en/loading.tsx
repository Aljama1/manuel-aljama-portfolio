import { Container } from "@/components/ui/Container";
import { uiContent } from "@/content";

export default function EnLoading() {
  return (
    <Container className="flex min-h-[calc(100vh-16rem)] items-center justify-center py-24">
      <div
        className="h-6 w-6 animate-spin rounded-full border-2 border-border border-t-primary"
        role="status"
        aria-label={uiContent.en.loading.ariaLabel}
      />
    </Container>
  );
}
