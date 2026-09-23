import type { Metadata } from "next";
import { RootShell } from "@/components/layout/RootShell";
import "../globals.css";

export const metadata: Metadata = {
  title: "Manuel Aljama — Software Developer",
  description: "Portfolio de Manuel Aljama. Convierto ideas en software real.",
};

export default function EsLayout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="es">{children}</RootShell>;
}
