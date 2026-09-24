interface CaseStudyVideoProps {
  videoSrc: string;
  posterSrc: string;
  ariaLabel: string;
  fallbackText: string;
}

export function CaseStudyVideo({
  videoSrc,
  posterSrc,
  ariaLabel,
  fallbackText,
}: CaseStudyVideoProps) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-surface/70 p-2 shadow-2xl transition-colors duration-200 sm:p-3">
      <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black">
        <video
          className="h-full w-full rounded-lg object-cover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
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
    </div>
  );
}
