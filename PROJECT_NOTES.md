# Lizenzfinder

Stand: 2026-08-19

Aktuelle Version: 1.17.20260819-codex

Status: Release Candidate nach Feinschliff, Netzwerk-Waechter und Doku-Update

## Ziel

Der Lizenzfinder ist eine schlanke HTML-Anwendung fuer selbst erstellte Inhalte. Er hilft Nutzerinnen und Nutzern,

1. eine passende Creative-Commons-Lizenz zu finden,
2. Empfehlung, Alternative und Gegenbeispiel knapp einzuordnen,
3. danach einen sauberen Lizenzvermerk zu erstellen.

Die Anwendung bietet Orientierung und keine Rechtsberatung.

## Zielgruppe und Ton

- Zielgruppe: Lehrende und andere Personen mit selbst erstellten Materialien, die eine einfache Orientierung zu offenen Lizenzen brauchen.
- Ton: warm, klar, niedrigschwellig und nicht ueberfrachtet.
- Gestaltung: angelehnt an SCHAU-HIN-Slides, mit ruhigen Flaechen, petrolfarbener Kontur, kantigen Boxen und tuerkisem Schatten.

## Aktueller Funktionsumfang

- Vierstufiger Fragebogen zur Lizenzabsicht.
- Bedingtes Ueberspringen nicht relevanter Fragen: CC0-Pfad nach Verzicht auf Namensnennung, keine Share-Alike-Frage bei ausgeschlossener Bearbeitung.
- Lizenzempfehlung mit guter Alternative und bewusstem Gegenbeispiel.
- Uebersichtsseite zu allen beruecksichtigten Creative-Commons-Lizenzen.
- Eigener Orientierungsteil zu Software-Lizenzen.
- Lizenzvermerk-Erstellung mit Medientyp, Titel, Urheber:in, Jahr, Lizenz, Quelle und Bearbeitungshinweis.
- Synchronisierte Lizenz-Auswahl: Der generierte Vermerk folgt der empfohlenen oder bewusst manuell gewaehlten Lizenz.
- Ausgabe als Kurzvermerk, empfohlene Angabe, Markdown und HTML.
- Creative-Commons-Badges beziehungsweise Icons je Lizenz.
- Korrigierte CC0-Darstellung mit offiziellem Zero-Icon statt Public-Domain-Button.
- Hinweis zur Veroeffentlichung auf twillo nach passender Lizenzempfehlung.
- Deutsch/Englisch-Umschaltung inklusive sprachsensibler Links.
- Bessere Lesbarkeit und Schriftgroessensteuerung.
- Ueber-diese-Anwendung-Fenster unten rechts.
- Kompakte Verantwortungszeile im Footer.
- MIT-Lizenz fuer die Anwendung.
- Netzwerk-Waechter gegen automatische externe Verbindungen; sichtbare Badges werden lokal als SVG erzeugt.
- Die fruehere Export-/Einbettungsfunktion ist ab V1.15 nicht mehr Teil der aktiven App.

## Technische Pruefung V1.17

- Build aus modularer Quelle erfolgreich.
- Hauptdatei und Datei in `versions/aktuell/` sind identisch.
- Script-Syntax der gebauten Datei und modularen Quellen geprueft.
- Alte Exportmechanik nicht mehr in der gebauten Datei enthalten.
- Zentrale Fragenlogik bestanden: CC0-Pfad, BY-SA-Pfad, ND-Pfade.
- Dark-Mode-Reste statisch ausgeschlossen.
- MIT-Lizenzhinweise geprueft.
- Netzwerk-Waechter, CSP und lokal erzeugte Badge-Bilder geprueft.
- Browsercheck mit Playwright bestanden: Empfehlung, Lizenzfeld-Sync, Copy-Toast, CC0-Zero-Icon, EN-Umschaltung, Lesbarkeitsmodus, Ueber-diese-Anwendung-Panel und keine automatischen externen Ressourcen.
- Screenshots liegen lokal unter `work/previews/v1_17/`.
- GitHub-Commit lokal vorbereitet; Push auf `main` scheitert aktuell an fehlenden GitHub-Zugangsdaten im Terminal.

## Projektstruktur

- `Lizenzfinder-App-V1_17_20260819-codex.html`: aktuelle Hauptdatei auf oberster Ebene.
- `src/`: modulare Arbeitsquelle aus HTML-Struktur, Styling, Daten und App-Logik.
- `scripts/`: Build- und Pruefskripte.
- `versions/aktuell/`: aktuelle versionierte HTML-Datei.
- `versions/archiv/`: gesicherte Vorversionen.
- `versions/aenderungshistorie/`: Excel-Datei mit Versionen und Audits.
- `content/`: redaktionelle Textablage fuer Deutsch und Englisch.
- `docs/`: Anforderungen, Fragenlogik, Linkmatrix und Textsystem.
- `styleguide/`: visuelle und sprachliche Leitplanken.
- `audits/`: Auditvorlagen und Release-Audits.
- `work/`: Arbeitsskripte und Zwischenmaterial.

## Arbeitsprinzip

- Jede relevante Iteration bekommt eine Versionsnummer.
- Die aktuelle App-Datei liegt immer auf oberster Ebene und in `versions/aktuell/`.
- Vorversionen werden in `versions/archiv/` gesichert.
- Versionshistorie und Auditregister werden in der Excel-Datei gepflegt.
- Umfangreichere Textaenderungen koennen in `content/redaktionstexte.de.md` und `content/redaktionstexte.en.md` vorbereitet werden.
- Sichtbare App-Texte und Daten liegen in der modularen Quelle primaer in `src/data.js`.

## Offene Freigabetests

Vor einer finalen Weitergabe sollten noch geprueft werden:

- Browser-Sichtpruefung der Hauptdatei nach dem Redesign.
- Bessere Lesbarkeit und Tastaturbedienung.
- Copy-Buttons und Ausgabeformate im Browser.
- Fachliche Endpruefung der Lizenzlogik und Formulierungen.
- GitHub-Remote pruefen und veroeffentlichen.

## Naechster Schritt

Nach erfolgreicher Sicht- und Fachpruefung kann aus V1.17 eine finale Freigabeversion erstellt werden.
