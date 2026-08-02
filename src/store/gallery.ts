import { create } from "zustand";
import type { PhotoCategory } from "@/data/photos";

type Filter = "Tout" | PhotoCategory;

interface GalleryState {
  filter: Filter;
  lightboxIndex: number | null;
  setFilter: (f: Filter) => void;
  openLightbox: (i: number) => void;
  closeLightbox: () => void;
  next: (total: number) => void;
  prev: (total: number) => void;
}

export const useGallery = create<GalleryState>((set) => ({
  filter: "Tout",
  lightboxIndex: null,
  setFilter: (filter) => set({ filter }),
  openLightbox: (lightboxIndex) => set({ lightboxIndex }),
  closeLightbox: () => set({ lightboxIndex: null }),
  next: (total) =>
    set((s) => ({ lightboxIndex: s.lightboxIndex === null ? null : (s.lightboxIndex + 1) % total })),
  prev: (total) =>
    set((s) => ({ lightboxIndex: s.lightboxIndex === null ? null : (s.lightboxIndex - 1 + total) % total })),
}));
