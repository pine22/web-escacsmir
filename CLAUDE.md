# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Projecte

Landing page estàtica del **Club d'Escacs MiR** (`escacsmir.com`). HTML/CSS/JS pur, sense framework ni build step. Desplegat a Vercel des de GitHub — cada `git push` a `main` redesplega automàticament en ~30 segons.

## Servidor local

```bash
npx serve . --listen 3000
```

També configurat a `.claude/launch.json` per arrencar des de Claude Code.

## Desplegament

```bash
git add .
git commit -m "fix: descripció del canvi"
git push   # Vercel redesplega sol
```

No hi ha comandes de build, lint ni test — els fitxers es serveixen directament.

## Arquitectura

`index.html` és el shell HTML. Tot el CSS i JS viuen en fitxers externs.

**Estructura de fitxers CSS** (ordre de càrrega important: tokens primer):
```
css/tokens.css          ← variables CSS: --maroon, --gold, --radius, --shadow...
css/base.css            ← reset, body, h1-h4, a, img, .container
css/components.css      ← .btn-*, .section-label, .section-title, .section-sub
css/layout/topbar.css
css/layout/nav.css
css/layout/footer.css
css/sections/hero.css
css/sections/escola.css
css/sections/competicio.css
css/sections/beneficis.css
css/sections/horaris.css
css/sections/noticies.css
css/sections/inscripcio.css
css/sections/overlays.css   ← whatsapp float, cookie banner, .proposal-note
```

**JS:** `js/main.js` → scroll actiu de nav (ressalta l'enllaç de la secció visible).

**Seccions HTML i IDs:**
- `#inici` → Hero
- `#escola` → Escola (4 categories: prebenjamí, benjamí, aleví, infantil)
- `#competicio` → Club competitiu
- `#beneficis` → Beneficis dels escacs
- `#horaris` → Taula d'horaris setmanals
- `#noticies` → Notícies del club (3 cards)
- `#inscripcio` → Formulari + informació de contacte

## Dades de contacte hardcodejades

- Email: `escacsmir@gmail.com`
- Telèfon / WhatsApp: `627 83 31 33` (també al float de WhatsApp: `wa.me/34627833133`)

## Formulari d'inscripció

Per activar-lo, afegir `action="https://formspree.io/f/CODI"` i `method="POST"` al `<form>` de la secció `#inscripcio`.

## Notes de disseny (`proposal-note`)

Al HTML hi ha elements `<span class="proposal-note">` amb anotacions visibles en el navegador. **Eliminar-los abans de publicar en producció.**

## Personalitzacions pendents

- Substituir estadístiques fictícies per dades reals del club
- Actualitzar horaris d'entrenament
- Afegir adreça real + Google Maps embegut
- Substituir emoji ♞ per logotip oficial
- Afegir fotografies reals (hero + notícies)
- Activar Formspree al formulari
- Afegir URLs reals de xarxes socials i perfils Lichess/Chess.com
- Actualitzar notícies amb contingut real
- Eliminar els `<span class="proposal-note">` de l'HTML
