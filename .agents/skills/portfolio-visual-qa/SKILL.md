---
name: portfolio-visual-qa
description: Audits portfolio pages with Playwright or Browser tools for responsive layout, dark/light themes, accessibility, navigation, console errors, network requests, storage, headers and visual regressions on Local, Preview, or Production URLs.
---

# Portfolio Visual & Technical QA Skill

Skill de auditoría exhaustiva, visual y técnica para las páginas del portfolio. Diseñada para evaluar tanto entornos locales (`http://localhost:3000`) como despliegues reales remotos (**Preview Deployments de Vercel** o **Producción**).

> [!IMPORTANT]
> **Modo SOLO AUDITORÍA (Read-Only):**
> - Esta skill **NUNCA** modifica archivos del código fuente del proyecto durante la auditoría.
> - **NO** corrige bugs automáticamente durante la fase de análisis.
> - **NO** ejecuta `git add`, `git commit`, `git push` ni `git merge`.
> - Sigue la metodología de dos fases:
>   1. **Auditoría:** `DISCOVER → CLASSIFY → PRIORITIZE`
>   2. **Remediación (fase posterior si se aprueba):** `FIX → TEST → RE-AUDIT`

---

## 1. Modos de operación

La skill contempla dos modos de trabajo según el entorno objetivo:

### Modo A — Entorno Local (`http://localhost:3000`)
- **Objetivo:** Verificación rápida durante desarrollo o pre-commit.
- **Herramientas:** Servidor local (`pnpm dev` o `pnpm start`), Playwright (`@playwright/test`), Axe (`@axe-core/playwright`), Lighthouse local.
- **Enfoque:** Validar que los cambios no introducen regresiones antes de generar commits.

### Modo B — URL Externa (Preview de Vercel / Producción)
- **Objetivo:** Validación sobre infraestructura real en la nube antes de promocionar a producción o cerrar releases.
- **Jerarquía de herramientas:**
  1. **Primera opción:** Browser Agent / Chrome DevTools MCP (si está configurado y expuesto en el entorno del agente para interacción y exploración asistida).
  2. **Segunda opción (automatizada y reproducible):** Playwright instalado en el repositorio, ejecutado mediante scripts Node.js efímeros o la suite de tests (`PLAYWRIGHT_BASE_URL=$TARGET_URL`).
  3. **Tercera opción:** CLI de Lighthouse para métricas de rendimiento en red real.
- **Enfoque:** Inspección completa de red real (proxy de analytics de Vercel, CDN, headers HTTP reales, SSL, ausencia de errores CSP en hosting real).

---

## 2. Alcance y rutas obligatorias

Dada una URL base objetivo (`$TARGET_URL`):

```text
$TARGET_URL = https://... o http://localhost:3000
```

Se deben auditar como mínimo las siguientes rutas:

| Tipo | Rutas | Qué comprobar |
| :--- | :--- | :--- |
| **Páginas HTML principales** | `/`<br>`/en/`<br>`/projects/trace/`<br>`/en/projects/trace/` | Visual, responsive, temas, accesibilidad, navegación, drawer móvil, vídeo demo |
| **Páginas de privacidad** | `/privacy/`<br>`/en/privacy/` | Renderizado, enlaces desde footer, `noindex` en meta tags, contenido bilingüe |
| **Manejo de errores** | `/ruta-404-test`<br>`/en/route-404-test` | Página 404 personalizada, botón de retorno a Home |
| **Recursos técnicos y SEO** | `/robots.txt`<br>`/sitemap.xml`<br>`/icon.svg`<br>`/favicon.ico` | Código HTTP 200, Content-Type adecuado, rutas canónicas correctas |

---

## 3. Dimensiones de la auditoría técnica

No des por buena una página solo porque devuelva HTTP 200. Inspecciona activamente las 6 dimensiones críticas:

### A. Visual y Responsividad
- **Matriz mínima de viewports:**
  - **Móvil:** `390 × 844` (iPhone 12/13/14) — Menú hamburguesa, drawer modal, padding lateral, tarjetas a 1 columna.
  - **Tablet vertical:** `768 × 1024` (iPad) — Colapso de grid intermedio, diagramas de arquitectura legibles.
  - **Tablet apaisada / Laptop:** `1024 × 768` — Transición entre menú móvil y navegación de escritorio.
  - **Escritorio:** `1440 × 900` — Ancho máximo (`max-w-6xl` / `1280px`), alineaciones y márgenes editoriales.
