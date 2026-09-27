import { CalendarCheck, CheckCheck, ChevronLeft, FileText, Mic, MoreVertical, Smile } from "lucide-react";
import { MochiAvatar } from "@/components/brand/Mascot";
import { cn } from "@/lib/cn";

/**
 * Piezas para dibujar conversaciones con Mochi al estilo WhatsApp / Telegram.
 * Son HTML real: nítidas, livianas y legibles por lectores de pantalla.
 * Todos los mensajes son ejemplos ficticios.
 */

export function ChatWindow({
  label,
  className,
  bodyClassName,
  children,
  composer = true,
}: {
  /** Descripción accesible de la conversación. */
  label: string;
  className?: string;
  bodyClassName?: string;
  children: React.ReactNode;
  composer?: boolean;
}) {
  return (
    <figure
      aria-label={label}
      className={cn("flex flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-soft", className)}
    >
      <ChatHeader />
      <ol role="list" className={cn("chat-wallpaper flex flex-1 flex-col gap-2 px-3 py-4", bodyClassName)}>
        {children}
      </ol>
      {composer && <ChatComposer />}
    </figure>
  );
}

function ChatHeader() {
  return (
    <div className="flex items-center gap-2.5 border-b border-line bg-white px-3 py-2.5" aria-hidden="true">
      <ChevronLeft className="size-5 text-ink-muted" />
      <MochiAvatar />
      <div className="min-w-0 flex-1 leading-tight">
        <p className="text-[15px] font-extrabold text-ink">Mochi</p>
        <p className="text-xs font-semibold text-[#1a7a6f]">en línea</p>
      </div>
      <MoreVertical className="size-5 text-ink-muted" />
    </div>
  );
}

function ChatComposer() {
  return (
    <div className="flex items-center gap-2 border-t border-line bg-white px-3 py-2.5" aria-hidden="true">
      <div className="flex h-10 flex-1 items-center gap-2 rounded-full bg-bg px-3 text-sm text-ink-muted">
        <Smile className="size-5" />
        Escribí un mensaje
      </div>
      <span className="grid size-10 place-items-center rounded-full bg-primary-strong text-white">
        <Mic className="size-5" />
      </span>
    </div>
  );
}

/** Frame de teléfono para el hero. */
export function PhoneFrame({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "relative rounded-[2.75rem] bg-[#16213a] p-2.5 shadow-[0_40px_80px_-30px_rgb(30_91_184/0.55)]",
        className,
      )}
    >
      <span aria-hidden="true" className="absolute top-4 left-1/2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-[#16213a]" />
      <div className="overflow-hidden rounded-[2.2rem] bg-white pt-6">{children}</div>
    </div>
  );
}

export function DayDivider({ children }: { children: React.ReactNode }) {
  return (
    <li className="my-1 self-center rounded-full bg-white/80 px-3 py-0.5 text-[11px] font-bold tracking-wide text-ink-muted uppercase">
      {children}
    </li>
  );
}

export function Bubble({
  from,
  time,
  children,
  actions,
  className,
}: {
  from: "user" | "mochi";
  time?: string;
  children: React.ReactNode;
  /** Botones rápidos pegados al globo (estilo Telegram). */
  actions?: string[];
  className?: string;
}) {
  const isUser = from === "user";
  return (
    <li className={cn("flex max-w-[88%] flex-col", isUser ? "self-end items-end" : "self-start items-start", className)}>
      <div
        className={cn(
          "relative rounded-2xl px-3.5 py-2 text-[15px] leading-snug text-ink shadow-[0_1px_1px_rgb(61_74_99/0.08)]",
          isUser ? "rounded-tr-md bg-bubble-out" : "rounded-tl-md bg-white",
        )}
      >
        <span className="sr-only">{isUser ? "Vos: " : "Mochi: "}</span>
        <div className="space-y-1.5">{children}</div>
        {time && (
          <span className="mt-1 flex items-center justify-end gap-1 text-[11px] font-semibold text-ink-muted" aria-hidden="true">
            {time}
            {isUser && <CheckCheck className="size-3.5 text-primary" />}
          </span>
        )}
      </div>
      {actions && <QuickReplies options={actions} />}
    </li>
  );
}

/** Lista con emoji: el formato que Mochi usa para resumir. */
export function ChatList({ items }: { items: Array<{ emoji: string; text: React.ReactNode }> }) {
  return (
    <ul className="space-y-1">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2">
          <span aria-hidden="true">{item.emoji}</span>
          <span>{item.text}</span>
        </li>
      ))}
    </ul>
  );
}

