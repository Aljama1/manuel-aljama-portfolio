import type { ReactNode } from "react";
import { spaceGrotesk, inter, jetbrainsMono } from "@/app/fonts";

interface RootShellProps {
  lang: "es" | "en";
  children: ReactNode;
}

export function RootShell({ lang, children }: RootShellProps) {
  return (
    <html
      lang={lang}
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
