const species = [
  {id:"borragine", name:"Borragine", latin:"Borago officinalis", icon:"🌿", category:"erbe", habitat:"prato", risk:"medio", score:84, season:"primavera", use:"Uso alimentare tradizionale, solo con guida esperta.", clues:"Fiori blu a stella, foglie ruvide, margini morbidi.", similar:"Da non confondere con piante spontanee non identificate.", action:"Fotografa fiore, foglia e ambiente; non raccogliere se non validata.", story:"Perfetta per raccontare cucina locale, stagionalità e prudenza."},
  {id:"sambuco", name:"Sambuco", latin:"Sambucus nigra", icon:"🌼", category:"erbe", habitat:"sentiero", risk:"medio", score:79, season:"primavera-estate", use:"Fiori usati tradizionalmente; parti della pianta richiedono cautela.", clues:"Ombrelle di piccoli fiori chiari, odore intenso, bacche scure a maturazione.", similar:"Specie simili e parti immature possono creare errori.", action:"Verifica sempre parte della pianta e maturazione.", story:"Ottimo per schede su tisane, sciroppi e tradizioni locali."},
  {id:"castagno", name:"Castagno", latin:"Castanea sativa", icon:"🌰", category:"alberi", habitat:"bosco", risk:"basso", score:92, season:"autunno", use:"Castagne e cultura alimentare dei boschi locali.", clues:"Foglie lanceolate seghettate, ricci spinosi, tronco scanalato.", similar:"Distinguere bene da ippocastano ornamentale.", action:"Osserva ricci, foglie e corteccia; rispetta proprietà e regolamenti.", story:"Collega biodiversità, economia rurale e passeggiate autunnali."},
  {id:"porcino", name:"Porcino", latin:"Boletus edulis e gruppo", icon:"🍄", category:"funghi", habitat:"bosco", risk:"alto", score:71, season:"autunno", use:"Informazione divulgativa: consumo solo dopo controllo micologico.", clues:"Cappello bruno, tubuli sotto il cappello, gambo robusto.", similar:"Molti funghi richiedono verifica professionale.", action:"Non consumare mai senza controllo micologico.", story:"Scheda ad alto impatto con disclaimer forte e regole di sicurezza."},
  {id:"amanita", name:"Amanita falloide", latin:"Amanita phalloides", icon:"⚠️", category:"funghi", habitat:"bosco", risk:"alto", score:68, season:"estate-autunno", use:"Tossica mortale. Non raccogliere, non manipolare per consumo.", clues:"Cappello verdastro, lamelle bianche, volva alla base.", similar:"Può essere confusa da inesperti con specie commestibili.", action:"Segnala come specie da evitare e non raccogliere.", story:"Fondamentale per educazione alla prevenzione."},
  {id:"istrice", name:"Istrice", latin:"Hystrix cristata", icon:"🦔", category:"fauna", habitat:"sentiero", risk:"basso", score:88, season:"tutto l'anno", use:"Osservare tracce senza disturbare.", clues:"Aculei caduti, impronte, scavi e passaggi notturni.", similar:"Tracce distinguibili da cinghiale e tasso.", action:"Osserva da distanza e non disturbare tane o passaggi.", story:"Porta la fauna nell'app anche senza avvistamenti diretti."},
  {id:"martin", name:"Martin pescatore", latin:"Alcedo atthis", icon:"🐦", category:"fauna", habitat:"lago", risk:"basso", score:77, season:"tutto l'anno", use:"Osservazione fotografica rispettosa.", clues:"Colori blu-arancio, volo rapido vicino all'acqua.", similar:"Può essere visto solo per pochi secondi.", action:"Resta in silenzio, non avvicinarti ai nidi.", story:"Ideale per Nemi e ambienti umidi."},
  {id:"traccia", name:"Tracce di cinghiale", latin:"Sus scrofa", icon:"🐾", category:"tracce", habitat:"bosco", risk:"medio", score:86, season:"tutto l'anno", use:"Riconoscere presenza e mantenere distanza.", clues:"Terreno smosso, impronte doppie, fango e sentieri battuti.", similar:"Non avvicinarsi ad animali o piccoli.", action:"Cambia traiettoria se noti presenza recente.", story:"Trasforma la sicurezza outdoor in gioco educativo."},
  {id:"nepitella", name:"Nepitella", latin:"Clinopodium nepeta", icon:"🌱", category:"erbe", habitat:"sentiero", risk:"medio", score:82, season:"estate-autunno", use:"Uso aromatico tradizionale, da validare su raccolta e corretta identificazione.", clues:"Piccole foglie opposte, odore mentolato, fiori chiari.", similar:"Può essere confusa con altre Lamiaceae spontanee.", action:"Annusa e fotografa senza raccogliere; valida con guida esperta.", story:"Ottima scheda per cucina territoriale e laboratori sensoriali."},
  {id:"ciclamino", name:"Ciclamino selvatico", latin:"Cyclamen hederifolium", icon:"🌸", category:"erbe", habitat:"bosco", risk:"alto", score:74, season:"autunno", use:"Specie ornamentale e naturale da osservare, non da usare in cucina.", clues:"Fiori rosa ripiegati e foglie cuoriformi marmorizzate.", similar:"La bellezza del fiore può spingere alla raccolta: va scoraggiata.", action:"Osserva, fotografa e lascia sul posto.", story:"Serve a parlare di rispetto, divieti e biodiversità fragile."},
  {id:"alloro", name:"Alloro", latin:"Laurus nobilis", icon:"🍃", category:"alberi", habitat:"sentiero", risk:"basso", score:90, season:"tutto l'anno", use:"Uso aromatico noto, con attenzione a non confondere foglie simili.", clues:"Foglie coriacee, aromatiche, verde scuro e lanceolate.", similar:"Mai usare foglie di piante non identificate con certezza.", action:"Controlla odore, foglia e portamento della pianta.", story:"Ponte immediato tra botanica, cucina e memoria domestica."},
  {id:"salamandrina", name:"Salamandrina dagli occhiali", latin:"Salamandrina perspicillata", icon:"🦎", category:"fauna", habitat:"bosco", risk:"basso", score:73, season:"primavera-autunno", use:"Osservazione a distanza, senza manipolazione.", clues:"Piccolo anfibio, disegno chiaro sul capo, ambienti umidi.", similar:"Specie sensibile: non spostare individui e non alterare rifugi.", action:"Non toccare e non alterare pietre, foglie o rifugi.", story:"Dà valore naturalistico alto ai percorsi umidi e ombrosi."}
];

