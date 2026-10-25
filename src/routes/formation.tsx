import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Aperture, Camera, Layers, Sparkles, Users, Wand2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { FormationForm } from "@/components/FormationForm";
import { services } from "@/data/services";

export const Route = createFileRoute("/formation")({
  validateSearch: (search: Record<string, unknown>): { programme?: string } => ({
    programme: typeof search.programme === "string" ? search.programme : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Formation photo à Porto-Novo · Régis — L'Œil Artistique" },
      {
        name: "description",
        content:
          "Formations photographie, Lightroom et Photoshop à Porto-Novo, Bénin. Du débutant au futur professionnel, avec suivi personnalisé par S. Régis Houinsou.",
      },
      { property: "og:title", content: "Formation photo — Régis L'Œil Artistique" },
      {
        property: "og:description",
        content: "Apprenez la photographie, Lightroom et Photoshop avec un photographe professionnel à Porto-Novo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FormationPage,
});

const modules = [
  { icon: Camera, title: "Maîtriser son appareil", text: "Exposition, ouverture, vitesse, ISO : sortir du mode automatique et décider de chaque image." },
  { icon: Aperture, title: "Lumière & composition", text: "Lire la lumière naturelle, construire un cadre, guider le regard du spectateur." },
  { icon: Users, title: "Diriger un sujet", text: "Mettre à l'aise, poser, capter l'expression juste en portrait comme en reportage." },
  { icon: Layers, title: "Lightroom", text: "Trier, développer et harmoniser une série avec un workflow professionnel." },
  { icon: Wand2, title: "Photoshop", text: "Retouche avancée de la peau, montages créatifs, préparation à l'impression." },
  { icon: Sparkles, title: "Vivre de la photo", text: "Tarifs, image de marque, réseaux sociaux et relation client du photographe." },
];

const steps = [
  { n: "01", title: "Inscription", text: "Vous remplissez le formulaire : niveau, objectifs, disponibilités." },
  { n: "02", title: "Échange", text: "Régis vous contacte pour affiner le programme et fixer le calendrier." },
  { n: "03", title: "Sessions", text: "Théorie en petit groupe puis pratique terrain à Porto-Novo et alentours." },
  { n: "04", title: "Suivi", text: "Analyse de vos images, corrections personnalisées et conseils pour la suite." },
];

const faqs = [
  { q: "Faut-il déjà avoir un appareil photo ?", a: "Non. Pour l'initiation, un smartphone suffit pour commencer ; Régis vous conseille ensuite sur le matériel adapté à votre budget." },
  { q: "Les formations sont-elles en groupe ?", a: "L'initiation et la formation complète se font en petit groupe. L'accompagnement individuel est 100 % en tête-à-tête." },
  { q: "Où se déroulent les sessions ?", a: "À Porto-Novo, en studio et en extérieur. Certaines séances théoriques et Lightroom/Photoshop peuvent se faire en ligne." },
  { q: "Comment se passe le paiement ?", a: "Les modalités (acompte, paiement en plusieurs fois) sont précisées lors de l'échange qui suit votre inscription." },
];

function FormationPage() {
  const { programme } = Route.useSearch();
  const formation = services.find((s) => s.slug === "formations");
  const formulas = formation?.formulas ?? [];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-secondary overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-40 -right-40 w-xl h-144 rounded-full opacity-20 blur-3xl"
          style={{ background: "var(--gradient-pro)" }}
        />
        <div className="container-x relative grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <div className="eyebrow">Académie · Porto-Novo</div>
            <h1 className="font-display text-5xl md:text-7xl leading-[0.95] mt-6">
              Apprendre à <em className="text-ochre-deep">voir</em>,<br />
              puis à photographier.
            </h1>
            <p className="mt-8 text-lg max-w-xl text-muted-foreground">
              {formation?.longDescription}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#inscription" className="btn-primary">
                S'inscrire <ArrowRight size={16} />
              </a>
              <a href="#programmes" className="btn-ghost">
                Voir les programmes
              </a>
            </div>
          </div>
          <div className="lg:col-span-4 grid grid-cols-3 lg:grid-cols-1 gap-6">
            {[
              ["5", "parcours au choix"],
              ["3", "niveaux accompagnés"],
              ["1:1", "suivi personnalisé"],
            ].map(([v, l]) => (
              <div key={l} className="border-l-2 border--ochre pl-4">
                <div className="font-display text-4xl md:text-5xl">{v}</div>
                <div className="eyebrow mt-2 text-foreground/70">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-28">
        <div className="container-x">
          <Reveal>
            <div className="max-w-2xl">
              <div className="eyebrow">Ce que vous apprendrez</div>
              <h2 className="font-display text-4xl md:text-5xl mt-4">De la technique au regard d'auteur.</h2>
            </div>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {modules.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.05}>
                <div className="bg-background p-8 h-full">
                  <m.icon size={26} className="text-accent" />
                  <h3 className="font-display text-2xl mt-5">{m.title}</h3>
                  <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{m.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Programmes */}
      <section id="programmes" className="py-28 bg-secondary scroll-mt-20">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div className="max-w-2xl">
                <div className="eyebrow">Programmes & tarifs</div>
                <h2 className="font-display text-4xl md:text-5xl mt-4">Choisissez votre parcours.</h2>
              </div>
              <Link to="/services/$id" params={{ id: "formations" }} className="btn-ghost self-start md:self-end">
                Détail de la prestation <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {formulas.map((f, i) => (
              <Reveal key={f.name} delay={i * 0.05}>
                <div
                  className={`h-full flex flex-col p-8 rounded-sm border transition-shadow hover:shadow-[var(--shadow-pro)] ${f.highlight ? "bg-foreground text-background border-foreground" : "bg-background border-border"
                    }`}
                >
                  {f.highlight && <div className="eyebrow mb-3" style={{ color: "var(--ochre)" }}>Le plus complet</div>}
                  <h3 className="font-display text-3xl">{f.name}</h3>
                  <div className="mt-2 text-sm opacity-70">{f.price}</div>
                  <ul className="mt-6 space-y-2 text-sm flex-1">
                    {f.features.map((x) => (
                      <li key={x} className="flex gap-2"><span className="text--ochre">—</span>{x}</li>
                    ))}
                  </ul>
                  <Link
                    to="/formation"
                    search={{ programme: f.name }}
                    hash="inscription"
                    className={`mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-widest ${f.highlight ? "text--ochre" : "text-accent"
                      } hover:gap-3 transition-all`}
                  >
                    Je m'inscris <ArrowRight size={14} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-28">
        <div className="container-x">
          <Reveal>
            <div className="eyebrow">Déroulé</div>
            <h2 className="font-display text-4xl md:text-5xl mt-4 max-w-2xl">Comment ça se passe.</h2>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-4 gap-10">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.06}>
                <div className="border-t border-foreground pt-6">
                  <div className="font-display text-5xl text-accent">{s.n}</div>
                  <h3 className="font-display text-2xl mt-4">{s.title}</h3>
                  <p className="mt-2 text-sm text-foreground/70">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form + FAQ */}
      <section id="inscription" className="py-28 bg-secondary scroll-mt-20">
        <div className="container-x grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <div className="eyebrow">Inscription</div>
              <h2 className="font-display text-4xl md:text-5xl mt-4 leading-tight">Réservez votre place.</h2>
              <p className="mt-6 text-foreground/70">
                Quelques informations pour adapter la formation à votre niveau et à vos objectifs.
                Réponse sous 48 h.
              </p>
              <div className="mt-12 space-y-6">
                {faqs.map((f) => (
                  <div key={f.q}>
                    <div className="font-display text-xl">{f.q}</div>
                    <p className="mt-1 text-sm text-foreground/70">{f.a}</p>
                  </div>
                ))}
              </div>
              <div className="signature mt-12">S. Régis HOUINSOU</div>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal delay={0.1}>
              <div className="bg-background p-8 md:p-12 rounded-sm shadow-[var(--shadow-soft)]">
                <FormationForm key={programme ?? "none"} defaultProgramme={programme} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
