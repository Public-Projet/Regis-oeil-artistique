import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check, Images, MessageCircle, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { services as allServices, globalOptions } from "@/data/services";

const services = allServices.filter((s) => s.slug !== "formations");
import { galleryFilterForService, whatsappUrl } from "@/lib/contact-links";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services & Tarifs · Régis — L'Œil Artistique" },
      {
        name: "description",
        content:
          "Prestations photographiques au Bénin : mariage, événements, portraits, corporate, commercial, drone, retouche. Studio Régis Houinsou, Porto-Novo.",
      },
      { property: "og:title", content: "Services & Tarifs · Régis — L'Œil Artistique" },
      {
        property: "og:description",
        content:
          "Sept pôles d'expertise photographique — de l'événement intime au reportage documentaire. Tarifs adaptés au marché béninois.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const guarantees = [
  { k: "48 h", v: "Réponse à toute demande de devis" },
  { k: "100 %", v: "Prestations modulables sur-mesure" },
  { k: "8", v: "Pôles d'expertise complémentaires" },
  { k: "6+", v: "Années de terrain, Bénin & Europe" },
];

function Services() {
  const waLink = whatsappUrl(
    "Bonjour Régis, j'aimerais un conseil sur la prestation la plus adaptée à mon projet.",
  );

  return (
    <div className="pb-28">
      {/* HERO — bandeau sombre pleine largeur */}
      <section className="relative overflow-hidden bg-[var(--ink)] text-[var(--cream)] pt-40 pb-24">
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{ background: "var(--gradient-pro)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        <div className="container-x relative">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <Reveal className="lg:col-span-8">
              <div className="eyebrow flex items-center gap-2 text-[var(--cream)]/70">
                <Sparkles size={14} /> Prestations & Tarifs
              </div>
              <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] mt-8 leading-[0.92]">
                Un studio structuré,
                <br />
                un devis <span className="text-[var(--cream)]/60">clair</span>.
              </h1>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-4">
              <p className="text-[var(--cream)]/75 leading-relaxed">
                Sept pôles d'expertise, de la couverture d'événement à la retouche
                professionnelle. Les tarifs affichés sont des repères — votre
                proposition finale est toujours construite avec vous.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/"
                  hash="contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--cream)] text-[var(--ink)] px-7 py-3.5 text-xs uppercase tracking-[0.16em] font-medium transition hover:bg-[var(--ochre)]"
                >
                  Demander un devis <ArrowUpRight size={15} />
                </Link>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--cream)]/30 px-7 py-3.5 text-xs uppercase tracking-[0.16em] transition hover:bg-[var(--cream)]/10"
                >
                  <MessageCircle size={15} /> WhatsApp
                </a>
              </div>
            </Reveal>
          </div>

          {/* garanties */}
          <Reveal delay={0.15}>
            <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--cream)]/15">
              {guarantees.map((g) => (
                <div key={g.v} className="bg-[var(--ink)] px-6 py-8">
                  <div className="font-display text-4xl md:text-5xl">{g.k}</div>
                  <div className="mt-3 text-[0.72rem] uppercase tracking-[0.2em] text-[var(--cream)]/55 leading-relaxed">
                    {g.v}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* LISTE ÉDITORIALE + SOMMAIRE COLLANT */}
      <section className="container-x mt-24 lg:mt-32 grid lg:grid-cols-12 gap-12">
        <aside className="lg:col-span-3">
          <div className="lg:sticky lg:top-32">
            <div className="eyebrow">Sommaire</div>
            <nav className="mt-6 divide-y divide-border border-t border-border">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  to="/services/$id"
                  params={{ id: s.slug }}
                  className="group flex items-baseline gap-3 py-3 text-sm transition hover:text-[var(--ochre-deep)]"
                >
                  <span className="font-mono text-[0.7rem] text-muted-foreground">
                    {s.number}
                  </span>
                  <span className="flex-1">{s.title}</span>
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 transition group-hover:opacity-100"
                  />
                </Link>
              ))}
            </nav>
            <div className="mt-10 rounded-lg border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
              <div className="eyebrow">Besoin d'un conseil ?</div>
              <p className="mt-3 text-sm text-foreground/70 leading-relaxed">
                Décrivez votre projet en deux lignes, je vous orienterai vers la
                formule juste.
              </p>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[var(--ochre-deep)] hover:underline"
              >
                <MessageCircle size={14} /> Écrire maintenant
              </a>
            </div>
          </div>
        </aside>

        <div className="lg:col-span-9">
          <Reveal>
            <div className="flex items-end justify-between flex-wrap gap-4 pb-6 border-b border-border">
              <h2 className="font-display text-3xl md:text-4xl leading-tight">
                Les sept pôles d'expertise
              </h2>
              <div className="eyebrow text-muted-foreground">
                {services.length} prestations
              </div>
            </div>
          </Reveal>

          <div className="divide-y divide-border">
            {services.map((s, i) => {
              const cat = galleryFilterForService(s.slug);
              return (
                <Reveal key={s.slug} delay={Math.min(i, 5) * 0.04}>
                  <article className="group relative py-10 md:py-12">
                    <div className="grid md:grid-cols-12 gap-6 md:gap-8">
                      <div className="md:col-span-4">
                        <div className="flex items-center gap-4">
                          <span
                            className="font-display text-5xl leading-none"
                            style={{ color: "var(--ochre)" }}
                          >
                            {s.icon}
                          </span>
                          <div>
                            <div className="font-mono text-[0.7rem] text-muted-foreground">
                              {s.number} / {String(services.length).padStart(2, "0")}
                            </div>
                            <div className="eyebrow mt-1">{s.category}</div>
                          </div>
                        </div>
                        <h3 className="font-display text-3xl md:text-4xl mt-6 leading-[1.05]">
                          <Link
                            to="/services/$id"
                            params={{ id: s.slug }}
                            className="transition-colors group-hover:text-[var(--ochre-deep)]"
                          >
                            {s.title}
                          </Link>
                        </h3>
                        <p className="mt-3 text-[var(--ochre-deep)] italic font-display text-lg">
                          {s.tagline}
                        </p>
                      </div>

                      <div className="md:col-span-5">
                        <p className="text-sm text-foreground/75 leading-relaxed">
                          {s.description}
                        </p>
                        <ul className="mt-5 space-y-2">
                          {s.features.slice(0, 3).map((f) => (
                            <li key={f} className="flex gap-2.5 text-sm text-foreground/70">
                              <Check
                                size={15}
                                className="mt-0.5 shrink-0"
                                style={{ color: "var(--ochre)" }}
                              />
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="md:col-span-3 flex flex-col md:items-end justify-between gap-6">
                        <div className="md:text-right">
                          <div className="eyebrow text-muted-foreground">À partir de</div>
                          <div className="font-display text-3xl mt-1">
                            {s.startingPrice.replace(/^à partir de\s?/i, "")}
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">
                            {s.formulas.length} formule
                            {s.formulas.length > 1 ? "s" : ""}
                          </div>
                        </div>
                        <div className="flex flex-wrap md:justify-end gap-2">
                          <Link
                            to="/services/$id"
                            params={{ id: s.slug }}
                            className="inline-flex items-center gap-2 rounded-full bg-[var(--ink)] text-[var(--cream)] px-5 py-2.5 text-[0.7rem] uppercase tracking-[0.16em] transition hover:bg-[var(--ochre-deep)]"
                          >
                            Détail <ArrowUpRight size={13} />
                          </Link>
                          <Link
                            to="/galerie"
                            search={{ cat }}
                            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-[0.7rem] uppercase tracking-[0.16em] transition hover:border-[var(--ink)]"
                          >
                            <Images size={13} /> Catalogue
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* OPTIONS */}
      <section className="mt-28 bg-secondary py-24">
        <div className="container-x grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-4">
            <div className="eyebrow">Options & Suppléments</div>
            <h2 className="font-display text-4xl md:text-5xl mt-4 leading-tight">
              Composez votre <em className="text-[var(--ochre-deep)]">devis</em>.
            </h2>
            <p className="mt-6 text-foreground/70">
              Chaque prestation peut être enrichie : livraison express, album
              imprimé, déplacement dans tout le Bénin — dites-moi votre besoin.
            </p>
          </Reveal>
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-px bg-border">
            {globalOptions.map((o, i) => (
              <Reveal key={o.label} delay={Math.min(i, 6) * 0.03}>
                <div className="h-full bg-secondary p-6 flex items-center justify-between gap-4">
                  <span className="font-display text-lg md:text-xl">{o.label}</span>
                  <span className="text-sm text-[var(--ochre-deep)] font-medium whitespace-nowrap">
                    {o.price}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x mt-28">
        <div className="relative overflow-hidden rounded-lg bg-[var(--ink)] text-[var(--cream)] p-12 md:p-20 shadow-[var(--shadow-pro)]">
          <div
            className="absolute -top-32 -right-24 w-[28rem] h-[28rem] rounded-full opacity-30 blur-3xl"
            style={{ background: "var(--gradient-pro)" }}
          />
          <div className="relative grid lg:grid-cols-2 gap-10 items-end">
            <Reveal>
              <div className="eyebrow text-[var(--cream)]/70">Un projet en tête ?</div>
              <h2 className="font-display text-4xl md:text-6xl mt-4 leading-[1] max-w-xl">
                Parlons de votre prochain projet.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-[var(--cream)]/75 text-lg leading-relaxed">
                Chaque histoire mérite une approche unique. Décrivez-moi votre
                besoin — je réponds sous 48 h avec une proposition adaptée.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/"
                  hash="contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--cream)] text-[var(--ink)] px-8 py-4 text-xs uppercase tracking-[0.16em] font-medium hover:bg-[var(--ochre)] transition"
                >
                  Demander un devis <ArrowUpRight size={16} />
                </Link>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--cream)]/30 px-8 py-4 text-xs uppercase tracking-[0.16em] hover:bg-[var(--cream)]/10 transition"
                >
                  <MessageCircle size={16} /> WhatsApp
                </a>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--cream)]/30 px-8 py-4 text-xs uppercase tracking-[0.16em] hover:bg-[var(--cream)]/10 transition"
                >
                  Mon parcours
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
