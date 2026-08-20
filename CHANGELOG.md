# Changelog

## 1.22.20260819-codex

- Dialog „Über diese Anwendung“ kleiner skaliert und visuell enger an den BITTE-STIL-Baukasten angeglichen.
- Dialogbreite, Schriftgroessen, Abstaende und Schliessen-Button reduziert; Footer-Button-Struktur bleibt erhalten.
- Release-Dateien und Browsercheck auf V1.22 aktualisiert.

## 1.21.20260819-codex

- Footer- und Transparenztexte ergaenzt: Die KI-Unterstuetzung nennt nun Claude/Anthropic und Codex/OpenAI.
- "Ueber diese Anwendung" strukturell an den BITTE-STIL-Baukasten angeglichen.
- Fester schwebender About-Button entfernt; About-Button sitzt nun in der Fusszeile und oeffnet einen zentralen Dialog.
- Release-Dateien und Browsercheck auf V1.21 aktualisiert.

## 1.20.20260819-codex

- MIT License im Bereich „Über diese Anwendung“ mit der Open-Source-Initiative-Quelle verlinkt.
- Entstehungsabschnitt zu Vibe-Coding, Claude, Codex und redaktioneller Verantwortung ergänzt.
- Release-Dateien und Browsercheck auf V1.20 aktualisiert.

## 1.19.20260819-codex

- Sichtbares Copyright-Zeichen aus About- und Footer-Fliesstext entfernt; die MIT-Zeile `Copyright (c) 2026 Johannes Koch` bleibt erhalten.
- Ueber-diese-Anwendung-Panel bei kleinen Fensterhoehen scrollbar gemacht und verschachtelte Scrollbegrenzung im MIT-Text entfernt.
- Escape-Schliessen des About-Panels mit Fokusrueckgabe an den Button ergaenzt.
- Footer benennt Claude/Anthropic und Codex/OpenAI konkret.
- Formularjahr im Lizenzvermerk dynamisch aus dem aktuellen Kalenderjahr vorbelegt; feste Credit- und Lizenzjahre bleiben 2026.
- Quellenwarnung fuer Screenreader verbessert: `role="status"`, `aria-live="polite"` und `aria-invalid`.
- Release- und Browserchecks auf V1.19 erweitert.
- GitHub-Pages-Einstieg `index.html`, Pages-Workflow, README-Veröffentlichungstext, Projekt-Keywords sowie Issue- und PR-Vorlagen ergänzt.

## 1.18.20260819-codex

- Weißes Infofeld im Header entfernt und Headerlayout auf eine Spalte bereinigt.
- Persistente Speicherung von Antworten und Anzeigeeinstellungen entfernt; alte `lf-*`-Schluessel werden nur einmalig bereinigt.
- Netzwerk-Waechter auf reinen Selbsttest entschärft, damit eingebettete Trägerseiten nicht in `fetch`, Cookies oder `sendBeacon` beeinflusst werden.
- Quellen-URL im Lizenzvermerk auf `http(s)` beschränkt und zweisprachigen Inline-Hinweis ergänzt.
- Kopierfunktion meldet nur echten Clipboard-Erfolg; sonst wird der Text für manuelles Kopieren markiert.
- Reset setzt nun auch die komplette Vermerk-Maske zurück.
- Ueber-diese-Anwendung-Panel und Footer mit MIT-Code-Lizenz und CC0-Inhaltslizenz aktualisiert.
- Release- und Browserchecks um sandboxed iframe, localStorage, URL-Schutz und Clipboard-Fallback erweitert.

## 1.17.20260819-codex

- Abstand zwischen Navigation und Inhaltsbereich vergroessert.
- Footer und Ueber-diese-Anwendung-Feld auf Johannes Koch ohne Organisationsklammer reduziert.
- Ueber-diese-Anwendung um kurze MIT-Erklaerung, Netzwerk-Waechter und Schrift-Hinweis ergaenzt.
- Netzwerk-Waechter und CSP gegen automatische externe Verbindungen eingebaut.
- Sichtbare Lizenz-Badges als lokale SVG-Data-URIs erzeugt, damit keine externen Bilder automatisch geladen werden.
- Schlagschatten im Lizenzvermerk-Bereich entfernt; Ergebnis- und Uebersichtskarten behalten den SCHAU-HIN-Schatten.
- twillo-Hinweis nach Lizenzempfehlung ruhiger gesetzt.

## 1.16.20260819-codex

- Header weiter verkleinert und sichtbares twillo-Branding aus dem Header entfernt.
- Design naeher an SCHAU-HIN-Slides gefuehrt: kantigere weisse Boxen, petrolfarbene Kontur und tuerkiser Schatten.
- Dark Mode vollstaendig entfernt; Sprachumschaltung, Lesbarkeitsmodus und Schriftgroesse bleiben erhalten.
- Footer auf eine kompakte Verantwortungs- und Lizenzzeile reduziert.
- Hilfe-und-Kontakt-Schalter durch „Ueber diese Anwendung“ ersetzt.
- Hilfe & Quellen um twillo-Service, Helpcenter, Veranstaltungen und Kontakt ergaenzt.
- Lizenz der Anwendung von CC BY 4.0 auf MIT umgestellt.
- CC0-Darstellung vom Public-Domain-Button auf das offizielle Zero-Icon umgestellt.

## 1.15.20260819-codex

