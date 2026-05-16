# Rapport de modifications — mini-portfolio-supinfo

> **Projet :** Portfolio de Prince DEGBOE, développeur mobile Flutter  
> **Date :** 16 mai 2026  
> **Base :** Template React + Vite + Tailwind CSS v4

---

## 1. Identité & branding

### `src/components/header.jsx`
- Initiales du logo : `FZ` → `PD`

### `src/components/footer.jsx`
- Copyright : `© 2026 Prince DEGBOE. All rights reserved.`
- Liens sociaux mis à jour :

| Réseau   | URL                                              |
|----------|--------------------------------------------------|
| LinkedIn | https://www.linkedin.com/in/prince-degboe/       |
| GitHub   | https://github.com/prince-degboe                 |
| Instagram| https://www.instagram.com/prince.degboe/         |
| Email    | mailto:prince.degboe@email.com                   |
| Twitter  | https://twitter.com/prince_degboe                |

---

## 2. Couleur d'accent

### `src/index.css`
- Variable CSS `--accent` et `--ring` modifiées dans `:root` (mode clair) **et** `.dark` (mode sombre)
- Valeur : `oklch(0.60 0.22 250)` — bleu

**Avant :**
```css
--accent: oklch(0.60 0.22 29);   /* orange/rouge */
--ring: oklch(0.60 0.22 29);
```

**Après :**
```css
--accent: oklch(0.60 0.22 250);  /* bleu */
--ring: oklch(0.60 0.22 250);
```

---

## 3. Section Hero

### `src/components/sections/hero-section.jsx`
- Salutation : `"Hey ! C'est moi, Prince."`
- Titre principal : `"Je crée des applications mobiles qui inspirent et engagent."`
- Description : `"Je conçois et développe des applications mobiles performantes, accessibles et à fort impact pour iOS et Android."`
- Liens sociaux identiques à ceux du footer (LinkedIn, GitHub, Instagram, Email)

---

## 4. Section À propos

### `src/components/sections/about-section.jsx`
- Image de profil : `src/assets/profile3.jpg`
- Titre : `"Passionné par le mobile"`
- Texte : Prince DEGBOE présenté comme développeur mobile Flutter spécialisé iOS/Android
- Suppression de toute mention de React Native
- Compteurs : `5+ ans d'expérience`, `50+ projets réalisés`, `30+ clients satisfaits`

---

## 5. Section Compétences

### `src/components/sections/skills-section.jsx`
Titre de section : **"Expertise mobile & tech"**

#### Accordéon (5 catégories)
| Catégorie | Technologies |
|---|---|
| Développement Mobile | Flutter, Dart, Firebase, Supabase, SQLite |
| Développement Backend | Node.js, Express, REST API, Firebase Functions, PostgreSQL |
| UI/UX Mobile | Figma, Material Design 3, Cupertino, Flutter Animations, Prototypage |
| Architecture & État | BLoC, Riverpod, GetX, Provider, Clean Architecture |
| Intégration & Déploiement | App Store, Google Play, GitHub Actions, Fastlane, Codemagic |

#### Nuage de tags
`Flutter · Dart · Firebase · Supabase · REST API · GetX · Riverpod · BLoC · Figma · Git/GitHub · App Store · Google Play · CI/CD · SQLite · Fastlane`

### `src/components/sections/skills-marquee.jsx`
- Texte défilant réécrit avec technologies Flutter uniquement (suppression React Native)

---

## 6. Section Projets

### `src/data/projects.js` *(nouveau fichier)*
Fichier de données centralisé, documenté, conçu pour la transmission à une tierce personne.

**Structure :**
```js
{
  id          : number        // identifiant unique
  title       : string        // nom du projet
  category    : string        // type / technologie principale
  annee       : string        // année de réalisation
  description : string        // texte du modal
  image_url   : asset import  // image de couverture
  video_url   : asset import | null  // vidéo de démo (null si aucune)
  screenshots : asset import[]       // tableau de captures d'écran
}
```

