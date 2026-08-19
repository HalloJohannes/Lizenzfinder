# Aufgaben

Stand: 2026-08-19

Aktuelle Version: 1.21.20260819-codex

Status: Release Candidate nach V1.21-Footer-Transparenzkorrektur

## Erledigt

- [x] Fragenlogik fuer die Lizenzempfehlung umgesetzt.
- [x] Lizenzset der ersten Version festgelegt: CC0, CC BY, CC BY-SA, CC BY-NC, CC BY-NC-SA, CC BY-ND, CC BY-NC-ND.
- [x] Vermerk-Erstellung mit TULLU+B-Bausteinen umgesetzt.
- [x] Ausgabeformate fuer Kurzvermerk, empfohlene Angabe, Markdown und HTML umgesetzt.
- [x] Inhaltsmatrix fuer Empfehlung, Alternative und Gegenbeispiel in der App hinterlegt.
- [x] UI-Prototyp als schlanke HTML-App umgesetzt.
- [x] Linkmatrix fuer Deutsch/Englisch angelegt.
- [x] Kompakte Footer-Zeile fuer Deutsch und Englisch formuliert.
- [x] Ueber-diese-Anwendung-Fenster unten rechts umgesetzt.
- [x] Metadatenblock in Hauptdatei und Exportdatei hinterlegt.
- [x] Creative-Commons-Badge-Flow umgesetzt.
- [x] Bessere Lesbarkeit eingebaut.
- [x] Deutsch/Englisch-Umschaltung eingebaut.
- [x] Exportdatei fuer dreistufigen Workflow erstellt.
- [x] Einbettungsanleitung als Textdatei erstellt.
- [x] Versionshistorie und Archivstruktur aufgebaut.
- [x] Release-Audit fuer V1.13 erstellt.
- [x] Lizenz-Sync-Bug in der Vermerk-Erstellung behoben.
- [x] Bedingtes Ueberspringen nicht relevanter Fragen umgesetzt.
- [x] Korrekturen in Haupt-App, Exportdatei und eingebettete Download-Kopie uebernommen.
- [x] Logiktests fuer Haupt-App, Exportdatei und eingebettete Download-Kopie durchgefuehrt: 27/27 bestanden.
- [x] Feedbackrunde V1.15 eingearbeitet.
- [x] Export-/Einbettungsfunktion aus der aktiven App entfernt.
- [x] Twillo-Veroeffentlichungshinweis nach Lizenzempfehlung ergaenzt.
- [x] Software-Lizenzueberblick ergaenzt.
- [x] CC0-Badge in der Lizenzuebersicht geprueft.
- [x] Redesign mit leichterem Header und SCHAU-HIN-naeherer Anmutung umgesetzt.
- [x] Modulare Quelle in `src/` erstellt.
- [x] Build- und Pruefskripte ergaenzt.
- [x] GitHub-Unterlagen erstellt: README, LICENSE, CHANGELOG, CONTRIBUTING, SECURITY.
- [x] V1.16: Dark Mode entfernt.
- [x] V1.16: App-Lizenz auf MIT umgestellt.
- [x] V1.16: Footer reduziert und About-Fenster umgesetzt.
- [x] V1.16: CC0 vom Public-Domain-Button auf Zero-Icon umgestellt.
- [x] V1.17: Abstand unter der Navigation vergroessert.
- [x] V1.17: Footer und About-Feld auf Johannes Koch ohne Organisationsklammer reduziert.
- [x] V1.17: Netzwerk-Waechter und CSP gegen automatische externe Verbindungen ergaenzt.
- [x] V1.17: Badge-Anzeige auf lokale SVG-Data-URIs umgestellt.
- [x] V1.17: Schatten im Vermerkbereich entfernt.
- [x] V1.18: Header-Infofeld entfernt und Headerlayout ohne leere zweite Spalte korrigiert.
- [x] V1.18: Footer- und About-Texte mit Jahr, Johannes-Koch-Link, MIT-Lizenz und CC0-Inhaltslizenz nachgezogen.
- [x] V1.18: Persistente Speicherung entfernt; alte `lf-*`-Schluessel werden nur einmalig bereinigt.
- [x] V1.18: Netzwerk-Waechter auf reinen Selbsttest ohne Prototype-/Global-Patching entschärft.
- [x] V1.18: URL-Pruefung fuer Quellenangaben im Lizenzvermerk ergaenzt.
- [x] V1.18: Kopierfunktion mit manuellem Fallback umgesetzt.
- [x] V1.18: Reset setzt auch die Vermerk-Maske zurueck.
- [x] V1.19: Sichtbares Copyright-Zeichen aus About- und Footer-Fliesstext entfernt; MIT-Copyright-Zeile bleibt erhalten.
- [x] V1.19: About-Panel bei kleinen Fensterhoehen scrollbar gemacht.
- [x] V1.19: Escape-Schliessen mit Fokusrueckgabe fuer About-Panel ergaenzt.
- [x] V1.19: Footer benennt Claude/Anthropic und Codex/OpenAI konkret.
- [x] V1.19: Jahresvorschlag im Vermerkformular dynamisch gesetzt.
- [x] V1.19: Quellenwarnung mit `role="status"`, `aria-live` und `aria-invalid` verbessert.
- [x] V1.20: MIT License im About-Panel mit der OSI-Lizenzseite verlinkt.
- [x] V1.20: Entstehungsabschnitt zu Vibe-Coding, Claude, Codex und redaktioneller Verantwortung ergaenzt.
- [x] V1.21: Footer- und Transparenztexte nennen Claude/Anthropic und Codex/OpenAI.
- [x] V1.21: "Ueber diese Anwendung" an BITTE-STIL-Aufbau angeglichen und About-Button in die Fusszeile verschoben.
- [x] GitHub-Pages-Einstieg `index.html` und Workflow vorbereitet.
- [x] README fuer GitHub verstaendlich und professionell ueberarbeitet.
- [x] GitHub-Issue- und PR-Vorlagen ergaenzt.

