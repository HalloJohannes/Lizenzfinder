# Architektur

Stand: 2026-08-19

Version: 1.20.20260819-codex

## Ziel

Die App bleibt für Endnutzer:innen eine einfache Single-HTML-Datei. Für die Entwicklung ist sie ab V1.15 modular aufgebaut, damit Inhalte, Gestaltung und Logik nachvollziehbar gepflegt werden können.

## Module

- `src/index.html`: semantische Struktur, Navigation, Formularflächen und Ausgabebereiche
- `src/styles.css`: Designsystem, Layout, Lesbarkeit und responsive Regeln
- `src/data.js`: Fragen, UI-Texte, Lizenzdaten, Software-Hinweise, FAQ und Quellenlinks
- `src/app.js`: Sprachwechsel, Navigation, Empfehlungslogik, Netzwerk-Waechter, Lizenzvermerk und Kopierfunktionen

## Build

`scripts/build-release.mjs` fügt HTML, CSS und JavaScript zu einer transportablen HTML-Datei zusammen.

Die aktuelle Datei liegt danach:

- auf oberster Ebene
- gespiegelt in `versions/aktuell/`

Ältere App-Dateien werden in `versions/archiv/` gesichert.

## Qualität

`scripts/check-release.mjs` prüft:

- identische Hauptdatei und aktuelle Versionskopie
- sichtbare Versionsnummer
- Entfernung der alten Exportmechanik
- Entfernung des Dark Mode
- MIT-Lizenzhinweise
- korrektes CC0-Zero-Icon
- keine persistente Speicherung von Antworten oder Anzeigeeinstellungen
- URL-Pruefung fuer Quellenangaben im Lizenzvermerk
- Netzwerk-Selbsttest ohne Eingriff in Browser-APIs der Trägerseite
- scrollbares und per Escape schliessbares About-Panel
- dynamische Jahresvorbelegung fuer neu erstellte Lizenzvermerke
- CSP und Netzwerk-Waechter gegen automatische externe Verbindungen
- keine automatisch ladenden externen Bildquellen
- JavaScript-Syntax der gebauten Datei
- JavaScript-Syntax der modularen Quellen
- zentrale Entscheidungslogik des Fragebogens

## Fachliche Grenze

Die App gibt Orientierung. Die rechtlich maßgeblichen Informationen bleiben die jeweils verlinkten Originalquellen, insbesondere Creative Commons, twillo und für Software-Lizenzen Choose a License beziehungsweise die Original-Lizenztexte.
