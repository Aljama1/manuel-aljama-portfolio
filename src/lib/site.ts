/**
 * Constantes y utilidades para la URL base del sitio web del portfolio.
 */
export const SITE_URL =
  process.env["NEXT_PUBLIC_BASE_URL"]?.replace(/\/$/, "") ??
  "https://manuelaljama.com";
