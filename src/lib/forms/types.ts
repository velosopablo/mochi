import type { Channel, ChildAgeRange, PainPoint } from "./options";

export type FormStatus = "idle" | "loading" | "success" | "error";

export type SubmitResult = { ok: true } | { ok: false; message: string };

export type FieldErrors<T> = Partial<Record<keyof T, string>>;

export interface EarlyAccessPayload {
  name: string;
  email: string;
  childAges: ChildAgeRange[];
  painPoints: PainPoint[];
  painPointOther: string;
  biggestStruggle: string;
  /** Por dónde prefiere conversar con Mochi. Vacío si no respondió. */
  preferredChannel: Channel | "";
  pilotInterest: boolean;
}

export interface FamilyContactPayload {
  type: "familia";
  name: string;
  email: string;
  childAges: ChildAgeRange[];
  message: string;
  pilotInterest: boolean;
}

export interface SchoolContactPayload {
  type: "escuela";
  institution: string;
  name: string;
  role: string;
  email: string;
  message: string;
  wantsDemo: boolean;
}

export type ContactPayload = FamilyContactPayload | SchoolContactPayload;

/** Contexto de marketing que viaja junto a cada envío. */
export interface SubmissionMeta {
  submittedAt: string;
  page: string;
  utm: Record<string, string>;
}
