# Release-Audit V1.19

Datum: 2026-08-19

Gepruefte Version: 1.19.20260819-codex

Status: mit Auflagen

## Anlass

V1.19 setzt den Ueberarbeitungsauftrag zur Textkorrektur, zum scrollbaren About-Panel und zu drei Detailverbesserungen um. Fragenlogik, Empfehlungsalgorithmus, Farbschema und Layoutkonzept bleiben unveraendert.

## Umgesetzte Punkte

- [x] Versionsstring, Revision, Revisionsdatum und sichtbare Produktversion auf V1.19 aktualisiert.
- [x] Sichtbares `©` aus About-Texten, Metadaten-Attribution und Footer-Fliesstext entfernt.
- [x] MIT-Volltext wortgleich erhalten, inklusive `Copyright (c) 2026 Johannes Koch`.
- [x] About-Lizenztext ohne Copyright-Zeichen neu formuliert.
- [x] `VERSION_METADATA.attribution` ohne Copyright-Zeichen neu formuliert.
- [x] About-Panel per Flexbox begrenzt und vertikal scrollbar gemacht.
- [x] Innere Hoehenbegrenzung des MIT-`pre`-Blocks entfernt, um verschachtelte Scrollbereiche zu vermeiden.
- [x] Escape-Schliessen des About-Panels mit Fokusrueckgabe an den Button ergaenzt.
- [x] Footer nennt Codex/OpenAI konkret als KI-Unterstuetzung.
- [x] Jahr-Feld im Lizenzvermerk wird dynamisch aus `new Date().getFullYear()` vorbelegt.
- [x] Quellenwarnung mit `role="status"`, `aria-live="polite"` und `aria-invalid` verbessert.
- [x] Typografische Korrekturen umgesetzt: `können` im Metatag und Gedankenstrich in Copy-Fallbacks.
- [x] `index.html` als GitHub-Pages-Einstieg erzeugt, identisch mit der aktuellen App-Datei.
- [x] GitHub-Pages-Workflow angelegt.
- [x] README, Projekt-Keywords, Issue-Vorlagen und PR-Vorlage fuer die Veröffentlichung vorbereitet.

## Technische Pruefung

- [x] `node --check src/app.js`
- [x] `node --check src/data.js`
- [x] `node --check scripts/check-release.mjs`
- [x] `node --check scripts/check-browser-v1-19.mjs`
- [x] `npm run build`
- [x] `npm run check`
- [x] `npm run check:browser`

## Browserpruefung

Der Playwright-Check prueft:

- Empfehlungspfad "alles ja" mit Ergebnis `CC BY-SA 4.0`.
- Synchronisierung zwischen Empfehlung und Lizenzfeld.
- Sichtbarkeit des twillo-Hinweises nach der Empfehlung.
- CC0-Darstellung als lokales Zero-Icon.
- Deutsch/Englisch-Umschaltung und Footer-Text mit Codex/OpenAI.
- Lesbarkeitsmodus.
- Kein persistenter `localStorage` mit `lf-*`-Schluesseln.
- `fetch`, `document.cookie` und `navigator.sendBeacon` bleiben verfuegbar.
- Ungueltige `javascript:`-Quelle erscheint in keinem Ausgabefeld; `aria-invalid="true"` wird gesetzt.
- Gueltige `https://example.org/kurs`-Quelle wird uebernommen; `aria-invalid="false"` wird gesetzt.
- Manueller Kopierhinweis bei nicht verfuegbarer Clipboard-API.
- About-Panel bei 500 px Fensterhoehe scrollbar; Button bleibt sichtbar.
- Escape schliesst das About-Panel und gibt den Fokus an den Button zurueck.
- Rendering in `iframe sandbox="allow-scripts"` ohne `allow-same-origin`.
- Simuliertes Datum 2027: Vermerkformular schlaegt 2027 vor, feste Credit- und Lizenzangaben bleiben 2026.
- `index.html` und `dist/index.html` sind identisch mit der aktuellen App-Datei.

Screenshots: `work/previews/v1_19/`

## Auflagen

- Fachliche Endabnahme der Lizenztexte und Hinweise durch Redaktion.
- Manuelle Tastatur- und Fokuspruefung der Hauptpfade vor oeffentlicher Weitergabe.
- GitHub-Push erst nach finaler Freigabe.
