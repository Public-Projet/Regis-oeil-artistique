import realAsset from "@/assets/real.png.asset.json";

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: number;
  cover: string;
  author: string;
  featured?: boolean;
  body: string;
}

const r = (filename: string) => `${realAsset.baseUrl}${filename}`;

export const articles: Article[] = [
  {
    slug: "lumiere-de-porto-novo",
    title: "La lumière particulière de Porto-Novo",
    excerpt: "Pourquoi la capitale béninoise offre une palette de couleurs unique au photographe attentif.",
    category: "Carnet",
    date: "2026-05-18",
    readTime: 6,
    cover: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Grande_Mosquee_de_Porto-Novo.jpg",
    author: "S. Régis Houinsou",
    featured: true,
    body: `
<p class="lead">Porto-Novo, avec ses lagunes et son architecture afro-brésilienne, possède une atmosphère lumineuse incomparable. Pour le photographe, c'est un terrain de jeu où la lumière raconte l'histoire.</p>

<p>Dans la capitale béninoise, la lumière n'est jamais simple. Elle interagit avec la brique rouge des bâtiments de style colonial, les feuillages denses des arbres sacrés, et l'humidité qui monte de la lagune en début de matinée.</p>

<h2>La brume matinale de la lagune</h2>
<p>Le matin, vers 6h30, une fine brume s'élève au-dessus de l'eau. C'est le moment idéal pour capter des silhouettes douces et des nuances pastel. Cette lumière diffuse supprime les contrastes agressifs et confère aux portraits une douceur poétique unique.</p>

<blockquote>« À Porto-Novo, la lumière ne fait pas que révéler les formes, elle traverse le temps. »</blockquote>

<h2>Le jeu des ombres et des couleurs chaudes</h2>
<p>En fin d'après-midi, la lumière dorée vient frapper les façades ocres et jaunes des anciennes demeures. C'est à ce moment précis que Porto-Novo s'illumine. Les ombres s'étirent, créant des lignes graphiques puissantes que j'adore intégrer dans mes compositions.</p>

<p>Pour en tirer parti, il faut savoir ralentir et observer comment une simple ruelle se transforme en quelques minutes sous l'effet du soleil couchant.</p>
    `,
  },
  {
    slug: "preparer-portrait",
    title: "Comment se préparer pour une séance portrait",
    excerpt: "Cinq conseils pratiques pour aborder votre séance avec sérénité et obtenir des images justes.",
    category: "Conseils",
    date: "2026-04-22",
    readTime: 4,
    cover: r("15.jpg"),
    author: "S. Régis Houinsou",
    body: `
<p class="lead">Passer de l'autre côté de l'objectif n'est pas toujours un exercice facile. Voici quelques conseils simples pour aborder votre séance portrait en toute sérénité.</p>

<p>Une bonne photo de portrait est avant tout le résultat d'une connexion et d'une confiance mutuelle. La technique ne vient qu'après.</p>

<h2>Le choix des vêtements : restez vous-même</h2>
<p>Le premier conseil est de choisir des tenues dans lesquelles vous vous sentez à l'aise. Évitez les logos trop visibles ou les motifs trop complexes qui pourraient détourner le regard de votre visage. Privilégiez les tons neutres ou des couleurs en harmonie avec votre teint.</p>

<h2>Prendre le temps d'échanger avant la séance</h2>
<p>Avant de déclencher, nous prenons toujours un moment pour discuter autour d'un café ou d'une boisson fraîche. Parler de vos attentes, de ce que vous aimez (ou n'aimez pas) chez vous permet de dissiper le stress du début.</p>

<h2>La respiration et le mouvement</h2>
<p>Ne cherchez pas à poser de manière rigide. Le mouvement naturel est la clé. En respirant profondément et en vous concentrant sur l'instant présent, nous capterons ces expressions spontanées et sincères qui vous définissent vraiment.</p>
    `,
  },
  {
    slug: "portrait-corporate",
    title: "Le portrait corporate ne doit pas être ennuyeux",
    excerpt: "Donner du caractère à une photographie d'entreprise sans tomber dans le cliché.",
    category: "Corporate",
    date: "2026-03-15",
    readTime: 5,
    cover: r("16.jpg"),
    author: "S. Régis Houinsou",
    body: `
<p class="lead">Trop souvent associé à des fonds gris uniformes et des sourires forcés, le portrait corporate gagne à être réinventé pour refléter la véritable personnalité des collaborateurs.</p>

<p>Dans un monde professionnel de plus en plus visuel, votre portrait est souvent votre premier point de contact. Il doit inspirer confiance tout en affirmant votre singularité.</p>

<h2>Choisir des décors qui racontent une histoire</h2>
<p>Plutôt que le traditionnel fond studio uni, je privilégie souvent les environnements de travail réels, les lignes architecturales des bureaux ou des extérieurs urbains. Cela apporte du contexte et de la profondeur à l'image.</p>

<h2>La direction artistique au service de l'humain</h2>
<p>L'objectif est d'obtenir une attitude naturelle et dynamique. En discutant avec le sujet de son parcours ou de ses passions, on parvient à faire oublier la présence de la caméra pour capter un regard franc et déterminé.</p>

<h2>Un traitement moderne et soigné</h2>
<p>Le post-traitement doit rester subtil. L'accent est mis sur le contraste, la clarté et le respect des teintes naturelles pour offrir une image haut de gamme qui s'intègre parfaitement dans vos supports de communication.</p>
    `,
  },
  {
    slug: "argentique-aujourdhui",
    title: "Pourquoi je reviens à l'argentique",
    excerpt: "Le film impose une lenteur que le numérique a fait disparaître. C'est précieux.",
    category: "Carnet",
    date: "2026-02-28",
    readTime: 7,
    cover: r("19.jpg"),
    author: "S. Régis Houinsou",
    body: `
<p class="lead">À l'ère du tout-numérique et de la retouche instantanée, faire le choix du film argentique est une démarche artistique délibérée pour retrouver le sens du temps et du détail.</p>

<p>L'argentique impose un rythme totalement différent. Chaque déclenchement est mesuré, réfléchi et précieux.</p>

<h2>Le grain et la sensibilité des couleurs</h2>
<p>Le film possède une texture organique, un grain unique que les capteurs numériques tentent souvent de simuler sans jamais l'égaler. Les hautes lumières se fondent en douceur et les ombres conservent un mystère incomparable.</p>

<h2>La discipline du cadre limité</h2>
<p>Disposer de seulement 12 ou 36 poses oblige à une concentration maximale. On n'enchaîne pas les clichés en espérant qu'une photo soit bonne dans le lot. On observe, on attend le moment parfait, on règle la lumière avec précision, et seulement ensuite, on appuie.</p>

<h2>La surprise et l'attente du développement</h2>
<p>Ne pas voir l'image immédiatement sur un écran arrière change la relation au sujet. On reste concentré sur l'expérience vécue plutôt que sur le résultat immédiat. Le moment du développement en chambre noire reste une magie intacte.</p>
    `,
  },
  {
    slug: "noir-et-blanc",
    title: "Le noir et blanc comme parti pris",
    excerpt: "Retirer la couleur, c'est rendre à la forme et à la lumière leur première place.",
    category: "Technique",
    date: "2026-02-10",
    readTime: 6,
    cover: r("22.jpg"),
    author: "S. Régis Houinsou",
    body: `
<p class="lead">Retirer la couleur d'une image n'est pas une simple perte d'information ; c'est un choix esthétique fort qui révèle l'essence même de la composition photographique.</p>

<p>En enlevant la couleur, le spectateur n'est plus distrait. Son attention se porte naturellement sur les textures, les lignes et le contraste.</p>

<h2>La force des contrastes et des textures</h2>
<p>Le noir et blanc sublime les matières : les rides d'un visage, le grain de la peau, la rugosité d'un mur en terre ou les reflets sur l'eau. Il permet de sculpter le sujet uniquement à l'aide des ombres et de la lumière.</p>

<blockquote>« Quand vous photographiez les gens en couleur, vous photographiez leurs vêtements. Mais quand vous les photographiez en noir et blanc, vous photographiez leur âme. »<br/><cite>- Ted Grant</cite></blockquote>

<h2>Une intemporalité poétique</h2>
<p>Une image monochrome s'affranchit des repères temporels de la couleur. Elle acquiert immédiatement une dimension artistique et une poésie propice à la contemplation et à l'imaginaire.</p>
    `,
  },
  {
    slug: "matériel-debut",
    title: "Le matériel pour bien débuter",
    excerpt: "Un boîtier, deux objectifs, un trépied. Et beaucoup de marches à pied.",
    category: "Conseils",
    date: "2026-01-22",
    readTime: 5,
    cover: "https://apprenti-photographe.fr/wp-content/uploads/2021/02/Mat%C3%A9riel-photo-d%C3%A9butant-Apprenti-Photographe-Paul-Napo-6-700x429.jpg",
    author: "S. Régis Houinsou",
    body: `
<p class="lead">On me demande souvent quel boîtier ou quel objectif acheter pour commencer la photographie. La réponse est toujours la même : le meilleur outil est celui que vous maîtrisez.</p>

<p>Ne vous laissez pas submerger par la course technologique. L'œil fait la photo, pas le capteur.</p>

<h2>Un boîtier simple et un objectif fixe</h2>
<p>Pour débuter, je recommande un boîtier d'entrée de gamme d'occasion et une focale fixe de 50mm (ou 35mm). L'objectif fixe vous oblige à bouger, à chercher le bon cadre avec vos jambes plutôt qu'avec un zoom. C'est la meilleure école pour apprendre la composition.</p>

<h2>Comprendre le triangle d'exposition</h2>
<p>Avant d'acheter des accessoires coûteux, apprenez à maîtriser les bases : l'ouverture du diaphragme, la vitesse d'obturation et la sensibilité ISO. Jouer avec ces trois paramètres est ce qui vous donnera le contrôle créatif de vos images.</p>

<h2>Pratiquer quotidiennement</h2>
<p>Sortez tous les jours, même pour 15 minutes. Photographiez des scènes ordinaires, des détails du quotidien. C'est en faisant des erreurs et en analysant vos propres clichés que votre œil s'éduquera progressivement.</p>
    `,
  },
  {
    slug: "evenement-corporate",
    title: "Couvrir un événement d'entreprise en une journée",
    excerpt: "Méthodologie, repérage, anticipation : retour sur une mission éclair à Cotonou.",
    category: "Corporate",
    date: "2026-01-08",
    readTime: 7,
    cover: r("20.jpg"),
    author: "S. Régis Houinsou",
    body: `
<p class="lead">Documenter un événement corporate à fort enjeu demande réactivité, endurance et rigueur technique. Retour sur une journée intense de reportage à Cotonou.</p>

<p>Qu'il s'agisse d'un forum économique, d'un lancement de produit ou d'une soirée de gala, le photographe d'événement doit être partout sans jamais déranger.</p>

<h2>Le repérage précoce et l'adaptation à la lumière</h2>
<p>Arriver en avance sur les lieux est indispensable pour tester la lumière des salles de conférence (souvent complexe et changeante) et repérer les meilleurs angles de prise de vue. Cela permet d'ajuster ses réglages avant l'arrivée du public.</p>

<h2>La discrétion et la capture d'instants naturels</h2>
<p>Le secret d'un bon reportage événementiel réside dans la discrétion. En utilisant des objectifs à grande ouverture et des boîtiers silencieux, on se fond dans la foule pour capter les poignées de main sincères, les sourires complices et l'énergie réelle de l'événement.</p>

<h2>Une livraison rapide et soignée</h2>
<p>Les entreprises ont besoin de communiquer rapidement sur leurs réseaux sociaux. Une première sélection d'images marquantes doit être éditée et livrée dans les heures qui suivent la fin de l'événement pour répondre à ces exigences d'immédiateté.</p>
    `,
  },
];
