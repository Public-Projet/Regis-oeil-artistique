import type { PhotoCategory } from "@/data/photos";

export const WHATSAPP_NUMBER = "2290167560496";
export const PHONE_DISPLAY = "+229 01 67 56 04 96";

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Maps a service slug to the closest gallery category filter. */
const serviceToGallery: Record<string, "Tout" | PhotoCategory> = {
  mariage: "Mariage",
  evenements: "Événements",
  portraits: "Portrait",
  vie: "Corporate",
  commercial: "Corporate",
  "media-drone": "Nature",
  retouche: "Portrait",
  formations: "Tout",
};

export function galleryFilterForService(slug: string): "Tout" | PhotoCategory {
  return serviceToGallery[slug] ?? "Tout";
}

/** Prefilled subject/message for the contact form on the home page. */
export function quotePrefill(serviceTitle: string, formulaName?: string) {
  const subject = formulaName
    ? `Devis · ${serviceTitle} — formule ${formulaName}`
    : `Devis · ${serviceTitle}`;
  const message = formulaName
    ? `Bonjour Régis,\n\nJe souhaite un devis pour la prestation « ${serviceTitle} » (formule ${formulaName}).\n\nDate envisagée : \nLieu : \nDétails du projet : \n\nMerci !`
    : `Bonjour Régis,\n\nJe souhaite un devis pour la prestation « ${serviceTitle} ».\n\nDate envisagée : \nLieu : \nDétails du projet : \n\nMerci !`;
  return { subject, message };
}
