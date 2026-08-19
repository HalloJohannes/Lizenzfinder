const NETWORK_POLICY = Object.freeze({
      id: "network-guard-v1",
      mode: "no-automatic-connections",
      externalLinks: "user-initiated",
      cookies: false,
      analytics: false,
      telemetry: false
    });

    function installNetworkGuard() {
      if (typeof window === "undefined" || typeof document === "undefined") return;
      let blocks = 0;
      const mark = () => {
        document.documentElement.setAttribute("data-network-policy", NETWORK_POLICY.id);
        document.documentElement.setAttribute("data-network-blocks", String(blocks));
      };
      const block = (kind, target = "") => {
        blocks += 1;
        mark();
        return Promise.reject(new TypeError(`Network guard blocked ${kind}: ${target}`));
      };
      mark();
      Object.defineProperty(window, "LIZENZFINDER_NETWORK_POLICY", { value: NETWORK_POLICY, writable: false, configurable: false, enumerable: true });
      try { Object.defineProperty(window, "fetch", { value: (input) => block("fetch", String(input || "")), writable: false, configurable: false }); } catch (error) {}
      try { XMLHttpRequest.prototype.open = function guardedOpen(method, url) { block("xhr", String(url || "")); throw new TypeError("Network guard active"); }; } catch (error) {}
      ["WebSocket", "EventSource"].forEach(name => {
        try {
          Object.defineProperty(window, name, { value: function guarded(url) { block(name.toLowerCase(), String(url || "")); throw new TypeError("Network guard active"); }, writable: false, configurable: false });
        } catch (error) {}
      });
      try { Object.defineProperty(Navigator.prototype, "sendBeacon", { value: () => false, writable: false, configurable: false }); } catch (error) {}
      try { Object.defineProperty(Document.prototype, "cookie", { get: () => "", set: () => "", configurable: false }); } catch (error) {}
      const onLoad = window.addEventListener || (() => {});
      onLoad.call(window, "load", () => {
        try {
          const external = performance.getEntriesByType("resource").filter(entry => {
            const value = String(entry.name || "");
            if (/^(?:data:|blob:)/i.test(value)) return false;
            return new URL(value, location.href).origin !== location.origin;
          });
          document.documentElement.setAttribute("data-network-external-resources", String(external.length));
        } catch (error) {
          document.documentElement.setAttribute("data-network-external-resources", "unavailable");
        }
      }, { once: true });
    }

    installNetworkGuard();

