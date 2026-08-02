import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/contact-links";

export function WhatsAppFab() {
  return (
    <a
      href={whatsappUrl("Bonjour Régis, je vous contacte depuis votre site.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Écrire sur WhatsApp"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 rounded-full bg-[var(--ink)] text-[var(--cream)] pl-4 pr-4 py-4 shadow-[var(--shadow-pro)] transition-all hover:pr-6 hover:bg-[var(--ochre-deep)]"
    >
      <MessageCircle size={22} />
      <span className="hidden sm:inline max-w-0 overflow-hidden whitespace-nowrap text-xs uppercase tracking-widest transition-all duration-300 group-hover:max-w-[10rem]">
        Écrire sur WhatsApp
      </span>
    </a>
  );
}
