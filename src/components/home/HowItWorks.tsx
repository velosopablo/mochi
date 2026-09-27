import { MessageCircle, Send } from "lucide-react";
import { Bubble, ChatWindow, TaskCard } from "@/components/chat/Chat";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/SectionHeading";
import { sources } from "./sources";

const understands = ["Tareas", "Evaluaciones", "Eventos", "Autorizaciones", "Materiales", "Fechas", "Cambios relevantes"];

export function HowItWorks() {
  return (
    <Section id="como-funciona" labelledBy="como-funciona-title" tone="bg">
      <Container>
        <SectionHeading
          id="como-funciona-title"
          eyebrow="Cómo funciona"
          title="De información dispersa a acciones claras."
          description="Tres pasos que terminan donde tu familia ya conversa: WhatsApp o Telegram."
        />

        <ol className="mt-14 grid gap-6 lg:grid-cols-3">
          <Step
            n={1}
            title="Mochi se integra a la información actual"
            text="El mecanismo depende de cada caso: integraciones disponibles, calendarios, correo, documentos u otras fuentes digitales autorizadas."
          >
            <ul className="flex flex-wrap gap-2 p-2" aria-label="Fuentes posibles">
              {sources.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-bold text-ink ring-1 ring-line"
                >
                  <Icon className="size-4 text-primary" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
          </Step>

          <Step
            n={2}
            title="Mochi entiende qué es importante"
            text="Identifica tareas, evaluaciones, eventos, autorizaciones, materiales, fechas y cambios relevantes."
          >
            <ul className="flex flex-wrap gap-2 p-2" aria-label="Mochi identifica">
              {understands.map((c) => (
                <li key={c} className="rounded-full bg-white px-3 py-1.5 text-sm font-bold text-ink ring-1 ring-line">
                  {c}
                </li>
              ))}
            </ul>
          </Step>

          <Step
            n={3}
            title="Mochi lo transforma en acciones claras"
            text="Prioriza, resume, recuerda y te ayuda a entender qué necesita atención."
          >
            <ChatWindow label="Ejemplo: Mochi avisa por chat que vence una autorización de Mateo." composer={false} className="border-0 shadow-none">
              <Bubble from="mochi" time="19:03" actions={["Ya la completé ✅", "Recordámelo mañana"]}>
                <p>Para Mateo encontré algo que necesita atención:</p>
                <TaskCard subject="Salida educativa" detail="Autorización pendiente" status="Vence mañana" tone="amber" />
              </Bubble>
            </ChatWindow>
            <p className="flex items-center justify-center gap-3 px-3 py-2.5 text-sm font-bold text-ink">
              <span className="inline-flex items-center gap-1.5">
                <MessageCircle className="size-4 text-[#1a7a6f]" aria-hidden="true" /> WhatsApp
              </span>
              <span aria-hidden="true" className="text-ink-muted">o</span>
              <span className="inline-flex items-center gap-1.5">
                <Send className="size-4 text-deep" aria-hidden="true" /> Telegram
              </span>
            </p>
          </Step>
        </ol>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-ink-muted">
          Mochi está siendo construido. Las primeras versiones van a probar distintas formas de conectarse con la
          información, según lo que cada familia y cada colegio ya utilizan y autorizan.
        </p>
      </Container>
    </Section>
  );
}

function Step({
  n,
  title,
  text,
  children,
}: {
  n: number;
  title: string;
  text: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex flex-col rounded-3xl border border-line bg-white p-6">
      <span className="grid size-10 place-items-center rounded-full bg-primary-strong text-lg font-extrabold text-white">
        {n}
      </span>
      <h3 className="type-h4 mt-4 text-ink">{title}</h3>
      <p className="mt-1.5 text-ink-muted">{text}</p>
      <div className="mt-5 flex-1 overflow-hidden rounded-2xl bg-chat-bg p-1">{children}</div>
    </li>
  );
}
