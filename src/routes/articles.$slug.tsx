import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { articles } from "@/data/articles";
import { ReadingProgress } from "@/components/ReadingProgress";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/articles/$slug")({
  loader: ({ params }) => {
    const article = articles.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    const related = articles.filter((a) => a.category === article.category && a.slug !== article.slug).slice(0, 3);
    return { article, related };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Article · Régis" }] };
    const { article } = loaderData;
    return {
      meta: [
        { title: `${article.title} · Journal Régis` },
        { name: "description", content: article.excerpt },
        { property: "og:title", content: article.title },
        { property: "og:description", content: article.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:image", content: article.cover },
        { property: "og:url", content: `/articles/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/articles/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            datePublished: article.date,
            author: { "@type": "Person", name: article.author },
            image: article.cover,
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="pt-32 container-x text-center">
      <h1 className="font-display text-4xl">Article introuvable</h1>
      <Link to="/articles" className="btn-ghost mt-6 inline-flex">Retour au journal</Link>
    </div>
  ),
  component: ArticlePage,
});

function ArticlePage() {
  const { article, related } = Route.useLoaderData();

  return (
    <>
      <ReadingProgress />
      <article className="pt-28 pb-24">
        <header className="container-x max-w-4xl text-center">
          <div className="eyebrow">{article.category} · {article.readTime} min de lecture</div>
          <h1 className="font-display text-4xl md:text-6xl mt-5 leading-[1.05]">{article.title}</h1>
          <div className="mt-6 text-sm text-muted-foreground">
            Par {article.author} · {new Date(article.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
          </div>
        </header>

        <div className="container-x mt-12 max-w-5xl">
          <div className="aspect-[16/9] overflow-hidden bg-muted">
            <img src={article.cover} alt={article.title} className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="container-x mt-16 max-w-2xl">
          <div
            className="prose-content"
            dangerouslySetInnerHTML={{ __html: article.body }}
          />
          <div className="mt-16 pt-8 border-t border-border">
            <Link to="/articles" className="inline-flex items-center gap-2 text-sm hover:text-[var(--ochre-deep)]">
              <ArrowLeft size={16} /> Retour au journal
            </Link>
          </div>
        </div>

        {related.length > 0 && (
          <section className="container-x mt-24">
            <div className="eyebrow">Articles similaires</div>
            <h2 className="font-display text-3xl md:text-4xl mt-3">Pour continuer la lecture</h2>
            <div className="mt-10 grid md:grid-cols-3 gap-8">
              {related.map((a: typeof articles[number], i: number) => (
                <Reveal key={a.slug} delay={i * 0.05}>
                  <Link to="/articles/$slug" params={{ slug: a.slug }} className="block group">
                    <div className="aspect-[4/3] overflow-hidden bg-muted">
                      <img src={a.cover} alt={a.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="eyebrow mt-4">{a.category} · {a.readTime} min</div>
                    <h3 className="font-display text-xl mt-2 group-hover:text-[var(--ochre-deep)] transition-colors">{a.title}</h3>
                  </Link>
                </Reveal>
              ))}
            </div>
          </section>
        )}
      </article>

      <style>{`
        .prose-content { font-size: 1.05rem; line-height: 1.8; color: var(--color-foreground); }
        .prose-content .lead { font-family: var(--font-display); font-size: 1.5rem; line-height: 1.5; color: var(--color-foreground); margin-bottom: 2rem; }
        .prose-content p { margin: 1.25rem 0; }
        .prose-content h2 { font-family: var(--font-display); font-size: 2rem; margin: 3rem 0 1rem; }
        .prose-content blockquote { border-left: 2px solid var(--ochre); padding: 0.5rem 0 0.5rem 1.5rem; font-family: var(--font-display); font-style: italic; font-size: 1.35rem; margin: 2rem 0; color: var(--color-foreground); }
        .prose-content blockquote cite { display: block; font-size: 0.85rem; font-style: normal; margin-top: 0.5rem; color: var(--color-muted-foreground); font-family: var(--font-sans); }
        .prose-content img { width: 100%; height: auto; margin: 2.5rem 0; border-radius: 2px; }
      `}</style>
    </>
  );
}
