export interface Formula {
  name: string;
  price: string;
  highlight?: boolean;
  features: string[];
}

export interface Service {
  slug: string;
  icon: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  longDescription: string;
  startingPrice: string;
  features: string[];
  formulas: Formula[];
  options?: { label: string; price: string }[];
}

export const services: Service[] = [
  {
    slug: "mariage",
    icon: "❀",
    number: "01",
    title: "Couverture de Mariage",
    category: "Mariages & Événements",
    tagline: "Le jour le plus important de votre vie.",
    description:
      "Trois formules pensées pour s'adapter à chaque projet, du plus intime au plus prestigieux.",
    longDescription:
      "Le jour le plus important de votre vie mérite une couverture photographique à la hauteur de vos émotions. Je couvre votre cérémonie avec discrétion et anticipation permanente, pour saisir les regards complices, les larmes de joie, les éclats de rire - tous ces instants fugaces qui forment la trame d'un album de vie.",
    startingPrice: "à partir de 80 000 FCFA",
    features: [
      "Cérémonie civile, religieuse & traditionnelle",
      "Portraits des mariés et de famille",
      "Reportage complet de la réception",
      "Galerie privée en ligne",
    ],
    formulas: [
      {
        name: "Essentiel",
        price: "80 000 FCFA",
        features: [
          "4 heures de couverture",
          "150 photos retouchées",
          "Galerie en ligne",
        ],
      },
      {
        name: "Premium",
        price: "150 000 FCFA",
        highlight: true,
        features: [
          "Journée complète",
          "300 photos retouchées",
          "Album numérique",
          "Séance couple incluse",
        ],
      },
      {
        name: "Prestige",
        price: "250 000 FCFA",
        features: [
          "Deux photographes",
          "Journée complète",
          "Album photo + galerie privée",
          "Tirages inclus",
        ],
      },
    ],
  },
  {
    slug: "evenements",
    icon: "✧",
    number: "02",
    title: "Événements & Célébrations",
    category: "Mariages & Événements",
    tagline: "Chaque moment mérite d'être capturé.",
    description:
      "Anniversaires, baptêmes, conférences, concerts, événements d'entreprise - une couverture adaptée à chaque projet.",
    longDescription:
      "Anniversaires, baptêmes, communions, conférences, concerts ou événements d'entreprise : chaque moment de vie et chaque rencontre professionnelle mérite d'être capturé avec soin. Formules adaptées à la durée, à l'ampleur et à la nature de votre projet, avec remise rapide des photos retouchées.",
    startingPrice: "à partir de 40 000 FCFA",
    features: [
      "Reportage discret et dynamique",
      "Portraits des intervenants",
      "Livraison rapide",
      "Galerie en ligne partageable",
    ],
    formulas: [
      {
        name: "Anniversaire",
        price: "40 000 FCFA",
        features: ["2 heures de couverture", "80 photos retouchées", "Sourires & émotions garantis"],
      },
      {
        name: "Baptême / Communion",
        price: "50 000 FCFA",
        features: ["3 heures de couverture", "120 photos retouchées", "Souvenirs pour la famille"],
      },
      {
        name: "Conférence / Séminaire",
        price: "60 000 FCFA",
        features: ["Demi-journée : 60 000 FCFA", "Journée complète : 100 000 FCFA", "Portraits des intervenants"],
      },
      {
        name: "Concert / Festival",
        price: "80 000 FCFA",
        features: ["Couverture dynamique scénique", "Ambiance & performances", "Livraison rapide communication"],
      },
      {
        name: "Événement d'Entreprise",
        price: "100 000 FCFA",
        highlight: true,
        features: ["Team building, lancement, gala", "Couverture professionnelle", "Valorisation de votre image"],
      },
    ],
  },
  {
    slug: "portraits",
    icon: "✦",
    number: "03",
    title: "Portraits Professionnels & Artistiques",
    category: "Portraits & Studio",
    tagline: "Un regard qui vous ressemble.",
    description:
      "Portrait pro, artistique ou corporate. Direction de pose, retouches soignées, résultats professionnels.",
    longDescription:
      "Chaque portrait est pensé pour révéler votre personnalité - pas seulement votre image. Séance en studio ou en extérieur, direction artistique complète, choix des ambiances lumineuses et retouches professionnelles.",
    startingPrice: "à partir de 25 000 FCFA",
    features: [
      "Direction de pose personnalisée",
      "Studio ou extérieur",
      "Retouches HD professionnelles",
      "Livraison en galerie privée",
    ],
    formulas: [
      {
        name: "Portrait Pro - Standard",
        price: "25 000 FCFA",
        features: ["5 photos HD", "Retouches soignées"],
      },
      {
        name: "Portrait Pro - Premium",
        price: "45 000 FCFA",
        highlight: true,
        features: ["10 photos HD", "Plusieurs tenues", "Retouches avancées"],
      },
      {
        name: "Portrait Artistique",
        price: "à partir de 35 000 FCFA",
        features: [
          "Accompagnement artistique personnalisé",
          "Direction de pose professionnelle",
          "Retouches avancées",
        ],
      },
      {
        name: "Portrait Corporate",
        price: "à partir de 40 000 FCFA",
        features: [
          "Idéal dirigeants & entrepreneurs",
          "Image professionnelle affirmée",
          "Cohérence pour toute une équipe",
        ],
      },
    ],
  },
  {
    slug: "vie",
    icon: "❈",
    number: "04",
    title: "Portraits de Vie - Couple, Famille & Enfants",
    category: "Portraits & Studio",
    tagline: "Les liens qui nous unissent, sublimés.",
    description:
      "Séances chaleureuses pour immortaliser l'amour, la famille et l'enfance dans toute leur authenticité.",
    longDescription:
      "Les liens qui nous unissent méritent d'être sublimés. Des séances photo chaleureuses - en studio ou en extérieur - pour immortaliser l'amour, la complicité familiale et l'enfance dans toute leur authenticité.",
    startingPrice: "à partir de 30 000 FCFA",
    features: [
      "Direction de pose bienveillante",
      "Cadre naturel ou studio",
      "Retouches professionnelles incluses",
      "Galerie privée en ligne",
    ],
    formulas: [
      {
        name: "Shooting Couple - Standard",
        price: "40 000 FCFA",
        features: ["Séance romantique studio ou extérieur", "Direction de pose", "Retouches incluses"],
      },
      {
        name: "Shooting Couple - Premium",
        price: "70 000 FCFA",
        highlight: true,
        features: ["Séance étendue multi-décors", "Retouches avancées", "Galerie privée"],
      },
      {
        name: "Shooting Famille",
        price: "à partir de 50 000 FCFA",
        features: ["Complicité familiale", "Cadre naturel ou studio", "Retouches professionnelles"],
      },
      {
        name: "Shooting Enfant",
        price: "à partir de 30 000 FCFA",
        features: ["Photos spontanées et lumineuses", "Approche ludique", "Souvenirs des plus belles années"],
      },
      {
        name: "Shooting Grossesse",
        price: "à partir de 45 000 FCFA",
        features: ["Séance délicate & émouvante", "Élégance et douceur", "Célébration de la maternité"],
      },
    ],
  },
  {
    slug: "commercial",
    icon: "◈",
    number: "05",
    title: "Photographie Commerciale & Spécialisée",
    category: "Produits & Immobilier",
    tagline: "Des images qui font vendre.",
    description:
      "Mode, immobilier, culinaire, produits e-commerce - une photographie qui valorise votre offre.",
    longDescription:
      "Sublimez vos produits, vos espaces et vos créations culinaires grâce à une photographie professionnelle qui valorise votre offre et attire vos clients. Des images percutantes pour réseaux sociaux, sites e-commerce et supports de communication.",
    startingPrice: "à partir de 3 000 FCFA",
    features: [
      "Direction artistique complète",
      "Stylisme & mise en scène",
      "Retouches haute qualité",
      "Fichiers optimisés web & print",
    ],
    formulas: [
      {
        name: "Mode & Mannequin",
        price: "à partir de 50 000 FCFA",
        features: ["Séances créateurs, marques, mannequins", "Direction artistique", "Retouches haute qualité"],
      },
      {
        name: "Immobilier",
        price: "à partir de 50 000 FCFA",
        features: ["Biens résidentiels & commerciaux", "Photos lumineuses & professionnelles", "Attire acheteurs & locataires"],
      },
      {
        name: "Culinaire",
        price: "5 000 FCFA / plat",
        features: ["Restaurants, traiteurs, blogs", "Stylisme soigné", "Mise en scène appétissante"],
      },
      {
        name: "Produit E-commerce",
        price: "3 000 FCFA / produit",
        highlight: true,
        features: ["1 à 10 produits : 3 000 F/produit", "+20 produits : sur devis", "Fond blanc, créatif ou lifestyle"],
      },
    ],
  },
  {
    slug: "media-drone",
    icon: "✺",
    number: "06",
    title: "Média, Reportage & Drone",
    category: "Reportages & Drone",
    tagline: "Un regard engagé, une narration puissante.",
    description:
      "Prestations pour professionnels de l'information, ONG, institutions et projets documentaires d'envergure.",
    longDescription:
      "Des prestations dédiées aux professionnels de l'information, ONG, institutions et projets documentaires. Un regard engagé et une narration visuelle puissante - sur le terrain comme dans les airs.",
    startingPrice: "à partir de 80 000 FCFA",
    features: [
      "Immersion & storytelling visuel",
      "Portraits & reportage",
      "Prises aériennes drone (selon disponibilité)",
      "Livraison en formats multi-supports",
    ],
    formulas: [
      {
        name: "Couverture Média",
        price: "à partir de 120 000 FCFA",
        features: ["ONG, associations, institutions", "Reportage photo & portraits", "Storytelling visuel complet"],
      },
      {
        name: "Reportage Documentaire",
        price: "à partir de 150 000 FCFA",
        highlight: true,
        features: ["Projets d'envergure", "Immersion sur la durée", "Narration visuelle approfondie"],
      },
      {
        name: "Prise de Vue par Drone",
        price: "à partir de 80 000 FCFA",
        features: ["Vues aériennes spectaculaires", "Événements, immobilier, paysages", "Selon disponibilité"],
      },
    ],
  },
  {
    slug: "retouche",
    icon: "✵",
    number: "07",
    title: "Retouche, Restauration & Impression",
    category: "Post-production",
    tagline: "Sublimer, préserver, imprimer.",
    description:
      "Retouche photo, restauration de photos anciennes et tirages Fine Art avec soin et précision.",
    longDescription:
      "Des services complémentaires pour sublimer vos images existantes ou conserver vos souvenirs les plus précieux. De la retouche basique à la restauration de photos anciennes, chaque prestation est réalisée avec soin et précision.",
    startingPrice: "à partir de 2 000 FCFA",
    features: [
      "Retouche basique ou avancée",
      "Restauration numérique minutieuse",
      "Impression multi-formats",
      "Tirages Fine Art qualité musée",
    ],
    formulas: [
      {
        name: "Retouche Basique",
        price: "2 000 FCFA / photo",
        features: ["Luminosité, contraste, couleurs", "Livraison rapide"],
      },
      {
        name: "Retouche Avancée",
        price: "5 000 FCFA / photo",
        highlight: true,
        features: ["Peaux, arrière-plans", "Effets créatifs", "Compositing complexe"],
      },
      {
        name: "Restauration Photos Anciennes",
        price: "à partir de 10 000 FCFA",
        features: ["Souvenirs abîmés par le temps", "Restauration numérique minutieuse", "Résultat émouvant"],
      },
      {
        name: "Impression / Fine Art",
        price: "sur devis",
        features: ["Tarifs selon format", "Tirages Fine Art qualité musée", "Encadrement en option"],
      },
    ],
  },
  {
    slug: "formations",
    icon: "❖",
    number: "08",
    title: "Formations Photographie",
    category: "Formations",
    tagline: "Transformez votre passion en métier.",
    description:
      "Formations progressives adaptées à tous les niveaux, du débutant au photographe en devenir.",
    longDescription:
      "Apprenez à maîtriser votre appareil, à développer votre regard artistique et à transformer votre passion en métier. Des formations progressives adaptées à tous les niveaux, du débutant complet au photographe souhaitant se professionnaliser.",
    startingPrice: "à partir de 20 000 FCFA",
    features: [
      "Théorie & pratique terrain",
      "Support pédagogique inclus",
      "Suivi personnalisé",
      "Approche professionnalisante",
    ],
    formulas: [
      {
        name: "Initiation",
        price: "50 000 FCFA",
        features: ["Théorie & pratique terrain", "Support PDF inclus", "Bonnes bases dès le départ"],
      },
      {
        name: "Lightroom",
        price: "à partir de 60 000 FCFA",
        features: ["Développement numérique", "Gestion de bibliothèque", "Workflow professionnel"],
      },
      {
        name: "Photoshop",
        price: "à partir de 80 000 FCFA",
        features: ["Retouches avancées", "Montages créatifs", "Techniques professionnelles"],
      },
      {
        name: "Formation Complète",
        price: "150 000 FCFA",
        highlight: true,
        features: [
          "Photographie + Lightroom + Photoshop",
          "Marketing du photographe",
          "Parcours complet vers le pro",
        ],
      },
      {
        name: "Accompagnement Individuel",
        price: "à partir de 20 000 FCFA / séance",
        features: ["Suivi adapté à vos objectifs", "Approche 1-to-1", "Progression sur mesure"],
      },
    ],
  },
];

export const globalOptions = [
  { label: "Livraison express", price: "+15 000 FCFA" },
  { label: "Galerie privée en ligne", price: "Offerte (Premium)" },
  { label: "Déplacement hors Porto-Novo", price: "sur devis" },
  { label: "Album photo", price: "à partir de 35 000 FCFA" },
  { label: "Clé USB personnalisée", price: "15 000 FCFA" },
  { label: "Tirages Fine Art", price: "sur devis" },
];