**Projets pré-remplis (avec données placeholder) :**
| # | Titre | Catégorie | Année | Vidéo |
|---|-------|-----------|-------|-------|
| 1 | MarketGo | Application mobile — Flutter | 2025 | ✅ `video1.mp4` |
| 2 | FitTrack | Application mobile — Flutter | 2024 | ❌ null |
| 3 | PayEasy | Fintech mobile — Flutter | 2024 | ❌ null |

Un **template commenté** est fourni en bas du fichier pour ajouter de nouveaux projets facilement.

**Pour ajouter un projet :**
1. Déposer les médias dans `src/assets/`
2. Les importer en haut de `src/data/projects.js`
3. Copier/décommenter le bloc template, remplir les champs

### `src/components/sections/projects-section.jsx`
- Suppression des données inline et des imports media locaux
- Import des projets depuis `../../data/projects`
- Ajout d'un composant `ProjectModal` (inline) affiché au clic sur une carte
- Le modal affiche : image de couverture, description, vidéo (si présente), grille de captures d'écran

---

## 7. Section Contact

### `src/components/sections/contact-section.jsx`
- **Suppression du formulaire dynamique** (champs, `useState`, handler d'envoi)
- Remplacement par un CTA statique : bouton `mailto:prince.degboe@email.com`
- Panneau d'informations de contact avec les 5 liens sociaux (identiques footer)
- Aucun état React (`useState`) — composant 100% statique

---

## 8. Section Parcours

### `src/components/sections/experience-section.jsx`
> ⚠️ **Note :** Les données de formation et d'expérience sont encore celles du template d'origine.  
> Elles **doivent être mises à jour** avec le vrai parcours de Prince DEGBOE.

Données actuelles (à remplacer) :
- Formations : Master 2 Génie Logiciel (IFRI/UAC), Licence Internet & Multimédia, BAC C, etc.
- Expériences : Freelance, Grow4All (CEO), GDSC UAC, Wensala GROUP, NerdX Digital, Astra Horizon

---

## 9. Corrections lint / qualité

### `src/components/sections/experience-section.jsx`
- Classe Tailwind `-left-[9px]` → `-left-2.25` (forme native Tailwind v4)

### `src/components/sections/projects-section.jsx`
- 3× `aspect-[3/2]` → `aspect-3/2` (forme native Tailwind v4)

---

## 10. Fichiers NON modifiés

| Fichier | Raison |
|---|---|
| `App.jsx`, `App.css` | Structure de page non touchée |
| `main.jsx` | Point d'entrée inchangé |
| `vite.config.js`, `eslint.config.js` | Configuration inchangée |
| `ScrollVelocity.jsx`, `section-badge.jsx` | Composants génériques réutilisés tels quels |
| `Home.jsx` | Orchestrateur de sections, aucun changement nécessaire |
| `lib/theme-context.jsx`, `lib/utils.js` | Utilitaires inchangés |

---

## 11. Fichiers à compléter (actions restantes)

| Priorité | Action | Fichier |
|---|---|---|
| 🔴 Haute | Remplacer les vraies URLs LinkedIn, GitHub, Instagram, Twitter de Prince DEGBOE | Tous les composants avec liens sociaux |
| 🔴 Haute | Remplacer l'email placeholder `prince.degboe@email.com` par le vrai email | `contact-section.jsx`, `hero-section.jsx`, `footer.jsx` |
| 🔴 Haute | Mettre à jour les données de parcours (formations, expériences) | `experience-section.jsx` |
| 🟡 Moyenne | Remplacer `projetimage.png` par les vraies images de projets | `src/data/projects.js` |
| 🟡 Moyenne | Ajouter les vraies vidéos pour FitTrack et PayEasy | `src/data/projects.js` |
| 🟡 Moyenne | Remplacer `profile3.jpg` par une vraie photo de Prince DEGBOE | `src/assets/profile3.jpg` |
| 🟢 Basse | Mettre à jour les compteurs (années d'expérience, projets, clients) | `about-section.jsx` |
