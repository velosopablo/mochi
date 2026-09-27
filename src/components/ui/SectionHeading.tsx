import { cn } from "@/lib/cn";

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-primary-50 px-3.5 py-1 text-sm font-extrabold text-deep",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  id?: string;
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** "responsive": centrado en mobile y a la izquierda en desktop. */
  align?: "center" | "left" | "responsive";
  className?: string;
}) {
  const alignment = {
    center: "mx-auto text-center",
    left: "text-left",
    responsive: "mx-auto text-center lg:mx-0 lg:text-left",
  }[align];
  return (
    <div className={cn("max-w-2xl", alignment, className)}>
      {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
      <h2 id={id} className="type-h2 text-balance text-ink">
        {title}
      </h2>
      {description && <p className="mt-4 text-lg text-pretty text-ink-muted">{description}</p>}
    </div>
  );
}

/** Sección con el espaciado vertical oficial (64–96px). */
export function Section({
  id,
  labelledBy,
  tone = "white",
  className,
  children,
}: {
  id?: string;
  labelledBy: string;
  tone?: "white" | "bg";
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("py-16 sm:py-20 lg:py-24", tone === "white" ? "bg-white" : "bg-bg", className)}
    >
      {children}
    </section>
  );
}
