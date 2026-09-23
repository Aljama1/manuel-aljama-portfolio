import { esUi, type UiContent } from "./es/ui";
import { enUi } from "./en/ui";
import { esHome, type HomeContent } from "./es/home";
import { enHome } from "./en/home";

export const uiContent: Record<"es" | "en", UiContent> = {
  es: esUi,
  en: enUi,
};

export const homeContent: Record<"es" | "en", HomeContent> = {
  es: esHome,
  en: enHome,
};

export type { UiContent, HomeContent };
