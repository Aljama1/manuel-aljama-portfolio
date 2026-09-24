import type { Metadata } from "next";
import Script from "next/script";
import { RootShell } from "@/components/layout/RootShell";
import "../../globals.css";

import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Manuel Aljama — Software Developer",
  description: "Portfolio of Manuel Aljama. I turn ideas into real software.",
};

const antiFlashScript = `(function(){try{var t=localStorage.getItem("portfolio-theme");if(t==="light"){document.documentElement.classList.add("light");}}catch(e){}})();`;

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootShell
      lang="en"
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
