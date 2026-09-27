/**
 * Opciones de los formularios. El `value` es el texto que llega a Formspree,
 * por eso es legible tal cual (no slugs).
 */

export const edadHijoRangos = ["6–8", "9–11", "12–14", "15–17"] as const;

export const situaciones = [
  "Tengo que revisar demasiados lugares.",
  "Nos enteramos tarde de tareas o evaluaciones.",
  "Se nos pasan autorizaciones o comunicaciones.",
  "Tengo que recordarle constantemente cosas a mi hijo/a.",
  "Me cuesta entender qué deberíamos priorizar.",
  "La información a veces es difícil de encontrar o interpretar.",
  "Otro.",
] as const;

export const SITUACION_OTRO = "Otro.";

export const canales = ["WhatsApp", "Telegram", "Me da igual"] as const;

export const cantidadAlumnos = ["Menos de 200", "Entre 200 y 500", "Entre 500 y 1000", "Más de 1000"] as const;
