/**
 * Formulario de Formspree que recibe todos los envíos de la web (familias y colegios).
 * Se distinguen por el campo `tipo_contacto`. Puede sobrescribirse con
 * `NEXT_PUBLIC_FORMSPREE_FORM_ID` (por ejemplo, para un formulario de pruebas).
 */
export const FORMSPREE_FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || "xzezkjaa";

/** Valor fijo del campo `origen`. */
export const ORIGEN = "Landing Mochi";

/** Mensaje de éxito: "¡Gracias! Recibimos tu mensaje. Si marcaste…". Título + cuerpo para el panel. */
export const SUCCESS_TITLE = "¡Gracias!";
export const SUCCESS_BODY =
  "Recibimos tu mensaje. Si marcaste que querés participar del piloto, te tendremos en cuenta para las próximas pruebas de Mochi.";

export const PRIVACY_NOTE =
  "Usaremos estos datos únicamente para responder tu consulta, conocer tu interés en Mochi y, si lo autorizás, contactarte por el programa piloto.";

export const GENERIC_ERROR =
  "No pudimos enviar el formulario. Revisá tu conexión e intentá de nuevo en unos segundos.";
