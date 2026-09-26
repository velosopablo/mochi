export const childAgeRanges = ["6–8", "9–11", "12–14", "15–17"] as const;
export type ChildAgeRange = (typeof childAgeRanges)[number];

export const painPoints = [
  { value: "demasiadas-plataformas", label: "Tengo que revisar demasiadas plataformas." },
  { value: "nos-enteramos-tarde", label: "Nos enteramos tarde de tareas o evaluaciones." },
  { value: "se-pasan-autorizaciones", label: "Se nos pasan autorizaciones o comunicaciones." },
  { value: "recordar-constantemente", label: "Tengo que recordarle constantemente cosas a mi hijo/a." },
  { value: "cuesta-priorizar", label: "Me cuesta entender qué deberíamos priorizar." },
  { value: "informacion-confusa", label: "La información suele ser confusa o contradictoria." },
  { value: "otro", label: "Otro." },
] as const;
export type PainPoint = (typeof painPoints)[number]["value"];
