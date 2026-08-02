import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { photos, categories, type PhotoCategory } from "@/data/photos";
import { useGallery } from "@/store/gallery";
import { Lightbox } from "@/components/Lightbox";

export const Route = createFileRoute("/galerie")({
  validateSearch: (search: Record<string, unknown>) => ({
    cat:
      typeof search.cat === "string" && (categories as string[]).includes(search.cat)
        ? (search.cat as "Tout" | PhotoCategory)
        : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Galerie · Régis - L'Œil Artistique" },
      { name: "description", content: "Galerie complète de photographies : portraits, mariages, corporate, nature, événements. Studio Régis Houinsou, Porto-Novo." },
      { property: "og:title", content: "Galerie · Régis - L'Œil Artistique" },
      { property: "og:description", content: "Plus de vingt images choisies, par catégorie." },
      { property: "og:url", content: "/galerie" },
    ],
    links: [{ rel: "canonical", href: "/galerie" }],
  }),
  component: Gallery,
});

function Gallery() {
  const { cat } = Route.useSearch();
  const { filter, setFilter, openLightbox, lightboxIndex, closeLightbox, next, prev } = useGallery();
  useEffect(() => {
    if (cat) setFilter(cat);
  }, [cat, setFilter]);
  const filtered = filter === "Tout" ? photos : photos.filter((p) => p.category === filter);


  return (
    <div className="pt-32 pb-24">
      <div className="container-x">
        <div className="eyebrow">Galerie</div>
        <h1 className="font-display text-5xl md:text-7xl mt-4 max-w-3xl leading-[1]">
          Vingt-deux images, un même <em className="text-[var(--ochre-deep)]">regard</em>.
        </h1>

        <div className="mt-10 flex flex-wrap gap-2 items-center">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c as "Tout" | PhotoCategory)}
              className={`text-xs uppercase tracking-widest px-4 py-2 rounded-full border transition-colors ${filter === c ? "bg-foreground text-background border-foreground" : "border-border hover:border-foreground"
                }`}
            >
              {c}
            </button>
          ))}
          <span className="ml-auto text-xs text-muted-foreground">
            {filtered.length} photo{filtered.length > 1 ? "s" : ""} affichée{filtered.length > 1 ? "s" : ""}
          </span>
        </div>

        <motion.div
          layout
          className="mt-10 columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.button
                layout
                key={p.id}
                onClick={() => openLightbox(i)}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: (i % 9) * 0.04 }}
                className="mb-4 block w-full break-inside-avoid overflow-hidden group bg-muted text-left"
              >
                <img
                  src={p.src}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="p-3 flex justify-between items-center">
                  <span className="font-display text-base">{p.title}</span>
                  <span className="eyebrow text-[var(--ochre-deep)]">{p.category}</span>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Lightbox
        photos={filtered}
        index={lightboxIndex}
        onClose={closeLightbox}
        onNext={() => next(filtered.length)}
        onPrev={() => prev(filtered.length)}
      />
    </div>
  );
}
