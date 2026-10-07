import { Lock } from "lucide-react";

interface CaseStudyVideoProps {
  videoSrc: string;
  posterSrc: string;
  ariaLabel: string;
  fallbackText: string;
  statusText?: string | undefined;
}

export function CaseStudyVideo({
  videoSrc,
  posterSrc,
  ariaLabel,
  fallbackText,
  statusText,
}: CaseStudyVideoProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-surface/90 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:border-border">
      {/* Ambient lighting flare */}
      <div
        className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-gradient-to-bl from-primary/10 via-secondary/5 to-transparent blur-3xl"
        aria-hidden="true"
      />

      {/* Browser / App Satin Header Chrome */}
      <div className="flex items-center justify-between border-b border-border/80 bg-surface-raised/90 px-3.5 py-2.5 backdrop-blur-xs">
        {/* macOS Traffic Lights */}
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ef4444] shadow-2xs" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#eab308] shadow-2xs" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#22c55e] shadow-2xs" />
        </div>

        {/* Central URL / Session Pill */}
        <div className="flex items-center gap-2 rounded-lg border border-border/80 bg-background/90 px-3 py-1 font-mono text-xs text-foreground shadow-2xs">
          <Lock className="h-3 w-3 text-primary" aria-hidden="true" />
          <span className="text-[11px] font-medium tracking-tight">
            trace-kds.restaurant / live-demo
          </span>
        </div>

        {/* Technical Badges */}
        <div className="flex items-center gap-2 font-mono text-[11px] text-foreground-muted">
          <span className="hidden rounded-sm border border-border/60 bg-surface px-1.5 py-0.5 md:inline-block">
            MP4 / WebP
          </span>
        </div>
      </div>

      {/* Video Viewport Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-black/95">
        <video
          className="h-full w-full object-cover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          controls
          preload="metadata"
          poster={posterSrc}
          aria-label={ariaLabel}
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
          <p className="p-4 text-center text-sm text-foreground-muted">
            {fallbackText}
          </p>
        </video>
      </div>

      {/* Telemetry Status Footer */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/80 bg-surface-raised/80 px-4 py-2.5 text-xs text-foreground-muted">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="font-mono text-[11px] font-medium text-foreground">
            {statusText ??
              "Sincronización en tiempo real activa (Firestore onSnapshot)"}
          </span>
        </div>
        <span className="font-mono text-[11px] text-foreground-muted">
          Angular 20 · Ionic 8 · Firestore
        </span>
      </div>
    </div>
  );
}
