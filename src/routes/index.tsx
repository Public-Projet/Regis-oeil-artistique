import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Star, MapPin } from "lucide-react";
import { useState } from "react";
import { photos, categories, type PhotoCategory } from "@/data/photos";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { articles } from "@/data/articles";
import { Counter } from "@/components/Counter";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { Lightbox } from "@/components/Lightbox";
import { useGallery } from "@/store/gallery";

export const Route = createFileRoute("/")({
  validateSearch: (search: Record<string, unknown>): { subject?: string; message?: string } => ({
    subject: typeof search.subject === "string" ? search.subject : undefined,
    message: typeof search.message === "string" ? search.message : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Régis - L'Œil Artistique · Photographe à Porto-Novo" },
      { name: "description", content: "Photographe à Porto-Novo, Bénin. Portraits, mariages, reportages éditoriaux et corporate. Découvrez le studio de S. Régis Houinsou." },
      { property: "og:title", content: "Régis - L'Œil Artistique" },
      { property: "og:description", content: "Studio photographique à Porto-Novo, Bénin." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});


function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <GalleryPreview />
      <Testimonials />
      <BlogPreview />
      <Contact />
    </>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "url(https://cdn.jsdelivr.net/gh/public-projet/Files/ROA/Autre/0.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-background/30 via-background/70 to-background" />

      <div className="container-x grid lg:grid-cols-12 gap-12 items-end pb-20">
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="eyebrow"
          >
            Studio photographique · Porto-Novo, Bénin
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] mt-6 max-w-5xl"
          >
            La lumière comme<br />
            <em className="text-[var(--ochre-deep)]">langage</em>, l'instant<br />
            comme témoin.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-8 text-lg max-w-xl text-muted-foreground"
          >
            Portraits, mariages, reportages éditoriaux. Un regard sensible, une direction
            artistique précise, des images qui durent.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link to="/galerie" search={{ cat: "Tout" }} className="btn-primary">
              Voir la galerie <ArrowRight size={16} />
            </Link>
            <a href="#contact" className="btn-ghost">Prendre contact</a>
          </motion.div>
        </div>

        <div className="lg:col-span-4 grid grid-cols-3 lg:grid-cols-1 gap-6 lg:gap-8">
          <Stat value={420} suffix="+" label="séances réalisées" />
          <Stat value={12} label="années d'expérience" />
          <Stat value={98} suffix="%" label="satisfaction clients" />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, suffix, label }: { value: number; suffix?: string; label: string }) {
  return (
    <Reveal>
      <div className="border-l-2 border-[var(--ochre)] pl-4">
        <div className="font-display text-4xl md:text-5xl">
          <Counter to={value} suffix={suffix} />
        </div>
        <div className="eyebrow mt-2 text-foreground/70">{label}</div>
      </div>
    </Reveal>
  );
}

