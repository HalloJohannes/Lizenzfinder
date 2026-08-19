import fs from "node:fs/promises";
import fsSync from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const runtimeNodeModules = process.env.CODEX_NODE_MODULES;
if (!runtimeNodeModules) {
  throw new Error("Fuer diesen Script wird @oai/artifact-tool benoetigt. In Codex: CODEX_NODE_MODULES auf den gebuendelten node_modules-Pfad setzen.");
}
if (!fsSync.existsSync(path.join(runtimeNodeModules, "@oai", "artifact-tool", "package.json"))) {
  throw new Error(`@oai/artifact-tool wurde unter CODEX_NODE_MODULES nicht gefunden: ${runtimeNodeModules}`);
}
const runtimeRequire = createRequire(path.join(runtimeNodeModules, "package.json"));
const { SpreadsheetFile, Workbook } = runtimeRequire("@oai/artifact-tool");

const projectDir = process.cwd();
const versionDir = path.join(projectDir, "versions", "aenderungshistorie");
const previewDir = path.join(projectDir, "work", "previews");
const outputDir = path.join(projectDir, "outputs", "setup-2026-06-26");
await fs.mkdir(versionDir, { recursive: true });
await fs.mkdir(previewDir, { recursive: true });
await fs.mkdir(outputDir, { recursive: true });

const workbook = Workbook.create();
const summary = workbook.worksheets.add("Uebersicht");
const history = workbook.worksheets.add("Versionshistorie");
const audits = workbook.worksheets.add("Audit-Register");
const lists = workbook.worksheets.add("Listen");

const colors = {
  teal: "#54B6B5",
  tealDark: "#2F6F6E",
  tealLight: "#EDF7F7",
  rose: "#F25B68",
  lime: "#E1E43F",
  gray50: "#F9FAFB",
  gray100: "#F3F4F6",
  gray200: "#E5E7EB",
  gray700: "#374151",
  gray900: "#111827",
  white: "#FFFFFF",
};

function styleSheet(sheet) {
  sheet.showGridLines = false;
}

function title(sheet, titleRange, subtitleRange, text, subtitle) {
  sheet.getRange(titleRange).merge();
  sheet.getRange(titleRange).values = [[text]];
  sheet.getRange(titleRange).format = {
    fill: colors.tealDark,
    font: { bold: true, color: colors.white, size: 16 },
    verticalAlignment: "center",
    wrapText: true,
  };
  sheet.getRange(subtitleRange).merge();
  sheet.getRange(subtitleRange).values = [[subtitle]];
  sheet.getRange(subtitleRange).format = {
    fill: colors.tealLight,
    font: { color: colors.gray700, size: 10 },
    wrapText: true,
  };
}

function header(range) {
  range.format = {
    fill: colors.tealDark,
    font: { bold: true, color: colors.white },
    wrapText: true,
    horizontalAlignment: "center",
    verticalAlignment: "center",
    borders: { preset: "all", style: "thin", color: colors.tealDark },
  };
}

function body(range) {
  range.format = {
    fill: colors.white,
    font: { color: colors.gray900 },
    wrapText: true,
    verticalAlignment: "top",
    borders: { preset: "all", style: "thin", color: colors.gray200 },
  };
}

for (const sheet of [summary, history, audits, lists]) styleSheet(sheet);