- Feedbackrunde eingearbeitet.
- Export-/Einbettungsfunktion aus dem aktiven Produkt entfernt.
- Leichteres Design ohne schweren Farbheader umgesetzt.
- Veröffentlichungs-Hinweis zu twillo nach Lizenzempfehlung ergänzt.
- Überblick zu Software-Lizenzen ergänzt.
- CC0-Badge in der Lizenzübersicht explizit geprüft.
- Quelle modularisiert: Struktur, Styling, Daten und Logik liegen getrennt in `src/`.
- Build- und Prüfscripte für die Single-HTML-Ausgabe ergänzt.
- GitHub-Unterlagen ergänzt.

## 1.14.20260629-codex

- Lizenz-Synchronisation zwischen Empfehlung, manueller Auswahl und Vermerk-Erstellung korrigiert.
- Nicht relevante Fragen werden übersprungen.
- Logiktests für Haupt-App, Exportdatei und eingebettete Kopie ergänzt.

## 1.13.20260627-codex

- Release Candidate mit dreistufigem Workflow, Lizenzübersicht, Vermerk-Erstellung, Darkmode, besserer Lesbarkeit und Deutsch/Englisch-Umschaltung.

## 1.12.20260627-codex

- Interne Hinweiszeile beim Lizenzvermerk entfernt.
- Englische TULLU+B-Begriffe durch allgemein verständliche Attribution-Formulierungen ersetzt.
- Englische Formular-Platzhalter sprachlich angepasst und Exportdatei synchronisiert.

## 1.11.20260627-codex

- Oberste HTML-Datei eindeutig als Lizenzfinder-App mit Versionsnummer benannt.
- Export-Accordion startet vollständig eingeklappt.
- Lizenzempfehlung klappt nach Abschluss des Fragebogens automatisch auf.
- Textanleitung zur WordPress-/iframe-Einbettung als Download ergänzt.

## 1.10.20260627-codex

- Medientyp-Hinweis in der Vermerkmaske entfernt.
- Export-Download als eingebettete HTML-Datei umgesetzt.
- Exportfassung als kompaktes dreistufiges Ziehharmonika-Element aufgebaut.
- Hinweis zu „alle Rechte vorbehalten“ dezent in den ersten Workflowschritt verschoben.

## 1.9.20260627-codex

- Kommerzielle Nutzung im Fragehinweis genauer erklärt.
- Exportbereich mit Vorschau, direktem Download und erklärtem Einbettungscode erweitert.
- Lizenzvermerk mit twillo-Attribution vereinheitlicht.
- Medientypen ergänzt, eigener Medientyp mit Artikelwahl ermöglicht und Titel im Vermerk in Anführungszeichen gesetzt.
- Sichtbare Versionsnummer im Footer ergänzt.

## 1.8.20260627-codex

- App innerhalb der Anwendung auf „Lizenzfinder“ verkürzt.
- Header- und Workflow-Texte geschärft.
- Ungenutzte Materialtyp-Frage entfernt.
- Fragehinweise ruhiger gestaltet und mehrere Fragen zugänglicher formuliert.
- Exportbereich mit eigenständiger Workflow-HTML und iframe-Snippet ergänzt.
- Redaktionelle Textdateien für künftige Textarbeit angelegt.

## 1.7.20260626-codex

- Farbrollen nach AGB-Styleguide korrigiert: Teal für Orientierung, Grau für ruhige Flächen, Citrus für Aktionen, Rose für Risiko.
- Seitentitel zu „Offenheit sichtbar machen“ geändert.
- Workflow-Abstände verbessert.
- Markdown-/HTML-Vorlagen eingeklappt.
- Lizenzübersicht als kompakte AGB-nahe Karten mit Detailansicht umgesetzt.

## 1.6.20260626-codex

- Visuelle Nähe zum AGB-Tool verstärkt: Header, Navigation, Hilfe-Fenster, Footer und Workflow-Struktur angeglichen.
- Startseite als vertikaler Drei-Schritt-Workflow aufgebaut.
- Lizenzkarten erklären den Charakter der Lizenzen und zeigen Badges.

## 1.5.20260626-codex

- UI nach AGB-Tool-Referenz beruhigt.
- Header und Footer näher angeglichen.
- Gelber Disclaimer entfernt.
- Schriftgrößensteuerung, sichtbare Frageinfos, schlankere Auswertung, Lizenzbaukasten, FAQ und Medientyp im Vermerk ergänzt.

## 1.4.20260626-codex

- Erste klickbare HTML-Fassung erstellt.
- Fragebogen, Empfehlung, Alternative, Gegenbeispiel, Vermerk-Erstellung, Deutsch/Englisch, Darkmode, Lesbarkeit, Hilfe-Fenster, Footer und CC-Badge-Hinweise angelegt.

## 1.3.20260626-codex

- Projektordner in `lizenzfinder-vermerk-app` umbenannt.
- Projektunterlagen sprachlich auf App, Anwendung und Vermerk-Erstellung umgestellt.

## 1.2.20260626-codex

- Allgemeine App-Anforderungen erfasst: responsive Basis, Accessibility, Darkmode, Mehrsprachigkeit, sprachsensitive Links, Hilfe/Kontakt, Footer, Metadaten und CC-Badges.

## 1.1.20260626-codex

- Projektbasis angelegt: Struktur, Styleguide, Audit-Template, Versionsschema und erste Fragenlogik.
