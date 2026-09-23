import type { ElementType, HTMLAttributes, ReactNode } from "react";

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  children: ReactNode;
  className?: string;
}

export function Container({
  as: Component = "div",
  children,
  className = "",
  ...props
}: ContainerProps) {
  return (
    <Component
      className={`mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