const taxonomies = {
  category: [["all","Tutto"],["erbe","Erbe"],["funghi","Funghi"],["fauna","Fauna"],["tracce","Tracce"],["alberi","Alberi"]],
  habitat: [["all","Tutti"],["bosco","Bosco"],["lago","Lago"],["prato","Prato"],["sentiero","Sentiero"]],
  risk: [["all","Tutti"],["basso","Basso"],["medio","Medio"],["alto","Alto"]]
};

const missions = [
  "Osserva senza raccogliere",
  "Riconosci un habitat",
  "Trova una traccia",
  "Confronta specie simili",
  "Segna la stagione",
  "Rispetta un divieto",
  "Fai una domanda all'assistente",
  "Valida con un esperto"
];

const storage = {
  get(key, fallback) {
    try {
      return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
    } catch {
      localStorage.removeItem(key);
      return fallback;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      toast("Memoria locale non disponibile");
    }
  }
};

const state = {
  category: "all",
  habitat: "all",
  risk: "all",
  search: "",
  selected: "borragine",
  memory: storage.get("custodi-ai-memory", []),
  stamps: storage.get("custodi-stamps", [])
};

const $ = (id) => document.getElementById(id);
const escapeHTML = (value) => String(value).replace(/[&<>"']/g, char => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#039;"
}[char]));

function save() {
  state.memory = state.memory.slice(-12);
  storage.set("custodi-ai-memory", state.memory);
  storage.set("custodi-stamps", state.stamps);
  $("memory-count").textContent = state.memory.length;
}

function toast(text) {
  const el = $("toast");
  el.textContent = text;
  el.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => el.classList.remove("show"), 2300);
}

function populateSelect(id, rows, value) {
  const select = $(id);
  select.innerHTML = rows.map(([key, label]) => `<option value="${key}">${label}</option>`).join("");
  select.value = value;
}

