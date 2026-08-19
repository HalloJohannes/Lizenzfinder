# App-Anforderungen

Stand: 2026-08-19

## Grundidee

Die App hilft Endanwenderinnen und Endanwendern, fuer selbst erstellte Inhalte eine passende Lizenz zu finden und danach einen sauberen Lizenzvermerk zu erstellen.

Der typische Ablauf:

1. Die Nutzerin weiss grob etwas ueber Lizenzen.
2. Sie beantwortet nacheinander kurze Dialogfragen.
3. Sie waehlt in Single-Choice- und Multiple-Choice-Feldern passende Optionen.
4. Sobald die wichtigsten Informationen vorliegen, erhaelt sie eine Lizenzempfehlung.
5. Die Empfehlung zeigt auch eine gute Alternative und ein klares Kontrabeispiel.
6. Danach erstellt die Nutzerin in einer Metadatenmaske den eigenen Lizenzvermerk.
7. Am Ende kann sie den Vermerk kopieren und passende Creative-Commons-Badges finden oder herunterladen.

Die App ist Orientierung und keine Rechtsberatung.

## Layout und Responsiveness

- Die App soll responsive sein.
- Sie muss nicht als mobil-zentrierte App konzipiert werden, soll aber auf kleineren Viewports nicht brechen.
- Desktop und Tablet sind die wichtigsten Nutzungskontexte.
- Mobile Lesbarkeit wird mitgedacht, aber nicht als primaerer Use Case optimiert.

## Accessibility und Lesbarkeit

- Accessibility wird von Anfang an mitgedacht.
- Bessere Lesbarkeit soll wie beim KI-AGB-Tool ein Grundprinzip sein.
- Ein Darkmode ist von Anfang an vorgesehen.
- Fokuszustaende, Tastaturbedienung, ausreichende Kontraste und klare Formularbeschriftungen gehoeren zur Basis.
- Info-i-Elemente duerfen kurze Zusatzinfos geben, sollen aber nicht die Hauptfuehrung ersetzen.

## Sprache und Mehrsprachigkeit

- Die App soll automatisch auf Englisch umstellbar sein.
- Texte, Buttons, Hinweise, Lizenznamen und Ergebnisbausteine brauchen deutsche und englische Fassungen.
- Externe Links muessen sprachsensibel sein:
  - In der deutschen App-Version auf deutschsprachige Seiten verweisen, wenn vorhanden.
  - In der englischen App-Version auf englischsprachige Seiten verweisen.
- Das gilt besonders fuer Creative Commons, twillo, Deed-Seiten, Legal-Code-Seiten, Erklaerseiten und Badge-/Downloadseiten.

## Inhaltliche Tiefe

- Die App erklaert die wichtigsten Lizenzinformationen kurz und knapp.
- Tiefere Informationen werden auf twillo.de, creativecommons.org oder andere geeignete Quellen ausgelagert.
- Deed und Legal Code werden verlinkt, aber nicht in der App nachgebaut.
- Bei Unsicherheit oder komplexen Faellen wird auf weitere Pruefung verwiesen.

## Ergebnis nach dem Fragebogen

Die Ergebnisansicht enthaelt:

- "Passt am ehesten": die wahrscheinlich passende Lizenz.
- "Koennte auch gut passen": eine sinnvolle Alternative.
- "Eher nicht passend": eine Lizenz, die zur angegebenen Absicht schlecht passt.
- Jeweils eine kurze Begruendung.
- Kurze Kerninfos zur empfohlenen Lizenz.
- Weiterfuehrende Links, passend zur gewaehlten Sprache.

## Vermerk-Erstellung

Nach der Lizenzempfehlung folgt eine Metadatenmaske.

Sie soll selbsterklaerend sein und TULLU+B abbilden:

- Titel
- Urheber:in
- Lizenz
- Link zur Lizenz
- Ursprungsort
- Bearbeitung

Zusaetzlich soll die App eine Formulierung anbieten wie:

"Wir empfehlen folgende Angabe bei Nachnutzung: ..."

Moegliche Ausgaben:

- Kurzvermerk
- Ausfuehrlicher Vermerk
- Markdown
- HTML
- Nachnutzungsempfehlung

## Creative-Commons-Badges

Am Ende soll die App helfen, passende Creative-Commons-Badges zu finden.

Mindestanforderung:

- Link zur offiziellen Creative-Commons-Downloadseite: `https://creativecommons.org/mission/downloads/`

