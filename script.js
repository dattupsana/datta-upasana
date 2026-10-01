/* ========== १. माहिती (येथे सहज बदल करता येईल) ========== */
const mantras=[
 {t:"श्री गुरुदेव दत्त",m:"दत्तगुरूंना केलेला साधा नमस्कार व नामस्मरण.",g:"शांत बसून, आपल्या सोयीच्या संख्येने (उदा. १०८) स्मरण करावे."},
 {t:"ॐ द्रां दत्तात्रेयाय नमः",m:"“मी दत्तात्रेयांना नमस्कार करतो/करते.” ‘द्रां’ हे बीजाक्षर आहे.",g:"परंपरेनुसार गुरुवारी किंवा सकाळच्या वेळी माळेवर जप केला जातो."},
 {t:"ॐ दत्तात्रेय नमः",m:"ॐ सहित दत्तात्रेयांना नमस्कार.",g:"आध्यात्मिक साधनेसाठी वापरला जाणारा सोपा मंत्र; नवशिक्यांसाठी योग्य."},
 {t:"दिगंबरा दिगंबरा श्रीपाद वल्लभ दिगंबरा",m:"दिगंबर (सर्व बंधनांपलीकडील) श्रीपाद वल्लभ दत्तस्वरूपाचे नामस्मरण.",g:"भक्तीपरंपरेत मानले जाते की हा गजर भजन/नामस्मरणात म्हणावा."}];
