const VERSION_METADATA = {
      version: "1.20.20260819-codex",
      revision: 20,
      revisionDate: "2026-08-19",
      attribution: {
        de: "Lizenzfinder von Johannes Koch, 2026. Quellcode: MIT License. Redaktionelle Inhalte: CC0 1.0.",
        en: "License Finder by Johannes Koch, 2026. Source code: MIT License. Editorial content: CC0 1.0."
      }
    };

    const strings = {
      de: {
        skip: "Zum Inhalt springen", readable: "Bessere Lesbarkeit", kicker: "Offene Materialien",
        heroA: "Passende Lizenz finden.", heroB: "Vermerk mitnehmen.",
        appSub: "Eine kurze, einfache Orientierung für selbst erstellte Materialien: Lizenzidee klären, Empfehlung verstehen und den passenden Vermerk erstellen.",
        tabFinder: "Lizenz finden", tabOverview: "Lizenzen im Überblick", tabHelp: "Hilfe & Quellen",
        finderH: "Offenheit sichtbar machen", finderP: "Vom eigenen Material zur Lizenzempfehlung und direkt weiter zum passenden Vermerk.",
        flowAskH: "Passende Lizenz finden", flowAskP: "Ein kurzer Fragebogen klärt, welche Creative-Commons-Lizenz am besten passt.",
        back: "Zurück", next: "Weiter", reset: "Neu starten", info: "Info",
        resultH: "Lizenzempfehlung", resultP: "Nachfolgend stehen drei Lizenzen: zwei gut geeignete Vorschläge und eine Lizenz, die den Antworten aus dem Fragebogen eher entgegensteht.",
        resultPlaceholder: "Noch keine Empfehlung: Beantworte die Fragen in Schritt 1.", best: "Empfehlung", also: "Auch möglich", least: "Eher weniger passend",
        publishH: "Direkt weiter zu twillo", publishP: "Wenn diese Lizenz passt und die Rechte geklärt sind, kann das Material bei twillo veröffentlicht oder verlinkt werden.", publishLink: "Material auf twillo veröffentlichen",
        editAnswers: "Antworten anpassen", noticeJump: "Zum Vermerk", noticeH: "Lizenzvermerk erstellen",
        fieldMedium: "Welcher Medientyp ist es?", softwareNotice: "Für Softwarecode sind Creative-Commons-Lizenzen in der Regel nicht die passende Wahl. Nutze den Vermerk für Dokumentation, begleitende Materialien oder sichtbare Inhalte; für Quellcode helfen die Hinweise im Lizenzüberblick.",
        fieldTitle: "Wie heißt dein Material?", fieldAuthor: "Wer soll genannt werden?", fieldYear: "Jahr", fieldLicense: "Welche Lizenz?", fieldSource: "Wo liegt das Original?", fieldSourceHint: "Optional, aber sehr hilfreich für Nachnutzung.", sourceInvalid: "Bitte eine vollständige Adresse mit https:// angeben.",
        fieldChanged: "Wurde etwas verändert?", changedNo: "Nein", changedYes: "Ja", fieldChangeText: "Bearbeitung kurz beschreiben",
        outShort: "Kurzvermerk", outReuse: "Empfohlene Angabe", copy: "Kopieren", copied: "Kopiert", copyManual: "Text markiert – bitte mit Strg+C kopieren.", templatesSummary: "Markdown und HTML anzeigen",
        badgeH: "Creative-Commons-Badge", badgeP: "Nutze den Badge für Wiedererkennung. Die offizielle Downloadseite bietet weitere Formate.", badgeOpen: "Badge öffnen", badgeDownloads: "CC-Downloads",
        overviewH: "Lizenzen im Überblick", overviewP: "Kurz nachsehen, wie Creative-Commons-Lizenzen aufgebaut sind und wann Software-Lizenzen die bessere Spur sind.",
        softwareH: "Software-Lizenzen", softwareP: "Für Quellcode sind Creative-Commons-Lizenzen meist nicht gedacht. Software-Lizenzen regeln zum Beispiel Quellcode, Haftung, Patente und Weitergabe genauer.",
        helpH: "Hilfe & Quellen", helpP: "Kurz und verständlich, mit Verweisen auf vertiefende Informationen von twillo, Creative Commons und Choose a License.",
        serviceH: "Unterstützung und Vertiefung", serviceP: "Für Fragen zu Open Educational Resources, Lizenzangaben oder zur Veröffentlichung von Materialien bietet der twillo-Service weiterführende Unterstützung.", serviceHelp: "twillo-Helpcenter", serviceEvents: "twillo-Veranstaltungen",
        sideHandle: "Über diese Anwendung", sideH: "Über diese Anwendung", aboutCreditA: "Der Lizenzfinder wurde entwickelt von", aboutCreditB: ", 2026.", aboutVersion: "Produktversion", aboutNetwork: "Netzwerk", aboutNetworkP: "Einzelne HTML-Datei ohne externe Ressourcen: keine Schriftdateien, Skripte oder Bilder von fremden Servern. Eine Content-Security-Policy unterbindet ausgehende Verbindungen. Externe Links öffnen sich ausschließlich nach Klick.", aboutStorage: "Speicherung", aboutStorageP: "Die Anwendung speichert nichts. Antworten und Anzeigeeinstellungen bestehen nur während des Seitenaufrufs und sind nach dem Schließen oder Neuladen verworfen. Es werden keine Cookies gesetzt und keine Analyse- oder Tracking-Dienste eingebunden.", aboutFont: "Schrift", aboutFontP: "Es werden keine Schriftdateien eingebettet oder nachgeladen. Die Darstellung nutzt lokal vorhandene Schriften (Outfit, sofern installiert, sonst Segoe UI bzw. die serifenlose Systemschrift).", aboutOrigin: "Entstehung", aboutOriginP: "Entstanden im Vibe-Coding: Die erste Fassung wurde mit Unterstützung von Claude geschrieben und anschließend mit Codex weiterentwickelt, strukturiert und getestet. Konzeption, Auswahl, Prüfung und Veröffentlichung verantwortet Johannes Koch.", aboutLicense: "Lizenz der Anwendung", aboutLicenseP: "Der Quellcode des Lizenzfinders steht unter der <a href=\"https://opensource.org/license/mit\" target=\"_blank\" rel=\"noopener\">MIT License</a>: Nutzung, Bearbeitung, Weitergabe und Einbindung sind erlaubt, solange der Lizenzhinweis mit Urheberangabe erhalten bleibt. Die redaktionellen Inhalte (Fragen, Erläuterungen, FAQ) stehen unter CC0 1.0 und können ohne Namensnennung nachgenutzt werden.", aboutDisclaimer: "Hinweis", aboutDisclaimerP: "Der Lizenzfinder bietet eine praxisnahe Orientierung und ersetzt keine Rechtsberatung. Für verbindliche Auskünfte im Einzelfall ist fachkundiger Rat einzuholen.", aboutLicenseText: "Lizenztext anzeigen", contentLicenseNote: "Redaktionelle Inhalte:", contact: "Kontakt",
        footCreditA: "Diese Anwendung „Lizenzfinder“ wurde 2026 von", footCreditB: "mit Unterstützung von KI (Codex/OpenAI) erstellt und darf gern geteilt und weitergegeben werden.", footCreditC: "Lizenz:", footContentLicense: "redaktionelle Inhalte:",
        deed: "Deed", legal: "Legal Code", badge: "Badge"
      },
      en: {
        skip: "Skip to content", readable: "Readable mode", kicker: "Open materials",
        heroA: "Find a fitting license.", heroB: "Take the attribution with you.",
        appSub: "A short, simple orientation for self-created materials: clarify the license idea, understand the recommendation, and create the attribution notice.",
        tabFinder: "Find a license", tabOverview: "License overview", tabHelp: "Help & sources",
        finderH: "Make openness visible", finderP: "From your material to a license recommendation and directly to the matching attribution notice.",
        flowAskH: "Find a fitting license", flowAskP: "A short questionnaire clarifies which Creative Commons license fits best.",
        back: "Back", next: "Next", reset: "Restart", info: "Info",
        resultH: "License recommendation", resultP: "Below are three licenses: two suitable suggestions and one license that contrasts with the questionnaire answers.",
        resultPlaceholder: "No recommendation yet: answer the questions in step 1.", best: "Recommendation", also: "Also possible", least: "Less suitable",
        publishH: "Continue with twillo", publishP: "If this license fits and rights are cleared, the material can be published or linked on twillo.", publishLink: "Publish material on twillo",
        editAnswers: "Adjust answers", noticeJump: "To attribution", noticeH: "Create attribution notice",
        fieldMedium: "What type of material is it?", softwareNotice: "Creative Commons licenses are usually not the right choice for software code. Use the notice for documentation, accompanying materials, or visible content; for source code, see the software license notes in the overview.",
        fieldTitle: "What is the title of your material?", fieldAuthor: "Who should be credited?", fieldYear: "Year", fieldLicense: "Which license?", fieldSource: "Where is the original?", fieldSourceHint: "Optional, but very helpful for reuse.", sourceInvalid: "Please enter a complete address starting with https://.",
        fieldChanged: "Was anything changed?", changedNo: "No", changedYes: "Yes", fieldChangeText: "Briefly describe the adaptation",
        outShort: "Short notice", outReuse: "Recommended attribution", copy: "Copy", copied: "Copied", copyManual: "Text selected – please copy with Ctrl+C.", templatesSummary: "Show Markdown and HTML",
        badgeH: "Creative Commons badge", badgeP: "Use the badge for recognition. The official download page offers more formats.", badgeOpen: "Open badge", badgeDownloads: "CC downloads",
        overviewH: "License overview", overviewP: "Quickly see how Creative Commons licenses are built and when software licenses are the better path.",
        softwareH: "Software licenses", softwareP: "Creative Commons licenses are usually not intended for source code. Software licenses address source code, liability, patents, and distribution more specifically.",
        helpH: "Help & sources", helpP: "Short and understandable, with links to more detailed information from twillo, Creative Commons, and Choose a License.",
        serviceH: "Support and further reading", serviceP: "For questions about Open Educational Resources, attribution notices, or publishing materials, the twillo service offers further support.", serviceHelp: "twillo help center", serviceEvents: "twillo events",
        sideHandle: "About this app", sideH: "About this app", aboutCreditA: "The License Finder was developed by", aboutCreditB: ", 2026.", aboutVersion: "Product version", aboutNetwork: "Network", aboutNetworkP: "Single HTML file with no external resources: no font files, scripts, or images from third-party servers. A Content Security Policy blocks outgoing connections. External links open only when clicked.", aboutStorage: "Storage", aboutStorageP: "The application stores nothing. Answers and display settings exist only for the duration of the page visit and are discarded on closing or reloading. No cookies are set and no analytics or tracking services are included.", aboutFont: "Typography", aboutFontP: "No font files are embedded or loaded. Rendering uses locally available fonts (Outfit if installed, otherwise Segoe UI or the system sans-serif).", aboutOrigin: "Origin", aboutOriginP: "Created through vibe coding: the first version was written with support from Claude and then further developed, structured, and tested with Codex. Concept, selection, review, and publication are the responsibility of Johannes Koch.", aboutLicense: "Application license", aboutLicenseP: "The source code of the License Finder is licensed under the <a href=\"https://opensource.org/license/mit\" target=\"_blank\" rel=\"noopener\">MIT License</a>: use, modification, distribution, and embedding are permitted as long as the license notice with attribution is preserved. The editorial content (questions, explanations, FAQ) is released under CC0 1.0 and may be reused without attribution.", aboutDisclaimer: "Notice", aboutDisclaimerP: "The License Finder provides practical orientation and does not constitute legal advice. For binding guidance in individual cases, please seek qualified counsel.", aboutLicenseText: "Show license text", contentLicenseNote: "Editorial content:", contact: "Contact",
        footCreditA: "This application “License Finder” was created in 2026 by", footCreditB: "with AI assistance (Codex/OpenAI) and may be shared and redistributed.", footCreditC: "License:", footContentLicense: "editorial content:",
        deed: "Deed", legal: "Legal code", badge: "Badge"
      }
    };

    const questions = [
      { id: "attribution", type: "single", q: { de: "Soll sichtbar bleiben, von wem das Material stammt?", en: "Should it remain visible who created the material?" }, hint: { de: "Es geht darum, ob Nachnutzende dich im Lizenzvermerk nennen müssen.", en: "This asks whether reusers must credit you in the attribution notice." }, info: { de: "Bei den meisten CC-Lizenzen ist Namensnennung Pflicht. Wenn du darauf verzichten möchtest, führt der Weg zu CC0.", en: "Most CC licenses require attribution. If you want to waive that requirement, the path leads to CC0." }, options: [["yes", { de: "Ja, mein Name oder meine Organisation soll genannt werden.", en: "Yes, my name or organization should be credited." }], ["no", { de: "Nein, das Material darf ohne Namensnennung genutzt werden.", en: "No, the material may be used without attribution." }]] },
      { id: "adapt", type: "single", q: { de: "Dürfen andere das Material bearbeiten?", en: "May others adapt the material?" }, hint: { de: "Bearbeiten meint z. B. übersetzen, kürzen, remixen oder für eine Lehrveranstaltung anpassen.", en: "Adaptation includes translating, shortening, remixing, or tailoring it for a course." }, info: { de: "Wenn Bearbeitungen ausgeschlossen werden, wird das Material weniger offen nutzbar. Für OER sind Bearbeitungen oft wichtig.", en: "If adaptations are excluded, reuse becomes less open. For OER, adaptation is often important." }, options: [["yes", { de: "Ja, Bearbeitungen sollen möglich sein.", en: "Yes, adaptations should be possible." }], ["no", { de: "Nein, das Material soll nur unverändert weitergegeben werden.", en: "No, the material should only be shared unchanged." }]] },
      { id: "commercial", type: "single", q: { de: "Dürfen andere das Material auch kommerziell nutzen?", en: "May others also use the material commercially?" }, hint: { de: "Kommerziell kann schon bedeuten, dass eine Organisation Geld für ihre Dienstleistung nimmt.", en: "Commercial can already mean that an organization charges for its service." }, info: { de: "Das betrifft nicht nur Unternehmen, die Material verkaufen. Auch Volkshochschulen, private Hochschulen oder Nachhilfeangebote können kommerziell handeln, weil sie Gebühren oder Entgelte nehmen.", en: "This is not only about companies selling material. Adult education centers, private universities, or tutoring services can also count as commercial if they charge fees." }, options: [["yes", { de: "Ja, kommerzielle Nutzung darf möglich sein.", en: "Yes, commercial use may be possible." }], ["no", { de: "Nein, kommerzielle Nutzung möchte ich ausschließen.", en: "No, I want to exclude commercial use." }]] },
      { id: "sharealike", type: "single", q: { de: "Sollen Bearbeitungen wieder unter derselben Lizenz geteilt werden?", en: "Should adaptations be shared under the same license?" }, hint: { de: "Das koppelt neue Fassungen an dieselben Lizenzbedingungen.", en: "This ties adapted versions to the same license terms." }, info: { de: "Bearbeitungen müssen dann wieder unter derselben Lizenz geteilt werden. Das schützt Offenheit, kann Nachnutzung aber etwas weniger flexibel machen.", en: "Adaptations must then be shared under the same license. This protects openness, but can make reuse less flexible." }, options: [["yes", { de: "Ja, Bearbeitungen sollen offen weitergegeben werden.", en: "Yes, adaptations should remain open." }], ["no", { de: "Nein, das möchte ich nicht vorgeben.", en: "No, I do not want to require that." }]] }
    ];

    const licenses = {
      cc0: { name: "CC0 1.0", badge: "https://mirrors.creativecommons.org/presskit/icons/zero.xlarge.png", modules: ["CC0"], deed: { de: "https://creativecommons.org/publicdomain/zero/1.0/deed.de", en: "https://creativecommons.org/publicdomain/zero/1.0/" }, legal: { de: "https://creativecommons.org/publicdomain/zero/1.0/legalcode.de", en: "https://creativecommons.org/publicdomain/zero/1.0/legalcode.en" }, summary: { de: "So frei wie möglich: andere können das Material ohne Namensnennungspflicht nutzen, bearbeiten und weitergeben.", en: "As free as possible: others can use, adapt, and share the material without an attribution requirement." } },
      by: { name: "CC BY 4.0", badge: "https://licensebuttons.net/l/by/4.0/88x31.png", modules: ["BY"], deed: { de: "https://creativecommons.org/licenses/by/4.0/deed.de", en: "https://creativecommons.org/licenses/by/4.0/" }, legal: { de: "https://creativecommons.org/licenses/by/4.0/legalcode.de", en: "https://creativecommons.org/licenses/by/4.0/legalcode.en" }, summary: { de: "Sehr offen: Nutzung, Bearbeitung und Weitergabe sind erlaubt, solange der Name genannt wird.", en: "Very open: use, adaptation, and sharing are allowed as long as attribution is provided." } },
      bysa: { name: "CC BY-SA 4.0", badge: "https://licensebuttons.net/l/by-sa/4.0/88x31.png", modules: ["BY", "SA"], deed: { de: "https://creativecommons.org/licenses/by-sa/4.0/deed.de", en: "https://creativecommons.org/licenses/by-sa/4.0/" }, legal: { de: "https://creativecommons.org/licenses/by-sa/4.0/legalcode.de", en: "https://creativecommons.org/licenses/by-sa/4.0/legalcode.en" }, summary: { de: "Offen mit Weitergabe-Regel: Bearbeitungen müssen wieder unter derselben Lizenz geteilt werden.", en: "Open with a share-alike rule: adaptations must be shared under the same license." } },
      bync: { name: "CC BY-NC 4.0", badge: "https://licensebuttons.net/l/by-nc/4.0/88x31.png", modules: ["BY", "NC"], deed: { de: "https://creativecommons.org/licenses/by-nc/4.0/deed.de", en: "https://creativecommons.org/licenses/by-nc/4.0/" }, legal: { de: "https://creativecommons.org/licenses/by-nc/4.0/legalcode.de", en: "https://creativecommons.org/licenses/by-nc/4.0/legalcode.en" }, summary: { de: "Namensnennung ja, kommerzielle Nutzung nein. Für breite OER-Nachnutzung oft einschränkend.", en: "Attribution yes, commercial use no. Often limiting for broad OER reuse." } },
      byncsa: { name: "CC BY-NC-SA 4.0", badge: "https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png", modules: ["BY", "NC", "SA"], deed: { de: "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de", en: "https://creativecommons.org/licenses/by-nc-sa/4.0/" }, legal: { de: "https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode.de", en: "https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode.en" }, summary: { de: "Nicht-kommerziell und Weitergabe unter gleicher Lizenz. Offen, aber mit deutlichen Leitplanken.", en: "Non-commercial and share-alike. Open, but with clear constraints." } },
      bynd: { name: "CC BY-ND 4.0", badge: "https://licensebuttons.net/l/by-nd/4.0/88x31.png", modules: ["BY", "ND"], deed: { de: "https://creativecommons.org/licenses/by-nd/4.0/deed.de", en: "https://creativecommons.org/licenses/by-nd/4.0/" }, legal: { de: "https://creativecommons.org/licenses/by-nd/4.0/legalcode.de", en: "https://creativecommons.org/licenses/by-nd/4.0/legalcode.en" }, summary: { de: "Weitergabe nur unverändert. Geeignet, wenn Bearbeitungen bewusst nicht erlaubt sein sollen.", en: "Sharing only unchanged. Suitable when adaptations should intentionally not be allowed." } },
      byncnd: { name: "CC BY-NC-ND 4.0", badge: "https://licensebuttons.net/l/by-nc-nd/4.0/88x31.png", modules: ["BY", "NC", "ND"], deed: { de: "https://creativecommons.org/licenses/by-nc-nd/4.0/deed.de", en: "https://creativecommons.org/licenses/by-nc-nd/4.0/" }, legal: { de: "https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode.de", en: "https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode.en" }, summary: { de: "Die restriktivste CC-Lizenz: nicht-kommerziell und keine Bearbeitung.", en: "The most restrictive CC license: non-commercial and no adaptations." } }
    };

    const moduleInfo = {
      CC0: { de: { title: "CC0", body: "Auf die meisten Rechte wird soweit möglich verzichtet." }, en: { title: "CC0", body: "Most rights are waived as far as possible." } },
      BY: { de: { title: "BY", body: "Namensnennung ist erforderlich." }, en: { title: "BY", body: "Attribution is required." } },
      NC: { de: { title: "NC", body: "Kommerzielle Nutzung ist ausgeschlossen." }, en: { title: "NC", body: "Commercial use is excluded." } },
      SA: { de: { title: "SA", body: "Bearbeitungen müssen unter derselben Lizenz geteilt werden." }, en: { title: "SA", body: "Adaptations must be shared under the same license." } },
      ND: { de: { title: "ND", body: "Bearbeitete Fassungen dürfen nicht veröffentlicht werden." }, en: { title: "ND", body: "Adapted versions may not be published." } }
    };

    const softwareLicenses = [
      { name: "MIT License", url: "https://choosealicense.com/licenses/mit/", de: "Sehr kurz und freigiebig. Erlaubt Nutzung, Änderung und Weitergabe, auch in proprietärer Software.", en: "Short and permissive. Allows use, modification, and distribution, including in proprietary software." },
      { name: "Apache License 2.0", url: "https://choosealicense.com/licenses/apache-2.0/", de: "Freigiebig wie MIT, zusätzlich mit ausdrücklicher Patentregelung.", en: "Permissive like MIT, with an explicit patent grant." },
      { name: "GNU GPLv3", url: "https://choosealicense.com/licenses/gpl-3.0/", de: "Starkes Copyleft: Verbreitete Änderungen müssen wieder offen unter GPL geteilt werden.", en: "Strong copyleft: distributed modifications must be shared openly under the GPL." },
      { name: "GNU AGPLv3", url: "https://choosealicense.com/licenses/agpl-3.0/", de: "Wie GPL, zusätzlich relevant für Netzwerkdienste und Webanwendungen.", en: "Like the GPL, with additional relevance for network services and web applications." }
    ];

    const mediumOptions = [
      { value: "presentation", de: "Präsentation", en: "presentation", article: { de: "Diese", en: "This" } },
      { value: "image", de: "Abbildung", en: "image", article: { de: "Diese", en: "This" } },
      { value: "workmaterial", de: "Arbeitsmaterial", en: "worksheet", article: { de: "Dieses", en: "This" } },
      { value: "audio", de: "Audio", en: "audio", article: { de: "Dieses", en: "This" } },
      { value: "data", de: "Daten", en: "data set", article: { de: "Diese", en: "This" } },
      { value: "course", de: "Kursmaterial", en: "course material", article: { de: "Dieses", en: "This" } },
      { value: "game", de: "Lernspiel", en: "learning game", article: { de: "Dieses", en: "This" } },
      { value: "simulation", de: "Simulation", en: "simulation", article: { de: "Diese", en: "This" } },
      { value: "script", de: "Skript", en: "script", article: { de: "Dieses", en: "This" } },
      { value: "software", de: "Softwareanwendung", en: "software application", article: { de: "Diese", en: "This" } },
      { value: "document", de: "Dokument", en: "document", article: { de: "Dieses", en: "This" } },
      { value: "video", de: "Video", en: "video", article: { de: "Dieses", en: "This" } },
      { value: "website", de: "Website", en: "website", article: { de: "Diese", en: "This" } },
      { value: "exercise", de: "Übung", en: "exercise", article: { de: "Diese", en: "This" } },
      { value: "custom", de: "Eigener Medientyp", en: "Custom type", article: { de: "Dieses", en: "This" } }
    ];

    const articleOptions = [
      { value: "Dieses", de: "Dieses", en: "This" },
      { value: "Diese", de: "Diese", en: "This" },
      { value: "Dieser", de: "Dieser", en: "This" },
      { value: "Dieser Beitrag", de: "Dieser Beitrag", en: "This item" },
      { value: "", de: "Ohne Artikel", en: "No article" }
    ];

    const faqs = {
      de: [
        { q: "Warum ist ein Lizenzvermerk wichtig?", a: "Ohne erkennbare Lizenz bleiben in der Regel alle Rechte vorbehalten. Ein Vermerk zeigt, was andere dürfen und wie das Material genannt werden soll." },
        { q: "Passt Creative Commons auch für Software?", a: "Für Softwarecode empfiehlt Creative Commons selbst in der Regel Software-Lizenzen statt CC-Lizenzen. CC-Lizenzen können aber für Dokumentation, Bilder, Musik oder begleitende Materialien passend sein." },
        { q: "Wo geht es nach der Lizenzwahl weiter?", a: "Wenn das Material offen lizenziert ist und alle Rechte geklärt sind, kann es im twillo-Workspace über + Neu hochgeladen oder verlinkt werden." }
      ],
      en: [
        { q: "Why is an attribution notice important?", a: "Without a visible license, all rights are usually reserved. A notice shows what others may do and how the material should be credited." },
        { q: "Does Creative Commons fit software?", a: "For software code, Creative Commons itself usually recommends software licenses instead of CC licenses. CC licenses can still fit documentation, images, music, or accompanying materials." },
        { q: "What comes after choosing a license?", a: "If the material is openly licensed and rights are cleared, it can be uploaded or linked in the twillo workspace via + New." }
      ]
    };