- **Overflow horizontal:** Comprobar estrictamente `document.documentElement.scrollWidth <= window.innerWidth` en todos los anchos.
- **Temas:** Alternancia fluida entre modo oscuro (`dark`, por defecto) y claro (`light`).
- **Estados interactivos:** Capturar el menú móvil en estado abierto.

### B. Consola y Runtime
- Monitorear eventos `console` y `pageerror`:
  - `console.error` = 0.
  - Excepciones no controladas = 0.
  - Violaciones de Content Security Policy (CSP) = 0.
  - Errores de hidratación React (`Text content does not match...`) = 0.

### C. Red y Recursos (Network)
- Monitorear todas las solicitudes salientes:
  - Sin respuestas HTTP 4xx ni 5xx inesperadas.
  - Identificar categorías de carga: Scripts (`_next/static/*`), Fuentes (`fonts.gstatic.com`), Imágenes (`webp`/`svg`), Vídeo (`mp4`), Analítica (`_vercel/insights/*`).
  - En **Preview de Vercel**, verificar que `/_vercel/insights/script.js` y las peticiones a `/_vercel/insights/view` se completan con éxito (HTTP 200/204), confirmando que la infraestructura de analytics está operativa.
  - Verificar que no se cargan scripts externos de rastreo no autorizados.

### D. Almacenamiento (Storage)
- **Cookies:** Inspeccionar `context.cookies()`. En el portfolio de Manuel Aljama debe ser **estrictamente 0** (solución cookie-less).
- **LocalStorage:** Comprobar que únicamente se utiliza la clave técnica `portfolio-theme` (`light` o `dark`).
- **SessionStorage:** Comprobar que permanece completamente vacío.

### E. Cabeceras HTTP de Seguridad (Headers)
Inspeccionar las cabeceras de respuesta HTTP del servidor:
- `Content-Security-Policy`: Debe incluir directivas restrictivas (`default-src 'self'`, `connect-src 'self'`, etc.).
- `X-Frame-Options`: `DENY`.
- `X-Content-Type-Options`: `nosniff`.
- `Referrer-Policy`: `strict-origin-when-cross-origin`.
- `Permissions-Policy`: `camera=(), microphone=(), geolocation=()`.
- `Strict-Transport-Security` (HSTS):
  > [!NOTE]
  > La ausencia de HSTS en URLs temporales de Preview de Vercel (`*.vercel.app`) es esperada y **no debe clasificarse como error**, ya que HSTS se activa para el dominio canónico de producción HTTPS definitivo.

### F. Accesibilidad y SEO
- Ejecutar análisis automatizado con `@axe-core/playwright` (WCAG 2.1 AA) en modos oscuro y claro.
- Comprobar etiquetas `<meta name="robots">`, `<link rel="canonical">`, `<title>`, `<meta name="description">` y JSON-LD estructurado.

---

## 4. Seguridad de las herramientas de navegador

Al auditar despliegues externos:
1. **Navegador aislado:** Utilizar siempre perfiles de navegación efímeros/aislados (`incognito` o nuevo `browserContext`).
2. **Sin sesiones personales:** No reutilizar perfiles de usuario locales con credenciales o historial personal.
3. **Sin credenciales:** No introducir contraseñas reales ni datos sensibles en formularios.
4. **Restricción de dominio:** El agente no debe navegar fuera del dominio objetivo y sus dependencias estrictas de assets.

---

## 5. Captura y gestión de evidencias

1. **Ubicación de capturas:** Guardar en `output/playwright/audit/<timestamp_o_slug>/`. (El directorio `output/` está ignorado en `.gitignore` para no contaminar el árbol de Git).
2. **Matriz de capturas mínimas:**
   - `home_1440x900_dark.png`
   - `home_1440x900_light.png`
   - `home_390x844_dark.png`
   - `home_390x844_drawer.png` (con el menú abierto)
   - `trace_1440x900_dark.png`
   - `trace_390x844_dark.png`
3. **Reglas de veracidad:**
   - **NUNCA** generes capturas simuladas o falsas.
   - Las evidencias deben reflejar exactamente lo renderizado por el motor Chromium.

---

## 6. Lighthouse: Local vs Preview

