import { cn } from "@/lib/cn";

/** Isotipo: una lista corta y priorizada. Lo importante, primero. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={cn("size-8", className)} aria-hidden="true" focusable="false">
      <rect width="32" height="32" rx="10" fill="#6a4fe5" />
      <circle cx="10.5" cy="11" r="2.5" fill="#fdb98a" />
      <rect x="15" y="9.25" width="9" height="3.5" rx="1.75" fill="#fff" />
      <rect x="8" y="14.25" width="16" height="3.5" rx="1.75" fill="#fff" fillOpacity=".75" />
      <rect x="8" y="19.25" width="11" height="3.5" rx="1.75" fill="#fff" fillOpacity=".5" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <LogoMark />
      <span className="font-display text-xl font-bold tracking-tight text-ink">Mochi</span>
    </span>
  );
}
