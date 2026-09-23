import type { Metadata } from "next";
import Script from "next/script";
import { RootShell } from "@/components/layout/RootShell";
import "../globals.css";

export const metadata: Metadata = {
  title: "Manuel Aljama — Software Developer",
  description: "Portfolio de Manuel Aljama. Convierto ideas en software real.",
};

const antiFlashScript = `(function(){try{var t=localStorage.getItem("portfolio-theme");if(t==="light"){document.documentElement.classList.add("light");}}catch(e){}})();`;

export default function EsLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootShell
      lang="es"
      themeScript={
        <Script
          id="theme-anti-flash"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: antiFlashScript,
          }}
        />
      }
    >
      {children}
    </RootShell>
  );
}
