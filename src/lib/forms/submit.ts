import type {
  ContactPayload,
  EarlyAccessPayload,
  SubmissionMeta,
  SubmitResult,
} from "./types";

/**
 * Punto único de salida de los formularios.
 *
 * Hoy no hay backend: si `NEXT_PUBLIC_FORMS_ENDPOINT` no está definido, los envíos
 * se simulan (latencia incluida) y NO se guardan en ningún lado.
 *
 * Para conectar un proveedor real (API propia, Supabase, Firebase, HubSpot, CRM…)
 * alcanza con reemplazar `transport`. El resto de la UI no necesita cambios.
 */

type FormKind = "early-access" | "contact";

interface Envelope<T> {
  form: FormKind;
  data: T;
  meta: SubmissionMeta;
}

type Transport = <T>(envelope: Envelope<T>) => Promise<SubmitResult>;

const GENERIC_ERROR =
  "No pudimos enviar el formulario. Revisá tu conexión e intentá de nuevo en unos segundos.";

const endpoint = process.env.NEXT_PUBLIC_FORMS_ENDPOINT;

/** Envía el envío como JSON a un endpoint HTTP propio. */
const httpTransport =
  (url: string): Transport =>
  async (envelope) => {
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(envelope),
      });
      return res.ok ? { ok: true } : { ok: false, message: GENERIC_ERROR };
    } catch {
      return { ok: false, message: GENERIC_ERROR };
    }
  };

/**
 * Simulación para desarrollo y demos. Un email que contenga "+error"
 * fuerza el estado de error, útil para revisar la UI.
 */
const mockTransport: Transport = async (envelope) => {
  await new Promise((resolve) => setTimeout(resolve, 900));
  const email = (envelope.data as { email?: string }).email ?? "";
  if (email.includes("+error")) return { ok: false, message: GENERIC_ERROR };
  if (process.env.NODE_ENV !== "production") {
    console.info(`[Mochi] Envío simulado (${envelope.form})`, envelope);
  }
  return { ok: true };
};

const transport: Transport = endpoint ? httpTransport(endpoint) : mockTransport;

function collectMeta(): SubmissionMeta {
  const utm: Record<string, string> = {};
  let page = "";
  if (typeof window !== "undefined") {
    page = window.location.pathname;
    new URLSearchParams(window.location.search).forEach((value, key) => {
      if (key.startsWith("utm_")) utm[key] = value;
    });
  }
  return { submittedAt: new Date().toISOString(), page, utm };
}

export function submitEarlyAccessForm(data: EarlyAccessPayload) {
  return transport({ form: "early-access", data, meta: collectMeta() });
}

export function submitContactForm(data: ContactPayload) {
  return transport({ form: "contact", data, meta: collectMeta() });
}
