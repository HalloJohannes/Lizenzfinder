# Release-Audit V1.17

Datum: 2026-08-19

Gepruefte Version: 1.17.20260819-codex

Status: Release Candidate mit Auflagen

## Anlass

V1.17 verarbeitet abschliessende Rueckmeldungen zu Abstand, Footer, Ueber-diese-Anwendung-Feld, Netzwerkverhalten, Schrift-Hinweis, Badge-Anzeige und ruhigerer Darstellung im Lizenzvermerk-Bereich.

## Gepruefte Aenderungen

- [x] Abstand zwischen Navigation und Inhaltsueberschrift vergroessert.
- [x] Footer auf Johannes Koch und technische Umsetzung mit KI-Unterstuetzung reduziert.
- [x] Ueber-diese-Anwendung-Feld auf Tool-Angabe, Produktversion, Netzwerk, Schrift und kurze MIT-Erklaerung reduziert.
- [x] Organisationsklammern aus Footer und Ueber-diese-Anwendung-Feld entfernt.
- [x] Content-Security-Policy gegen automatische externe Ressourcen ergaenzt.
- [x] Netzwerk-Waechter fuer Fetch, XHR, WebSocket, EventSource, Beacon und Cookies ergaenzt.
- [x] Sichtbare Lizenz-Badges werden lokal als SVG-Data-URIs erzeugt.
- [x] Schlagschatten bei Kurzvermerk, empfohlener Angabe, Markdown/HTML und Creative-Commons-Badge entfernt.
- [x] Schlagschatten bei Lizenzempfehlungen und Lizenzuebersicht beibehalten.
- [x] twillo-Hinweis nach Lizenzempfehlung ohne senkrechten Balken ruhiger gesetzt.

## Automatische Pruefung

Bestanden:

- `npm run build`
- `npm run check`
- `npm run check:browser`
- `CODEX_NODE_MODULES=/Users/johanneskoch/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules npm run versions:build`

Ergebnis der Browserpruefung:

- Lizenzpfad `alles ja` ergibt `CC BY-SA 4.0`.
- Lizenzfeld folgt der Empfehlung.
- Copy-Toast erscheint.
- CC0 wird als lokales SVG-Badge angezeigt.
- Englisch-Umschaltung und Lesbarkeitsmodus funktionieren.
- Ueber-diese-Anwendung-Feld ist sichtbar.
- Netzwerk-Waechter ist aktiv.
- Automatisch geladene externe Ressourcen: `0`.

## Manuelle Restpunkte

- Tastatur- und Fokuspruefung in der finalen Hauptdatei.
- Fachliche Endabnahme der Lizenztexte.
- GitHub-Push erst nach finaler Freigabe und funktionierender Authentifizierung.