function filteredSpecies() {
  const term = state.search.trim().toLowerCase();
  const aliases = {
    fungo: "funghi porcino amanita micologico cappello lamelle tubuli",
    funghi: "fungo porcino amanita micologico cappello lamelle tubuli",
    erba: "erbe borragine sambuco nepitella ciclamino officinale aromatica",
    erbe: "erba borragine sambuco nepitella ciclamino officinale aromatica",
    uccello: "fauna martin pescatore lago volo",
    traccia: "tracce impronte cinghiale istrice aculei",
    cucina: "commestibile aromatico alloro nepitella borragine sambuco",
    scuola: "missioni passaporto osserva habitat sicurezza famiglie"
  };
  return species.filter(item => {
    const matchesFilters =
      (state.category === "all" || item.category === state.category) &&
      (state.habitat === "all" || item.habitat === state.habitat) &&
      (state.risk === "all" || item.risk === state.risk);

    const haystack = [
      item.name, item.latin, item.category, item.habitat, item.risk,
      item.season, item.use, item.clues, item.story,
      aliases[item.category] || "", aliases[item.name.toLowerCase()] || "", aliases[term] || ""
    ].join(" ").toLowerCase();

    return matchesFilters && (!term || haystack.includes(term));
  });
}

function bestCandidates() {
  const list = filteredSpecies();
  const source = list.length ? list : species;
  const selected = source.find(item => item.id === state.selected) || source[0];
  const others = source
    .filter(item => item.id !== selected.id)
    .sort((a, b) => b.score - a.score)
    .slice(0, 2);
  return [selected, ...others].slice(0, 3);
}

function riskLabel(risk) {
  return risk === "alto" ? "verifica obbligatoria" : risk === "medio" ? "prudenza richiesta" : "osservazione sicura";
}

function renderScanner() {
  const candidates = bestCandidates();
  const main = candidates[0];
  $("live-result").innerHTML = `
    <small>corrispondenza locale più probabile</small>
    <strong>${main.icon} ${main.name}</strong>
    <span>${main.clues}</span>
    <div class="confidence">
      <span>${main.score}% · ${riskLabel(main.risk)}</span>
      <div class="confidence-bar"><i style="--score:${main.score}%"></i></div>
    </div>
  `;

  $("candidate-stack").innerHTML = candidates.map((item, index) => `
    <button class="candidate ${index === 0 ? "active" : ""}" type="button" data-id="${item.id}">
      <small>ipotesi ${index + 1}</small>
      <strong>${item.icon} ${item.name}<em>${item.score}%</em></strong>
      <span>${item.habitat} · ${item.season} · rischio ${item.risk}</span>
    </button>
  `).join("");

  document.querySelectorAll(".candidate").forEach(button => {
    button.addEventListener("click", () => {
      state.selected = button.dataset.id;
      renderAll(false);
      document.querySelector("#atlante").scrollIntoView({behavior: "smooth", block: "start"});
    });
  });
}

function renderSpeciesList() {
  const list = filteredSpecies();
  if (!list.some(item => item.id === state.selected) && list.length) {
    state.selected = list[0].id;
  }

  $("species-list").innerHTML = list.map(item => `
    <button class="species-button ${state.selected === item.id ? "active" : ""}" type="button" data-species="${item.id}">
      <strong>${item.icon} ${item.name}</strong>
      <span>${item.latin} · ${item.habitat} · rischio ${item.risk}</span>
    </button>
  `).join("") || `<p>Nessuna specie compatibile con la ricerca.</p>`;

  document.querySelectorAll("[data-species]").forEach(button => {
    button.addEventListener("click", () => {
      state.selected = button.dataset.species;
      renderAll(false);
    });
  });
}

function renderSpeciesDetail() {
  const item = species.find(row => row.id === state.selected) || filteredSpecies()[0] || species[0];
  $("species-detail").innerHTML = `
    <div class="species-header">
      <div>
        <small>scheda locale validabile</small>
        <h3>${item.name}</h3>
        <p class="latin">${item.latin}</p>
      </div>
      <div class="species-icon">${item.icon}</div>
    </div>
    <div class="tag-row">
      <span class="tag">${item.category}</span>
      <span class="tag">${item.habitat}</span>
      <span class="tag">${item.season}</span>
      <span class="tag risk-${item.risk}">attenzione ${item.risk}</span>
    </div>
    <div class="detail-grid">
      <div class="mini-card"><strong>Come riconoscerla</strong><p>${item.clues}</p></div>
      <div class="mini-card"><strong>Uso e cultura</strong><p>${item.use}</p></div>
      <div class="mini-card"><strong>Cosa non sbagliare</strong><p>${item.similar}</p></div>
      <div class="mini-card"><strong>Azione consigliata</strong><p>${item.action}</p></div>
    </div>
    <div class="mini-card" style="margin-top:16px"><strong>Racconto territoriale</strong><p>${item.story}</p></div>
  `;
}