export function FileCard({ name, meta }: { name: string; meta: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-bg p-2.5">
      <span className="grid h-10 w-9 shrink-0 place-items-center rounded-md bg-coral-50 text-[#c2412f]">
        <FileText className="size-5" aria-hidden="true" />
      </span>
      <span className="min-w-0 leading-tight">
        <span className="block truncate text-sm font-bold text-ink">{name}</span>
        <span className="text-xs text-ink-muted">{meta}</span>
      </span>
    </div>
  );
}

export function EventCard({
  title,
  when,
  where,
  status = "Agendado",
}: {
  title: string;
  when: string;
  where?: string;
  status?: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-line">
      <div className="flex items-start gap-3 bg-primary-50 p-3">
        <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-white text-deep">
          <CalendarCheck className="size-5" aria-hidden="true" />
        </span>
        <span className="leading-tight">
          <span className="block text-sm font-extrabold text-ink">{title}</span>
          <span className="block text-[13px] text-ink-muted">{when}</span>
          {where && <span className="block text-[13px] text-ink-muted">{where}</span>}
        </span>
      </div>
      <p className="bg-white px-3 py-1.5 text-xs font-bold text-[#1a7a6f]">✓ {status}</p>
    </div>
  );
}

type Tone = "amber" | "green" | "blue" | "coral";

const chipTones: Record<Tone, string> = {
  amber: "bg-yellow-50 text-[#7a5600]",
  green: "bg-mint-50 text-[#1a6b62]",
  blue: "bg-primary-50 text-deep",
  coral: "bg-coral-50 text-[#a63526]",
};

const accentTones: Record<Tone, string> = {
  amber: "bg-yellow",
  green: "bg-mint",
  blue: "bg-primary",
  coral: "bg-coral",
};

/** Chip de estado dentro de un mensaje (no depende sólo del color: siempre lleva texto). */
export function StatusChip({ tone, children, className }: { tone: Tone; children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-extrabold whitespace-nowrap",
        chipTones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Tarjeta de acción dentro de un mensaje: materia, qué hay que hacer y cuándo / prioridad. */
export function TaskCard({
  subject,
  detail,
  status,
  tone = "blue",
}: {
  subject: string;
  detail: string;
  status: string;
  tone?: Tone;
}) {
  return (
    <div className="flex items-stretch gap-2.5 rounded-xl border border-line bg-white p-2.5">
      <span aria-hidden="true" className={cn("w-1 shrink-0 rounded-full", accentTones[tone])} />
      <span className="flex min-w-0 flex-1 flex-wrap items-center justify-between gap-x-2 gap-y-1">
        <span className="leading-tight">
          <span className="block text-sm font-extrabold text-ink">{subject}</span>
          <span className="block text-[13px] text-ink-muted">{detail}</span>
        </span>
        <StatusChip tone={tone}>{status}</StatusChip>
      </span>
    </div>
  );
}

/**
 * Bloque por hijo/a dentro de una respuesta: separa la información de cada hermano
 * (familia → hijo → curso → actividad → fecha).
 */
export function ChildBlock({
  name,
  grade,
  tone = "blue",
  items,
}: {
  name: string;
  grade: string;
  tone?: Tone;
  items: Array<{ emoji: string; text: React.ReactNode }>;
}) {
  return (
    <div className="rounded-xl border border-line bg-white p-2.5">
      <p className="flex items-center gap-2 text-xs font-extrabold tracking-wide text-ink uppercase">
        <span aria-hidden="true" className={cn("size-2.5 rounded-full", accentTones[tone])} />
        {name} <span className="font-bold text-ink-muted">· {grade}</span>
      </p>
      <div className="mt-1.5 text-[14px]">
        <ChatList items={items} />
      </div>
    </div>
  );
}

function QuickReplies({ options }: { options: string[] }) {
  return (
    <div className="mt-1 flex w-full flex-wrap gap-1.5" aria-hidden="true">
      {options.map((o) => (
        <span
          key={o}
          className="flex-1 rounded-xl bg-white/90 px-3 py-1.5 text-center text-[13px] font-bold whitespace-nowrap text-deep shadow-[0_1px_1px_rgb(61_74_99/0.08)]"
        >
          {o}
        </span>
      ))}
    </div>
  );
}
