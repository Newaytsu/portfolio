# Portfolio BTS SIO SISR – Hector LARGEAUT

Site statique (HTML / CSS / JS), sans dépendance ni build.

## Structure

```
.
├── index.html
├── style.css
├── script.js
├── assets/
│   └── CV-Hector-LARGEAUT.pdf   <- à ajouter
└── README.md
```

## Publier sur GitHub Pages

1. Crée un dépôt sur GitHub (ex. `portfolio`).
2. Envoie les fichiers :
   ```bash
   git init
   git add .
   git commit -m "Portfolio BTS SIO"
   git branch -M main
   git remote add origin https://github.com/<ton-pseudo>/portfolio.git
   git push -u origin main
   ```
3. Sur GitHub : **Settings → Pages → Source : Deploy from a branch → main / (root)** → Save.
4. Le site sera en ligne sous `https://<ton-pseudo>.github.io/portfolio/` au bout d'une ou deux minutes.

## À personnaliser

- Remplace les textes marqués « À compléter » dans `index.html`.
- Ajoute ton CV dans `assets/CV-Hector-LARGEAUT.pdf`.
- Mets ton lien LinkedIn dans le footer.
- Remplace les `href="#"` par tes dossiers de TP et tes preuves (PDF dans `assets/`).
