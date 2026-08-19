import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const version = "1.17.20260819-codex";
const fileName = "Lizenzfinder-App-V1_17_20260819-codex.html";

const template = fs.readFileSync(path.join(root, "src", "index.html"), "utf8");
const css = fs.readFileSync(path.join(root, "src", "styles.css"), "utf8");
const data = fs.readFileSync(path.join(root, "src", "data.js"), "utf8");
const app = fs.readFileSync(path.join(root, "src", "app.js"), "utf8");

const html = template
  .replace('<link rel="stylesheet" href="./styles.css">', `<style>\n${css.trim()}\n  </style>`)
  .replace('<script src="./data.js"></script>\n  <script src="./app.js"></script>', `<script>\n${data.trim()}\n\n${app.trim()}\n  </script>`);

if (!html.includes(version)) {
  throw new Error(`Version ${version} fehlt in der gebauten Datei.`);
}

const topLevel = path.join(root, fileName);
const current = path.join(root, "versions", "aktuell", fileName);

for (const old of fs.readdirSync(root).filter(name => /^Lizenzfinder-App-V1_.*\.html$/.test(name) && name !== fileName)) {
  const source = path.join(root, old);
  const target = path.join(root, "versions", "archiv", old);
  if (!fs.existsSync(target)) fs.copyFileSync(source, target);
  fs.rmSync(source);
}

for (const old of fs.readdirSync(path.join(root, "versions", "aktuell")).filter(name => /^Lizenzfinder-App-V1_.*\.html$/.test(name) && name !== fileName)) {
  const source = path.join(root, "versions", "aktuell", old);
  const target = path.join(root, "versions", "archiv", old);
  if (!fs.existsSync(target)) fs.copyFileSync(source, target);
  fs.rmSync(source);
}

fs.mkdirSync(path.dirname(current), { recursive: true });
fs.writeFileSync(topLevel, html);
fs.writeFileSync(current, html);

console.log(JSON.stringify({ version, topLevel, current }, null, 2));