title(
  summary,
  "A1:H1",
  "A2:H2",
  "Lizenzfinder - Projektuebersicht",
  "Arbeitsstand, Versionierung und naechste Schritte fuer das neue Tool.",
);
summary.getRange("A4:B10").values = [
  ["Aktuelle Version", "1.17.20260819-codex"],
  ["Status", "Release Candidate nach Feinschliff, Netzwerk-Waechter und Doku-Update"],
  ["Letzte Aenderung", new Date("2026-08-19T00:00:00")],
  ["Primaeres Werkzeug", "codex"],
  ["Zielgruppe", "Selbst erstellte Inhalte allgemein"],
  ["Naechster Schritt", "Fachliche Endabnahme, manuelle Tastatur-/Fokuspruefung und GitHub-Sichtpruefung vor finaler Freigabe"],
  ["Hinweis", "Orientierung, keine Rechtsberatung"],
];
summary.getRange("A4:A10").format = {
  fill: colors.tealLight,
  font: { bold: true, color: colors.tealDark },
  borders: { preset: "all", style: "thin", color: colors.gray200 },
};
body(summary.getRange("B4:B10"));
summary.getRange("B6").setNumberFormat("yyyy-mm-dd");
summary.getRange("D4:H4").values = [["Zaehler", "Formel", "Wert", "Kommentar", ""]];
header(summary.getRange("D4:H4"));
summary.getRange("D5:H8").values = [
  ["Revisionen", "=COUNTA(Versionshistorie!$A$2:$A$200)", null, "Anzahl dokumentierter Staende", ""],
  ["Offene Audits", '=COUNTIF(\'Audit-Register\'!$E$2:$E$200,"offen")', null, "Offene Pruefpunkte", ""],
  ["Freigabekandidaten", '=COUNTIF(Versionshistorie!$G$2:$G$200,"Freigabekandidat")', null, "Staende kurz vor Weitergabe", ""],
  ["Archivierte Staende", '=COUNTIF(Versionshistorie!$G$2:$G$200,"Archiviert")', null, "Gesicherte Vorversionen", ""],
];
summary.getRange("F5:F8").formulas = [["=E5"], ["=E6"], ["=E7"], ["=E8"]];
body(summary.getRange("D5:H8"));

