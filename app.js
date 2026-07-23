const species = [
  {id:"borragine", name:"Borragine", latin:"Borago officinalis", icon:"🌿", category:"erbe", habitat:"prato", risk:"medio", use:"Uso alimentare tradizionale, solo con guida esperta.", season:"primavera", clues:"Fiori blu a stella, foglie ruvide, margini morbidi.", similar:"Da non confondere con piante spontanee non identificate.", note:"Buona per raccontare cucina locale, stagionalità e prudenza."},
  {id:"sambuco", name:"Sambuco", latin:"Sambucus nigra", icon:"🌼", category:"erbe", habitat:"sentiero", risk:"medio", use:"Fiori usati tradizionalmente; parti della pianta richiedono cautela.", season:"primavera-estate", clues:"Ombrelle di piccoli fiori chiari, odore intenso, bacche scure a maturazione.", similar:"Specie simili e parti immature possono creare errori.", note:"Perfetto per schede su tisane, sciroppi e tradizioni."},
  {id:"castagno", name:"Castagno", latin:"Castanea sativa", icon:"🌰", category:"alberi", habitat:"bosco", risk:"basso", use:"Castagne e cultura alimentare dei boschi locali.", season:"autunno", clues:"Foglie lanceolate seghettate, ricci spinosi, tronco scanalato.", similar:"Distinguere bene da ippocastano ornamentale.", note:"Collega biodiversità, economia rurale e passeggiate autunnali."},
  {id:"porcino", name:"Porcino", latin:"Boletus edulis e gruppo", icon:"🍄", category:"funghi", habitat:"bosco", risk:"alto", use:"Informazione divulgativa: consumo solo dopo controllo micologico.", season:"autunno", clues:"Cappello bruno, tubuli sotto il cappello, gambo robusto.", similar:"Molti funghi richiedono verifica professionale.", note:"Scheda ad alto impatto, con disclaimer forte e regole di sicurezza."},
  {id:"amanita", name:"Amanita falloide", latin:"Amanita phalloides", icon:"⚠️", category:"funghi", habitat:"bosco", risk:"alto", use:"Tossica mortale. Non raccogliere, non manipolare per consumo.", season:"estate-autunno", clues:"Cappello verdastro, lamelle bianche, volva alla base.", similar:"Può essere confusa da inesperti con specie commestibili.", note:"Essenziale per educazione alla prevenzione."},
  {id:"istrice", name:"Istrice", latin:"Hystrix cristata", icon:"🦔", category:"fauna", habitat:"sentiero", risk:"basso", use:"Osservare tracce senza disturbare.", season:"tutto l'anno", clues:"Aculei caduti, impronte, scavi e passaggi notturni.", similar:"Tracce distinguibili da cinghiale e tasso.", note:"Porta la fauna nell'app senza bisogno di avvistamenti diretti."},
  {id:"martin", name:"Martin pescatore", latin:"Alcedo atthis", icon:"🐦", category:"fauna", habitat:"lago", risk:"basso", use:"Osservazione fotografica rispettosa.", season:"tutto l'anno", clues:"Colori blu-arancio, volo rapido vicino all'acqua.", similar:"Può essere visto solo per pochi secondi.", note:"Ideale per Nemi e ambienti umidi."},
  {id:"traccia", name:"Tracce di cinghiale", latin:"Sus scrofa", icon:"🐾", category:"tracce", habitat:"bosco", risk:"medio", use:"Riconoscere presenza e mantenere distanza.", season:"tutto l'anno", clues:"Terreno smosso, impronte doppie, fango e sentieri battuti.", similar:"Non avvicinarsi ad animali o piccoli.", note:"Trasforma la sicurezza outdoor in gioco educativo."},
  {id:"nepitella", name:"Nepitella", latin:"Clinopodium nepeta", icon:"🌱", category:"erbe", habitat:"sentiero", risk:"medio", use:"Uso aromatico tradizionale, da validare su raccolta e corretta identificazione.", season:"estate-autunno", clues:"Piccole foglie opposte, odore mentolato, fiori chiari.", similar:"Può essere confusa con altre Lamiaceae spontanee.", note:"Ottima scheda per cucina territoriale e laboratori sensoriali."},
  {id:"ciclamino", name:"Ciclamino selvatico", latin:"Cyclamen hederifolium", icon:"🌸", category:"erbe", habitat:"bosco", risk:"alto", use:"Specie ornamentale e naturale da osservare, non da usare in cucina.", season:"autunno", clues:"Fiori rosa ripiegati e foglie cuoriformi marmorizzate.", similar:"La bellezza del fiore può spingere alla raccolta: va scoraggiata.", note:"Serve a parlare di rispetto, divieti e biodiversità fragile."},
  {id:"alloro", name:"Alloro", latin:"Laurus nobilis", icon:"🍃", category:"alberi", habitat:"sentiero", risk:"basso", use:"Uso aromatico noto, con attenzione a non confondere foglie simili.", season:"tutto l'anno", clues:"Foglie coriacee, aromatiche, verde scuro e lanceolate.", similar:"Mai usare foglie di piante non identificate con certezza.", note:"Ponte immediato tra botanica, cucina e memoria domestica."},
  {id:"salamandrina", name:"Salamandrina dagli occhiali", latin:"Salamandrina perspicillata", icon:"🦎", category:"fauna", habitat:"bosco", risk:"basso", use:"Osservazione a distanza, senza manipolazione.", season:"primavera-autunno", clues:"Piccolo anfibio, disegno chiaro sul capo, ambienti umidi.", similar:"Specie sensibile: non spostare individui e non alterare rifugi.", note:"Dà valore naturalistico alto ai percorsi umidi e ombrosi."}
];