function renderStats() {
  const list = filteredSpecies();
  const highRisk = list.filter(item => item.risk === "alto").length;
  $("atlas-stats").innerHTML = `
    <span>${list.length} schede visibili</span>
    <span>${highRisk} ad alta attenzione</span>
    <span>${new Set(list.map(item => item.habitat)).size} habitat</span>
  `;
}

function structuredAnswer(title, body, caution, next) {
  return `<strong>${title}</strong><br>${body}<br><span class="answer-note">${caution}</span><br><small>${next}</small>`;
}

function answer(question) {
  const q = question.toLowerCase();
  const found = species.find(item =>
    q.includes(item.name.toLowerCase().split(" ")[0]) ||
    q.includes(item.category) ||
    q.includes(item.habitat)
  );

  if (q.includes("commest") || q.includes("mang") || q.includes("cucina")) {
    return structuredAnswer(
      "Orientamento alimentare",
      "Posso raccontare usi tradizionali e differenze tra specie simili, ma non autorizzo raccolta o consumo.",
      "Per funghi, bacche ed erbe spontanee serve sempre verifica di un esperto o micologo.",
      "Nel prototipo questa risposta resta educativa; nella versione validata le schede sensibili possono essere firmate da partner esperti."
    );
  }

  if (q.includes("foto") || q.includes("scanner") || q.includes("lens")) {
    return structuredAnswer(
      "Scanner guidato",
      "La foto resta nel dispositivo. L'app usa categoria, habitat, stagione e rischio per proporre ipotesi locali credibili.",
      "Non dichiara identificazione certa: mostra confidenza e specie alternative.",
      "La fase 2 può aggiungere AI reale solo se budget, dataset e responsabilità lo giustificano."
    );
  }

  if (q.includes("scuola") || q.includes("famigl") || q.includes("bambin")) {
    return structuredAnswer(
      "Percorso educativo",
      "La parte più forte è il passaporto: missioni semplici, osservazione senza raccolta, confronto tra specie e rispetto dei divieti.",
      "La sicurezza viene prima del gioco.",
      "Ideale per laboratori, visite guidate e attività stagionali nei Castelli Romani."
    );
  }

  if (q.includes("nemi") || q.includes("luna") || q.includes("partner")) {
    return structuredAnswer(
      "Validazione locale",
      "Un partner esperto può rendere autorevoli le schede su erbe, fiori commestibili e usi tradizionali.",
      "I contenuti sensibili vanno validati, non improvvisati.",
      "La collaborazione può partire da un primo pacchetto di 20 schede ad alto impatto."
    );
  }

  if (found) {
    return structuredAnswer(
      found.name,
      `${found.clues} Uso: ${found.use}`,
      `Attenzione: ${found.similar}`,
      `Azione consigliata: ${found.action}`
    );
  }

  return structuredAnswer(
    "Partiamo dall'osservazione",
    "Dimmi cosa hai visto, dove lo hai visto e in che stagione. Io restringo il campo alle specie dei Castelli Romani.",
    "Mostro sempre livello di attenzione, specie simili e cosa non fare.",
    "Puoi chiedere: 'è commestibile?', 'che traccia è?', 'come funziona lo scanner?'."
  );
}

function renderChat() {
  const initial = state.memory.length ? "" : `
    <div class="msg bot">
      <strong>Assistente naturalistico locale</strong><br>
      Posso aiutarti a orientarti tra erbe, funghi, fauna e tracce dei Castelli Romani. Le risposte restano nel browser e hanno finalità educativa.
    </div>
  `;

  $("chat-log").innerHTML = initial + state.memory.map(message => {
    const text = message.role === "bot" ? message.text : escapeHTML(message.text);
    return `<div class="msg ${message.role}">${text}</div>`;
  }).join("");

  $("chat-log").scrollTop = $("chat-log").scrollHeight;
  $("quick-prompts").innerHTML = [
    "È commestibile?",
    "Come funziona lo scanner?",
    "Percorso per scuole",
    "Ruolo di Le Erbe della Luna"
  ].map(text => `<button type="button">${text}</button>`).join("");

  document.querySelectorAll(".quick-prompts button").forEach(button => {
    button.addEventListener("click", () => ask(button.textContent));
  });
}

