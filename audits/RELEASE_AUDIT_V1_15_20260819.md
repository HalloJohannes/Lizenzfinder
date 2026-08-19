# Release-Audit V1.15

Datum: 2026-08-19

Gepruefte Version: 1.15.20260819-codex

Gepruefte Hauptdatei: `Lizenzfinder-App-V1_15_20260819-codex.html`

Status: Release Candidate nach Feedbackrunde

## Kurzfazit

V1.15 verarbeitet die Rueckmeldungen aus der Feedbackrunde und bereitet den Lizenzfinder fuer eine GitHub-Veroeffentlichung vor. Die Grundfunktion bleibt erhalten: passende Creative-Commons-Lizenz finden, Empfehlung einordnen und Lizenzvermerk erstellen.

## Umgesetzte Rueckmeldungen

- [x] Hinweis auf Veroeffentlichung beziehungsweise Verlinkung bei twillo nach Lizenzempfehlung ergaenzt.
- [x] Software-Lizenzen als eigener Orientierungsteil aufgenommen.
- [x] Hinweis ergaenzt, dass Creative-Commons-Lizenzen fuer Softwarecode in der Regel nicht die passende Wahl sind.
- [x] CC0-Badge in der Lizenzuebersicht explizit geprueft.
- [x] Export-/Einbettungsfunktion aus der aktiven App entfernt.
- [x] Gestaltung leichter gefasst und naeher an der Anmutung von SCHAU-HIN-Slides ausgerichtet.
- [x] Quelle modularisiert.
- [x] GitHub-Unterlagen angelegt.

## Technische Pruefung

Durchgefuehrt am 2026-08-19:

- [x] Build aus `src/` erfolgreich.
- [x] Hauptdatei und Datei in `versions/aktuell/` sind identisch.
- [x] Script-Syntax der gebauten Datei geprueft.
- [x] Script-Syntax der modularen Quellen geprueft.
- [x] Alte Exportmechanik nicht mehr in der gebauten Datei enthalten.
- [x] CC0-Badge-URL geprueft.
- [x] Zentrale Logikpfade geprueft: CC0, CC BY-SA, CC BY-ND, CC BY-NC-ND.
- [x] Browserpruefung mit Playwright durchgefuehrt.
- [x] Sicht-Screenshots fuer Start, Ergebnis, Lizenzuebersicht, Tabletbreite sowie englischen Dark-/Readable-Mode erzeugt.
- [x] Lizenzfeld-Synchronisation im Browser geprueft.
- [x] Copy-Feedback im Browser geprueft.

## Quellen und fachliche Grenze

- Creative Commons empfiehlt fuer Softwarecode in der Regel Software-Lizenzen statt CC-Lizenzen.
- twillo beschreibt das Veroeffentlichen beziehungsweise Verlinken von Materialien im Workspace und die Relevanz von Lizenzangaben.
- Choose a License dient als niedrigschwellige Orientierung zu verbreiteten Software-Lizenzen.

Die App bleibt Orientierung und ersetzt keine Rechtsberatung.

## Offen

- Fachliche Endabnahme der neuen Software-Hinweise.
- GitHub-Push beziehungsweise Sichtpruefung im Remote-Repository. Der lokale Commit ist vorbereitet; der Push ist derzeit durch fehlende GitHub-Zugangsdaten im Terminal blockiert.
- Manuelle Tastatur- und Fokuspruefung als letzter Accessibility-Blick vor breiter Weitergabe.
