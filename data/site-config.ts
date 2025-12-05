export const siteConfig = {
  // Configuration générale du site
  name: "NIRD",
  tagline: "Numérique Inclusif, Responsable et Durable",
  logo: {
    src: "/nird-logo.png",
    alt: "NIRD - Numérique Inclusif, Responsable et Durable",
    width: 150,
    height: 150,
  },
  
  // Configuration du header
  header: {
    navigation: [
      {
        label: "Démarche NIRD",
        items: [
          { label: "Les 4 Piliers", href: "/#piliers" },
          { label: "Les Acteurs", href: "/#acteurs" },
          { label: "Site officiel NIRD", href: "https://nird.forge.apps.education.fr/" },
        ],
      },
      {
        label: "Actions",
        items: [
          { label: "🐧 Adopter Linux", href: "/linux" },
          { label: "♻️ Réemploi", href: "/reemploi" },
          { label: "📚 Mutualiser (Forge)", href: "/forge" },
          { label: "🌱 Sobriété Numérique", href: "/sobriete" },
        ],
      },
      {
        label: "Communauté",
        items: [
          { label: "Rejoindre sur Tchap", href: "https://edurl.fr/tchap-laforgeedu-nird" },
          { label: "La Forge", href: "https://forge.apps.education.fr/" },
          { label: "Documentation Forge", href: "https://docs.forge.apps.education.fr/" },
        ],
      },
    ],
  },

  // Configuration du Hero
  hero: {
    title: "La dépendance des écoles aux géants de la tech",
    subtitle: "Face aux dépendances technologiques, construisons ensemble un numérique éducatif autonome et durable",
    description:
      "NIRD est une démarche collective pour libérer les établissements scolaires de l'emprise des Big Tech : matériel obsolète, licences coûteuses, données hors UE... Reprenons le pouvoir d'agir !",
    cta: {
      primary: {
        text: "Découvrir la démarche",
        href: "https://nird.forge.apps.education.fr/demarche/",
      },
      secondary: {
        text: "Rejoindre le mouvement",
        href: "https://edurl.fr/tchap-laforgeedu-nird",
      },
    },
    image: {
      src: "/distribution-linux-nird.png",
      alt: "Linux NIRD",
    },
  },

  // Configuration des features (Les 3 piliers + actions clés)
  features: {
    title: "Les Piliers de NIRD",
    subtitle: "Quatre valeurs pour transformer le numérique éducatif",
    items: [
      {
        icon: "Users",
        title: "Inclusif",
        description:
          "Rendre le numérique accessible à tous, sans dépendance à des écosystèmes fermés ou coûteux.",
      },
      {
        icon: "Shield",
        title: "Responsable",
        description:
          "Protéger les données personnelles, privilégier les solutions éthiques et souveraines.",
      },
      {
        icon: "Recycle",
        title: "Durable",
        description:
          "Lutter contre l'obsolescence programmée, réemployer le matériel, adopter Linux et les logiciels libres.",
      },
      {
        icon: "Lightbulb",
        title: "Autonomie",
        description:
          "Donner aux équipes éducatives les moyens techniques et les connaissances pour agir.",
      },
    ],
  },

  // Les actions concrètes
  actions: {
    title: "Comment agir ?",
    subtitle: "Des actions concrètes pour réduire vos dépendances numériques",
    items: [
      {
        icon: "Laptop",
        title: "Adopter Linux",
        description: "Prolongez la vie de votre matériel en installant un système d'exploitation libre et performant.",
        link: "/linux",
      },
      {
        icon: "RefreshCw",
        title: "Réemployer & Reconditionner",
        description: "Donnez une seconde vie aux ordinateurs plutôt que de les jeter prématurément.",
        link: "/reemploi",
      },
      {
        icon: "Book",
        title: "Mutualiser les Ressources",
        description: "Partagez et utilisez des outils libres via la Forge des communs numériques éducatifs.",
        link: "/forge",
      },
      {
        icon: "Sprout",
        title: "Sobriété Numérique",
        description: "Sensibilisez élèves et équipes aux impacts environnementaux du numérique.",
        link: "/sobriete",
      },
    ],
  },

  // Les acteurs du projet
  acteurs: {
    title: "Qui porte NIRD ?",
    subtitle: "Un collectif d'acteurs engagés pour un numérique éducatif libre",
    list: [
      "Élèves et éco-délégués",
      "Enseignants et enseignantes",
      "Directions d'établissements",
      "Techniciens et administrateurs réseaux",
      "Associations partenaires",
      "Collectivités territoriales",
      "Services académiques et ministère",
    ],
  },

  // Configuration du footer
  footer: {
    description: "NIRD est porté par la Forge des communs numériques éducatifs, soutenue par la Direction du numérique pour l'éducation.",
    copyright: `© ${new Date().getFullYear()} NIRD - Sous licence libre`,
    links: [
      {
        title: "Actions NIRD",
        items: [
          { label: "Adopter Linux", href: "/linux" },
          { label: "Réemploi", href: "/reemploi" },
          { label: "Mutualiser", href: "/forge" },
          { label: "Sobriété", href: "/sobriete" },
        ],
      },
      {
        title: "Ressources",
        items: [
          { label: "Site officiel NIRD", href: "https://nird.forge.apps.education.fr/" },
          { label: "La Forge", href: "https://forge.apps.education.fr/" },
          { label: "Documentation", href: "https://docs.forge.apps.education.fr/" },
        ],
      },
      {
        title: "Communauté",
        items: [
          { label: "Rejoindre sur Tchap", href: "https://edurl.fr/tchap-laforgeedu-nird" },
          { label: "Les Acteurs", href: "/#acteurs" },
          { label: "Les 3 Piliers", href: "/#piliers" },
        ],
      },
    ],
    social: [
      { platform: "Site Web", url: "https://nird.forge.apps.education.fr/", icon: "Globe" },
      { platform: "Forge", url: "https://forge.apps.education.fr", icon: "GitBranch" },
      { platform: "Tchap", url: "https://edurl.fr/tchap-laforgeedu-nird", icon: "Mail" },
    ],
  },
};

export type SiteConfig = typeof siteConfig;