const storedLang = localStorage.getItem("lf-lang");
let lang = storedLang || ((navigator.language || "de").toLowerCase().startsWith("en") ? "en" : "de");
    let fontStep = Number(localStorage.getItem("lf-font-step") || 0);
    let answers = JSON.parse(localStorage.getItem("lf-answers") || "{}");
    let qIndex = 0;
    let currentLicense = "by";
    let manualLicense = false;


    function t(key) { return strings[lang][key] || strings.de[key] || key; }
    function esc(value) {
      return String(value ?? "").replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char]));
    }
    function svgData(svg) {
      return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
    }
    function badgeImage(key, lic) {
      if (key === "cc0") {
        return svgData(`<svg xmlns="http://www.w3.org/2000/svg" width="88" height="31" viewBox="0 0 88 31"><rect width="88" height="31" rx="2" fill="#fff"/><rect x=".75" y=".75" width="86.5" height="29.5" rx="2" fill="none" stroke="#123c4a" stroke-width="1.5"/><circle cx="20" cy="15.5" r="10.5" fill="#000"/><text x="20" y="20" text-anchor="middle" font-family="Arial,sans-serif" font-size="14" font-weight="700" fill="#fff">0</text><text x="40" y="19" font-family="Arial,sans-serif" font-size="12" font-weight="700" fill="#123c4a">CC0</text></svg>`);
      }
      const modules = lic.modules.join(" ");
      return svgData(`<svg xmlns="http://www.w3.org/2000/svg" width="88" height="31" viewBox="0 0 88 31"><rect width="88" height="31" rx="2" fill="#fff"/><rect x=".75" y=".75" width="86.5" height="29.5" rx="2" fill="none" stroke="#123c4a" stroke-width="1.5"/><rect x="4" y="4" width="80" height="23" rx="2" fill="#000"/><circle cx="17" cy="15.5" r="8" fill="#fff"/><text x="17" y="19" text-anchor="middle" font-family="Arial,sans-serif" font-size="10" font-weight="700" fill="#000">CC</text><text x="33" y="19" font-family="Arial,sans-serif" font-size="11" font-weight="700" fill="#fff">${esc(modules)}</text></svg>`);
    }

    function setLang(next) {
      lang = next;
      localStorage.setItem("lf-lang", lang);
      document.documentElement.lang = lang;
      document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
      document.querySelectorAll("[data-placeholder-de]").forEach(el => { el.placeholder = lang === "en" ? el.dataset.placeholderEn : el.dataset.placeholderDe; });
      document.getElementById("lang-de").setAttribute("aria-pressed", lang === "de");
      document.getElementById("lang-en").setAttribute("aria-pressed", lang === "en");
      updateLinks();
      renderQuestion();
      renderResult();
      fillLicenseSelect();
      fillMediumSelect();
      fillArticleSelect();
      renderOverview();
      renderSoftware();
      buildFAQ();
      renderNotice();
    }

    function updateLinks() {
      const links = {
        twillo: lang === "en" ? "https://www.twillo.de/en/" : "https://www.twillo.de",
        twilloFaq: lang === "en" ? "https://www.twillo.de/en/helpcenter/" : "https://www.twillo.de/helpcenter/?_kategorie=grundlagen-von-oer",
        twilloContact: lang === "en" ? "https://www.twillo.de/en/contact/" : "https://www.twillo.de/kontakt/",
        twilloEvents: lang === "en" ? "https://www.twillo.de/en/events/" : "https://www.twillo.de/veranstaltungen/",
        twilloShare: lang === "en" ? "https://www.twillo.de/en/share-oer/" : "https://www.twillo.de/oer-teilen/",
        appLicense: "https://opensource.org/license/mit",
        linkedin: "https://de.linkedin.com/in/johannes-koch-1964a3240"
      };
      Object.entries(links).forEach(([name, url]) => document.querySelectorAll(`[data-link="${name}"]`).forEach(a => a.href = url));
    }

    function setFont(delta) {
      fontStep = Math.max(-2, Math.min(3, fontStep + delta));
      localStorage.setItem("lf-font-step", fontStep);
      applyFont();
    }
    function applyFont() { document.documentElement.style.setProperty("--fs", `${16 + fontStep}px`); }
    function toggleReadable() {
      const on = document.documentElement.dataset.readable !== "on";
      document.documentElement.dataset.readable = on ? "on" : "off";
      localStorage.setItem("lf-readable", on ? "on" : "off");
      document.getElementById("readBtn").setAttribute("aria-pressed", on);
    }

    function showPanel(id) {
      ["finder", "overview", "help"].forEach(panel => {
        document.getElementById(`panel-${panel}`).classList.toggle("hidden", panel !== id);
        const tab = document.getElementById(`tab-${panel}`);
        tab.setAttribute("aria-selected", panel === id);
        tab.tabIndex = panel === id ? 0 : -1;
      });
      if (id === "overview") { renderOverview(); renderSoftware(); }
      if (id === "help") buildFAQ();
      const html = document.documentElement;
      const previousScrollBehavior = html.style.scrollBehavior;
      html.style.scrollBehavior = "auto";
      window.scrollTo(0, 0);
      html.style.scrollBehavior = previousScrollBehavior;
    }

    function renderQuestion() {
      const q = questions[qIndex];
      const saved = answers[q.id] || "";
      const visible = relevantQuestions();
      const position = Math.max(0, visible.findIndex(item => item.id === q.id));
      document.getElementById("progressText").textContent = lang === "de" ? `Frage ${position + 1} von ${visible.length}` : `Question ${position + 1} of ${visible.length}`;
      document.getElementById("questionHost").innerHTML = `
        <fieldset class="question">
          <legend><h4>${esc(q.q[lang])}</h4></legend>
          <p class="hint">${esc(q.hint[lang])}</p>
          <p class="q-info"><strong>${esc(t("info"))}:</strong> ${esc(q.info[lang])}</p>
          <div class="options">
            ${q.options.map(([value, label]) => `
              <label class="choice">
                <input type="radio" name="${esc(q.id)}" value="${esc(value)}" ${saved === value ? "checked" : ""} onchange="saveAnswer('${q.id}')">
                <span><strong>${esc(label[lang])}</strong></span>
              </label>
            `).join("")}
          </div>
        </fieldset>`;
    }

    function saveAnswer(id) {
      const picked = document.querySelector(`[name="${id}"]:checked`);
      answers[id] = picked ? picked.value : "";
      localStorage.setItem("lf-answers", JSON.stringify(answers));
    }
    function isRelevant(q) {
      if (answers.attribution === "no" && q.id !== "attribution") return false;
      if (q.id === "sharealike" && answers.adapt === "no") return false;
      return true;
    }
    function relevantQuestions() { return questions.filter(isRelevant); }
    function nextRelevantIndex(from) {
      for (let i = from + 1; i < questions.length; i += 1) if (isRelevant(questions[i])) return i;
      return -1;
    }
    function prevRelevantIndex(from) {
      for (let i = from - 1; i >= 0; i -= 1) if (isRelevant(questions[i])) return i;
      return -1;
    }
    function nextQuestion() {
      const q = questions[qIndex];
      saveAnswer(q.id);
      if (!answers[q.id]) { toast(lang === "de" ? "Bitte eine Antwort auswählen." : "Please choose an answer."); return; }
      const next = nextRelevantIndex(qIndex);
      if (next > -1) { qIndex = next; renderQuestion(); return; }
      showResult();
    }
    function prevQuestion() {
      const prev = prevRelevantIndex(qIndex);
      if (prev > -1) { qIndex = prev; renderQuestion(); }
    }
    function showResult() {
      manualLicense = false;
      document.getElementById("resultPlaceholder").classList.add("hidden");
      document.getElementById("resultSection").classList.remove("hidden");
      renderResult();
      document.getElementById("flowResult").scrollIntoView({ behavior: "smooth", block: "start" });
    }
    function editAnswers() {
      manualLicense = false;
      document.getElementById("resultSection").classList.add("hidden");
      document.getElementById("resultPlaceholder").classList.remove("hidden");
      qIndex = 0;
      renderQuestion();
      document.getElementById("flowQuestions").scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function decide() {
      if (answers.attribution === "no") return { best: "cc0", alt: "by", bad: "byncnd" };
      if (answers.adapt === "no") return { best: answers.commercial === "no" ? "byncnd" : "bynd", alt: answers.commercial === "no" ? "bync" : "by", bad: "bysa" };
      if (answers.commercial === "no") return { best: answers.sharealike === "yes" ? "byncsa" : "bync", alt: "by", bad: "cc0" };
      if (answers.sharealike === "yes") return { best: "bysa", alt: "by", bad: "bynd" };
      return { best: "by", alt: "bysa", bad: "byncnd" };
    }
    function character(key, role) {
      const base = licenses[key].summary[lang];
      if (role === 0) return base;
      if (role === 1) return lang === "de" ? `Auch diese Lizenz kann passen: ${base}` : `This license can also fit: ${base}`;
      const bad = {
        de: {
          cc0: "Diese Lizenz verzichtet auf die Pflicht zur Namensnennung. Sie passt weniger, wenn sichtbar bleiben soll, von wem das Material stammt.",
          by: "Diese Lizenz ist sehr offen. Sie passt weniger, wenn du kommerzielle Nutzung oder Bearbeitung bewusst ausschließen möchtest.",
          bysa: "Diese Lizenz setzt voraus, dass Bearbeitungen wieder unter derselben Lizenz geteilt werden. Sie passt weniger, wenn du diese Kopplung nicht möchtest.",
          bync: "Diese Lizenz schließt kommerzielle Nutzung aus. Sie passt weniger, wenn möglichst breite OER-Nachnutzung wichtig ist.",
          byncsa: "Diese Lizenz kombiniert nicht-kommerziell und Share Alike. Sie passt weniger, wenn Nachnutzung möglichst einfach bleiben soll.",
          bynd: "Diese Lizenz erlaubt Weitergabe nur unverändert. Sie passt weniger, wenn Anpassung, Übersetzung oder Remix möglich sein sollen.",
          byncnd: "Diese Lizenz ist sehr restriktiv: nicht-kommerziell und keine Bearbeitung. Sie passt weniger, wenn Offenheit und Anpassbarkeit wichtig sind."
        },
        en: {
          cc0: "This license waives the attribution requirement. It fits less well if creator credit should remain visible.",
          by: "This license is very open. It fits less well if you intentionally want to exclude commercial use or adaptation.",
          bysa: "This license requires adaptations to be shared under the same license. It fits less well if you do not want that tie.",
          bync: "This license excludes commercial use. It fits less well if broad OER reuse matters.",
          byncsa: "This license combines non-commercial use and share-alike. It fits less well if reuse should remain simple.",
          bynd: "This license only allows unchanged sharing. It fits less well if adaptation, translation, or remix should be possible.",
          byncnd: "This license is highly restrictive: non-commercial and no adaptations. It fits less well if openness and adaptability matter."
        }
      };
      return bad[lang][key];
    }

    function moduleChips(key) {
      return licenses[key].modules.map(m => `<span class="module-chip">${esc(m)}</span>`).join("");
    }
    function linksHTML(lic) {
      return `<a href="${lic.deed[lang]}" target="_blank" rel="noopener">${t("deed")}</a><a href="${lic.legal[lang]}" target="_blank" rel="noopener">${t("legal")}</a><a href="${lic.badge}" target="_blank" rel="noopener">${t("badge")}</a>`;
    }
    function renderResult() {
      if (document.getElementById("resultSection").classList.contains("hidden")) return;
      const decision = decide();
      if (!manualLicense) currentLicense = decision.best;
      [["best", decision.best, 0], ["alt", decision.alt, 1], ["bad", decision.bad, 2]].forEach(([slot, key, role]) => {
        const lic = licenses[key];
        document.getElementById(`${slot}Name`).textContent = lic.name;
        document.getElementById(`${slot}Why`).textContent = character(key, role);
        document.getElementById(`${slot}Badge`).src = badgeImage(key, lic);
        document.getElementById(`${slot}Badge`).alt = lic.name;
        document.getElementById(`${slot}Modules`).innerHTML = moduleChips(key);
        document.getElementById(`${slot}Links`).innerHTML = linksHTML(lic);
      });
      fillLicenseSelect();
      renderNotice();
    }

    function fillLicenseSelect() {
      const sel = document.getElementById("licenseSelect");
      const selected = currentLicense;
      sel.innerHTML = "";
      Object.entries(licenses).forEach(([key, value]) => sel.add(new Option(value.name, key)));
      sel.value = licenses[selected] ? selected : "by";
    }
    function fillMediumSelect() {
      const sel = document.getElementById("mediumPreset");
      const selected = sel.value || "workmaterial";
      sel.innerHTML = "";
      mediumOptions.forEach(m => sel.add(new Option(m[lang], m.value)));
      sel.value = mediumOptions.some(m => m.value === selected) ? selected : "workmaterial";
      toggleCustomMedium(false);
    }
    function fillArticleSelect() {
      const sel = document.getElementById("mediumArticle");
      const selected = sel.value || "Dieses";
      sel.innerHTML = "";
      articleOptions.forEach(a => sel.add(new Option(a[lang], a.value)));
      sel.value = articleOptions.some(a => a.value === selected) ? selected : "Dieses";
    }
    function toggleCustomMedium(shouldRender = true) {
      const preset = document.getElementById("mediumPreset");
      const custom = preset.value === "custom";
      document.getElementById("mediumCustom").classList.toggle("hidden", !custom);
      document.getElementById("mediumArticle").classList.toggle("hidden", !custom);
      document.getElementById("softwareNotice").classList.toggle("show", preset.value === "software");
      if (shouldRender) renderNotice();
    }
    function getMedium() {
      const preset = document.getElementById("mediumPreset");
      const item = mediumOptions.find(m => m.value === preset.value) || mediumOptions[2];
      if (item.value === "custom") {
        const custom = document.getElementById("mediumCustom").value.trim();
        if (custom) return { label: custom, article: lang === "de" ? document.getElementById("mediumArticle").value : "This" };
      }
      return { label: item[lang], article: item.article[lang] };
    }
    function mediumPhrase(medium) { return [medium.article, medium.label].filter(Boolean).join(" "); }
    function quoteTitle(title) { return lang === "de" ? `„${title}“` : `“${title}”`; }
    function setManualLicense() {
      manualLicense = true;
      currentLicense = document.getElementById("licenseSelect").value;
      renderNotice();
    }
    function scrollToNotice() {
      document.getElementById("noticeSection").scrollIntoView({ behavior: "smooth", block: "start" });
    }
    function renderNotice() {
      const medium = getMedium();
      const mediumText = mediumPhrase(medium);
      const title = document.getElementById("workTitle").value || "[Titel]";
      const titleText = quoteTitle(title);
      const author = document.getElementById("author").value || (lang === "de" ? "[Urheber:in]" : "[Creator]");
      const year = document.getElementById("year").value || "2026";
      const source = document.getElementById("sourceUrl").value || "";
      const changed = document.getElementById("changed").value === "yes";
      const changeText = document.getElementById("changeText").value || (lang === "de" ? "bearbeitet" : "adapted");
      const key = document.getElementById("licenseSelect").value || currentLicense;
      const lic = licenses[key] || licenses.by;
      const deed = lic.deed[lang];
      const bear = changed ? (lang === "de" ? ` Bearbeitung: ${changeText}.` : ` Adaptation: ${changeText}.`) : "";
      const src = source ? ` ${lang === "de" ? "Ursprungsort" : "Source"}: ${source}.` : "";
      const short = lang === "de"
        ? `${mediumText}, ${titleText}, von ${author}, ${year}, steht unter ${lic.name}: ${deed}.${src}${bear}`
        : `${mediumText}, ${titleText}, by ${author}, ${year}, is licensed under ${lic.name}: ${deed}.${src}${bear}`;
      const reuse = lang === "de"
        ? `Wir empfehlen folgende Angabe bei Nachnutzung: ${author} (${year}): ${titleText}. ${medium.label}. Lizenz: ${lic.name}, ${deed}.${source ? ` Online: ${source}.` : ""}${bear}`
        : `Recommended attribution: ${author} (${year}): ${titleText}. ${medium.label}. License: ${lic.name}, ${deed}.${source ? ` Online: ${source}.` : ""}${bear}`;
      const md = (lang === "de"
        ? `${mediumText}, [${titleText}](${source || deed}), von ${author}, ${year}, steht unter [${lic.name}](${deed}).`
        : `${mediumText}, [${titleText}](${source || deed}), by ${author}, ${year}, is licensed under [${lic.name}](${deed}).`) + bear;
      const html = lang === "de"
        ? `<p>${esc(mediumText)}, <a href="${esc(source || deed)}">${esc(titleText)}</a>, von ${esc(author)}, ${esc(year)}, steht unter <a href="${esc(deed)}">${esc(lic.name)}</a>.${esc(bear)}</p>`
        : `<p>${esc(mediumText)}, <a href="${esc(source || deed)}">${esc(titleText)}</a>, by ${esc(author)}, ${esc(year)}, is licensed under <a href="${esc(deed)}">${esc(lic.name)}</a>.${esc(bear)}</p>`;
      [["outShort", short], ["outReuse", reuse], ["outMd", md], ["outHtml", html]].forEach(([id, value]) => { document.getElementById(id).value = value; });
      document.getElementById("badgeImg").src = badgeImage(key, lic);
      document.getElementById("badgeDirect").href = lic.badge;
    }

    function renderOverview() {
      const host = document.getElementById("overviewGrid");
      host.innerHTML = Object.entries(licenses).map(([key, lic]) => `
        <details class="overview-card">
          <summary>
            <div class="overview-head">
              <div><h3>${esc(lic.name)}</h3><p>${esc(lic.summary[lang])}</p></div>
              <img src="${esc(badgeImage(key, lic))}" alt="${esc(lic.name)}">
            </div>
            <div class="module-row">${moduleChips(key)}</div>
          </summary>
          <div class="overview-detail">
            <div class="module-list">${lic.modules.map(code => `<div class="module"><b>${esc(moduleInfo[code][lang].title)}</b>${esc(moduleInfo[code][lang].body)}</div>`).join("")}</div>
            <div class="license-links">${linksHTML(lic)}</div>
          </div>
        </details>`).join("");
    }
    function renderSoftware() {
      const host = document.getElementById("softwareGrid");
      host.innerHTML = softwareLicenses.map(lic => `<article class="software-card"><b>${esc(lic.name)}</b><p>${esc(lic[lang])}</p><a href="${lic.url}" target="_blank" rel="noopener">${lang === "de" ? "Mehr bei Choose a License" : "More at Choose a License"}</a></article>`).join("");
    }
    function buildFAQ() {
      const host = document.getElementById("faqList");
      host.innerHTML = faqs[lang].map((item, index) => `<details class="qa" ${index === 0 ? "open" : ""}><summary>${esc(item.q)}</summary><div class="qa-body">${esc(item.a)}</div></details>`).join("");
    }
    function copyOut(id) {
      navigator.clipboard?.writeText(document.getElementById(id).value);
      toast(t("copied"));
    }
    function resetAll() {
      answers = {};
      localStorage.removeItem("lf-answers");
      qIndex = 0;
      currentLicense = "by";
      manualLicense = false;
      document.getElementById("resultSection").classList.add("hidden");
      document.getElementById("resultPlaceholder").classList.remove("hidden");
      renderQuestion();
      fillLicenseSelect();
      renderNotice();
    }
    function toggleSideHelp() {
      const box = document.getElementById("sidehelp");
      box.classList.toggle("open");
      document.getElementById("sidehelpHandle").setAttribute("aria-expanded", box.classList.contains("open"));
    }
    function toast(msg) {
      const el = document.getElementById("toast");
      el.textContent = msg;
      el.classList.add("show");
      setTimeout(() => el.classList.remove("show"), 1800);
    }

    document.documentElement.dataset.readable = localStorage.getItem("lf-readable") || "off";
    document.getElementById("readBtn").setAttribute("aria-pressed", document.documentElement.dataset.readable === "on");
    applyFont();
    fillLicenseSelect();
    fillMediumSelect();
    fillArticleSelect();
    setLang(lang);
