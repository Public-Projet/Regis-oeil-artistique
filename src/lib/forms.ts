import { z } from "zod";

const dateString = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, "Date invalide");

const optionalText = (max: number) => z.string().trim().max(max).optional().or(z.literal(""));

/* ---------------- Contact (page d'accueil) ---------------- */

export const contactServices = [
  "Mariage",
  "Événement / Culturel",
  "Portrait / Book",
  "Académique / Remise de diplômes",
  "Corporate / Entreprise",
  "Projet créatif / Drone",
  "Tirage d'art / Retouche",
  "Autre",
] as const;

export const contactBudgets = [
  "Moins de 50 000 FCFA",
  "50 000 – 150 000 FCFA",
  "150 000 – 300 000 FCFA",
  "Plus de 300 000 FCFA",
  "À définir",
] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Nom trop court").max(100),
  email: z.string().trim().email("Email invalide").max(255),
  phone: z.string().trim().max(30, "Numéro trop long").optional().or(z.literal("")),
  service: z.enum(contactServices, { message: "Choisissez une prestation" }),
  date: dateString,
  time: z
    .string()
    .regex(/^\d{2}:\d{2}$/, "Heure invalide")
    .optional()
    .or(z.literal("")),
  location: optionalText(150),
  guests: optionalText(20),
  budget: z.enum(contactBudgets).optional().or(z.literal("")),
  subject: z.string().trim().min(2, "Sujet requis").max(120),
  message: z.string().trim().min(10, "Message trop court").max(1500),
});

export type ContactInput = z.infer<typeof contactSchema>;

/* ---------------- Formation ---------------- */

export const formationLevels = ["Débutant", "Intermédiaire", "Avancé"] as const;
export const formationProgrammes = [
  "Initiation",
  "Lightroom",
  "Photoshop",
  "Formation Complète",
  "Accompagnement Individuel",
  "Je ne sais pas encore",
] as const;
export const formationEquipment = [
  "Reflex",
  "Hybride",
  "Smartphone",
  "Pas encore d'appareil",
] as const;
export const formationModes = ["Présentiel (Porto-Novo)", "En ligne", "Indifférent"] as const;
export const formationSlots = [
  "Semaine — matin",
  "Semaine — après-midi",
  "Semaine — soir",
  "Samedi",
  "Dimanche",
] as const;
export const formationObjectives = [
  "Loisir / passion",
  "Devenir photographe professionnel",
  "Créer du contenu (réseaux sociaux)",
  "Améliorer mon activité actuelle",
  "Autre",
] as const;

export const formationSchema = z.object({
  name: z.string().trim().min(2, "Nom trop court").max(100),
  email: z.string().trim().email("Email invalide").max(255),
  phone: z.string().trim().min(8, "Numéro requis").max(30, "Numéro trop long"),
  address: z.string().trim().min(3, "Adresse requise").max(200),
  level: z.enum(formationLevels, { message: "Choisissez votre niveau" }),
  programme: z.enum(formationProgrammes, { message: "Choisissez une formation" }),
  equipment: z.enum(formationEquipment, { message: "Indiquez votre matériel" }),
  mode: z.enum(formationModes, { message: "Choisissez un format" }),
  availability: z.array(z.enum(formationSlots)).min(1, "Choisissez au moins un créneau"),
  startDate: dateString.optional().or(z.literal("")),
  objective: z.enum(formationObjectives, { message: "Choisissez un objectif" }),
  details: optionalText(1500),
});

export type FormationInput = z.infer<typeof formationSchema>;

/* ---------------- Résumés (email + WhatsApp) ---------------- */

export function formatDateFr(iso?: string) {
  if (!iso) return "";
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
}

type Line = [label: string, value: string | undefined];

function lines(rows: Line[]) {
  return rows.filter(([, v]) => v && v.trim() !== "");
}

export function contactSummaryRows(d: ContactInput) {
  return lines([
    ["Nom", d.name],
    ["Email", d.email],
    ["Téléphone", d.phone],
    ["Prestation", d.service],
    ["Date", formatDateFr(d.date)],
    ["Heure", d.time],
    ["Lieu", d.location],
    ["Invités / personnes", d.guests],
    ["Budget", d.budget],
    ["Sujet", d.subject],
    ["Message", d.message],
  ]);
}

export function formationSummaryRows(d: FormationInput) {
  return lines([
    ["Nom", d.name],
    ["Email", d.email],
    ["Téléphone", d.phone],
    ["Adresse", d.address],
    ["Niveau", d.level],
    ["Formation souhaitée", d.programme],
    ["Matériel", d.equipment],
    ["Format", d.mode],
    ["Disponibilités", d.availability.join(", ")],
    ["Début souhaité", formatDateFr(d.startDate)],
    ["Objectif", d.objective],
    ["Précisions", d.details],
  ]);
}

export function whatsappSummary(intro: string, rows: [string, string | undefined][]) {
  return `${intro}\n\n${rows.map(([k, v]) => `• ${k} : ${v}`).join("\n")}`;
}
