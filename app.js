const SAMPLE = [
 {category:"مراجعه و پذیرش",title:"راهنمای مراجعه به اورژانس",description:"اطلاعات مربوط به مراجعه به اورژانس و نحوه دریافت خدمات فوریت‌های پزشکی. جزئیات این بخش باید توسط بیمارستان تکمیل و تأیید شود.",phone:"",address:"",icon:"✚"},
 {category:"مراجعه و پذیرش",title:"پذیرش درمانگاه",description:"مراحل مراجعه، مدارک موردنیاز و نحوه پذیرش در درمانگاه‌های بیمارستان.",phone:"",address:"",icon:"▤"},
 {category:"مراجعه و پذیرش",title:"پذیرش و بستری",description:"اطلاعات مربوط به تشکیل پرونده، مدارک لازم و مراحل بستری بیمار.",phone:"",address:"",icon:"▣"},
 {category:"مراجعه و پذیرش",title:"ترخیص بیمار",description:"مراحل اداری ترخیص، دریافت مدارک و پیگیری توصیه‌های پس از ترخیص.",phone:"",address:"",icon:"✓"},
 {category:"بخش‌ها و خدمات",title:"معرفی بخش‌های بیمارستان",description:"معرفی بخش‌های بستری و واحدهای درمانی بیمارستان و خدمات هر بخش.",phone:"",address:"",icon:"▦"},
 {category:"بخش‌ها و خدمات",title:"درمانگاه‌ها",description:"فهرست درمانگاه‌ها، تخصص‌های ارائه‌شده و اطلاعات مراجعه. برنامه پزشکان باید پیش از انتشار تأیید شود.",phone:"",address:"",icon:"⚕"},
 {category:"بخش‌ها و خدمات",title:"آزمایشگاه و تصویربرداری",description:"راهنمای دسترسی و اطلاعات عمومی خدمات تشخیصی بیمارستان.",phone:"",address:"",icon:"⌕"},
 {category:"مقررات و حقوق بیمار",title:"ساعات و مقررات ملاقات",description:"ساعات ملاقات، مقررات حضور همراه و محدودیت‌های احتمالی. ساعت دقیق باید از مدیریت پرستاری دریافت شود.",phone:"",address:"",icon:"◷"},
 {category:"مقررات و حقوق بیمار",title:"حقوق بیمار",description:"آشنایی با حقوق بیمار، حفظ حریم خصوصی، احترام، دریافت اطلاعات و مسیر ثبت شکایت.",phone:"",address:"",icon:"♡"},
 {category:"امکانات و مسیریابی",title:"نقشه و راهنمای طبقات",description:"نقشه موقعیت واحدها، ورودی‌ها، آسانسورها و مسیرهای دسترسی. نقشه واقعی باید در این بخش افزوده شود.",phone:"",address:"",icon:"⌖"},
 {category:"امکانات و مسیریابی",title:"امکانات رفاهی",description:"اطلاعات مربوط به سرویس‌های بهداشتی، نمازخانه، بوفه، آبخوری و سایر امکانات.",phone:"",address:"",icon:"⌂"},
 {category:"ارتباط با بیمارستان",title:"شماره تلفن‌های ضروری",description:"شماره تماس واحدهای پاسخگو و راه‌های ارتباط با بیمارستان.",phone:"",address:"",icon:"☎"}
];
const SAMPLE_CONTACTS = [
 {category:"ارتباط با بیمارستان",title:"تلفن مرکزی بیمارستان",description:"شماره تماس اصلی بیمارستان",phone:"",address:""},
 {category:"ارتباط با بیمارستان",title:"واحد اطلاعات",description:"پاسخگویی و راهنمایی مراجعان",phone:"",address:""},
 {category:"ارتباط با بیمارستان",title:"پذیرش",description:"اطلاعات پذیرش و تشکیل پرونده",phone:"",address:""}
];
let records = [...SAMPLE];
let contacts = [...SAMPLE_CONTACTS];
let activeCategory = "همه";
const $ = id => document.getElementById(id);
const esc = s => String(s ?? "").replace(/[&<>"']/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
function render(){
 const cats = ["همه",...new Set(records.map(x=>x.category).filter(Boolean))];
 $("categoryFilters").innerHTML = cats.map(c=>`<button class="filter ${c===activeCategory?"active":""}" data-cat="${esc(c)}">${esc(c)}</button>`).join("");
 document.querySelectorAll(".filter").forEach(b=>b.addEventListener("click",()=>{activeCategory=b.dataset.cat;render()}));
 const q=$("searchInput").value.trim().toLowerCase();
 const filtered=records.filter(x=>(activeCategory==="همه"||x.category===activeCategory)&&[x.title,x.description,x.category].join(" ").toLowerCase().includes(q));
 $("guideGrid").innerHTML=filtered.map((x,i)=>`<article class="guide-card" tabindex="0" role="button" data-index="${records.indexOf(x)}"><div class="card-icon">${esc(x.icon||"•")}</div><div class="card-content"><div class="card-category">${esc(x.category)}</div><div class="card-title">${esc(x.title)}</div><div class="card-desc">${esc(x.description)}</div></div></article>`).join("");
 $("emptyState").hidden=filtered.length>0;
 document.querySelectorAll(".guide-card").forEach(card=>{
   const open=()=>showDetail(records[Number(card.dataset.index)]);
   card.addEventListener("click",open);card.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();open()}});
 });
 $("contactCards").innerHTML=contacts.map(x=>`<div class="contact-card"><strong>${esc(x.title)}</strong><span>${esc(x.description)}</span><br>${x.phone?`<a href="tel:${esc(x.phone.replace(/[^0-9+]/g,""))}">${esc(x.phone)}</a>`:"<span>شماره تماس پس از تأیید درج شود</span>"}</div>`).join("");
}
function showDetail(x){
 $("dialogBody").innerHTML=`<div class="eyebrow">${esc(x.category)}</div><h3>${esc(x.title)}</h3><p>${esc(x.description)}</p><div class="detail-meta">${x.address?`<div><strong>محل:</strong> ${esc(x.address)}</div>`:""}${x.phone?`<div><strong>تلفن:</strong> <a href="tel:${esc(x.phone.replace(/[^0-9+]/g,""))}">${esc(x.phone)}</a></div>`:""}</div>`;
 $("detailDialog").showModal();
}
$("dialogClose").addEventListener("click",()=>$("detailDialog").close());
$("searchInput").addEventListener("input",render);
$("menuButton").addEventListener("click",()=>$("mainNav").classList.toggle("open"));
$("mainNav").querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>$("mainNav").classList.remove("open")));
function normalizeRows(rows){
 return rows.filter(r=>r["عنوان"]||r.title).map(r=>({
  category:r["دسته‌بندی"]||r.category||"سایر",
  title:r["عنوان"]||r.title||"",
  description:r["توضیحات"]||r.description||"",
  phone:String(r["تلفن"]||r.phone||""),
  address:r["محل استقرار"]||r.address||"",
  icon:r["نماد"]||r.icon||"•"
 }));
}
$("importButton").addEventListener("click",async()=>{
 const file=$("excelFile").files[0];
 if(!file){$("importStatus").textContent="ابتدا فایل اکسل را انتخاب کنید.";return}
 if(!window.XLSX){$("importStatus").textContent="کتابخانه خواندن اکسل بارگذاری نشده است. اتصال اینترنت را بررسی کنید.";return}
 try{
  const data=await file.arrayBuffer(),wb=XLSX.read(data,{type:"array"});
  if(!wb.Sheets["اطلاعات"]){$("importStatus").textContent="برگه‌ای با نام «اطلاعات» در فایل پیدا نشد.";return}
  const imported=normalizeRows(XLSX.utils.sheet_to_json(wb.Sheets["اطلاعات"],{defval:""}));
  if(!imported.length){$("importStatus").textContent="ردیف اطلاعاتی معتبری در فایل پیدا نشد.";return}
  records=imported;
  if(wb.Sheets["تماس"]){contacts=normalizeRows(XLSX.utils.sheet_to_json(wb.Sheets["تماس"],{defval:""}))}
  activeCategory="همه";render();
  $("importStatus").textContent=`${records.length} عنوان با موفقیت در همین مرورگر نمایش داده شد. برای انتشار عمومی، طبق راهنمای همراه بسته فایل data.json را به‌روزرسانی کنید.`;
 }catch(e){$("importStatus").textContent="خواندن فایل با خطا روبه‌رو شد. قالب اکسل نمونه را بررسی کنید."}
});
$("resetButton").addEventListener("click",()=>{records=[...SAMPLE];contacts=[...SAMPLE_CONTACTS];activeCategory="همه";render();$("importStatus").textContent="اطلاعات نمونه بازگردانده شد."});
render();
