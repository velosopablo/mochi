import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { anchors, PRIMARY_CTA } from "@/lib/site";
import { ScenarioCard } from "./ScenarioCard";
import { AuthorizationVisual } from "./scenarios/AuthorizationVisual";
import { BusyWeekScenario } from "./scenarios/BusyWeekScenario";
import { LostDocumentVisual } from "./scenarios/LostDocumentVisual";
import { MeetingVisual } from "./scenarios/MeetingVisual";
import { PickupVisual } from "./scenarios/PickupVisual";
import { UncertainTestVisual } from "./scenarios/UncertainTestVisual";
import { UpdatedLinkVisual } from "./scenarios/UpdatedLinkVisual";

const compactScenarios = [
  {
    index: 4,
    question: "Sé que mandaron un PDF, pero no encuentro dónde.",
    context:
      "El colegio intentó compartir un documento por la plataforma, pero terminó circulando por WhatsApp.",
    insight: "Mochi mantiene el documento unido a la instrucción.",
    visual: <LostDocumentVisual />,
  },
  {
    index: 5,
    question: "¿La reunión era el miércoles a las 8:10?",
    context: "Hubo un primer aviso, después un cambio y varios mensajes en el medio.",
    insight: "Mochi diferencia la última información válida de mensajes anteriores.",
    visual: <MeetingVisual />,
  },
  {
    index: 6,
    question: "¿A qué hora había que buscarlos hoy?",
    context: "Un día con horario especial, avisado hace una semana en un comunicado largo.",
    insight: "Mochi pone la logística diaria en el mismo lugar que las tareas y actividades.",
    visual: <PickupVisual />,
  },
  {
    index: 7,
    question: "El link que mandaron no funciona.",
    context: "El material se compartió, el enlace falló y la versión nueva quedó perdida en el chat.",
    insight:
      "Mochi mantiene visible la versión vigente para que no tengas que reconstruir la conversación.",
    visual: <UpdatedLinkVisual />,
  },
];

export function RealLifeScenarios() {
  return (
    <section id="situaciones" aria-labelledby="situaciones-title" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          id="situaciones-title"
          eyebrow="Situaciones reales"
          title="Situaciones que cualquier padre reconoce."
          description="Inspiradas en situaciones cotidianas de familias escolares. Recreadas con datos ficticios."
        />

        <div className="mt-14 space-y-6 sm:space-y-8">
          <ScenarioCard
            index={1}
            question="¿La autorización era por la plataforma o por el cuaderno?"
            context="Se comunicó una actividad, pero no está claro dónde completar la autorización y el vencimiento es mañana."
            insight="Mochi convierte una comunicación en una acción concreta."
            visual={<AuthorizationVisual />}
          />
          <ScenarioCard
            index={2}
            reverse
            question="Mi hijo dice que mañana tiene prueba, pero no aparece en el calendario."
            context="Lo que cuenta tu hijo/a, lo que figura en el calendario y lo que dice la comunicación no coinciden."
            insight="Mochi diferencia información confirmada de información todavía incierta. No inventa certezas cuando las fuentes no las tienen."
            visual={<UncertainTestVisual />}
          />
          <BusyWeekScenario index={3} />

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            {compactScenarios.map((s) => (
              <ScenarioCard key={s.index} layout="compact" {...s} />
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="font-display text-xl font-semibold text-balance text-ink sm:text-2xl">
            ¿Te pasó alguna de estas esta semana?
          </p>
          <ButtonLink href={anchors.earlyAccess} size="lg">
            {PRIMARY_CTA}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