Wunsch:

- Direkter Hinweis auf die passenden Lizenzbuttons oder Badges.
- Falls technisch und rechtlich sauber machbar: direkter Download oder eingebettete Auswahl fuer SVG/PNG.

Die Badges sind wichtig, weil sie Wiedererkennung schaffen und in der Praxis haeufig gesucht werden.

## Hilfe und Kontakt

- Unten rechts soll ein Hilfe-und-Kontakt-Fenster sitzen.
- Es klappt auf und orientiert sich grundsaetzlich am KI-AGB-Tool.
- Inhaltlich soll es zur Lizenzfinder-App passen.
- Es soll Kontakt, Hinweise, Quellen und ggf. kurze Orientierung anbieten.

## Footer

Der Footer soll vom Aufbau her stark an das KI-AGB-Tool angelehnt sein.

Er enthaelt voraussichtlich:

- Kurzbeschreibung der App.
- Hinweis auf Orientierung, keine Rechtsberatung.
- Kontakt oder Verantwortlichkeit.
- Lizenzhinweis zur App selbst.
- Angabe zu Konzept, fachlicher/redaktioneller Gestaltung und KI-Unterstuetzung.
- Externe Links passend zur Sprache.

## Metadaten der HTML-Datei

Die spaetere HTML-Datei soll wie beim KI-AGB-Tool strukturierte Metadaten enthalten.

Vorgesehen:

- App-Titel
- Beschreibung
- Version
- Versionslinie
- Revision
- Revisionsdatum
- Bearbeitungswerkzeug
- verantwortlicher Editor / Urheber: Johannes Koch
- Lizenz: CC BY 4.0
- Lizenz-URL
- empfohlene Namensnennung
- Rechtehinweis
- Sprachinformationen

## Lizenz der App selbst

Die App selbst soll wie das KI-AGB-Tool unter CC BY 4.0 stehen.

Die genaue Namensnennung wird spaeter final formuliert, soll aber Johannes Koch als Urheber ausweisen.

## Umsetzungsstand V1.13

Die Anforderungen sind im Release Candidate weitgehend umgesetzt:

- Fragebogen, Empfehlung, Alternative und Gegenbeispiel sind vorhanden.
- Lizenzvermerk-Erstellung mit TULLU+B-Bausteinen ist vorhanden.
- Deutsch/Englisch-Umschaltung ist vorhanden.
- Sprachsensible Creative-Commons-Links sind fuer die Lizenzen hinterlegt.
- Hilfe-und-Kontakt-Fenster und Footer sind vorhanden.
- Metadaten, Versionsnummer und CC-BY-Lizenzhinweis sind vorhanden.
- Creative-Commons-Badges werden je Lizenz angezeigt.
- Exportdatei und Einbettungsanleitung sind vorhanden.
- Darkmode, bessere Lesbarkeit und Schriftgroessensteuerung sind vorhanden.

Noch offen vor finaler Freigabe:

- Browser-Sichtpruefung auf Desktop, Tabletbreite und kleinerem Viewport.
- Tastatur- und Fokuspruefung.
- Fachliche Endpruefung der Lizenzlogik.
- Live-Pruefung externer Links.
- Keine WordPress-Einbettungspruefung mehr: Die Export-/Einbettungsfunktion wird ab V1.15 nicht mehr angeboten.

## Nachtrag V1.14

Die V1.14 behebt freigaberelevante Logikpunkte:

- Der generierte Lizenzvermerk folgt der empfohlenen oder bewusst manuell gewaehlten Lizenz.
- Nicht relevante Fragen werden uebersprungen.
- Haupt-App, Exportdatei und eingebettete Download-Kopie sind synchronisiert.

## Nachtrag V1.15

Die V1.15 verarbeitet Rueckmeldungen aus einer Feedbackrunde:

- Die Export-/Einbettungsfunktion wird aus der aktiven App entfernt.
- Nach einer passenden Lizenzempfehlung erscheint ein Hinweis auf die Veroeffentlichung beziehungsweise Verlinkung bei twillo.
- Die Lizenzuebersicht enthaelt einen Orientierungsteil zu Software-Lizenzen.
- Fuer Softwarecode wird darauf hingewiesen, dass Creative-Commons-Lizenzen in der Regel nicht die passende Wahl sind.
- Der CC0-Badge wird in der Lizenzuebersicht explizit mit der CC0-Badge-URL ausgespielt.
- Die Gestaltung wird leichter und naeher an der Anmutung der SCHAU-HIN-Slides.
- Die App-Quelle wird modularisiert, bleibt aber als Single-HTML-Datei auslieferbar.

