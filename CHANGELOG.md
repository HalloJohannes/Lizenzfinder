# Changelog

## 1.19.20260819-codex

- Sichtbares Copyright-Zeichen aus About- und Footer-Fliesstext entfernt; die MIT-Zeile `Copyright (c) 2026 Johannes Koch` bleibt erhalten.
- Ueber-diese-Anwendung-Panel bei kleinen Fensterhoehen scrollbar gemacht und verschachtelte Scrollbegrenzung im MIT-Text entfernt.
- Escape-Schliessen des About-Panels mit Fokusrueckgabe an den Button ergaenzt.
- Footer benennt das KI-Werkzeug konkret als Codex/OpenAI.
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
