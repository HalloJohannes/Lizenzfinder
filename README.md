# Lizenzfinder

Der Lizenzfinder ist eine schlanke, statische HTML-Anwendung zur Orientierung bei Creative-Commons-Lizenzen und zum Erstellen eines Lizenzvermerks.

Die Anwendung richtet sich vor allem an Lehrende und Personen, die selbst erstellte Materialien offen teilen möchten. Sie ersetzt keine Rechtsberatung, sondern führt niedrigschwellig durch typische Entscheidungen: Namensnennung, Bearbeitung, kommerzielle Nutzung und Weitergabe unter gleicher Lizenz.

## Aktueller Stand

- Version: `1.17.20260819-codex`
- Aktuelle App-Datei: `Lizenzfinder-App-V1_17_20260819-codex.html`
- Quelle: `src/`
- Status: Release Candidate nach Feedbackrunde
- Lizenz der App: MIT

## Was die App kann

- kurze Lizenzorientierung für selbst erstellte Materialien
- Empfehlung, Alternative und bewusstes Gegenbeispiel
- Lizenzvermerk mit Titel, Urheber:in, Lizenzlink, Ursprungsort und Bearbeitungshinweis
- Creative-Commons-Badges je Lizenz
- Hinweis zur Veröffentlichung auf twillo nach passender Lizenzwahl
- eigener Überblick zu Software-Lizenzen
- Deutsch/Englisch-Umschaltung mit sprachsensiblen Links
- bessere Lesbarkeit und Schriftgrößensteuerung
- Netzwerk-Wächter gegen automatische externe Verbindungen; externe Quellenlinks öffnen erst nach bewusstem Anklicken

## Was bewusst nicht mehr enthalten ist

Die frühere Export-/Einbettungsfunktion wurde in V1.15 entfernt, weil sie im Praxiseinsatz technisch nicht zuverlässig genug war. Die alten Exportdateien bleiben nur im lokalen Arbeitsarchiv nachvollziehbar und sind nicht Teil der öffentlichen GitHub-Fassung.

## Projektstruktur

- `src/index.html`: HTML-Struktur der Arbeitsquelle
- `src/styles.css`: Design, Layout, Lesbarkeitsmodus und Responsiveness
- `src/data.js`: Texte, Lizenzdaten, Fragen, Links und Lizenzübersichten
- `src/app.js`: Interaktion, Empfehlungslogik, Sprachumschaltung, Netzwerk-Wächter und Vermerk-Generator
- `scripts/build-release.mjs`: baut die aktuelle Single-HTML-Datei
- `scripts/check-release.mjs`: prüft Version, Struktur, Syntax und zentrale Logikpfade
- `versions/aktuell/`: Spiegel der aktuellen HTML-Datei
- `versions/archiv/`: gesicherte Vorversionen
- `docs/`: Anforderungen, Architektur, Textsystem und fachliche Notizen
- `audits/`: Prüfberichte

## Nutzung

Die Datei `Lizenzfinder-App-V1_17_20260819-codex.html` kann direkt im Browser geöffnet werden.

## Entwicklung

```bash
npm run build
npm run check
npm run check:browser
```

Der Build erzeugt die aktuelle HTML-Datei auf oberster Ebene und spiegelt sie nach `versions/aktuell/`.

Die Excel-Versionshistorie kann in der Codex-Workspace-Runtime regeneriert werden:

```bash
CODEX_NODE_MODULES=/pfad/zur/codex-runtime/node_modules npm run versions:build
```

## Quellen

- Creative Commons FAQ zu Software und CC-Lizenzen: https://creativecommons.org/faq/
- Creative Commons Downloads: https://creativecommons.org/mission/downloads/
- twillo: OER teilen: https://www.twillo.de/oer-teilen/
- twillo: TULLU+B und OER aufbereiten: https://www.twillo.de/oer-aufbereiten/
- Choose a License für Software-Lizenzen: https://choosealicense.com/

## Lizenz

Der Lizenzfinder steht unter der MIT License.
