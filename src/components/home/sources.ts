import {
  BookOpen,
  CalendarDays,
  FileText,
  LayoutGrid,
  Mail,
  MessageCircle,
  UserRound,
  type LucideIcon,
} from "lucide-react";

/** Los lugares por donde hoy llega la información escolar. */
export const sources: Array<{ icon: LucideIcon; label: string; snippet: string }> = [
  { icon: MessageCircle, label: "Grupo de WhatsApp", snippet: "“¿Alguien sabe si mañana hay que llevar…?”" },
  { icon: Mail, label: "Mails", snippet: "Comunicado Nº 14 · Actividades del mes" },
  { icon: FileText, label: "PDFs", snippet: "circular_final_v2.pdf" },
  { icon: LayoutGrid, label: "Plataforma escolar", snippet: "Nueva publicación en 4.º B" },
  { icon: BookOpen, label: "Cuaderno", snippet: "“Firmar la nota de la salida”" },
  { icon: CalendarDays, label: "Calendario", snippet: "¿El acto se pasó al viernes?" },
  { icon: UserRound, label: "Mensajes de docentes", snippet: "“Recuerden traer la flauta”" },
];
