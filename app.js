/* ============================================================
   Surfaces Atelier — Mobile App Prototype
   Local, dependency-free interaction layer.
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Data ---------- */
  const img = (id, w = 800) =>
    `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

  const MATERIALS = [
    {
      id: "calacatta-viola", name: "Calacatta Viola", family: "Marble",
      origin: "Carrara, Italy", finish: "Honed", finishes: ["Honed", "Polished", "Brushed"],
      price: 245, tone: "Warm", applications: ["Wall", "Kitchen", "Vanity"], photo: 34404964,
      desc: "A dramatic Italian marble with violet-grey veining on a warm white ground. Each slab is book-matched by hand in our Carrara workshop.",
      thickness: "20 mm", format: "3200 × 1600 mm", batch: "CV-2481",
      pairs: ["nero-marquina", "travertine-classic"]
    },
    {
      id: "travertine-classic", name: "Travertine Classic", family: "Travertine",
      origin: "Tivoli, Italy", finish: "Natural", finishes: ["Natural", "Honed", "Brushed"],
      price: 128, tone: "Warm", applications: ["Floor", "Wall", "Bath"], photo: 19468897,
      desc: "A quietly porous Italian travertine, filled and finished to a soft matte. Warm enough for living rooms, robust enough for floors.",
      thickness: "30 mm", format: "Random lengths", batch: "TC-1180",
      pairs: ["calacatta-viola", "terrazzo-cielo"]
    },
    {
      id: "grigio-carnico", name: "Grigio Carnico", family: "Marble",
      origin: "Friuli, Italy", finish: "Polished", finishes: ["Polished", "Brushed"],
      price: 196, tone: "Cool", applications: ["Floor", "Wall", "Kitchen"], photo: 31525748,
      desc: "A deep grey marble threaded with fine white veins. Polished to a mirror finish, it reads almost like still water.",
      thickness: "20 mm", format: "3000 × 1500 mm", batch: "GC-3042",
      pairs: ["bianco-lasa", "pietra-grey"]
    },
    {
      id: "nero-marquina", name: "Nero Marquina", family: "Marble",
      origin: "Basque Country, Spain", finish: "Polished", finishes: ["Polished"],
      price: 218, tone: "Dark", applications: ["Wall", "Kitchen", "Vanity"], photo: 34688219,
      desc: "Jet-black stone crossed by lightning-white veins. A classic for vanities and kitchen islands that need a confident anchor.",
      thickness: "20 mm", format: "3100 × 1550 mm", batch: "NM-7714",
      pairs: ["bianco-lasa", "onice-ambra"]
    },
    {
      id: "rosso-levanto", name: "Rosso Levanto", family: "Marble",
      origin: "Liguria, Italy", finish: "Honed", finishes: ["Honed", "Polished"],
      price: 232, tone: "Dark", applications: ["Wall", "Vanity"], photo: 35532305,
      desc: "Oxblood red with violet undertones and a dense web of pale veining. Best used as a single gesture, not a whole room.",
      thickness: "20 mm", format: "2900 × 1400 mm", batch: "RL-5520",
      pairs: ["travertine-classic", "nero-marquina"]
    },
    {
      id: "pietra-grey", name: "Pietra Grey", family: "Marble",
      origin: "Fars, Iran", finish: "Brushed", finishes: ["Brushed", "Honed", "Natural"],
      price: 164, tone: "Cool", applications: ["Floor", "Kitchen", "Bath"], photo: 20348123,
      desc: "A dense charcoal limestone-marble with chalky white striations. Brushed finish gives it a quietly tactile, lived-in surface.",
      thickness: "20 mm", format: "3000 × 1500 mm", batch: "PG-9033",
      pairs: ["calacatta-viola", "porcelain-alba"]
    },
    {
      id: "bianco-lasa", name: "Bianco Lasa", family: "Marble",
      origin: "Val Venosta, Italy", finish: "Polished", finishes: ["Polished", "Honed"],
      price: 276, tone: "Light", applications: ["Wall", "Kitchen", "Vanity"], photo: 33685860,
      desc: "The quietest luxury: a pure white dolomitic marble with faint grey clouds. Specified for calm kitchens and bright bathrooms.",
      thickness: "20 mm", format: "3200 × 1600 mm", batch: "BL-2210",
      pairs: ["nero-marquina", "grigio-carnico"]
    },
    {
      id: "verde-alpi", name: "Verde Alpi", family: "Marble",
      origin: "Aosta Valley, Italy", finish: "Honed", finishes: ["Honed", "Polished"],
      price: 210, tone: "Dark", applications: ["Wall", "Floor"], photo: 33753644,
      desc: "A forest-green serpentine with a soft, waxy lustre and pale green veining. Beautiful on walls, dramatic on a powder-room floor.",
      thickness: "20 mm", format: "2800 × 1400 mm", batch: "VA-6681",
      pairs: ["travertine-classic", "onice-ambra"]
    },
    {
      id: "travertine-silver", name: "Travertine Silver", family: "Travertine",
      origin: "Denizli, Turkey", finish: "Brushed", finishes: ["Brushed", "Natural", "Honed"],
      price: 142, tone: "Light", applications: ["Floor", "Bath", "Wall"], photo: 38874193,
      desc: "A cooler, silver-grey travertine with fine horizontal movement. Unfilled and brushed for a raw, architectural floor.",
      thickness: "30 mm", format: "Random lengths", batch: "TS-4127",
      pairs: ["pietra-grey", "porcelain-alba"]
    },
    {
      id: "terrazzo-cielo", name: "Terrazzo Cielo", family: "Terrazzo",
      origin: "Veneto, Italy", finish: "Honed", finishes: ["Honed", "Polished"],
      price: 118, tone: "Light", applications: ["Floor", "Wall", "Kitchen"], photo: 37763125,
      desc: "A pale sky-blue terrazzo with marble, quartz and recycled glass aggregate. Made to order in three chip sizes.",
      thickness: "25 mm", format: "2400 × 1200 mm", batch: "TZ-3390",
      pairs: ["travertine-classic", "calacatta-viola"]
    },
    {
      id: "onice-ambra", name: "Onice Ambra", family: "Onyx",
      origin: "Kerman, Iran", finish: "Polished", finishes: ["Polished"],
      price: 298, tone: "Warm", applications: ["Wall", "Vanity"], photo: 36740615,
      desc: "Translucent amber onyx with honeyed banding. Backlit, it turns a wall into a lantern — reserve it for one special plane.",
      thickness: "18 mm", format: "2600 × 1300 mm", batch: "OA-1156",
      pairs: ["nero-marquina", "verde-alpi"]
    },
    {
      id: "porcelain-alba", name: "Porcelain Alba", family: "Porcelain",
      origin: "Sassuolo, Italy", finish: "Natural", finishes: ["Natural", "Brushed"],
      price: 96, tone: "Light", applications: ["Floor", "Kitchen", "Bath"], photo: 39429629,
      desc: "A large-format porcelain with the soft grain of limestone and the practicality of zero maintenance. Our most-specified floor.",
      thickness: "10 mm", format: "1200 × 600 mm", batch: "PA-8045",
      pairs: ["travertine-silver", "pietra-grey"]
    }
  ];

  const byId = (id) => MATERIALS.find((m) => m.id === id);
  const money = (n) => "$" + n;

  const JOURNEYS = {
    samples: {
      title: "Request a sample box",
      steps: [
        { screen: "explore", hint: "Browse the library and open any surface." },
        { screen: "material", hint: "Review the specification, then add it to your sample box." },
        { screen: "samples", hint: "Check your box, then continue to the request form." },
        { screen: "request", hint: "Fill in delivery details and send your request." },
        { screen: "success", hint: "Your sample box is on its way." }
      ]
    },
    search: {
      title: "Search & save a surface",
      steps: [
        { screen: "search", hint: "Search by name, origin or family." },
        { screen: "material", hint: "Open a result and review the surface." },
        { screen: "material", hint: "Tap the heart to save it." },
        { screen: "moodboard", hint: "Collect it in your moodboard from the studio." },
        { screen: "moodboard", hint: "Add the saved surface to your moodboard." }
      ]
    },
    consult: {
      title: "Book a consultation",
      steps: [
        { screen: "consult", hint: "Open the booking screen." },
        { screen: "consult", hint: "Choose a date and a time." },
        { screen: "consultSuccess", hint: "Confirm the booking." }
      ]
    }
  };

  /* ---------- State ---------- */
  const STORAGE_KEY = "sa-mobile-proto-v1";
  const defaults = () => ({
    saved: ["bianco-lasa"],
    samples: ["travertine-classic", "pietra-grey"],
    moodboard: ["grigio-carnico", "rosso-levanto"],
    filters: { finish: [], tone: [], application: [] },
    family: "All",
    sort: "Featured",
    query: "",
    recent: [],
    consult: { date: null, time: null, format: "Studio" },
    lastRequest: null
  });

  let state = defaults();
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (stored && typeof stored === "object") state = Object.assign(defaults(), stored);
  } catch (e) { /* ignore corrupt storage */ }

  const save = () => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) { /* private mode */ }
  };

  function downloadFile(name, content, type) {
    const blob = new Blob([content], { type: type || "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1200);
  }

  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      toast("Copied to clipboard");
    } catch (err) {
      const area = document.createElement("textarea");
      area.value = text;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      try { document.execCommand("copy"); toast("Copied to clipboard"); }
      catch (e2) { toast("Copy is unavailable in this browser"); }
      area.remove();
    }
  }

  function rememberSearch(q) {
    const value = q.trim();
    if (!value) return;
    state.recent = [value, ...state.recent.filter((item) => item.toLowerCase() !== value.toLowerCase())].slice(0, 4);
    save();
  }

  let current = "home";
  const stack = [];
  let activeJourney = null;
  let journeyStep = 0;

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const esc = (value) => String(value).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const app = $("#app");

  /* ---------- Shared markup ---------- */
  const icon = (name, cls = "icon") => `<svg class="${cls}" aria-hidden="true"><use href="#i-${name}" /></svg>`;

  function tabbarHTML() {
    const tabs = [
      ["home", "Home", "home"],
      ["explore", "Explore", "grid"],
      ["samples", "Samples", "box"],
      ["studio", "Studio", "user"]
    ];
    return tabs.map(([screen, label, ico]) => {
      const active = current === screen ||
        (screen === "explore" && ["material", "search"].includes(current)) ||
        (screen === "samples" && ["request", "success"].includes(current));
      const badge = screen === "samples" && state.samples.length
        ? `<span class="tab-badge">${state.samples.length}</span>` : "";
      return `<button class="tab${active ? " is-active" : ""}" type="button" data-tab="${screen}" aria-label="${label}"${active ? ' aria-current="page"' : ""}>
        ${icon(ico)}<span>${label}</span>${badge}</button>`;
    }).join("");
  }

  function refreshTabbars() {
    $$("[data-tabbar]").forEach((nav) => { nav.innerHTML = tabbarHTML(); });
  }

  function savedCardHTML(m) {
    return `<article class="saved-card">
      <img src="${img(m.photo, 240)}" alt="${m.name}" loading="lazy" />
      <button class="saved-add" type="button" data-add-mood="${m.id}" aria-label="Add ${m.name} to moodboard">${icon("plus")}</button>
      <div class="saved-card-body"><b>${m.name}</b><span>${m.family} · ${m.finish}</span></div>
    </article>`;
  }

  function addToMoodboard(id) {
    if (!state.moodboard.includes(id)) state.moodboard.push(id);
    save();
    renderMoodboard();
    renderStudio();
    toast(`${byId(id).name} added to moodboard`);
    journeyAction("search", "moodboard-add");
  }

  function shareCurrent(kind) {
    const base = location.href.split("#")[0];
    let text = `Surfaces Atelier — mobile app prototype\n${base}`;
    if (kind === "surface" && detailId) {
      const m = byId(detailId);
      text = `${m.name} — ${m.family}, ${m.origin}. ${detailFinish} finish, ${money(m.price)} / sq ft.\nSurfaces Atelier mobile prototype: ${base}`;
    } else if (kind === "moodboard") {
      const names = state.moodboard.map((id) => byId(id).name).join(", ") || "No surfaces yet";
      text = `Villa Amara moodboard — ${names}.\nSurfaces Atelier mobile prototype: ${base}`;
    }
    copyText(text);
  }

  function exportMoodboard() {
    const rows = state.moodboard.map((id) => {
      const m = byId(id);
      return `<article>
        <img src="${img(m.photo, 700)}" alt="${m.name}" />
        <div><h2>${m.name}</h2><p>${m.family} · ${m.origin}</p>
        <dl><dt>Finish</dt><dd>${m.finish}</dd><dt>Format</dt><dd>${m.format}</dd><dt>Price</dt><dd>${money(m.price)} / sq ft</dd></dl></div>
      </article>`;
    }).join("");
    const html = `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8" />
