import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Check, Images, MessageCircle, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { services, globalOptions, type Service } from "@/data/services";
import { galleryFilterForService, quotePrefill, whatsappUrl } from "@/lib/contact-links";


export const Route = createFileRoute("/services/$id")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.id);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Prestation introuvable · Régis" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const s = loaderData.service;
    return {
      meta: [
        { title: `${s.title} · Régis - L'Œil Artistique` },
        { name: "description", content: s.description },
        { property: "og:title", content: `${s.title} · Régis` },
        { property: "og:description", content: s.description },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="pt-40 pb-24 container-x text-center">
      <div className="eyebrow">404</div>
      <h1 className="font-display text-5xl mt-4">Prestation introuvable</h1>
      <Link to="/services" className="btn-primary mt-10 inline-flex">
        Voir toutes les prestations
      </Link>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="pt-40 pb-24 container-x text-center">
      <h1 className="font-display text-4xl">Une erreur est survenue</h1>
      <button onClick={reset} className="btn-primary mt-8">Réessayer</button>
    </div>
  ),
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData() as { service: Service };
  const index = services.findIndex((s) => s.slug === service.slug);
  const prev = services[(index - 1 + services.length) % services.length];
  const next = services[(index + 1) % services.length];
  const galleryCat = galleryFilterForService(service.slug);
  const prefill = quotePrefill(service.title);
  const waLink = whatsappUrl(
    `Bonjour Régis, je suis intéressé(e) par la prestation « ${service.title} ». Pouvons-nous en discuter ?`,
  );


  return (
    <div className="pt-32 pb-24">
      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-[var(--ochre)]/10 blur-3xl" />
          <div className="absolute top-60 -left-20 w-80 h-80 rounded-full bg-[var(--ochre-deep)]/5 blur-3xl" />
        </div>

        <div className="container-x">
          <Reveal>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-[var(--ochre-deep)] transition"
            >
              <ArrowLeft size={14} /> Toutes les prestations
            </Link>
          </Reveal>

          <div className="mt-10 grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <Reveal>
                <div className="flex items-center gap-4">
                  <span className="text-6xl text-[var(--ochre)]">{service.icon}</span>
                  <div>
                    <div className="eyebrow">{service.category}</div>
                    <div className="text-xs font-mono opacity-60 mt-1">
                      Prestation {service.number} / {String(services.length).padStart(2, "0")}
                    </div>
                  </div>
                </div>
                <h1 className="font-display text-5xl md:text-7xl mt-8 leading-[1]">
                  {service.title}
                </h1>
                <p className="mt-6 text-2xl italic text-[var(--ochre-deep)] font-display">
                  {service.tagline}
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-4">
              <Reveal delay={0.1}>
                <div className="border-l-2 border-[var(--ochre)] pl-6">
                  <div className="eyebrow text-foreground/60">Tarif</div>
                  <div className="font-display text-3xl mt-2">{service.startingPrice}</div>
                  <p className="mt-3 text-sm text-foreground/60">
                    Devis personnalisé selon vos besoins spécifiques.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          {/* ACTIONS */}
          <Reveal delay={0.15}>
            <div className="mt-14 flex flex-wrap gap-3">
              <Link
                to="/"
                hash="contact"
                search={{ subject: prefill.subject, message: prefill.message }}
                className="btn-primary"
              >
                Demander un devis <ArrowUpRight size={16} />
              </Link>
              <Link to="/galerie" search={{ cat: galleryCat }} className="btn-ghost">
                <Images size={16} /> Voir le catalogue « {galleryCat} »
              </Link>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--ochre-deep)] px-6 py-3.5 text-[0.85rem] uppercase tracking-[0.08em] text-[var(--ochre-deep)] transition hover:bg-[var(--ochre-deep)] hover:text-[var(--cream)]"
              >
                <MessageCircle size={16} /> Discuter sur WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>


      {/* DESCRIPTION */}
      <section className="container-x mt-24">
        <div className="grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-7">
            <div className="eyebrow">L'approche</div>
            <p className="mt-6 text-xl md:text-2xl leading-relaxed font-display text-foreground/90">
              {service.longDescription}
            </p>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="bg-secondary p-8">
              <div className="eyebrow flex items-center gap-2">
                <Sparkles size={14} /> Toujours inclus
              </div>
              <ul className="mt-6 space-y-4">
                {service.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <Check size={18} className="text-[var(--ochre)] shrink-0 mt-1" />
                    <span className="text-foreground/80">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FORMULAS */}
      <section className="container-x mt-32">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-4 mb-14">
            <h2 className="font-display text-4xl md:text-5xl leading-tight max-w-xl">
              Formules & <em className="text-[var(--ochre-deep)]">tarifs</em>
            </h2>
            <div className="eyebrow text-foreground/60">
              {service.formulas.length} options
            </div>
          </div>
        </Reveal>

        <div
          className={`grid gap-6 ${service.formulas.length >= 4
            ? "md:grid-cols-2 lg:grid-cols-3"
            : service.formulas.length === 3
              ? "md:grid-cols-3"
              : "md:grid-cols-2"
            }`}
        >
          {service.formulas.map((f, i) => (
            <Reveal key={f.name} delay={i * 0.05}>
              <div
                className={`p-8 h-full flex flex-col border relative ${f.highlight
                  ? "bg-[var(--ink)] text-[var(--cream)] border-[var(--ink)]"
                  : "bg-card border-border"
                  }`}
              >
                {f.highlight && (
                  <div className="absolute -top-3 left-8 text-[10px] tracking-[0.28em] uppercase bg-[var(--ochre)] text-[var(--ink)] px-3 py-1 font-medium">
                    Recommandé
                  </div>
                )}
                <div className="eyebrow opacity-70">Formule</div>
                <h3 className="font-display text-2xl mt-2">{f.name}</h3>
                <div
                  className={`mt-6 font-display text-3xl ${f.highlight ? "text-[var(--ochre)]" : "text-[var(--ochre-deep)]"
                    }`}
                >
                  {f.price}
                </div>
                <ul className="mt-8 space-y-3 flex-1">
                  {f.features.map((ft) => (
                    <li key={ft} className="flex gap-3 text-sm">
                      <Check
                        size={16}
                        className={`shrink-0 mt-0.5 ${f.highlight ? "text-[var(--ochre)]" : "text-[var(--ochre)]"
                          }`}
                      />
                      <span className="opacity-90">{ft}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/"
                  hash="contact"
                  search={quotePrefill(service.title, f.name)}
                  className={`mt-8 inline-flex items-center justify-between gap-2 px-5 py-3 text-xs tracking-widest uppercase border transition ${f.highlight
                    ? "border-[var(--cream)]/30 hover:bg-[var(--ochre)] hover:text-[var(--ink)] hover:border-[var(--ochre)]"
                    : "border-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--cream)]"
                    }`}
                >
                  Choisir cette formule <ArrowUpRight size={14} />
                </Link>

              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* OPTIONS */}
      <section className="container-x mt-32">
        <Reveal>
          <div className="eyebrow">Options complémentaires</div>
          <h2 className="font-display text-3xl md:text-4xl mt-4 max-w-2xl">
            À combiner avec toute formule.
          </h2>
        </Reveal>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {globalOptions.map((o) => (
            <div
              key={o.label}
              className="bg-background p-6 flex items-center justify-between gap-4"
            >
              <span className="text-sm">{o.label}</span>
              <span className="text-sm text-[var(--ochre-deep)] whitespace-nowrap">
                {o.price}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-x mt-32">
        <div className="bg-[var(--ink)] text-[var(--cream)] p-12 md:p-16 relative overflow-hidden">
          <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-[var(--ochre)]/20 blur-3xl" />
          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="eyebrow text-[var(--ochre)]">Prêt à démarrer ?</div>
              <h2 className="font-display text-4xl md:text-5xl mt-4 leading-tight">
                Discutons de votre projet {service.title.toLowerCase()}.
              </h2>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <Link
                to="/"
                hash="contact"
                search={{ subject: prefill.subject, message: prefill.message }}
                className="inline-flex items-center gap-2 bg-[var(--ochre)] text-[var(--ink)] px-8 py-4 rounded-full text-sm tracking-widest uppercase font-medium hover:bg-[var(--cream)] transition"
              >
                Demander un devis <ArrowUpRight size={16} />
              </Link>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[var(--cream)]/30 px-8 py-4 rounded-full text-sm tracking-widest uppercase hover:bg-[var(--cream)]/10 transition"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
              <Link
                to="/galerie"
                search={{ cat: galleryCat }}
                className="inline-flex items-center gap-2 border border-[var(--cream)]/30 px-8 py-4 rounded-full text-sm tracking-widest uppercase hover:bg-[var(--cream)]/10 transition"
              >
                <Images size={16} /> Catalogue
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* PREV/NEXT */}
      <section className="container-x mt-24 grid md:grid-cols-2 gap-6">
        <Link
          to="/services/$id"
          params={{ id: prev.slug }}
          className="group border border-border p-8 hover:bg-secondary transition"
        >
          <div className="eyebrow text-foreground/60 flex items-center gap-2">
            <ArrowLeft size={14} /> Précédent
          </div>
          <div className="font-display text-2xl mt-3 group-hover:text-[var(--ochre-deep)] transition">
            {prev.title}
          </div>
        </Link>
        <Link
          to="/services/$id"
          params={{ id: next.slug }}
          className="group border border-border p-8 hover:bg-secondary transition md:text-right"
        >
          <div className="eyebrow text-foreground/60 flex items-center gap-2 md:justify-end">
            Suivant <ArrowUpRight size={14} />
          </div>
          <div className="font-display text-2xl mt-3 group-hover:text-[var(--ochre-deep)] transition">
            {next.title}
          </div>
        </Link>
      </section>
    </div>
  );
}
