interface StageNode {
  readonly label: string;
  readonly x: number;
  readonly y: number;
}

const STAGES: readonly StageNode[] = [
  { label: "IDEA", x: 20, y: 18 },
  { label: "SPEC", x: 80, y: 18 },
  { label: "AGENT", x: 18, y: 52 },
  { label: "TEST", x: 82, y: 52 },
  { label: "PRODUCT", x: 50, y: 84 },
] as const;

export function HeroVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative isolate min-h-[22rem] overflow-hidden rounded-lg border border-border bg-surface p-5 sm:min-h-[26rem] sm:p-8"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,color-mix(in_srgb,var(--secondary)_18%,transparent),transparent_55%)]" />

      <svg
        className="absolute inset-0 h-full w-full text-secondary/40"
        viewBox="0 0 1000 1000"
        fill="none"
        preserveAspectRatio="none"
      >
        {/* Closed perimeter workflow: IDEA -> SPEC -> TEST -> PRODUCT -> AGENT -> IDEA */}
        <path
          d="M200 180 L800 180 L820 520 L500 840 L180 520 Z"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />

        {/* Radial links from stages to the central BUILD core */}
        <path
          d="M200 180 L500 500"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M800 180 L500 500"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M180 520 L500 500"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M820 520 L500 500"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M500 840 L500 500"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />

        {/* Stage node vertices */}
        <circle cx="200" cy="180" r="4" fill="currentColor" />
        <circle cx="800" cy="180" r="4" fill="currentColor" />
        <circle cx="180" cy="520" r="4" fill="currentColor" />
        <circle cx="820" cy="520" r="4" fill="currentColor" />
        <circle cx="500" cy="840" r="4" fill="currentColor" />
        <circle cx="500" cy="500" r="4" fill="currentColor" />
      </svg>

      <div className="absolute top-1/2 left-1/2 z-10 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary/50 bg-background/90 font-mono text-xs font-medium tracking-[0.24em] text-primary shadow-[0_0_0_1rem_color-mix(in_srgb,var(--secondary)_8%,transparent)] sm:h-40 sm:w-40">
        BUILD
      </div>

      {STAGES.map((stage) => (
        <div
          key={stage.label}
          style={{ left: `${stage.x}%`, top: `${stage.y}%` }}
          className="absolute z-10 -translate-x-1/2 -translate-y-1/2 rounded-sm border border-border bg-background/90 px-3 py-2 font-mono text-[0.65rem] font-medium tracking-[0.16em] text-foreground-muted shadow-sm"
        >
          {stage.label}
        </div>
      ))}
    </div>
  );
}
