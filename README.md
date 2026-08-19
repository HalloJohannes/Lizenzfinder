# Lizenzfinder

Stand: 19. August 2026 · Version 1.21.20260819-codex

Der Lizenzfinder ist eine schlanke Web-Anwendung, die bei der Auswahl einer passenden Creative-Commons-Lizenz hilft und anschließend einen passenden Lizenzvermerk erstellt. **Direkt online verwenden:** <https://hallojohannes.github.io/Lizenzfinder/>

Die Anwendung richtet sich vor allem an Lehrende und andere Personen, die selbst erstellte Materialien teilen möchten. Vorkenntnisse im Lizenzrecht sind nicht nötig: Ein kurzer Fragebogen führt durch die wichtigsten Entscheidungen, danach werden eine Empfehlung, eine mögliche Alternative und ein bewusstes Gegenbeispiel angezeigt.

## Was macht der Lizenzfinder?

Der Lizenzfinder:

- fragt knapp nach Namensnennung, Bearbeitung, kommerzieller Nutzung und Weitergabe unter gleicher Lizenz,
- empfiehlt eine passende Creative-Commons-Lizenz und zeigt eine sinnvolle Alternative,
- erklärt den Charakter der vorgeschlagenen Lizenzen in kurzen Sätzen,
- erstellt einen Lizenzvermerk mit Medientyp, Titel, Urheberangabe, Jahr, Lizenz, Ursprungsort und Bearbeitungshinweis,
- erzeugt Kurzvermerk, empfohlene Angabe, Markdown und HTML,
- zeigt Creative-Commons-Badges beziehungsweise lokale Badge-Grafiken,
- enthält einen Überblick über Creative-Commons- und ausgewählte Software-Lizenzen,
- funktioniert auf Deutsch und Englisch mit sprachsensiblen Links.

Der Lizenzfinder ersetzt keine Rechtsberatung. Er ist als praktische Orientierung gedacht und verweist für vertiefende Informationen auf Creative Commons, twillo und Choose a License.

## Direkt verwenden oder herunterladen

- **Online:** <https://hallojohannes.github.io/Lizenzfinder/>
- **Offline:** `Lizenzfinder-App-V1_21_20260819-codex.html` herunterladen und im Browser öffnen
- **GitHub Pages:** `index.html` ist identisch mit der aktuellen App-Datei und dient als direkter Einstieg

Die Anwendung ist eine einzelne statische HTML-Datei. Sie benötigt keinen Server, keine Anmeldung und keine Installation.

## Datenschutz und Netzwerk

Der Lizenzfinder speichert keine Antworten dauerhaft. Eingaben und Anzeigeeinstellungen bestehen nur während des aktuellen Seitenaufrufs und werden nach dem Schließen oder Neuladen verworfen.

Die ausgelieferte App lädt keine externen Schriften, Skripte oder Bilder. Sichtbare Lizenz-Badges werden lokal als SVG-Data-URIs erzeugt. Externe Links, etwa zu Creative Commons, twillo oder Choose a License, öffnen sich nur nach einem bewussten Klick.

Technisch wird das durch eine Content-Security-Policy mit `connect-src 'none'` und einen Netzwerk-Selbsttest begleitet. Der Selbsttest greift nicht in Browser-APIs wie `fetch`, Cookies oder `sendBeacon` ein, damit die App auch in anderen Seiten eingebettet werden kann, ohne diese zu stören.

## Sicherheit und Barrierearmut

Die Anwendung enthält mehrere Schutz- und Bedienbarkeitsmaßnahmen:

- Quellen-URLs im Lizenzvermerk werden geprüft; nur `http(s)`-Adressen werden in Ausgaben übernommen.
- Ungültige Quellenangaben werden sichtbar und per `aria-live` angekündigt.
- Das Panel „Über diese Anwendung“ ist scrollbar und per Escape schließbar.
- Schriftgröße und Lesbarkeitsmodus können direkt in der Oberfläche angepasst werden.
- Die wichtigsten Interaktionen werden in automatisierten Browserchecks geprüft.

