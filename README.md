# VELOCE heritage – Website

Statische Website (HTML, CSS, JavaScript) ohne Build-Schritt. Läuft auf Cloudflare Pages unter **veloceheritage.com**.

## Dateien
- `index.html` – gesamte Seite (One-Pager mit Ankern)
- `styles.css` – Design
- `script.js` – Mobile-Menü und Anfrageformular (öffnet E-Mail an b.sutter@me.com)
- `images/` – Fotos
- `_headers` – Caching- und Sicherheits-Header für Cloudflare Pages
- `robots.txt` – vorläufige Sperre für Suchmaschinen und KI-Bots

## Veröffentlichen
- GitHub-Repo `Beat1966/veloce-heritage`, Branch `main`.
- Cloudflare Pages ist mit dem Repo verbunden: Jeder Push auf `main` aktualisiert veloceheritage.com automatisch.
- Pages-Einstellungen: Build command `exit 0`, Build output directory leer lassen (Root).

## Lokal ansehen
`npx serve .` oder `python3 -m http.server` im Ordner starten.

## Go-live (Sperre aufheben)
1. `robots.txt` löschen.
2. `<meta name="robots" ...>` aus `index.html` entfernen.
3. Zeile `X-Robots-Tag` aus `_headers` entfernen.
