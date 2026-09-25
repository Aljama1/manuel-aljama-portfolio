import type { ReactNode } from "react";
import { spaceGrotesk, inter, jetbrainsMono } from "@/app/fonts";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/next";
import { uiContent } from "@/content";

interface RootShellProps {
  lang: "es" | "en";
  themeScript?: ReactNode;
  children: ReactNode;
}

export function RootShell({ lang, themeScript, children }: RootShellProps) {
  const content = uiContent[lang];

  return (
    <html
      lang={lang}
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
        {themeScript}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-sm focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-background focus:outline-none"
        >
          {content.skipToContent}
        </a>
        <ThemeProvider>
          <Header lang={lang} />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer lang={lang} />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
