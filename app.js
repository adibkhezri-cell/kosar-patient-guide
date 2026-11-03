/* راهنمای الکترونیکی «بیمارستان من»
   داده‌ها ابتدا از data.json خوانده می‌شوند؛ اگر در دسترس نبود، نسخه نمونه داخل همین فایل استفاده می‌شود. */
const FALLBACK = {
 "records": [
  {
   "category": "مراجعه و پذیرش",
   "title": "پذیرش و بستری",
   "short": "مدارک و مراحل ورود",
   "description": "اطلاعات مربوط به تشکیل پرونده، مدارک لازم و مراحل بستری بیمار. این متن نمونه است و باید توسط بیمارستان تکمیل و تأیید شود.",
   "phone": "",
   "address": "",
   "icon": "bed",
   "featured": true
  },
  {
   "category": "بخش‌ها و خدمات",
   "title": "درمانگاه‌ها",
   "short": "برنامه پزشکان",
   "description": "فهرست درمانگاه‌ها، تخصص‌های ارائه‌شده و اطلاعات مراجعه. برنامه پزشکان باید پیش از انتشار تأیید شود.",
   "phone": "",
   "address": "",
   "icon": "clinic",
   "featured": true
  },
  {
   "category": "مقررات و حقوق بیمار",
   "title": "ساعات و مقررات ملاقات",
   "short": "ساعت و مقررات",
   "description": "ساعات ملاقات، مقررات حضور همراه و محدودیت‌های احتمالی. ساعت دقیق باید از مدیریت پرستاری دریافت شود.",
   "phone": "",
   "address": "",
   "icon": "clock",
   "featured": true
  },
  {
   "category": "بخش‌ها و خدمات",
   "title": "آزمایشگاه و تصویربرداری",
   "short": "",
   "description": "راهنمای دسترسی و اطلاعات عمومی خدمات تشخیصی بیمارستان.",
   "phone": "",
   "address": "",
   "icon": "flask",
   "featured": false
  },
  {
   "category": "مراجعه و پذیرش",
   "title": "ترخیص و مدارک",
   "short": "",
   "description": "مراحل اداری ترخیص، دریافت مدارک و پیگیری توصیه‌های پس از ترخیص.",
   "phone": "",
   "address": "",
   "icon": "exit",
   "featured": false
  },
  {
   "category": "مقررات و حقوق بیمار",
   "title": "حقوق بیمار و ثبت شکایت",
   "short": "",
   "description": "آشنایی با حقوق بیمار، حفظ حریم خصوصی، احترام، دریافت اطلاعات و مسیر ثبت شکایت.",
   "phone": "",
   "address": "",
   "icon": "scales",
   "featured": false
  },
  {
   "category": "امکانات و مسیریابی",
   "title": "امکانات رفاهی",
   "short": "",
   "description": "اطلاعات مربوط به سرویس‌های بهداشتی، نمازخانه، بوفه، آبخوری و سایر امکانات.",
   "phone": "",
   "address": "",
   "icon": "home",
   "featured": false
  },
  {
   "category": "ارتباط با بیمارستان",
   "title": "تلفن‌ها و آدرس",
   "short": "",
   "description": "شماره تماس واحدهای پاسخگو، آدرس بیمارستان و نحوه دسترسی (ورودی‌ها و پارکینگ).",
   "phone": "",
   "address": "",
   "icon": "phone",
   "featured": false
  },
  {
   "category": "مراجعه و پذیرش",
   "title": "بیمه‌های طرف قرارداد",
   "short": "",
   "description": "فهرست بیمه‌های طرف قرارداد و مدارک موردنیاز. فهرست دقیق باید توسط واحد مسئول تأیید شود.",
   "phone": "",
   "address": "",
   "icon": "card",
   "featured": false
  },
  {
   "category": "بخش‌ها و خدمات",
   "title": "داروخانه",
   "short": "",
   "description": "ساعات کار و محل داروخانه. اطلاعات باید توسط بیمارستان تأیید شود.",
   "phone": "",
   "address": "",
   "icon": "bottle",
   "featured": false
  }
 ],
 "contacts": [
  {
   "category": "ارتباط با بیمارستان",
   "title": "تلفن مرکزی بیمارستان",
   "description": "شماره تماس اصلی بیمارستان",
   "phone": "",
   "address": "",
   "icon": "phone"
  },
  {
   "category": "ارتباط با بیمارستان",
   "title": "واحد اطلاعات",
   "description": "پاسخگویی و راهنمایی مراجعان",
   "phone": "",
   "address": "",
   "icon": "phone"
  },
  {
   "category": "ارتباط با بیمارستان",
   "title": "پذیرش",
   "description": "اطلاعات پذیرش و تشکیل پرونده",
   "phone": "",
   "address": "",
   "icon": "phone"
  }
 ],
 "emergency": {
  "title": "اورژانس ۲۴ ساعته",
  "text": "در شرایط فوری تماس بگیرید",
  "phone": "115"
 },
 "route": {
  "lostHelp": "نزدیک‌ترین کد QR یا تابلو را پیدا کنید و اسکن کنید، یا از پذیرش و نگهبانی کمک بگیرید. سپس همان‌جا را به‌عنوان نقطه شروع انتخاب کنید.",
  "nodes": [
   {
    "id": "G-ENT",
    "name": "ورودی اصلی",
    "floor": "همکف",
    "origin": true
   },
   {
    "id": "G-A",
    "name": "مقابل اورژانس و پذیرش",
    "floor": "همکف",
    "origin": false
   },
   {
    "id": "G-B",
    "name": "مقابل آزمایشگاه و داروخانه",
    "floor": "همکف",
    "origin": false
   },
   {
    "id": "G-ST",
    "name": "کنار پله‌ها",
    "floor": "همکف",
    "origin": true
   },
   {
    "id": "G-C",
    "name": "مقابل رادیولوژی",
    "floor": "همکف",
    "origin": false
   },
   {
    "id": "G-E1",
    "name": "مقابل آسانسور ۱",
    "floor": "همکف",
    "origin": true
   },
   {
    "id": "F2-E1",
    "name": "مقابل آسانسور ۱",
    "floor": "طبقه ۲",
    "origin": true
   },
   {
    "id": "F2-EYE",
    "name": "مقابل درمانگاه چشم",
    "floor": "طبقه ۲",
    "origin": false
   },
   {
    "id": "F2-ST",
    "name": "کنار پله‌ها",
    "floor": "طبقه ۲",
    "origin": true
   },
   {
    "id": "F2-HEART",
    "name": "مقابل درمانگاه قلب",
    "floor": "طبقه ۲",
    "origin": false
   },
   {
    "id": "F2-INT",
    "name": "مقابل درمانگاه داخلی",
    "floor": "طبقه ۲",
    "origin": false
   }
  ],
  "edges": [
   {
    "from": "G-ENT",
    "to": "G-A",
    "text": "از ورودی اصلی وارد راهرو شوید و مستقیم بروید. اورژانس سمت راست و پذیرش سمت چپ شماست.",
    "stairs": false
   },
   {
    "from": "G-A",
    "to": "G-B",
    "text": "مستقیم ادامه دهید. آزمایشگاه سمت راست و داروخانه سمت چپ شماست.",
    "stairs": false
   },
   {
    "from": "G-B",
    "to": "G-ST",
    "text": "ادامه دهید تا به پله‌ها برسید (سمت چپ).",
    "stairs": false
   },
   {
    "from": "G-ST",
    "to": "G-C",
    "text": "چند قدم جلوتر بروید؛ رادیولوژی سمت راست شماست.",
    "stairs": false
   },
   {
    "from": "G-C",
    "to": "G-E1",
    "text": "تا انتهای راهرو بروید؛ آسانسور سمت چپ شماست.",
    "stairs": false
   },
   {
    "from": "G-E1",
    "to": "G-C",
    "text": "از درِ آسانسور به راهرو بروید و به راست بپیچید؛ رادیولوژی سمت چپ شماست.",
    "stairs": false
   },
   {
    "from": "G-C",
    "to": "G-ST",
    "text": "مستقیم ادامه دهید؛ پله‌ها سمت راست شماست.",
    "stairs": false
   },
   {
    "from": "G-ST",
    "to": "G-B",
    "text": "مستقیم ادامه دهید.",
    "stairs": false
   },
   {
    "from": "G-B",
    "to": "G-A",
    "text": "ادامه دهید. داروخانه سمت راست و آزمایشگاه سمت چپ شماست.",
    "stairs": false
   },
   {
    "from": "G-A",
    "to": "G-ENT",
    "text": "مستقیم تا ورودی اصلی بروید. پذیرش سمت راست و اورژانس سمت چپ شماست.",
    "stairs": false
   },
   {
    "from": "G-E1",
    "to": "F2-E1",
    "text": "با آسانسور به طبقه ۲ بروید.",
    "stairs": false
   },
   {
    "from": "F2-E1",
    "to": "G-E1",
    "text": "با آسانسور به طبقه همکف بروید.",
    "stairs": false
   },
   {
    "from": "G-ST",
    "to": "F2-ST",
    "text": "از پله‌ها به طبقه ۲ بروید.",
    "stairs": true
   },
   {
    "from": "F2-ST",
    "to": "G-ST",
    "text": "از پله‌ها به طبقه همکف بروید.",
    "stairs": true
   },
   {
    "from": "F2-E1",
    "to": "F2-EYE",
    "text": "از آسانسور خارج شوید و به راست بپیچید. درمانگاه چشم سمت چپ شماست.",
    "stairs": false
   },
   {
    "from": "F2-EYE",
    "to": "F2-ST",
    "text": "مستقیم بروید؛ پله‌ها سمت راست شماست.",
    "stairs": false
   },
   {
    "from": "F2-ST",
    "to": "F2-HEART",
    "text": "مستقیم ادامه دهید. درمانگاه قلب (اتاق ۲۰۳) سمت چپ شماست.",
    "stairs": false
   },
   {
    "from": "F2-HEART",
    "to": "F2-INT",
    "text": "ادامه دهید. درمانگاه داخلی سمت چپ و بخش بستری سمت راست شماست.",
    "stairs": false
   },
   {
    "from": "F2-INT",
    "to": "F2-HEART",
    "text": "به سمت آسانسور برگردید (سمت چپ راهرو). درمانگاه قلب سمت راست شماست.",
    "stairs": false
   },
   {
    "from": "F2-HEART",
    "to": "F2-ST",
    "text": "مستقیم ادامه دهید؛ پله‌ها سمت چپ شماست.",
    "stairs": false
   },
   {
    "from": "F2-ST",
    "to": "F2-EYE",
    "text": "مستقیم بروید؛ درمانگاه چشم سمت راست شماست.",
    "stairs": false
   },
   {
    "from": "F2-EYE",
    "to": "F2-E1",
    "text": "تا انتهای راهرو بروید؛ آسانسور سمت چپ شماست.",
    "stairs": false
   }
  ],
  "destinations": [
   {
    "name": "اورژانس",
    "node": "G-A",
    "final": "درِ اورژانس سمت راست شماست."
   },
   {
    "name": "پذیرش",
    "node": "G-A",
    "final": "درِ پذیرش سمت چپ شماست."
   },
   {
    "name": "آزمایشگاه",
    "node": "G-B",
    "final": "درِ آزمایشگاه سمت راست شماست."
   },
   {
    "name": "داروخانه",
    "node": "G-B",
    "final": "درِ داروخانه سمت چپ شماست."
   },
   {
    "name": "رادیولوژی",
    "node": "G-C",
    "final": "درِ رادیولوژی سمت راست شماست."
   },
   {
    "name": "درمانگاه چشم",
    "node": "F2-EYE",
    "final": "درِ درمانگاه چشم سمت چپ شماست."
   },
   {
    "name": "درمانگاه قلب (اتاق ۲۰۳)",
    "node": "F2-HEART",
    "final": "درِ درمانگاه قلب سمت چپ شماست."
   },
   {
    "name": "درمانگاه داخلی",
    "node": "F2-INT",
    "final": "درِ درمانگاه داخلی سمت چپ شماست."
   },
   {
    "name": "بخش بستری",
    "node": "F2-INT",
    "final": "ورودی بخش بستری سمت راست شماست."
   },
   {
    "name": "ورودی اصلی و خروج",
    "node": "G-ENT",
    "final": "به ورودی اصلی رسیدید."
   },
   {
    "name": "آسانسور ۱ (همکف)",
    "node": "G-E1",
    "final": "درِ آسانسور سمت چپ شماست."
   },
   {
    "name": "آسانسور ۱ (طبقه ۲)",
    "node": "F2-E1",
    "final": "درِ آسانسور روبه‌روی شماست."
   },
   {
    "name": "پله‌ها (همکف)",
    "node": "G-ST",
    "final": "پله‌ها سمت چپ شماست."
   },
   {
    "name": "پله‌ها (طبقه ۲)",
    "node": "F2-ST",
    "final": "پله‌ها کنار شماست."
   }
  ]
 }
};
let DATA = clone(FALLBACK);
const $ = id => document.getElementById(id);
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const fa = n => Number(n).toLocaleString("fa-IR");
function clone(o){ return JSON.parse(JSON.stringify(o)); }
const ICON_IDS = ["bed","clinic","clock","flask","exit","scales","home","phone","card","bottle","plus","pin","swap","qr","map","route","ambulance","clip","check","stairs","lift"];
function iconHtml(k){
  k = String(k || "").trim();
  if (ICON_IDS.includes(k)) return `<svg class="ico" aria-hidden="true"><use href="#i-${k}"/></svg>`;
  return `<span aria-hidden="true">${esc(k || "•")}</span>`;
}
const telHref = p => "tel:" + String(p).replace(/[^0-9+]/g, "");

