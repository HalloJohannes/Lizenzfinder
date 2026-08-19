import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const requireFromProject = createRequire(path.join(root, "package.json"));

function loadPlaywright() {
  try {
    return requireFromProject("playwright");
  } catch (projectError) {
    const fallbackPackageJsonPaths = [
      "/Users/johanneskoch/Documents/Codex/Escape-Studio/package.json",
      "/Users/johanneskoch/Documents/Codex/SCHAU-HIN-Slides/package.json",
      "/Users/johanneskoch/Documents/Codex/BITTE STIL Baukasten/package.json",
      "/Users/johanneskoch/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/package.json"
    ];
    for (const packageJsonPath of fallbackPackageJsonPaths) {
      try {
        return createRequire(packageJsonPath)("playwright");
      } catch (fallbackError) {}
    }
    throw new Error("Playwright wurde nicht gefunden. Installiere es fuer lokale Browserchecks mit `npm install --save-dev playwright` oder fuehre den Check in der vorbereiteten Codex-Umgebung aus.");
  }
}

const { chromium } = loadPlaywright();

async function launchBrowser() {
  try {
    return await chromium.launch({ headless: true });
  } catch (error) {
    return chromium.launch({ headless: true, channel: "chrome" });
  }
}

const releasePath = path.join(root, "Lizenzfinder-App-V1_21_20260819-codex.html");
const file = `file://${releasePath}`;
const outDir = path.join(root, "work", "previews", "v1_21");
fs.mkdirSync(outDir, { recursive: true });

const browser = await launchBrowser();
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, locale: "de-DE" });
const errors = [];
page.on("pageerror", error => errors.push(error.message));
page.on("console", message => { if (message.type() === "error") errors.push(message.text()); });

await page.goto(file);
await page.evaluate(() => {
  localStorage.setItem("lf-lang", "de");
  localStorage.setItem("lf-font-step", "2");
  localStorage.setItem("lf-readable", "on");
  localStorage.removeItem("lf-answers");
});
await page.reload();
await page.screenshot({ path: path.join(outDir, "desktop-start.png"), fullPage: true });

await page.locator('input[name="attribution"][value="yes"]').check();
await page.getByRole("button", { name: /Weiter|Next/ }).click();
await page.locator('input[name="adapt"][value="yes"]').check();
await page.getByRole("button", { name: /Weiter|Next/ }).click();
await page.locator('input[name="commercial"][value="yes"]').check();
await page.getByRole("button", { name: /Weiter|Next/ }).click();
await page.locator('input[name="sharealike"][value="yes"]').check();
await page.getByRole("button", { name: /Weiter|Next/ }).click();

const best = await page.locator("#bestName").textContent();
const publishVisible = await page.locator("#publishNote").isVisible();
const selectedLicense = await page.locator("#licenseSelect").inputValue();
await page.locator("#workTitle").fill("Einführung in OER");
await page.locator("#author").fill("Johannes Koch");
await page.locator("#sourceUrl").fill("javascript:alert(1)");
const invalidSourceVisible = await page.locator("#sourceInvalid").evaluate(el => !el.classList.contains("hidden"));
const invalidAria = await page.locator("#sourceUrl").getAttribute("aria-invalid");
const outputsAfterInvalidSource = await page.evaluate(() => ["outShort", "outReuse", "outMd", "outHtml"].map(id => document.getElementById(id).value));
await page.locator("#sourceUrl").fill("https://example.org/kurs");
const validSourceVisible = await page.locator("#sourceInvalid").evaluate(el => !el.classList.contains("hidden"));
const validAria = await page.locator("#sourceUrl").getAttribute("aria-invalid");
const outputsAfterValidSource = await page.evaluate(() => ["outShort", "outReuse", "outMd", "outHtml"].map(id => document.getElementById(id).value));
await page.evaluate(() => Object.defineProperty(navigator, "clipboard", { value: undefined, configurable: true }));
await page.locator(".output-card").first().getByRole("button").click();
const copyToast = await page.locator("#toast").textContent();
await page.screenshot({ path: path.join(outDir, "desktop-result.png"), fullPage: true });

await page.locator("#tab-overview").click();
const cc0Badge = await page.locator(".overview-card").first().locator("img").getAttribute("src");
await page.screenshot({ path: path.join(outDir, "desktop-overview.png"), fullPage: true });

