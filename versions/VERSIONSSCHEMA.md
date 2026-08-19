# Versionsschema

Stand: 2026-06-26

Das Versionsschema orientiert sich am KI-AGB-Tool, ist aber fuer den Lizenzfinder neu angesetzt.

## Format

`<linie>.<revision>.<datum>-<toolcode>`

Beispiel:

`1.1.20260626-codex`

## Bedeutung

- `linie`: Hauptlinie oder Fork der Entwicklung.
  - `1`: Lizenzfinder-Hauptlinie.
  - `2+`: spaetere Forks, groessere Neuausrichtungen oder alternative Hauptlinien.
- `revision`: fortlaufende Projektrevision innerhalb der Linie.
- `datum`: Bearbeitungs- oder Auslieferungsdatum im Format `JJJJMMTT`.
- `toolcode`: Werkzeug, mit dem diese Revision hauptsaechlich bearbeitet wurde.

## Toolcodes

- `human`: ohne dokumentierte KI-Unterstuetzung.
- `codex`: ChatGPT/Codex (OpenAI).
- `chatgpt`: ChatGPT ohne Codex-Kontext (OpenAI).
- `claude`: Claude (Anthropic).
- `gemini`: Gemini (Google).
- `copilot`: Microsoft Copilot oder GitHub Copilot.
- `mistral`: Mistral / Le Chat.
- `perplexity`: Perplexity.
- `local`: lokales oder offenes Modell.
- `unknown-ai`: anderes oder nicht naeher identifizierbares KI-Tool.
- `mixed`: mehrere Werkzeuge in einer Revision.

## Empfehlung fuer jede neue Version

1. Aktuellen Stand in `versions/archiv/` sichern.
2. Neue Datei in `versions/aktuell/` oder spaeter im App-Root bereitstellen.
3. Versionsnummer und sichtbare oder unsichtbare Metadaten aktualisieren.
4. Aenderung in `versions/aenderungshistorie/lizenzfinder_versionshistorie.xlsx` dokumentieren.
5. Bei groesseren Aenderungen ein Audit in `audits/` ablegen.
