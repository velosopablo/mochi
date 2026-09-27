import { ArrowDown, MessageCircle, Send } from "lucide-react";
import { Mascot } from "@/components/brand/Mascot";
import { Bubble, ChatList, ChatWindow, DayDivider, FileCard, PhoneFrame } from "@/components/chat/Chat";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { anchors, PRIMARY_CTA, SECONDARY_CTA } from "@/lib/site";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-white">
      <Blobs />
      <Container className="relative grid items-center gap-12 pt-8 pb-16 sm:pt-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pt-16 lg:pb-24">
        <div className="max-w-xl">
          <h1 id="hero-title" className="type-h1 text-balance text-ink">
            Todo lo importante de la escuela, <span className="text-primary">en un solo lugar.</span>
          </h1>
          <p className="mt-5 text-lg text-pretty text-ink-muted">
            Mochi organiza mensajes, tareas, eventos y recordatorios y te acompaña directamente por{" "}
            <strong className="font-extrabold text-ink">WhatsApp o Telegram</strong>.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={anchors.earlyAccess}>{PRIMARY_CTA}</ButtonLink>
            <ButtonLink href={anchors.howItWorks} variant="secondary">
              {SECONDARY_CTA}
              <ArrowDown className="size-4" aria-hidden="true" />
            </ButtonLink>
          </div>

          <ul className="mt-8 flex flex-wrap gap-2 text-sm font-bold text-ink" aria-label="Dónde funciona Mochi">
            <li className="inline-flex items-center gap-1.5 rounded-full bg-mint-50 px-3 py-1.5">
              <MessageCircle className="size-4 text-[#1a7a6f]" aria-hidden="true" /> Por WhatsApp
            </li>
            <li className="inline-flex items-center gap-1.5 rounded-full bg-primary-50 px-3 py-1.5">
              <Send className="size-4 text-deep" aria-hidden="true" /> O por Telegram
            </li>
            <li className="inline-flex items-center rounded-full bg-yellow-50 px-3 py-1.5">Sin instalar otra app</li>
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-[400px] lg:max-w-[440px]">
          <Mascot
            pose="hola"
            priority
            sizes="(min-width: 1024px) 220px, 120px"
            className="absolute -top-6 -left-4 z-10 w-28 sm:-left-16 sm:w-40 lg:top-auto lg:-bottom-6 lg:-left-28 lg:w-52"
          />
          <PhoneFrame className="ml-auto w-[88%] sm:w-[78%] lg:w-[80%]">
            <ChatWindow
              label="Ejemplo de conversación con Mochi por WhatsApp: qué recordar para mañana."
              className="rounded-none border-0 shadow-none"
              bodyClassName="min-h-[380px]"
            >
              <DayDivider>Hoy</DayDivider>
              <Bubble from="user" time="20:14">
                ¿Qué tengo que recordar para mañana?
              </Bubble>
              <Bubble from="mochi" time="20:14">
                <p>
                  Mañana tenés <strong>3 cosas importantes</strong>:
                </p>
                <ChatList
                  items={[
                    { emoji: "🎒", text: "Llevar materiales de Plástica" },
                    { emoji: "📚", text: "Entregar tarea de Matemática" },
                    { emoji: "⚽", text: "Educación Física a las 10:30" },
                  ]}
                />
              </Bubble>
              <Bubble from="mochi" time="20:14" actions={["Recordámelo 7:30", "Ver la semana"]}>
                <p>Te dejo la lista de materiales 👇</p>
                <FileCard name="Materiales Plástica.pdf" meta="PDF · 1 página" />
              </Bubble>
            </ChatWindow>
          </PhoneFrame>
        </div>
      </Container>
    </section>
  );
}

function Blobs() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <span className="absolute -top-24 right-[-8rem] size-[28rem] rounded-full bg-primary-50" />
      <span className="absolute top-1/2 right-[18%] size-40 rounded-full bg-yellow-50" />
      <span className="absolute bottom-[-6rem] left-[-6rem] size-72 rounded-full bg-mint-50" />
    </div>
  );
}