await page.setViewportSize({ width: 820, height: 1100 });
await page.screenshot({ path: path.join(outDir, "tablet-overview.png"), fullPage: true });

await page.locator("#lang-en").click();
const enHelpVisible = await page.locator("#tab-help").filter({ hasText: "Help & sources" }).isVisible();
await page.locator("#readBtn").click();
const modes = await page.evaluate(() => ({
  readable: document.documentElement.dataset.readable,
  lang: document.documentElement.lang,
  hasThemeButton: Boolean(document.getElementById("themeBtn")),
  networkPolicy: document.documentElement.dataset.networkPolicy,
  externalResources: document.documentElement.dataset.networkExternalResources,
  localStorageKeys: Object.keys(localStorage).filter(key => key.startsWith("lf-")),
  fetchAvailable: typeof fetch === "function",
  cookieReadable: typeof document.cookie === "string",
  sendBeaconAvailable: typeof navigator.sendBeacon === "function"
}));
const footerText = await page.locator("footer.site").textContent();
await page.locator("#sidehelpHandle").click();
const aboutVisible = await page.locator("#sidehelpPanel").isVisible();
const aboutLicense = await page.locator("#sidehelpPanel").textContent();
await page.screenshot({ path: path.join(outDir, "tablet-readable-en-about.png"), fullPage: true });

await page.setViewportSize({ width: 820, height: 500 });
await page.locator(".license-text").evaluate(el => el.setAttribute("open", ""));
const compactPanel = await page.evaluate(() => {
  const panel = document.getElementById("sidehelpPanel");
  const title = document.getElementById("aboutTitle");
  const close = document.getElementById("sidehelpClose");
  panel.scrollTop = 0;
  const titleAtTop = title.getBoundingClientRect().top >= 0;
  const canScroll = panel.scrollHeight > panel.clientHeight;
  panel.scrollTop = panel.scrollHeight;
  const text = panel.textContent || "";
  const endReadable = text.includes("THE SOFTWARE") && text.includes("SOFTWARE.");
  const closeVisible = close.getBoundingClientRect().bottom <= window.innerHeight;
  return { canScroll, titleAtTop, endReadable, closeVisible, panelHeight: panel.clientHeight, scrollHeight: panel.scrollHeight };
});
await page.keyboard.press("Escape");
const escapeState = await page.evaluate(() => ({
  open: document.getElementById("sidehelp").classList.contains("open"),
  focused: document.activeElement?.id
}));
await page.screenshot({ path: path.join(outDir, "compact-about-after-escape.png"), fullPage: true });

const sandboxPage = await browser.newPage({ viewport: { width: 900, height: 900 }, locale: "de-DE" });
const builtHtml = fs.readFileSync(releasePath, "utf8");
const srcdoc = builtHtml.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
await sandboxPage.setContent(`<iframe sandbox="allow-scripts" srcdoc="${srcdoc}" style="width:880px;height:880px;border:0"></iframe>`);
const frame = await sandboxPage.frameLocator("iframe");
await frame.locator("#questionHost").waitFor({ state: "visible", timeout: 8000 });
const sandboxTitle = await frame.locator("#appTitle").textContent();
await sandboxPage.screenshot({ path: path.join(outDir, "sandbox-iframe.png"), fullPage: true });

const futurePage = await browser.newPage({ viewport: { width: 900, height: 700 }, locale: "de-DE" });
await futurePage.addInitScript(() => {
  const RealDate = Date;
  const fixed = new RealDate("2027-01-15T12:00:00Z");
  class MockDate extends RealDate {
    constructor(...args) {
      super(...(args.length ? args : [fixed.getTime()]));
    }
    static now() { return fixed.getTime(); }
    static parse(value) { return RealDate.parse(value); }
    static UTC(...args) { return RealDate.UTC(...args); }
  }
  Object.defineProperty(window, "Date", { value: MockDate, configurable: true });
});
await futurePage.goto(file);
const futureYear = await futurePage.locator("#year").inputValue();
const futureAbout = await futurePage.locator("#sidehelpHandle").click().then(() => futurePage.locator("#sidehelpPanel").textContent());
await futurePage.screenshot({ path: path.join(outDir, "future-year-2027.png"), fullPage: true });

