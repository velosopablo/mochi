import { Sparkles } from "lucide-react";
import { cn } from "@/lib/cn";

export interface ScenarioCardProps {
  index: number;
  question: string;
  context: string;
  insight: string;
  visual: React.ReactNode;
  /** "featured": texto y visual lado a lado. "compact": apilados, para grillas. */
  layout?: "featured" | "compact";
  reverse?: boolean;
  className?: string;
}

export function ScenarioCard({
  index,
  question,
  context,
  insight,
  visual,
  layout = "featured",
  reverse = false,
  className,
}: ScenarioCardProps) {
  const featured = layout === "featured";
  const titleId = `situacion-${index}`;

  return (
    <article
      aria-labelledby={titleId}
      className={cn(
        "overflow-hidden rounded-3xl border border-line bg-white shadow-soft",
        featured ? "grid lg:grid-cols-2" : "flex flex-col",
        className,
      )}
    >
      <div
        className={cn(
          "flex flex-col p-6 sm:p-8",
          featured && "lg:p-12",
          featured && reverse && "lg:order-2",
        )}
      >
        <p className="text-xs font-semibold tracking-wider text-ink-muted uppercase">
          Situación {String(index).padStart(2, "0")}
        </p>
        <h3
          id={titleId}
          className={cn(
            "mt-3 font-display font-bold tracking-tight text-balance text-ink",
            featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl",
          )}
        >
          “{question}”
        </h3>
        <p className="mt-3 mb-6 text-[15px] leading-relaxed text-ink-soft sm:text-base">{context}</p>
        <p className="mt-auto flex gap-2.5 border-t border-line pt-5 text-[15px] leading-snug font-semibold text-ink">
          <Sparkles className="mt-0.5 size-4 shrink-0 text-brand-600" aria-hidden="true" />
          {insight}
        </p>
      </div>

      <div
        className={cn(
          "flex items-center justify-center bg-gradient-to-br from-brand-50 via-white to-warm-50 p-5 sm:p-8",
          featured && "lg:p-12",
          !featured && "flex-1 border-t border-line",
        )}
      >
        <div className="w-full max-w-sm">{visual}</div>
      </div>
    </article>
  );
}