const dailyMessages=["श्रद्धा ठेवा, प्रयत्न सोडू नका आणि गुरूंचे स्मरण कायम ठेवा.", "मन शांत असेल तर साधनेचा मार्ग अधिक स्पष्ट होतो.", "श्री गुरुदेव दत्त", "रोज थोडे, पण नियमित नामस्मरण — हीच साधनेची खरी ताकद.", "गुरू बाहेर शोधण्याआधी स्वतःच्या मनातील शांती ऐका.", "आजचा दिवस कृतज्ञतेने सुरू करा.", "संयम आणि सातत्य हे साधकाचे दोन मित्र आहेत.", "नामस्मरण करताना मन भरकटले तर हळूच परत आणा; तेच साधन आहे.", "सेवा आणि नम्रता भक्तीला सुंदर बनवतात.", "दत्तगुरूंचे स्मरण करून आजचे कर्तव्य प्रामाणिकपणे करा.", "सकाळची पहिली पाच मिनिटे गुरुस्मरणाला द्या.", "भक्ती म्हणजे दिखावा नाही, मनापासूनचे स्मरण.", "प्रत्येक श्वासासोबत नाम घ्या.", "अहंकार सोडला की गुरुकृपेची जाणीव होते.", "लहान पावले टाका, पण रोज टाका.", "शांत बसणे हीसुद्धा साधना आहे.", "आज कुणाला तरी क्षमा करा.", "गुरुवार हा आत्मपरीक्षणाचा दिवस मानला जातो.", "जे आहे त्याबद्दल कृतज्ञ राहा.", "कठीण काळात नामस्मरण मनाला आधार देते.", "बोलण्याआधी विचार करा; वाणी हीसुद्धा साधना आहे.", "दत्तगुरूंनी शिकवले: सर्वांकडून काहीतरी शिकावे.", "निसर्गात गुरू आहे; डोळे उघडे ठेवा.", "संख्येपेक्षा भावना महत्त्वाची.", "आज मोबाईलपासून थोडा वेळ दूर राहा.", "दयाळूपणा हेही उपासनेचे रूप आहे.", "साधनेत तुलना नको; प्रत्येकाचा मार्ग वेगळा.", "चुकला तर पुन्हा सुरू करा; गुरू धीर देतात.", "अन्नदान आणि सेवा हा भक्तीचा भाग मानला जातो.", "मन स्थिर करण्यासाठी श्वासावर लक्ष ठेवा.", "प्रार्थना ही मनाची साधी भाषा आहे.", "आजचे काम प्रेमाने करा, तीच पूजा.", "विनम्रता ही खरी संपत्ती आहे.", "स्वतःशी प्रामाणिक राहा.", "जप म्हणजे मनाला प्रेमाने वळण लावणे.", "अपेक्षा कमी, श्रद्धा जास्त.", "शांत मन हेच सर्वात सुंदर मंदिर.", "वडीलधाऱ्यांचा आदर करा.", "आजच्या दिवसासाठी धन्यवाद म्हणा.", "गुरुचरित्र वाचन मनाला दिशा देते, अशी परंपरा आहे.", "रागाच्या क्षणी तीन वेळा नाम घ्या.", "एकांतात पाच मिनिटे बसण्याची सवय लावा.", "सातत्य हीच साधनेची खरी परीक्षा.", "संध्याकाळी दिवसाचा आढावा घ्या.", "आजचे चांगले क्षण आठवा.", "श्रद्धा आणि सबुरी हातात हात घालून चालतात.", "जे करू शकता ते करा, बाकी गुरूंवर सोडा.", "दीप लावा, मन उजळू द्या.", "कुणाचे मन दुखवू नका.", "सेवा केल्याने मन हलके होते."];
const knowledge=[{t:"दत्तात्रेय कोण आहेत?",b:"परंपरेनुसार दत्तात्रेय हे ब्रह्मा-विष्णू-महेश यांचे एकत्रित स्वरूप आणि आदिगुरू मानले जातात. ते अत्री ऋषी व अनसूया माता यांचे पुत्र मानले जातात. त्यांनी चोवीस गुरू केले अशी कथा प्रसिद्ध आहे; त्यातून सर्वांकडून शिकण्याचा संदेश मिळतो."},{t:"दत्त उपासनेचे महत्त्व",b:"भक्तीपरंपरेत दत्त उपासना गुरुभक्ती, नम्रता आणि आत्मचिंतन वाढवणारी मानली जाते. महाराष्ट्रात श्रीपाद श्रीवल्लभ, नृसिंह सरस्वती आणि अक्कलकोट स्वामी यांची परंपरा मानणारे अनेक भक्त आहेत."},{t:"गुरुवारचे महत्त्व",b:"परंपरेनुसार गुरुवार हा दत्तगुरूंचा दिवस मानला जातो. अनेक भक्त या दिवशी दर्शन, नामस्मरण, गुरुचरित्र वाचन किंवा साधा उपवास करतात. हे ऐच्छिक आहे; प्रकृतीनुसार स्वतःला झेपेल तेच करावे."},{t:"नामस्मरण म्हणजे काय?",b:"देवाचे नाव प्रेमाने व लक्षपूर्वक वारंवार स्मरण करणे म्हणजे नामस्मरण. यासाठी विशेष साधन, वेळ किंवा ठिकाण लागत नाही; चालताना, काम करताना किंवा प्रवासातही ते करता येते."},{t:"मंत्र आणि जप म्हणजे काय?",b:"मंत्र म्हणजे पवित्र शब्दसमूह; तो ठरावीक संख्येने पुन्हा पुन्हा म्हणणे म्हणजे जप. माळ (१०८ मणी) वापरल्याने मोजणी सोपी होते. उच्चार स्पष्ट असावा आणि शक्य असल्यास जाणकारांकडून शिकून घ्यावा."},{t:"जप करताना सामान्य चुका",b:"घाई करणे, मन इतरत्र ठेवणे, एकदम खूप मोठे लक्ष्य ठरवणे, रोज मंत्र बदलणे, आणि फळाची अपेक्षा व चिंता करणे. जप कमी झाला तरी स्वतःला दोष देऊ नका."},{t:"साधनेत सातत्य कसे ठेवावे?",b:"रोज ठरावीक वेळ आणि जागा ठरवा. सुरुवात छोट्या लक्ष्याने (५ मिनिटे/१०८ जप) करा. या ॲपमध्ये नोंद ठेवा. एखादा दिवस चुकला तर पुन्हा सुरू करा."},{t:"ध्यानाची प्राथमिक पद्धत",b:"स्वच्छ जागी ताठ बसा, डोळे मिटा, श्वास सहज चालू द्या. मनात 'श्री गुरुदेव दत्त' म्हणा. मन भरकटले की हळूच परत आणा. सुरुवात ५ मिनिटांनी करा. आजार, चक्कर किंवा मानसिक त्रास असल्यास डॉक्टरांचा सल्ला घ्या."}];
const sadhanaCats=[
 {t:"दैनिक साधना",d:"सकाळची स्वच्छता, दीप, प्रार्थना व जप.",b:"१) स्नानानंतर दीप लावा. २) दत्तगुरूंना नमस्कार करा. ३) निवडलेला मंत्र जपा. ४) शेवटी कृतज्ञता व्यक्त करा."},
 {t:"गुरुवार साधना",d:"गुरुवारी विशेष नामस्मरण व दर्शन.",b:"परंपरेनुसार गुरुवारी दत्तमंदिर दर्शन, १०८ जप, साधे सात्त्विक भोजन व दानधर्म केला जातो."},
 {t:"दत्त मंत्र साधना",d:"एका मंत्रावर नियमित जप.",b:"एकच मंत्र निवडा, माळेवर किंवा काउंटरवर जप करा, रोज तीच वेळ ठेवा. संख्येपेक्षा एकाग्रतेला महत्त्व द्या."},
 {t:"नामस्मरण",d:"चालता-बोलता सहज स्मरण.",b:"कामाच्या दरम्यान मनात 'श्री गुरुदेव दत्त' म्हणत राहा. कोणतेही नियम नाहीत."},
 {t:"ध्यान",d:"५–१५ मिनिटांचे शांत बसणे.",b:"ताठ बसा, श्वासावर लक्ष ठेवा, मनात दत्तगुरूंचे स्मरण करा. वरील टायमर वापरा."},
 {t:"प्रार्थना",d:"साधी, मनापासून प्रार्थना.",b:"“हे श्री गुरुदेव दत्त, मला सद्बुद्धी, शांती आणि सेवेची प्रेरणा द्या.”"}];
