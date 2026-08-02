import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, ExternalLink } from "lucide-react";
import logo from "@/assets/logos.png.asset.json";

function TikTokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.88 2.89 2.89 0 01-2.88-2.88 2.89 2.89 0 012.88-2.88c.23 0 .45.03.66.08V10.3a6.37 6.37 0 00-.66-.04A6.34 6.34 0 000 16.61a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.8a8.13 8.13 0 004.77 1.53V6.69h-1.86z" />
    </svg>
  );
}

function FlickrIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <circle cx="7" cy="12" r="5" />
      <circle cx="17" cy="12" r="5" opacity="0.6" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background mt-32">
      <div className="container-x py-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={logo.dw} alt="Regis l'oeil artistique" className="h-24 w-auto" />
          <p className="mt-4 text-sm opacity-70 max-w-sm">
            Studio photographique basé à Porto-Novo, Bénin. Portraits, mariages, reportages
            éditoriaux et corporate.
          </p>
          <div className="signature mt-6" style={{ color: "var(--ochre)" }}>
            S. Régis HOUINSOU
          </div>
        </div>

        <div>
          <div className="eyebrow text-background/80">Navigation</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-accent">Accueil</Link></li>
            <li><Link to="/galerie" search={{ cat: "Tout" }} className="hover:text-accent">Galerie</Link></li>
            <li><Link to="/articles" className="hover:text-accent">Journal</Link></li>
            <li><Link to="/mentions-legales" className="hover:text-accent">Mentions légales</Link></li>
          </ul>
        </div>

        <div>
          <div className="eyebrow text-background/80">Contact</div>
          <ul className="mt-4 space-y-2 text-sm opacity-80">
            <li>Porto-Novo, Bénin</li>
            <li>regisphotography5@gmail.com</li>
            <li>+229 01 67 56 04 96</li>
          </ul>
          <div className="mt-5 flex gap-4">
            <a href="https://linktr.ee/regishouinsou" target="_blank" rel="noopener noreferrer" aria-label="Linktree" className="hover:text-accent"><ExternalLink size={20} /></a>
            <a href="https://www.facebook.com/regisoeilartistique" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-accent"><Facebook size={20} /></a>
            <a href="https://www.instagram.com/regisphotography229" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-accent"><Instagram size={20} /></a>
            <a href="https://www.tiktok.com/@regishouinsou67" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:text-accent"><TikTokIcon size={20} /></a>
            <a href="http://flic.kr/ps/459Qiq" target="_blank" rel="noopener noreferrer" aria-label="Flickr" className="hover:text-accent"><FlickrIcon size={20} /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between text-xs opacity-60">
          <div>© {new Date().getFullYear()} Régis Houinsou - Tous droits réservés</div>
          <div className="mt-2 md:mt-0">Conçu par <a href="https://stafprint.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">STAF PRINT CENTER</a></div>
        </div>
      </div>
    </footer>
  );
}
