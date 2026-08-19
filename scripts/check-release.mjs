import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const version = "1.17.20260819-codex";
const releaseName = "Lizenzfinder-App-V1_17_20260819-codex.html";
const release = path.join(root, releaseName);
const current = path.join(root, "versions", "aktuell", releaseName);

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function scripts(html) {
  return [...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)].map(match => match[1]);
}

const html = fs.readFileSync(release, "utf8");
const currentHtml = fs.readFileSync(current, "utf8");
assert(html === currentHtml, "Hauptdatei und versions/aktuell sind nicht identisch.");
assert(html.includes(version), "Versionsnummer fehlt in der Hauptdatei.");
assert(!html.includes("WORKFLOW_EXPORT_B64"), "Die alte Exportmechanik ist noch enthalten.");
assert(!html.includes("downloadWorkflowExport"), "Die alte Export-Downloadfunktion ist noch enthalten.");
assert(!html.includes("themeBtn"), "Dark-Mode-Schalter ist noch enthalten.");
assert(!html.includes("toggleTheme"), "Dark-Mode-Logik ist noch enthalten.");
assert(html.includes("MIT License"), "MIT-Lizenzhinweis fehlt.");
assert(html.includes("https://opensource.org/license/mit"), "MIT-Lizenzlink fehlt.");
assert(html.includes("Content-Security-Policy"), "Content-Security-Policy fehlt.");
assert(html.includes("connect-src 'none'"), "Netzwerk-Policy fuer automatische Verbindungen fehlt.");
assert(html.includes("LIZENZFINDER_NETWORK_POLICY"), "Netzwerk-Waechter fehlt.");
assert(!/<img[^>]+src=\"https?:/i.test(html), "Automatisch ladendes externes Bild gefunden.");
assert(html.includes("badgeImage(key, lic)"), "Lokale Badge-Erzeugung fehlt.");
scripts(html).forEach(script => new Function(script));

const sourceData = fs.readFileSync(path.join(root, "src", "data.js"), "utf8");
const sourceApp = fs.readFileSync(path.join(root, "src", "app.js"), "utf8");
new Function(sourceData);
new Function(sourceApp);

const context = {
  localStorage: { getItem() { return null; }, setItem() {}, removeItem() {} },
  navigator: { language: "de-DE" },
  document: {
    documentElement: { dataset: {}, style: { setProperty() {} }, lang: "de", setAttribute(name, value) { this.dataset[name.replace(/^data-/, "").replace(/-([a-z])/g, (_, c) => c.toUpperCase())] = value; } },
    getElementById() { return { setAttribute() {}, classList: { contains() { return true; }, add() {}, remove() {}, toggle() {} }, value: "by", innerHTML: "", textContent: "", src: "", href: "", add() {}, scrollIntoView() {} }; },
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

console.log(JSON.stringify({ ok: true, checks: cases.length + 13, version }, null, 2));
