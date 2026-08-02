import realAsset from "@/assets/real.png.asset.json";

export type PhotoCategory = "Portrait" | "Mariage" | "Corporate" | "Nature" | "Événements";

export interface Photo {
  id: string;
  src: string;
  title: string;
  category: PhotoCategory;
  orientation: "portrait" | "landscape" | "square";
}

const r = (filename: string) => `${realAsset.baseUrl}${filename}`;

export const photos: Photo[] = [
  {
    id: "p1",
    src: r("1.jpg"),
    title: "Moulage d'agile",
    category: "Événements",
    orientation: "portrait"
  },
  {
    id: "p2",
    src: r("2.jpg"),
    title: "Pot d'agiles",
    category: "Nature",
    orientation: "landscape"
  },
  {
    id: "p3",
    src: r("3.jpg"),
    title: "Festival de masques",
    category: "Événements",
    orientation: "landscape"
  },
  {
    id: "p4",
    src: r("4.jpg"),
    title: "Gounouko",
    category: "Événements",
    orientation: "portrait"
  },
  {
    id: "p5",
    src: r("5.jpg"),
    title: "Bon appétit",
    category: "Événements",
    orientation: "landscape"
  },
  {
    id: "p6",
    src: r("6.jpg"),
    title: "Feu doux",
    category: "Événements",
    orientation: "portrait"
  },
  {
    id: "p7",
    src: r("7.jpg"),
    title: "Bon goût",
    category: "Événements",
    orientation: "landscape"
  },
  {
    id: "p8",
    src: r("8.jpg"),
    title: "Mangeons",
    category: "Événements",
    orientation: "landscape"
  },
  {
    id: "p9",
    src: r("9.jpg"),
    title: "Plat de poisson grillé",
    category: "Événements",
    orientation: "landscape"
  },
  {
    id: "p10",
    src: r("10.jpg"),
    title: "Fleur violette",
    category: "Nature",
    orientation: "portrait"
  },
  {
    id: "p11",
    src: r("11.jpg"),
    title: "Statue dans la nature",
    category: "Nature",
    orientation: "portrait"
  },
  {
    id: "p12",
    src: r("12.jpg"),
    title: "Sous les projecteurs",
    category: "Événements",
    orientation: "portrait",
  },
  {
    id: "p13",
    src: r("13.jpg"),
    title: "Bonne arrrivée TGANG",
    category: "Événements",
    orientation: "portrait"
  },
  {
    id: "p14",
    src: r("14.jpg"),
    title: "Faire du vélo",
    category: "Corporate",
    orientation: "landscape"
  },
  {
    id: "p15",
    src: r("15.jpg"),
    title: "Regard passif",
    category: "Portrait",
    orientation: "portrait"
  },
  {
    id: "p16",
    src: r("16.jpg"),
    title: "Visage doux",
    category: "Portrait",
    orientation: "square"
  },
  {
    id: "p17",
    src: r("17.jpg"),
    title: "En route vers l'autel",
    category: "Événements",
    orientation: "portrait"
  },
  {
    id: "p18",
    src: r("18.jpg"),
    title: "Rivière noire d'Adjarra",
    category: "Nature",
    orientation: "landscape"
  },
  {
    id: "p19",
    src: r("19.jpg"),
    title: "Couleur de bâtiment",
    category: "Corporate",
    orientation: "landscape"
  },
  {
    id: "p20",
    src: r("20.jpg"),
    title: "Soirée au SOFITEL",
    category: "Corporate",
    orientation: "landscape"
  },
  {
    id: "p21",
    src: r("21.jpg"),
    title: "Belles chnadelles",
    category: "Corporate",
    orientation: "landscape"
  },
  {
    id: "p22",
    src: r("22.jpg"),
    title: "Tisserand",
    category: "Événements",
    orientation: "landscape"
  },
];

export const categories: ("Tout" | PhotoCategory)[] = ["Tout", "Portrait", "Mariage", "Corporate", "Nature", "Événements"];
