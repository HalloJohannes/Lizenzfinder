# Release-Audit V1.21

Datum: 2026-08-19

Gepruefte Version: 1.21.20260819-codex

Status: mit Auflagen

## Anlass

V1.21 korrigiert die Transparenz- und Footertexte nach der V1.20-Ergaenzung: Die eingesetzte KI-Unterstuetzung nennt nun Claude/Anthropic und Codex/OpenAI. Der Anwendungsname bleibt durchgehend "Lizenzfinder". Zusaetzlich wird der Bereich "Ueber diese Anwendung" strukturell an den BITTE-STIL-Baukasten angeglichen.

## Umgesetzte Punkte

- [x] Versionsstring, Revision, Revisionsdatum und sichtbare Produktversion auf V1.21 aktualisiert.
- [x] Footer-Text deutsch: "Diese Anwendung „Lizenzfinder“ ..." mit Claude/Anthropic und Codex/OpenAI.
- [x] Footer-Text englisch entsprechend aktualisiert.
- [x] README-Abschnitt "Entstehung und Transparenz" auf Claude/Anthropic und Codex/OpenAI erweitert.
- [x] "Ueber diese Anwendung" in die Reihenfolge Produktversion, Zweck, Netzwerk und Speicherung, Entstehung, Lizenz, Hinweis gebracht.
- [x] Fester schwebender About-Button entfernt; About-Button in die Fusszeile verschoben.
- [x] About-Bereich als zentraler Dialog mit Schliessen-Button, Escape-Schliessen und Fokus-Rueckgabe umgesetzt.
- [x] Release-, Build- und Browsercheck-Skripte auf V1.21 aktualisiert.
- [x] Release-Check erwartet die kombinierte KI-Nennung im Footer.
- [x] Browsercheck prueft die kombinierte KI-Nennung in der englischen Ansicht.

## Technische Pruefung

- [x] `npm run build`
- [x] `npm run check`
- [x] `npm run check:browser`
- [x] `CODEX_NODE_MODULES=... npm run versions:build`

## Auflagen

- Fachliche Endabnahme der sichtbaren Transparenztexte.
- Manuelle Tastatur- und Fokuspruefung der Hauptpfade vor oeffentlicher Weitergabe.
