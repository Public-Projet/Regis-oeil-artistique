import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "À propos · Régis HOUINSOU - L'Œil Artistique" },
      {
        name: "description",
        content:
          "Régis HOUINSOU, photographe professionnel basé au Bénin. Fondateur de Régis l'Œil Artistique. Parcours, philosophie, expérience internationale et vision artistique.",
      },
      { property: "og:title", content: "À propos · Régis HOUINSOU" },
      {
        property: "og:description",
        content:
          "Voir, raconter, donner de la valeur à chaque moment. Le parcours d'un photographe béninois entre Porto-Novo, Paris et l'international.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const experiences = [
  {
    title: "Concert d'Axel Merry - Casino de Paris",
    description:
      "Une expérience internationale inoubliable au cœur de la capitale française. Capturer l'énergie d'un artiste africain rayonnant sur une scène parisienne légendaire.",
  },
  {
    title: "One Man Show - Sergent Kongui",
    description:
      "Le spectacle vivant exige une réactivité hors du commun. Saisir l'expression juste, le geste parfait, l'éclat de rire dans la salle.",
  },
  {
    title: "Fête de l'Indépendance - Porto-Novo",
    description:
      "Un regard sensible sur l'identité et la fierté d'un peuple. Des images chargées d'histoire et d'émotion collective.",
  },
  {
    title: "Festival Gospel « À Toi la Gloire »",
    description:
      "Photographier une émotion spirituelle authentique - des voix, des larmes, des mains levées, une communion qui dépasse les mots.",
  },
  {
    title: "ADJAPIANO · Festival des Masques · Festival HOSANNA",
    description:
      "De l'afrobeat au patrimoine ancestral béninois : reportages photographiques au service de la mémoire culturelle.",
  },
  {
    title: "Câlin en Couleurs (FSS) · Rencontre des Fanfares 2025",
    description:
      "Deux univers : la douceur créative des couleurs et la rigueur cadencée des fanfares. Une même exigence artistique.",
  },
];

const institutions = [
  { name: "UNA", detail: "Conférences & soutenances" },
  { name: "ESCAE", detail: "Cérémonies académiques" },
  { name: "EPA", detail: "Événements institutionnels" },
  { name: "UAC", detail: "Soutenances & remises de diplômes" },
];

const stats = [
  { value: 100, suffix: "+", label: "types d'événements couverts" },
  { value: 10, suffix: "+", label: "institutions académiques" },
  { value: 77, suffix: "+", label: "villes" },
  { value: 1, label: "vision artistique" },
];

