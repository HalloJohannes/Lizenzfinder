# Textsystem

Stand: 2026-08-19

Der Lizenzfinder kann auf zwei Wegen redaktionell weiterentwickelt werden:

1. Aenderungen im Chat beschreiben.
2. Texte direkt in `content/redaktionstexte.de.md` bearbeiten oder dort Wunschformulierungen notieren.

Die Markdown-Dateien im Ordner `content/` enthalten bewusst nur redaktionelle Texte und keine HTML-, CSS- oder JavaScript-Struktur. Sie sind nicht automatisch mit der App verdrahtet, sondern dienen als gut lesbare Arbeitsgrundlage. Bei einer neuen Iteration werden die Aenderungen in diese Bereiche uebertragen:

- `src/data.js`, falls Texte, Fragen, FAQ oder Lizenzdaten betroffen sind
- `src/index.html`, falls sichtbare Strukturtexte betroffen sind
- `Lizenzfinder-App-V1_17_20260819-codex.html`
- `versions/aktuell/...`
- bei Bedarf `content/redaktionstexte.en.md`
- Versionshistorie und Audit-Register

## Stand V1.17

Die aktuellen redaktionellen Arbeitsdateien sind:

- `content/redaktionstexte.de.md`
- `content/redaktionstexte.en.md`

Sie spiegeln den Stand der modularen V1.17-Fassung. Kleinere Textaenderungen koennen weiterhin im Chat beschrieben werden. Groessere Textaenderungen koennen direkt in den Markdown-Dateien vorbereitet werden.

Bei jeder Uebertragung in die App muessen mindestens diese Dateien synchronisiert werden:

- modulare Quelle in `src/`.
- Hauptdatei auf oberster Ebene.
- Datei in `versions/aktuell/`.
- Versionshistorie.
- Audit- oder TODO-Dateien, falls die Aenderung freigaberelevant ist.

## Empfohlener Ablauf

1. Text in `content/redaktionstexte.de.md` aendern oder kommentieren.
2. Im Chat kurz sagen, dass die Textdatei eingearbeitet werden soll.
3. Codex uebertraegt die Aenderungen in modulare Quelle, gebaute App und Dokumentation.
4. Eine neue Version wird angelegt, die vorherige Version bleibt im Archiv.

## Wichtig

- Die Markdown-Datei ist eine redaktionelle Arbeitsdatei, nicht die technische Quelle der App.
- Dadurch bleibt die App als einzelne HTML-Datei direkt nutzbar.
- Gleichzeitig koennen groessere Textaenderungen ohne Code vorbereitet werden.
