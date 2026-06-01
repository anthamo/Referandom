# Referandom

Une question tirée au hasard pour donner de la profondeur à un 1-1.

**→ [Essayer en ligne](https://anthamo.github.io/Referandom/)**

![Aperçu de Referandom](https://github.com/anthamo/Referandom/blob/main/assets/screenshot.png?raw=true)

## Pourquoi

Les 1-1 entre un manager (ici appelé "référent") et la personne qu'il accompagne ("le référé") dérivent facilement vers l'opérationnel : les sujets du moment, les blocages immédiats. Pourtant, ce qui compte vraiment dans ce cadre, c'est la progression, l'équilibre, la relation elle-même.

Referandom permet au référé de tirer une question au hasard dans une base thématique. Pas de question préparée, pas de réponse calibrée. C'est précisément ce qui force l'ouverture.

## Utilisation

Choisir une thématique :

- **Ta carrière** : objectifs, développement, sens du travail
- **Ton équilibre pro/perso** : charge, énergie, vie hors travail
- **Ton référent** : feedback sur la relation, la posture, le style de management
- **J'ai de la chance** : pioche dans toutes les catégories

Une question s'affiche. Le référé peut l'esquiver une fois par session. Esquiver est en soi une information utile pour le référent.

## Intégration Notion

L'app est pensée pour vivre dans un template de 1-1, embarquée via iframe. Coller `https://anthamo.github.io/Referandom/` dans un bloc `/embed` de Notion. 

En déroulant l'agenda du 1-1, on tombe dessus : l'outil crée son moment au lieu d'attendre qu'on y pense.

## Lancer en local

Aucune installation, aucun build. Cloner le repo, puis :

```bash
python3 -m http.server
```

Et ouvrir `http://localhost:8000`. (Ouvrir `index.html` directement marche aussi, au détail près que le chargement du CSV peut être bloqué par le navigateur en `file://`.)

## Contribuer

Les questions sont le cœur de l'outil. Si tu en as de meilleures, des formulations à retravailler ou des catégories à suggérer : ouvre une [issue](https://github.com/anthamo/Referandom/issues) ou une pull request sur `questions.csv`.

**Ce qui fait une bonne question** : elle ne trouve pas sa réponse en cinq secondes, elle ouvre un sujet qu'on n'aurait pas abordé spontanément, et elle fonctionne quel que soit le secteur ou le niveau hiérarchique.

### Éditer les questions

`questions.csv` est délimité par des points-virgules, trois colonnes : `Question`, `Catégorie`, `Afficher`.

Catégories valides (accents inclus, à respecter exactement) :

- `Carrière`
- `Équilibre pro/perso`
- `Ton manager` (affichée "Ton référent")

Mettre `Afficher` à `FALSE` masque une question sans la supprimer.

### Ajouter une catégorie

1. Ajouter des questions dans `questions.csv` avec le nom de la nouvelle catégorie.
2. Ajouter un bouton dans `index.html`, à l'intérieur de `#button-container`.
3. Le câbler dans `script.js` avec `afficherQuestionAleatoire("NomCatégorie")`.

## Stack

Application statique, sans dépendance de build.

- HTML / CSS / JS
- [PapaParse](https://www.papaparse.com/) (CDN) pour lire le CSV

## Licence

[MIT](LICENSE). Libre d'usage, de modification et de partage.

La base de questions (`questions.csv`) est couverte par la même licence MIT : libre de la reprendre, l'adapter et la partager.