history.getRange("A1:K1").values = [[
  "Version",
  "Datum",
  "Linie",
  "Revision",
  "Toolcode",
  "Bearbeiter:in",
  "Status",
  "Kurzbeschreibung",
  "Geaenderte Bereiche",
  "Audit / Pruefung",
  "Naechster Schritt",
]];
header(history.getRange("A1:K1"));
history.getRange("A2:K16").values = [
  [
    "1.1.20260626-codex",
    new Date("2026-06-26T00:00:00"),
    1,
    1,
    "codex",
    "Johannes Koch / Codex",
    "Konzept",
    "Projektbasis angelegt: Struktur, Styleguide, Audit-Template, Versionsschema und erste Fragenlogik.",
    "Projektstruktur; Dokumentation; Versionierung",
    "Basispruefung ausstehend",
    "Fragenlogik und Lizenzmatrix konkretisieren",
  ],
  [
    "1.2.20260626-codex",
    new Date("2026-06-26T00:00:00"),
    1,
    2,
    "codex",
    "Johannes Koch / Codex",
    "Konzept",
    "Allgemeine App-Anforderungen erfasst: responsive Basis, Accessibility, Darkmode, Mehrsprachigkeit, sprachsensitive Links, Hilfe/Kontakt, Footer, Metadaten, CC-Badges.",
    "Anforderungen; Styleguide; Entscheidungen; Fragenlogik; Versionierung",
    "Strukturpruefung dokumentiert",
    "Lizenzlogik-Matrix und Linkmatrix ausarbeiten",
  ],
  [
    "1.3.20260626-codex",
    new Date("2026-06-26T00:00:00"),
    1,
    3,
    "codex",
    "Johannes Koch / Codex",
    "Konzept",
    "Projektordner in lizenzfinder-vermerk-app umbenannt und die Projektunterlagen sprachlich auf App, Anwendung und Vermerk-Erstellung umgestellt.",
    "Projektstruktur; Dokumentation; Benennung; Versionierung",
    "Strukturpruefung dokumentiert",
    "Erste HTML-Prototypdatei erstellen",
  ],
  [
    "1.4.20260626-codex",
    new Date("2026-06-26T00:00:00"),
    1,
    4,
    "codex",
    "Johannes Koch / Codex",
    "Entwurf",
    "Erste klickbare HTML-Fassung erstellt: Fragebogen, Empfehlung, Alternative, Kontrabeispiel, Vermerk-Erstellung, DE/EN, Darkmode, Lesbarkeit, Hilfe-Fenster, Footer und CC-Badge-Hinweise.",
    "HTML-Prototyp; UI; Interaktion; Mehrsprachigkeit; Vermerk-Erstellung",
    "Technische Basispruefung ausstehend",
    "HTML-Prototyp fachlich, visuell und barrierearm pruefen",
  ],
  [
    "1.5.20260626-codex",
    new Date("2026-06-26T00:00:00"),
    1,
    5,
    "codex",
    "Johannes Koch / Codex",
    "Entwurf",
    "UI nach AGB-Tool-Referenz beruhigt: Header/Footer naeher angeglichen, gelber Disclaimer entfernt, Schriftgroesse ergaenzt, sichtbare Frageinfos, schlankere Auswertung, Lizenzbaukasten, FAQ und Medientyp im Vermerk.",
    "HTML-Prototyp; UI; Barrierearmut; Mehrsprachigkeit; FAQ; Vermerk-Erstellung; Versionierung",
    "Technische Skriptpruefung bestanden; visuelles Browser-Audit ausstehend",
    "Layout im Browser gegen Screenshots pruefen und Inhalte fachlich feinjustieren",
  ],
  [
    "1.6.20260626-codex",
    new Date("2026-06-26T00:00:00"),
    1,
    6,
    "codex",
    "Johannes Koch / Codex",
    "Entwurf",
    "Visuelle Naeherung an das AGB-Tool deutlich verstaerkt: Header, Navigation, Hilfe-Fenster, Footer und Workflow-Struktur uebernommen; Startseite als vertikaler Drei-Schritt-Workflow aufgebaut; Lizenzkarten erklaeren nun den Charakter der Lizenzen und zeigen Badges.",
    "HTML-Prototyp; UI; Workflow; Navigation; Hilfe-Fenster; Lizenzuebersicht; Vermerk-Erstellung",
    "Technische Skriptpruefung bestanden; Browser-Sichtpruefung in dieser Umgebung nicht moeglich",
    "Datei im Browser oeffnen, visuell gegen AGB-Tool pruefen und naechste Detailkorrekturen markieren",
  ],
  [
    "1.7.20260626-codex",
    new Date("2026-06-26T00:00:00"),
    1,
    7,
    "codex",
    "Johannes Koch / Codex",
    "Entwurf",
    "Farbrollen nach AGB-Styleguide korrigiert: Teal fuer Orientierung, Grau fuer ruhige Flaechen, Citrus nur fuer Aktionen, Rose fuer Risiko. Seitentitel zu Offenheit sichtbar machen geaendert, Workflow-Abstaende verbessert, Markdown/HTML-Vorlagen eingeklappt und Lizenzuebersicht als kompakte AGB-nahe Karten mit Detailansicht umgesetzt.",
    "HTML-Prototyp; UI; Farbrollen; Workflow; Lizenzuebersicht; Vermerk-Erstellung; Versionierung",
    "Technische Skriptpruefung bestanden; Browser-Sichtpruefung durch lokale macOS-/Sandbox-Sperre blockiert",
    "Datei lokal im Browser visuell pruefen oder Codex-Browserrechte fuer Mach-Port/Browserstart klaeren",
  ],
  [
    "1.8.20260627-codex",
    new Date("2026-06-27T00:00:00"),
    1,
    8,
    "codex",
    "Johannes Koch / Codex",
    "Entwurf",
    "App innerhalb der Anwendung auf Lizenzfinder verkuerzt; Header- und Workflow-Texte geschaerft; ungenutzte Materialtyp-Frage entfernt; Fragehinweise ruhiger gestaltet; Namensnennung, kommerzielle Nutzung und gleiche Lizenz fuer Bearbeitungen zugänglicher formuliert; Exportbereich mit eigenstaendiger Workflow-HTML und iframe-Snippet ergaenzt; redaktionelle Textdateien fuer kuenftige Textarbeit angelegt.",
    "HTML-Prototyp; Texte; Fragenlogik; Export; Redaktionstexte; Versionierung",
    "Technische Skriptpruefung vorgesehen; Browser-Sichtpruefung weiterhin durch lokale macOS-/Sandbox-Sperre eingeschraenkt",
    "Exportdatei und Redaktionsworkflow praktisch testen; naechste Textkorrekturen bevorzugt ueber content/redaktionstexte.de.md sammeln",
  ],
  [
    "1.9.20260627-codex",
    new Date("2026-06-27T00:00:00"),
    1,
    9,
    "codex",
    "Johannes Koch / Codex",
    "Entwurf",
    "Kommerzielle Nutzung im Fragehinweis genauer erklaert; Exportbereich mit Vorschau, direktem Download und erklaertem Einbettungscode erweitert; Lizenzvermerk mit twillo-Attribution vereinheitlicht; Medientypen ergaenzt; eigener Medientyp mit Artikelwahl und ohne Artikel ermoeglicht; Titel im generierten Vermerk in Anfuehrungszeichen gesetzt; sichtbare Versionsnummer im Footer ergaenzt.",
    "HTML-Prototyp; Export; Vermerk-Erstellung; Metadaten; Redaktionstexte; Versionierung",
    "Technische Skriptpruefung bestanden; Browser-Sichtpruefung weiterhin lokal zu pruefen",
    "V1.9 im Browser oeffnen, Exportdownload testen und Vermerkbeispiele redaktionell pruefen",
  ],
  [
    "1.10.20260627-codex",
    new Date("2026-06-27T00:00:00"),
    1,
    10,
    "codex",
    "Johannes Koch / Codex",
    "Entwurf",
    "Medientyp-Hinweis in der Vermerkmaske entfernt; Export-Download als eingebettete HTML-Datei umgesetzt; Exportfassung als kompaktes dreistufiges Ziehharmonika-Element aufgebaut; Hinweis zu alle Rechte vorbehalten dezent in den ersten Workflowschritt verschoben.",
    "HTML-Prototyp; Export; Einbettung; UI; Versionierung",
    "Technische Skriptpruefung bestanden; Browser-Downloadpruefung lokal empfohlen",
    "Download und Accordion-Verhalten im lokalen Browser testen",
  ],
  [
    "1.11.20260627-codex",
    new Date("2026-06-27T00:00:00"),
    1,
    11,
    "codex",
    "Johannes Koch / Codex",
    "Entwurf",
    "Oberste HTML-Datei eindeutig als Lizenzfinder-App mit Versionsnummer benannt; Export-Accordion startet nun komplett eingeklappt; Lizenzempfehlung klappt nach Abschluss des Fragebogens automatisch auf; Textanleitung zur WordPress-/iframe-Einbettung als Download ergaenzt.",
    "Dateinamen; HTML-Prototyp; Export; Einbettung; UX; Versionierung",
    "Technische Skriptpruefung vorgesehen; Browser-Downloadpruefung lokal empfohlen",
    "V1.11 lokal im Browser oeffnen, Export herunterladen und WordPress-Einbettung testen",
  ],
  [
    "1.12.20260627-codex",
    new Date("2026-06-27T00:00:00"),
    1,
    12,
    "codex",
    "Johannes Koch / Codex",
    "Entwurf",
    "Interne Hinweiszeile beim Lizenzvermerk entfernt; englische TULLU+B-Begriffe durch allgemein verstaendliche Attribution-Formulierungen ersetzt; englische Formular-Platzhalter sprachlich angepasst; Exportdatei synchronisiert.",
    "Sprache; Redaktion; HTML-Prototyp; Export; Versionierung",
    "Technische Skriptpruefung vorgesehen; Browser-Sichtpruefung lokal empfohlen",
    "Release-Candidate-Audit vorbereiten und finale Dokumentation pruefen",
  ],
  [
    "1.13.20260627-codex",
    new Date("2026-06-27T00:00:00"),
    1,
    13,
    "codex",
    "Johannes Koch / Codex",
    "Archiviert",
    "Release Candidate erstellt; V1.12 archiviert; Abschlussaudit angelegt; TODO, Projektnotizen, Anforderungen, Fragenlogik, Linkmatrix, Textsystem und Entscheidungen auf Freigabestand aktualisiert.",
    "Release Candidate; Audit; Dokumentation; Versionierung; Export",
    "Technische Skriptpruefung vorgesehen; visuelle Browserpruefung und WordPress-Test offen",
    "Freigabetests durchfuehren und danach finale Version erstellen",
  ],
  [
    "1.14.20260629-codex",
    new Date("2026-06-29T00:00:00"),
    1,
    14,
    "codex",
    "Johannes Koch / Codex",
    "Archiviert",
    "Lizenz-Sync-Bug behoben; bedingtes Ueberspringen nicht relevanter Fragen umgesetzt; Korrekturen in Haupt-App, Exportdatei und eingebettete Download-Kopie uebernommen; Audit-Nachtrag und Dokumentation aktualisiert.",
    "Release Candidate; Logik; Export; Vermerk; Audit; Versionierung",
    "Technische Logik- und Syntaxpruefung bestanden; visuelle Browserpruefung und WordPress-Test offen",
    "Durch V1.15 abgeloest",
  ],
  [
    "1.15.20260819-codex",
    new Date("2026-08-19T00:00:00"),
    1,
    15,
    "codex",
    "Johannes Koch / Codex",
    "Archiviert",
    "Feedbackrunde umgesetzt; Exportfunktion entfernt; Software-Lizenzueberblick ergaenzt; twillo-Veroeffentlichungshinweis ergaenzt; leichteres Redesign; Quelle modularisiert; GitHub-Unterlagen angelegt.",
    "Feedback; Design; Software-Lizenzen; GitHub; Architektur; Versionierung",
    "Build-, Release- und Browserpruefung bestanden; fachliche Endabnahme und manuelle Tastatur-/Fokuspruefung offen",
    "Durch V1.16 abgeloest",
  ],
  [
    "1.16.20260819-codex",
    new Date("2026-08-19T00:00:00"),
    1,
    16,
    "codex",
    "Johannes Koch / Codex",
    "Archiviert",
    "Header kompakter; sichtbares twillo-Branding aus dem Header entfernt; Footer auf Verantwortungszeile reduziert; Ueber-diese-Anwendung-Panel umgesetzt; App-Lizenz auf MIT umgestellt; Dark Mode entfernt; CC0-Zero-Icon statt Public-Domain-Button eingesetzt.",
    "Design; Lizenz; Accessibility; CC0; GitHub; Versionierung",
    "Build-, Release- und Browserpruefung vorgesehen; fachliche Endabnahme, manuelle Tastatur-/Fokuspruefung und GitHub-Push offen",
    "Durch V1.17 abgeloest",
  ],
  [
    "1.17.20260819-codex",
    new Date("2026-08-19T00:00:00"),
    1,
    17,
    "codex",
    "Johannes Koch / Codex",
    "Freigabekandidat",
    "Feinabstand unter Navigation erhoeht; About- und Footer-Texte reduziert; Netzwerk-Waechter und CSP ergaenzt; sichtbare Badges lokal als SVG erzeugt; Schatten im Vermerkbereich entfernt; twillo-Hinweis ruhiger gestaltet.",
    "Design; Netzwerk; Lizenz; Barrierearmut; GitHub; Versionierung",
    "Build-, Release- und Browserpruefung vorgesehen; fachliche Endabnahme, manuelle Tastatur-/Fokuspruefung und GitHub-Push offen",
    "GitHub veroeffentlichen, Remote pruefen und fachliche Endabnahme durchfuehren",
  ],
];
body(history.getRange("A2:K30"));
history.getRange("B2:B30").setNumberFormat("yyyy-mm-dd");
history.freezePanes.freezeRows(1);
history.getRange("A1:K30").format.autofitColumns();
history.getRange("H:H").format.columnWidth = 36;
history.getRange("I:I").format.columnWidth = 28;
history.getRange("K:K").format.columnWidth = 32;
history.dataValidations.add({ range: "E2:E200", rule: { type: "list", formula1: "'Listen'!$A$2:$A$12" } });
history.dataValidations.add({ range: "G2:G200", rule: { type: "list", formula1: "'Listen'!$B$2:$B$9" } });

