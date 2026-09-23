import type { Metadata } from "next";
import { RootShell } from "@/components/layout/RootShell";
import "../../globals.css";

export const metadata: Metadata = {
  title: "Manuel Aljama — Software Developer",
  description: "Portfolio of Manuel Aljama. I turn ideas into real software.",
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="en">{children}</RootShell>;
}