const prayers=["हे श्री गुरुदेव दत्त, माझे मन शांत ठेवा.","हे दत्तगुरो, मला सातत्य आणि नम्रता द्या.","श्री गुरुदेव दत्त, माझ्या कर्तव्यात मला सद्बुद्धी द्या."];
const chintan=["नामस्मरण म्हणजे मनाला घरी परत आणणे.", "सातत्य मोठ्या लक्ष्यापेक्षा महत्त्वाचे.", "कृतज्ञता मन हलके करते.", "नम्रता हा साधकाचा अलंकार.", "शांततेत ऐकणे शिका.", "सेवेत भक्ती प्रकट होते.", "आजचा दिवस नवी सुरुवात आहे.", "गुरू आपल्याला स्वतःकडे पाहायला शिकवतात.", "श्वास हा नामाचा सोबती आहे.", "अपेक्षा कमी केल्यास मन शांत होते.", "क्षमा करणे हे मनाचे स्नान आहे.", "वाणीवर संयम म्हणजे साधना.", "सर्वांमध्ये गुरू पाहण्याचा प्रयत्न करा.", "एकाग्रता हळूहळू वाढते; घाई नको.", "दुसऱ्याच्या आनंदात आनंद मानणे शिका.", "साधेपणा हा भक्तीचा सुंदर रंग.", "चुका स्वीकारणे म्हणजे प्रगतीची सुरुवात.", "आजचे कर्तव्य हीच आजची पूजा.", "श्रद्धा आणि प्रयत्न दोन्ही हवेत.", "शांती बाहेर नाही, आत आहे.", "२१ दिवसांचा प्रवास संपला, पण साधना चालू ठेवा."];
const tasks=["५ मिनिटे शांत बसा.", "एका व्यक्तीशी प्रेमाने बोला.", "आज एक छोटी मदत किंवा दान करा.", "मोबाईलशिवाय १० मिनिटे घालवा.", "कुणाचे तरी आभार माना.", "दीप लावून दर्शन/प्रार्थना करा.", "आठवड्याचा अनुभव लिहून ठेवा.", "सकाळी लवकर उठून नामस्मरण करा.", "आज कुणाशी वाद टाळा.", "वडीलधाऱ्यांना नमस्कार करा.", "एक पान आध्यात्मिक वाचन करा.", "आज साधे सात्त्विक जेवण घ्या.", "एका गरजूला अन्न द्या.", "१५ मिनिटे ध्यानाला बसा.", "आज दिवसभर शांत बोला.", "झाडाला पाणी घाला / निसर्गात फिरा.", "आज स्वतःच्या चुकीला क्षमा करा.", "एक चांगली सवय ठरवा.", "देवघर स्वच्छ करा.", "कुटुंबासोबत एकत्र प्रार्थना करा.", "तीन आठवड्यांच्या अनुभवाबद्दल कृतज्ञता लिहा."];
const sadhanaDays=Array.from({length:21},(_,i)=>{const w=Math.floor(i/7),n=[108,216,324][w];
 return{day:i+1,mantra:mantras[(i%3)].t,jap:`आज सोयीनुसार ${n} वेळा जप करा (शक्य नसेल तर कमी केले तरी चालेल).`,prayer:prayers[i%3],chintan:chintan[i],task:tasks[i]};});
