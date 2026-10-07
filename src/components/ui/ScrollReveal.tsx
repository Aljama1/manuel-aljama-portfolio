"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delayMs?: number;
}

export function ScrollReveal({
  children,
  className = "",
  delayMs = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Si el usuario prefiere movimiento reducido, revelar de inmediato sin animación
    const motionQuery =
      typeof window !== "undefined" && typeof window.matchMedia === "function"
        ? window.matchMedia("(prefers-reduced-motion: reduce)")
        : null;

    if (motionQuery?.matches) {
      const rafId =
        typeof requestAnimationFrame !== "undefined"
          ? requestAnimationFrame(() => setIsVisible(true))
          : setTimeout(() => setIsVisible(true), 0);

      return () => {
        if (
          typeof cancelAnimationFrame !== "undefined" &&
          typeof rafId === "number"
        ) {
          cancelAnimationFrame(rafId);
        } else {
          clearTimeout(rafId as unknown as NodeJS.Timeout);
        }
      };
    }

    // Fallback asíncrono para entornos sin IntersectionObserver (ej. navegadores antiguos o tests JSDOM)
    if (typeof IntersectionObserver === "undefined") {
      const rafId =
        typeof requestAnimationFrame !== "undefined"
          ? requestAnimationFrame(() => setIsVisible(true))
          : setTimeout(() => setIsVisible(true), 0);

      return () => {
        if (
          typeof cancelAnimationFrame !== "undefined" &&
          typeof rafId === "number"
        ) {
          cancelAnimationFrame(rafId);
        } else {
          clearTimeout(rafId as unknown as NodeJS.Timeout);
        }
      };
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element); // once: true estricto
        }
      },
      {
        rootMargin: "0px 0px -40px 0px", // Trigger anticipado fluido
        threshold: 0.05,
      },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const revealClasses = isVisible
    ? "scroll-reveal is-revealed"
    : "scroll-reveal";
  const combinedClassName = className
    ? `${className} ${revealClasses}`
    : revealClasses;

  return (
    <div
      ref={ref}
      style={
        delayMs > 0 && isVisible
          ? { animationDelay: `${delayMs}ms` }
          : undefined
      }
      className={combinedClassName}
    >
      {children}
    </div>
  );
}
