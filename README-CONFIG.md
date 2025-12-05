# Guide de Configuration du Site

## 📁 Structure des Données

Tout le contenu du site est centralisé dans le dossier `/data/site-config.ts`. Vous pouvez modifier le contenu en éditant simplement ce fichier.

## 🎨 Configuration Disponible

### 1. **Informations Générales**
```typescript
name: "NIRD"  // Nom du site
logo: {
  src: "/nird-logo.png",  // Chemin vers le logo
  alt: "NIRD Logo",
  width: 150,
  height: 150,
}
```

### 2. **Header / Navigation**
```typescript
header: {
  navigation: [
    {
      label: "Solutions",  // Nom du menu
      items: [
        { label: "Plateforme IA", href: "#plateforme" },
        // Ajoutez d'autres éléments ici
      ],
    },
  ],
}
```

### 3. **Hero Section**
```typescript
hero: {
  title: "Votre titre principal",
  subtitle: "Votre sous-titre",
  description: "Votre description",
  cta: {
    primary: {
      text: "Texte du bouton principal",
      href: "#lien",
    },
    secondary: {
      text: "Texte du bouton secondaire",
      href: "#lien",
    },
  },
}
```

### 4. **Features Section**
```typescript
features: {
  title: "Nos Solutions",
  subtitle: "Des outils puissants",
  items: [
    {
      icon: "Brain",  // Brain, Zap, Shield, Users
      title: "Titre de la feature",
      description: "Description de la feature",
    },
  ],
}
```

### 5. **Footer**
```typescript
footer: {
  copyright: "© 2025 NIRD",
  links: [...],
  social: [...],
}
```

## 🚀 Comment Modifier le Contenu

1. Ouvrez le fichier `/data/site-config.ts`
2. Modifiez les valeurs que vous souhaitez changer
3. Sauvegardez le fichier
4. Le site se met à jour automatiquement !

## 🎯 Icônes Disponibles pour les Features

- `Brain` - Intelligence Artificielle
- `Zap` - Rapidité / Automatisation
- `Shield` - Sécurité
- `Users` - Collaboration

Pour ajouter d'autres icônes, importez-les depuis `lucide-react` dans `/app/components/landing-page/Features.tsx`.

## 📝 Exemple : Ajouter un Nouveau Menu

```typescript
header: {
  navigation: [
    // ... menus existants
    {
      label: "Nouveau Menu",
      items: [
        { label: "Option 1", href: "#option1" },
        { label: "Option 2", href: "#option2" },
      ],
    },
  ],
}
```

## 🎨 Personnalisation des Couleurs

Les couleurs principales utilisent le thème vert. Pour modifier :
- Éditez les classes Tailwind dans les composants
- Ou configurez `tailwind.config.ts` pour vos couleurs personnalisées

## 📦 Structure des Composants

```
app/components/landing-page/
├── Header.tsx      - Navigation principale
├── Hero.tsx        - Section hero (bannière)
├── Features.tsx    - Section des fonctionnalités
└── LandingPage.tsx - Assemblage de tous les composants
```

Tous ces composants utilisent les données de `/data/site-config.ts` !