## Projektstruktur

- `index.html`: GitHub-Pages-Einstieg, identisch mit der aktuellen App
- `Lizenzfinder-App-V1_21_20260819-codex.html`: aktuelle versionierte Single-HTML-Datei
- `src/`: führende Arbeitsquelle aus Struktur, Styling, Daten und Logik
- `scripts/`: Build- und Prüfscripte
- `docs/`: Anforderungen, Architektur, Linkmatrix und Textsystem
- `content/`: redaktionelle Arbeitsdateien für spätere Textänderungen
- `audits/`: Release-Audits und Prüfnotizen
- `versions/aktuell/`: Spiegel der aktuellen versionierten HTML-Datei
- `versions/archiv/`: gesicherte Vorversionen
- `versions/aenderungshistorie/`: Excel-Datei mit Versionen und Änderungen

## Entwickeln und prüfen

Voraussetzung ist Node.js. Es gibt keine npm-Paketabhängigkeiten.

```bash
npm run build
npm run check
npm run check:browser
```

`npm run build` erzeugt:

- die versionierte HTML-Datei auf oberster Ebene,
- `index.html` für GitHub Pages,
- den Spiegel in `versions/aktuell/`,
- ein kleines `dist/`-Artefakt für den GitHub-Pages-Workflow.

`npm run check` prüft Version, Metadaten, Lizenzhinweise, Sicherheitsannahmen und zentrale Fragenlogik. `npm run check:browser` prüft die Anwendung mit Playwright, darunter URL-Schutz, Clipboard-Fallback, CC0-Zero-Icon, Sprachumschaltung, Lesbarkeitsmodus, sandboxed iframe und das scrollbare About-Panel.

Die Excel-Versionshistorie kann in der Codex-Workspace-Runtime neu erzeugt werden:

```bash
CODEX_NODE_MODULES=/pfad/zur/codex-runtime/node_modules npm run versions:build
```

## GitHub Pages

Bei Änderungen auf `main` baut der Workflow `.github/workflows/pages.yml` die aktuelle Single-HTML neu und veröffentlicht das erzeugte `dist/`-Artefakt über GitHub Pages.

Falls Pages im Repository noch nicht aktiviert ist, muss in den Repository-Einstellungen einmalig **Settings → Pages → Build and deployment → Source: GitHub Actions** ausgewählt werden.

## Schlagworte

Geeignete GitHub Topics sind:

`oer`, `open-educational-resources`, `creative-commons`, `cc-license`, `attribution`, `license-finder`, `license-generator`, `education`, `teaching-materials`, `static-html`, `accessibility`, `mit-license`, `cc0`

## Rückmeldungen und Beiträge

Fehler, Verständnisprobleme und Ideen können über GitHub-Issues gemeldet werden. Besonders hilfreich sind Angaben zum Browser, Betriebssystem, Antwortpfad im Fragebogen und zum erwarteten Ergebnis.

Konkrete Änderungen können als Pull Request vorgeschlagen werden. Fachliche Änderungen an Lizenztexten sollten nachvollziehbar begründet und nach Möglichkeit mit belastbaren Quellen versehen werden.

## Entstehung und Transparenz

Konzept, fachliche Auswahl, redaktionelle Gestaltung und Freigabe liegen bei [Johannes Koch](https://www.linkedin.com/in/johannes-koch-1964a3240). Die technische Umsetzung erfolgte mithilfe von KI (Claude/Anthropic, Codex/OpenAI).

## Lizenz

Der Quellcode steht unter der [MIT License](LICENSE). Die redaktionellen Inhalte der Anwendung, also Fragen, Erläuterungen und FAQ-Texte, stehen unter [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/deed.de). Externe Quellen, Marken, Logos und Inhalte Dritter können eigenen Rechten oder Nutzungsbedingungen unterliegen.
