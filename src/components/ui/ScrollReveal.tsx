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
    // Fallback asíncrono para entornos sin IntersectionObserver (ej. navegadores antiguos o tests JSDOM)
    if (typeof IntersectionObserver === "undefined") {
      const rafId = requestAnimationFrame(() => setIsVisible(true));
      return () => cancelAnimationFrame(rafId);
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
        rootMargin: "0px 0px -60px 0px", // Trigger anticipado
        threshold: 0.05,
      },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={
        delayMs > 0 && isVisible
          ? { animationDelay: `${delayMs}ms` }
          : undefined
      }
      className={`${className} scroll-reveal${isVisible ? "is-revealed" : ""}`}
    >
      {children}
    </div>
  );
}
