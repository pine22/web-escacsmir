# Club d'Escacs MiR – Web oficial

Lloc web oficial del **Club d'Escacs MiR** ([escacsmir.com](https://escacsmir.com)).  
Landing page estàtica en HTML/CSS/JS, desplegada a **Vercel** i versionada amb **Git + GitHub**.

---

## Estructura del projecte

```
web escacsmir/
├── index.html        # Landing page principal
├── .gitignore        # Fitxers exclosos de Git
└── README.md         # Aquest fitxer
```

---

## Desplegament

### 1. Primer cop (inicialitzar Git)

```bash
git init
git add .
git commit -m "feat: primera versió de la landing page"
```

### 2. Connectar amb GitHub

```bash
git remote add origin https://github.com/EL_TEU_USUARI/web-escacsmir.git
git branch -M main
git push -u origin main
```

### 3. Connectar amb Vercel

1. Accedeix a [vercel.com](https://vercel.com) i inicia sessió.
2. **Add New Project** → importa el repositori `web-escacsmir`.
3. Framework: **Other** (HTML estàtic, sense framework).
4. Fes clic a **Deploy** — Vercel detecta `index.html` automàticament.
5. Assigna el domini `escacsmir.com` a **Settings → Domains**.

### 4. Actualitzar la web (fluxe habitual)

```bash
# Edita index.html
git add index.html
git commit -m "fix: actualitzar horaris temporada 2025"
git push
# Vercel redesplega automàticament en ~30 segons
```

---

## Personalitzacions pendents

- [ ] Substituir xifres d'estadístiques per dades reals del club
- [ ] Actualitzar horaris d'entrenament
- [ ] Afegir adreça real de la seu + Google Maps embegut
- [ ] Afegir el logotip oficial (substituir l'emoji ♞)
- [ ] Afegir fotografies del club a la secció Hero i Notícies
- [ ] Configurar el formulari d'inscripció amb [Formspree](https://formspree.io)
- [ ] Afegir links reals a xarxes socials (Instagram, Facebook, etc.)
- [ ] Afegir link al perfil de Lichess / Chess.com del club
- [ ] Actualitzar notícies amb contingut real

---

## Formulari de contacte (Formspree)

El formulari d'inscripció utilitza [Formspree.io](https://formspree.io) per enviar emails sense backend.  
Per activar-lo:

1. Registra't a formspree.io (gratuït fins a 50 enviaments/mes).
2. Crea un nou formulari i copia el teu codi (ex: `xpwzabcd`).
3. A `index.html`, edita la línia del `<form>`:
   ```html
   <form action="https://formspree.io/f/xpwzabcd" method="POST">
   ```

---

## Contacte del club

- 📧 escacsmir@gmail.com  
- 📱 627 83 31 33