function About() {
  return (
    <section id="a-propos" className="py-32">
      <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="aspect-[4/5] overflow-hidden rounded-sm bg-muted">
            <img
              src="https://cdn.jsdelivr.net/gh/public-projet/Files/ROA/Persos/Assis.jpeg"
              alt="S. Régis Houinsou en studio"
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="eyebrow">À propos</div>
          <h2 className="font-display text-4xl md:text-5xl mt-4 leading-tight">
            Régis HOUINSOU, photographe passionné.
          </h2>
          <div className="mt-6 space-y-4 text-foreground/80">
            <p>
              Photographe professionnel béninois et fondateur de Régis l'Œil Artistique. <br />

              Je suis né au Bénin, un pays dont les couleurs, les visages, les traditions et les paysages nourrissent chaque jour mon regard. Derrière mon appareil photo, je ne cherche pas seulement à produire de belles images. Ce qui me passionne, c'est ce qu'elles racontent. Un sourire discret, une étreinte, un regard rempli de fierté ou une émotion que les mots ne suffisent pas toujours à exprimer.<br />

              La photographie est entrée dans ma vie comme une curiosité. Elle est devenue une passion, puis un métier, et aujourd'hui une véritable mission. J'aime l'idée qu'une image puisse traverser les années et permettre à quelqu'un de revivre un instant précieux, presque comme si le temps s'était arrêté.<br />

              Mon parcours m'a offert la chance de grandir aussi bien au Bénin qu'en France, où j'ai effectué un Service Civique de Réciprocité. Cette expérience a transformé ma façon de voir le monde, de rencontrer les autres et de raconter leurs histoires avec davantage de sensibilité et d'authenticité.<br />

              Régis l'Œil Artistique est né de cette envie de mettre mon regard au service des autres. J'accompagne les particuliers, les entreprises, les associations et les institutions dans la couverture de leurs événements, la réalisation de portraits et la création d'images qui mettent en valeur leur identité. J'accorde aussi une place importante à la transmission en formant de jeunes passionnés qui souhaitent découvrir l'univers de la photographie.<br />

              Je crois profondément que chaque personne a une histoire qui mérite d'être racontée et que chaque projet mérite d'être vécu avec attention, respect et passion. Mon rôle est de transformer ces instants en souvenirs sincères, vivants et intemporels.<br />

              Au fond, mon appareil photo n'est qu'un outil. Ce qui fait vraiment la différence, c'est le regard, l'écoute et la confiance que nous construisons ensemble.<br />

              Bienvenue dans mon univers. J'espère avoir le plaisir de raconter votre histoire à travers mon objectif.
            </p>
          </div>
          <div className="signature mt-8">S. Régis HOUINSOU</div>
          <div className="eyebrow mt-1 text-muted-foreground">Photographe - Directeur artistique</div>
        </Reveal>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-32 bg-secondary">
      <div className="container-x">
        <Reveal>
          <div className="max-w-2xl">
            <div className="eyebrow">Services</div>
            <h2 className="font-display text-4xl md:text-5xl mt-4">Des prestations sur mesure, pour chaque histoire.</h2>
          </div>
        </Reveal>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              to="/services/$id"
              params={{ id: s.slug }}
              className="block"
            >
              <Reveal delay={i * 0.05}>
                <div className="bg-secondary p-8 h-full hover:bg-background transition-colors group">
                  <div className="text-3xl text-[var(--ochre)]">{s.icon}</div>
                  <h3 className="font-display text-2xl mt-4">{s.title}</h3>
                  <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{s.description}</p>
                  <div className="mt-6 eyebrow text-foreground/60">{s.startingPrice}</div>
                </div>
              </Reveal>
            </Link>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link to="/services" className="btn-ghost">
            Toutes les prestations <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function GalleryPreview() {
  const [filter, setFilter] = useState<"Tout" | PhotoCategory>("Tout");
  const filtered = (filter === "Tout" ? photos : photos.filter((p) => p.category === filter)).slice(0, 6);
  const { openLightbox, lightboxIndex, closeLightbox, next, prev } = useGallery();

  return (
    <section id="galerie" className="py-32">
      <div className="container-x">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="eyebrow">Galerie</div>
              <h2 className="font-display text-4xl md:text-5xl mt-4 max-w-xl">Quelques images choisies.</h2>
            </div>
            <Link to="/galerie" search={{ cat: "Tout" }} className="btn-ghost self-start md:self-end">
              Voir toute la galerie <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`text-xs uppercase tracking-widest px-4 py-2 rounded-full border transition-colors ${filter === c ? "bg-foreground text-background border-foreground" : "border-border hover:border-foreground"
                }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
          {filtered.map((p, i) => (
            <motion.button
              layout
              key={p.id}
              onClick={() => openLightbox(i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`relative overflow-hidden group bg-muted ${p.orientation === "portrait" ? "aspect-[3/4]" : p.orientation === "square" ? "aspect-square" : "aspect-[4/3]"
                }`}
            >
              <img src={p.src} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 text-left text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="font-display text-lg">{p.title}</div>
                <div className="text-xs uppercase tracking-wider opacity-80">{p.category}</div>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
      <Lightbox
        photos={filtered}
        index={lightboxIndex}
        onClose={closeLightbox}
        onNext={() => next(filtered.length)}
        onPrev={() => prev(filtered.length)}
      />
    </section>
  );
}

function Testimonials() {
  return (
    <section id="temoignages" className="py-32 bg-foreground text-background">
      <div className="container-x">
        <Reveal>
          <div className="eyebrow" style={{ color: "var(--ochre)" }}>Témoignages</div>
          <h2 className="font-display text-4xl md:text-5xl mt-4 max-w-2xl">Ils m'ont fait confiance.</h2>
        </Reveal>
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className="border border-background/15 p-8 h-full">
                <div className="flex gap-1 text-[var(--ochre)]">
                  {Array.from({ length: t.rating }).map((_, k) => <Star key={k} size={16} fill="currentColor" />)}
                </div>
                <blockquote className="mt-5 font-display text-xl leading-snug">« {t.quote} »</blockquote>
                <figcaption className="mt-6 text-sm">
                  <div className="font-medium">{t.name}</div>
                  <div className="opacity-60">{t.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogPreview() {
  const recent = articles.slice(0, 3);
  return (
    <section id="blog" className="py-32">
      <div className="container-x">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="eyebrow">Journal</div>
              <h2 className="font-display text-4xl md:text-5xl mt-4">Carnets et coulisses.</h2>
            </div>
            <Link to="/articles" className="btn-ghost self-start md:self-end">
              Lire tous les articles <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {recent.map((a, i) => (
            <Reveal key={a.slug} delay={i * 0.08}>
              <Link to="/articles/$slug" params={{ slug: a.slug }} className="block group">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img src={a.cover} alt={a.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="eyebrow mt-4">{a.category} · {a.readTime} min</div>
                <h3 className="font-display text-2xl mt-2 group-hover:text-[var(--ochre-deep)] transition-colors">{a.title}</h3>
                <p className="mt-2 text-sm text-foreground/70">{a.excerpt}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { subject, message } = Route.useSearch();
  return (

    <section id="contact" className="py-32 bg-secondary">
      <div className="container-x grid lg:grid-cols-2 gap-16">
        <Reveal>
          <div className="eyebrow">Contact</div>
          <h2 className="font-display text-4xl md:text-5xl mt-4 leading-tight">
            Parlons de votre prochain projet.
          </h2>
          <p className="mt-6 text-foreground/70 max-w-md">
            Pour une séance, un mariage, un reportage ou une commande éditoriale : écrivez-moi,
            je réponds sous 48 h.
          </p>
          <div className="mt-10 space-y-3 text-sm">
            <div className="flex items-center gap-3"><MapPin size={18} className="text-[var(--ochre)]" /> Porto-Novo, Bénin</div>
            <div className="pl-7 text-foreground/70">regisphotography5@gmail.com</div>
            <div className="pl-7 text-foreground/70">+229 01 67 56 04 96</div>
          </div>
          <div className="signature mt-10">S. Régis HOUINSOU</div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="bg-background p-8 md:p-10 rounded-sm">
            <ContactForm defaultSubject={subject ?? ""} defaultMessage={message ?? ""} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
