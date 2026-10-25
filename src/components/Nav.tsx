import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const sectionLinks = [
  { href: "/about", label: "À propos" },
  { href: "/services", label: "Services" },
  { href: "/galerie", label: "Galerie" },
  { href: "/formation", label: "Formation" },
  { href: "/articles", label: "Journal" },
  { href: "/#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
    >
      <div className="container-x flex items-center justify-between h-20">
        <Link to="/" className="flex flex-col leading-none">
          <span className="font-display text-xl md:text-2xl font-medium">Régis</span>
          <span className="eyebrow mt-1">L'Œil Artistique</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {sectionLinks.map((l) =>
            l.href.startsWith("/#") ? (
              <a key={l.href} href={l.href} className="text-sm hover:text-accent transition-colors">
                {l.label}
              </a>
            ) : (
              <Link
                key={l.href}
                to={l.href}
                className="text-sm hover:text-accent transition-colors"
                activeProps={{ className: "text-accent" }}
              >
                {l.label}
              </Link>
            )
          )}
        </nav>

        <a href="/#contact" className="hidden lg:inline-flex btn-primary">
          Réserver une séance
        </a>

        <button
          aria-label="Menu"
          className="lg:hidden p-2"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-background border-t border-border"
          >
            <div className="container-x py-6 flex flex-col gap-4">
              {sectionLinks.map((l) =>
                l.href.startsWith("/#") ? (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-base py-2"
                  >
                    {l.label}
                  </a>
                ) : (
                  <Link
                    key={l.href}
                    to={l.href}
                    onClick={() => setOpen(false)}
                    className="text-base py-2"
                  >
                    {l.label}
                  </Link>
                )
              )}
              <a href="/#contact" onClick={() => setOpen(false)} className="btn-primary justify-center mt-2">
                Réserver une séance
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
