interface StageNode {
  readonly label: string;
  readonly x: number;
  readonly y: number;
}

const STAGES: readonly StageNode[] = [
  { label: "IDEA", x: 15, y: 85 },
  { label: "SPEC", x: 30, y: 65 },
  { label: "BUILD", x: 50, y: 50 },
  { label: "TEST", x: 70, y: 35 },
  { label: "PRODUCT", x: 85, y: 15 },
] as const;

export function HeroVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative isolate min-h-[28rem] w-full overflow-hidden rounded-lg border border-border bg-surface p-5 sm:min-h-[32rem] sm:p-8 lg:h-full lg:min-h-[36rem]"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30" />

      {/* Subtle radial gradients for the violet -> green transition */}
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-[100px]" />
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-secondary/10 blur-[100px]" />

      <svg
        className="absolute inset-0 h-full w-full text-foreground-muted/30"
        viewBox="0 0 1000 1000"
        fill="none"
        preserveAspectRatio="none"
      >
        {/* Main data bus paths (diagonal progression) */}

        {/* Track 1 (Top) */}
        <path
          d="M0 600 L250 600 L450 400 L650 400 L850 200 L1000 200"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
          className="text-secondary/20"
        />

        {/* Track 2 (Main) */}
        <path
          d="M0 850 L150 850 L300 700 L300 650 L500 450 L500 500 L700 300 L700 350 L850 200 L850 150 L1000 150"
          stroke="currentColor"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />

        {/* Track 3 (Bottom) */}
        <path
          d="M150 1000 L150 900 L350 700 L550 700 L750 500 L1000 500"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
          className="text-primary/20"
        />

        {/* Direct Connections between nodes */}
        <path
          d="M150 850 L300 650 M300 650 L500 500 M500 500 L700 350 M700 350 L850 150"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 4"
          vectorEffect="non-scaling-stroke"
          className="text-primary/40"
        />

        {/* Vertical/Horizontal auxiliary lines */}
        <line
          x1="500"
          y1="0"
          x2="500"
          y2="1000"
          stroke="currentColor"
          strokeWidth="1"
          className="text-border"
          vectorEffect="non-scaling-stroke"
        />
        <line
          x1="0"
          y1="500"
          x2="1000"
          y2="500"
          stroke="currentColor"
          strokeWidth="1"
          className="text-border"
          vectorEffect="non-scaling-stroke"
        />

        {/* Node vertices */}
        {STAGES.map((stage) => (
          <circle
            key={`${stage.label}-vertex`}
            cx={stage.x * 10}
            cy={stage.y * 10}
            r="4"
            fill="currentColor"
            className="text-primary"
          />
        ))}
      </svg>

      {/* Nodes */}
      {STAGES.map((stage) => {
        const isCore = stage.label === "BUILD";
        return (
          <div
            key={stage.label}
            style={{ left: `${stage.x}%`, top: `${stage.y}%` }}
            className={`absolute z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-sm border ${
              isCore
                ? "h-20 w-24 border-primary/50 bg-background/95 text-primary shadow-[0_0_1.5rem_color-mix(in_srgb,var(--primary)_15%,transparent)] sm:h-24 sm:w-28"
                : "border-border bg-background/90 px-3 py-2 text-foreground-muted shadow-sm"
            } font-mono text-[0.65rem] font-medium tracking-[0.16em] sm:text-xs`}
          >
            {stage.label}
          </div>
        );
      })}
    </div>
  );
}
