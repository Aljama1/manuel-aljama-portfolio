# Prompt maestro — Inicio de construcción del portfolio

Eres el agente principal de desarrollo del portfolio de Manuel Aljama.

## Misión

Construye un portfolio profesional de desarrollador, bilingüe y preparado para producción a partir de la constitución y documentación del repositorio.

Este prompt no es la única fuente de verdad. Antes de editar cualquier cosa:

1. lee `AGENTS.md`;
2. lee `PROJECT_CONSTITUTION.md`;
3. inspecciona el repositorio;
4. lee los archivos relevantes de `docs/`;
5. verifica el estado real actual antes de hacer suposiciones.

## Primera respuesta / fase de planificación

No implementes nada en la primera respuesta. Primero inspecciona y produce un plan de implementación breve que cubra:

- estado inicial del repositorio;
- archivos/directorios que habrá que crear;
- principales decisiones arquitectónicas;
- estrategia de i18n;
- estrategia de contenido;
- estrategia de testing;
- estrategia de CI/CD;
- primeros hitos;
- puertas de verificación pendientes.

No escribas todo el portfolio en una única pasada gigante.

## Orden obligatorio de implementación

### Paso 1 — Bootstrap

Ejecuta este paso únicamente después de presentar el plan y comprobar que no existen bloqueos de decisión humana.

Crea el proyecto con:

- Next.js;
- React;
- TypeScript estricto;
- Tailwind;
- pnpm;
- ESLint;
- Prettier;
- Vitest;
- Playwright;
- soporte MDX;
- Lucide;
- solución de motion únicamente si realmente se necesita.

Verifica la compatibilidad de las versiones actuales antes de instalar. Fija las versiones exactas después de verificarlas.

### Paso 2 — Reglas del repositorio

Crea/actualiza:

- `AGENTS.md`;
- `CLAUDE.md`;
- `.agents/rules/` solo cuando aporte valor;
- `.cursor/rules/` solo cuando aporte valor;
- `docs/`;
- registros de decisiones.

No dupliques innecesariamente la constitución.

### Paso 3 — Sistema de diseño

Implementa los tokens acordados de color, tipografía, espaciado, radios, bordes, motion, responsive, botones, tarjetas y layout.

No inventes tokens visuales adicionales sin justificarlo.

### Paso 4 — Armazón de la aplicación

Implementa:

- cabecera/navegación;
- menú móvil;
- selector de tema;
- selector de idioma;
- layout global;
- footer;
- navegación suave mediante anchors;
- estados 404/error/loading.

### Paso 5 — Hero

Construye el Hero y la composición híbrida tipo workspace de desarrollo.

Debe ser original y contenida.

No utilices capturas falsas de IDE.

No utilices un cursor personalizado.

### Paso 6 — Contenido de Home

Implementa:

- Proyectos;
- About;
- How I Build;
- AI & Engineering;
- Skills;
- Experience/Education;
- Contact.

Utiliza el contenido aprobado como base y ajústalo únicamente por layout/claridad sin inventar afirmaciones.

### Paso 7 — Trace

Crea la ruta del case study de Trace utilizando MDX/datos de contenido.

No cierres las afirmaciones técnicas definitivas hasta completar la auditoría del repositorio y el Portfolio Polish.

### Paso 8 — Placeholder de Asisteo

Presenta Asisteo en la Home como `BUILDING / REBUILDING`.

No crees una ruta pública de case study para Asisteo en el lanzamiento inicial.

No publiques capturas de V1 como imágenes definitivas del producto.

No fabriques una demo funcional.

### Paso 9 — SEO y metadatos

Implementa:

- metadata por página;
- canonical;
- hreflang;
- sitemap;
- robots;
- Open Graph;
- datos estructurados cuando estén justificados.

No indexes case studies no publicados/borrador.

### Paso 10 — Calidad

Añade:

- Vitest;
- Playwright;
- comprobaciones axe cuando sean razonables;
- comprobaciones en navegador;
- matriz responsive;
- validación oscuro/claro;
- validación ES/EN.

### Paso 11 — CI/CD

Implementa:

- CI para Pull Requests;
- typecheck;
- lint;
- tests unitarios;
- build;
- Playwright;
- comprobaciones de accesibilidad;
- Vercel Preview;
- expectativas de protección de `main`;
- despliegue de producción desde `main`.

### Paso 12 — Auditoría final

Antes de afirmar que el proyecto está terminado, ejecuta la Definition of Done completa.

## Restricciones importantes

- Utiliza pnpm.
- No CMS.
- No base de datos.
- No backend de contacto en V1.
- No métricas falsas.
- No capturas falsas.
- No demos falsas.
- No cursor personalizado.
- No gran librería de UI salvo justificación.
- No dependencias innecesarias.
- No gran escaparate de herramientas de IA.
- No cambios de arquitectura sin aprobación.
- No afirmaciones técnicas sin respaldo.

## Veracidad del contenido

Trace es un TFG terminado que recibirá Portfolio Polish.

Asisteo es un proyecto en reconstrucción. Su V1 no es el producto final.

Si la evidencia del repositorio contradice cualquier texto preliminar, prevalece la evidencia del repositorio y debes señalar la discrepancia.

## Puntos de decisión humana

Detente y pregunta antes de:

- cambiar el stack;
- cambiar sustancialmente el sistema de diseño;
- añadir una base de datos/CMS;
- añadir una dependencia importante;
- cambiar la estructura de i18n;
- eliminar un requisito importante;
- modificar infraestructura de producción de forma arriesgada;
- realizar una operación irreversible.

## Informe obligatorio al terminar un hito importante

Al final de cada hito sustancial informa de:

```text
Completado
Archivos modificados
Tests/comprobaciones ejecutados
Estados del navegador comprobados
Limitaciones conocidas
Documentación actualizada
Siguiente tarea recomendada
```

Nunca informes de “terminado” si no has ejecutado las comprobaciones correspondientes.
