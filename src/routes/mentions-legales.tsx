import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions légales · Régis - L'Œil Artistique" },
      { name: "description", content: "Mentions légales du studio Régis - L'Œil Artistique, Porto-Novo." },
      { property: "og:title", content: "Mentions légales" },
      { property: "og:url", content: "/mentions-legales" },
    ],
    links: [{ rel: "canonical", href: "/mentions-legales" }],
  }),
  component: () => (
    <div className="pt-32 pb-24 container-x max-w-3xl">
      <div className="eyebrow">Informations</div>
      <h1 className="font-display text-5xl mt-4">Mentions légales</h1>
      <div className="mt-10 space-y-8 text-foreground/80 text-[15px] leading-relaxed">
        <section>
          <h2 className="font-display text-2xl text-foreground">Éditeur du site</h2>
          <p className="mt-3">
            Régis - L'Œil Artistique<br />
            Studio photographique de S. Régis Houinsou<br />
            Quartier Avassa, Porto-Novo, République du Bénin<br />
            Email : regisphotography5@gmail.com<br />
            Téléphone : +229 01 67 56 04 96
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-foreground">Directeur de la publication</h2>
          <p className="mt-3">S. Régis Houinsou</p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-foreground">Hébergement</h2>
          <p className="mt-3">Le site est hébergé sur les infrastructures de <a href="https://stafprint.com/" className="underline">STAF PRINT CENTER</a>. Les serveurs sont localisés en Europe.</p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-foreground">Propriété intellectuelle</h2>
          <p className="mt-3">
            L'ensemble des photographies, textes, identités visuelles et éléments graphiques
            présents sur ce site sont la propriété exclusive de S. Régis Houinsou. Toute
            reproduction, représentation ou exploitation, totale ou partielle, sans autorisation
            écrite préalable est strictement interdite.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-foreground">Données personnelles</h2>
          <p className="mt-3">
            Les informations recueillies via le formulaire de contact sont uniquement utilisées
            pour répondre à vos demandes. Elles ne font l'objet d'aucune cession à des tiers.
            Conformément à la loi, vous disposez d'un droit d'accès, de rectification et de
            suppression de vos données.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-foreground">Crédits</h2>
          <p className="mt-3">Conception et développement : Studio Régis. Typographies : Cormorant Garamond, Inter, Italianno.</p>
        </section>
      </div>
    </div>
  ),
});
