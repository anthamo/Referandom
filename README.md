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

## Contribuer

Les questions sont le cœur de l'outil — et elles peuvent toujours être améliorées.

Si tu utilises Referandom et que tu as des questions à proposer, des formulations à améliorer, ou des catégories à suggérer : ouvre une [issue](https://github.com/anthamo/anthamo.github.io/issues) ou soumets une pull request en éditant directement `questions.csv`.

Quelques critères pour qu'une question soit pertinente :
- Elle ne trouve pas sa réponse en 5 secondes
- Elle ouvre un sujet qu'on n'aurait pas abordé spontanément
- Elle fonctionne quel que soit le secteur ou le niveau hiérarchique

## Intégration Notion

L'app est conçue pour fonctionner en embed Notion via iframe. Coller l'URL dans un bloc `/embed` de Notion.
