# Lizenzfinder

Stand: 2026-08-19

Aktuelle Version: 1.22.20260819-codex

Status: Release Candidate nach V1.22-Dialogskalierung

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
- Single-HTML-Datei ohne externe Ressourcen; CSP mit `connect-src 'none'`, Netzwerk-Selbsttest und lokal erzeugte Badge-SVGs.
- Keine dauerhafte Speicherung: alte `lf-*`-Schluessel werden beim Start einmalig entfernt, neue Antworten und Anzeigeeinstellungen bleiben nur im Arbeitsspeicher.
- URL-Pruefung fuer Quellenangaben im Lizenzvermerk: nur `http(s)` wird in Ausgabeformate uebernommen.
- Ehrliche Kopierfunktion mit manuellem Markieren, falls die Clipboard-API nicht verfuegbar ist.
- V1.19: About-Panel ist bei kleinen Fensterhoehen scrollbar und per Escape schliessbar.
- V1.19: Das Jahr im Vermerkformular wird dynamisch aus dem aktuellen Kalenderjahr vorbelegt.
- V1.19: Sichtbare Copyright-Zeichen wurden auf den MIT-Lizenzblock beschraenkt; im Fliesstext bleibt nur die Namensnennung.
- V1.20: MIT License im About-Panel mit der OSI-Lizenzseite verlinkt.
- V1.20: Entstehungsabschnitt zu Vibe-Coding, Claude, Codex und redaktioneller Verantwortung ergaenzt.
- V1.21: Footer- und Transparenztexte nennen Claude/Anthropic und Codex/OpenAI.
- V1.21: "Ueber diese Anwendung" an den BITTE-STIL-Aufbau angeglichen und Button in die Fusszeile verschoben.
- V1.22: "Ueber diese Anwendung" kompakter skaliert und naeher an die Dialoggroesse des BITTE-STIL-Baukastens gefuehrt.
- GitHub-Pages-Einstieg ueber `index.html`, Pages-Workflow und GitHub-Vorlagen sind vorbereitet.
- Die fruehere Export-/Einbettungsfunktion ist ab V1.15 nicht mehr Teil der aktiven App.

## Technische Pruefung V1.22

- Build aus modularer Quelle erfolgreich.
- Hauptdatei und Datei in `versions/aktuell/` sind identisch.
- Script-Syntax der gebauten Datei und modularen Quellen geprueft.
- Alte Exportmechanik nicht mehr in der gebauten Datei enthalten.
- Zentrale Fragenlogik bestanden: CC0-Pfad, BY-SA-Pfad, ND-Pfade.
- Dark-Mode-Reste statisch ausgeschlossen.
- MIT-Lizenzhinweise geprueft.
- Doppellizenzierung dokumentiert: Quellcode MIT, redaktionelle Inhalte CC0 1.0.
- CSP, Netzwerk-Selbsttest und lokal erzeugte Badge-Bilder geprueft.
- Kein persistenter `localStorage`: alte Schluessel werden entfernt, nach Durchlauf bleiben keine `lf-*`-Schluessel erhalten.
- URL-Sicherheitsfix geprueft: `javascript:` wird verworfen, gueltige `https`-Adresse wird uebernommen.
- Quellenwarnung setzt `aria-invalid` und ist per `role="status"`/`aria-live` ansagbar.
- About-Panel bei 500 px Fensterhoehe scrollbar; Escape schliesst mit Fokusrueckgabe.
- Dynamisches Formularjahr mit simuliertem Datum 2027 geprueft; feste Credit- und Lizenzjahre bleiben 2026.
- Browsercheck mit Playwright bestanden: Empfehlung, Lizenzfeld-Sync, manueller Copy-Fallback, CC0-Zero-Icon, EN-Umschaltung, Lesbarkeitsmodus, Ueber-diese-Anwendung-Panel, sandboxed iframe und keine automatischen externen Ressourcen.
- Screenshots liegen lokal unter `work/previews/v1_22/`.
- GitHub-Repository ist angebunden; Veraenderungen werden lokal und auf `main` gepflegt.

## Projektstruktur

- `Lizenzfinder-App-V1_22_20260819-codex.html`: aktuelle Hauptdatei auf oberster Ebene.
- `src/`: modulare Arbeitsquelle aus HTML-Struktur, Styling, Daten und App-Logik.
- `index.html`: GitHub-Pages-Einstieg, identisch mit der aktuellen App.
- `.github/`: Pages-Workflow sowie Issue- und PR-Vorlagen.
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

Nach fachlicher Endpruefung und manueller Tastatur-/Fokuspruefung kann aus V1.22 eine finale Freigabeversion erstellt werden.
