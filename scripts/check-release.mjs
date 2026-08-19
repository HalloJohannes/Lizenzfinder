import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const version = "1.21.20260819-codex";
const releaseName = "Lizenzfinder-App-V1_21_20260819-codex.html";
const release = path.join(root, releaseName);
const current = path.join(root, "versions", "aktuell", releaseName);
const index = path.join(root, "index.html");
const distIndex = path.join(root, "dist", "index.html");

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function scripts(html) {
  return [...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)].map(match => match[1]);
}

const html = fs.readFileSync(release, "utf8");
const currentHtml = fs.readFileSync(current, "utf8");
const indexHtml = fs.readFileSync(index, "utf8");
const distIndexHtml = fs.readFileSync(distIndex, "utf8");
assert(html === currentHtml, "Hauptdatei und versions/aktuell sind nicht identisch.");
assert(html === indexHtml, "GitHub-Pages-index.html ist nicht identisch mit der aktuellen App.");
assert(html === distIndexHtml, "dist/index.html ist nicht identisch mit der aktuellen App.");
assert(html.includes(version), "Versionsnummer fehlt in der Hauptdatei.");
assert((html.match(/©/g) || []).length === 0, "Sichtbares Copyright-Zeichen gefunden.");
assert((html.match(/Copyright/g) || []).length === 1, "Copyright-Nennung muss genau einmal im MIT-Block vorkommen.");
assert(html.includes("Copyright (c) 2026 Johannes Koch"), "MIT-Copyright-Zeile fehlt.");
assert(!html.includes("WORKFLOW_EXPORT_B64"), "Die alte Exportmechanik ist noch enthalten.");
assert(!html.includes("downloadWorkflowExport"), "Die alte Export-Downloadfunktion ist noch enthalten.");
assert(!html.includes("themeBtn"), "Dark-Mode-Schalter ist noch enthalten.");
assert(!html.includes("toggleTheme"), "Dark-Mode-Logik ist noch enthalten.");
assert(!html.includes("sidehelp-handle"), "Fester About-Button ist noch enthalten.");
assert(html.includes("footer-about-button"), "About-Button in der Fusszeile fehlt.");
assert(html.includes("MIT License"), "MIT-Lizenzhinweis fehlt.");
assert(html.includes("https://opensource.org/license/mit"), "MIT-Lizenzlink fehlt.");
assert(html.includes('data-i18n-html="aboutLicenseP"'), "HTML-faehiger About-Lizenztext fehlt.");
assert(html.includes("Entstanden im Vibe-Coding"), "Entstehungsabschnitt fehlt.");
assert(html.includes("Created through vibe coding"), "Englischer Entstehungsabschnitt fehlt.");
assert(html.includes('name="licensefinder:content-license" content="CC0-1.0"'), "Content-Lizenz-Metatag fehlt.");
assert(html.includes('name="dcterms.rights"'), "Doppellizenz-Hinweis in dcterms.rights fehlt.");
assert(html.includes("Content-Security-Policy"), "Content-Security-Policy fehlt.");
assert(html.includes("connect-src 'none'"), "Netzwerk-Policy fuer automatische Verbindungen fehlt.");
assert(html.includes("LIZENZFINDER_NETWORK_POLICY"), "Netzwerk-Selbsttest fehlt.");
assert(html.includes('storage: "none"'), "Storage-Policy fehlt.");
assert(!/<img[^>]+src=\"https?:/i.test(html), "Automatisch ladendes externes Bild gefunden.");
assert(html.includes("badgeImage(key, lic)"), "Lokale Badge-Erzeugung fehlt.");
assert(html.includes("cleanupLegacyStorage"), "Aufraeumen alter localStorage-Schluessel fehlt.");
assert((html.match(/localStorage\.removeItem/g) || []).length === 1, "Mehr als ein localStorage.removeItem gefunden.");
assert(!/localStorage\.(getItem|setItem)/.test(html), "Persistente localStorage-Nutzung gefunden.");
assert(!html.includes("XMLHttpRequest.prototype"), "XHR-Prototyp wird noch gepatcht.");
assert(!html.includes("Navigator.prototype.sendBeacon"), "sendBeacon-Prototyp wird noch gepatcht.");
assert(!html.includes("Document.prototype.cookie"), "Cookie-Prototyp wird noch gepatcht.");
assert(html.includes("function safeUrl"), "URL-Sicherheitshelfer fehlt.");
assert(html.includes("sourceInvalid"), "URL-Validierungshinweis fehlt.");
assert(html.includes('role="status" aria-live="polite"'), "ARIA-Live-Hinweis fuer Quellenwarnung fehlt.");
assert(html.includes("copyManual"), "Manueller Kopierhinweis fehlt.");
assert(html.includes("const currentYear = String(new Date().getFullYear())"), "Dynamische Jahreskonstante fehlt.");
assert(!html.includes('id="year" oninput="renderNotice()" value="2026"'), "Jahr-Feld hat noch festes value-Attribut.");
assert(html.includes('footCreditB: "mithilfe von KI (Claude/Anthropic, Codex/OpenAI)'), "Footer benennt Claude/Anthropic und Codex/OpenAI nicht.");
assert(html.includes("document.addEventListener(\"keydown\""), "Escape-Handler fehlt.");
scripts(html).forEach(script => new Function(script));

const sourceData = fs.readFileSync(path.join(root, "src", "data.js"), "utf8");
const sourceApp = fs.readFileSync(path.join(root, "src", "app.js"), "utf8");
new Function(sourceData);
new Function(sourceApp);

const context = {
  localStorage: { removed: [], removeItem(key) { this.removed.push(key); } },
  navigator: { language: "de-DE" },
  location: { href: "https://example.test/lizenzfinder.html", origin: "https://example.test" },
  performance: { getEntriesByType() { return []; } },
  document: {
    documentElement: { dataset: {}, style: { setProperty() {} }, lang: "de", setAttribute(name, value) { this.dataset[name.replace(/^data-/, "").replace(/-([a-z])/g, (_, c) => c.toUpperCase())] = value; } },
    addEventListener() {},
    getElementById() { return { setAttribute() {}, classList: { contains() { return true; }, add() {}, remove() {}, toggle() {} }, value: "by", innerHTML: "", textContent: "", src: "", href: "", add() {}, focus() {}, select() {}, scrollIntoView() {} }; },
    querySelectorAll() { return []; },
    querySelector() { return null; }
  },
  window: { scrollTo() {} },
  Option: function Option(text, value) { return { text, value }; },
  setTimeout() {}
};
vm.runInNewContext(`${sourceData}\n${sourceApp}
this.__simulate = function(values) {
  answers = {};
  qIndex = 0;
  const pathIds = [];
  for (const value of values) {
    const question = questions[qIndex];
    pathIds.push(question.id);
    answers[question.id] = value;
    const next = nextRelevantIndex(qIndex);
    if (next < 0) break;
    qIndex = next;
  }
  return { path: pathIds.join(">"), best: decide().best };
};`, context);

const cases = [
  ["all yes", context.__simulate(["yes", "yes", "yes", "yes"]), "attribution>adapt>commercial>sharealike", "bysa"],
  ["no attribution", context.__simulate(["no"]), "attribution", "cc0"],
  ["no adapt commercial", context.__simulate(["yes", "no", "yes"]), "attribution>adapt>commercial", "bynd"],
  ["no adapt non-commercial", context.__simulate(["yes", "no", "no"]), "attribution>adapt>commercial", "byncnd"]
];

for (const [name, actual, expectedPath, expectedBest] of cases) {
  assert(actual.path === expectedPath, `${name}: unerwarteter Pfad ${actual.path}`);
  assert(actual.best === expectedBest, `${name}: unerwartete Lizenz ${actual.best}`);
}
assert(context.localStorage.removed.length === 4, "Alte localStorage-Schluessel wurden nicht einmalig entfernt.");

console.log(JSON.stringify({ ok: true, checks: cases.length + 36, version }, null, 2));
