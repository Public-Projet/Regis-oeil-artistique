import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { services, globalOptions } from "@/data/services";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services & Tarifs · Régis - L'Œil Artistique" },
      {
        name: "description",
        content:
          "Prestations photographiques au Bénin : mariage, événements, portraits, corporate, commercial, drone, retouche, formations. Studio Régis Houinsou, Porto-Novo.",
      },
      { property: "og:title", content: "Services & Tarifs · Régis - L'Œil Artistique" },
      {
        property: "og:description",
        content:
          "Huit pôles d'expertise photographique - de l'événement intime au reportage documentaire. Tarifs adaptés au marché béninois.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

function Services() {
  return (
    <div className="pt-32 pb-24">
      {/* HERO */}
      <section className="container-x relative">
        <div className="absolute -top-10 -left-10 w-72 h-72 rounded-full bg-[var(--ochre)]/10 blur-3xl -z-10" />
        <Reveal>
          <div className="eyebrow flex items-center gap-2">
            <Sparkles size={14} /> Prestations & Tarifs
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mt-6 leading-[0.95] max-w-5xl">
            L'exigence d'un regard,<br />
            au service de <em className="text-[var(--ochre-deep)]">votre histoire</em>.
          </h1>
          <p className="mt-10 max-w-2xl text-lg text-foreground/70 leading-relaxed">
            Huit pôles d'expertise, de la couverture d'événement à la formation
            professionnelle. Chaque prestation est modulable - les tarifs indiqués
            servent de repère, votre devis final est toujours personnalisé.
          </p>
        </Reveal>

        {/* Stats bar */}
        <Reveal delay={0.1}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 border-t border-b border-border">
            {[
              { k: "8", v: "Pôles d'expertise" },
              { k: "6+", v: "Années d'expérience" },
              { k: "48 h", v: "Réponse devis" },
              { k: "100%", v: "Sur-mesure" },
            ].map((s) => (
              <div key={s.v} className="py-8 px-4 border-l border-border first:border-l-0">
                <div className="font-display text-4xl md:text-5xl text-[var(--ochre-deep)]">
                  {s.k}
                </div>
                <div className="eyebrow mt-2 text-foreground/60">{s.v}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* SERVICES GRID */}
      <section className="container-x mt-28">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-4 mb-14">
            <h2 className="font-display text-3xl md:text-4xl max-w-xl leading-tight">
              Nos pôles d'expertise
            </h2>
            <div className="eyebrow text-foreground/60">
              {services.length} prestations
            </div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.04}>
              <Link
                to="/services/$id"
                params={{ id: s.slug }}
                className="group block relative overflow-hidden border border-border bg-card hover:bg-[var(--ink)] hover:text-[var(--cream)] transition-all duration-500 h-full"
              >
                <div className="p-8 md:p-10 relative z-10 h-full flex flex-col">
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex items-center gap-4">
                      <span className="text-4xl text-[var(--ochre)] group-hover:text-[var(--ochre)]">
                        {s.icon}
                      </span>
                      <div>
                        <div className="eyebrow opacity-70">{s.category}</div>
                        <div className="text-xs font-mono opacity-60 mt-1">
                          {s.number} / {String(services.length).padStart(2, "0")}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight
                      size={22}
                      className="opacity-40 group-hover:opacity-100 group-hover:rotate-45 transition-all"
                    />
                  </div>

                  <h3 className="font-display text-3xl md:text-4xl mt-8 leading-tight">
                    {s.title}
                  </h3>
                  <p className="mt-3 italic text-[var(--ochre-deep)] group-hover:text-[var(--ochre)]">
                    {s.tagline}
                  </p>
                  <p className="mt-6 text-sm opacity-80 leading-relaxed flex-1">
                    {s.description}
                  </p>

                  <div className="mt-8 pt-6 border-t border-current/15 flex items-end justify-between">
                    <div>
                      <div className="eyebrow opacity-60">À partir de</div>
                      <div className="font-display text-2xl mt-1">
                        {s.startingPrice.replace(/^à partir de\s?/i, "")}
                      </div>
                    </div>
                    <div className="text-xs uppercase tracking-widest opacity-70 group-hover:opacity-100">
                      Voir détail →
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* OPTIONS */}
      <section className="container-x mt-32">
        <div className="grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-4">
            <div className="eyebrow">Options & Suppléments</div>
            <h2 className="font-display text-4xl md:text-5xl mt-4 leading-tight">
              Personnalisez votre <em className="text-[var(--ochre-deep)]">devis</em>.
            </h2>
            <p className="mt-6 text-foreground/70">
              Chaque prestation peut être enrichie d'options complémentaires. Livraison
              express, album imprimé, déplacement dans tout le Bénin - dites-moi votre
              besoin.
            </p>
          </Reveal>

          <div className="lg:col-span-8">
            <div className="divide-y divide-border border-t border-b border-border">
              {globalOptions.map((o, i) => (
                <Reveal key={o.label} delay={i * 0.04}>
                  <div className="flex items-center justify-between py-6 gap-6">
                    <div className="font-display text-xl md:text-2xl">{o.label}</div>
                    <div className="text-sm md:text-base text-[var(--ochre-deep)] font-medium whitespace-nowrap">
                      {o.price}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-32">
        <div className="container-x">
          <div className="bg-[var(--ink)] text-[var(--cream)] p-12 md:p-20 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[var(--ochre)]/20 blur-3xl" />
            <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-end">
              <Reveal>
                <div className="eyebrow text-[var(--ochre)]">Un projet en tête ?</div>
                <h2 className="font-display text-4xl md:text-6xl mt-4 leading-[1] max-w-xl">
                  Parlons de votre prochain projet.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="opacity-80 text-lg leading-relaxed">
                  Chaque histoire mérite une approche unique. Décrivez-moi votre besoin -
                  je réponds sous 48 h avec une proposition adaptée.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    to="/"
                    hash="contact"
                    className="inline-flex items-center gap-2 bg-[var(--ochre)] text-[var(--ink)] px-8 py-4 rounded-full text-sm tracking-widest uppercase font-medium hover:bg-[var(--cream)] transition"
                  >
                    Demander un devis <ArrowUpRight size={16} />
                  </Link>
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 border border-[var(--cream)]/30 px-8 py-4 rounded-full text-sm tracking-widest uppercase hover:bg-[var(--cream)]/10 transition"
                  >
                    Mon parcours
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