function ask(text) {
  const clean = text.trim();
  if (!clean) return;
  state.memory.push({role: "user", text: clean});
  state.memory.push({role: "bot", text: answer(clean)});
  if (!state.stamps.includes(6)) state.stamps = [...state.stamps, 6];
  save();
  renderChat();
  renderPassport();
}

function renderPassport() {
  const completed = state.stamps.length;
  const pct = Math.round((completed / missions.length) * 100);
  $("passport-title").textContent = `${completed} missioni completate`;
  $("passport-copy").textContent = completed >= missions.length
    ? "Profilo custode completato: percorso pronto per scuole, famiglie e visite guidate."
    : "Completa le missioni per sbloccare il profilo da custode del territorio.";
  $("progress-ring").style.setProperty("--progress", `${pct}%`);
  $("progress-ring").querySelector("span").textContent = `${pct}%`;

  $("stamp-board").innerHTML = missions.map((mission, index) => `
    <button class="stamp ${state.stamps.includes(index) ? "done" : ""}" type="button" style="--tilt:${index % 2 ? "-2deg" : "2deg"}" data-stamp="${index}">
      ${mission}
    </button>
  `).join("");

  document.querySelectorAll("[data-stamp]").forEach(button => {
    button.addEventListener("click", () => {
      const id = Number(button.dataset.stamp);
      state.stamps = state.stamps.includes(id)
        ? state.stamps.filter(item => item !== id)
        : [...state.stamps, id].sort((a, b) => a - b);
      save();
      renderPassport();
      toast(state.stamps.includes(id) ? "Missione completata" : "Missione rimossa");
    });
  });
}

function renderMemory() {
  $("memory-items").innerHTML = state.memory.length
    ? state.memory.map((message, index) => `
      <div class="memory-item">
        <strong>${index + 1}. ${message.role === "bot" ? "Assistente" : "Tu"}</strong>
        <span>${message.role === "bot" ? message.text : escapeHTML(message.text)}</span>
      </div>
    `).join("")
    : "<p>Nessuna memoria salvata.</p>";
}

function renderAll(persist = true) {
  renderSpeciesList();
  renderSpeciesDetail();
  renderScanner();
  renderStats();
  renderChat();
  renderPassport();
  if (persist) save();
}

function scanRandomSpecies() {
  const list = filteredSpecies();
  const source = list.length ? list : species;
  state.selected = source[Math.floor(Math.random() * source.length)].id;
  renderAll();
  toast("Scansione guidata aggiornata");
}

populateSelect("category-filter", taxonomies.category, state.category);
populateSelect("habitat-filter", taxonomies.habitat, state.habitat);
populateSelect("risk-filter", taxonomies.risk, state.risk);

$("category-filter").addEventListener("change", event => {
  state.category = event.target.value;
  renderAll();
});

$("habitat-filter").addEventListener("change", event => {
  state.habitat = event.target.value;
  renderAll();
});

$("risk-filter").addEventListener("change", event => {
  state.risk = event.target.value;
  renderAll();
});

$("search-input").addEventListener("input", event => {
  state.search = event.target.value;
  renderAll(false);
});

$("guided-id").addEventListener("click", scanRandomSpecies);

$("photo-input").addEventListener("change", event => {
  const file = event.target.files[0];
  if (!file) return;
  $("file-label").textContent = `${file.name} · analizzata solo in locale`;
  const reader = new FileReader();
  reader.onload = () => {
    $("scan-image").src = reader.result;
    scanRandomSpecies();
  };
  reader.readAsDataURL(file);
});

$("chat-form").addEventListener("submit", event => {
  event.preventDefault();
  const input = $("chat-input");
  ask(input.value);
  input.value = "";
});

$("open-memory").addEventListener("click", () => {
  renderMemory();
  $("memory-dialog").showModal();
});

$("close-memory").addEventListener("click", () => $("memory-dialog").close());

$("clear-memory").addEventListener("click", () => {
  state.memory = [];
  save();
  renderChat();
  renderMemory();
  toast("Memoria cancellata");
});

renderAll();