/* ---------- خدمات و تماس ---------- */
function renderServices(){
  const recs = DATA.records || [];
  let big = recs.filter(r => r.featured);
  if (!big.length) big = recs.slice(0, 3);
  const rest = recs.filter(r => !big.includes(r));
  $("bigGrid").innerHTML = big.map(r =>
    `<button class="big" type="button" data-i="${recs.indexOf(r)}"><span class="bi">${iconHtml(r.icon)}</span><b>${esc(r.title)}</b><small>${esc(r.short || "")}</small></button>`).join("");
  $("serviceList").innerHTML = rest.map(r =>
    `<button class="row" type="button" data-i="${recs.indexOf(r)}"><span class="ri">${iconHtml(r.icon)}</span><span class="rt">${esc(r.title)}</span><span class="rc"><svg class="ico" aria-hidden="true"><use href="#i-chev"/></svg></span></button>`).join("");
  $("contactCards").innerHTML = (DATA.contacts || []).map(c =>
    `<div class="contact"><b>${esc(c.title)}</b><span>${esc(c.description)}</span><br>${c.phone ? `<a href="${telHref(c.phone)}">${esc(c.phone)}</a>` : "<span>شماره تماس پس از تأیید درج شود</span>"}</div>`).join("");
  const em = DATA.emergency || {};
  $("sosTitle").textContent = em.title || "اورژانس";
  $("sosText").textContent = em.text || "";
  const call = $("sosCall");
  if (em.phone) { call.href = telHref(em.phone); call.hidden = false; } else { call.hidden = true; }
}
function showDetail(r){
  $("dialogBody").innerHTML = `<div class="dlg-ic">${iconHtml(r.icon)}</div><h3>${esc(r.title)}</h3><p>${esc(r.description)}</p><div class="detail-meta">${r.address ? `<div><strong>محل:</strong> ${esc(r.address)}</div>` : ""}${r.phone ? `<div><strong>تلفن:</strong> <a href="${telHref(r.phone)}">${esc(r.phone)}</a></div>` : ""}</div>`;
  $("detailDialog").showModal();
}
document.addEventListener("click", e => {
  const b = e.target.closest("[data-i]");
  if (b && (b.classList.contains("big") || b.classList.contains("row"))) showDetail(DATA.records[Number(b.dataset.i)]);
});
$("dialogClose").addEventListener("click", () => $("detailDialog").close());
$("detailDialog").addEventListener("click", e => { if (e.target === $("detailDialog")) $("detailDialog").close(); });

