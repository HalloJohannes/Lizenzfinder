# Entscheidungen

Stand: 2026-08-19

## D-015: V1.15 als leichte, modulare App-Fassung

Datum: 2026-08-19

V1.15 ersetzt den schweren Farbheader durch eine leichtere, frischere App-Anmutung, angelehnt an SCHAU-HIN-Slides. Die ausgelieferte Datei bleibt eine einzelne HTML-Datei, die Arbeitsquelle wird aber modularisiert: `src/index.html`, `src/styles.css`, `src/data.js` und `src/app.js`.

## D-016: Exportfunktion wird entfernt

Datum: 2026-08-19

Die Export-/Einbettungsfunktion wird aus der aktiven App entfernt, weil der Praxiseinsatz als technisch nicht verlaesslich rueckgemeldet wurde. Alte Exportdateien bleiben nur archiviert.

## D-017: Software-Lizenzen als Orientierung, nicht als CC-Empfehlung

Datum: 2026-08-19

Die App nimmt Software-Lizenzen als eigenen Orientierungsteil auf. Der Creative-Commons-Fragebogen bleibt fuer Materialien gedacht; fuer Quellcode verweist die App auf Software-Lizenzen wie MIT, Apache-2.0, GPLv3 und AGPLv3.

## D-018: V1.16 reduziert Branding, Footer und Header

Datum: 2026-08-19

V1.16 entfernt sichtbares twillo-Branding aus dem Header und reduziert den Footer auf eine kompakte Verantwortungs- und Lizenzzeile. Hilfe- und Serviceverweise zu twillo bleiben dort erhalten, wo sie inhaltlich tragen: in Schritt 2 nach einer passenden Lizenzempfehlung und auf der Seite Hilfe & Quellen.

## D-019: Anwendungslizenz MIT

Datum: 2026-08-19

Die Anwendung selbst wird ab V1.16 unter MIT License veroeffentlicht. Creative-Commons-Lizenzen bleiben Gegenstand und Inhalt des Lizenzfinders, sind aber nicht mehr die Lizenz der App.

## D-020: Dark Mode entfernt

Datum: 2026-08-19

Der Dark Mode wird aus der aktiven App entfernt, weil er visuell nicht stabil genug war und fuer diese kleine Anwendung nicht releasekritisch ist. Die bessere Lesbarkeit und Schriftgroessensteuerung bleiben erhalten.

## D-021: Netzwerk-Waechter und lokale Badge-Anzeige

Datum: 2026-08-19

V1.17 fuehrt einen Netzwerk-Waechter ein. Die App darf externe Quellenlinks enthalten, baut aber nicht selbsttaetig externe Verbindungen auf. Sichtbare Lizenz-Badges werden als lokale SVG-Data-URIs erzeugt; externe Deed-, Legal-Code-, Badge- und Service-Links oeffnen erst nach bewusstem Anklicken.

## D-022: Kompakter Verantwortungsvermerk

Datum: 2026-08-19

Footer und Ueber-diese-Anwendung-Feld nennen als Konzept, fachliche und redaktionelle Gestaltung nur Johannes Koch. Organisationsklammern werden aus diesen Bereichen entfernt. twillo bleibt nur als fachlicher Service- und Veroeffentlichungshinweis sichtbar.

## D-001: Zielgruppe

Das Tool richtet sich zuerst an Menschen mit selbst erstellten Inhalten allgemein.

Beispiele: Texte, Bilder, Grafiken, Lehrmaterialien, Webseiten, Videos, Audios, Folien und aehnliche kreative oder redaktionelle Werke.

Nicht primaer im Fokus der ersten Version: Software-Code, Datensaetze, Patente, Markenrechte, Spezialfaelle mit mehreren Rechteinhabern.

## D-002: Tonalitaet

Die Sprache ist warm und klar.

Beispiele fuer die Richtung:

- "Teilen, was gut ist"
- "Passende Offenheit finden"
- "Fertig zum Mitgeben"

Fachbegriffe werden erklaert, aber nicht versteckt.

V1.13 nutzt innerhalb der App den praegnanten Namen "Lizenzfinder". Zu platte Formulierungen wurden zugunsten klarer, ruhiger Begriffe entfernt.

## D-003: Ergebnis nach dem Fragebogen

Nach dem Fragebogen zeigt das Tool drei Einordnungen:

- "Passt am ehesten": wahrscheinlich passendste Lizenz.
- "Koennte auch gut passen": sinnvolle Alternative.
- "Eher nicht passend": Kontrabeispiel mit kurzer Begruendung.

Erst danach folgt die Vermerk-Erstellung.