await browser.close();

if (best !== "CC BY-SA 4.0") throw new Error(`Unerwartete Empfehlung: ${best}`);
if (!publishVisible) throw new Error("twillo-Veroeffentlichungshinweis ist nicht sichtbar.");
if (selectedLicense !== "bysa") throw new Error(`Lizenzfeld folgt nicht der Empfehlung: ${selectedLicense}`);
if (!invalidSourceVisible) throw new Error("Hinweis fuer ungueltige URL ist nicht sichtbar.");
if (invalidAria !== "true") throw new Error(`aria-invalid bei ungueltiger Quelle fehlt: ${invalidAria}`);
if (outputsAfterInvalidSource.some(value => value.includes("javascript:"))) throw new Error("Ungueltige javascript:-Quelle erscheint in Ausgabefeldern.");
if (validSourceVisible || outputsAfterValidSource.some(value => !value.includes("https://example.org/kurs"))) throw new Error(`Gueltige https-Quelle wird nicht sauber uebernommen: ${JSON.stringify({ validSourceVisible, outputsAfterValidSource })}`);
if (validAria !== "false") throw new Error(`aria-invalid bei gueltiger Quelle wurde nicht zurueckgesetzt: ${validAria}`);
if (!copyToast?.includes("Text markiert")) throw new Error(`Manueller Copy-Toast fehlt: ${copyToast}`);
if (!cc0Badge?.startsWith("data:image/svg+xml") || !decodeURIComponent(cc0Badge).includes("CC0")) throw new Error(`Falsches CC0-Zero-Icon: ${cc0Badge}`);
if (!enHelpVisible) throw new Error("Englische Navigation wurde nicht sichtbar umgestellt.");
if (modes.hasThemeButton || modes.readable !== "on" || modes.lang !== "en") throw new Error(`Moduswechsel fehlgeschlagen: ${JSON.stringify(modes)}`);
if (modes.networkPolicy !== "network-selfcheck-v1") throw new Error(`Netzwerk-Selbsttest fehlt: ${JSON.stringify(modes)}`);
if (!["0", undefined].includes(modes.externalResources)) throw new Error(`Automatische externe Ressourcen geladen: ${JSON.stringify(modes)}`);
if (modes.localStorageKeys.length) throw new Error(`Persistente lf-Keys gefunden: ${JSON.stringify(modes.localStorageKeys)}`);
if (!modes.fetchAvailable || !modes.cookieReadable || !modes.sendBeaconAvailable) throw new Error(`Browser-APIs wurden unerwartet deaktiviert: ${JSON.stringify(modes)}`);
if (!aboutVisible || !aboutLicense?.includes("MIT License")) throw new Error("Über-diese-Anwendung-Panel oder MIT-Lizenzhinweis fehlt.");
if (!footerText?.includes("Claude/Anthropic") || !footerText?.includes("Codex/OpenAI")) throw new Error("Footer nennt Claude/Anthropic und Codex/OpenAI nicht in der englischen Ansicht.");
if (!compactPanel.canScroll || !compactPanel.titleAtTop || !compactPanel.endReadable || !compactPanel.closeVisible) throw new Error(`Kompaktes About-Panel nicht sauber scrollbar: ${JSON.stringify(compactPanel)}`);
if (escapeState.open || escapeState.focused !== "sidehelpHandle") throw new Error(`Escape schliesst Panel nicht mit Fokusrueckgabe: ${JSON.stringify(escapeState)}`);
if (!sandboxTitle?.includes("Passende Lizenz")) throw new Error(`Sandbox-iframe rendert nicht korrekt: ${sandboxTitle}`);
if (futureYear !== "2027" || !futureAbout?.includes("2026")) throw new Error(`Dynamisches Jahr oder feste Credit-Jahreszahl falsch: ${JSON.stringify({ futureYear, futureAbout })}`);
if (errors.length) throw new Error(`Konsolenfehler: ${errors.join(" | ")}`);

console.log(JSON.stringify({ ok: true, best, publishVisible, selectedLicense, copyToast, cc0Badge, enHelpVisible, modes, aboutVisible, compactPanel, escapeState, sandboxTitle, futureYear, outDir }, null, 2));