/* ---------- مسیریابی ---------- */
function floorsOf(nodes){ const f = []; nodes.forEach(n => { if (!f.includes(n.floor)) f.push(n.floor); }); return f; }
function nodeById(id){ return (DATA.route.nodes || []).find(n => n.id === id); }
function fillSelects(keepFrom, keepTo){
  const R = DATA.route || {nodes:[],edges:[],destinations:[]};
  const floors = floorsOf(R.nodes);
  let h = `<option value="">انتخاب کنید</option>`;
  floors.forEach(fl => {
    const items = R.nodes.filter(n => n.floor === fl && n.origin);
    if (items.length) h += `<optgroup label="${esc(fl)}">` + items.map(n => `<option value="${esc(n.id)}">${esc(fl)} – ${esc(n.name)}</option>`).join("") + `</optgroup>`;
  });
  h += `<option value="?">نمی‌دانم کجا هستم</option>`;
  $("fromSelect").innerHTML = h;
  let t = `<option value="">انتخاب کنید</option>`;
  floors.forEach(fl => {
    const items = R.destinations.map((d, i) => ({d, i, n: nodeById(d.node)})).filter(x => x.n && x.n.floor === fl)
      .sort((a, b) => a.d.name.localeCompare(b.d.name, "fa"));
    if (items.length) t += `<optgroup label="${esc(fl)}">` + items.map(x => `<option value="${x.i}">${esc(x.d.name)} – ${esc(fl)}</option>`).join("") + `</optgroup>`;
  });
  $("toSelect").innerHTML = t;
  if (keepFrom) $("fromSelect").value = keepFrom;
  if (keepTo !== undefined && keepTo !== null) $("toSelect").value = keepTo;
}
function findRoute(from, to, accessible){
  const R = DATA.route, ids = {};
  R.nodes.forEach(n => ids[n.id] = Infinity);
  if (!(from in ids) || !(to in ids)) return null;
  if (from === to) return [];
  const edges = R.edges.filter(e => !(accessible && e.stairs));
  const prev = {}, done = {};
  ids[from] = 0;
  for (;;) {
    let u = null, best = Infinity;
    for (const id in ids) if (!done[id] && ids[id] < best) { best = ids[id]; u = id; }
    if (u === null || u === to) break;
    done[u] = 1;
    edges.forEach(e => {
      if (e.from !== u || !(e.to in ids)) return;
      const w = Number(e.weight) || 1;
      if (ids[u] + w < ids[e.to]) { ids[e.to] = ids[u] + w; prev[e.to] = e; }
    });
  }
  if (!prev[to]) return null;
  const path = []; let c = to;
  while (c !== from) { const e = prev[c]; path.unshift(e); c = e.from; }
  return path;
}
function say(html, cls){ const r = $("routeResult"); r.hidden = false; r.innerHTML = `<div class="msg ${cls || ""}">${html}</div>`; }
function showRoute(){
  const from = $("fromSelect").value, toIdx = $("toSelect").value;
  if (from === "?") { say(esc(DATA.route.lostHelp || "از پذیرش یا نگهبانی کمک بگیرید.")); return; }
  if (!from || toIdx === "") { say("لطفاً هم «کجا هستید؟» و هم «مقصد» را انتخاب کنید.", "err"); return; }
  const dest = DATA.route.destinations[Number(toIdx)];
  const a = nodeById(from), b = nodeById(dest.node);
  const path = findRoute(from, dest.node, $("accessible").checked);
  if (path === null) {
    say($("accessible").checked ? "برای این مسیر راه بدون پله ثبت نشده است. گزینه «مسیر بدون پله» را بردارید یا از پذیرش کمک بگیرید." : "برای این مسیر راهنمایی ثبت نشده است. لطفاً از پذیرش کمک بگیرید.", "err"); return;
  }
  let li = "";
  path.forEach((e, i) => {
    const n1 = nodeById(e.from), n2 = nodeById(e.to);
    const chip = n1 && n2 && n1.floor !== n2.floor
      ? `<em class="chip"><svg class="ico" aria-hidden="true"><use href="#i-${e.stairs ? "stairs" : "lift"}"/></svg>${esc(n1.floor)} ← ${esc(n2.floor)}</em>` : "";
    li += `<li><span class="sn">${fa(i + 1)}</span><div><p>${esc(e.text)}</p>${chip}</div></li>`;
  });
  li += `<li class="fin"><span class="sn"><svg class="ico" aria-hidden="true" style="width:20px;height:20px;stroke-width:2.6"><use href="#i-check"/></svg></span><div><p>رسیدید: ${esc(dest.name)}${dest.final ? " — " + esc(dest.final) : ""}</p></div></li>`;
  const r = $("routeResult"); r.hidden = false;
  r.innerHTML = `<div class="res-head"><b>مسیر شما</b><span>${fa(path.length + 1)} گام</span></div><div class="res-sub">از «${esc(a.floor)} – ${esc(a.name)}» تا «${esc(dest.name)}»</div><ol class="steps">${li}</ol>`;
  r.scrollIntoView({behavior: "smooth", block: "nearest"});
}
$("routeButton").addEventListener("click", showRoute);
$("swapButton").addEventListener("click", () => {
  const from = $("fromSelect").value, toIdx = $("toSelect").value;
  const R = DATA.route;
  const dest = toIdx === "" ? null : R.destinations[Number(toIdx)];
  const newFrom = dest && nodeById(dest.node) && nodeById(dest.node).origin ? dest.node : "";
  const j = from && from !== "?" ? R.destinations.findIndex(d => d.node === from) : -1;
  $("fromSelect").value = newFrom;
  $("toSelect").value = j >= 0 ? String(j) : "";
  if (dest && !newFrom) say("این مقصد نقطه شروع ثابت ندارد. لطفاً نزدیک‌ترین نقطه شناخته‌شده (آسانسور، پله یا ورودی) را به‌عنوان «کجا هستید؟» انتخاب کنید.");
  else $("routeResult").hidden = true;
});
["fromSelect", "toSelect", "accessible"].forEach(id => $(id).addEventListener("change", () => { $("routeResult").hidden = true; }));
function applyQR(){
  const code = new URLSearchParams(location.search).get("from");
  const n = code && nodeById(code);
  if (n && n.origin) {
    $("fromSelect").value = n.id;
    const h = $("qrHint"); h.textContent = `نقطه شروع شما: ${n.floor} – ${n.name}`; h.parentElement.classList.add("on");
    setTimeout(() => $("route").scrollIntoView({behavior: "smooth", block: "start"}), 150);
  }
}