const pages={
 about:["About","श्री दत्त उपासना हे भक्ती व आध्यात्मिक साधनेसाठी बनवलेले मोफत मराठी व्यासपीठ आहे."],
 disclaimer:["Disclaimer","या वेबसाइटवरील माहिती भक्ती, आध्यात्मिक चिंतन आणि सामान्य मार्गदर्शनासाठी दिली आहे. येथे कोणत्याही चमत्काराची, आर्थिक लाभाची, आरोग्यलाभाची किंवा निश्चित परिणामाची हमी दिलेली नाही. गंभीर आरोग्य, आर्थिक किंवा कायदेशीर बाबतीत संबंधित तज्ज्ञांचा सल्ला घ्या."],
 privacy:["Privacy Policy","तुमचा जप व साधनेची नोंद फक्त तुमच्या फोनमधील LocalStorage मध्ये राहते. ती आमच्या सर्व्हरवर पाठवली जात नाही."]};

/* ========== २. मदत-फंक्शन ========== */
const $=s=>document.querySelector(s);
const load=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))??d}catch(e){return d}};
const save=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}};
const today=()=>new Date().toISOString().slice(0,10);
const rnd=a=>a[Math.floor(Math.random()*a.length)];
function modal(title,html){$("#dlgBody").innerHTML=`<h2>${title}</h2>${html}`;$("#dlg").showModal()}
$("#dlgClose").onclick=()=>$("#dlg").close();

/* ========== ३. नेव्हिगेशन ========== */
function go(id){document.querySelectorAll(".view").forEach(v=>v.classList.toggle("active",v.id===id));
 document.querySelectorAll("#nav button").forEach(b=>b.classList.toggle("on",b.dataset.go===id));scrollTo({top:0,behavior:"smooth"});history.replaceState(null,"","#"+id)}
document.addEventListener("click",e=>{const b=e.target.closest("[data-go]");if(b)go(b.dataset.go);
 const p=e.target.closest("[data-page]");if(p){const[t,x]=pages[p.dataset.page];modal(t,`<p>${x}</p>`)}});

/* ========== ४. संदेश ========== */
let cur="";
function newMsg(){cur=rnd(dailyMessages);$("#homeMsg").textContent=cur;$("#bigMsg").textContent=cur}
$("#newHome").onclick=newMsg;$("#newMsg").onclick=newMsg;
$("#share").onclick=async()=>{const text=cur+"\n— श्री दत्त उपासना";
 if(navigator.share){try{await navigator.share({text})}catch(e){}}else{try{await navigator.clipboard.writeText(text);alert("संदेश कॉपी झाला")}catch(e){alert(text)}}};

/* ========== ५. मंत्र ========== */
function drawMantras(q=""){const l=mantras.filter(x=>(x.t+x.m).includes(q.trim()));
 $("#mantraList").innerHTML=l.map(x=>`<div class="card"><h2>${x.t}</h2><p><b>साधा अर्थ:</b> ${x.m}</p><p class="small"><b>जपासाठी सामान्य मार्गदर्शन:</b> ${x.g}</p><button class="btn small" data-jm="${mantras.indexOf(x)}">जप मोजणी</button></div>`).join("")||"<p>काहीही सापडले नाही.</p>"}
$("#search").oninput=e=>drawMantras(e.target.value);
$("#mantraList").onclick=e=>{const b=e.target.closest("[data-jm]");if(b){japIdx=+b.dataset.jm;$("#japName").textContent=mantras[japIdx].t;go("jap")}};

/* ========== ६. जप काउंटर ========== */
let japIdx=0,J=load("jap",{days:{},target:108});
function drawJap(){const n=J.days[today()]||0,t=J.target,pct=Math.min(100,Math.round(n/t*100));
 $("#count").textContent=n;$("#barFill").style.width=pct+"%";$("#progTxt").textContent=`${n} / ${t} (${pct}%)`;
 $("#doneMsg").hidden=n<t;$("#todayT").textContent=n;$("#allT").textContent=Object.values(J.days).reduce((a,b)=>a+b,0);
 document.querySelectorAll("#targets button").forEach(b=>b.classList.toggle("on",b.dataset.v==(([108,1008,5000,11000].includes(t))?t:"c")));
 $("#japName").textContent=mantras[japIdx].t}
function bump(d){const k=today();J.days[k]=Math.max(0,(J.days[k]||0)+d);save("jap",J);drawJap();if(d>0&&navigator.vibrate)navigator.vibrate(15)}
$("#plus").onclick=()=>bump(1);$("#minus").onclick=()=>bump(-1);
$("#reset").onclick=()=>{if(confirm("आजचा जप 0 करायचा?")){J.days[today()]=0;save("jap",J);drawJap()}};
$("#targets").innerHTML=[108,1008,5000,11000].map(v=>`<button data-v="${v}">${v}</button>`).join("")+`<button data-v="c">Custom</button>`;
$("#targets").onclick=e=>{const v=e.target.dataset.v;if(!v)return;if(v==="c"){$("#custom").hidden=false;$("#custom").focus()}else{$("#custom").hidden=true;J.target=+v;save("jap",J);drawJap()}};
$("#custom").oninput=e=>{const v=parseInt(e.target.value);if(v>0){J.target=v;save("jap",J);drawJap()}};

