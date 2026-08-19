# Fragenlogik Entwurf

Stand: 2026-06-29

## Ziel

Der Fragebogen soll mit wenigen Fragen herausfinden, welche Lizenzabsicht am ehesten vorliegt. Er soll keine Rechtsberatung ersetzen, sondern eine verstaendliche Orientierung geben.

## Geplanter Ablauf

1. Welche Art Inhalt moechtest du lizenzieren?
2. Darf dein Werk bearbeitet, angepasst oder uebersetzt werden?
3. Darf dein Werk auch kommerziell genutzt werden?
4. Soll dein Name genannt werden?
5. Sollen Bearbeitungen wieder unter derselben Lizenz geteilt werden?
6. Wurde dein Werk aus fremden Materialien zusammengesetzt oder veraendert?
7. Soll am Ende ein Lizenzvermerk erstellt werden?

## Dialogprinzip

- Die Fragen laufen nacheinander.
- Single-Choice wird genutzt, wenn genau eine Richtung gebraucht wird.
- Multiple-Choice wird genutzt, wenn mehrere Eigenschaften gleichzeitig zutreffen koennen.
- Der Fragebogen soll beendet werden koennen, sobald die wichtigsten Informationen fuer eine Empfehlung vorliegen.
- Nutzerinnen sollen nicht mit Detailfragen belastet werden, wenn sie fuer die Empfehlung nicht gebraucht werden.

## Erste Lizenzfamilie

- CC0
- CC BY 4.0
- CC BY-SA 4.0
- CC BY-NC 4.0
- CC BY-NC-SA 4.0
- CC BY-ND 4.0
- CC BY-NC-ND 4.0

## Ergebnisstruktur

Jedes Ergebnis braucht:

- passende Lizenz
- kurze Begruendung
- passende Alternative
- Kontrabeispiel
- Hinweis, wann genauer geprueft werden sollte
- kurze Kerninfos zur empfohlenen Lizenz
- weiterfuehrende Links zu twillo oder Creative Commons, passend zur App-Sprache

## TULLU+B Vermerk-Erstellung

Pflichtfelder:

- Titel
- Urheber:in
- Lizenz
- Link zur Lizenz

Empfohlene Felder:

- Ursprungsort
- Bearbeitungshinweis

Moegliche Ausgaben:

- Kurzvermerk
- Ausfuehrlicher Vermerk
- Markdown
- HTML
- Nachnutzungsempfehlung nach dem Muster "Wir empfehlen folgende Angabe bei Nachnutzung: ..."

## Badge-Schritt

Nach dem fertigen Lizenzvermerk soll die App auf passende Creative-Commons-Badges hinweisen.

Mindestanforderung:

- Link zur offiziellen Creative-Commons-Downloadseite.

Wunsch:

- Passende Lizenzbuttons gezielt anbieten oder direkt auffindbar machen.

## Umgesetzte Fragenlogik V1.13

Die aktuelle App nutzt vier entscheidungsrelevante Fragen:

1. Soll bei Nachnutzung sichtbar sein, von wem das Material stammt?
2. Duerfen andere das Material veraendern?
3. Darf das Material auch kommerziell genutzt werden?
4. Sollen Bearbeitungen wieder unter derselben Lizenz geteilt werden?

Die urspruenglich geplante Materialart-Frage wurde entfernt, weil sie fuer die Lizenzempfehlung nicht benoetigt wurde. Der Medientyp wird stattdessen erst bei der Vermerk-Erstellung abgefragt.

## Ergebnislogik V1.13

Die App gibt nach dem Fragebogen drei Hinweise aus:

- Empfehlung: die nach den Antworten naheliegendste Lizenz.
- Auch moeglich: eine sinnvolle Alternative.
- Eher weniger passend: ein bewusstes Gegenbeispiel, das die Entscheidung schaerft.

Die Empfehlung wird nicht als Rechtsauskunft formuliert, sondern als Orientierung. Vertiefende Informationen werden ueber Deed, Legal Code, twillo und Creative Commons ausgelagert.

## Vermerk-Erstellung V1.13

Die Vermerk-Erstellung enthaelt:

- Medientyp mit Auswahl und Freitextoption.
- Artikel-Auswahl fuer eigene Medientypen.
- Titel mit Anfuehrungszeichen im generierten Vermerk.
- Urheber:in beziehungsweise Organisation.
- Jahr.
- Lizenz.
- optionaler Ursprungsort.
- optionaler Bearbeitungshinweis.
- Kurzvermerk, empfohlene Angabe, Markdown und HTML.

## Logik-Korrektur V1.14

Die V1.14 korrigiert zwei Punkte im Fragebogen:

- Bei der Antwort "Nein, ohne Namensnennung freigeben" wird direkt das Ergebnis angezeigt, weil CC0 als Empfehlung feststeht.
- Bei der Antwort "Nein, nur unveraendert weitergeben" wird die Share-Alike-Frage uebersprungen, weil Share Alike nur bei erlaubten Bearbeitungen relevant ist.

Die Fortschrittsanzeige zaehlt seitdem nur noch die tatsaechlich relevanten Fragen. Das Zurueckblaettern folgt derselben Relevanzlogik.

Zusaetzlich wurde die Synchronisierung zwischen Empfehlung, Lizenz-Auswahlfeld und generiertem Lizenzvermerk korrigiert. Der Lizenzvermerk nutzt die empfohlene Lizenz oder eine bewusst manuell gewaehlte Lizenz, nicht mehr den alten Startwert des Auswahlfeldes.