| Aspecto | Lighthouse Local (`pnpm start`) | Lighthouse Preview (Vercel) |
| :--- | :--- | :--- |
| **Comando** | `npx lighthouse http://localhost:3000/...` | `npx lighthouse https://<preview-url>/...` |
| **Red** | Loopback virtual sin latencia | Red CDN real con latencia de conexión y compresión gzip/brotli |
| **Comportamiento** | Sirve para detectar problemas de bundle o cálculo JS | Valida Core Web Vitals en condiciones reales de distribución |

Reportar siempre las 4 categorías principales y las 3 métricas Core Web Vitals:
- **Performance**, **Accessibility**, **Best Practices**, **SEO**.
- **LCP** (Largest Contentful Paint), **TBT** (Total Blocking Time), **CLS** (Cumulative Layout Shift).

---

## 7. Script automatizado de auditoría (Runner reproducible)

Para ejecutar una auditoría completa contra cualquier URL objetivo (Local o Preview) sin modificar el repositorio, se utiliza un script Node.js que aprovecha Playwright instalado:

```javascript
// scripts/audit-runner.mjs (ejecutable mediante: node scripts/audit-runner.mjs <TARGET_URL>)
import { chromium } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import fs from "fs";
import path from "path";

const TARGET_URL = (process.env.TARGET_URL || process.argv[2] || "http://localhost:3000").replace(/\/$/, "");
const OUTPUT_DIR = path.resolve("output/playwright/audit", new Date().toISOString().replace(/[:.]/g, "-"));
fs.mkdirSync(OUTPUT_DIR, { recursive: true });

const ROUTES = [
  "/",
  "/en/",
  "/projects/trace/",
  "/en/projects/trace/",
  "/privacy/",
  "/en/privacy/",
  "/robots.txt",
  "/sitemap.xml",
];

const VIEWPORTS = [
  { name: "mobile", width: 390, height: 844 },
  { name: "desktop", width: 1440, height: 900 },
];

async function audit() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const summary = { targetUrl: TARGET_URL, timestamp: new Date().toISOString(), routes: [] };

  for (const route of ROUTES) {
    const isAsset = route.endsWith(".txt") || route.endsWith(".xml");
    const fullUrl = `${TARGET_URL}${route}`;
    const page = await context.newPage();

    const consoleMessages = [];
    const networkErrors = [];
    const analyticsRequests = [];

    page.on("console", (msg) => {
      if (msg.type() === "error") consoleMessages.push(msg.text());
    });
    page.on("requestfailed", (req) => {
      networkErrors.push({ url: req.url(), failure: req.failure()?.errorText });
    });
    page.on("request", (req) => {
      if (req.url().includes("_vercel/insights")) {
        analyticsRequests.push({ url: req.url(), method: req.method() });
      }
    });

    const response = await page.goto(fullUrl, { waitUntil: "networkidle" });
    const status = response?.status() || 0;
    const headers = response?.headers() || {};

    if (isAsset) {
      summary.routes.push({ route, status, headers, contentType: headers["content-type"] });
      await page.close();
      continue;
    }

    // Inspección de Storage
    const cookies = await context.cookies();
    const storage = await page.evaluate(() => ({
      localStorage: { ...localStorage },
      sessionStorage: { ...sessionStorage },
    }));

    // Viewport desktop y screenshot
    await page.setViewportSize(VIEWPORTS[1]);
    const slug = route.replace(/\//g, "_") || "_home";
    await page.screenshot({ path: path.join(OUTPUT_DIR, `${slug}_1440x900_dark.png`), fullPage: true });

    // Overflow horizontal en desktop
    const overflowDesktop = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);

    // Viewport mobile y screenshot
    await page.setViewportSize(VIEWPORTS[0]);
    await page.screenshot({ path: path.join(OUTPUT_DIR, `${slug}_390x844_dark.png`), fullPage: true });
    const overflowMobile = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);

    // Menú móvil si es la home
    if (route === "/" || route === "/en/") {
      const menuBtn = page.getByRole("button", { name: /abrir menú|open menu/i });
      if (await menuBtn.isVisible()) {
        await menuBtn.click();
        await page.waitForTimeout(300);
        await page.screenshot({ path: path.join(OUTPUT_DIR, `${slug}_390x844_drawer.png`) });
        const closeBtn = page.getByRole("button", { name: /cerrar menú|close menu/i });
        if (await closeBtn.isVisible()) await closeBtn.click();
      }
    }

    // Axe A11y
    const axeResults = await new AxeBuilder({ page }).analyze();

    summary.routes.push({
      route,
      status,
      headers: {
        csp: headers["content-security-policy"] ? "Presente" : "Ausente",
        xfo: headers["x-frame-options"],
        xcto: headers["x-content-type-options"],
        referrer: headers["referrer-policy"],
        permissions: headers["permissions-policy"],
      },
      overflow: { desktop: overflowDesktop, mobile: overflowMobile },
      cookiesCount: cookies.length,
      storage,
      consoleErrors: consoleMessages,
      networkErrors,
      analyticsRequests,
      a11yViolations: axeResults.violations.map((v) => ({ id: v.id, impact: v.impact, description: v.description })),
    });

    await page.close();
  }

  await browser.close();
  fs.writeFileSync(path.join(OUTPUT_DIR, "audit-summary.json"), JSON.stringify(summary, null, 2));
  console.log(`Auditoría guardada en: ${OUTPUT_DIR}`);
}

audit();
```

