import { CheckCircle2, MessageCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { whatsappUrl } from "@/lib/contact-links";

export function WhatsAppCopyDialog({
  open,
  onOpenChange,
  message,
  title = "Votre demande a bien été envoyée",
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  message: string;
  title?: string;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md rounded-sm">
        <DialogHeader>
          <CheckCircle2 size={36} className="text-accent" />
          <DialogTitle className="font-display text-3xl font-normal leading-tight pt-2">{title}</DialogTitle>
          <DialogDescription className="text-sm leading-relaxed">
            Merci ! Régis vous répondra sous 48 h. Souhaitez-vous aussi envoyer une copie de votre
            demande par WhatsApp pour une réponse plus rapide ?
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 flex flex-col sm:flex-row gap-3">
          <a
            href={whatsappUrl(message)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => onOpenChange(false)}
            className="btn-primary justify-center flex-1"
          >
            <MessageCircle size={16} /> Envoyer sur WhatsApp
          </a>
          <button type="button" onClick={() => onOpenChange(false)} className="btn-ghost justify-center">
            Non merci
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