## Nachtrag V1.16

Die V1.16 verarbeitet die abschliessenden Design- und Lizenzrueckmeldungen vor einer moeglichen GitHub-Veroeffentlichung:

- Der Header wird kompakter und zeigt nur noch den Namen Lizenzfinder.
- Sichtbare twillo-Verweise bleiben auf fachlich sinnvolle Stellen begrenzt: Hilfe & Quellen sowie der Hinweis zur Veroeffentlichung nach Lizenzempfehlung.
- Der Footer wird auf eine knappe Verantwortungs- und Lizenzzeile reduziert.
- Das aufklappbare Feld unten rechts heisst nun Ueber diese Anwendung und nennt Produktversion, Netzwerkhinweis und MIT-Lizenz.
- Der Dark Mode ist nicht mehr Teil der aktiven App; Lesbarkeitsmodus und Schriftgroessensteuerung bleiben.
- Die App selbst steht unter MIT License.
- Die CC0-Darstellung nutzt das offizielle Creative-Commons-Zero-Icon statt des Public-Domain-Buttons.

## Nachtrag V1.17

Die V1.17 nimmt abschliessende Oberflaechen- und Technikfeinheiten auf:

- Der Abstand zwischen Navigationszeile und Inhaltsueberschrift wird vergroessert.
- Footer und Ueber-diese-Anwendung-Feld nennen Johannes Koch ohne Organisationsklammer.
- Das Ueber-diese-Anwendung-Feld enthaelt eine kurze MIT-Erklaerung, Produktversion, Netzwerkhinweis und Schrift-Hinweis.
- Ein Netzwerk-Waechter und eine Content-Security-Policy verhindern automatische externe Verbindungen.
- Sichtbare Lizenz-Badges werden lokal als SVG-Data-URIs erzeugt.
- Schlagschatten im Lizenzvermerk-Bereich werden entfernt; Empfehlungskarten und Uebersichtskarten behalten den SCHAU-HIN-artigen Schatten.
- Der twillo-Hinweis nach der Lizenzempfehlung wird ruhiger und ohne senkrechten Balken dargestellt.

## Nachtrag V1.18

Die V1.18 setzt eine Haertung und Textkorrektur fuer die Single-HTML-Fassung um:

- Das weiße Infofeld im Header wurde entfernt; der Header bleibt leicht und ohne leere zweite Layoutspalte.
- Die Anwendung speichert keine Antworten oder Anzeigeeinstellungen dauerhaft. Alte `lf-*`-Schluessel werden beim Start einmalig bereinigt.
- Der fruehere Netzwerk-Waechter greift nicht mehr in `fetch`, Cookies, `sendBeacon`, XHR, WebSocket oder EventSource der Traegerseite ein. Stattdessen bleibt ein Netzwerk-Selbsttest plus CSP.
- Das Quellenfeld fuer Lizenzvermerke akzeptiert fuer Ausgaben nur `http(s)`-Adressen und zeigt bei ungueltiger Eingabe einen dezenten Hinweis.
- Die Kopierfunktion meldet nur dann Erfolg, wenn die Clipboard-API tatsaechlich erfolgreich war; andernfalls wird der Text markiert.
- Das Ueber-diese-Anwendung-Feld und der Footer nennen Quellcode-Lizenz MIT sowie redaktionelle Inhaltslizenz CC0 1.0.

## Nachtrag V1.19

Die V1.19 nimmt einen kleinen Layoutfix und Detailkorrekturen auf:

- Sichtbare Copyright-Zeichen werden aus Fliesstexten entfernt; die MIT-Copyright-Zeile bleibt im Lizenztext erhalten.
- Das Ueber-diese-Anwendung-Panel ist bei kleinen Fensterhoehen scrollbar und per Escape schliessbar.
- Das Formularjahr fuer neue Lizenzvermerke wird dynamisch aus dem aktuellen Kalenderjahr gesetzt.
- Die Quellenwarnung ist fuer assistive Technologien besser erfassbar.
- Der Footer benennt Claude/Anthropic und Codex/OpenAI konkret als eingesetzte KI-Unterstuetzung.