---

## 8. Clasificación de severidad de incidencias

Toda incidencia detectada debe clasificarse objetivamente:

| Severidad | Criterio | Ejemplos |
| :--- | :--- | :--- |
| **`CRITICAL`** | Impide el acceso o uso básico del sitio; fallo fatal en servidor o cliente. | Pantalla en blanco (crash 500), drawer bloqueado, fallo de enrutamiento principal. |
| **`HIGH`** | Degrada severamente la UX o incumple requisitos esenciales. | Scroll horizontal en móvil, textos o botones tapados, violación WCAG AA de contraste, fallo de carga de assets clave (vídeo demo, fuentes). |
| **`MEDIUM`** | Defecto visual o funcional evidente pero no bloqueante. | Inconsistencia de espaciado en tablet, micro-salto visual en cambio de tema, advertencias menores en consola. |
| **`LOW`** | Detalle estético menor o sugerencia de pulido. | Sugerencia de padding en resoluciones atípicas, ajuste tipográfico sutil. |
| **`INFO`** | Observación técnica relevante sin impacto negativo. | Identificación de peticiones agregadas de Vercel Analytics, headers de CDN de Vercel. |

---

## 9. Plantilla estándar del informe de auditoría

Al concluir, el agente debe estructurar los hallazgos según este formato:

```markdown
# Informe de Auditoría Visual y Técnica — Portfolio

**Target URL:** [URL auditada]
**Fecha:** YYYY-MM-DD HH:MM
**Entorno:** [Local / Preview Vercel / Producción]
**Herramienta principal:** [Browser Agent MCP / Playwright Headless]
**Resumen de Incidencias:** [X] CRITICAL | [X] HIGH | [X] MEDIUM | [X] LOW | [X] INFO

---

## 1. Verificación de Rutas y Navegación
- Resumen de estados HTTP (200, 404, etc.)
- Comprobación de idiomas ES y EN

## 2. Auditoría Visual y Responsive
- Resultados por viewport (390x844, 768x1024, 1024x768, 1440x900)
- Estado de desbordamiento horizontal
- Funcionamiento del drawer móvil y temas claro/oscuro

## 3. Consola y Runtime
- Excepciones o errores de consola detectados (o ausencia de ellos)
- Estado de hidratación de React

## 4. Red, Assets y Analítica
- Análisis de solicitudes de scripts, fuentes, imágenes y vídeo
- Comprobación de endpoints de analítica (`_vercel/insights`)
- Ausencia de 404s en recursos estáticos

## 5. Almacenamiento y Privacidad
- Recuento de cookies (debe ser 0)
- Inspección de `localStorage` y `sessionStorage`

## 6. Cabeceras HTTP de Seguridad
- Evaluación de CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy

## 7. Performance (Lighthouse)
- Puntuaciones: Performance | Accessibility | Best Practices | SEO
- Métricas: LCP | TBT | CLS

## 8. Relación de Incidencias
### [SEVERIDAD] Título de la incidencia
- **Ruta / Viewport:**
- **Descripción:**
- **Evidencia:**
- **Acción recomendada:**

## 9. Próximos Pasos
- Priorización técnica antes de promoción o release.
```
