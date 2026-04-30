/**
 * MaindLogo — minimalist geometric mark fusing a lightning bolt and a network node.
 * Renders in currentColor so it adapts to context.
 */
export const MaindLogo = ({ className = "h-8 w-8" }: { className?: string }) => (
  <div className={`inline-flex items-center gap-2 ${className ? "" : ""}`}>
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <path d="M20 2L2 12L20 22L38 12L20 2Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2 28L20 38L38 28L20 18L2 28Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
      
      {/* Neural dots at every edge line joint */}
      <circle cx="20" cy="2" r="2.5" fill="currentColor" className="text-lettuce" />
      <circle cx="2" cy="12" r="2.5" fill="currentColor" className="text-lavender-deep" />
      <circle cx="20" cy="22" r="2.5" fill="currentColor" className="text-crimson" />
      <circle cx="38" cy="12" r="2.5" fill="currentColor" className="text-lettuce" />
      <circle cx="2" cy="28" r="2.5" fill="currentColor" className="text-lettuce" />
      <circle cx="20" cy="38" r="2.5" fill="currentColor" className="text-lavender-deep" />
      <circle cx="38" cy="28" r="2.5" fill="currentColor" className="text-lettuce" />
      <circle cx="20" cy="18" r="2.5" fill="currentColor" className="text-crimson" />
    </svg>
    <span className="font-display text-2xl tracking-[0.05em]">
      M<span className="text-crimson">AI</span>ND<span className="text-lavender-deep">.</span>in
    </span>
  </div>
);

