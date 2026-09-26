import type {
  EarlyAccessPayload,
  FamilyContactPayload,
  FieldErrors,
  SchoolContactPayload,
} from "./types";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function required(value: string, message: string) {
  return value.trim() ? undefined : message;
}

function email(value: string) {
  if (!value.trim()) return "Necesitamos tu email para poder escribirte.";
  if (!EMAIL_RE.test(value.trim())) return "Revisá el email: parece incompleto.";
  return undefined;
}

function maxLength(value: string, max: number) {
  return value.length > max ? `Máximo ${max} caracteres.` : undefined;
}

function compact<T>(errors: FieldErrors<T>): FieldErrors<T> {
  return Object.fromEntries(
    Object.entries(errors).filter(([, v]) => Boolean(v)),
  ) as FieldErrors<T>;
}

export function validateEarlyAccess(data: EarlyAccessPayload) {
  return compact<EarlyAccessPayload>({
    name: required(data.name, "Contanos cómo te llamás."),
    email: email(data.email),
    childAges: data.childAges.length ? undefined : "Elegí al menos una edad.",
    painPoints: data.painPoints.length
      ? undefined
      : "Elegí al menos una situación. Nos ayuda muchísimo.",
    biggestStruggle: maxLength(data.biggestStruggle, 1500),
  });
}

export function validateFamilyContact(data: FamilyContactPayload) {
  return compact<FamilyContactPayload>({
    name: required(data.name, "Contanos cómo te llamás."),
    email: email(data.email),
    message:
      required(data.message, "Escribinos un mensaje breve.") ?? maxLength(data.message, 2000),
  });
}

export function validateSchoolContact(data: SchoolContactPayload) {
  return compact<SchoolContactPayload>({
    institution: required(data.institution, "Indicá el nombre de la institución."),
    name: required(data.name, "Contanos cómo te llamás."),
    role: required(data.role, "Indicá tu rol en la institución."),
    email: email(data.email),
    message:
      required(data.message, "Escribinos un mensaje breve.") ?? maxLength(data.message, 2000),
  });
}
