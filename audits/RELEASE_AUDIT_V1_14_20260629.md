# Release-Audit V1.14

Datum: 2026-06-29

Gepruefte Version: 1.14.20260629-codex

Gepruefte Hauptdatei: `Lizenzfinder-App-V1_14_20260629-codex.html`

Gepruefte Exportdatei: `exports/lizenzfinder-workflow-embed.html`

Status: Release Candidate mit Logik-Korrekturen

## Kurzfazit

V1.14 ist ein Korrektur-Release auf Basis des Release Candidate V1.13. Der Funktionsumfang wurde nicht erweitert. Stattdessen wurden drei freigaberelevante Punkte bereinigt:

- Die Lizenz-Auswahl in der Vermerk-Erstellung folgt nun der berechneten Empfehlung beziehungsweise einer bewusst manuell gewaehlten Lizenz.
- Der Fragebogen ueberspringt logisch nicht relevante Fragen.
- Die Korrekturen wurden in Haupt-App, Exportdatei und eingebettete Download-Kopie uebernommen.

## Gepruefte Korrekturen

- [x] `fillLicenseSelect()` nutzt `currentLicense` statt `sel.value || currentLicense`.
- [x] Eine manuelle Lizenzwahl setzt `manualLicense=true` und bleibt beim Neuaufbau des Auswahlfeldes erhalten.
- [x] Eine neue Ergebnisberechnung setzt die manuelle Auswahl zurueck und folgt wieder der Empfehlung.
- [x] Bei "keine Namensnennung" wird direkt das Ergebnis angezeigt.
- [x] Bei "keine Bearbeitung" wird die Share-Alike-Frage uebersprungen.
- [x] Vor- und Zuruecknavigation folgen der Relevanzlogik.
- [x] Die Fortschrittsanzeige zaehlt nur relevante Fragen.
- [x] Die Exportdatei enthaelt dieselbe Logik.
- [x] Die eingebettete Download-Kopie enthaelt dieselbe Logik.

## Erwartete Logikpfade

- Alles ja: Empfehlung `CC BY-SA 4.0`.
- Keine Namensnennung: nur eine Frage, Empfehlung `CC0 1.0`.
- Keine Bearbeitung, kommerzielle Nutzung erlaubt: Share-Alike wird uebersprungen, Empfehlung `CC BY-ND 4.0`.
- Keine Bearbeitung, kommerzielle Nutzung ausgeschlossen: Share-Alike wird uebersprungen, Empfehlung `CC BY-NC-ND 4.0`.

## Technische Pruefung

Durchgefuehrt am 2026-06-29:

- [x] Script-Syntax der Hauptdatei.
- [x] Script-Syntax der Datei in `versions/aktuell/`.
- [x] Script-Syntax der Exportdatei.
- [x] Dekodierung und Pruefung der eingebetteten Exportdatei.
- [x] Logiktests fuer Hauptdatei, Exportdatei und eingebettete Exportdatei: 27/27 bestanden.

## Weiter offen

- Echte visuelle Browserpruefung.
- Tastatur- und Fokuspruefung im Browser.
- Live-Pruefung externer Links.
- WordPress-Einbettungstest.
- Fachliche Endabnahme vor finaler Freigabe.
