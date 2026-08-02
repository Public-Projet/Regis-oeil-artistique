export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Jacqueline",
    role: "Etudiante à EPA",
    quote: "Ce qui marque le plus dans son travail, c’est sa capacité à capturer la beauté brute. Les photos sont magnifiques et réussissent à préserver la spontanéité des personnes, sans aucun artifice superflu. Un vrai talent pour sublimer la réalité..",
    rating: 5,
  },
  {
    name: "Anonyme",
    role: "Mariée",
    quote: "Ce qui distingue ce photographe de beaucoup d'autres à Porto-Novo, c'est son style. Les photos sont lumineuses, naturelles et authentiques. Chaque cliché conserve son réalisme tout en mettant les personnes en valeur avec beaucoup de finesse.",
    rating: 5,
  },
  {
    name: "Albert",
    role: "Photographe",
    quote: "Une collaboration très satisfaisante du début à la fin. Le professionnalisme, le sérieux et l'engagement ont été présents à chaque étape. La passion pour la photographie se ressent dans la qualité du travail livré. Une excellente expérience qui donne envie de collaborer à nouveau et de recommander ses services.",
    rating: 5,
  },
  {
    name: "Ghislain",
    role: "C. Com à la Mairie de P/Novo",
    quote: "Un travail tout simplement impeccable. La clarté, la netteté et l’authenticité des clichés sont absolument remarquables. Le point fort réside dans le côté naturel des images, totalement préservé, loin des filtres et des lissages excessifs.",
    rating: 5,
  },
];