function About() {
  return (
    <div className="pt-32 pb-24">
      {/* Intro */}
      <section className="container-x">
        <Reveal>
          <div className="eyebrow">À propos</div>
          <h1 className="font-display text-5xl md:text-7xl mt-4 max-w-4xl leading-[1]">
            Une vision. Une passion.<br />
            Un art de raconter le monde en <em className="text-[var(--ochre-deep)]">images</em>.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-foreground/70">
            Photographe professionnel · Bénin & International
          </p>
        </Reveal>
      </section>

      {/* Qui suis-je */}
      <section className="container-x mt-24 grid lg:grid-cols-12 gap-12 items-start">
        <Reveal className="lg:col-span-5">
          <div className="eyebrow">Qui suis-je</div>
          <h2 className="font-display text-4xl md:text-5xl mt-4 leading-tight">
            Régis HOUINSOU, photographe & fondateur.
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-7 space-y-5 text-foreground/80">
          <p>
            Je m'appelle Régis HOUINSOU, photographe professionnel basé au Bénin et fondateur
            de Régis l'Œil Artistique. Depuis plusieurs années, je consacre mon regard et mon
            talent à une mission profonde : capturer ce que l'œil ordinaire laisse passer.
          </p>
          <p>
            La photographie, pour moi, ce n'est pas simplement prendre des images. C'est une
            manière de <strong>voir</strong>, de <strong>raconter</strong> et de{" "}
            <strong>donner de la valeur à chaque moment</strong> - qu'il soit intime ou
            grandiose, discret ou festif, professionnel ou communautaire.
          </p>
          <p>
            Au fil des années, j'ai cultivé une sensibilité artistique nourrie d'expériences
            variées, aussi bien sur le sol béninois qu'à l'international. Chaque événement
            couvert, chaque portrait réalisé m'a appris que la photographie est bien plus
            qu'un métier : c'est un véritable outil d'impact et de transformation.
          </p>
          <div className="signature pt-4">S. Régis HOUINSOU</div>
        </Reveal>
      </section>

      {/* Philosophie & Mission */}
      <section className="mt-32 bg-secondary py-24">
        <div className="container-x grid md:grid-cols-2 gap-px bg-border">
          <Reveal>
            <div className="bg-secondary p-10 h-full">
              <div className="eyebrow text-[var(--ochre-deep)]">Ma philosophie</div>
              <blockquote className="font-display text-2xl md:text-3xl mt-6 leading-snug">
                « Chaque instant mérite d'être raconté avec authenticité, précision et
                sensibilité artistique. »
              </blockquote>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="bg-secondary p-10 h-full">
              <div className="eyebrow text-[var(--ochre-deep)]">Ma mission</div>
              <p className="mt-6 text-lg text-foreground/80 leading-relaxed">
                Offrir des images qui parlent, qui émeuvent et qui traversent le temps - pour
                que chaque client retrouve dans ses photos bien plus qu'un souvenir : une
                histoire.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Expérience française */}
      <section className="container-x mt-32">
        <Reveal>
          <div className="eyebrow">L'expérience française</div>
          <h2 className="font-display text-4xl md:text-5xl mt-4 max-w-3xl leading-tight">
            Un tournant décisif : le Service Civique en France.
          </h2>
        </Reveal>
        <div className="mt-10 grid lg:grid-cols-12 gap-10">
          <Reveal delay={0.1} className="lg:col-span-7 space-y-5 text-foreground/80">
            <p>
              Mon passage en France dans le cadre du Service Civique a représenté bien plus
              qu'un simple séjour : un véritable tournant dans ma vision de la photographie
              et du monde. En évoluant dans un contexte culturel différent, j'ai appris à
              élargir mon regard, à questionner mes automatismes visuels.
            </p>
            <p>
              Ce que j'y ai découvert, c'est que{" "}
              <em className="text-[var(--ochre-deep)] not-italic font-medium">
                la photographie est un langage universel
              </em>{" "}
              - un outil puissant capable de créer des ponts entre les peuples, de documenter
              l'humanité dans toute sa diversité et de provoquer des prises de conscience.
            </p>
          </Reveal>
          <Reveal delay={0.2} className="lg:col-span-5">
            <div className="border-l-2 border-[var(--ochre)] pl-6 space-y-4">
              <div className="eyebrow text-foreground/60">Ce que la France m'a appris</div>
              <ul className="space-y-3 text-sm">
                <li>Élargir son regard au-delà de son horizon culturel</li>
                <li>La photographie comme vecteur de dialogue interculturel</li>
                <li>L'exigence professionnelle au service de l'art</li>
                <li>L'impact d'une image dépasse le moment de sa création</li>
                <li>La valeur d'un réseau international pour un artiste africain</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Scène internationale */}
      <section className="container-x mt-32">
        <Reveal>
          <div className="eyebrow">Une présence scénique internationale</div>
          <h2 className="font-display text-4xl md:text-5xl mt-4 max-w-3xl">
            Des scènes qui m'ont façonné.
          </h2>
        </Reveal>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {experiences.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.05}>
              <article className="group relative bg-background p-8 h-full overflow-hidden transition-colors hover:bg-secondary">
                <h3 className="font-display text-xl leading-snug">{e.title}</h3>
                <p className="mt-3 text-sm text-foreground/70 leading-relaxed">
                  {e.description}
                </p>
                <div className="mt-6 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0">
                  <Link
                    to="/galerie"
                    search={{ cat: "Événements" }}
                    className="inline-flex items-center gap-2 border border-[var(--ink)] px-5 py-2.5 text-[0.7rem] uppercase tracking-[0.2em] transition hover:bg-[var(--ink)] hover:text-[var(--cream)]"
                  >
                    Voir la galerie <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

      </section>

      {/* Institutions académiques */}
      <section className="mt-32 bg-foreground text-background py-24">
        <div className="container-x">
          <Reveal>
            <div className="eyebrow" style={{ color: "var(--ochre)" }}>
              Institutions partenaires
            </div>
            <h2 className="font-display text-4xl md:text-5xl mt-4 max-w-3xl">
              Le monde académique béninois m'a accordé sa confiance.
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            {institutions.map((inst, i) => (
              <Reveal key={inst.name} delay={i * 0.06}>
                <div className="border-t border-background/20 pt-6">
                  <div className="font-display text-4xl">{inst.name}</div>
                  <div className="eyebrow mt-3 opacity-70">{inst.detail}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <p className="mt-12 max-w-2xl text-background/70 italic">
              Couvrir une soutenance ou une conférence, c'est bien plus que photographier des
              personnes. C'est documenter une étape de vie, un accomplissement, un tournant
              décisif - et cela mérite d'être fait avec soin et dignité.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Chiffres */}
      <section className="container-x mt-32">
        <Reveal>
          <div className="eyebrow">Mon parcours en chiffres</div>
          <h2 className="font-display text-4xl md:text-5xl mt-4 max-w-3xl">
            Des années de passion, de terrain et d'engagement.
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="border-l-2 border-[var(--ochre)] pl-4">
                <div className="font-display text-5xl md:text-6xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="eyebrow mt-3 text-foreground/70">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Citation finale + CTA */}
      <section className="container-x mt-32">
        <Reveal>
          <figure className="max-w-3xl">
            <blockquote className="font-display text-3xl md:text-5xl leading-[1.1]">
              « La photographie, c'est l'art de figer l'éphémère pour le{" "}
              <em className="text-[var(--ochre-deep)]">rendre éternel</em>. »
            </blockquote>
            <figcaption className="signature mt-8">S. Régis HOUINSOU</figcaption>
            <div className="eyebrow mt-1 text-muted-foreground">
              Régis l'Œil Artistique
            </div>
          </figure>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link to="/services" className="btn-primary">
              Découvrir mes services <ArrowRight size={16} />
            </Link>
            <a href="/#contact" className="btn-ghost">
              Prendre contact
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
