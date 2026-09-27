import { ArrowDown, ArrowRight } from "lucide-react";
import { Mascot } from "@/components/brand/Mascot";
import { Bubble, ChatWindow, TaskCard } from "@/components/chat/Chat";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/SectionHeading";
import { sources } from "./sources";

export function Solution() {
  return (
    <Section labelledBy="solucion-title">
      <Container>
        <SectionHeading
          id="solucion-title"
          eyebrow="La solución"
          title="Mochi transforma información escolar en acciones claras."
          description="Trabaja con las fuentes digitales que tu familia ya usa y te cuenta lo importante en la conversación de siempre: WhatsApp o Telegram."
        />

        <div className="mt-14 grid items-center gap-6 lg:grid-cols-[1fr_auto_220px_auto_1.2fr]">
          <ul className="flex flex-wrap justify-center gap-2 lg:flex-col lg:items-end" aria-label="Fuentes digitales">
            {sources.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-2 text-sm font-bold text-ink shadow-soft"
              >
                <Icon className="size-4 text-primary" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>

          <Arrow />

          <div className="mx-auto w-40 text-center lg:w-full">
            <Mascot pose="lee" sizes="220px" className="w-full" />
            <p className="mt-1 font-extrabold text-ink">Mochi entiende y prioriza</p>
          </div>

          <Arrow />

          <ChatWindow
            label="Ejemplo: Mochi resume lo importante de la semana para Lucas."
            composer={false}
            className="mx-auto w-full max-w-sm"
          >
            <Bubble from="user" time="7:58">
              ¿Qué tiene Lucas esta semana?
            </Bubble>
            <Bubble from="mochi" time="7:58">
              <p>
                Encontré <strong>3 cosas importantes para Lucas</strong> durante esta semana.
              </p>
              <TaskCard subject="Matemática" detail="Evaluación — viernes" status="Prioridad alta" tone="coral" />
              <TaskCard subject="Salida educativa" detail="Autorización pendiente" status="Vence miércoles" tone="amber" />
              <TaskCard subject="Inglés" detail="Entregar actividad" status="Jueves" tone="blue" />
            </Bubble>
          </ChatWindow>
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-lg font-bold text-pretty text-ink">
          Mochi no solo reúne información.{" "}
          <span className="text-deep">Identifica qué significa para tu familia y qué acción requiere.</span>
        </p>
      </Container>
    </Section>
  );
}

function Arrow() {
  return (
    <div className="flex justify-center text-primary" aria-hidden="true">
      <ArrowDown className="size-7 lg:hidden" />
      <ArrowRight className="hidden size-7 lg:block" />
    </div>
  );
}
