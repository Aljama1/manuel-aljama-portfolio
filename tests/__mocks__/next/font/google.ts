/**
 * Mock de next/font/google para tests de Vitest.
 * next/font/google requiere el servidor de Next.js y no funciona en jsdom.
 * Este mock devuelve los valores que RootShell espera (variable CSS).
 */

const createFontMock = (variable: string) => () => ({
  className: `mock-font`,
  variable,
  style: { fontFamily: "mock" },
});

export const Space_Grotesk = createFontMock("--font-space-grotesk");
export const Inter = createFontMock("--font-inter");
export const JetBrains_Mono = createFontMock("--font-jetbrains-mono");
