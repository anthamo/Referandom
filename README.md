# Referandom

Un générateur de questions aléatoires pour les 1-1 entre référant et référé.

## Pourquoi

Les 1-1 dérivent facilement vers l'opérationnel — les sujets du moment, les blocages immédiats. Referandom sert à sortir de ce pattern : une question tirée au hasard, choisie dans une base thématique, force une ouverture qu'on ne s'autoriserait pas spontanément.

L'outil n'est pas là pour remplacer la conversation. Il en est le point de départ.

## Utilisation

Choisir une thématique parmi :

- **Ta carrière** — objectifs, développement, sens du travail
- **Ton équilibre pro/perso** — charge, énergie, vie hors travail
- **Ton référent** — feedback sur la relation, la posture, le style de management
- **J'ai de la chance** — pioche dans toutes les catégories

Une question s'affiche. Le référé peut l'esquiver une fois par session — ce qui est en soi une information utile pour le référant.

## Stack

Application statique, aucune dépendance serveur.

- HTML / CSS / JS
- [PapaParse](https://www.papaparse.com/) pour lire le CSV
- `questions.csv` comme base de données (3 colonnes : `Question`, `Catégorie`, `Afficher`)

## Ajouter ou modifier des questions

Éditer directement `questions.csv`. Les catégories valides sont :

- `Carrière`
- `Équilibre pro/perso`
- `Ton manager`
- `Reconnaissance` (questions réservées au bouton "J'ai de la chance")

Mettre `Afficher` à `FALSE` pour masquer une question sans la supprimer.

## Intégration Notion

L'app est conçue pour fonctionner en embed Notion via iframe. Coller l'URL dans un bloc `/embed` de Notion.
