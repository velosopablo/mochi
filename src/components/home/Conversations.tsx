import { ArrowRight } from "lucide-react";
import { Bubble, ChatList, ChatWindow, ChildBlock, EventCard, FileCard, StatusChip } from "@/components/chat/Chat";
import { Mascot } from "@/components/brand/Mascot";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/SectionHeading";
import { anchors, PRIMARY_CTA } from "@/lib/site";

/** Nombres ficticios y fijos por escenario (no se sortean en cada render). */
const conversations: Array<{ situation: string; label: string; content: React.ReactNode }> = [
  {
    situation: "Lo de mañana",
    label: "Conversación: qué tiene Sofía mañana.",
    content: (
      <>
        <Bubble from="user" time="21:05">¿Qué tiene Sofía mañana?</Bubble>
        <Bubble from="mochi" time="21:05" actions={["Recordámelo 7:15"]}>
          <p>
            Sofía tiene <strong>dos cosas importantes</strong> mañana:
          </p>
          <ChatList
            items={[
              { emoji: "👟", text: <>Educación Física a las <strong>10:30</strong>: lleva ropa deportiva.</> },
              { emoji: "📚", text: <>Entregar la actividad de <strong>Lengua</strong>.</> },
            ]}
          />
        </Bubble>
      </>
    ),
  },
  {
    situation: "Lo que quedó pendiente",
    label: "Conversación: si hay algo pendiente para Mateo.",
    content: (
      <>
        <Bubble from="user" time="20:12">¿Hay algo pendiente para Mateo?</Bubble>
        <Bubble from="mochi" time="20:12" actions={["¿Cómo completo la autorización?"]}>
          <p>
            Sí, encontré <strong>2 cosas pendientes</strong> para Mateo:
          </p>
          <ChatList
            items={[
              { emoji: "✍️", text: <>Autorización para la excursión: <strong>vence mañana</strong>.</> },
              { emoji: "🔬", text: <>Actividad de Ciencias: entrega el <strong>viernes</strong>.</> },
            ]}
          />
        </Bubble>
      </>
    ),
  },
  {
    situation: "Un cambio de horario",
    label: "Conversación: cuándo es la reunión de padres del curso de Juli.",
    content: (
      <>
        <Bubble from="user" time="12:40">¿Cuándo es la reunión de padres de Juli?</Bubble>
        <Bubble from="mochi" time="12:40" actions={["Sí, recordámelo"]}>
          <p>
            Es el <strong>viernes a las 18:30</strong> en el aula 4. Ojo: cambió de horario ayer.
          </p>
          <EventCard title="Reunión de padres · curso de Juli" when="Viernes · 18:30" where="Aula 4" status="Horario actualizado" />
          <p>¿Querés que te lo recuerde el viernes a la tarde?</p>
        </Bubble>
      </>
    ),
  },
  {
    situation: "Cuando no hay certezas",
    label: "Conversación: una prueba de Sofía que no está confirmada.",
    content: (
      <>
        <Bubble from="user" time="19:48">Sofía dice que mañana tiene prueba de Música 🤔</Bubble>
        <Bubble from="mochi" time="19:48">
          <StatusChip tone="amber">Sin confirmar</StatusChip>
          <p>
            No encontré ninguna evaluación de Música para Sofía mañana. Lo último que llegó es que hay que repasar la
            unidad, <strong>sin fecha</strong>.
          </p>
          <p>
            Su próxima evaluación confirmada es de <strong>Matemática, el martes</strong>.
          </p>
        </Bubble>
      </>
    ),
  },
  {
    situation: "El PDF que no aparece",
    label: "Conversación: dónde está el cuadernillo de lectura de Tomás.",
    content: (
      <>
        <Bubble from="user" time="17:20">¿Dónde está el cuadernillo de lectura de Tomás?</Bubble>
        <Bubble from="mochi" time="17:20">
          <p>Acá está 👇 Llegó por email el martes.</p>
          <FileCard name="Cuadernillo de lectura 1.º A.pdf" meta="PDF · 24 páginas" />
          <p>La primera actividad es para el martes que viene.</p>
        </Bubble>
      </>
    ),
  },
  {
    situation: "La semana de Lucas",
    label: "Conversación: cómo organizar la semana de Lucas con tres evaluaciones.",
    content: (
      <>
        <Bubble from="user" time="20:30">Lucas tiene 3 evaluaciones esta semana 😰 ¿Por dónde empezamos?</Bubble>
        <Bubble from="mochi" time="20:31" actions={["Recordáselo cada día"]}>
          <p>La carga fuerte está entre miércoles y viernes. Una idea para que Lucas se organice:</p>
          <ChatList
            items={[
              { emoji: "1️⃣", text: <><strong>Lunes:</strong> 25 min de Matemática</> },
              { emoji: "2️⃣", text: <><strong>Martes:</strong> 20 min de Inglés</> },
              { emoji: "3️⃣", text: <><strong>Miércoles:</strong> repaso de Matemática</> },
            ]}
          />
        </Bubble>
      </>
    ),
  },
];

