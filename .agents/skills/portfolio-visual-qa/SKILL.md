---
name: portfolio-visual-qa
description: Audits portfolio pages with Playwright for responsive layout, dark/light themes, accessibility, navigation, console errors and visual regressions without modifying project files. Use when visually or functionally reviewing a portfolio page before a PR or release.
---

# Portfolio Visual & Functional QA Skill

Skill de auditoría exhaustiva, visual y funcional para las páginas del portfolio. Utiliza la infraestructura de Playwright y Axe instalada en el repositorio para auditar diseño responsivo, temas claro/oscuro, accesibilidad, navegación y posibles regresiones visuales.

> [!IMPORTANT]
> **Modo SOLO AUDITORÍA (Read-Only):**
> - Esta skill **NUNCA** modifica archivos del código fuente del proyecto.
> - **NO** corrige bugs automáticamente.
> - **NO** ejecuta `git add`, `git commit`, `git push` ni `git merge`.
> - Reutiliza la configuración existente de Playwright y el servidor local del proyecto sin levantar servidores duplicados ni añadir dependencias.

---

## 1. Inspección previa obligatoria

Antes de lanzar cualquier prueba o comando de navegador, ejecuta una fase de inspección pasiva:

1. **Revisar `package.json`**:
   - Verificar scripts (`pnpm dev`, `pnpm test:e2e`, etc.).
   - Confirmar versiones instaladas de Playwright (`@playwright/test`) y Axe (`@axe-core/playwright`).
2. **Revisar `playwright.config.*`**:
   - Comprobar la URL base (`baseURL`, por defecto `http://localhost:3000`).
   - Comprobar la configuración de `webServer` (`command: "pnpm dev"`, `reuseExistingServer`). Si el servidor ya está activo, no lances otro proceso.
3. **Descubrimiento dinámico de rutas**:
   - No asumas rutas fijas. Inspecciona `src/app/` y los tests E2E existentes (`tests/e2e/`, `tests/a11y/`) para determinar las rutas activas a auditar.
   - Rutas típicas del portfolio:
     - `/` (Home en español)
     - `/en/` (Home en inglés)
     - `/projects/trace/` (Case study Trace en español)
     - `/en/projects/trace/` (Case study Trace en inglés)
     - `/ruta-inexistente` y `/en/non-existent-route` (Manejo 404)

---

## 2. Matriz de ejecución

Toda auditoría completa debe recorrer como mínimo la siguiente matriz de viewports, temas e idiomas:

### Viewports mínimos
| Viewport | Dispositivo de referencia | Aspectos críticos a vigilar |
| :--- | :--- | :--- |
| `390x844` | Móvil vertical (iPhone 12/13/14) | Menú hamburguesa, drawer, padding lateral, tarjetas a 1 col, sin scroll horizontal |
| `768x1024` | Tablet vertical (iPad) | Colapso de grid (6–8 cols), ancho de tarjetas, legibilidad de diagramas |
| `1024x768` | Tablet apaisada / Laptop compacta | Transición de menú móvil a navegación escritorio, densidad de información |
| `1440x900` | Escritorio estándar | Max-width del contenedor (1280px), alineaciones, espaciado editorial amplio |

### Temas
- **Modo oscuro (`dark`)**: Estado por defecto del portfolio (`html:not(.light)`).
- **Modo claro (`light`)**: Activado mediante el botón de cambio de tema (`ThemeToggle`).

### Idiomas / Locales
- **Español (`/`)**: Atributo `lang="es"`.
- **Inglés (`/en/`)**: Atributo `lang="en"`.

---

## 3. Lista de comprobación de la auditoría

No des por buena una página solo porque no lance errores HTTP 500. Busca activamente problemas que los tests habituales no detectan:

### A. Layout y Responsividad
- [ ] **Overflow horizontal**: Ningún elemento debe forzar scroll horizontal (`document.documentElement.scrollWidth <= window.innerWidth`).
- [ ] **Elementos cortados**: Textos, badges, tarjetas o diagramas que se salgan del viewport o de su contenedor padre (`overflow: hidden` accidental).
- [ ] **Tarjetas estrechas o aplastadas**: Comprobar que en tablet o pantallas medianas el grid no comprima el contenido de forma ilegible.
- [ ] **Espaciado y márgenes**: Separación coherente entre bloques y secciones en todos los tamaños.

### B. Navegación e Interacción
- [ ] **Navegación escritorio**: Enlaces de cabecera visibles, anclas a secciones (`#projects`, `#about`, etc.) funcionando.
- [ ] **Navegación móvil**: El menú hamburguesa abre el drawer accesible (`dialog`) y **se cierra automáticamente** al pulsar un ancla de sección.
- [ ] **Skip link accesible**: Enlace `"Saltar al contenido principal"` (`#main-content`) presente y visible al hacer foco.
- [ ] **Botones y enlaces**: Todos los enlaces tienen `href` válido (no vacíos ni `href="#"`) y los externos cuentan con atributos seguros.
- [ ] **Selector de idioma**: Alternar entre ES y EN preserva la ruta equivalente y actualiza el atributo `lang` del `html`.
- [ ] **Focus visible**: Indicadores de foco claros (`ring`/`outline`) al navegar con tabulador por elementos interactivos.

