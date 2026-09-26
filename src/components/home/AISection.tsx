import { ArrowDown, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LogoMark } from "@/components/layout/Logo";

const capabilities = [
  "Interpretar comunicaciones",
  "Reconocer fechas",
  "Resumir",
  "Relacionar información",
  "Identificar prioridades",
  "Detectar conflictos",
  "Generar planes",
];

export function AISection() {
  return (
    <section aria-labelledby="ia-title" className="py-20 sm:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading
            id="ia-title"
            align="left"
            eyebrow="Inteligencia artificial"
            title="No es simplemente un chatbot."
            description="No tenés que hacerle preguntas. Mochi usa IA para leer lo que llega, entenderlo en contexto y devolverte lo que importa."
          />
          <ul className="mt-8 flex flex-wrap gap-2">
            {capabilities.map((c) => (
              <li key={c} className="rounded-full bg-brand-50 px-3 py-1.5 text-sm font-medium text-brand-800">
                {c}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-[15px] leading-relaxed text-ink-muted">
            La IA puede equivocarse. Por eso Mochi muestra de dónde sale cada dato y marca lo que
            todavía no está confirmado.
          </p>
        </div>

        <figure className="rounded-3xl border border-line bg-canvas p-5 sm:p-8">
          <figcaption className="sr-only">Ejemplo de cómo Mochi interpreta información de la semana.</figcaption>
          <div className="rounded-2xl bg-white p-5 ring-1 ring-line">
            <p className="text-xs font-semibold tracking-wider text-ink-muted uppercase">Lo que llega</p>
            <p className="mt-2 font-mono text-sm leading-relaxed text-ink">
              Evaluación de Matemática viernes + Inglés jueves + tarea miércoles.
            </p>
          </div>
          <div className="my-3 flex justify-center" aria-hidden="true">
            <ArrowDown className="size-5 text-brand-400" />
          </div>
          <div className="rounded-2xl bg-white p-5 shadow-lift ring-1 ring-brand-100">
            <p className="flex items-center gap-2 text-xs font-semibold tracking-wider text-brand-700 uppercase">
              <LogoMark className="size-5" /> Lo que te dice Mochi
            </p>
            <p className="mt-2 text-base leading-relaxed font-medium text-ink">
              La mayor carga ocurre entre miércoles y viernes. Conviene comenzar Matemática el lunes.
            </p>
            <p className="mt-3 flex items-center gap-1.5 text-xs text-ink-muted">
              <Sparkles className="size-3.5" aria-hidden="true" /> Basado en 3 comunicaciones
            </p>
          </div>
        </figure>
      </Container>
    </section>
  );
}
