# Release-Audit V1.16

Datum: 2026-08-19

Gepruefte Version: 1.16.20260819-codex

Status: Release Candidate mit Auflagen

## Anlass

V1.16 verarbeitet die abschliessenden Rueckmeldungen zu Branding, Footer, Dark Mode, Anwendungslizenz, SCHAU-HIN-naeherem Design und CC0-Darstellung.

## Gepruefte Aenderungen

- [x] Header kompakter gesetzt.
- [x] Sichtbares twillo-Branding aus dem Header entfernt.
- [x] Footer auf eine kompakte Verantwortungs- und Lizenzzeile reduziert.
- [x] Hilfe-und-Kontakt-Schalter durch Ueber-diese-Anwendung ersetzt.
- [x] About-Panel mit Produktversion, Netzwerkhinweis und MIT-Lizenztext umgesetzt.
- [x] Hilfe & Quellen um twillo-Service, Helpcenter, Veranstaltungen und Kontakt ergaenzt.
- [x] Dark Mode aus UI, CSS und Logik entfernt.
- [x] App-Lizenz auf MIT umgestellt.
- [x] CC0-Darstellung auf offizielles Creative-Commons-Zero-Icon umgestellt.
- [x] Build-, Release- und Browserpruefskripte auf V1.16 aktualisiert.

## Automatische Pruefung

Bestanden:

- `npm run build`
- `npm run check`
- `npm run check:browser`
- `CODEX_NODE_MODULES=/Users/johanneskoch/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules npm run versions:build`

## Manuelle Restpunkte

- Tastatur- und Fokuspruefung in der finalen Hauptdatei.
- Fachliche Endabnahme der Lizenztexte.
- GitHub-Push erst nach finaler Freigabe und funktionierender Authentifizierung.

## Quellenhinweis

Die CC0-Darstellung wurde anhand der Creative-Commons-Downloadseite geprueft. Die dort angebotenen CC0-Badges enthalten sichtbar den Public-Domain-Schriftzug; fuer die App wird deshalb das offizielle Zero-Icon genutzt, um die Unterscheidung zum Public Domain Mark klarer zu machen.
