import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import { articles } from "@/data/articles";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/articles")({
  head: () => ({
    meta: [
      { title: "Journal · Régis - L'Œil Artistique" },
      { name: "description", content: "Carnets, conseils et coulisses du studio photographique Régis Houinsou à Porto-Novo." },
      { property: "og:title", content: "Journal · Régis - L'Œil Artistique" },
      { property: "og:description", content: "Articles sur la photographie, le portrait, le mariage et la lumière." },
      { property: "og:url", content: "/articles" },
    ],
    links: [{ rel: "canonical", href: "/articles" }],
  }),
  component: ArticlesLayout,
});

function ArticlesLayout() {
  const matches = useMatches();
  const isChild = matches.some((m) => m.routeId === "/articles/$slug");
  if (isChild) return <Outlet />;
  return <ArticlesIndex />;
}

function ArticlesIndex() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<string>("Toutes");
  const cats = useMemo(() => ["Toutes", ...Array.from(new Set(articles.map((a) => a.category)))], []);

  const featured = articles.find((a) => a.featured);
  const others = articles.filter((a) => !a.featured);

  const filtered = others.filter((a) => {
    const matchCat = cat === "Toutes" || a.category === cat;
    const q = query.trim().toLowerCase();
    const matchQ = !q || a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q);
    return matchCat && matchQ;
  });

  return (
    <div className="pt-32 pb-24">
      <div className="container-x">
        <div className="eyebrow">Journal</div>
        <h1 className="font-display text-5xl md:text-7xl mt-4 max-w-3xl leading-[1]">
          Notes d'<em className="text-[var(--ochre-deep)]">atelier</em>.
        </h1>

        {featured && (
          <Reveal>
            <Link
              to="/articles/$slug"
              params={{ slug: featured.slug }}
              className="mt-16 grid lg:grid-cols-2 gap-8 group items-center"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img src={featured.cover} alt={featured.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div>
                <div className="eyebrow">À la une · {featured.category}</div>
                <h2 className="font-display text-3xl md:text-5xl mt-3 group-hover:text-[var(--ochre-deep)] transition-colors">{featured.title}</h2>
                <p className="mt-4 text-foreground/70">{featured.excerpt}</p>
                <div className="mt-6 text-xs uppercase tracking-widest text-muted-foreground">
                  {new Date(featured.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })} · {featured.readTime} min de lecture
                </div>
                <span className="inline-flex items-center gap-2 mt-6 text-sm text-[var(--ochre-deep)] group-hover:gap-3 transition-all">
                  Lire l'article <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          </Reveal>
        )}

        <div className="mt-20 flex flex-col md:flex-row gap-4 md:items-center justify-between border-y border-border py-5">
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`text-xs uppercase tracking-widest px-3 py-1.5 rounded-full border transition-colors ${cat === c ? "bg-foreground text-background border-foreground" : "border-border hover:border-foreground"
                  }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="relative md:w-72">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher…"
              className="w-full bg-transparent border border-border rounded-full pl-9 pr-4 py-2 text-sm outline-none focus:border-foreground"
            />
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filtered.map((a, i) => (
            <motion.div
              key={a.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
            >
              <Link to="/articles/$slug" params={{ slug: a.slug }} className="block group">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img src={a.cover} alt={a.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="eyebrow mt-4">{a.category} · {a.readTime} min</div>
                <h3 className="font-display text-2xl mt-2 group-hover:text-[var(--ochre-deep)] transition-colors">{a.title}</h3>
                <p className="mt-2 text-sm text-foreground/70 line-clamp-2">{a.excerpt}</p>
                <div className="mt-3 text-xs text-muted-foreground">
                  {new Date(a.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
                </div>
              </Link>
            </motion.div>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full text-center py-20 text-muted-foreground">
              Aucun article ne correspond à votre recherche.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