audits.getRange("A1:G1").values = [[
  "Audit-ID",
  "Datum",
  "Version",
  "Art",
  "Status",
  "Kurzfazit",
  "Ablageort",
]];
header(audits.getRange("A1:G1"));
audits.getRange("A2:G16").values = [
  [
    "A-001",
    new Date("2026-06-26T00:00:00"),
    "1.1.20260626-codex",
    "Projektbasis",
    "offen",
    "Erstes Struktur-Audit nach Anlage der Projektbasis.",
    "audits/AUDIT_TEMPLATE.md",
  ],
  [
    "A-002",
    new Date("2026-06-26T00:00:00"),
    "1.2.20260626-codex",
    "Inhalt",
    "offen",
    "Anforderungen fuer UI, Sprache, Links, Footer, Metadaten und Badge-Flow spaeter beim Prototyp gegenpruefen.",
    "docs/APP_ANFORDERUNGEN.md",
  ],
  [
    "A-003",
    new Date("2026-06-26T00:00:00"),
    "1.3.20260626-codex",
    "Projektbasis",
    "bestanden",
    "Ordnername und sichtbare Projektbegriffe auf App/Anwendung/Vermerk-Erstellung umgestellt.",
    "PROJECT_NOTES.md; DECISIONS.md; styleguide/STYLEGUIDE.md",
  ],
  [
    "A-004",
    new Date("2026-06-26T00:00:00"),
    "1.4.20260626-codex",
    "Release",
    "offen",
    "Erste HTML-Fassung muss visuell, funktional, mehrsprachig, barrierearm und fachlich geprueft werden.",
    "lizenzfinder-vermerk-app.html",
  ],
  [
    "A-005",
    new Date("2026-06-26T00:00:00"),
    "1.5.20260626-codex",
    "UX",
    "in Arbeit",
    "Iteration nach Screenshot-Referenz umgesetzt; technische Skriptpruefung bestanden, visuelle und fachliche Detailpruefung stehen noch aus.",
    "versions/aktuell/lizenzfinder-vermerk-app-V1_5_20260626-codex.html",
  ],
  [
    "A-006",
    new Date("2026-06-26T00:00:00"),
    "1.6.20260626-codex",
    "UX",
    "in Arbeit",
    "AGB-nahe UI-Iteration umgesetzt; technische Skriptpruefung bestanden, visuelle Browserpruefung durch lokale Browser-Einschraenkung noch offen.",
    "versions/aktuell/lizenzfinder-vermerk-app-V1_6_20260626-codex.html",
  ],
  [
    "A-007",
    new Date("2026-06-26T00:00:00"),
    "1.7.20260626-codex",
    "UX",
    "in Arbeit",
    "Farbrollen, Abstaende, ausklappbare Vorlagen und kompakte Lizenzkarten umgesetzt; technische Skriptpruefung bestanden, visuelle Browserpruefung in dieser Umgebung blockiert.",
    "versions/aktuell/lizenzfinder-vermerk-app-V1_7_20260626-codex.html",
  ],
  [
    "A-008",
    new Date("2026-06-27T00:00:00"),
    "1.8.20260627-codex",
    "Inhalt",
    "in Arbeit",
    "Text- und Exportiteration umgesetzt; Fragenlogik auf vier genutzte Entscheidungsfragen reduziert; Redaktionsdateien und Workflow-Export angelegt.",
    "lizenzfinder-vermerk-app.html; content/redaktionstexte.de.md; exports/lizenzfinder-workflow-embed.html",
  ],
  [
    "A-009",
    new Date("2026-06-27T00:00:00"),
    "1.9.20260627-codex",
    "Funktion",
    "in Arbeit",
    "V1.9 setzt Vermerklogik, Exportdownload, twillo-Attribution und sichtbare Versionsnummer um; Browser- und Downloadpruefung stehen noch aus.",
    "lizenzfinder-vermerk-app.html; exports/lizenzfinder-workflow-embed.html; versions/aktuell/lizenzfinder-vermerk-app-V1_9_20260627-codex.html",
  ],
  [
    "A-010",
    new Date("2026-06-27T00:00:00"),
    "1.10.20260627-codex",
    "Funktion",
    "in Arbeit",
    "Exportfassung als Accordion und direkter Download umgesetzt; visuelle und browserseitige Downloadpruefung lokal empfohlen.",
    "lizenzfinder-vermerk-app.html; exports/lizenzfinder-workflow-embed.html; versions/aktuell/lizenzfinder-vermerk-app-V1_10_20260627-codex.html",
  ],
  [
    "A-011",
    new Date("2026-06-27T00:00:00"),
    "1.11.20260627-codex",
    "Funktion",
    "in Arbeit",
    "Dateiname, Export-Accordion, automatisches Oeffnen der Empfehlung und Einbettungsanleitung umgesetzt; Browserpruefung lokal empfohlen.",
    "Lizenzfinder-App-V1_11_20260627-codex.html; exports/lizenzfinder-workflow-embed.html; exports/lizenzfinder-einbettung-anleitung.txt",
  ],
  [
    "A-012",
    new Date("2026-06-27T00:00:00"),
    "1.12.20260627-codex",
    "Inhalt",
    "in Arbeit",
    "Letzte Sprachpolitur umgesetzt; englische TULLU+B-Referenzen und deutsche Placeholder in der englischen Ansicht bereinigt.",
    "Lizenzfinder-App-V1_12_20260627-codex.html; exports/lizenzfinder-workflow-embed.html; content/redaktionstexte.en.md",
  ],
  [
    "A-013",
    new Date("2026-06-27T00:00:00"),
    "1.13.20260627-codex",
    "Release",
    "mit Auflagen",
    "Release Candidate angelegt; technische Pruefung vorgesehen; Browser-, Fach- und WordPress-Pruefung bleiben vor finaler Freigabe offen.",
    "audits/RELEASE_AUDIT_V1_13_20260627.md; Lizenzfinder-App-V1_13_20260627-codex.html",
  ],
  [
    "A-014",
    new Date("2026-06-29T00:00:00"),
    "1.14.20260629-codex",
    "Release",
    "mit Auflagen",
    "Freigaberelevante Logik-Korrekturen umgesetzt; Logik- und Syntaxpruefung fuer Haupt-App, Exportdatei und eingebettete Download-Kopie bestanden.",
    "audits/RELEASE_AUDIT_V1_14_20260629.md; Lizenzfinder-App-V1_14_20260629-codex.html",
  ],
  [
    "A-015",
    new Date("2026-08-19T00:00:00"),
    "1.15.20260819-codex",
    "Release",
    "mit Auflagen",
    "Feedbackrunde umgesetzt; Build-, Release- und Browserpruefung bestanden; fachliche Endabnahme, manuelle Tastatur-/Fokuspruefung und GitHub-Push bleiben offen.",
    "audits/RELEASE_AUDIT_V1_15_20260819.md; Lizenzfinder-App-V1_15_20260819-codex.html",
  ],
  [
    "A-016",
    new Date("2026-08-19T00:00:00"),
    "1.16.20260819-codex",
    "Release",
    "mit Auflagen",
    "Design-, Branding- und Lizenzkorrektur umgesetzt; Build-, Release- und Browserpruefung vorgesehen; GitHub-Push bleibt bis zur Freigabe offen.",
    "audits/RELEASE_AUDIT_V1_16_20260819.md; Lizenzfinder-App-V1_16_20260819-codex.html",
  ],
  [
    "A-017",
    new Date("2026-08-19T00:00:00"),
    "1.17.20260819-codex",
    "Release",
    "mit Auflagen",
    "Feinschliff und Netzwerk-Waechter umgesetzt; Build-, Release- und Browserpruefung vorgesehen; GitHub-Push bleibt bis zur Freigabe offen.",
    "audits/RELEASE_AUDIT_V1_17_20260819.md; Lizenzfinder-App-V1_17_20260819-codex.html",
  ],
];
body(audits.getRange("A2:G40"));
audits.getRange("B2:B40").setNumberFormat("yyyy-mm-dd");
audits.freezePanes.freezeRows(1);
audits.dataValidations.add({ range: "D2:D200", rule: { type: "list", values: ["Projektbasis", "UX", "Inhalt", "Funktion", "Barrierearmut", "Release"] } });
audits.dataValidations.add({ range: "E2:E200", rule: { type: "list", values: ["offen", "in Arbeit", "bestanden", "mit Auflagen", "nicht bestanden"] } });
audits.getRange("F:F").format.columnWidth = 44;
audits.getRange("G:G").format.columnWidth = 34;

