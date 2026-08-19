import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const requireFromEscapeStudio = createRequire("/Users/johanneskoch/Documents/Codex/Escape-Studio/package.json");
const { chromium } = requireFromEscapeStudio("playwright");

const file = `file://${path.join(root, "Lizenzfinder-App-V1_17_20260819-codex.html")}`;
const outDir = path.join(root, "work", "previews", "v1_17");
fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, locale: "de-DE" });

await page.goto(file);
await page.evaluate(() => {
  localStorage.setItem("lf-lang", "de");
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
  externalResources: document.documentElement.dataset.networkExternalResources
}));
await page.locator("#sidehelpHandle").click();
const aboutVisible = await page.locator("#sidehelpPanel").isVisible();
const aboutLicense = await page.locator("#sidehelpPanel").textContent();
await page.screenshot({ path: path.join(outDir, "tablet-readable-en-about.png"), fullPage: true });

await browser.close();

if (best !== "CC BY-SA 4.0") throw new Error(`Unerwartete Empfehlung: ${best}`);
if (!publishVisible) throw new Error("twillo-Veroeffentlichungshinweis ist nicht sichtbar.");
if (selectedLicense !== "bysa") throw new Error(`Lizenzfeld folgt nicht der Empfehlung: ${selectedLicense}`);
if (!copyToast?.includes("Kopiert")) throw new Error(`Copy-Toast fehlt: ${copyToast}`);
if (!cc0Badge?.startsWith("data:image/svg+xml") || !decodeURIComponent(cc0Badge).includes("CC0")) throw new Error(`Falsches CC0-Zero-Icon: ${cc0Badge}`);
if (!enHelpVisible) throw new Error("Englische Navigation wurde nicht sichtbar umgestellt.");
if (modes.hasThemeButton || modes.readable !== "on" || modes.lang !== "en") throw new Error(`Moduswechsel fehlgeschlagen: ${JSON.stringify(modes)}`);
if (modes.networkPolicy !== "network-guard-v1") throw new Error(`Netzwerk-Waechter fehlt: ${JSON.stringify(modes)}`);
if (!["0", undefined].includes(modes.externalResources)) throw new Error(`Automatische externe Ressourcen geladen: ${JSON.stringify(modes)}`);
if (!aboutVisible || !aboutLicense?.includes("MIT License")) throw new Error("Über-diese-Anwendung-Panel oder MIT-Lizenzhinweis fehlt.");

console.log(JSON.stringify({ ok: true, best, publishVisible, selectedLicense, copyToast, cc0Badge, enHelpVisible, modes, aboutVisible, outDir }, null, 2));
