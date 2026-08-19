# Release-Audit V1.20

Datum: 2026-08-19

Gepruefte Version: 1.20.20260819-codex

Status: mit Auflagen

## Anlass

V1.20 ergaenzt den Bereich "Ueber diese Anwendung" um einen sichtbaren Link zur MIT License und um einen Abschnitt zur Entstehung der Anwendung. Funktion, Empfehlungslogik, Layoutkonzept und GitHub-Pages-Aufbau bleiben unveraendert.

## Umgesetzte Punkte

- [x] Versionsstring, Revision, Revisionsdatum und sichtbare Produktversion auf V1.20 aktualisiert.
- [x] "MIT License" im About-Panel mit der OSI-Quelle `https://opensource.org/license/mit` verlinkt.
- [x] Fuer den Lizenzabsatz eine kontrollierte `data-i18n-html`-Ausgabe ergaenzt, damit der Link beim Sprachwechsel erhalten bleibt.
- [x] Entstehungsabschnitt zu Vibe-Coding, Claude, Codex und redaktioneller Verantwortung im About-Panel ergaenzt.
- [x] Deutsche und englische Sprachfassung fuer den Entstehungsabschnitt hinterlegt.
- [x] Build-, Release- und Browsercheck-Skripte auf V1.20 aktualisiert.
- [x] Versionshistorie und Audit-Register auf V1.20 fortgeschrieben.

## Technische Pruefung

- [x] `npm run build`
- [x] `npm run check`
- [x] `npm run check:browser`
- [x] `CODEX_NODE_MODULES=... npm run versions:build`

## Browserpruefung

Der Browsercheck bestaetigt weiterhin:

- Empfehlungspfad "alles ja" mit Ergebnis `CC BY-SA 4.0`.
- Synchronisierung zwischen Empfehlung und Lizenzfeld.
- Sichtbarkeit des twillo-Hinweises nach der Empfehlung.
- CC0-Darstellung als lokales Zero-Icon.
- Deutsch/Englisch-Umschaltung und Lesbarkeitsmodus.
- Kein persistenter `localStorage` mit `lf-*`-Schluesseln.
- URL-Schutz fuer Quellenangaben.
- About-Panel bei kleiner Fensterhoehe scrollbar.
- Escape schliesst das About-Panel und gibt den Fokus an den Button zurueck.
- Rendering in sandboxed iframe.
- Dynamischer Jahresvorschlag im Lizenzvermerk.

Screenshots: `work/previews/v1_20/`

## Auflagen

- Fachliche Endabnahme der Lizenztexte und Hinweise durch Redaktion.
- Manuelle Tastatur- und Fokuspruefung der Hauptpfade vor oeffentlicher Weitergabe.
