const stages = [
  { label: "IDEA", className: "top-6 left-4 sm:left-10" },
  { label: "SPEC", className: "top-12 right-3 sm:right-10" },
  { label: "AGENT", className: "top-1/2 left-2 sm:left-12" },
  { label: "TEST", className: "right-3 bottom-14 sm:right-9" },
  { label: "PRODUCT", className: "bottom-6 left-1/2" },
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
        viewBox="0 0 520 420"
        fill="none"
        preserveAspectRatio="none"
      >
        <path d="M92 72L250 183L423 90" stroke="currentColor" strokeWidth="1" />
        <path
          d="M92 72L145 244L260 336L423 276"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path d="M250 183L423 276" stroke="currentColor" strokeWidth="1" />
        <circle cx="92" cy="72" r="4" fill="currentColor" />
        <circle cx="250" cy="183" r="4" fill="currentColor" />
        <circle cx="423" cy="90" r="4" fill="currentColor" />
        <circle cx="145" cy="244" r="4" fill="currentColor" />
        <circle cx="423" cy="276" r="4" fill="currentColor" />
        <circle cx="260" cy="336" r="4" fill="currentColor" />
      </svg>

      <div className="absolute top-1/2 left-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary/50 bg-background/85 font-mono text-xs font-medium tracking-[0.24em] text-primary shadow-[0_0_0_1rem_color-mix(in_srgb,var(--secondary)_8%,transparent)] sm:h-40 sm:w-40">
        BUILD
      </div>

      {stages.map((stage) => (
        <div
          key={stage.label}
          className={`absolute -translate-x-1/2 rounded-sm border border-border bg-background/90 px-3 py-2 font-mono text-[0.65rem] font-medium tracking-[0.16em] text-foreground-muted shadow-sm ${stage.className}`}
        >
          {stage.label}
        </div>
      ))}
    </div>
  );
}
