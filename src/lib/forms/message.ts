import { ORIGEN } from "./formspree";

/**
 * Resumen legible que viaja en el campo oculto `message`, para que el email de
 * Formspree se entienda de un vistazo. Se envía ADEMÁS de los campos individuales.
 */

function read(fd: FormData, name: string) {
  const value = fd.get(name);
  return typeof value === "string" ? value.trim() : "";
}

function readList(fd: FormData, name: string) {
  return fd
    .getAll(name)
    .filter((v): v is string => typeof v === "string" && v.trim() !== "")
    .map((v) => v.trim());
}

function orDash(value: string) {
  return value || "—";
}

function pilot(fd: FormData) {
  return fd.get("interes_piloto") ? "Sí" : "No";
}

export function buildFamilyMessage(fd: FormData) {
  const situaciones = readList(fd, "situaciones");
  const otro = read(fd, "situaciones_otro");
  const situacionesTexto = situaciones.map((s) => (s === "Otro." && otro ? `Otro: ${otro}` : s)).join("; ");

  return [
    "Nuevo contacto Mochi",
    "",
    "Tipo: Familia",
    `Nombre: ${orDash(read(fd, "nombre"))}`,
    `Email: ${orDash(read(fd, "email"))}`,
    `Edad del hijo/a: ${orDash(readList(fd, "edad_hijo_rango").join(", "))}`,
    `Situaciones seleccionadas: ${orDash(situacionesTexto)}`,
    `Canal preferido: ${orDash(read(fd, "canal_preferido"))}`,
    `Interés en piloto: ${pilot(fd)}`,
    `Detalle: ${orDash(read(fd, "detalle"))}`,
    `Origen: ${ORIGEN}`,
  ].join("\n");
}

export function buildSchoolMessage(fd: FormData) {
  return [
    "Nuevo contacto Mochi",
    "",
    "Tipo: Colegio",
    `Nombre: ${orDash(read(fd, "nombre"))}`,
    `Email: ${orDash(read(fd, "email"))}`,
    `Institución: ${orDash(read(fd, "institucion"))}`,
    `Rol: ${orDash(read(fd, "rol"))}`,
    `Cantidad aproximada de alumnos: ${orDash(read(fd, "cantidad_alumnos"))}`,
    `Interés en piloto: ${pilot(fd)}`,
    `Detalle: ${orDash(read(fd, "detalle"))}`,
    `Origen: ${ORIGEN}`,
  ].join("\n");
}
