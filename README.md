# VELOCE heritage – Website v1

Statische Website (HTML, CSS, JavaScript) ohne Build-Schritt. Läuft direkt auf Vercel.

## Dateien
- `index.html` – gesamte Seite (One-Pager mit Ankern)
- `styles.css` – Design
- `script.js` – Mobile-Menü und Anfrageformular (öffnet E-Mail an b.sutter@me.com)
- `images/` – Fotos (aktuell aus den Google-Sites-Screenshots ausgeschnitten → durch Originale in hoher Auflösung ersetzen, gleiche Dateinamen)
- `vercel.json` – Caching- und Sicherheits-Header

## Veröffentlichen
1. Alle Dateien ins Repo `Beat1966/veloce-heritage` (Branch `main`) hochladen.
2. Auf vercel.com → Add New → Project → Repo importieren.
3. Framework Preset: **Other**, Build Command leer, Output Directory leer → Deploy.
4. Danach ist die Seite unter `veloce-heritage.vercel.app` erreichbar. Jeder Push auf `main` aktualisiert sie automatisch.
5. Eigene Domain später unter Project → Settings → Domains hinzufügen.

## Lokal ansehen
`npx serve .` oder `python3 -m http.server` im Ordner starten.

## Cloudflare Pages (veloceheritage.com)
- Build command: `exit 0`, Build output directory: leer lassen (Root).
- `_headers` übernimmt die Header aus `vercel.json` (inkl. vorläufiger noindex-Sperre).
- Go-live: `robots.txt` löschen, noindex aus `index.html`, `_headers` und `vercel.json` entfernen.
