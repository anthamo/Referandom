# Referandom

![Aperçu de Referandom](screenshot.png)

Les 1-1 entre référant et référé dérivent facilement vers l'opérationnel. Les sujets du moment, les blocages immédiats. Ce qui compte vraiment — la progression, l'équilibre, la relation elle-même — passe rarement en premier.

Referandom tire une question au hasard dans une base thématique. Pas de question prévue, pas de question contrôlée : c'est précisément ce qui force l'ouverture.

## Utilisation

Choisir une thématique :

- **Ta carrière** — objectifs, développement, sens du travail
- **Ton équilibre pro/perso** — charge, énergie, vie hors travail
- **Ton référent** — feedback sur la relation, la posture, le style de management
- **J'ai de la chance** — pioche dans toutes les catégories

Une question s'affiche. Le référé peut l'esquiver une fois par session. Ce qui est, en soi, une information utile pour le référant.

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

Les questions sont le cœur de l'outil. Si tu en as de meilleures à proposer, des formulations à retravailler ou des catégories à suggérer : ouvre une [issue](https://github.com/anthamo/anthamo.github.io/issues) ou soumets une pull request directement sur `questions.csv`.

Une bonne question : elle ne trouve pas sa réponse en cinq secondes, elle ouvre un sujet qu'on n'aurait pas abordé spontanément, elle fonctionne quel que soit le secteur ou le niveau hiérarchique.

## Intégration Notion

L'app est conçue pour fonctionner en embed Notion via iframe. Coller l'URL dans un bloc `/embed` de Notion.
