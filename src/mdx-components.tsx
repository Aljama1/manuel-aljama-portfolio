import type { MDXComponents } from "mdx/types";

/**
 * mdx-components.tsx — requerido por @next/mdx con App Router.
 * Define los componentes React que se mapean a los elementos HTML del MDX.
 * Se puede ampliar con componentes de diseño propios del proyecto.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}