lists.getRange("A1:B1").values = [["Toolcodes", "Versionsstatus"]];
header(lists.getRange("A1:B1"));
lists.getRange("A2:A12").values = [
  ["human"],
  ["codex"],
  ["chatgpt"],
  ["claude"],
  ["gemini"],
  ["copilot"],
  ["mistral"],
  ["perplexity"],
  ["local"],
  ["unknown-ai"],
  ["mixed"],
];
lists.getRange("B2:B9").values = [
  ["Konzept"],
  ["Entwurf"],
  ["In Arbeit"],
  ["Audit"],
  ["Freigabekandidat"],
  ["Veroeffentlicht"],
  ["Archiviert"],
  ["Verworfen"],
];
body(lists.getRange("A2:B12"));
lists.getRange("A:B").format.columnWidth = 24;

summary.getRange("A:A").format.columnWidth = 22;
summary.getRange("B:B").format.columnWidth = 36;
summary.getRange("C:C").format.columnWidth = 4;
summary.getRange("D:D").format.columnWidth = 22;
summary.getRange("E:F").format.columnWidth = 13;
summary.getRange("G:G").format.columnWidth = 34;
summary.getRange("H:H").format.columnWidth = 3;

history.getRange("A:A").format.columnWidth = 22;
history.getRange("B:B").format.columnWidth = 14;
history.getRange("C:D").format.columnWidth = 10;
history.getRange("E:E").format.columnWidth = 14;
history.getRange("F:F").format.columnWidth = 22;
history.getRange("G:G").format.columnWidth = 18;
history.getRange("H:H").format.columnWidth = 50;
history.getRange("I:I").format.columnWidth = 36;
history.getRange("J:J").format.columnWidth = 26;
history.getRange("K:K").format.columnWidth = 40;