const categories = [
  ["all","Tutto"],["erbe","Erbe"],["funghi","Funghi"],["fauna","Fauna"],["tracce","Tracce"],["alberi","Alberi"]
];

const state = {
  category:"all",
  habitat:"all",
  risk:"all",
  selected:"borragine",
  memory: JSON.parse(localStorage.getItem("custodi-ai-memory") || "[]"),
  stamps: JSON.parse(localStorage.getItem("custodi-stamps") || "[]")
};

const $ = (id) => document.getElementById(id);

function save() {
  localStorage.setItem("custodi-ai-memory", JSON.stringify(state.memory.slice(-12)));
  localStorage.setItem("custodi-stamps", JSON.stringify(state.stamps));
  $("memory-count").textContent = state.memory.length;
}

function toast(text) {
  const el = $("toast");
  el.textContent = text;
  el.classList.add("show");
  setTimeout(() => el.classList.remove("show"), 2200);
}

function renderChips() {
  $("category-chips").innerHTML = categories.map(([id,label]) =>
    `<button class="chip ${state.category===id?"active":""}" data-category="${id}">${label}</button>`
  ).join("");
  document.querySelectorAll("[data-category]").forEach(btn => {
    btn.addEventListener("click", () => {
      state.category = btn.dataset.category;
      renderAll();
    });
  });
}

function filteredSpecies() {
  return species.filter(s =>
    (state.category === "all" || s.category === state.category) &&
    (state.habitat === "all" || s.habitat === state.habitat) &&
    (state.risk === "all" || s.risk === state.risk)
  );
}

function renderSpeciesList() {
  const list = filteredSpecies();
  if (!list.find(s => s.id === state.selected) && list.length) state.selected = list[0].id;
  $("species-list").innerHTML = list.map(s =>
    `<button class="species-button ${state.selected===s.id?"active":""}" data-id="${s.id}">
      <strong>${s.icon} ${s.name}</strong><span>${s.latin} · rischio ${s.risk}</span>
    </button>`
  ).join("") || "<p>Nessuna specie compatibile con i filtri.</p>";
  document.querySelectorAll("[data-id]").forEach(btn => btn.addEventListener("click", () => {
    state.selected = btn.dataset.id;
    renderSpeciesCard();
    renderScanCard();
  }));
}