### C. Coherencia Visual y Temas
- [ ] **Transición Dark / Light**: Sin parpadeos extraños ni pérdida de contraste en textos, bordes o fondos al cambiar de tema.
- [ ] **Diferencias ES vs EN**: Longitudes de texto que rompan el diseño en inglés o español, textos sin traducir o cadenas residuales.
- [ ] **Botones o controles flotantes**: Elementos fijos o sticky que no tapen contenido crítico ni desaparezcan detrás de otros bloques.

### D. Integridad Técnica y Recursos
- [ ] **Errores de consola**: Sin `console.error` ni excepciones JavaScript no controladas (`pageerror`).
- [ ] **Errores de red**: Sin respuestas HTTP 4xx ni 5xx en fuentes, scripts, JSON o páginas.
- [ ] **Imágenes y recursos**: Todas las imágenes (`<img>`) cargadas correctamente (`naturalWidth > 0`). Iconos Lucide renderizados sin SVGs vacíos.
- [ ] **Accesibilidad Axe (WCAG 2.1 AA)**: Ejecutar `@axe-core/playwright` en modo oscuro y claro en cada ruta para detectar violaciones de contraste, etiquetas o roles ARIA.

---

## 4. Captura y gestión de evidencias

1. **Ubicación de artefactos**:
   - Guarda todas las capturas y reportes temporales en `output/playwright/audit/<timestamp_o_slug>/`.
   - Si no existe `output/playwright/`, puedes crearlo para almacenar evidencias. Este directorio queda fuera del código fuente (`src/`).
2. **Nomenclatura clara de screenshots**:
   - Formato: `<ruta-slug>_<ancho>x<alto>_<tema>.png`
   - Ejemplo: `home_390x844_dark.png`, `trace_1440x900_light.png`
3. **Análisis visual de capturas**:
   - Examina visualmente las capturas con herramientas de inspección (por ejemplo, `view_file`) para confirmar que el diseño cumple los estándares de calidad.
4. **Reglas de veracidad**:
   - **NUNCA** generes capturas simuladas o falsas.
   - **NO** interpretes diagramas conceptuales o esquemas como capturas de producto reales.
   - **NO** crees snapshots de regresión permanentes (`toHaveScreenshot()`) en esta fase. Las capturas son estrictamente evidencia de auditoría hasta que el usuario apruebe una versión visual definitiva.

---

## 5. Clasificación de severidad de incidencias

Clasifica cada problema detectado en uno de estos cuatro niveles:

| Nivel | Definición | Ejemplos |
| :--- | :--- | :--- |
| **`BLOCKER`** | Impide el uso del portfolio o bloquea completamente una funcionalidad esencial. | Página en blanco (crash 500), drawer móvil bloqueado sin poder cerrarse, navegación rota, fallo fatal que impide cargar el contenido. |
| **`HIGH`** | Degrada severamente la experiencia de usuario o incumple accesibilidad esencial. | Scroll horizontal en móvil, textos o botones principales cortados o solapados, violación WCAG AA de contraste en texto principal, enlaces rotos, imágenes no cargadas. |
| **`MEDIUM`** | Defecto visual o funcional evidente pero secundario. | Espaciado desalineado entre tarjetas, diferencias visuales bruscas entre ES y EN, foco de teclado poco contrastado en elemento secundario, micro-salto en cambio de tema. |
| **`LOW`** | Detalle de pulido menor o sugerencia estética. | Sugerencia de ajuste tipográfico fino en un viewport específico, optimización menor de padding o margen secundario. |

---

## 6. Procedimiento de ejecución con Playwright

Para ejecutar la auditoría de forma reproducible y sin alterar el repositorio, crea y ejecuta un runner efímero en Node.js que aproveche `@playwright/test` y `@axe-core/playwright` ya instalados:

