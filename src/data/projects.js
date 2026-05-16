// ============================================================
//  FICHIER DE DONNÉES — PROJETS
//  Modifie ce fichier pour ajouter, supprimer ou mettre à jour
//  les projets affichés sur le portfolio.
// ============================================================

// -- IMPORTS DES MÉDIAS --
// Ajoute tes images/vidéos dans src/assets/ puis importe-les ici.

import projetImage from "../assets/projetimage.png"
import video1 from "../assets/video1.mp4"

// -- STRUCTURE D'UN PROJET --
// {
//   id          : number       — identifiant unique (ne pas dupliquer)
//   title       : string       — nom du projet
//   category    : string       — type / technologie principale
//   annee       : string       — année de réalisation
//   description : string       — texte affiché dans le modal
//   image_url   : import       — image de couverture (importer ci-dessus)
//   video_url   : import|null  — vidéo de démo, mettre null si aucune
//   screenshots : import[]     — tableau de captures d'écran (peut être vide [])
// }

export const projects = [
  {
    id: 1,
    title: "MarketGo",
    category: "Application mobile — Flutter",
    annee: "2025",
    description:
      "MarketGo est une application de marketplace mobile permettant aux vendeurs de publier leurs produits et aux acheteurs de commander en quelques clics. Interface intuitive, paiement intégré et suivi des commandes en temps réel.",
    image_url: projetImage,
    video_url: video1,
    screenshots: [projetImage, projetImage],
  },
  {
    id: 2,
    title: "FitTrack",
    category: "Application mobile — Flutter",
    annee: "2024",
    description:
      "FitTrack est une application de suivi fitness qui permet de planifier ses entraînements, suivre ses performances et visualiser ses progrès au fil du temps. Synchronisation avec les capteurs de santé du téléphone.",
    image_url: projetImage,
    video_url: null,
    screenshots: [projetImage, projetImage],
  },
  {
    id: 3,
    title: "PayEasy",
    category: "Fintech mobile — Flutter",
    annee: "2024",
    description:
      "PayEasy est une application fintech permettant d'effectuer des transferts d'argent, de payer des factures et de gérer son portefeuille mobile de façon simple et sécurisée.",
    image_url: projetImage,
    video_url: null,
    screenshots: [projetImage, projetImage],
  },

  // -- AJOUTER UN PROJET --
  // Copie le bloc ci-dessous, remplis les champs et décommente.
  //
  // {
  //   id: 4,
  //   title: "Nom du projet",
  //   category: "Application mobile — Flutter",
  //   annee: "2025",
  //   description: "Description du projet...",
  //   image_url: projetImage,   // remplace par ton import
  //   video_url: null,          // remplace par ton import ou laisse null
  //   screenshots: [],          // ajoute tes imports ici
  // },
]