function renderSpeciesCard() {
  const s = species.find(item => item.id === state.selected) || species[0];
  $("species-card").innerHTML = `
    <div class="species-top">
      <div><p class="eyebrow">Scheda validabile</p><h3>${s.name}</h3><p class="latin">${s.latin}</p></div>
      <div class="species-icon">${s.icon}</div>
    </div>
    <div class="tag-row">
      <span class="tag">${s.category}</span><span class="tag">${s.habitat}</span><span class="tag">${s.season}</span><span class="tag risk-${s.risk}">attenzione ${s.risk}</span>
    </div>
    <div class="species-grid">
      <div class="mini-card"><strong>Come riconoscerla</strong><p>${s.clues}</p></div>
      <div class="mini-card"><strong>Uso e cultura</strong><p>${s.use}</p></div>
      <div class="mini-card"><strong>Da non sbagliare</strong><p>${s.similar}</p></div>
    </div>
    <div class="mini-card" style="margin-top:20px"><strong>Nota per il racconto territoriale</strong><p>${s.note}</p></div>
  `;
}

function renderScanCard() {
  const s = species.find(item => item.id === state.selected) || filteredSpecies()[0] || species[0];
  const confidence = s.risk === "alto" ? "richiede verifica esperta" : "buona compatibilità locale";
  $("scan-card").innerHTML = `<small>possibile corrispondenza locale</small><strong>${s.icon} ${s.name}</strong><span>${s.clues}</span><em>${confidence}</em>`;
}

function structuredAnswer(title, body, caution, next) {
  return `<strong>${title}</strong><br>${body}<br><span class="answer-note">${caution}</span><br><small>${next}</small>`;
}

function answer(question) {
  const q = question.toLowerCase();
  const found = species.find(s => q.includes(s.name.toLowerCase().split(" ")[0]) || q.includes(s.category));
  if (q.includes("commest") || q.includes("mang") || q.includes("cucina")) {
    return structuredAnswer("Orientamento alimentare", "Posso raccontare usi tradizionali e differenze tra specie simili, ma non posso autorizzare raccolta o consumo.", "Per funghi, bacche ed erbe spontanee serve sempre verifica di un esperto o micologo.", "Prossimo passo: fotografa, segna habitat e stagione, poi confronta la scheda con una guida validata.");
  }
  if (q.includes("officinal") || q.includes("tisane") || q.includes("erbe")) {
    return structuredAnswer("Uso officinale", "La scheda può spiegare tradizione locale, periodo, parti osservabili e curiosità botaniche.", "Niente dosaggi, ricette terapeutiche o indicazioni mediche: alzano responsabilità e richiedono validazione professionale.", "Prossimo passo: usa la scheda come materiale educativo, non come prescrizione.");
  }
  if (q.includes("foto") || q.includes("scanner") || q.includes("lens")) {
    return structuredAnswer("Scanner guidato", "La foto resta nel dispositivo e aiuta a scegliere categoria, habitat, stagione e livello di attenzione.", "La versione senza backend non dichiara identificazione automatica certa.", "Fase 2: modello o API di riconoscimento, solo se budget e responsabilità lo giustificano.");
  }
  if (found) {
    return structuredAnswer(found.name, `${found.clues} Uso: ${found.use}`, `Attenzione: ${found.similar}`, `Habitat: ${found.habitat}. Stagione: ${found.season}.`);
  }
  if (q.includes("nemi") || q.includes("luna")) {
    return structuredAnswer("Collaborazione esperta", "Le Erbe della Luna può dare autorevolezza editoriale su erbe officinali, fiori commestibili e percorsi stagionali a Nemi.", "I contenuti sensibili vanno firmati o validati da chi ha competenza specifica.", "Prossimo passo: proporre una call di validazione e un primo set di 20 schede.");
  }
  return structuredAnswer("Partiamo dall'osservazione", "Dimmi cosa hai visto, dove lo hai visto e in che stagione. L'app restringe il campo alle specie dei Castelli Romani.", "Mostro sempre livello di attenzione, specie simili e cosa non fare.", "Puoi chiedere: 'è commestibile?', 'che traccia è?', 'che erba officinale potrebbe essere?'.");
}

