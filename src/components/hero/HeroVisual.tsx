"use client";

import { useState } from "react";

interface StageNode {
  readonly id: string;
  readonly label: string;
  readonly deskX: number;
  readonly deskY: number;
  readonly mobX: number;
  readonly mobY: number;
}

const STAGES: readonly StageNode[] = [
  { id: "IDEA", label: "IDEA", deskX: 15, deskY: 85, mobX: 50, mobY: 15 },
  { id: "SPEC", label: "SPEC", deskX: 30, deskY: 65, mobX: 50, mobY: 32 },
  { id: "BUILD", label: "BUILD", deskX: 50, deskY: 50, mobX: 50, mobY: 50 },
  { id: "TEST", label: "TEST", deskX: 70, deskY: 35, mobX: 50, mobY: 68 },
  { id: "PRODUCT", label: "PRODUCT", deskX: 85, deskY: 15, mobX: 50, mobY: 85 },
];

export function HeroVisual() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const getPathColor = (pathId: string) => {
    const baseColor = "text-border";
    if (!activeNode) return baseColor;

    switch (activeNode) {
      case "IDEA":
        return pathId === "IDEA-SPEC" ? "text-secondary" : "text-border/30";
      case "SPEC":
        return pathId === "SPEC-BUILD" ? "text-secondary" : "text-border/30";
      case "BUILD":
        return pathId === "SPEC-BUILD" || pathId === "BUILD-TEST"
          ? "text-primary"
          : "text-border/30";
      case "TEST":
        return pathId === "BUILD-TEST" || pathId === "TEST-PRODUCT"
          ? "text-primary"
          : "text-border/30";
      case "PRODUCT":
        return "text-primary";
      default:
        return baseColor;
    }
  };

  const getNodeState = (nodeId: string, index: number) => {
    const isViolet = nodeId === "IDEA" || nodeId === "SPEC";
    const activeTextColor = isViolet ? "text-secondary" : "text-primary";
    const activeBorderColor = isViolet ? "border-secondary" : "border-primary";
    const activeGlow = isViolet
      ? "shadow-[0_0_20px_color-mix(in_srgb,var(--secondary)_50%,transparent)]"
      : "shadow-[0_0_20px_color-mix(in_srgb,var(--primary)_50%,transparent)]";

    const baseDelay = 0.2 + index * 0.1;

    if (!activeNode) {
      const isBuild = nodeId === "BUILD";
      return {
        textClass: isBuild ? "text-primary" : "text-foreground-muted",
        borderClass: isBuild ? "border-primary/50" : "border-border",
        bgClass: "bg-surface-raised",
        glowClass: isBuild ? "animate-pulse-glow" : "shadow-sm",
        opacityClass: "opacity-100 animate-enter-node",
        animationDelay: `${baseDelay}s`,
      };
    }

    const isActive = activeNode === nodeId;
    return {
      textClass: isActive ? activeTextColor : "text-foreground-muted",
      borderClass: isActive ? activeBorderColor : "border-border/40",
      bgClass: "bg-surface-raised",
      glowClass: isActive ? activeGlow : "shadow-none",
      opacityClass: "opacity-100",
      animationDelay: "0s",
    };
  };

  return (
    <div
      className="relative isolate min-h-[28rem] w-full overflow-hidden rounded-lg border border-border bg-surface p-5 sm:min-h-[32rem] sm:p-8 lg:h-full lg:min-h-[36rem]"
      onMouseLeave={() => setActiveNode(null)}
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30" />

      {/* SVG for Desktop */}
      <svg
        className="absolute inset-0 hidden h-full w-full sm:block"
        viewBox="0 0 1000 1000"
        fill="none"
        preserveAspectRatio="none"
      >
        <line
          x1="500"
          y1="0"
          x2="500"
          y2="1000"
          stroke="currentColor"
          strokeWidth="1"
          className="text-border/50"
          vectorEffect="non-scaling-stroke"
        />
        <line
          x1="0"
          y1="500"
          x2="1000"
          y2="500"
          stroke="currentColor"
          strokeWidth="1"
          className="text-border/50"
          vectorEffect="non-scaling-stroke"
        />

        <path
          d="M150 850 L300 650"
          stroke="currentColor"
          strokeWidth="2"
          pathLength="100"
          className={`${getPathColor("IDEA-SPEC")} animate-draw-line transition-colors duration-150`}
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M300 650 L500 500"
          stroke="currentColor"
          strokeWidth="2"
          pathLength="100"
          className={`${getPathColor("SPEC-BUILD")} animate-draw-line transition-colors duration-150`}
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M500 500 L700 350"
          stroke="currentColor"
          strokeWidth="2"
          pathLength="100"
          className={`${getPathColor("BUILD-TEST")} animate-draw-line transition-colors duration-150`}
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M700 350 L850 150"
          stroke="currentColor"
          strokeWidth="2"
          pathLength="100"
          className={`${getPathColor("TEST-PRODUCT")} animate-draw-line transition-colors duration-150`}
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* SVG for Mobile */}
      <svg
        className="absolute inset-0 block h-full w-full sm:hidden"
        viewBox="0 0 400 1000"
        fill="none"
        preserveAspectRatio="none"
      >
        <line
          x1="200"
          y1="0"
          x2="200"
          y2="1000"
          stroke="currentColor"
          strokeWidth="1"
          className="text-border/50"
          vectorEffect="non-scaling-stroke"
        />

        <path
          d="M200 150 L200 320"
          stroke="currentColor"
          strokeWidth="2"
          pathLength="100"
          className={`${getPathColor("IDEA-SPEC")} animate-draw-line transition-colors duration-150`}
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M200 320 L200 500"
          stroke="currentColor"
          strokeWidth="2"
          pathLength="100"
          className={`${getPathColor("SPEC-BUILD")} animate-draw-line transition-colors duration-150`}
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M200 500 L200 680"
          stroke="currentColor"
          strokeWidth="2"
          pathLength="100"
          className={`${getPathColor("BUILD-TEST")} animate-draw-line transition-colors duration-150`}
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M200 680 L200 850"
          stroke="currentColor"
          strokeWidth="2"
          pathLength="100"
          className={`${getPathColor("TEST-PRODUCT")} animate-draw-line transition-colors duration-150`}
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* Nodes */}
      {STAGES.map((stage, i) => {
        const state = getNodeState(stage.id, i);
        const isCore = stage.id === "BUILD";

        return (
          <button
            key={stage.id}
            onMouseEnter={() => setActiveNode(stage.id)}
            onFocus={() => setActiveNode(stage.id)}
            aria-label={`Highlight ${stage.label} stage`}
            style={
              {
                "--x-desk": `${stage.deskX}%`,
                "--y-desk": `${stage.deskY}%`,
                "--x-mob": `${stage.mobX}%`,
                "--y-mob": `${stage.mobY}%`,
                animationDelay: state.animationDelay,
              } as React.CSSProperties
            }
            className={`absolute z-10 flex -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-sm border ${
              isCore ? "h-20 w-24 sm:h-24 sm:w-28" : "px-4 py-2"
            } font-mono text-[0.65rem] font-medium tracking-[0.16em] transition-colors duration-150 max-sm:top-[var(--y-mob)] max-sm:left-[var(--x-mob)] sm:top-[var(--y-desk)] sm:left-[var(--x-desk)] sm:text-xs ${state.bgClass} ${state.borderClass} ${state.textClass} ${state.glowClass} ${state.opacityClass}`}
          >
            {stage.label}
          </button>
        );
      })}
    </div>
  );
}