const hierarchy = ["Familia", "Hijo/a", "Curso", "Actividad", "Fecha"];

export function Conversations() {
  return (
    <Section id="ejemplos" labelledBy="ejemplos-title" tone="bg">
      <Container>
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="ejemplos-title"
            align="responsive"
            eyebrow="Ejemplos de conversación"
            title="Preguntale por cada hijo, como le preguntarías a alguien de la familia."
            description="Situaciones inspiradas en el día a día de las familias. Los nombres y datos son ficticios."
          />
          <Mascot pose="ok" sizes="160px" className="w-28 shrink-0 lg:w-40" decorative />
        </div>

        <Siblings />

        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {conversations.map((c) => (
            <li key={c.situation} className="flex flex-col">
              <h3 className="mb-3 text-sm font-extrabold tracking-wide text-deep uppercase">{c.situation}</h3>
              <ChatWindow label={c.label} composer={false} className="flex-1">
                {c.content}
              </ChatWindow>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="type-h4 text-ink">¿Te suena alguna de estas?</p>
          <ButtonLink href={anchors.earlyAccess}>{PRIMARY_CTA}</ButtonLink>
        </div>
      </Container>
    </Section>
  );
}

/** Ejemplo destacado: dos hermanos, cada uno con su curso, sin mezclar la información. */
function Siblings() {
  return (
    <article
      aria-labelledby="hermanos-title"
      className="mt-12 grid items-center gap-8 rounded-3xl border border-line bg-white p-5 shadow-soft sm:p-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12"
    >
      <div>
        <p className="text-sm font-extrabold tracking-wide text-deep uppercase">Dos hijos, una sola conversación</p>
        <h3 id="hermanos-title" className="type-h3 mt-2 text-balance text-ink">
          Mochi entiende quién es quién.
        </h3>
        <p className="mt-3 text-lg text-ink-muted">
          Cada dato queda en su lugar: de qué hijo es, de qué curso, qué actividad y para cuándo. Nada se mezcla
          entre hermanos, y Mochi te ayuda a ver la semana completa de la familia.
        </p>
        <ol className="mt-6 flex flex-wrap items-center gap-1.5" aria-label="Cómo ordena Mochi la información">
          {hierarchy.map((step, i) => (
            <li key={step} className="flex items-center gap-1.5">
              <span className="rounded-full bg-primary-50 px-3 py-1.5 text-sm font-extrabold text-deep">{step}</span>
              {i < hierarchy.length - 1 && <ArrowRight className="size-4 text-primary" aria-hidden="true" />}
            </li>
          ))}
        </ol>
      </div>

      <ChatWindow label="Conversación: qué tienen Clara y Tomás esta semana." composer={false}>
        <Bubble from="user" time="20:02">¿Qué tienen Clara y Tomás esta semana?</Bubble>
        <Bubble from="mochi" time="20:02">
          <p>
            Encontré <strong>5 cosas importantes</strong> para Clara y Tomás.
          </p>
          <ChildBlock
            name="Clara"
            grade="4.º B"
            tone="coral"
            items={[
              { emoji: "📝", text: <><strong>Matemática:</strong> evaluación el jueves</> },
              { emoji: "✍️", text: <><strong>Excursión:</strong> autorización pendiente, vence miércoles</> },
            ]}
          />
          <ChildBlock
            name="Tomás"
            grade="1.º A"
            tone="green"
            items={[
              { emoji: "📖", text: <><strong>Lectura:</strong> actividad para el martes</> },
              { emoji: "🎵", text: <><strong>Música:</strong> práctica para el viernes</> },
              { emoji: "🏊", text: <><strong>Natación:</strong> miércoles 17:30</> },
            ]}
          />
        </Bubble>
        <Bubble from="mochi" time="20:02" actions={["Ver jueves", "Recordame la autorización"]}>
          <p>
            💡 <strong>El jueves concentra la mayor carga de la semana.</strong>
          </p>
        </Bubble>
      </ChatWindow>
    </article>
  );
}