/* ---------- منو (باز/بسته با دکمه، بیرون، انتخاب گزینه و Escape) ---------- */
const menuButton = $("menuButton"), mainNav = $("mainNav");
function closeMenu(){ mainNav.classList.remove("open"); menuButton.setAttribute("aria-expanded", "false"); }
menuButton.addEventListener("click", e => { e.stopPropagation(); const o = mainNav.classList.toggle("open"); menuButton.setAttribute("aria-expanded", o ? "true" : "false"); });
document.addEventListener("click", e => { if (!mainNav.contains(e.target) && !menuButton.contains(e.target)) closeMenu(); });
mainNav.addEventListener("click", e => { if (e.target.closest("a")) closeMenu(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeMenu(); });
document.querySelectorAll(".tab").forEach(t => t.addEventListener("click", () => {
  document.querySelectorAll(".tab").forEach(x => x.classList.remove("on")); t.classList.add("on");
}));

/* ---------- بارگذاری اکسل (فقط در همین مرورگر) ---------- */
const yes = v => /^(بله|yes|true|1|✓)$/i.test(String(v ?? "").trim());
const cell = (r, ...keys) => { for (const k of keys) if (r[k] !== undefined && String(r[k]).trim() !== "") return String(r[k]).trim(); return ""; };
function normRecords(rows){
  return rows.filter(r => r["عنوان"] || r.title).map(r => ({
    category: cell(r, "دسته‌بندی", "category") || "سایر", title: cell(r, "عنوان", "title"),
    short: cell(r, "توضیح کوتاه", "short"), description: cell(r, "توضیحات", "description"),
    phone: cell(r, "تلفن", "phone"), address: cell(r, "محل استقرار", "address"),
    icon: cell(r, "نماد", "icon") || "•", featured: yes(cell(r, "ویژه", "featured"))
  }));
}
function normRoute(wb, old){
  const S = n => wb.Sheets[n] ? XLSX.utils.sheet_to_json(wb.Sheets[n], {defval: ""}) : null;
  const nodes = S("نقاط"), edges = S("اتصال‌ها"), dests = S("مقصدها");
  if (!nodes || !edges || !dests) return old;
  return {
    lostHelp: old.lostHelp,
    nodes: nodes.filter(r => cell(r, "کد")).map(r => ({id: cell(r, "کد"), name: cell(r, "نام"), floor: cell(r, "طبقه"), origin: yes(cell(r, "مبدأ"))})),
    edges: edges.filter(r => cell(r, "از") && cell(r, "به")).map(r => ({from: cell(r, "از"), to: cell(r, "به"), text: cell(r, "عبارت راهنما"), stairs: yes(cell(r, "پله")), weight: Number(cell(r, "وزن")) || 1})),
    destinations: dests.filter(r => cell(r, "نام") && cell(r, "کد نقطه")).map(r => ({name: cell(r, "نام"), node: cell(r, "کد نقطه"), final: cell(r, "متن پایانی")}))
  };
}
$("importButton").addEventListener("click", async () => {
  const st = $("importStatus"), file = $("excelFile").files[0];
  if (!file) { st.textContent = "ابتدا فایل اکسل را انتخاب کنید."; return; }
  if (!window.XLSX) { st.textContent = "کتابخانه خواندن اکسل بارگذاری نشده است. اتصال اینترنت را بررسی کنید."; return; }
  try {
    const wb = XLSX.read(await file.arrayBuffer(), {type: "array"});
    if (!wb.Sheets["اطلاعات"]) { st.textContent = "برگه‌ای با نام «اطلاعات» در فایل پیدا نشد."; return; }
    const recs = normRecords(XLSX.utils.sheet_to_json(wb.Sheets["اطلاعات"], {defval: ""}));
    if (!recs.length) { st.textContent = "ردیف اطلاعاتی معتبری در فایل پیدا نشد."; return; }
    DATA.records = recs;
    if (wb.Sheets["تماس"]) DATA.contacts = normRecords(XLSX.utils.sheet_to_json(wb.Sheets["تماس"], {defval: ""}));
    const before = DATA.route;
    DATA.route = normRoute(wb, DATA.route);
    renderServices(); fillSelects(); $("routeResult").hidden = true;
    st.textContent = `${recs.length} عنوان` + (DATA.route !== before ? ` و ${DATA.route.nodes.length} نقطه مسیر` : "") + " با موفقیت در همین مرورگر نمایش داده شد. برای انتشار عمومی، طبق راهنمای همراه بسته فایل data.json را به‌روزرسانی کنید.";
  } catch (e) { st.textContent = "خواندن فایل با خطا روبه‌رو شد. قالب اکسل نمونه را بررسی کنید."; }
});
$("resetButton").addEventListener("click", () => { DATA = clone(FALLBACK); renderServices(); fillSelects(); $("routeResult").hidden = true; $("importStatus").textContent = "اطلاعات نمونه بازگردانده شد."; });

/* ---------- شروع ---------- */
function start(){ renderServices(); fillSelects(); applyQR(); }
start();
fetch("data.json", {cache: "no-cache"}).then(r => r.ok ? r.json() : Promise.reject()).then(j => {
  if (j && j.records && j.route) { DATA = j; const f = $("fromSelect").value; renderServices(); fillSelects(f); applyQR(); }
}).catch(() => {});