## D-004: Lizenzvermerk nach TULLU+B

Die Vermerk-Erstellung arbeitet mit TULLU+B:

- Titel
- Urheber:in
- Lizenz
- Link zur Lizenz
- Ursprungsort
- Bearbeitung

Die UI benennt diese Bausteine moeglichst menschlich und verstaendlich.

## D-005: Arbeitsweise und Qualitaet

Dieses Projekt wird von Beginn an mit Versionierung, Aenderungshistorie, Audits und Styleguide gepflegt. Das KI-AGB-Tool dient als Referenz fuer Struktur, nicht als 1:1-Kopie.

## D-006: Responsiveness, Accessibility und Darkmode

Die App wird responsive gebaut, aber nicht primaer als Mobile-App gedacht. Desktop und Tablet sind die wichtigsten Nutzungskontexte.

Accessibility, bessere Lesbarkeit, sichtbare Fokuszustaende, Tastaturbedienung, Kontraste und Darkmode gehoeren von Anfang an zur Basis.

Hinweis: Der Dark Mode wurde mit D-020 ab V1.16 aus der aktiven App entfernt. Accessibility, bessere Lesbarkeit, Fokuszustaende und Kontraste bleiben Bestandteil der Basis.

## D-007: Mehrsprachigkeit und externe Links

Die App bekommt Deutsch und Englisch.

Externe Links werden sprachsensibel gefuehrt. In der englischen App-Version sollen nach Moeglichkeit englische Creative-Commons-, twillo- oder Deed-/Legal-Code-Seiten verlinkt werden; in der deutschen Version entsprechend deutsche Seiten.

## D-008: Footer, Hilfe und Kontakt

Unten rechts wird ein aufklappbares Hilfe-und-Kontakt-Fenster vorgesehen. Der Footer orientiert sich strukturell stark am KI-AGB-Tool, wird aber inhaltlich an den Lizenzfinder angepasst.

Hinweis: Diese Entscheidung wurde mit D-018 ab V1.16 abgeloest. Unten rechts steht nun „Ueber diese Anwendung“, der Footer ist eine kompakte Verantwortungszeile.

## D-009: Metadaten und App-Lizenz

Die spaetere HTML-Datei soll strukturierte Metadaten wie beim KI-AGB-Tool enthalten. Johannes Koch wird als Urheber beziehungsweise verantwortlicher Editor ausgewiesen. Die App selbst steht unter CC BY 4.0.

Hinweis: Die App-Lizenz wurde mit D-019 ab V1.16 auf MIT umgestellt.

## D-010: Creative-Commons-Badges

Nach Lizenzempfehlung und Lizenzvermerk soll die App passende Creative-Commons-Badges auffindbar machen. Mindestens wird auf die offizielle Creative-Commons-Downloadseite verwiesen; wenn sauber umsetzbar, werden passende Badge-Downloads direkter angeboten.

## D-011: Export und Einbettung

Der dreistufige Workflow wird zusaetzlich als schlanke Exportdatei bereitgestellt. Die Exportfassung enthaelt keine Vollversions-Navigation, keinen Header und keinen Footer, aber eigene Metadaten und einen unauffaelligen Lizenzvermerk.

Hinweis: Diese Entscheidung wurde mit D-016 ab V1.15 abgeloest. Die Exportfunktion bleibt nur im Archiv nachvollziehbar und ist nicht mehr Teil der aktiven App.

## D-012: Release Candidate

V1.13 wird als Release Candidate behandelt. Der Funktionsumfang wird nicht weiter ausgebaut, bis Sichtpruefung, fachliche Endpruefung und optionaler WordPress-Test abgeschlossen sind.

## D-013: Bedingte Fragenlogik

V1.14 kuerzt den Fragebogen dort, wo die Antwortlogik bereits eindeutig ist:

- Wenn keine Namensnennung gewuenscht ist, steht die Empfehlung mit CC0 fest; weitere Lizenzmodulfragen werden uebersprungen.
- Wenn Bearbeitungen ausgeschlossen werden, wird die Share-Alike-Frage uebersprungen, weil Share Alike nur bei Bearbeitungen relevant wird.

Die Navigation muss diese Logik auch beim Zurueckblaettern beachten.

## D-014: Lizenz-Synchronisation

Der Lizenzvermerk folgt der intern gesetzten `currentLicense`. Diese Lizenz kommt entweder aus der Empfehlung oder aus einer bewusst manuellen Auswahl im Lizenzfeld. Das Auswahlfeld darf nicht an einem alten sichtbaren Wert haengen bleiben, wenn eine neue Empfehlung berechnet wurde.
