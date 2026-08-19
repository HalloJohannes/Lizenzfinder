# Styleguide

Stand: 2026-08-19

## Haltung

Das Tool soll ruhig, schlank und hilfreich wirken. Es fuehrt durch eine Entscheidung, ohne zu belehren oder zu ueberfrachten.

Leitbild: "klare Orientierung, freundlich formuliert".

## Sprache

- Warm und klar.
- Keine juristische Drohkulisse.
- Keine falsche Sicherheit: "Orientierung" statt "rechtssicher".
- Kurze Saetze, klare Verben.
- Fachbegriffe erklaeren, wenn sie auftauchen.

## Begriffe

Moegliche Navigations- und Abschnittstitel:

- "Passende Offenheit finden"
- "Alle Lizenzen im Überblick"
- "Offenheit sichtbar machen"
- "Passende Lizenz finden"
- "Lizenzempfehlung"
- "Lizenzvermerk erstellen"
- "Fertig zum Mitgeben"
- "Auch möglich"
- "Eher weniger passend"

## Visuelle Richtung

Ab V1.17 leichter und frischer, mit engem Blick auf SCHAU-HIN-Slides, aber weiterhin passend zur Lizenzfinder-Zielgruppe:

- Teal als primaerer Akzent.
- Ruhige helle Flaechen.
- Weisse Boxen mit petrolfarbener Kontur und tuerkisem hartem Schatten.
- Kantige Hauptcontainer mit sehr kleinem Radius.
- Gute Lesbarkeit vor dekorativen Effekten.
- Kein schwerer Farbheader als dominanter Einstieg.
- Kompakter Header, helle Arbeitsflaechen und pillenfoermige Bedienelemente.
- Ergebnis- und Uebersichtskarten duerfen den harten tuerkisen Schatten tragen.
- Unterkarten im Lizenzvermerk-Bereich bleiben ohne Schatten, damit die Eingabemaske ruhiger wirkt.

## Farbanker

- Teal: `#54B6B5` fuer Orientierung und Vertrauen
- Teal dunkel: `#2F6F6E`
- Teal hell: `#EDF7F7`
- Rose als Risiko-, Warn- und Loeschfarbe: `#F25B68`
- Grau 50: `#f9fafb`
- Grau 100: `#f3f4f6`
- Grau 200: `#e5e7eb`
- Grau 700: `#374151`
- Grau 900: `#111827`
- Sonderfarbe Citrus/Limette fuer Aktionen und markante Hinweise: `#E1E43F`
- Grautoene fuer ruhige Flaechen, Trennlinien und lesbare Struktur.

## UI-Prinzipien

- Ein Hauptgedanke pro Screen.
- Der Kernflow folgt sichtbar drei Schritten: Passende Lizenz finden, Lizenzempfehlung, Lizenzvermerk erstellen.
- Fragen als Single-Choice oder Multiple-Choice, nicht als lange Formulare.
- Ergebnis in drei klaren Bloecken: Empfehlung, Alternative, bewusstes Gegenbeispiel.
- Die Vermerk-Erstellung mit TULLU+B-Feldern bleibt im Workflow sichtbar und wird nicht hinter einem alleinigen Startbutton versteckt.
- Copy-Buttons direkt an den fertigen Vermerken.
- Hinweise stehen kurz und gut sichtbar dort, wo sie fuer die Entscheidung gebraucht werden.
- Fragehinweise duerfen die eigentliche Frage nicht ueberstrahlen: kein Warnkasten-Look, eher ruhiger Hilfetext.
- Unten rechts sitzt ein aufklappbares Ueber-diese-Anwendung-Fenster.
- Hilfe und Kontakt liegen inhaltlich auf der Seite Hilfe & Quellen.
- Der Footer ist eine kompakte Verantwortungs- und Lizenzzeile.

## Redaktionstexte

- Redaktionsnahe Texte liegen zusaetzlich in `content/redaktionstexte.de.md` und `content/redaktionstexte.en.md`.
- Diese Dateien sind die bevorzugte Arbeitsflaeche fuer groessere oder sehr gezielte Textkorrekturen.
- Chat-Anmerkungen bleiben gleichwertig: sie werden bei Iterationen in modulare Quelle, aktuelle HTML-App und Textbasis uebernommen.

## Responsive Verhalten

- Responsive von Beginn an.
- Nicht mobil-zentriert, aber auf kleinen Viewports stabil und lesbar.
- Desktop und Tablet sind die wichtigsten Zielgroessen.
- Keine horizontalen Layout-Brueche in den Kernflows.

## Lesbarkeit

- Eine bessere Lesbarkeit wird wie beim KI-AGB-Tool mitgedacht.
- Schriftgroessen, Zeilenhoehen und Kontraste sollen langen Erklaertext vermeiden und kurze Orientierung gut lesbar machen.
- Farbcodierung wird nie allein zur Bedeutungsvermittlung genutzt.
- Der Dark Mode ist ab V1.16 nicht Teil der aktiven App.

## Netzwerk

- Externe Quellenlinks sind erlaubt und werden sprachsensibel gesetzt.
- Die App baut keine automatischen externen Verbindungen auf.
- Sichtbare Lizenz-Badges werden lokal erzeugt; externe Badge-Downloads oder Deed-/Legal-Code-Seiten werden erst durch bewusstes Anklicken geoeffnet.

## Mehrsprachigkeit

- Alle sichtbaren UI-Texte werden als Deutsch/Englisch-Struktur vorbereitet.
- Externe Links brauchen passende Zielvarianten je Sprache.
- In der englischen App-Version sollen keine deutschsprachigen Standardlinks auftauchen, wenn eine passende englische Zielseite verfuegbar ist.

## Barrierearmut

- Ausreichender Kontrast.
- Tastaturbedienbare Auswahlfelder und Buttons.
- Sichtbarer Fokuszustand.
- Keine Information nur ueber Farbe.
- Mobile Ansicht von Anfang an mitdenken.
