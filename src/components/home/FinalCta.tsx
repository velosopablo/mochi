import { FamilyForm } from "@/components/forms/FamilyForm";
import { Mascot } from "@/components/brand/Mascot";
import { Bubble, ChatWindow } from "@/components/chat/Chat";
import { Container } from "@/components/ui/Container";

export function FinalCta() {
  return (
    <section id="probar" aria-labelledby="probar-title" className="relative overflow-hidden bg-primary-50 py-16 sm:py-20 lg:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <span className="absolute -top-20 -left-20 size-72 rounded-full bg-white/60" />
        <span className="absolute right-[-5rem] bottom-[-5rem] size-80 rounded-full bg-mint-50" />
      </div>
      <Container className="relative grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 id="probar-title" className="type-h2 text-balance text-ink">
            Menos tiempo buscando. Más tiempo acompañando.
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            Mochi está siendo construido junto a familias. Contanos cómo se organizan hoy y, si querés, sumate a las primeras pruebas.
          </p>

          <div className="mt-8 flex items-end gap-3">
            <Mascot pose="feliz" sizes="160px" className="w-28 shrink-0 sm:w-36" decorative />
            <ChatWindow label="Mochi te invita a sumarte al piloto." composer={false} className="flex-1" bodyClassName="py-3">
              <Bubble from="mochi" time="ahora">
                <p>¡Hola! 👋 Soy Mochi.</p>
                <p>Todavía estoy aprendiendo. Si te interesa, te tenemos en cuenta para las primeras pruebas por WhatsApp o Telegram.</p>
              </Bubble>
            </ChatWindow>
          </div>
        </div>

        <div className="rounded-3xl border border-line bg-white p-5 shadow-lift sm:p-8">
          <h3 className="type-h4 text-ink">Quiero probar Mochi</h3>
          <p className="mt-1 mb-6 text-[15px] text-ink-muted">Te lleva menos de 2 minutos.</p>
          <FamilyForm />
        </div>
      </Container>
    </section>
  );
}
