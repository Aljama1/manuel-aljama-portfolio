# AGENTS.md — Portfolio de Manuel Aljama

## Léelo primero

Este repositorio es agnóstico respecto al agente. Antigravity es el entorno inicial de implementación, pero Claude Code, Cursor y otros agentes compatibles deben poder trabajar utilizando las mismas reglas del proyecto.

Antes de modificar código:

1. Lee este archivo.
2. Lee únicamente los archivos relevantes de `docs/`.
3. Inspecciona la estructura y la implementación actuales del repositorio.
4. Comprueba los patrones, dependencias y tests existentes.
5. Define los criterios de aceptación.
6. Para tareas no triviales, propone un plan breve antes de editar.

No rellenes requisitos que falten mediante suposiciones.

## Fuente de verdad

La fuente de verdad es, por orden:

1. requisitos explícitos de la tarea actual;
2. `PROJECT_CONSTITUTION.md`;
3. archivos relevantes de `docs/`;
4. ADR aceptados en `docs/decisions/`;
5. este archivo;
6. instrucciones específicas de la herramienta.

Si una instrucción específica de una herramienta entra en conflicto con los requisitos del proyecto, prevalece el requisito del proyecto salvo que el usuario cambie explícitamente esa decisión.

## Reglas principales del proyecto

- Utiliza **pnpm**, no npm/yarn/bun.
- Utiliza TypeScript en modo estricto.
- Mantén el contenido separado de la presentación.
- Utiliza MDX para case studies largos cuando corresponda.
- Utiliza componentes de UI propios del proyecto con Tailwind.
- Utiliza Lucide como familia principal de iconos.
- Respeta el sistema de diseño.
- Respeta las rutas `/` en español y `/en/` en inglés.
- No crees una ruta pública de case study de Asisteo hasta que su V2 haya alcanzado `PUBLISHED`.
- Nunca presentes Asisteo V1 como un producto terminado.
- Nunca inventes métricas, capacidades, cumplimiento normativo, usuarios, ingresos, número de tests o certificaciones.
- Nunca fabriques capturas de producto.
- No añadas un CMS.
- No crees una base de datos para el portfolio salvo que exista un requisito nuevo aprobado explícitamente.
- No añadas backend/formulario de contacto en la V1.
- No añadas dependencias innecesarias.
- No sobrediseñes la arquitectura.

## Flujo de trabajo del agente

Utiliza:

```text
LEER → INSPECCIONAR → PLANIFICAR → IMPLEMENTAR → PROBAR → COMPROBAR EN NAVEGADOR → REVISAR → CORREGIR → VERIFICAR → INFORMAR
```

### LEER

Lee primero los requisitos relevantes y la implementación existente.

### INSPECCIONAR

Busca patrones existentes en el repositorio antes de crear uno nuevo.

### PLANIFICAR

Para cualquier cambio que vaya más allá de una modificación local pequeña, indica:

- archivos que probablemente cambiarán;
- enfoque de implementación;
- tests/verificaciones necesarios;
- documentación afectada.

### IMPLEMENTAR

Realiza el cambio coherente más pequeño que satisfaga la tarea.

### PROBAR

Ejecuta las comprobaciones relevantes. No escribas tests únicamente para aumentar una cifra de cobertura.

### COMPROBAR EN NAVEGADOR

Para cambios de UI, verifica el comportamiento real en navegador. Cuando sea relevante, comprueba:

- 390 px;
- 768 px;
- 1024 px;
- 1440 px;
- modo oscuro;
- modo claro;
- español;
- inglés.

### REVISAR

Revisa el diff y busca:

- ampliación accidental del alcance;
- regresiones de accesibilidad;
- afirmaciones sin respaldo;
- incumplimientos del sistema de diseño;
- errores de consola;
- dependencias innecesarias;
- fuentes de verdad duplicadas.

### VERIFICAR

Vuelve a ejecutar las comprobaciones después de corregir los problemas encontrados.

### INFORMAR

Informa de:

- qué ha cambiado;
- por qué;
- archivos afectados;
- comandos/comprobaciones ejecutados;
- resultado de la verificación;
- limitaciones conocidas.

## Autonomía

### Puede decidir

- nombres de bajo impacto;
- detalles de implementación dentro de la arquitectura existente;
- pequeños refactors reversibles;
- tests derivados directamente de requisitos definidos;
- estilos locales que estén cubiertos por los tokens existentes.

### Debe justificar

- nuevas dependencias;
- refactors moderados;
- cambios de comportamiento;
- nuevos servicios de terceros;
- cambios relevantes en responsive/layout.

### Debe detenerse y preguntar

- cambios de stack;
- cambios de arquitectura;
- cambios de requisitos;
- eliminación de funcionalidades importantes;
- cambios del sistema de diseño;
- operaciones destructivas sobre datos;
- cambios relevantes en producción;
- acciones irreversibles.

Nunca modifiques silenciosamente la constitución para justificar una decisión ya tomada.

## Reglas de Git

Ramas:

```text
feat/*
fix/*
refactor/*
test/*
docs/*
chore/*
```

No hagas `force push` sobre `main`.

No hagas trabajo normal de funcionalidades directamente sobre `main`.

Utiliza Conventional Commits.

El trabajo relevante pasa por un Pull Request.

Utiliza squash merge sobre `main`.

Nunca utilices operaciones destructivas de Git para “limpiar” el repositorio sin autorización explícita.

## Seguridad

- Nunca hagas commit de secretos.
- Nunca expongas tokens/API keys.
- Nunca desactives controles de seguridad únicamente para conseguir que una comprobación pase.
- Evita utilizar `dangerouslySetInnerHTML` sin control.
- Revisa los scripts de terceros antes de añadirlos.

## Veracidad del contenido

Antes de escribir una afirmación técnica, verifícala en el repositorio o en documentación aprobada.

Ejemplos de afirmaciones no permitidas sin evidencia:

- “listo para producción”;
- “totalmente compatible”;
- “X usuarios”;
- “Y % más rápido”;
- “experto en Z”.

## Definition of Done

Una tarea no está terminada simplemente porque compile.

Aplica la Definition of Done de `PROJECT_CONSTITUTION.md` y la documentación de la tarea correspondiente.
