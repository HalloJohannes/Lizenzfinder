# Release-Audit V1.13

Datum: 2026-06-27

Gepruefte Version: 1.13.20260627-codex

Gepruefte Hauptdatei: `Lizenzfinder-App-V1_13_20260627-codex.html`

Gepruefte Exportdatei: `exports/lizenzfinder-workflow-embed.html`

Status: Release Candidate mit Auflagen

## Kurzfazit

Der Lizenzfinder ist als Release Candidate nutzbar vorbereitet. Die Kernfunktionen sind vorhanden: vierstufiger Fragebogen, Lizenzempfehlung mit Alternative und Gegenbeispiel, Vermerk-Erstellung, Creative-Commons-Badges, Deutsch/Englisch-Umschaltung, Darkmode, Lesbarkeitsmodus, Exportdatei und Einbettungshinweise.

Die App ist noch nicht als final freigegeben, weil eine echte Sichtpruefung im Browser, ein WordPress-Einbettungstest und eine abschliessende fachliche Gegenpruefung offen bleiben.

## Gepruefte Punkte

- [x] Aktuelle HTML-Datei liegt auf oberster Ebene des Projektordners.
- [x] Aktuelle HTML-Datei liegt zusaetzlich in `versions/aktuell/`.
- [x] Vorversion V1.12 ist in `versions/archiv/` gesichert.
- [x] Sichtbare Versionsnummer ist in der App vorhanden.
- [x] Metadaten enthalten Version, Urheber, Lizenz und Attribution.
- [x] App-Lizenzhinweis nennt Johannes Koch (twillo) und CC BY 4.0.
- [x] Footer enthaelt Orientierungshinweis und Lizenzvermerk zur App.
- [x] Deutsch/Englisch-Umschaltung ist technisch angelegt.
- [x] Englische Fassung vermeidet TULLU+B als deutsches Akronym und nutzt allgemein verstaendliche Attribution-Sprache.
- [x] Formular-Platzhalter wechseln sprachsensibel zwischen Deutsch und Englisch.
- [x] Externe Lizenzlinks sind nach Sprache getrennt hinterlegt, soweit in der App genutzt.
- [x] Fragebogen nutzt vier entscheidungsrelevante Fragen.
- [x] Ergebnisbereich zeigt Empfehlung, passende Alternative und kontrastierendes Gegenbeispiel.
- [x] Lizenzcharaktere werden knapp und niedrigschwellig beschrieben.
- [x] Vermerk-Erstellung enthaelt Medientyp, Titel, Urheber:in, Jahr, Lizenz, Quelle und Bearbeitungshinweis.
- [x] Generierter Titel wird im Lizenzvermerk in Anfuehrungszeichen gesetzt.
- [x] Eigene Medientypen koennen mit Artikel oder ohne Artikel genutzt werden.
- [x] Markdown- und HTML-Ausgaben sind einklappbar.
- [x] Creative-Commons-Badges werden lizenzbezogen angezeigt.
- [x] Exportdatei enthaelt nur den dreistufigen Workflow ohne Header/Footer der Vollversion.
- [x] Exportdatei startet mit allen drei Schritten eingeklappt.
- [x] Nach Abschluss des Fragebogens klappt die Lizenzempfehlung in der Exportdatei automatisch auf.
- [x] Exportdatei enthaelt Metadaten und Lizenzvermerk.
- [x] Download der Exportdatei wird ueber eingebettete HTML-Daten erzeugt.
- [x] Einbettungsanleitung liegt als Textdatei vor.
- [x] Versionshistorie ist fuer V1.13 vorbereitet.

## Technische Pruefung

Durchgefuehrt:

- HTML-Skriptbloecke der Hauptdatei syntaktisch geprueft.
- HTML-Skriptbloecke der Datei in `versions/aktuell/` syntaktisch geprueft.
- HTML-Skriptblock der Exportdatei syntaktisch geprueft.
- Eingebettete Exportdatei aus der Hauptdatei dekodiert und auf Version, eingeklappten Startzustand und automatisches Oeffnen der Empfehlung geprueft.
- Dateistruktur auf aktuelle Version und Archivstand geprueft.

Nicht in dieser Umgebung durchgefuehrt:

- Echte visuelle Browserpruefung mit Screenshot.
- Tastaturtest im Browser.
- Screenreader-Test.
- WordPress-Einbettungstest.
- Live-Pruefung externer Links im Netzwerk.

Hinweis zur Browserpruefung: Playwright ist in der Sitzung verfuegbar, der eigene Playwright-Browser ist jedoch nicht installiert. Ein Versuch, den lokal installierten Google Chrome headless zu starten, wurde von der Umgebung abgebrochen. Die Chrome-Erweiterung kann deshalb fuer eine spaetere manuelle oder neu konfigurierte Sichtpruefung hilfreich sein, ersetzt in dieser Sitzung aber noch keinen abgeschlossenen Browser-Audit.

## Offene Risiken

- Die fachlichen Lizenzempfehlungen sind plausibel und konsistent umgesetzt, sollten vor externer Veroeffentlichung aber nochmals fachlich gegengeprueft werden.
- Die App ist responsive angelegt, aber ein echter Test auf mehreren Viewports steht noch aus.
- Die Exportdatei ist fuer iframe-Einbindung vorbereitet; ob die Hoehe in WordPress ideal wirkt, muss im Zielsystem getestet werden.
- Externe Links koennen sich aendern und sollten vor Veroeffentlichung einmal live geprueft werden.
- Die App ist Orientierung und keine Rechtsberatung; dieser Rahmen ist im Footer dokumentiert.

## Empfehlung

V1.13 kann als Release Candidate dienen. Vor einer finalen Weitergabe sollte eine kurze Freigaberunde folgen:

1. Hauptdatei im Browser oeffnen und visuell pruefen.
2. Deutsch/Englisch, Darkmode und bessere Lesbarkeit einmal durchklicken.
3. Fragebogen mit typischen Antwortkombinationen testen.
4. Vermerk-Erstellung mit mindestens drei Materialtypen testen.
5. Exportdatei herunterladen und lokal oeffnen.
6. WordPress-Einbettung bei Gelegenheit in einer Testseite pruefen.
7. Fachliche Lizenzlogik und Formulierungen final abnehmen.
