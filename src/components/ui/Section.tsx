import type { HTMLAttributes, ReactNode } from "react";
import { Container } from "./Container";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  fullWidth?: boolean;
}

export function Section({
  id,
  children,
  className = "",
  containerClassName = "",
  fullWidth = false,
  ...props
}: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`} {...props}>
      {fullWidth ? (
        children
      ) : (
        <Container className={containerClassName}>{children}</Container>
      )}
    </section>
  );
}
