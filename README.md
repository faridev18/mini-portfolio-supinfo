# Portfolio — Prince DEGBOE

Portfolio personnel de Prince DEGBOE, développeur mobile Flutter.  
Construit avec **React 19**, **Vite**, et **Tailwind CSS v4**.

---

## Prérequis

- [Node.js](https://nodejs.org/) v18 ou supérieur
- npm v9 ou supérieur (inclus avec Node.js)

---

## Installation

```bash
# 1. Cloner le dépôt
git clone https://github.com/prince-degboe/mini-portfolio-supinfo.git
cd mini-portfolio-supinfo

# 2. Installer les dépendances
npm install
```

---

## Lancer en développement

```bash
npm run dev
```

Ouvre [http://localhost:5173](http://localhost:5173) dans le navigateur.  
Les modifications sont reflétées instantanément grâce au HMR de Vite.

---

## Build de production

```bash
npm run build
```

Les fichiers compilés sont générés dans le dossier `dist/`.

### Prévisualiser le build

```bash
npm run preview
```

---

## Personnalisation du contenu

Tous les textes et données sont centralisés dans des fichiers dédiés, il n'est pas nécessaire de toucher aux composants.

| Ce qu'on veut modifier | Fichier à éditer |
|---|---|
| Projets (titre, description, images, vidéo) | `src/data/projects.js` |
| Parcours (formations, expériences) | `src/components/sections/experience-section.jsx` |
| À propos (texte, compteurs) | `src/components/sections/about-section.jsx` |
| Compétences | `src/components/sections/skills-section.jsx` |
| Liens sociaux & email | `src/components/footer.jsx`, `src/components/sections/contact-section.jsx`, `src/components/sections/hero-section.jsx` |
| Couleur d'accent | `src/index.css` — variable `--accent` |

### Ajouter un projet

1. Déposer les médias (images, vidéo) dans `src/assets/`
2. Les importer en haut de `src/data/projects.js`
3. Copier le bloc template commenté en bas du fichier, remplir les champs

---

## Stack technique

| Technologie | Version |
|---|---|
| React | 19 |
| Vite | 6 |
| Tailwind CSS | v4 |
| lucide-react | 1.7 |
| motion | 12 |
| react-router | 7 |