```javascript
// Runner de auditoría efímero (ejecutar con node)
import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";
import fs from "fs";
import path from "path";

const VIEWPORTS = [
  { name: "mobile", width: 390, height: 844 },
  { name: "tablet-portrait", width: 768, height: 1024 },
  { name: "tablet-landscape", width: 1024, height: 768 },
  { name: "desktop", width: 1440, height: 900 },
];

const ROUTES = ["/", "/en/", "/projects/trace/", "/en/projects/trace/"];
const OUTPUT_DIR = path.resolve("output/playwright/audit");
fs.mkdirSync(OUTPUT_DIR, { recursive: true });

async function runAudit() {
  const browser = await chromium.launch({ headless: true });
  const results = [];

  for (const route of ROUTES) {
    for (const vp of VIEWPORTS) {
      const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
      const consoleErrors = [];
      page.on("console", (msg) => { if (msg.type() === "error") consoleErrors.push(msg.text()); });
      page.on("pageerror", (err) => consoleErrors.push(err.message));

      await page.goto(`http://localhost:3000${route}`, { waitUntil: "networkidle" });

      // 1. Detección de overflow horizontal
      const hasHorizontalScroll = await page.evaluate(() => {
        return document.documentElement.scrollWidth > window.innerWidth ||
               document.body.scrollWidth > window.innerWidth;
      });

      // 2. Screenshot Dark
      const slug = route.replace(/\//g, "_") || "_home";
      await page.screenshot({ path: path.join(OUTPUT_DIR, `${slug}_${vp.width}x${vp.height}_dark.png`), fullPage: true });

      // 3. Axe A11y Dark
      const a11yDark = await new AxeBuilder({ page }).analyze();

      // 4. Cambiar a Light y capturar
      const themeBtn = page.getByRole("button", { name: /cambiar a modo claro|switch to light mode/i }).first();
      let a11yLight = null;
      if (await themeBtn.isVisible()) {
        await themeBtn.click();
        await page.screenshot({ path: path.join(OUTPUT_DIR, `${slug}_${vp.width}x${vp.height}_light.png`), fullPage: true });
        a11yLight = await new AxeBuilder({ page }).analyze();
      }

      results.push({ route, viewport: vp, hasHorizontalScroll, consoleErrors, a11yDarkViolations: a11yDark.violations, a11yLightViolations: a11yLight?.violations || [] });
      await page.close();
    }
  }

  await browser.close();
  return results;
}
```

> [!NOTE]
> También puedes usar comandos directos del CLI de Playwright (`playwright-cli`) a través de la skill instalada de Playwright para inspeccionar estados interactivos específicos, como abrir el menú de navegación móvil o comprobar el foco de un botón.

---

## 7. Estructura obligatoria del informe de auditoría

El resultado de cada auditoría debe presentarse al usuario siguiendo esta plantilla exacta:

```markdown
# Informe de Auditoría Visual y Funcional — Portfolio

**Fecha:** YYYY-MM-DD
**URL Base:** http://localhost:3000
**Entorno:** Local (Playwright + Chromium)
**Total Incidencias:** [X] Blocker | [X] High | [X] Medium | [X] Low

---

## 1. Qué se comprobó
- **Rutas auditadas:** [Listado de rutas analizadas]
- **Viewports evaluados:** 390x844, 768x1024, 1024x768, 1440x900
- **Temas:** Modo oscuro y modo claro
- **Verificaciones funcionales y visuales:**
  - Overflow horizontal y límites de viewport
  - Jerarquía de encabezados semánticos
  - Menú de navegación (escritorio y drawer móvil)
  - Botones, enlaces y accesibilidad por teclado (focus ring)
  - Selector y consistencia de idiomas (ES / EN)
  - Errores de consola y recursos de red
  - Auditoría de accesibilidad WCAG 2.1 AA con Axe

---

## 2. Qué pasó satisfactoriamente (Checks superados)
- [Listado detallado de elementos, componentes y vistas que superaron las pruebas sin anomalías]

---

## 3. Hallazgos y qué falló
### [BLOCKER] Título de la incidencia crítica
- **Ruta / Viewport / Tema:** `/ruta` | `390x844` | `Dark`
- **Descripción:** Qué falla exactamente y cómo afecta al usuario.
- **Evidencia:** Captura `output/playwright/audit/...`, traza de consola o selector.
- **Recomendación:** Acción técnica sugerida para subsanarlo.

### [HIGH] Título de la incidencia alta
- **Ruta / Viewport / Tema:** ...
- **Descripción:** ...
- **Evidencia:** ...
- **Recomendación:** ...

### [MEDIUM / LOW] Incidencias menores
- ...

---

## 4. Evidencias visuales
- `output/playwright/audit/home_390x844_dark.png`
- `output/playwright/audit/trace_1440x900_light.png`
- [Comentarios del análisis visual de las capturas]

---

## 5. Recomendaciones finales para el equipo
- [Resumen priorizado de tareas para corregir las incidencias antes de release o PR]
```

---

## 8. Seguridad y reglas de no intervención

1. **Servidor local como única fuente de confianza**: No realices peticiones contra entornos externos no autorizados ni envíes datos del portfolio a servicios de terceros.
2. **Cero mutación de código**: Si encuentras un bug (incluso si es un cambio de 1 línea de CSS o HTML), **no lo corrijas**. Documéntalo en el informe con severidad, evidencia y la recomendación técnica correspondiente. La decisión y aplicación de cambios corresponde al flujo de desarrollo posterior.
3. **Limpieza de temporales**: Al concluir la sesión de auditoría, conserva únicamente las capturas de evidencia requeridas en `output/playwright/audit/` y no dejes procesos en segundo plano ni archivos huérfanos en `src/`.