## Vor finaler Freigabe pruefen

- [x] Hauptdatei im Browser visuell nach Redesign pruefen.
- [x] Dark Mode aus der aktiven App entfernt.
- [x] Bessere-Lesbarkeit-Modus visuell pruefen.
- [ ] Tastaturbedienung der Hauptfunktionen manuell pruefen.
- [ ] Fokuszustaende und Formularbedienung manuell pruefen.
- [x] Deutsch/Englisch im Browser pruefen.
- [x] Copy-Buttons und Ausgabeformate im Browser testen.
- [x] Fragebogen mit typischen Antwortkombinationen testen.
- [x] Sandboxed-iframe ohne `allow-same-origin` technisch pruefen.
- [x] Keine dauerhafte Speicherung nach Durchlauf pruefen.
- [x] Sicherheitsfix fuer `javascript:` im Quellenfeld pruefen.
- [x] About-Panel bei 500 px Fensterhoehe pruefen.
- [x] Escape-Schliessen und Fokusrueckgabe pruefen.
- [x] Dynamisches Formularjahr mit simuliertem Datum 2027 pruefen.
- [ ] Fachliche Pruefung der Lizenztexte und Hinweise dokumentieren.
- [ ] GitHub-Repository pushen und Pages-Link pruefen.
- [ ] Finale Freigabeversion nach Abschluss der Tests erstellen.

## Spaeter moeglich

- [ ] Externe Linkpruefung in regelmaessigen Abstaenden wiederholen.
- [ ] Inhalte bei Bedarf ueber `content/redaktionstexte.de.md` und `content/redaktionstexte.en.md` redaktionell weiterentwickeln.
- [ ] Falls spaeter erneut Einbettung gewuenscht ist: als separates, technisch robustes Teilprojekt planen.
