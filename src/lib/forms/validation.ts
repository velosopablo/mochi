/** Validación en el cliente, antes de enviar a Formspree. Devuelve { nombreDeCampo: mensaje }. */

export type FieldErrors = Partial<Record<string, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function read(fd: FormData, name: string) {
  const value = fd.get(name);
  return typeof value === "string" ? value.trim() : "";
}

function compact(errors: FieldErrors): FieldErrors {
  return Object.fromEntries(Object.entries(errors).filter(([, v]) => Boolean(v)));
}

function required(fd: FormData, name: string, message: string) {
  return read(fd, name) ? undefined : message;
}

function email(fd: FormData) {
  const value = read(fd, "email");
  if (!value) return "Necesitamos tu email para poder responderte.";
  if (!EMAIL_RE.test(value)) return "Revisá el email: parece incompleto.";
  return undefined;
}

function maxLength(fd: FormData, name: string, max: number) {
  return read(fd, name).length > max ? `Máximo ${max} caracteres.` : undefined;
}

export function validateFamily(fd: FormData) {
  return compact({
    nombre: required(fd, "nombre", "Contanos cómo te llamás."),
    email: email(fd),
    edad_hijo_rango: fd.getAll("edad_hijo_rango").length ? undefined : "Elegí al menos una edad.",
    situaciones: fd.getAll("situaciones").length ? undefined : "Elegí al menos una situación. Nos ayuda muchísimo.",
    detalle: maxLength(fd, "detalle", 1500),
  });
}

export function validateSchool(fd: FormData) {
  return compact({
    nombre: required(fd, "nombre", "Contanos cómo te llamás."),
    email: email(fd),
    institucion: required(fd, "institucion", "Indicá el nombre de la institución."),
    rol: required(fd, "rol", "Indicá tu rol en la institución."),
    detalle: required(fd, "detalle", "Contanos brevemente qué te gustaría explorar.") ?? maxLength(fd, "detalle", 2000),
  });
}