/* ========== ७. टायमर ========== */
let left=600,sel=10,timer=null;
const fmt=s=>String(Math.floor(s/60)).padStart(2,"0")+":"+String(s%60).padStart(2,"0");
$("#mins").innerHTML=[5,10,15,30].map(m=>`<button data-m="${m}" class="${m==10?"on":""}">${m} मिनिटे</button>`).join("");
$("#mins").onclick=e=>{const m=e.target.dataset.m;if(!m)return;clearInterval(timer);timer=null;sel=+m;left=sel*60;$("#clock").textContent=fmt(left);
 document.querySelectorAll("#mins button").forEach(b=>b.classList.toggle("on",b.dataset.m==m))};
$("#tStart").onclick=()=>{if(timer)return;timer=setInterval(()=>{left--;$("#clock").textContent=fmt(left);
 if(left<=0){clearInterval(timer);timer=null;if(navigator.vibrate)navigator.vibrate([300,100,300]);modal("🙏","<p>जप/ध्यान वेळ पूर्ण झाली.<br>श्री गुरुदेव दत्त</p>")}},1000)};
$("#tPause").onclick=()=>{clearInterval(timer);timer=null};
$("#tReset").onclick=()=>{clearInterval(timer);timer=null;left=sel*60;$("#clock").textContent=fmt(left)};

/* ========== ८. साधना + २१ दिवस ========== */
$("#sadList").innerHTML=sadhanaCats.map((c,i)=>`<div class="card"><h2>${c.t}</h2><p class="small">${c.d}</p><button class="btn small" data-sc="${i}">साधना पहा</button></div>`).join("");
$("#sadList").onclick=e=>{const b=e.target.closest("[data-sc]");if(b){const c=sadhanaCats[b.dataset.sc];modal(c.t,`<p>${c.b}</p><p class="small">ही सामान्य भक्तीपर माहिती आहे; परिणामांची हमी नाही.</p>`)}};
let S=load("s21",{done:[]}),selDay=1;
function draw21(){$("#p21").textContent=`प्रगती: ${S.done.length}/21`;$("#bar21").style.width=(S.done.length/21*100)+"%";
 $("#days").innerHTML=sadhanaDays.map(d=>`<button data-d="${d.day}" class="${S.done.includes(d.day)?"ok":""} ${d.day==selDay?"sel":""}">${d.day}</button>`).join("");
 const d=sadhanaDays[selDay-1],ok=S.done.includes(selDay);
 $("#dayBox").innerHTML=`<h2>Day ${d.day}</h2><p><b>आजचा मंत्र:</b> ${d.mantra}</p><p><b>जपाची सूचना:</b> ${d.jap}</p><p><b>छोटी प्रार्थना:</b> ${d.prayer}</p><p><b>आध्यात्मिक चिंतन:</b> ${d.chintan}</p><p><b>आजचे कार्य:</b> ${d.task}</p><button class="btn" id="mark">${ok?"पूर्ण केले ✔ (रद्द करा)":"आजची साधना पूर्ण"}</button>`;
 $("#mark").onclick=()=>{S.done=ok?S.done.filter(x=>x!==selDay):[...S.done,selDay];save("s21",S);draw21()}}
$("#days").onclick=e=>{const b=e.target.closest("[data-d]");if(b){selDay=+b.dataset.d;draw21()}};

/* ========== ९. ज्ञान, Premium, संपर्क ========== */
$("#gyanList").innerHTML=knowledge.map(k=>`<details><summary>${k.t}</summary><p>${k.b}</p></details>`).join("");
// पुढे पेमेंट जोडताना फक्त हे फंक्शन बदला
function startPremiumPayment(){$("#buyMsg").textContent="Premium access payment integration येथे जोडता येईल."}
$("#buy").onclick=startPremiumPayment;
$("#send").onclick=()=>{$("#sendMsg").textContent="Contact form backend नंतर जोडता येईल. सध्या संदेश पाठवला जात नाही."};

/* ========== १०. सुरुवात ========== */
newMsg();drawMantras();drawJap();draw21();
go(location.hash.slice(1)&&document.getElementById(location.hash.slice(1))?location.hash.slice(1):"home");
if("serviceWorker"in navigator&&location.protocol!=="file:")navigator.serviceWorker.register("service-worker.js").catch(()=>{});
