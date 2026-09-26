import { ArrowRight, Sparkles } from "lucide-react";
import { MockupFigure, Tag, type Tone } from "@/components/ui/mockup";
import { cn } from "@/lib/cn";

const week: Array<{ subject: string; kind: string; tone: Tone }> = [
  { subject: "Matemática", kind: "Evaluación", tone: "red" },
  { subject: "Inglés", kind: "Evaluación", tone: "red" },
  { subject: "Sociales", kind: "Evaluación", tone: "red" },
  { subject: "Matemática", kind: "Tarea", tone: "blue" },
  { subject: "Inglés", kind: "Tarea", tone: "blue" },
  { subject: "Torneo", kind: "Evento deportivo", tone: "green" },
];

const priorities = ["Matemática", "Inglés", "Sociales"];

const plan = [
  { day: "Lunes", task: "25 min Matemática" },
  { day: "Martes", task: "20 min Inglés" },
  { day: "Miércoles", task: "Repaso Matemática" },
];

/** Situación 03: la más visual. Muestra el antes (todo junto) y el después (orden y plan). */
export function BusyWeekScenario({ index }: { index: number }) {
  const titleId = `situacion-${index}`;

  return (
    <article
      aria-labelledby={titleId}
      className="relative overflow-hidden rounded-3xl bg-brand-950 p-6 text-white sm:p-10 lg:p-14"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_85%_10%,rgb(125_105_241/0.45),transparent_70%),radial-gradient(35%_40%_at_0%_100%,rgb(242_138_75/0.18),transparent_70%)]"
      />
      <div className="relative">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wider text-brand-200 uppercase">
            Situación {String(index).padStart(2, "0")}
          </p>
          <h3
            id={titleId}
            className="mt-3 font-display text-2xl font-bold tracking-tight text-balance sm:text-4xl"
          >
            “Tres evaluaciones, dos tareas y todo en tres días.”
          </h3>
          <p className="mt-3 text-base leading-relaxed text-brand-100">
            La semana llega cargada y cada pendiente aparece en un lugar distinto. Saber todo lo que
            hay no alcanza para saber qué hacer primero.
          </p>
        </div>

        <MockupFigure
          label="Ejemplo ilustrativo: seis pendientes de la semana y cómo Mochi los ordena por prioridad con un plan de estudio sugerido."
          className="mt-10 grid items-center gap-4 lg:grid-cols-[1fr_auto_1.25fr] lg:gap-6"
        >
          <div className="rounded-2xl bg-white/[0.06] p-5 ring-1 ring-white/10">
            <p className="text-sm font-semibold text-brand-100">Esta semana</p>
            <ul className="mt-3 space-y-2">
              {week.map((item, i) => (
                <li
                  key={`${item.subject}-${item.kind}`}
                  className={cn(
                    "flex items-center justify-between gap-2 rounded-xl bg-white/[0.07] px-3 py-2 text-sm",
                    i % 2 ? "lg:translate-x-2" : "lg:-translate-x-1",
                  )}
                >
                  <span className="font-medium">{item.subject}</span>
                  <Tag tone={item.tone}>
                    {item.kind}
                  </Tag>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center" aria-hidden="true">
            <span className="grid size-11 rotate-90 place-items-center rounded-full bg-brand-500 shadow-[0_0_40px_rgb(125_105_241/0.6)] lg:rotate-0">
              <ArrowRight className="size-5" />
            </span>
          </div>

          <div className="rounded-2xl bg-white p-5 text-ink shadow-lift">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <p className="text-sm font-semibold text-ink">Tu prioridad</p>
                <ol className="mt-3 space-y-2">
                  {priorities.map((subject, i) => (
                    <li key={subject} className="flex items-center gap-3 rounded-xl bg-canvas px-3 py-2.5">
                      <span
                        className={cn(
                          "grid size-6 place-items-center rounded-full text-xs font-bold",
                          i === 0 ? "bg-brand-600 text-white" : "bg-brand-100 text-brand-800",
                        )}
                      >
                        {i + 1}
                      </span>
                      <span className="text-sm font-semibold">{subject}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <p className="text-sm font-semibold text-ink">Plan sugerido</p>
                <ul className="mt-3 space-y-2">
                  {plan.map(({ day, task }) => (
                    <li key={day} className="rounded-xl border border-line px-3 py-2">
                      <span className="block text-xs text-ink-muted">{day}</span>
                      <span className="text-sm font-semibold">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </MockupFigure>

        <p className="mt-10 flex max-w-2xl gap-2.5 font-display text-xl font-semibold sm:text-2xl">
          <Sparkles className="mt-1 size-5 shrink-0 text-warm-300" aria-hidden="true" />
          No alcanza con saber qué hay. Hay que saber por dónde empezar.
        </p>
      </div>
    </article>
  );
}