audits.getRange("A:A").format.columnWidth = 14;
audits.getRange("B:B").format.columnWidth = 14;
audits.getRange("C:C").format.columnWidth = 22;
audits.getRange("D:E").format.columnWidth = 18;
audits.getRange("F:F").format.columnWidth = 52;
audits.getRange("G:G").format.columnWidth = 34;

lists.getRange("A:B").format.columnWidth = 24;

for (const sheet of [summary, history, audits, lists]) {
  const used = sheet.getUsedRange();
  used.format = {
    wrapText: true,
    verticalAlignment: "top",
  };
  used.format.autofitRows();
}

const overviewPreview = await workbook.render({
  sheetName: "Uebersicht",
  autoCrop: "all",
  scale: 1,
  format: "png",
});
await fs.writeFile(path.join(previewDir, "versionshistorie-uebersicht.png"), new Uint8Array(await overviewPreview.arrayBuffer()));

const historyPreview = await workbook.render({
  sheetName: "Versionshistorie",
  autoCrop: "all",
  scale: 1,
  format: "png",
});
await fs.writeFile(path.join(previewDir, "versionshistorie-tabelle.png"), new Uint8Array(await historyPreview.arrayBuffer()));

const canonical = path.join(versionDir, "lizenzfinder_versionshistorie.xlsx");
const deliverable = path.join(outputDir, "lizenzfinder_versionshistorie.xlsx");
const xlsx = await SpreadsheetFile.exportXlsx(workbook);
await xlsx.save(canonical);
await xlsx.save(deliverable);

const inspect = await workbook.inspect({
  kind: "sheet,table,match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
  options: { useRegex: true, maxResults: 50 },
  maxChars: 6000,
});
console.log(inspect.ndjson);
console.log(JSON.stringify({ canonical, deliverable }, null, 2));
