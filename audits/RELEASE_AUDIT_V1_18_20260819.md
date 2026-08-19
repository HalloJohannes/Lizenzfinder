# Release-Audit V1.18

Datum: 2026-08-19

Gepruefte Version: 1.18.20260819-codex

Status: mit Auflagen

## Anlass

V1.18 verarbeitet den Ueberarbeitungsauftrag zur technischen Haertung der Single-HTML-Anwendung. Schwerpunkt sind Datenschutz, Einbettungsvertraeglichkeit, sichere URL-Ausgaben, ehrliches Kopierverhalten sowie konsistente Angaben zu MIT-Lizenz und CC0-Inhaltslizenz.

## Umgesetzte Punkte

- [x] Weißes Infofeld im Header ersatzlos entfernt.
- [x] Headerlayout nach Entfernung des Infofelds auf eine Spalte umgestellt.
- [x] Versionsstring, Revision, Revisionsdatum und Metadaten auf V1.18 aktualisiert.
- [x] `licensefinder:content-license` und `dcterms.rights` fuer Doppellizenzierung ergaenzt.
- [x] Persistente Speicherung entfernt; Antworten und Anzeigeeinstellungen leben nur im Arbeitsspeicher.
- [x] Einmalige Bereinigung alter `lf-*`-Schluessel in `try/catch` gekapselt.
- [x] Netzwerk-Waechter auf reinen Selbsttest ohne Prototype- oder Global-Patching entschärft.
- [x] `NETWORK_POLICY` auf `storage: "none"`, Analytics und Telemetrie `false` aktualisiert.
- [x] URL-Pruefung fuer Quellenangaben in Kurzvermerk, empfohlener Angabe, Markdown und HTML umgesetzt.
- [x] Zweisprachiger Inline-Hinweis fuer ungueltige Quellen-URL ergaenzt.
- [x] Kopierfunktion meldet Erfolg nur nach erfolgreicher Clipboard-API; sonst manueller Markierhinweis.
- [x] `resetAll()` setzt auch die Felder der Vermerk-Maske zurueck.
- [x] Panel "Ueber diese Anwendung" zweisprachig zu Netzwerk, Speicherung, Schrift, Lizenz und Hinweis aktualisiert.
- [x] Footer-Hinweis an Jahr, Urheber-Link, Anwendungsname, MIT-Lizenz und CC0-Inhaltslizenz angepasst.

## Technische Pruefung

- [x] `node --check src/app.js`
- [x] `node --check src/data.js`
- [x] `node --check scripts/check-release.mjs`
- [x] `node --check scripts/check-browser-v1-18.mjs`
- [x] `npm run build`
- [x] `npm run check`
- [x] `npm run check:browser`

## Browserpruefung

Der Playwright-Check prueft:

- Empfehlungspfad "alles ja" mit Ergebnis `CC BY-SA 4.0`.
- Synchronisierung zwischen Empfehlung und Lizenzfeld.
- Sichtbarkeit des twillo-Hinweises nach der Empfehlung.
- CC0-Darstellung als lokales Zero-Icon statt Public-Domain-Button.
- Deutsch/Englisch-Umschaltung.
- Lesbarkeitsmodus.
- Panel "Ueber diese Anwendung".
- Keine automatische externe Ressource (`data-network-external-resources = 0`).
- Keine `lf-*`-Schluessel nach Durchlauf im `localStorage`.
- `fetch`, `document.cookie` und `navigator.sendBeacon` bleiben verfuegbar.
- Ungueltige `javascript:`-Quelle erscheint in keinem Ausgabefeld.
- Gueltige `https://example.org/kurs`-Quelle wird uebernommen.
- Manueller Kopierhinweis bei nicht verfuegbarer Clipboard-API.
- Rendering in `iframe sandbox="allow-scripts"` ohne `allow-same-origin`.

Screenshots: `work/previews/v1_18/`

## Auflagen

- Fachliche Endabnahme der Lizenztexte und Hinweise durch Redaktion.
- Manuelle Tastatur- und Fokuspruefung der Hauptpfade vor oeffentlicher Weitergabe.
- GitHub-Push erst nach finaler Freigabe.
