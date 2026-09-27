import {
  CalendarDays,
  FileText,
  GraduationCap,
  LayoutGrid,
  Mail,
  MessageCircle,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

/**
 * Fuentes digitales con las que Mochi puede trabajar. Cada mecanismo depende del caso
 * (integraciones disponibles, reenvío, calendarios compartidos…): no son integraciones automáticas garantizadas.
 */
export const sources: Array<{ icon: LucideIcon; label: string }> = [
  { icon: LayoutGrid, label: "Plataforma escolar" },
  { icon: Mail, label: "Email" },
  { icon: GraduationCap, label: "Google Classroom / LMS" },
  { icon: CalendarDays, label: "Calendario" },
  { icon: MessageCircle, label: "WhatsApp" },
  { icon: FileText, label: "Documentos PDF" },
  { icon: ShieldCheck, label: "Otras fuentes digitales autorizadas" },
];