<title>Villa Amara — Moodboard</title>
<style>
body{margin:0;padding:56px;background:#f4efe6;color:#1a1713;font-family:Manrope,system-ui,sans-serif}
header{display:flex;justify-content:space-between;align-items:flex-end;gap:24px;border-bottom:1px solid rgba(26,23,19,.18);padding-bottom:20px;margin-bottom:32px}
h1{font-family:Georgia,serif;font-weight:400;font-size:42px;margin:0;letter-spacing:-.02em}
header p{margin:6px 0 0;font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:#8f6238}
header span{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#615a4f}
main{display:grid;grid-template-columns:1fr 1fr;gap:24px}
article{border:1px solid rgba(26,23,19,.14);border-radius:14px;overflow:hidden;background:#fbf8f2}
article img{width:100%;aspect-ratio:4/3;object-fit:cover;display:block}
article div{padding:18px}
article h2{font-family:Georgia,serif;font-weight:400;font-size:22px;margin:0}
article p{margin:4px 0 14px;font-size:12px;color:#615a4f}
dl{display:grid;grid-template-columns:auto 1fr;gap:6px 16px;margin:0;font-size:12px}
dt{color:#615a4f;text-transform:uppercase;letter-spacing:.1em;font-size:10px}
dd{margin:0;text-align:right;font-weight:600}
footer{margin-top:36px;font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#615a4f}
</style></head><body>
<header><div><h1>Villa Amara</h1><p>Surfaces Atelier · Moodboard</p></div><span>${new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</span></header>
<main>${rows || "<p>No surfaces on this board yet.</p>"}</main>
<footer>Prepared in the Surfaces Atelier mobile app prototype</footer>
</body></html>`;
    downloadFile("villa-amara-moodboard.html", html, "text/html;charset=utf-8");
    toast("Moodboard exported as a document");
  }

  function downloadCalendar() {
    const { date, time, format } = state.consult;
    if (!date || !time) { toast("Choose a date and time first"); return; }
    const start = new Date(`${date}T${time}:00`);
    const end = new Date(start.getTime() + 30 * 60 * 1000);
    const stamp = (d) => `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}T${String(d.getHours()).padStart(2, "0")}${String(d.getMinutes()).padStart(2, "0")}00`;
    const location = format === "Studio" ? "Surfaces Atelier, Jaipur" : format === "Video" ? "Video call (link to follow)" : "Project site";
    const ics = [
      "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Surfaces Atelier//Mobile Prototype//EN", "CALSCALE:GREGORIAN",
      "BEGIN:VEVENT", `UID:consult-${Date.now()}@surfaces-atelier`, `DTSTAMP:${stamp(new Date())}`,
      `DTSTART:${stamp(start)}`, `DTEND:${stamp(end)}`,
      "SUMMARY:Surfaces Atelier consultation", `LOCATION:${location}`,
      `DESCRIPTION:30 minute ${format.toLowerCase()} consultation with Aarav Mehta.`,
      "END:VEVENT", "END:VCALENDAR"
    ].join("\r\n");
    downloadFile("surfaces-atelier-consultation.ics", ics, "text/calendar;charset=utf-8");
    toast("Calendar invite downloaded");
  }

  function materialCard(m) {
    return `<button class="material-card" type="button" data-open-material="${m.id}" aria-label="Open ${m.name}">
      <span class="material-card-media">
        <img src="${img(m.photo, 500)}" alt="${m.name} ${m.family.toLowerCase()} surface" loading="lazy" />
        <span class="material-family">${m.family}</span>
      </span>
      <span class="material-card-body">
        <b>${m.name}</b>
        <small>${m.origin}</small>
        <span class="material-price">${money(m.price)} <i>/ sq ft</i></span>
      </span>
    </button>`;
  }

  /* ---------- Home ---------- */
  function renderHome() {
    const date = new Date();
    $("#todayLabel").textContent = date.toLocaleDateString("en-GB", {
      weekday: "long", day: "numeric", month: "long"
    });

    $("#curatedRow").innerHTML = ["bianco-lasa", "onice-ambra", "terrazzo-cielo", "pietra-grey"]
      .map((id) => materialCard(byId(id))).join("");

    $("#newList").innerHTML = ["verde-alpi", "travertine-silver", "porcelain-alba"].map((id) => {
      const m = byId(id);
      return `<button class="new-row" type="button" data-open-material="${m.id}">
        <img src="${img(m.photo, 200)}" alt="" loading="lazy" />
        <span><b>${m.name}</b><small>${m.family} · ${m.origin}</small></span>
        <span class="new-price">${money(m.price)}</span>
        ${icon("arrow-up-right")}
      </button>`;
    }).join("");
  }

  /* ---------- Explore ---------- */
  function filteredMaterials() {
    const q = state.query.trim().toLowerCase();
    return MATERIALS.filter((m) => {
      if (state.family !== "All" && m.family !== state.family) return false;
      if (state.filters.finish.length && !state.filters.finish.some((f) => m.finishes.includes(f))) return false;
      if (state.filters.tone.length && !state.filters.tone.includes(m.tone)) return false;
      if (state.filters.application.length && !state.filters.application.some((a) => m.applications.includes(a))) return false;
      if (q && ![m.name, m.family, m.origin, m.finish, m.tone].join(" ").toLowerCase().includes(q)) return false;
      return true;
    });
  }

  function sortMaterials(list) {
    const copy = list.slice();
    switch (state.sort) {
      case "Price · low": return copy.sort((a, b) => a.price - b.price);
      case "Price · high": return copy.sort((a, b) => b.price - a.price);
      case "A–Z": return copy.sort((a, b) => a.name.localeCompare(b.name));
      default: return copy;
    }
  }

  function renderExplore() {
    const list = sortMaterials(filteredMaterials());
    $("#resultCount").textContent = `${list.length} surface${list.length === 1 ? "" : "s"}`;
    $("#materialGrid").innerHTML = list.length
      ? list.map(materialCard).join("")
      : `<div class="empty-state" style="grid-column:1/-1">
          <div class="empty-icon">${icon("search")}</div>
          <h3>No surfaces found</h3>
          <p>Try another family or clear a filter to see the full library.</p>
          <button class="btn btn--ghost btn--sm" type="button" id="emptyReset">Reset filters</button>
        </div>`;
    $("#exploreSearch").value = state.query;
    $("#clearExploreSearch").hidden = !state.query;
    $$("#familyChips .chip").forEach((c) => {
      const on = c.dataset.family === state.family;
      c.classList.toggle("is-active", on);
      c.setAttribute("aria-pressed", String(on));
    });
    $("#sortBtn span").textContent = state.sort;
    const empty = $("#emptyReset");
    if (empty) empty.addEventListener("click", resetExplore);
  }

  function resetExplore() {
    state.filters = { finish: [], tone: [], application: [] };
    state.family = "All";
    state.query = "";
    save();
    syncFilterChips();
    renderExplore();
    updateFilterCount();
  }

  /* ---------- Material detail ---------- */
  let detailId = null;
  let detailFinish = null;

  function openMaterial(id) {
    const m = byId(id);
    if (!m) return;
    if (current === "search") {
      const q = $("#searchInput").value.trim();
      if (q) rememberSearch(q);
    }
    detailId = id;
    detailFinish = m.finish;
    renderDetail();
    go("material");
  }

  function renderDetail() {
    const m = byId(detailId);
    if (!m) return;
    const inBox = state.samples.includes(m.id);
    const isSaved = state.saved.includes(m.id);
    $("#detailBody").innerHTML = `
      <div class="detail-image">
        <img src="${img(m.photo, 1000)}" alt="${m.name} surface detail" />
        <div class="detail-scrim"></div>
        <div class="detail-dots" aria-hidden="true"><span class="is-active"></span><span></span><span></span></div>
      </div>
      <div class="detail-sheet">
        <div class="detail-kicker"><span class="micro">${m.family}</span><span class="kicker-dot"></span><span class="micro">${m.origin}</span></div>
        <h1 class="detail-title">${m.name}</h1>
        <p class="detail-desc">${m.desc}</p>
        <div class="detail-price-row">
          <div><strong>${money(m.price)}</strong><span>/ sq ft</span></div>
          <div class="detail-lead"><b>Made to order</b><span class="micro">Ships in 5–7 days</span></div>
        </div>
        <div class="field-label-row">
          <span class="field-label">Finish</span>
          <span class="finish-current" id="finishCurrent">${detailFinish}</span>
        </div>
        <div class="chip-row chip-row--wrap" id="finishChips" role="group" aria-label="Choose a finish">
          ${m.finishes.map((f) => `<button class="chip${f === detailFinish ? " is-active" : ""}" type="button" data-finish="${f}" aria-pressed="${f === detailFinish}">${f}</button>`).join("")}
        </div>
        <p class="finish-note" id="finishNote"></p>
        <div class="spec-grid">
          <div><span class="micro">Thickness</span><b>${m.thickness}</b></div>
          <div><span class="micro">Format</span><b>${m.format}</b></div>
          <div><span class="micro">Tone</span><b>${m.tone}</b></div>
          <div><span class="micro">Batch</span><b>${m.batch}</b></div>
        </div>
        <div class="section-row"><h2 class="section-title">Pairs well with</h2><span class="micro">Curated</span></div>
        <div class="swatch-row">
          ${m.pairs.map((pid) => {
            const p = byId(pid);
            return `<button class="pair-swatch" type="button" data-open-material="${p.id}">
              <img src="${img(p.photo, 220)}" alt="${p.name}" loading="lazy" />
              <span>${p.name}</span>
            </button>`;
          }).join("")}
        </div>
        <div class="detail-note">${icon("info")}<p>Natural stone is a product of the earth. Shade, vein and porosity vary between slabs — we recommend approving a physical sample before ordering.</p></div>
      </div>`;
    $("#detailSave").classList.toggle("is-saved", isSaved);
    $("#detailSave").setAttribute("aria-pressed", String(isSaved));
    $("#detailSave").setAttribute("aria-label", isSaved ? "Remove from saved" : "Save surface");
    $("#detailCta").innerHTML = `
      <button class="btn ${inBox ? "btn--ghost" : "btn--solid"}" id="detailAdd" type="button" style="flex:1">
        ${inBox ? "Remove from sample box" : "Add to sample box"} ${icon(inBox ? "check" : "plus")}
      </button>
      <button class="icon-btn save-btn${isSaved ? " is-saved" : ""}" id="detailSaveInline" type="button" aria-label="Save surface">${icon("heart")}</button>`;
    $("#finishNote").textContent = finishNote(detailFinish);
    $$("#finishChips .chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        detailFinish = chip.dataset.finish;
        $$("#finishChips .chip").forEach((c) => c.classList.toggle("is-active", c === chip));
        $$("#finishChips .chip").forEach((c) => c.setAttribute("aria-pressed", String(c === chip)));
        $("#finishCurrent").textContent = detailFinish;
        $("#finishNote").textContent = finishNote(detailFinish);
        toast(`${detailFinish} finish selected`);
      });
    });
    const add = $("#detailAdd");
    if (add) add.addEventListener("click", () => toggleSample(m.id));
    const inline = $("#detailSaveInline");
    if (inline) inline.addEventListener("click", () => toggleSaved(m.id));
  }

  function finishNote(f) {
    return {
      Honed: "A soft matte surface with a smooth, chalk-like touch. Our most forgiving finish.",
      Polished: "A mirror-bright surface that deepens colour and reflects the room around it.",
      Brushed: "A lightly textured, anti-slip surface with a subtle sheen. Ideal underfoot.",
      Natural: "Unfilled and open-grained, left as close to the quarry as the stone allows."
    }[f] || "";
  }

  /* ---------- Sample box ---------- */
  function toggleSample(id) {
    const i = state.samples.indexOf(id);
    if (i > -1) {
      state.samples.splice(i, 1);
      toast(`${byId(id).name} removed from your box`);
    } else {
      if (state.samples.length >= 5) {
        toast("Your box holds five surfaces — remove one first");
        return;
      }
      state.samples.push(id);
      toast(`${byId(id).name} added to your box`);
    }
    save();
    renderSamples();
    refreshTabbars();
    if (detailId) renderDetail();
  }

  function toggleSaved(id) {
    const i = state.saved.indexOf(id);
    if (i > -1) state.saved.splice(i, 1);
    else state.saved.push(id);
    save();
    if (i === -1) journeyAction("search", "save");
    if (detailId === id) renderDetail();
    toast(i > -1 ? "Removed from saved" : "Saved to your studio");
  }

  function renderSamples() {
    const count = state.samples.length;
    $("#sampleCountHead").textContent = `${count}/5`;
    const body = $("#samplesBody");
    if (!count) {
      body.innerHTML = `<div class="empty-state">
        <div class="empty-icon">${icon("box")}</div>
        <h3>Your box is empty</h3>
        <p>Add up to five surfaces to compare them side by side at home.</p>
        <button class="btn btn--solid btn--sm" type="button" data-goto="explore">Browse the library</button>
      </div>`;
      $("#samplesCta").innerHTML = `<button class="btn btn--ghost btn--wide" type="button" data-goto="explore">Explore surfaces</button>`;
      return;
    }
    body.innerHTML = `
      <div class="sample-progress">
        <span>${count} of 5 selected</span>
        <span class="progress"><i style="width:${(count / 5) * 100}%"></i></span>
      </div>
      <div class="sample-list">
        ${state.samples.map((id) => {
          const m = byId(id);
          return `<div class="sample-item">
            <img src="${img(m.photo, 220)}" alt="${m.name}" loading="lazy" />
            <div class="sample-info"><b>${m.name}</b><span>${m.family} · ${m.finish} · ${m.thickness}</span><span class="sample-price">${money(m.price)} / sq ft</span></div>
            <button class="sample-remove" type="button" data-remove-sample="${m.id}" aria-label="Remove ${m.name}">${icon("trash")}</button>
          </div>`;
        }).join("")}
      </div>
      <div class="info-card" style="margin-top:16px">${icon("info")}<div><b>Complimentary for trade</b><p>Samples arrive in a linen-wrapped box within 2–3 working days. Limit five per request.</p></div></div>
      <div class="section-row"><h2 class="section-title">You might also like</h2><span class="micro">Curated</span></div>
      <div class="h-scroll h-scroll--tight">
        ${["bianco-lasa", "pietra-grey", "terrazzo-cielo", "onice-ambra"].filter((id) => !state.samples.includes(id)).map((id) => materialCard(byId(id))).join("")}
      </div>`;
    $("#samplesCta").innerHTML = `<button class="btn btn--solid btn--wide" type="button" data-goto="request">Request sample box ${icon("arrow-right")}</button>`;
    $$("[data-remove-sample]", body).forEach((btn) => btn.addEventListener("click", () => toggleSample(btn.dataset.removeSample)));
  }

  /* ---------- Request ---------- */
  function renderRequestSummary() {
    const el = $("#requestSummary");
    el.innerHTML = state.samples.length
      ? state.samples.map((id) => `<img src="${img(byId(id).photo, 160)}" alt="${byId(id).name}" />`).join("")
      : `<span class="summary-empty">No surfaces selected yet — add one from the library.</span>`;
  }

  function renderSuccess() {
    const req = state.lastRequest || {};
    $("#successCard").innerHTML = `
      <div class="success-row"><span class="micro">Reference</span><b>${req.ref || "SA-2481"}</b></div>
      <div class="success-row"><span class="micro">Surfaces</span><b>${(req.count || state.samples.length)} selected</b></div>
      <div class="success-row"><span class="micro">Delivery</span><b>2–3 working days</b></div>
      <div class="success-row"><span class="micro">Sent to</span><b>${req.email || "you@studio.com"}</b></div>`;
  }

  /* ---------- Studio ---------- */
  function renderStudio() {
    $("#studioBody").innerHTML = `
      <article class="profile-card">
        <div class="profile-top">
          <span class="avatar avatar--light">AK<span class="online-dot"></span></span>
          <div><b>Ananya Kapoor</b><span>Studio Kapoor · Jaipur</span></div>
          <span class="profile-badge">Trade</span>
        </div>
        <div class="profile-stats">
          <div><strong>${state.saved.length}</strong><span>Saved</span></div>
          <div><strong>${state.samples.length}</strong><span>In box</span></div>
          <div><strong>${state.moodboard.length}</strong><span>Moodboard</span></div>
        </div>
      </article>
      <div class="section-row"><h2 class="section-title">Moodboards</h2><button class="text-link" type="button" data-goto="moodboard">Open</button></div>
      <div style="display:grid;gap:8px">
        <button class="moodboard-card" type="button" data-goto="moodboard">
          <span class="moodboard-stack">
            ${state.moodboard.slice(0, 2).map((id) => `<img src="${img(byId(id).photo, 160)}" alt="" />`).join("")}
            ${state.moodboard.length ? "" : `<span class="stack-empty">${icon("plus")}</span>`}
          </span>
          <span class="moodboard-info"><b>Villa Amara</b><span>${state.moodboard.length} surface${state.moodboard.length === 1 ? "" : "s"} · Edited today</span></span>
          ${icon("arrow-right")}
        </button>
        <button class="moodboard-card" type="button" data-goto="explore">
          <span class="moodboard-stack"><span class="stack-empty">${icon("plus")}</span></span>
          <span class="moodboard-info"><b>New moodboard</b><span>Start a project board</span></span>
          ${icon("plus")}
        </button>
      </div>
      <div class="section-row"><h2 class="section-title">Saved surfaces</h2><span class="micro">${state.saved.length} saved</span></div>
      ${state.saved.length
        ? `<div class="saved-strip">${state.saved.map((id) => savedCardHTML(byId(id))).join("")}</div>`
        : `<p class="consult-note">Tap the heart on any surface to keep it here, then add it to a moodboard.</p>`}
      <div class="section-row"><h2 class="section-title">Recent activity</h2><span class="micro">This week</span></div>
      <div class="activity-list">
        <div class="activity-row"><span class="activity-dot"></span><p><b>Sample box</b> requested — ${state.samples.length} surfaces</p><time>Today</time></div>
        <div class="activity-row"><span class="activity-dot"></span><p><b>Bianco Lasa</b> saved to your studio</p><time>Tue</time></div>
        <div class="activity-row"><span class="activity-dot"></span><p><b>Villa Amara</b> moodboard updated</p><time>Mon</time></div>
      </div>
      <div class="consult-card consult-card--compact">
        <div class="consult-card-top"><span class="micro">Private consultation</span><span class="consult-orb" aria-hidden="true">↗</span></div>
        <h3>Talk it through with us.</h3>
        <p>Thirty minutes with a material advisor, in the studio or on site.</p>
        <button class="btn btn--solid btn--sm" type="button" data-goto="consult">Book a visit</button>
      </div>`;
    $$("[data-add-mood]", $("#studioBody")).forEach((btn) => btn.addEventListener("click", () => {
      addToMoodboard(btn.dataset.addMood);
    }));
  }

  /* ---------- Moodboard ---------- */
  function renderMoodboard() {
    const available = state.saved.filter((id) => !state.moodboard.includes(id));
    const board = state.moodboard.length
      ? `<div class="moodboard-grid">
          ${state.moodboard.map((id) => {
            const m = byId(id);
            return `<article class="moodboard-item">
              <img src="${img(m.photo, 420)}" alt="${m.name}" loading="lazy" />
              <button class="moodboard-remove" type="button" data-remove-mood="${m.id}" aria-label="Remove ${m.name}">${icon("heart")}</button>
              <div class="moodboard-item-body"><b>${m.name}</b><span>${m.family} · ${m.finish}</span>
              <button type="button" data-open-material="${m.id}">View surface</button></div>
            </article>`;
          }).join("")}
          <button class="moodboard-add" type="button" data-goto="explore">${icon("plus")}Add surface</button>
        </div>`
      : `<div class="empty-state">
          <div class="empty-icon">${icon("heart")}</div>
          <h3>No surfaces yet</h3>
          <p>Save surfaces from the library, then add them to this board for your client.</p>
          <button class="btn btn--solid btn--sm" type="button" data-goto="explore">Browse the library</button>
        </div>`;
    $("#moodboardBody").innerHTML = `
      ${board}
      <div class="section-row"><h2 class="section-title">Saved surfaces</h2><span class="micro">${state.saved.length} saved</span></div>
      ${available.length ? `<div class="saved-strip">${available.map((id) => savedCardHTML(byId(id))).join("")}</div>`
        : `<p class="consult-note">Everything you’ve saved is already on this board. Save more surfaces from the library to add them here.</p>`}
      <p class="consult-note">Tap the heart on any surface to save it. Tap + on a saved surface to place it on the board.</p>`;
    $$("[data-remove-mood]", $("#moodboardBody")).forEach((btn) => btn.addEventListener("click", () => {
      state.moodboard = state.moodboard.filter((id) => id !== btn.dataset.removeMood);
      save();
      renderMoodboard();
      toast("Removed from moodboard");
    }));
    $$("[data-add-mood]", $("#moodboardBody")).forEach((btn) => btn.addEventListener("click", () => {
      addToMoodboard(btn.dataset.addMood);
    }));
  }

  /* ---------- Search ---------- */
  function renderSearch() {
    const q = $("#searchInput").value.trim();
    $("#clearSearch").hidden = !q;
    const body = $("#searchBody");
    if (!q) {
      const recent = state.recent.length ? state.recent : ["Travertine", "Calacatta", "Honed"];
      body.innerHTML = `
        <div class="search-block"><p class="micro">Recent searches</p>
          <div class="chip-row chip-row--wrap">
            ${recent.map((term) => `<button class="chip" type="button" data-search-term="${esc(term)}">${esc(term)}</button>`).join("")}
          </div>
        </div>
        <div class="search-block"><p class="micro">Browse by family</p>
          <div class="family-grid">
            ${["Marble", "Travertine", "Porcelain", "Terrazzo"].map((f) => `<button class="family-tile" type="button" data-search-term="${f}">${f}<span>${MATERIALS.filter((m) => m.family === f).length}</span></button>`).join("")}
          </div>
        </div>
        <div class="search-block"><p class="micro">Trending surfaces</p>
          <div class="search-list">
            ${["calacatta-viola", "onice-ambra", "pietra-grey"].map((id) => {
              const m = byId(id);
              return `<button class="search-row" type="button" data-open-material="${m.id}">
                <img src="${img(m.photo, 160)}" alt="" loading="lazy" />
                <span><b>${m.name}</b><small>${m.family} · ${m.origin}</small></span>${icon("arrow-up-right")}
              </button>`;
            }).join("")}
          </div>
        </div>`;
      $$("[data-search-term]", body).forEach((chip) => chip.addEventListener("click", () => {
        $("#searchInput").value = chip.dataset.searchTerm;
        renderSearch();
        $("#searchInput").focus();
      }));
      return;
    }
    const ql = q.toLowerCase();
    const results = MATERIALS.filter((m) => [m.name, m.family, m.origin, m.finish, m.tone, ...m.finishes].join(" ").toLowerCase().includes(ql));
    body.innerHTML = `
      <p class="search-count">${results.length} result${results.length === 1 ? "" : "s"} for “${esc(q)}”</p>
      ${results.length ? `<div class="search-list">
        ${results.map((m) => `<button class="search-row" type="button" data-open-material="${m.id}">
          <img src="${img(m.photo, 160)}" alt="" loading="lazy" />
          <span><b>${m.name}</b><small>${m.family} · ${m.origin} · ${m.finish}</small></span>${icon("arrow-up-right")}
        </button>`).join("")}
      </div>` : `<div class="empty-state"><div class="empty-icon">${icon("search")}</div><h3>Nothing yet</h3><p>Try “marble”, “Italy” or a finish like “honed”.</p></div>`}`;
  }

  /* ---------- Consultation ---------- */
  const TIMES = ["09:30", "11:00", "13:30", "15:00", "16:30", "17:30"];

  function renderConsult() {
    const dates = [];
    const base = new Date();
    for (let i = 0; i < 7; i++) {
      const d = new Date(base.getFullYear(), base.getMonth(), base.getDate() + i);
      dates.push(d);
    }
    $("#dateRow").innerHTML = dates.map((d) => {
      const value = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
      const active = state.consult.date === value;
      return `<button class="date-chip${active ? " is-active" : ""}" type="button" data-date="${value}" aria-pressed="${active}">
        <span>${d.toLocaleDateString("en-GB", { weekday: "short" })}</span>
        <b>${d.getDate()}</b>
        <small>${d.toLocaleDateString("en-GB", { month: "short" })}</small>
      </button>`;
    }).join("");
    $("#timeGrid").innerHTML = TIMES.map((t, i) => {
      const disabled = i === 2;
      const active = state.consult.time === t;
      return `<button class="time-slot${active ? " is-active" : ""}" type="button" data-time="${t}"${disabled ? " disabled" : ""} aria-pressed="${active}">${t}</button>`;
    }).join("");
    $$("#formatControl button").forEach((b) => {
      const on = b.dataset.format === state.consult.format;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", String(on));
    });
    const ready = state.consult.date && state.consult.time;
    const btn = $("#confirmConsult");
    btn.disabled = !ready;
    btn.textContent = ready
      ? `Confirm ${state.consult.format.toLowerCase()} visit`
      : "Choose a date & time";
  }

  function renderConsultSuccess() {
    const { date, time, format } = state.consult;
    const pretty = date ? new Date(date + "T12:00:00").toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" }) : "To be confirmed";
    $("#consultSuccessCard").innerHTML = `
      <div class="success-row"><span class="micro">Date</span><b>${pretty}</b></div>
      <div class="success-row"><span class="micro">Time</span><b>${time || "—"} IST · 30 min</b></div>
      <div class="success-row"><span class="micro">Format</span><b>${format}</b></div>
      <div class="success-row"><span class="micro">Advisor</span><b>Aarav Mehta</b></div>`;
  }

  /* ---------- Screen index ---------- */
  function markIndex() {
    $$("[data-screen-link]").forEach((b) => b.classList.toggle("is-active", b.dataset.screenLink === current));
  }

  /* ---------- Toast ---------- */
  let toastTimer = null;
  function toast(message) {
    const el = $("#toast");
    el.textContent = message;
    el.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("is-visible"), 2200);
  }

  /* ---------- Navigation ---------- */
  function go(screen, options) {
    const opts = options || {};
    if (screen === current && !opts.force) return;
    if (!opts.replace && current !== screen) stack.push(current);
    current = screen;
    $$(".screen").forEach((s) => {
      const active = s.dataset.screen === screen;
      s.classList.toggle("is-active", active);
      s.setAttribute("aria-hidden", String(!active));
    });
    refreshTabbars();
    markIndex();
    if (screen === "samples") renderSamples();
    if (screen === "studio") renderStudio();
    if (screen === "moodboard") renderMoodboard();
    if (screen === "request") renderRequestSummary();
    if (screen === "success") renderSuccess();
    if (screen === "consult") renderConsult();
    if (screen === "consultSuccess") renderConsultSuccess();
    if (screen === "explore") renderExplore();
    if (screen === "search") renderSearch();
    if (screen === "home") renderHome();
    if (screen === "material") renderDetail();
    const activeScreen = $(`.screen[data-screen="${screen}"]`);
    const scroller = activeScreen && activeScreen.querySelector(".screen-body");
    if (scroller) scroller.scrollTop = 0;
    if (activeScreen) activeScreen.focus({ preventScroll: true });
    if (!opts.silent) advanceJourney(screen);
  }

  function back() {
    const prev = stack.pop() || "home";
    go(prev, { back: true, replace: true });
  }

  /* ---------- Journeys ---------- */
  function startJourney(key) {
    activeJourney = key;
    journeyStep = 0;
    $$(".journey-card").forEach((c) => c.classList.toggle("is-active", c.dataset.journey === key));
    const journey = JOURNEYS[key];
    go(journey.steps[0].screen, { force: true, silent: true });
    journeyStep = 1;
    showCoach(journey.title, journey.steps[1].hint, 2);
    if (key === "search" && journey.steps[0].screen === "search") {
      setTimeout(() => $("#searchInput").focus(), 350);
    }
  }

  function advanceJourney(screen) {
    if (!activeJourney) return;
    const journey = JOURNEYS[activeJourney];
    if (journeyStep < journey.steps.length && journey.steps[journeyStep].screen === screen) {
      journeyStep += 1;
    }
    if (journeyStep >= journey.steps.length) {
      showCoach(journey.title, "Journey complete — explore freely or start another journey.", "✓", true);
      return;
    }
    showCoach(journey.title, journey.steps[journeyStep].hint, journeyStep + 1);
  }

  function journeyAction(key, action) {
    if (activeJourney !== key) return;
    const journey = JOURNEYS[key];
    if (key === "search" && action === "save" && journeyStep === 2) {
      journeyStep = 3;
    } else if (key === "search" && action === "moodboard-add" && journeyStep === 4) {
      journeyStep = 5;
    } else if (key === "consult" && action === "datetime" && journeyStep === 1) {
      journeyStep = 2;
    } else {
      return;
    }
    if (journeyStep >= journey.steps.length) {
      showCoach(journey.title, "Journey complete — explore freely or start another journey.", "✓", true);
      return;
    }
    showCoach(journey.title, journey.steps[journeyStep].hint, journeyStep + 1);
  }

  function showCoach(title, hint, step, complete) {
    const coach = $("#coach");
    coach.hidden = false;
    coach.classList.toggle("is-complete", !!complete);
    $("#coachTitle").textContent = title;
    $("#coachHint").textContent = hint;
    $("#coachStep").textContent = typeof step === "number" ? String(step).padStart(2, "0") : step;
  }

  function endJourney() {
    activeJourney = null;
    journeyStep = 0;
    $("#coach").hidden = true;
    $$(".journey-card").forEach((c) => c.classList.remove("is-active"));
  }

  /* ---------- Filters ---------- */
  function updateFilterCount() {
    $("#filterCount").textContent = filteredMaterials().length;
    $("#applyFilters").innerHTML = `Show <span id="filterCount">${filteredMaterials().length}</span> surfaces`;
  }

  function syncFilterChips() {
    [["#finishFilters", "finish"], ["#toneFilters", "tone"], ["#applicationFilters", "application"]].forEach(([sel, group]) => {
      $$(sel + " .chip").forEach((c) => {
        const on = state.filters[group].includes(c.dataset.filterValue);
        c.classList.toggle("is-active", on);
        c.setAttribute("aria-pressed", String(on));
      });
    });
  }

  function openFilters() {
    syncFilterChips();
    updateFilterCount();
    $("#filterSheet").classList.add("is-open");
    $("#filterSheet").setAttribute("aria-hidden", "false");
    $("#sheetBackdrop").classList.add("is-open");
    $("#closeFilters").focus();
  }

  function closeFilters() {
    $("#filterSheet").classList.remove("is-open");
    $("#filterSheet").setAttribute("aria-hidden", "true");
    $("#sheetBackdrop").classList.remove("is-open");
  }

  /* ---------- Global events ---------- */
  document.addEventListener("click", (e) => {
    const goto = e.target.closest("[data-goto]");
    if (goto) { go(goto.dataset.goto); return; }

    const tab = e.target.closest("[data-tab]");
    if (tab) { go(tab.dataset.tab); return; }

    const open = e.target.closest("[data-open-material]");
    if (open) { openMaterial(open.dataset.openMaterial); return; }

    const backBtn = e.target.closest("[data-back]");
    if (backBtn) { back(); return; }

    const indexBtn = e.target.closest("[data-screen-link]");
    if (indexBtn) {
      const target = indexBtn.dataset.screenLink;
      if (target === "material") { openMaterial(detailId || "calacatta-viola"); return; }
      if (target === "success") { renderSuccess(); }
      if (target === "consultSuccess") { renderConsultSuccess(); }
      go(target);
      return;
    }

    const shareBtn = e.target.closest("[data-share]");
    if (shareBtn) { shareCurrent(shareBtn.dataset.share); return; }

    const exportBtn = e.target.closest("[data-export]");
    if (exportBtn) { if (exportBtn.dataset.export === "moodboard") exportMoodboard(); return; }

    const calendarBtn = e.target.closest("[data-calendar]");
    if (calendarBtn) { downloadCalendar(); return; }

    const toastBtn = e.target.closest("[data-toast]");
    if (toastBtn) { toast(toastBtn.dataset.toast); return; }

    const journeyBtn = e.target.closest(".journey-card");
    if (journeyBtn) { startJourney(journeyBtn.dataset.journey); return; }
  });

  /* Search bar on home */
  document.addEventListener("click", (e) => {
    if (e.target.closest("[data-open-search]")) {
      go("search");
      setTimeout(() => $("#searchInput").focus(), 320);
    }
  });

  $("#coachClose").addEventListener("click", endJourney);

  /* Reset */
  $("#resetPrototype").addEventListener("click", () => {
    state = defaults();
    try { localStorage.removeItem(STORAGE_KEY); } catch (err) { /* ignore */ }
    detailId = null;
    detailFinish = null;
    stack.length = 0;
    endJourney();
    const form = $("#requestForm");
    if (form) {
      form.reset();
      $$(".field", form).forEach((field) => field.classList.remove("is-invalid", "is-valid"));
      $$(".field-error", form).forEach((error) => error.remove());
    }
    if ($("#filterSheet").classList.contains("is-open")) closeFilters();
    renderHome();
    refreshTabbars();
    go("home", { force: true, replace: true });
    toast("Prototype reset");
  });

  /* Explore */
  $("#exploreSearch").addEventListener("input", (e) => {
    state.query = e.target.value;
    renderExplore();
  });
  $("#clearExploreSearch").addEventListener("click", () => {
    state.query = "";
    renderExplore();
    $("#exploreSearch").focus();
  });
  $("#familyChips").addEventListener("click", (e) => {
    const chip = e.target.closest("[data-family]");
    if (!chip) return;
    state.family = chip.dataset.family;
    save();
    renderExplore();
  });
  $("#sortBtn").addEventListener("click", () => {
    const order = ["Featured", "Price · low", "Price · high", "A–Z"];
    state.sort = order[(order.indexOf(state.sort) + 1) % order.length];
    save();
    renderExplore();
    toast(`Sorted by ${state.sort.toLowerCase()}`);
  });

  /* Filters sheet */
  $("#openFilters").addEventListener("click", openFilters);
  $("#closeFilters").addEventListener("click", closeFilters);
  $("#sheetBackdrop").addEventListener("click", closeFilters);
  $("#resetFilters").addEventListener("click", () => {
    state.filters = { finish: [], tone: [], application: [] };
    syncFilterChips();
    updateFilterCount();
  });
  $("#applyFilters").addEventListener("click", () => {
    closeFilters();
    renderExplore();
    toast(`Showing ${filteredMaterials().length} surfaces`);
  });
  $("#filterSheet").addEventListener("click", (e) => {
    const chip = e.target.closest("[data-filter-group]");
    if (!chip) return;
    const group = chip.dataset.filterGroup;
    const value = chip.dataset.filterValue;
    const list = state.filters[group];
    const i = list.indexOf(value);
    if (i > -1) list.splice(i, 1); else list.push(value);
    chip.classList.toggle("is-active", i === -1);
    chip.setAttribute("aria-pressed", String(i === -1));
    updateFilterCount();
  });

  /* Detail save (header) */
  $("#detailSave").addEventListener("click", () => { if (detailId) toggleSaved(detailId); });

  /* Search */
  $("#searchInput").addEventListener("input", renderSearch);
  $("#clearSearch").addEventListener("click", () => {
    $("#searchInput").value = "";
    renderSearch();
    $("#searchInput").focus();
  });

  /* Request form */
  function fieldWrap(el) {
    return el.closest(".field");
  }

  function fieldMessage(el) {
    const name = el.getAttribute("name");
    if (name === "name") return "Please enter your full name.";
    if (name === "email") {
      if (!el.value.trim()) return "Please enter your email address.";
      return "That email doesn’t look right — check the format.";
    }
    if (name === "project") return "Choose the type of project.";
    if (name === "address") return "Add a delivery address for the box.";
    return "This field is required.";
  }

  function validateField(el) {
    const wrap = fieldWrap(el);
    if (!wrap) return true;
    let error = wrap.querySelector(".field-error");
    if (!error) {
      error = document.createElement("p");
      error.className = "field-error";
      error.innerHTML = `<svg class="icon" aria-hidden="true"><use href="#i-close" /></svg><span></span>`;
      wrap.appendChild(error);
    }
    const valid = el.checkValidity();
    wrap.classList.toggle("is-invalid", !valid);
    wrap.classList.toggle("is-valid", valid && Boolean(el.value.trim()));
    error.querySelector("span").textContent = valid ? "" : fieldMessage(el);
    el.setAttribute("aria-invalid", String(!valid));
    return valid;
  }

  function validateRequestForm(form) {
    const fields = $$("input[required], select[required], textarea[required]", form);
    let firstInvalid = null;
    fields.forEach((el) => {
      if (!validateField(el) && !firstInvalid) firstInvalid = el;
    });
    if (firstInvalid) {
      firstInvalid.focus({ preventScroll: false });
      firstInvalid.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    return !firstInvalid;
  }

  $("#requestForm").addEventListener("submit", (e) => {
    e.preventDefault();
    if (!state.samples.length) {
      toast("Add at least one surface to your box");
      go("samples");
      return;
    }
    const form = e.target;
    if (!validateRequestForm(form)) {
      toast("Please complete the highlighted fields");
      return;
    }
    state.lastRequest = {
      ref: "SA-" + Math.floor(1000 + Math.random() * 9000),
      count: state.samples.length,
      email: $("#reqEmail").value.trim()
    };
    save();
    go("success");
  });
  $("#requestForm").addEventListener("input", (e) => {
    if (!e.target.matches("input, select, textarea")) return;
    if (fieldWrap(e.target)?.classList.contains("is-invalid")) validateField(e.target);
  });
  $("#requestForm").addEventListener("change", (e) => {
    if (e.target.matches("select")) validateField(e.target);
  });

  /* Consultation */
  $("#dateRow").addEventListener("click", (e) => {
    const chip = e.target.closest("[data-date]");
    if (!chip) return;
    state.consult.date = chip.dataset.date;
    save();
    renderConsult();
    journeyAction("consult", "datetime");
  });
  $("#timeGrid").addEventListener("click", (e) => {
    const slot = e.target.closest("[data-time]");
    if (!slot || slot.disabled) return;
    state.consult.time = slot.dataset.time;
    save();
    renderConsult();
    journeyAction("consult", "datetime");
  });
  $("#formatControl").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-format]");
    if (!btn) return;
    state.consult.format = btn.dataset.format;
    save();
    renderConsult();
  });
  $("#confirmConsult").addEventListener("click", () => {
    if (!state.consult.date || !state.consult.time) return;
    go("consultSuccess");
    toast("Consultation confirmed");
  });

  /* Studio settings */
  $("#settingsBtn").addEventListener("click", () => toast("Settings are outside this prototype"));

  /* Escape + keyboard */
  document.addEventListener("keydown", (e) => {
    if ((e.key === "Enter" || e.key === " ") && e.target.matches('[data-open-material][role="button"]')) {
      e.preventDefault();
      openMaterial(e.target.dataset.openMaterial);
      return;
    }
    if (e.key === "Escape") {
      if ($("#filterSheet").classList.contains("is-open")) closeFilters();
      else if (!$("#coach").hidden) endJourney();
    }
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      go("search");
      setTimeout(() => $("#searchInput").focus(), 320);
    }
  });

  /* ---------- Boot ---------- */
  renderHome();
  renderExplore();
  renderSamples();
  renderStudio();
  renderMoodboard();
  renderConsult();
  refreshTabbars();
  markIndex();
  $$(".screen").forEach((s) => s.setAttribute("aria-hidden", String(s.dataset.screen !== "home")));
  $$("[data-tabbar]").forEach((nav) => { nav.innerHTML = tabbarHTML(); });
})();