function renderChat() {
  const initial = state.memory.length ? "" : `<div class="msg bot"><strong>Assistente naturalistico locale</strong><br>Posso aiutarti a orientarti tra erbe, funghi, fauna e tracce dei Castelli Romani. Le risposte restano nel browser e hanno finalità educativa.</div>`;
  $("chat-log").innerHTML = initial + state.memory.map(m => `<div class="msg ${m.role}">${m.text}</div>`).join("");
  $("chat-log").scrollTop = $("chat-log").scrollHeight;
  $("quick-prompts").innerHTML = ["È commestibile?","Come funziona lo scanner?","Cosa fare con un fungo?","Ruolo di Le Erbe della Luna"].map(t => `<button type="button">${t}</button>`).join("");
  document.querySelectorAll(".quick-prompts button").forEach(btn => btn.addEventListener("click", () => ask(btn.textContent)));
}

function ask(text) {
  if (!text.trim()) return;
  state.memory.push({role:"user", text});
  state.memory.push({role:"bot", text:answer(text)});
  save();
  renderChat();
}

function renderStamps() {
  const missions = ["Osserva senza raccogliere","Riconosci un habitat","Trova una traccia","Confronta specie simili","Segna la stagione","Rispetta un divieto","Fai una domanda al bot","Valida con esperto"];
  $("stamp-board").innerHTML = missions.map((m,i) => `<button class="stamp ${state.stamps.includes(i)?"done":""}" style="--tilt:${i%2?'-3deg':'2deg'}" data-stamp="${i}">${m}</button>`).join("");
  document.querySelectorAll("[data-stamp]").forEach(btn => btn.addEventListener("click", () => {
    const id = Number(btn.dataset.stamp);
    state.stamps = state.stamps.includes(id) ? state.stamps.filter(x => x !== id) : [...state.stamps, id];
    save();
    renderStamps();
  }));
}

function renderMemory() {
  $("memory-items").innerHTML = state.memory.length ? state.memory.map((m,i) => `<div class="memory-item"><strong>${i+1}. ${m.role === "bot" ? "Bot" : "Tu"}</strong><span>${m.text}</span></div>`).join("") : "<p>Nessuna memoria salvata.</p>";
}

function renderAll() {
  renderChips();
  renderSpeciesList();
  renderSpeciesCard();
  renderScanCard();
  renderStamps();
  renderChat();
  save();
}

$("habitat-filter").addEventListener("change", e => { state.habitat = e.target.value; renderAll(); });
$("risk-filter").addEventListener("change", e => { state.risk = e.target.value; renderAll(); });
$("guided-id").addEventListener("click", () => {
  const list = filteredSpecies();
  if (list.length) state.selected = list[Math.floor(Math.random() * list.length)].id;
  renderAll();
  toast("Riconoscimento guidato aggiornato");
});
$("photo-input").addEventListener("change", e => {
  const file = e.target.files[0];
  $("file-label").textContent = file ? `${file.name} analizzata solo in locale` : "Nessuna immagine salvata online.";
  toast("Foto caricata in locale");
});
$("chat-form").addEventListener("submit", e => {
  e.preventDefault();
  const input = $("chat-input");
  ask(input.value);
  input.value = "";
});
$("open-memory").addEventListener("click", () => { renderMemory(); $("memory-dialog").showModal(); });
$("close-memory").addEventListener("click", () => $("memory-dialog").close());
$("clear-memory").addEventListener("click", () => { state.memory = []; save(); renderChat(); renderMemory(); });

renderAll();
