const species = [
  {
    id: "borragine",
    name: "Borragine",
    latin: "Borago officinalis",
    icon: "🌿",
    category: "erbe",
    habitat: "prato",
    risk: "medio",
    season: "primavera",
    traits: ["fiori", "foglie"],
    use: "È legata a usi alimentari tradizionali, da approfondire esclusivamente con una guida esperta.",
    clues: "Fiori blu a stella, foglie ruvide e pelose, portamento erbaceo.",
    similar: "Altre piante spontanee con foglie pelose o fiori azzurri.",
    action: "Osserva fiore, foglia e ambiente; non raccogliere senza una verifica qualificata.",
    story: "Racconta il legame tra cucina del territorio, stagionalità e prudenza."
  },
  {
    id: "sambuco",
    name: "Sambuco",
    latin: "Sambucus nigra",
    icon: "🌼",
    category: "erbe",
    habitat: "sentiero",
    risk: "medio",
    season: "primavera-estate",
    traits: ["fiori", "frutti"],
    use: "Fiori e frutti sono presenti nella tradizione locale, ma parti e maturazione richiedono attenzione.",
    clues: "Infiorescenze chiare a ombrello, odore intenso e bacche scure a maturazione.",
    similar: "Specie con infiorescenze chiare o bacche scure possono generare confusione.",
    action: "Fotografa più parti della pianta e chiedi una verifica prima di qualsiasi uso.",
    story: "È una presenza ricorrente nei racconti su tisane, sciroppi e consuetudini rurali."
  },
  {
    id: "castagno",
    name: "Castagno",
    latin: "Castanea sativa",
    icon: "🌰",
    category: "alberi",
    habitat: "bosco",
    risk: "basso",
    season: "autunno",
    traits: ["foglie", "frutti"],
    use: "Castagne, castagneti e cultura alimentare sono parte del paesaggio storico dei boschi locali.",
    clues: "Foglie lanceolate e seghettate, ricci molto spinosi, tronco spesso scanalato.",
    similar: "L’ippocastano ornamentale produce frutti differenti e non va confuso con il castagno.",
    action: "Osserva ricci, foglie e corteccia; rispetta proprietà, divieti e regole di raccolta.",
    story: "Unisce biodiversità, memoria contadina, economia rurale e passeggiate autunnali."
  },
  {
    id: "porcino",
    name: "Porcino",
    latin: "Boletus edulis e gruppo",
    icon: "🍄",
    category: "funghi",
    habitat: "bosco",
    risk: "alto",
    season: "autunno",
    traits: ["fungo"],
    use: "Le informazioni sono esclusivamente divulgative: il consumo richiede controllo micologico.",
    clues: "Cappello bruno, superficie a tubuli sotto il cappello e gambo robusto.",
    similar: "Numerosi boleti e altri funghi richiedono un confronto professionale.",
    action: "Non consumare mai un fungo senza controllo micologico.",
    story: "Invita a leggere il bosco d’autunno mantenendo la sicurezza al centro dell’esperienza."
  },
  {
    id: "amanita",
    name: "Amanita falloide",
    latin: "Amanita phalloides",
    icon: "⚠️",
    category: "funghi",
    habitat: "bosco",
    risk: "alto",
    season: "estate-autunno",
    traits: ["fungo"],
    use: "Specie velenosa mortale: non deve essere raccolta per uso alimentare.",
    clues: "Cappello verdastro, lamelle bianche, anello e volva alla base.",
    similar: "Può essere confusa da persone inesperte con specie considerate commestibili.",
    action: "Osserva senza raccogliere e segnala l’incontro durante le attività educative.",
    story: "Conoscerla aiuta a comprendere perché il controllo micologico è indispensabile."
  },
  {
    id: "istrice",
    name: "Istrice",
    latin: "Hystrix cristata",
    icon: "🦔",
    category: "fauna",
    habitat: "sentiero",
    risk: "basso",
    season: "tutto l'anno",
    traits: ["tracce"],
    use: "Le tracce permettono di riconoscere la presenza dell’animale senza disturbarlo.",
    clues: "Aculei caduti, impronte, scavi e passaggi utilizzati soprattutto nelle ore notturne.",
    similar: "Scavi e piste possono essere confrontati con quelli di cinghiale e tasso.",
    action: "Mantieni la distanza e non avvicinarti a tane o passaggi frequentati.",
    story: "Mostra come la fauna possa essere scoperta anche senza un avvistamento diretto."
  },
  {
    id: "martin",
    name: "Martin pescatore",
    latin: "Alcedo atthis",
    icon: "🐦",
    category: "fauna",
    habitat: "lago",
    risk: "basso",
    season: "tutto l'anno",
    traits: ["piumaggio"],
    use: "È una specie da osservare in silenzio e a distanza, preferibilmente con binocolo.",
    clues: "Piumaggio blu e arancio, sagoma compatta e volo rapido vicino all’acqua.",
    similar: "La rapidità del volo può rendere difficile distinguere colori e dimensioni.",
    action: "Resta in silenzio e non avvicinarti a posatoi, nidi o sponde sensibili.",
    story: "Un incontro prezioso negli ambienti umidi e lungo le sponde dei laghi."
  },
  {
    id: "traccia",
    name: "Tracce di cinghiale",
    latin: "Sus scrofa",
    icon: "🐾",
    category: "tracce",
    habitat: "bosco",
    risk: "medio",
    season: "tutto l'anno",
    traits: ["tracce"],
    use: "Riconoscere i segni recenti aiuta a mantenere una distanza rispettosa.",
    clues: "Terreno smosso, impronte doppie, fango su tronchi e sentieri battuti.",
    similar: "Impronte e scavi vanno confrontati con quelli di altri mammiferi.",
    action: "Cambia traiettoria se noti una presenza recente e non avvicinarti ai piccoli.",
    story: "Leggere il terreno aiuta a muoversi nel bosco con maggiore attenzione."
  },
  {
    id: "nepitella",
    name: "Nepitella",
    latin: "Clinopodium nepeta",
    icon: "🌱",
    category: "erbe",
    habitat: "sentiero",
    risk: "medio",
    season: "estate-autunno",
    traits: ["foglie", "fiori"],
    use: "È legata a usi aromatici tradizionali che richiedono identificazione corretta.",
    clues: "Piccole foglie opposte, profumo mentolato e fiori chiari.",
    similar: "Può essere confusa con altre Lamiaceae spontanee.",
    action: "Osserva e fotografa senza raccogliere; chiedi conferma a una guida esperta.",
    story: "Crea un ponte tra botanica, cucina territoriale e attività sensoriali."
  },
  {
    id: "ciclamino",
    name: "Ciclamino selvatico",
    latin: "Cyclamen hederifolium",
    icon: "🌸",
    category: "erbe",
    habitat: "bosco",
    risk: "alto",
    season: "autunno",
    traits: ["fiori", "foglie"],
    use: "È una specie da osservare nel suo ambiente e non destinata all’uso alimentare.",
    clues: "Fiori rosa con petali ripiegati e foglie cuoriformi spesso marmorizzate.",
    similar: "La forma delle foglie e il periodo di fioritura aiutano il confronto.",
    action: "Fotografa senza raccogliere e lascia intatto il sottobosco.",
    story: "Aiuta a parlare di rispetto, divieti e biodiversità fragile."
  },
  {
    id: "alloro",
    name: "Alloro",
    latin: "Laurus nobilis",
    icon: "🍃",
    category: "alberi",
    habitat: "sentiero",
    risk: "medio",
    season: "tutto l'anno",
    traits: ["foglie"],
    use: "È conosciuto nella tradizione aromatica, ma foglie simili appartengono anche ad altre specie.",
    clues: "Foglie coriacee, aromatiche, verde scuro e lanceolate.",
    similar: "Lauroceraso e altre piante con foglie lucide non devono essere confuse con l’alloro.",
    action: "Non utilizzare foglie raccolte senza un’identificazione qualificata.",
    story: "Collega botanica, cucina e memoria domestica."
  },
  {
    id: "salamandrina",
    name: "Salamandrina dagli occhiali",
    latin: "Salamandrina perspicillata",
    icon: "🦎",
    category: "fauna",
    habitat: "bosco",
    risk: "basso",
    season: "primavera-autunno",
    traits: ["anfibio"],
    use: "Va osservata a distanza, senza manipolazione e senza alterare il rifugio.",
    clues: "Piccolo anfibio con disegno chiaro sul capo, legato ad ambienti freschi e umidi.",
    similar: "Altri piccoli anfibi possono condividere rifugi e ambienti simili.",
    action: "Non toccare e non spostare pietre, foglie o legni utilizzati come riparo.",
    story: "Rivela il valore naturalistico dei percorsi umidi e ombrosi."
  },
  {
    id: "leccio",
    name: "Leccio",
    latin: "Quercus ilex",
    icon: "🌳",
    category: "alberi",
    habitat: "bosco",
    risk: "basso",
    season: "tutto l'anno",
    traits: ["foglie", "frutti"],
    use: "Sempreverde mediterraneo, contribuisce a creare rifugio e ombra sui versanti più caldi e asciutti.",
    clues: "Foglie coriacee verde scuro, pagina inferiore più chiara e ghiande parzialmente avvolte dalla cupola.",
    similar: "Le foglie giovani possono ricordare quelle dell'agrifoglio; forma e margine cambiano con età ed esposizione.",
    action: "Osserva chioma, corteccia e ghiande senza spezzare rami o calpestare la rinnovazione.",
    story: "Le leccete miste caratterizzano soprattutto i versanti lacustri di Nemi e Albano."
  },
  {
    id: "roverella",
    name: "Roverella",
    latin: "Quercus pubescens",
    icon: "🍂",
    category: "alberi",
    habitat: "bosco",
    risk: "basso",
    season: "primavera-autunno",
    traits: ["foglie", "frutti"],
    use: "Quercia legata agli ambienti luminosi e relativamente asciutti, importante per insetti, uccelli e piccoli mammiferi.",
    clues: "Foglie lobate spesso pubescenti sulla pagina inferiore e rametti giovani leggermente pelosi.",
    similar: "Può essere confusa con altre querce caducifoglie; osserva pelosità, picciolo e forma dei lobi.",
    action: "Confronta più foglie cadute e non incidere la corteccia.",
    story: "È una delle querce che testimoniano la vegetazione originaria precedente alla diffusione dei castagneti."
  },
  {
    id: "cerro",
    name: "Cerro",
    latin: "Quercus cerris",
    icon: "🌰",
    category: "alberi",
    habitat: "bosco",
    risk: "basso",
    season: "primavera-autunno",
    traits: ["foglie", "frutti"],
    use: "Grande quercia dei boschi misti, offre cavità, lettiera e risorse alimentari a numerose specie.",
    clues: "Foglie profondamente lobate e cupola della ghianda con lunghe squame sottili e arricciate.",
    similar: "Le foglie possono ricordare altre querce; la cupola 'spettinata' della ghianda è un indizio utile.",
    action: "Osserva le ghiande già cadute e lascia a terra legno morto e lettiera.",
    story: "Nel bosco del Cerquone convive con grandi farnie formando un ambiente di particolare valore naturalistico."
  },
  {
    id: "faggio",
    name: "Faggio",
    latin: "Fagus sylvatica",
    icon: "🌿",
    category: "alberi",
    habitat: "bosco",
    risk: "basso",
    season: "primavera-autunno",
    traits: ["foglie", "frutti"],
    use: "Albero tipico di condizioni fresche e umide, forma chiome dense che regolano luce e microclima del sottobosco.",
    clues: "Corteccia liscia grigio-argentea, foglie ovali con margine ondulato e gemme lunghe e appuntite.",
    similar: "Carpino e altre latifoglie possono confondere a distanza; corteccia e gemme aiutano il confronto.",
    action: "Resta sul tracciato nei nuclei più delicati e non rimuovere giovani piantine.",
    story: "Piccoli nuclei residuali sopravvivono sui Monti delle Faete e dell'Artemisio, memoria delle antiche faggete."
  },
  {
    id: "farnia",
    name: "Farnia",
    latin: "Quercus robur",
    icon: "🌳",
    category: "alberi",
    habitat: "bosco",
    risk: "basso",
    season: "primavera-autunno",
    traits: ["foglie", "frutti"],
    use: "Quercia longeva dei suoli profondi e freschi, crea habitat complessi per fauna, funghi e licheni.",
    clues: "Foglie con picciolo molto corto e base auricolata; ghiande portate da un peduncolo evidente.",
    similar: "Può essere confusa con rovere e altre querce; controlla picciolo fogliare e peduncolo delle ghiande.",
    action: "Ammira gli esemplari maturi a distanza e non entrare nelle cavità del tronco.",
    story: "Nel Cerquone-Doganella sono presenti farnie monumentali insieme al cerro."
  },
  {
    id: "corbezzolo",
    name: "Corbezzolo",
    latin: "Arbutus unedo",
    icon: "🔴",
    category: "alberi",
    habitat: "sentiero",
    risk: "medio",
    season: "autunno-inverno",
    traits: ["fiori", "frutti", "foglie"],
    use: "Arbusto mediterraneo sempreverde; fiori e frutti maturi possono comparire contemporaneamente.",
    clues: "Foglie lucide e seghettate, fiori bianchi a campanella e frutti rossi dalla superficie granulosa.",
    similar: "Frutti rossi di altre piante non sono intercambiabili e non vanno assaggiati per identificarli.",
    action: "Osserva colori e consistenze senza consumare frutti raccolti lungo il percorso.",
    story: "È tra le essenze mediterranee segnalate nei settori più miti del territorio."
  },
  {
    id: "agrifoglio",
    name: "Agrifoglio",
    latin: "Ilex aquifolium",
    icon: "🍃",
    category: "alberi",
    habitat: "bosco",
    risk: "alto",
    season: "tutto l'anno",
    traits: ["foglie", "frutti"],
    use: "Sempreverde del sottobosco; le bacche sostengono alcuni uccelli ma non sono alimento per le persone.",
    clues: "Foglie lucide spesso spinose e bacche rosse persistenti sugli esemplari femminili.",
    similar: "Le foglie meno spinose dei rami alti possono ricordare altri sempreverdi.",
    action: "Non raccogliere rami o bacche e rispetta gli esemplari del sottobosco.",
    story: "Compare fra gli elementi arborei e arbustivi dei boschi misti dei Castelli Romani."
  },
  {
    id: "tasso",
    name: "Tasso",
    latin: "Meles meles",
    icon: "🦡",
    category: "fauna",
    habitat: "bosco",
    risk: "basso",
    season: "tutto l'anno",
    traits: ["tracce"],
    use: "Mammifero prevalentemente notturno: impronte e tane raccontano la sua presenza più degli avvistamenti.",
    clues: "Impronte con cinque dita e unghie evidenti, sentieri regolari e ingressi di tana ampi con terreno smosso.",
    similar: "Le piste possono sovrapporsi a quelle di volpe, istrice e cinghiale.",
    action: "Non entrare nelle tane, non lasciare cibo e osserva le tracce senza seguirle fuori sentiero.",
    story: "Il suo ritorno è uno dei segnali di recupero della biodiversità del Parco."
  },
  {
    id: "scoiattolo",
    name: "Scoiattolo comune",
    latin: "Sciurus vulgaris",
    icon: "🐿️",
    category: "fauna",
    habitat: "bosco",
    risk: "basso",
    season: "tutto l'anno",
    traits: ["tracce"],
    use: "Contribuisce alla dinamica del bosco consumando e disperdendo semi e frutti.",
    clues: "Coda folta, movimenti rapidi sui tronchi, pigne rosicchiate e gusci aperti.",
    similar: "Pigne e nocciole possono essere lavorate anche da roditori e uccelli.",
    action: "Osserva da lontano e non attirarlo con cibo.",
    story: "È una presenza tipica dei boschi del Parco, soprattutto dove le chiome sono continue."
  },
  {
    id: "moscardino",
    name: "Moscardino",
    latin: "Muscardinus avellanarius",
    icon: "🐭",
    category: "fauna",
    habitat: "bosco",
    risk: "basso",
    season: "primavera-autunno",
    traits: ["tracce"],
    use: "Piccolo roditore arboricolo legato a siepi e boschi strutturati, indicatore della continuità degli habitat.",
    clues: "Nidi sferici tra la vegetazione e nocciole aperte con un foro rotondo dal bordo regolare.",
    similar: "I segni di alimentazione sulle nocciole vanno confrontati con quelli di topo e scoiattolo.",
    action: "Non aprire nidi e non scuotere arbusti o cassette di monitoraggio.",
    story: "È specie di interesse comunitario sottoposta a monitoraggio regionale anche nel Parco."
  },
  {
    id: "picchio-verde",
    name: "Picchio verde",
    latin: "Picus viridis",
    icon: "🪶",
    category: "fauna",
    habitat: "bosco",
    risk: "basso",
    season: "tutto l'anno",
    traits: ["piumaggio"],
    use: "Si alimenta spesso a terra cercando formiche e usa alberi maturi per riposo e nidificazione.",
    clues: "Corpo verde, capo rosso, groppone giallo-verde e richiamo sonoro simile a una risata.",
    similar: "Il picchio rosso maggiore ha piumaggio bianco e nero più contrastato e volo ondulato.",
    action: "Ascolta prima di cercarlo e non avvicinarti alle cavità di nidificazione.",
    story: "È uno degli uccelli silvani segnalati nei boschi dei Castelli Romani."
  },
  {
    id: "picchio-rosso",
    name: "Picchio rosso maggiore",
    latin: "Dendrocopos major",
    icon: "🐦",
    category: "fauna",
    habitat: "bosco",
    risk: "basso",
    season: "tutto l'anno",
    traits: ["piumaggio"],
    use: "Scava cavità e cerca insetti nel legno, contribuendo alla rete ecologica degli alberi maturi.",
    clues: "Piumaggio bianco e nero, sottocoda rosso e tambureggiamento breve sui tronchi.",
    similar: "Altri picchi pezzati richiedono attenzione a dimensioni, disegno del capo e vocalizzazioni.",
    action: "Usa il binocolo e mantieni distanza dalle cavità frequentate.",
    story: "Frequenta castagneti e boschi misti, dove il legno vecchio offre nutrimento e rifugio."
  },
  {
    id: "upupa",
    name: "Upupa",
    latin: "Upupa epops",
    icon: "🐦",
    category: "fauna",
    habitat: "prato",
    risk: "basso",
    season: "primavera-estate",
    traits: ["piumaggio"],
    use: "Cerca invertebrati nel terreno e frequenta ambienti aperti con alberi, muri o cavità vicine.",
    clues: "Cresta erettile, ali bianche e nere, becco lungo ricurvo e volo ondulato.",
    similar: "La sagoma e il disegno alare sono molto caratteristici, ma l'osservazione può essere fugace.",
    action: "Non avvicinarti ai siti di nidificazione e osserva dagli spazi già aperti.",
    story: "È inclusa fra gli uccelli silvani e delle aree aperte segnalati nel Parco."
  },
  {
    id: "folaga",
    name: "Folaga",
    latin: "Fulica atra",
    icon: "🦆",
    category: "fauna",
    habitat: "lago",
    risk: "basso",
    season: "tutto l'anno",
    traits: ["piumaggio"],
    use: "Uccello acquatico che frequenta acque aperte e vegetazione di sponda.",
    clues: "Piumaggio scuro uniforme, becco e placca frontale bianchi, movimenti energici sull'acqua.",
    similar: "La gallinella d'acqua ha becco rosso-giallo e una linea bianca sul fianco.",
    action: "Resta lontano da nidi e canneti, soprattutto nel periodo riproduttivo.",
    story: "È una delle specie acquatiche regolarmente osservabili nei laghi del Parco."
  },
  {
    id: "svasso",
    name: "Svasso maggiore",
    latin: "Podiceps cristatus",
    icon: "🦆",
    category: "fauna",
    habitat: "lago",
    risk: "basso",
    season: "tutto l'anno",
    traits: ["piumaggio"],
    use: "Tuffatore specializzato, cattura piccoli animali acquatici e costruisce nidi galleggianti.",
    clues: "Collo lungo, profilo slanciato e, in abito riproduttivo, ciuffi scuri e gorgiera castana.",
    similar: "Tuffetto e altri svassi sono più piccoli e mostrano proporzioni diverse.",
    action: "Osserva dalla riva senza entrare nella vegetazione né avvicinarti ai nidi galleggianti.",
    story: "Le parate di coppia sono spettacolari, ma vanno osservate con distanza e silenzio."
  },
  {
    id: "germano",
    name: "Germano reale",
    latin: "Anas platyrhynchos",
    icon: "🦆",
    category: "fauna",
    habitat: "lago",
    risk: "basso",
    season: "tutto l'anno",
    traits: ["piumaggio"],
    use: "Anatra di superficie comune negli ambienti lacustri; si nutre senza immergersi completamente.",
    clues: "Maschio con capo verde nel periodo nuziale; femmina bruna screziata, entrambi con specchio alare blu.",
    similar: "Femmine e giovani possono ricordare altre anatre di superficie.",
    action: "Non offrire pane o altri alimenti e mantieni libere le sponde.",
    story: "È fra le specie acquatiche più riconoscibili dei laghi di Nemi e Albano."
  },
  {
    id: "airone",
    name: "Airone cenerino",
    latin: "Ardea cinerea",
    icon: "🪶",
    category: "fauna",
    habitat: "lago",
    risk: "basso",
    season: "tutto l'anno",
    traits: ["piumaggio"],
    use: "Grande uccello di zone umide, caccia restando immobile lungo rive e acque basse.",
    clues: "Corpo grigio, collo lungo ripiegato in volo, zampe lunghe e becco robusto.",
    similar: "Garzette e altri aironi differiscono per colore, dimensioni e forma del becco.",
    action: "Fermati a distanza se interrompe l'alimentazione o mostra segnali di allerta.",
    story: "È segnalato tra gli uccelli acquatici che frequentano le sponde dei laghi del Parco."
  },
  {
    id: "rana-dalmatina",
    name: "Rana dalmatina",
    latin: "Rana dalmatina",
    icon: "🐸",
    category: "fauna",
    habitat: "bosco",
    risk: "basso",
    season: "primavera-autunno",
    traits: ["anfibio"],
    use: "Anfibio legato a boschi umidi e piccole raccolte d'acqua necessarie alla riproduzione.",
    clues: "Corpo bruno-rossiccio, macchia scura dietro l'occhio e zampe posteriori molto lunghe.",
    similar: "Altre rane brune richiedono confronto di muso, timpano, zampe e ambiente.",
    action: "Non toccare individui o ovature e non entrare nelle piccole pozze riproduttive.",
    story: "È una delle specie di interesse naturalistico segnalate nell'erpetofauna del Parco."
  }
];

const additionalSpecies = [
  {
    id: "nocciolo", name: "Nocciolo", latin: "Corylus avellana", icon: "🌰",
    category: "alberi", habitat: "bosco", risk: "basso", season: "primavera-autunno", traits: ["fiori", "foglie", "frutti"],
    use: "Arbusto del margine forestale, produce nocciole utilizzate da numerosi animali.",
    clues: "Foglie tondeggianti cuoriformi, margine doppiamente seghettato e frutti avvolti da brattee.",
    similar: "Le foglie possono ricordare quelle di tiglio o ontano; portamento e frutti aiutano il confronto.",
    action: "Osserva frutti e foglie senza svuotare le risorse alimentari della fauna.",
    story: "Le nocciole rosicchiate raccontano la presenza di moscardino, scoiattolo e altri piccoli roditori.",
    ecology: "Forma siepi e sottobosco, offre polline precoce e connette aree utili alla piccola fauna.",
    observation: "Confronta il tipo di apertura delle nocciole già cadute senza disturbare eventuali nidi.",
    source: "Parco regionale dei Castelli Romani"
  },
  {
    id: "acero-campestre", name: "Acero campestre", latin: "Acer campestre", icon: "🍁",
    category: "alberi", habitat: "sentiero", risk: "basso", season: "primavera-autunno", traits: ["foglie", "frutti"],
    use: "Piccolo albero di siepi e boschi misti, tollera bene margini e ambienti rurali.",
    clues: "Foglie con cinque lobi arrotondati e frutti alati disposti quasi in linea orizzontale.",
    similar: "Altri aceri differiscono per forma dei lobi, angolo delle samare e dimensione delle foglie.",
    action: "Osserva foglie e samare già accessibili senza spezzare i rami giovani.",
    story: "È fra gli elementi arborei indicati nei boschi misti del territorio.",
    ecology: "Fornisce nettare, rifugio e una chioma utile alla continuità ecologica dei margini.",
    observation: "In autunno cerca le samare doppie e confronta più foglie dello stesso individuo.",
    source: "Parco regionale dei Castelli Romani"
  },
  {
    id: "carpino-nero", name: "Carpino nero", latin: "Ostrya carpinifolia", icon: "🌿",
    category: "alberi", habitat: "bosco", risk: "basso", season: "primavera-autunno", traits: ["foglie", "frutti"],
    use: "Latifoglia dei boschi misti e dei versanti, capace di vivere anche su suoli pietrosi.",
    clues: "Foglie ovali seghettate e infruttescenze pendule che ricordano piccoli coni chiari.",
    similar: "Carpino bianco e nocciolo richiedono confronto di corteccia, nervature e frutti.",
    action: "Usa frutti, nervature e corteccia come insieme di indizi.",
    story: "Contribuisce alla varietà dei boschi oltre i castagneti più uniformi.",
    ecology: "Diversifica struttura e lettiera del bosco, offrendo risorse a insetti e piccoli vertebrati.",
    observation: "Osserva le nervature parallele e i frutti cartacei soprattutto fra estate e autunno.",
    source: "Parco regionale dei Castelli Romani"
  },
  {
    id: "tiglio", name: "Tiglio", latin: "Tilia spp.", icon: "🌼",
    category: "alberi", habitat: "bosco", risk: "medio", season: "primavera-estate", traits: ["fiori", "foglie", "frutti"],
    use: "Albero noto nella tradizione, ma ogni uso richiede provenienza certa e corretta identificazione.",
    clues: "Foglie cuoriformi asimmetriche e infiorescenze unite a una lunga brattea chiara.",
    similar: "Nocciolo e altre latifoglie possono avere foglie apparentemente simili.",
    action: "Non raccogliere fiori in aree protette o lungo strade e sentieri frequentati.",
    story: "È segnalato tra gli elementi arborei dei boschi misti dei Castelli Romani.",
    ecology: "La fioritura è una risorsa importante per numerosi insetti impollinatori.",
    observation: "In estate osserva insieme brattea, fiore e forma asimmetrica della foglia.",
    source: "Parco regionale dei Castelli Romani"
  },
  {
    id: "erica-arborea", name: "Erica arborea", latin: "Erica arborea", icon: "🌸",
    category: "erbe", habitat: "sentiero", risk: "basso", season: "primavera", traits: ["fiori", "foglie"],
    use: "Arbusto sempreverde mediterraneo che forma macchie dense e fioriture ricche di nettare.",
    clues: "Numerosi piccoli fiori bianchi a campanella e foglie aghiformi riunite sui rametti.",
    similar: "Altre eriche differiscono per dimensioni, colore dei fiori e disposizione delle foglie.",
    action: "Non spezzare i rami fioriti e resta sui passaggi esistenti.",
    story: "Compare tra le essenze mediterranee del territorio del Parco.",
    ecology: "Offre copertura alla microfauna e risorse precoci agli impollinatori.",
    observation: "Cerca le fioriture bianche sui margini luminosi senza entrare nella macchia.",
    source: "Parco regionale dei Castelli Romani"
  },
  {
    id: "riccio", name: "Riccio europeo", latin: "Erinaceus europaeus", icon: "🦔",
    category: "fauna", habitat: "sentiero", risk: "basso", season: "primavera-autunno", traits: ["tracce"],
    use: "Mammifero notturno insettivoro che frequenta margini, prati, giardini e boschi.",
    clues: "Sagoma bassa ricoperta di aculei, piccoli escrementi scuri e passaggi nella vegetazione.",
    similar: "Gli aculei sono molto più corti di quelli dell'istrice.",
    action: "Non nutrirlo, non spostarlo salvo emergenze gestite da personale competente.",
    story: "È uno degli insettivori presenti nei boschi e negli ambienti rurali del Parco.",
    ecology: "Consuma molti invertebrati e necessita di rifugi tranquilli, lettiera e passaggi non frammentati.",
    observation: "Osserva al crepuscolo senza torce dirette e controlla l'area prima di usare attrezzi da giardino.",
    source: "Parco regionale dei Castelli Romani"
  },
  {
    id: "ghiro", name: "Ghiro", latin: "Glis glis", icon: "🐭",
    category: "fauna", habitat: "bosco", risk: "basso", season: "primavera-autunno", traits: ["tracce"],
    use: "Roditore arboricolo notturno che usa cavità, nidi e chiome dei boschi maturi.",
    clues: "Coda folta grigia, occhi grandi e resti di frutti o semi rosicchiati.",
    similar: "Moscardino e scoiattolo differiscono per dimensioni, colore e tipo di tracce.",
    action: "Non aprire cavità o cassette e non lasciare cibo nei pressi dei rifugi.",
    story: "È fra i mammiferi tipici dei boschi segnalati nel Parco.",
    ecology: "Consuma frutti, semi e invertebrati e trascorre un lungo periodo in letargo.",
    observation: "Cerca segni indiretti e ascolta movimenti serali senza illuminare le cavità.",
    source: "Parco regionale dei Castelli Romani"
  },
  {
    id: "volpe", name: "Volpe", latin: "Vulpes vulpes", icon: "🦊",
    category: "fauna", habitat: "sentiero", risk: "basso", season: "tutto l'anno", traits: ["tracce"],
    use: "Predatore opportunista che vive in boschi, campagne e ambienti periurbani.",
    clues: "Impronta ovale con quattro dita, escrementi spesso in posizione evidente e andatura rettilinea.",
    similar: "Le impronte possono essere confuse con quelle di cane; forma, disposizione e traiettoria aiutano.",
    action: "Non avvicinarla, non offrirle cibo e conserva correttamente i rifiuti.",
    story: "La sua adattabilità racconta il rapporto complesso tra fauna selvatica e aree abitate.",
    ecology: "Regola popolazioni di piccoli animali, consuma frutti e contribuisce alla dispersione dei semi.",
    observation: "Leggi le piste senza seguirle verso rifugi e mantieni i cani sotto controllo.",
    source: "Parco regionale dei Castelli Romani"
  },
  {
    id: "martora", name: "Martora", latin: "Martes martes", icon: "🐾",
    category: "fauna", habitat: "bosco", risk: "basso", season: "tutto l'anno", traits: ["tracce"],
    use: "Carnivoro agile e prevalentemente forestale, difficile da osservare direttamente.",
    clues: "Impronte a cinque dita, escrementi allungati e movimenti tra alberi e rocce.",
    similar: "Faina e donnola richiedono confronto di habitat, dimensioni e macchia golare.",
    action: "Non usare esche o fototrappole senza autorizzazione.",
    story: "La ricomparsa della martora è citata tra i segnali positivi per la biodiversità del Parco.",
    ecology: "Preda piccoli vertebrati e consuma frutti, partecipando anche alla dispersione dei semi.",
    observation: "Cerca segni indiretti nei boschi continui e limita il disturbo nelle ore serali.",
    source: "Parco regionale dei Castelli Romani"
  },
  {
    id: "lupo", name: "Lupo", latin: "Canis lupus italicus", icon: "🐺",
    category: "fauna", habitat: "bosco", risk: "medio", season: "tutto l'anno", traits: ["tracce"],
    use: "Grande carnivoro protetto con un ruolo importante nell'equilibrio degli ecosistemi.",
    clues: "Impronte grandi e simmetriche, pista rettilinea e segni territoriali; singoli indizi non bastano.",
    similar: "Le impronte di cane possono essere molto simili e richiedono esperienza per il confronto.",
    action: "Mantieni distanza, non lasciare cibo, tieni il cane vicino e non inseguire l'animale.",
    story: "Il ritorno del lupo è uno degli eventi più significativi raccontati dal Parco.",
    ecology: "Predatore apicale, influenza comportamento e distribuzione delle prede e contribuisce agli equilibri trofici.",
    observation: "Gli incontri sono rari: osserva da lontano, lascia una via di fuga e segnala dati solo tramite canali ufficiali.",
    source: "Parco regionale dei Castelli Romani"
  },
  {
    id: "poiana", name: "Poiana", latin: "Buteo buteo", icon: "🦅",
    category: "fauna", habitat: "prato", risk: "basso", season: "tutto l'anno", traits: ["piumaggio"],
    use: "Rapace diurno che caccia piccoli animali in aree aperte e nidifica in zone alberate.",
    clues: "Ali larghe, coda relativamente corta e volteggio circolare sulle correnti ascensionali.",
    similar: "Falchi e altri rapaci differiscono per sagoma, battito alare e proporzioni.",
    action: "Osserva con binocolo senza avvicinarti a posatoi o nidi.",
    story: "È fra i rapaci segnalati nel mosaico di boschi e aree aperte del Parco.",
    ecology: "Controlla popolazioni di piccoli vertebrati e utilizza il paesaggio come rete di caccia e rifugio.",
    observation: "Cerca sagome in volteggio nelle ore più calde e confronta forma di ali e coda.",
    source: "Parco regionale dei Castelli Romani"
  },
  {
    id: "sparviero", name: "Sparviero", latin: "Accipiter nisus", icon: "🦅",
    category: "fauna", habitat: "bosco", risk: "basso", season: "tutto l'anno", traits: ["piumaggio"],
    use: "Rapace forestale specializzato nella cattura di piccoli uccelli.",
    clues: "Ali corte e arrotondate, coda lunga barrata e volo rapido tra gli alberi.",
    similar: "Astore e falchi possono confondere; dimensioni e proporzioni sono decisive.",
    action: "Non cercare i nidi e limita rumore e permanenza nelle aree di allarme.",
    story: "È incluso tra i rapaci presenti nei boschi dei Castelli Romani.",
    ecology: "Collega la rete alimentare del bosco e dipende da ambienti strutturati e tranquilli.",
    observation: "Osserva i rapidi attraversamenti delle radure senza seguirlo nel bosco.",
    source: "Parco regionale dei Castelli Romani"
  },
  {
    id: "falco-pellegrino", name: "Falco pellegrino", latin: "Falco peregrinus", icon: "🦅",
    category: "fauna", habitat: "prato", risk: "basso", season: "tutto l'anno", traits: ["piumaggio"],
    use: "Rapace protetto, noto per le picchiate e legato a pareti, rupi e strutture elevate.",
    clues: "Ali appuntite, sagoma compatta e marcata zona scura ai lati del capo.",
    similar: "Gheppio e altri falchi differiscono per coda, battito alare e comportamento di caccia.",
    action: "Mantieni grande distanza dai siti riproduttivi e rispetta eventuali limitazioni.",
    story: "Il suo ritorno è ricordato fra i risultati positivi per la biodiversità del territorio.",
    ecology: "Predatore di uccelli in volo, occupa il vertice di una parte della rete alimentare.",
    observation: "Usa il binocolo da punti già accessibili e non divulgare la posizione di nidi sensibili.",
    source: "Parco regionale dei Castelli Romani"
  },
  {
    id: "assiolo", name: "Assiolo", latin: "Otus scops", icon: "🦉",
    category: "fauna", habitat: "sentiero", risk: "basso", season: "primavera-estate", traits: ["piumaggio"],
    use: "Piccolo rapace notturno migratore, frequenta aree alberate aperte e ambienti rurali.",
    clues: "Richiamo ripetuto e monotono, piccoli ciuffi auricolari e piumaggio mimetico.",
    similar: "Civetta e altri rapaci notturni differiscono per richiamo, dimensioni e silhouette.",
    action: "Ascolta in silenzio senza riprodurre richiami registrati vicino ai territori.",
    story: "È fra i rapaci notturni segnalati nella fauna del Parco.",
    ecology: "Si nutre soprattutto di grandi insetti e piccoli vertebrati, collegando ambienti agricoli e boschivi.",
    observation: "Il canto serale è il metodo meno invasivo per rilevarne la presenza.",
    source: "Parco regionale dei Castelli Romani"
  },
  {
    id: "testuggine-hermann", name: "Testuggine di Hermann", latin: "Testudo hermanni", icon: "🐢",
    category: "fauna", habitat: "prato", risk: "basso", season: "primavera-autunno", traits: ["tracce"],
    use: "Rettile terrestre protetto legato ad ambienti aperti, cespugliati e margini.",
    clues: "Carapace giallo e nero, piastrone con bande scure e coda con astuccio corneo.",
    similar: "Testuggini alloctone o detenute illegalmente richiedono verifica esperta.",
    action: "Non raccoglierla, non spostarla e non divulgarne la posizione precisa.",
    story: "È una delle componenti più rare e sensibili dell'erpetofauna del Parco.",
    ecology: "Consuma vegetali e contribuisce ai processi degli ambienti mediterranei aperti.",
    observation: "Osserva da distanza e lascia che attraversi autonomamente il percorso.",
    source: "Parco regionale dei Castelli Romani"
  },
  {
    id: "orbettino", name: "Orbettino", latin: "Anguis veronensis", icon: "🦎",
    category: "fauna", habitat: "bosco", risk: "basso", season: "primavera-autunno", traits: ["tracce"],
    use: "Lucertola priva di zampe, innocua per le persone e utile predatrice di piccoli invertebrati.",
    clues: "Corpo liscio e lucido, testa poco distinta e capacità di chiudere le palpebre.",
    similar: "Può essere scambiato per un serpente, ma presenta caratteristiche da lucertola.",
    action: "Non toccare e non sollevare pietre o legni alla ricerca dell'animale.",
    story: "È indicato fra i rettili presenti nell'erpetofauna del territorio.",
    ecology: "Preda limacce, lombrichi e altri piccoli animali del suolo.",
    observation: "Gli avvistamenti sono occasionali: limita l'osservazione all'individuo già visibile.",
    source: "Parco regionale dei Castelli Romani"
  },
  {
    id: "biacco", name: "Biacco", latin: "Hierophis viridiflavus", icon: "🐍",
    category: "fauna", habitat: "prato", risk: "basso", season: "primavera-autunno", traits: ["tracce"],
    use: "Serpente non velenoso, agile e importante predatore di piccoli vertebrati.",
    clues: "Adulto spesso scuro con fitte macchie o linee gialle, corpo slanciato e movimenti rapidi.",
    similar: "Giovani e individui variabili possono essere confusi con altri serpenti.",
    action: "Fermati, lascia spazio e non tentare di catturarlo o spostarlo.",
    story: "È uno dei rettili autoctoni più visibili e comuni indicati dal Parco.",
    ecology: "Contribuisce al controllo di roditori e altri piccoli vertebrati.",
    observation: "Osserva la direzione di allontanamento senza bloccare la via di fuga.",
    source: "Parco regionale dei Castelli Romani"
  },
  {
    id: "tritone", name: "Tritoni dei Castelli Romani", latin: "Lissotriton e Triturus spp.", icon: "🦎",
    category: "fauna", habitat: "lago", risk: "basso", season: "primavera-estate", traits: ["anfibio"],
    use: "Anfibi legati a piccole acque, fontanili e pozze per la riproduzione.",
    clues: "Corpo allungato con coda compressa lateralmente; livrea e cresta cambiano secondo specie e stagione.",
    similar: "Salamandre e larve di altri anfibi richiedono confronto di coda, branchie e forma del corpo.",
    action: "Non usare retini, non toccare animali o uova e non introdurre specie nelle pozze.",
    story: "Due specie di tritoni sono ricordate fra gli anfibi di interesse del Parco.",
    ecology: "Sono predatori di piccoli invertebrati e indicatori sensibili della qualità delle zone umide minori.",
    observation: "Osserva dalla superficie senza entrare in acqua o smuovere la vegetazione.",
    source: "Parco regionale dei Castelli Romani"
  },
  {
    id: "pipistrelli", name: "Pipistrelli", latin: "Chiroptera", icon: "🦇",
    category: "fauna", habitat: "bosco", risk: "basso", season: "primavera-autunno", traits: ["piumaggio"],
    use: "Mammiferi volatori notturni, molte specie consumano grandi quantità di insetti.",
    clues: "Volo rapido al crepuscolo, sagoma alare membranosa e uso di cavità o edifici come rifugio.",
    similar: "A distanza rondoni e altri uccelli crepuscolari possono confondere.",
    action: "Non entrare nei rifugi, non illuminare le colonie e non toccare individui a terra.",
    story: "Nel Parco è segnalata una consistente colonia svernante e sono attivi monitoraggi scientifici.",
    ecology: "Regolano popolazioni di insetti e dipendono da rifugi tranquilli e corridoi ecologici.",
    observation: "Osserva il volo dal sentiero al crepuscolo senza puntare luci verso le cavità.",
    source: "Monitoraggio del Parco regionale dei Castelli Romani"
  },
  {
    id: "cormorano", name: "Cormorano", latin: "Phalacrocorax carbo", icon: "🐦",
    category: "fauna", habitat: "lago", risk: "basso", season: "autunno-inverno", traits: ["piumaggio"],
    use: "Grande uccello acquatico tuffatore, presente soprattutto nei periodi di svernamento.",
    clues: "Piumaggio scuro, collo lungo, volo potente e tipica postura ad ali aperte sui posatoi.",
    similar: "Svassi e smerghi differiscono per dimensioni, sagoma e modo di nuotare.",
    action: "Osserva da punti autorizzati e non avvicinarti ai posatoi collettivi.",
    story: "È una delle specie approfondite nella sezione dedicata alla fauna dei laghi.",
    ecology: "Preda pesci immergendosi e collega dinamiche acquatiche e siti di riposo sulle sponde.",
    observation: "Cerca individui in pesca o con ali aperte, usando binocolo e mantenendo distanza.",
    source: "Parco regionale dei Castelli Romani"
  }
];

species.push(...additionalSpecies);

const speciesKnowledge = {
  borragine: {
    ecology: "Erbacea annuale visitata da numerosi insetti impollinatori, cresce in ambienti aperti e suoli disturbati.",
    observation: "In primavera cerca insieme fiori blu a cinque petali, fusti pelosi e foglie ruvide.",
    source: "Archivio botanico locale"
  },
  sambuco: {
    ecology: "Arbusto utile come rifugio e risorsa alimentare per insetti e uccelli, frequente ai margini e nei luoghi freschi.",
    observation: "Confronta infiorescenza, disposizione delle foglie, corteccia e maturazione dei frutti.",
    source: "Archivio botanico locale"
  },
  castagno: {
    ecology: "I castagneti cedui dominano ampie porzioni del paesaggio forestale e vengono tradizionalmente gestiti per il legname.",
    observation: "Il riconoscimento è più sicuro quando foglia seghettata, riccio e corteccia vengono osservati insieme.",
    source: "Parco regionale dei Castelli Romani"
  },
  porcino: {
    ecology: "Fungo simbionte associato alle radici degli alberi; contribuisce agli scambi di nutrienti del bosco.",
    observation: "Fotografa cappello, gambo, superficie inferiore e alberi vicini senza usare il colore come unico criterio.",
    source: "Archivio micologico divulgativo"
  },
  amanita: {
    ecology: "Fungo simbionte del bosco, ecologicamente importante anche quando è pericoloso per le persone.",
    observation: "Volva, anello e base del gambo sono caratteri essenziali, ma l'identificazione resta compito di un micologo.",
    source: "Archivio micologico divulgativo"
  },
  istrice: {
    ecology: "Roditore notturno che utilizza boschi, aree agricole e ambienti collinari; gli aculei caduti non vengono lanciati.",
    observation: "Cerca aculei isolati e piste senza avvicinarti a tane o passaggi attivi.",
    source: "Parco regionale dei Castelli Romani"
  },
  martin: {
    ecology: "Predatore di piccoli organismi acquatici, dipende dalla qualità delle acque e da sponde tranquille con posatoi.",
    observation: "Attendi in silenzio e osserva voli bassi e rapidi lungo il margine dell'acqua.",
    source: "Parco regionale dei Castelli Romani"
  },
  traccia: {
    ecology: "Il cinghiale modifica il suolo cercando cibo e può influire sulla rinnovazione del bosco.",
    observation: "Valuta insieme impronte, terreno rivoltato, grattatoi e freschezza dei segni.",
    source: "Archivio faunistico locale"
  },
  nepitella: {
    ecology: "Aromatica delle radure e dei margini, offre nettare a diversi insetti durante la fioritura.",
    observation: "Profumo, foglie opposte, sezione del fusto e forma dei fiori vanno confrontati insieme.",
    source: "Archivio botanico locale"
  },
  ciclamino: {
    ecology: "Pianta geofita del sottobosco: supera la stagione sfavorevole grazie a un organo sotterraneo.",
    observation: "Osserva fiori ripiegati e disegno delle foglie senza scavare o spostare la lettiera.",
    source: "Archivio botanico locale"
  },
  alloro: {
    ecology: "Sempreverde mediterraneo che offre copertura alla piccola fauna e mantiene foglie attive tutto l'anno.",
    observation: "Confronta aroma, margine, disposizione e consistenza delle foglie senza assaggiarle.",
    source: "Archivio botanico locale"
  },
  salamandrina: {
    ecology: "Anfibio endemico dell'Italia peninsulare, sensibile alla qualità di boschi freschi e piccoli corsi d'acqua.",
    observation: "Cercala solo visivamente nei periodi umidi, senza sollevare rifugi o manipolare gli animali.",
    source: "Parco regionale dei Castelli Romani"
  },
  leccio: {
    ecology: "Quercia sempreverde adattata alla siccità estiva, forma boschi ombrosi sui versanti più miti.",
    observation: "Confronta foglie mature e giovani: possono avere margini molto differenti.",
    source: "Parco regionale dei Castelli Romani"
  },
  roverella: {
    ecology: "Quercia caducifoglia o semi-persistente che tollera ambienti caldi e suoli relativamente asciutti.",
    observation: "La sottile pelosità è più facile da notare sulle foglie giovani e sulla pagina inferiore.",
    source: "Parco regionale dei Castelli Romani"
  },
  cerro: {
    ecology: "Quercia dei boschi misti, produce ghiande utilizzate da uccelli e mammiferi e ospita numerosi invertebrati.",
    observation: "Cerca a terra le cupole con squame lunghe, senza raccogliere campioni dai rami.",
    source: "Parco regionale dei Castelli Romani"
  },
  faggio: {
    ecology: "Crea un microclima fresco e una lettiera caratteristica; nei Castelli Romani sopravvive in nuclei residuali.",
    observation: "In inverno gemme affusolate e corteccia liscia restano indizi leggibili anche senza foglie.",
    source: "Parco regionale dei Castelli Romani"
  },
  farnia: {
    ecology: "Grande quercia legata a suoli freschi, fondamentale per cavità, legno morto e catene alimentari forestali.",
    observation: "Osserva ghiande su lungo peduncolo e foglie quasi prive di picciolo.",
    source: "Parco regionale dei Castelli Romani"
  },
  corbezzolo: {
    ecology: "Arbusto sempreverde mediterraneo, fiorisce in autunno mentre maturano i frutti dell'anno precedente.",
    observation: "La contemporanea presenza di fiori chiari e frutti rossi è un ottimo indizio stagionale.",
    source: "Parco regionale dei Castelli Romani"
  },
  agrifoglio: {
    ecology: "Elemento del sottobosco che offre rifugio e frutti invernali alla fauna; crescita e rinnovazione sono lente.",
    observation: "Non tutte le foglie sono spinose: osserva anche corteccia, portamento e disposizione dei frutti.",
    source: "Parco regionale dei Castelli Romani"
  },
  tasso: {
    ecology: "Onnivoro notturno che usa reti di sentieri e tane articolate, contribuendo al movimento di semi e sostanza organica.",
    observation: "Le unghie lasciano segni davanti alle cinque dita; misura solo visivamente senza alterare l'impronta.",
    source: "Parco regionale dei Castelli Romani"
  },
  scoiattolo: {
    ecology: "Roditore arboricolo diurno, disperde semi e dipende dalla continuità delle chiome e dalla disponibilità di rifugi.",
    observation: "Al mattino ascolta movimenti in chioma e controlla a terra pigne e gusci già abbandonati.",
    source: "Parco regionale dei Castelli Romani"
  },
  moscardino: {
    ecology: "Specie arboricola protetta, legata a sottobosco fitto, siepi connesse e diversità di frutti e insetti.",
    observation: "I nidi sono strutture sensibili: limitati a osservazioni a distanza e segui solo attività autorizzate.",
    source: "Monitoraggio del Parco regionale dei Castelli Romani"
  },
  "picchio-verde": {
    ecology: "Picchio forestale che si alimenta spesso di formiche; le cavità abbandonate possono essere usate da altre specie.",
    observation: "Il richiamo permette spesso di individuarne la direzione prima dell'avvistamento.",
    source: "Parco regionale dei Castelli Romani"
  },
  "picchio-rosso": {
    ecology: "Cerca larve nel legno e scava cavità, favorendo indirettamente altri animali che non sanno costruirle.",
    observation: "Distingui il tambureggiamento regolare dai colpi irregolari prodotti durante l'alimentazione.",
    source: "Parco regionale dei Castelli Romani"
  },
  upupa: {
    ecology: "Migratrice e insettivora, usa prati, margini e ambienti rurali ricchi di cavità.",
    observation: "Osserva cresta e ali bianche e nere senza inseguirla quando si posa a terra.",
    source: "Parco regionale dei Castelli Romani"
  },
  folaga: {
    ecology: "Uccello acquatico onnivoro, difende piccoli territori e utilizza vegetazione emergente per il nido.",
    observation: "La placca frontale bianca resta visibile anche a distanza con un binocolo.",
    source: "Parco regionale dei Castelli Romani"
  },
  svasso: {
    ecology: "Tuffatore che dipende da acque e sponde adatte; trasporta talvolta i piccoli sul dorso.",
    observation: "In primavera osserva da lontano la gorgiera e i movimenti rituali senza avvicinarti.",
    source: "Parco regionale dei Castelli Romani"
  },
  germano: {
    ecology: "Anatra adattabile di acque dolci, filtra il cibo in superficie e usa sponde vegetate come riparo.",
    observation: "Fuori dal periodo nuziale il maschio perde parte dei colori: lo specchio alare aiuta il confronto.",
    source: "Parco regionale dei Castelli Romani"
  },
  airone: {
    ecology: "Predatore di pesci, anfibi e piccoli animali; alterna lunghe attese immobili a rapidi colpi di becco.",
    observation: "In volo tiene il collo ripiegato, a differenza delle cicogne che lo mantengono disteso.",
    source: "Parco regionale dei Castelli Romani"
  },
  "rana-dalmatina": {
    ecology: "Rana bruna terrestre che torna all'acqua per riprodursi; risente della perdita di pozze e corridoi umidi.",
    observation: "In primavera individua ovature e richiami solo dai bordi, senza illuminare o toccare gli animali.",
    source: "Parco regionale dei Castelli Romani"
  }
};

species.forEach(item => {
  const original = {...item};
  Object.assign(item, {
    ecology: "Specie inserita nell'archivio naturalistico locale.",
    observation: "Osserva più caratteri insieme e mantieni un comportamento rispettoso.",
    source: "Archivio naturalistico locale"
  }, speciesKnowledge[item.id] || {}, original);
});

const mammalIds = new Set(["istrice", "traccia", "tasso", "scoiattolo", "moscardino", "riccio", "ghiro", "volpe", "martora", "lupo", "pipistrelli"]);
const birdIds = new Set(["martin", "picchio-verde", "picchio-rosso", "upupa", "folaga", "svasso", "germano", "airone", "poiana", "sparviero", "falco-pellegrino", "assiolo", "cormorano"]);
const raptorIds = new Set(["poiana", "sparviero", "falco-pellegrino", "assiolo"]);
const reptileIds = new Set(["testuggine-hermann", "orbettino", "biacco"]);

species.forEach(item => {
  if (mammalIds.has(item.id)) item.traits = [...new Set([...item.traits, "mammifero"])];
  if (birdIds.has(item.id)) item.traits = [...new Set([...item.traits, "uccello"])];
  if (raptorIds.has(item.id)) item.traits = [...new Set([...item.traits, "rapace"])];
  if (reptileIds.has(item.id)) item.traits = [...new Set([...item.traits, "rettile"])];
});

const taxonomies = {
  category: [["all", "Tutte"], ["erbe", "Erbe e fiori"], ["funghi", "Funghi"], ["fauna", "Fauna"], ["tracce", "Tracce"], ["alberi", "Alberi"]],
  habitat: [["all", "Tutti"], ["bosco", "Bosco"], ["lago", "Lago"], ["prato", "Prato"], ["sentiero", "Sentiero"]],
  season: [["all", "Tutte"], ["primavera", "Primavera"], ["estate", "Estate"], ["autunno", "Autunno"], ["inverno", "Inverno"]],
  risk: [["all", "Tutti"], ["basso", "Basso"], ["medio", "Medio"], ["alto", "Alto"]],
  trait: [
    ["all", "Tutte"], ["fiori", "Fiori"], ["foglie", "Foglie"], ["frutti", "Frutti o bacche"],
    ["fungo", "Fungo con cappello"], ["tracce", "Tracce o impronte"], ["mammifero", "Mammifero"],
    ["uccello", "Uccello"], ["rapace", "Rapace"], ["piumaggio", "Piumaggio"],
    ["rettile", "Rettile"], ["anfibio", "Anfibio"]
  ]
};

const knowledgeArticles = [
  {
    id: "territorio-vulcanico",
    keywords: ["territorio", "vulcano laziale", "colli albani", "suolo vulcanico", "peperino", "tufo"],
    title: "Un territorio nato dal vulcano",
    body: "I Colli Albani occupano l'antico edificio del Vulcano Laziale. Suoli, rilievi, conche lacustri e materiali come tufo, pozzolana e peperino hanno influenzato paesaggio, vegetazione e storia degli insediamenti.",
    caution: "Le forme geologiche vanno osservate senza uscire dai percorsi o rimuovere campioni.",
    source: "Parco regionale dei Castelli Romani",
    suggestions: ["Perché i boschi sono così importanti?", "Raccontami dei laghi", "Quali alberi posso osservare?"]
  },
  {
    id: "castagneti",
    keywords: ["castagneto", "castagneti", "bosco di castagno", "ceduo", "legname"],
    title: "Il paesaggio dei castagneti",
    body: "Il castagneto ceduo è oggi una delle formazioni più diffuse. La gestione per il legname ha trasformato nel tempo boschi misti e antiche faggete, creando un paesaggio culturale oltre che naturale.",
    caution: "Bosco gestito non significa bosco liberamente accessibile o disponibile alla raccolta.",
    source: "Parco regionale dei Castelli Romani",
    suggestions: ["Parlami del castagno", "Quali tracce trovo nel bosco?", "Cosa osservo in autunno?"]
  },
  {
    id: "bosco-misto",
    keywords: ["bosco misto", "cerquone", "doganella", "querce", "farnia", "cerro"],
    title: "Boschi misti e grandi querce",
    body: "Accanto ai castagneti restano nuclei di bosco misto di grande valore. Nel Cerquone-Doganella dominano farnie e cerri maturi, con cavità, legno morto e microhabitat utili a moltissime specie.",
    caution: "Gli alberi monumentali e le cavità vanno rispettati: non incidere, arrampicarsi o introdurre oggetti.",
    source: "Parco regionale dei Castelli Romani",
    suggestions: ["Parlami della farnia", "Come riconosco il cerro?", "Quali picchi vivono nel bosco?"]
  },
  {
    id: "faggete-residuali",
    keywords: ["faggeta", "faggete", "faete", "artemisio", "faggio", "bosco fresco"],
    title: "Le faggete residuali",
    body: "Delle faggete che in passato occupavano aree più estese restano nuclei sui Monti delle Faete e dell'Artemisio. Sono testimonianze preziose di condizioni fresche e umide e della storia vegetazionale del territorio.",
    caution: "Nei nuclei sensibili resta sui sentieri e limita rumore e calpestio.",
    source: "Parco regionale dei Castelli Romani",
    suggestions: ["Parlami del faggio", "Quali anfibi vivono nei boschi umidi?", "Cosa osservo in primavera?"]
  },
  {
    id: "laghi-vulcanici",
    keywords: ["lago", "laghi", "nemi", "albano", "sponda", "acqua", "zona umida"],
    title: "I laghi e le loro sponde",
    body: "I laghi di Nemi e Albano sono ambienti vulcanici e zone di vita per uccelli acquatici, anfibi, pesci e vegetazione di sponda. Acque aperte, canneti, rive e boschi circostanti formano habitat collegati.",
    caution: "Resta fuori dai canneti, non avvicinarti ai nidi e non abbandonare animali o piante acquatiche.",
    source: "Parco regionale dei Castelli Romani · fauna dei laghi",
    suggestions: ["Quali uccelli vedo al lago?", "Parlami dello svasso", "Perché non devo dare pane alle anatre?"]
  },
  {
    id: "specie-alloctone",
    keywords: ["alloctona", "alloctone", "invasiva", "invasive", "specie estranee", "carpa", "persico sole"],
    title: "Specie introdotte nei laghi",
    body: "Nei laghi alcune specie estranee, come carpa e persico sole, sono diventate molto diffuse e possono alterare gli equilibri originari. Anche l'abbandono di testuggini da compagnia introduce fauna non locale.",
    caution: "Non liberare mai animali o piante nell'ambiente: contatta i servizi competenti per una gestione corretta.",
    source: "Parco regionale dei Castelli Romani · fauna dei laghi",
    suggestions: ["Quali animali vivono nei laghi?", "Cos'è una specie alloctona?", "Come rispetto le sponde?"]
  },
  {
    id: "funghi-ecosistema",
    keywords: ["funghi", "fungo", "micelio", "decompositori", "decompositore", "ecosistema fungo"],
    title: "I funghi non sono soltanto cibo",
    body: "I funghi svolgono funzioni essenziali: decompongono materia organica, riciclano nutrienti e spesso collaborano con le radici degli alberi. Il corpo visibile è solo una parte dell'organismo.",
    caution: "Importanza ecologica e commestibilità sono questioni diverse: non consumare mai senza controllo micologico.",
    source: "Parco regionale dei Castelli Romani · funghi ed ecosistema",
    suggestions: ["Parlami del porcino", "Perché l'amanita è pericolosa?", "Come osservo un fungo?"]
  },
  {
    id: "sicurezza-funghi-erbe",
    keywords: ["commestibile", "mangiare", "raccolta", "raccogliere", "erbe spontanee", "sicurezza funghi", "uso officinale"],
    title: "Conoscere non significa autorizzare il consumo",
    body: "Schede e confronto guidato hanno finalità divulgativa. Funghi, erbe, bacche e parti vegetali possono essere tossici, protetti, contaminati o facilmente confusi.",
    caution: "Per ogni uso alimentare o officinale servono identificazione diretta e indicazioni di professionisti qualificati.",
    source: "Linee di sicurezza della web app",
    suggestions: ["Come confronto specie simili?", "Parlami dell'amanita", "Quali regole devo seguire?"]
  },
  {
    id: "tracce-fauna",
    keywords: ["tracce", "impronte", "escrementi", "aculei", "terreno smosso", "pista animale"],
    title: "Leggere le tracce senza disturbare",
    body: "Impronte, penne, aculei, resti alimentari e piste permettono di scoprire animali elusivi. Un singolo segno raramente basta: ambiente, dimensioni, disposizione e freschezza vanno considerati insieme.",
    caution: "Non seguire le piste verso tane o nidi e non manipolare resti biologici.",
    source: "Archivio faunistico locale",
    suggestions: ["Come distinguo tasso e cinghiale?", "Parlami dell'istrice", "Quali tracce trovo nel bosco?"]
  },
  {
    id: "birdwatching",
    keywords: ["birdwatching", "uccelli", "binocolo", "osservazione uccelli", "avifauna", "piumaggio"],
    title: "Osservare gli uccelli",
    body: "Ascolto, sagoma, comportamento, habitat e stagione sono spesso più utili del solo colore. Binocolo, distanza e pazienza rendono l'osservazione più efficace e rispettosa.",
    caution: "Evita richiami registrati, flash e avvicinamenti a nidi o giovani.",
    source: "Archivio avifaunistico locale",
    suggestions: ["Quali uccelli vedo al lago?", "Parlami del picchio verde", "Come riconosco un rapace?"]
  },
  {
    id: "fauna-notturna",
    keywords: ["notte", "notturno", "notturna", "crepuscolo", "rapaci notturni", "pipistrelli"],
    title: "La vita dopo il tramonto",
    body: "Tasso, istrice, volpe, ghiro, pipistrelli e rapaci notturni usano ore serali e notturne per alimentarsi e muoversi. Spesso è meglio rilevarli attraverso suoni e tracce.",
    caution: "Non illuminare rifugi e animali, non usare richiami e non percorrere aree chiuse nelle ore notturne.",
    source: "Parco regionale dei Castelli Romani",
    suggestions: ["Parlami dei pipistrelli", "Come osservo il tasso?", "Quali tracce posso trovare?"]
  },
  {
    id: "anfibi-zone-umide",
    keywords: ["anfibi", "rana", "tritone", "salamandrina", "pozza", "ovature", "bosco umido"],
    title: "Anfibi e piccole acque",
    body: "Rane, tritoni e salamandrine dipendono da boschi freschi, pozze, sorgenti e piccoli corsi d'acqua. Sono sensibili ad alterazioni, inquinamento, siccità e introduzione di fauna estranea.",
    caution: "Non toccare animali o uova, non usare retini e non spostare pietre o legni.",
    source: "Parco regionale dei Castelli Romani",
    suggestions: ["Parlami della salamandrina", "Come osservo un tritone?", "Perché le pozze sono importanti?"]
  },
  {
    id: "biodiversita",
    keywords: ["biodiversità", "biodiversita", "equilibrio", "rete ecologica", "habitat", "conservazione"],
    title: "Biodiversità significa relazioni",
    body: "La biodiversità comprende specie, habitat e relazioni fra organismi. Boschi, prati, laghi, siepi e aree rurali funzionano meglio quando restano connessi e ospitano strutture differenti.",
    caution: "Proteggere una singola specie non basta se si perdono habitat, rifugi e corridoi ecologici.",
    source: "Parco regionale dei Castelli Romani",
    suggestions: ["Qual è il ruolo del lupo?", "Perché serve il legno morto?", "Raccontami dei boschi misti"]
  },
  {
    id: "monitoraggi",
    keywords: ["monitoraggio", "censimento", "ricerca", "moscardino", "lupo", "pipistrelli", "avifauna svernante"],
    title: "Monitorare per conoscere",
    body: "Il Parco partecipa a monitoraggi su moscardino, lupo, pipistrelli e avifauna svernante. Serie di dati raccolte con metodi coerenti aiutano a valutare presenza, habitat e cambiamenti nel tempo.",
    caution: "Le segnalazioni utili richiedono metodo e canali ufficiali; non disturbare la fauna per ottenere una prova.",
    source: "Studi e monitoraggi del Parco regionale dei Castelli Romani",
    suggestions: ["Parlami del moscardino", "Come posso fare una segnalazione?", "Perché contare gli uccelli?"]
  },
  {
    id: "primavera",
    keywords: ["primavera", "marzo", "aprile", "maggio", "fioriture"],
    title: "Osservare in primavera",
    body: "Fioriture, attività degli anfibi, canto degli uccelli e ritorno di specie migratrici rendono la primavera ricca di segnali. È anche un periodo delicato per riproduzione e nidificazione.",
    caution: "Resta sui sentieri e aumenta la distanza da nidi, ovature e giovani animali.",
    source: "Calendario naturalistico locale",
    suggestions: ["Quali fiori posso vedere?", "Parlami dell'upupa", "Quali anfibi sono presenti?"]
  },
  {
    id: "estate",
    keywords: ["estate", "giugno", "luglio", "agosto", "caldo", "siccità"],
    title: "Osservare in estate",
    body: "Nelle ore fresche sono attivi uccelli, rettili e insetti, mentre boschi e laghi offrono microclimi differenti. La siccità può ridurre acqua e attività visibile.",
    caution: "Evita le ore più calde, porta acqua, rispetta divieti antincendio e non entrare in aree chiuse.",
    source: "Calendario naturalistico locale",
    suggestions: ["Cosa osservo al lago?", "Quali rettili posso incontrare?", "Come rispetto il bosco d'estate?"]
  },
  {
    id: "autunno",
    keywords: ["autunno", "settembre", "ottobre", "novembre", "foglie", "castagne"],
    title: "Osservare in autunno",
    body: "Frutti, foglie, funghi, migrazioni e tracce nel terreno umido rendono l'autunno adatto al confronto fra specie e processi del bosco.",
    caution: "Raccolta di castagne e funghi può essere regolamentata; l'osservazione non autorizza il prelievo.",
    source: "Calendario naturalistico locale",
    suggestions: ["Cosa osservo nel bosco?", "Parlami del castagno", "Perché i funghi sono importanti?"]
  },
  {
    id: "inverno",
    keywords: ["inverno", "dicembre", "gennaio", "febbraio", "svernamento"],
    title: "Osservare in inverno",
    body: "Sagome degli alberi, gemme, cortecce, tracce e uccelli svernanti diventano protagonisti. Sui laghi possono concentrarsi specie acquatiche presenti solo in parte dell'anno.",
    caution: "Non avvicinarti ai gruppi in riposo e considera fondo scivoloso, freddo e giornate brevi.",
    source: "Calendario naturalistico locale",
    suggestions: ["Quali uccelli svernano al lago?", "Come riconosco un albero senza foglie?", "Parlami del cormorano"]
  },
  {
    id: "famiglie-scuole",
    keywords: ["famiglia", "famiglie", "bambini", "scuola", "classe", "gruppo"],
    title: "Esplorare con bambini e gruppi",
    body: "Missioni brevi, ascolto, confronto di forme e ricerca di tracce già visibili permettono di imparare senza raccogliere. Ogni attività va adattata a età, meteo e accessibilità.",
    caution: "Definisci confini chiari, un adulto di riferimento e una regola di non assaggio.",
    source: "Percorsi educativi della web app",
    suggestions: ["Quale percorso è più facile?", "Quali missioni possiamo fare?", "Come osserviamo senza raccogliere?"]
  },
  {
    id: "cani-fauna",
    keywords: ["cane", "cani", "guinzaglio", "animale domestico", "fauna selvatica"],
    title: "Cani e fauna selvatica",
    body: "Un cane che corre fuori controllo può inseguire fauna, entrare in tane o avvicinarsi a cinghiali e altri animali. Anche un incontro breve può causare stress o rischio.",
    caution: "Segui i regolamenti locali, usa il guinzaglio dove richiesto e non permettere inseguimenti.",
    source: "Regole di fruizione responsabile",
    suggestions: ["Come mi comporto con un cinghiale?", "Quali regole seguo nel bosco?", "Come leggo una traccia?"]
  },
  {
    id: "non-nutrire-fauna",
    keywords: ["dare pane", "dare cibo", "nutrire animali", "cibo fauna", "anatre pane", "alimentare fauna"],
    title: "Perché non nutrire la fauna",
    body: "Il cibo offerto dalle persone altera dieta, comportamento e concentrazione degli animali, favorisce conflitti e può peggiorare la qualità dell'acqua o attirare specie opportuniste.",
    caution: "Osserva senza offrire alimenti e porta via ogni rifiuto.",
    source: "Regole di osservazione responsabile",
    suggestions: ["Cosa mangia il germano reale?", "Come rispetto le sponde?", "Quali uccelli vedo al lago?"]
  },
  {
    id: "assistente-locale",
    keywords: ["chatbot", "assistente", "intelligenza artificiale", "ia", "come funziona", "dati interni", "archivio locale"],
    title: "Come funziona la Guida del territorio",
    body: "La guida non interroga servizi di intelligenza artificiale esterni. Cerca corrispondenze tra la domanda, le schede dell'Atlante, gli articoli tematici, le regole e i percorsi conservati nella web app.",
    caution: "Le risposte sono divulgative, controllabili nella scheda collegata e non certificano identificazioni o usi.",
    source: "Architettura locale della web app",
    suggestions: ["Quante schede puoi consultare?", "Da dove vengono le informazioni?", "Come confronto una specie?"]
  }
];

const missions = [
  {id: 0, title: "Osserva senza raccogliere", copy: "Scegli una specie, osservala e lasciala nel suo ambiente."},
  {id: 1, title: "Riconosci un habitat", copy: "Individua se ti trovi in un bosco, presso un lago, in un prato o lungo un sentiero."},
  {id: 2, title: "Trova una traccia", copy: "Cerca un’impronta, un aculeo, una penna o un segno sul terreno senza spostarlo."},
  {id: 3, title: "Confronta specie simili", copy: "Apri una scheda e leggi quali elementi possono generare confusione."},
  {id: 4, title: "Segna la stagione", copy: "Annota il periodo dell’anno nella tua osservazione."},
  {id: 5, title: "Rispetta un’indicazione", copy: "Segui un divieto o una regola incontrata durante il percorso."},
  {id: 6, title: "Chiedi al Custode", copy: "Fai una domanda alla guida su specie, habitat o comportamento."},
  {id: 7, title: "Chiedi una verifica esperta", copy: "Per una specie delicata, confronta l’osservazione con una persona qualificata."}
];

const routes = [
  {
    id: "bosco-autunno",
    title: "Segni d’autunno nel bosco",
    description: "Un percorso tematico tra foglie, castagni, funghi e tracce lasciate dagli animali.",
    season: "Autunno",
    difficulty: "Facile",
    duration: "45–60 minuti",
    habitat: "Bosco",
    observations: ["Castagno", "Cerro e roverella", "Faggio", "Funghi del sottobosco", "Picchi", "Tracce di cinghiale e tasso", "Aculei di istrice"],
    rules: ["Resta sui sentieri indicati", "Non raccogliere funghi", "Mantieni la distanza dalla fauna"],
    missionIds: [0, 1, 2, 5],
    bestTime: "Mattina, dopo giornate umide ma con condizioni del sentiero sicure",
    equipment: ["Scarpe con buona aderenza", "Binocolo leggero", "Taccuino", "Acqua"],
    accessibility: "Fondo naturale con possibili foglie, fango e pendenze; verificare sempre il tratto scelto.",
    learningGoals: ["Confrontare alberi del bosco", "Capire il ruolo dei funghi", "Leggere tracce senza seguirle"],
    stops: ["Margine del castagneto", "Bosco misto", "Area di lettiera", "Punto di ascolto"]
  },
  {
    id: "sponde-silenziose",
    title: "Sponde silenziose",
    description: "Un’esperienza di ascolto e osservazione dedicata agli ambienti umidi e alla fauna presso i laghi.",
    season: "Tutto l’anno",
    difficulty: "Facile",
    duration: "30–45 minuti",
    habitat: "Lago",
    observations: ["Martin pescatore", "Folaga", "Svasso maggiore", "Germano reale", "Airone cenerino", "Vegetazione di sponda", "Movimenti sull’acqua"],
    rules: ["Parla a bassa voce", "Non avvicinarti ai nidi", "Non abbandonare il percorso"],
    missionIds: [0, 1, 4, 5],
    bestTime: "Prime ore del mattino o tardo pomeriggio, evitando forte affollamento",
    equipment: ["Binocolo", "Abbigliamento dai colori neutri", "Taccuino", "Acqua"],
    accessibility: "Scegliere punti di osservazione già attrezzati; alcune sponde possono essere ripide o scivolose.",
    learningGoals: ["Distinguere sagome acquatiche", "Osservare senza alimentare la fauna", "Capire la funzione delle sponde"],
    stops: ["Punto panoramico", "Sponda aperta", "Vegetazione ripariale", "Punto di ascolto"]
  },
  {
    id: "forme-profumi",
    title: "Forme e profumi del sentiero",
    description: "Foglie, fiori e aromi accompagnano un’attività sensoriale per famiglie e piccoli gruppi.",
    season: "Primavera–estate",
    difficulty: "Facile",
    duration: "35–50 minuti",
    habitat: "Prato e sentiero",
    observations: ["Borragine", "Sambuco", "Nepitella", "Alloro", "Corbezzolo", "Upupa"],
    rules: ["Osserva senza assaggiare", "Non strappare foglie o fiori", "Confronta sempre più caratteristiche"],
    missionIds: [0, 1, 3, 4],
    bestTime: "Mattina primaverile o estiva, con luce diffusa e temperature miti",
    equipment: ["Lente tascabile", "Taccuino", "Cappello", "Acqua"],
    accessibility: "Percorso da scegliere su tratti larghi e regolari per famiglie e piccoli gruppi.",
    learningGoals: ["Confrontare forme e profumi", "Riconoscere impollinatori", "Applicare la regola del non assaggio"],
    stops: ["Prato fiorito", "Siepe", "Margine del sentiero", "Albero aromatico"]
  }
];

const storageKeys = {
  guide: "custodi-guide-history",
  missions: "custodi-stamps",
  favorites: "custodi-favorites",
  history: "custodi-history",
  observations: "custodi-observations",
  routes: "custodi-routes"
};

const storage = {
  get(key, fallback) {
    try {
      const value = localStorage.getItem(key);
      return value === null ? fallback : JSON.parse(value);
    } catch {
      localStorage.removeItem(key);
      return fallback;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      toast("Impossibile salvare le attività sul dispositivo");
    }
  },
  removeAll() {
    Object.values(storageKeys).forEach(key => localStorage.removeItem(key));
  }
};

function loadArray(key) {
  const value = storage.get(key, []);
  return Array.isArray(value) ? value : [];
}

function loadGuide() {
  return loadArray(storageKeys.guide)
    .filter(message => message && (message.role === "user" || message.role === "bot"))
    .map(message => message.role === "bot"
      ? {
          role: "bot",
          html: message.html || message.text || "",
          actions: Array.isArray(message.actions) ? message.actions.slice(0, 5) : [],
          source: message.source || "",
          suggestions: Array.isArray(message.suggestions) ? message.suggestions.slice(0, 4) : [],
          context: message.context && typeof message.context === "object" ? message.context : {}
        }
      : {role: "user", text: String(message.text || "")})
    .filter(message => message.role === "user" ? message.text : message.html);
}

function loadRouteStatus() {
  const value = storage.get(storageKeys.routes, {});
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};
  return Object.fromEntries(routes
    .map(route => [route.id, value[route.id]])
    .filter(([, status]) => ["not-started", "active", "completed"].includes(status)));
}

const state = {
  atlas: {
    category: "all",
    habitat: "all",
    season: "all",
    risk: "all",
    sort: "name",
    search: ""
  },
  identify: {
    category: "all",
    habitat: "all",
    season: "all",
    trait: "all"
  },
  selectedSpecies: null,
  guide: loadGuide(),
  guideLoading: false,
  guideContext: {},
  missions: loadArray(storageKeys.missions).filter(id => missions.some(mission => mission.id === id)),
  favorites: loadArray(storageKeys.favorites).filter(id => species.some(item => item.id === id)),
  history: loadArray(storageKeys.history).filter(id => species.some(item => item.id === id)),
  observations: loadArray(storageKeys.observations).filter(item => item && species.some(speciesItem => speciesItem.id === item.speciesId)),
  routeStatus: loadRouteStatus(),
  editingObservation: null
};

state.guideContext = [...state.guide].reverse().find(message => message.role === "bot" && message.context)?.context || {};

const $ = id => document.getElementById(id);
const riskOrder = {alto: 0, medio: 1, basso: 2};
let guideTimer = null;
let toastTimer = null;

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[char]));
}

function sourceUrl(source = "") {
  const normalized = normalizeGuideText(source);
  if (normalized.includes("fauna dei laghi")) {
    return "https://www.parcocastelliromani.it/s/content/92003020580/1658832128.4944";
  }
  if (normalized.includes("funghi ed ecosistema")) {
    return "https://www.parcocastelliromani.it/s/content/92003020580/1700041041.6829";
  }
  if (normalized.includes("monitoraggio") || normalized.includes("studi e monitoraggi")) {
    return "https://www.parcocastelliromani.it/s/content/92003020580/1663833107.1907";
  }
  if (normalized.includes("parco regionale dei castelli romani")) {
    return "https://www.parcocastelliromani.it/s/content/92003020580/1656420215.5516";
  }
  return "";
}

function formatDate(value) {
  return new Intl.DateTimeFormat("it-IT", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date(value));
}

function toast(message) {
  const element = $("toast");
  element.textContent = message;
  element.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => element.classList.remove("show"), 2400);
}

function saveState() {
  storage.set(storageKeys.guide, state.guide.slice(-20));
  storage.set(storageKeys.missions, state.missions);
  storage.set(storageKeys.favorites, state.favorites);
  storage.set(storageKeys.history, state.history.slice(0, 10));
  storage.set(storageKeys.observations, state.observations);
  storage.set(storageKeys.routes, state.routeStatus);
}

function fillSelect(id, rows, value, prompt) {
  const select = $(id);
  const options = prompt
    ? [["all", prompt], ...rows.filter(([key]) => key !== "all")]
    : rows;
  select.innerHTML = options.map(([key, label]) => `<option value="${key}">${label}</option>`).join("");
  select.value = value;
}

function seasonMatches(itemSeason, selectedSeason) {
  return selectedSeason === "all" ||
    itemSeason === "tutto l'anno" ||
    itemSeason.includes(selectedSeason);
}

function atlasSpecies() {
  const query = state.atlas.search.trim().toLowerCase();
  const aliases = {
    fungo: "funghi porcino amanita cappello lamelle tubuli",
    uccello: "fauna martin pescatore piumaggio volo",
    impronta: "tracce cinghiale istrice terreno",
    cucina: "alloro nepitella borragine sambuco castagno",
    fiore: "borragine sambuco ciclamino nepitella"
  };

  const filtered = species.filter(item => {
    const matchesFilters =
      (state.atlas.category === "all" || item.category === state.atlas.category) &&
      (state.atlas.habitat === "all" || item.habitat === state.atlas.habitat) &&
      seasonMatches(item.season, state.atlas.season) &&
      (state.atlas.risk === "all" || item.risk === state.atlas.risk);

    const haystack = [
      item.name,
      item.latin,
      item.category,
      item.habitat,
      item.season,
      item.traits.join(" "),
      item.clues,
      item.use,
      item.similar,
      item.action,
      item.story,
      item.ecology,
      item.observation,
      item.source,
      aliases[query] || ""
    ].join(" ").toLowerCase();

    return matchesFilters && (!query || haystack.includes(query));
  });

  return filtered.sort((a, b) => {
    if (state.atlas.sort === "category") return a.category.localeCompare(b.category, "it") || a.name.localeCompare(b.name, "it");
    if (state.atlas.sort === "season") return a.season.localeCompare(b.season, "it") || a.name.localeCompare(b.name, "it");
    if (state.atlas.sort === "risk") return riskOrder[a.risk] - riskOrder[b.risk] || a.name.localeCompare(b.name, "it");
    return a.name.localeCompare(b.name, "it");
  });
}

function toggleFavorite(id) {
  const exists = state.favorites.includes(id);
  state.favorites = exists
    ? state.favorites.filter(item => item !== id)
    : [...state.favorites, id];
  saveState();
  renderAtlas();
  renderPassport();
  renderDataSummary();
  toast(exists ? "Specie rimossa dai preferiti" : "Specie aggiunta ai preferiti");
}

function openSpecies(id, shouldScroll = true) {
  if (!species.some(item => item.id === id)) return;
  state.selectedSpecies = id;
  state.history = [id, ...state.history.filter(item => item !== id)].slice(0, 10);
  saveState();
  renderAtlas();
  renderPassport();
  renderDataSummary();
  if (shouldScroll) $("atlante").scrollIntoView({behavior: "smooth", block: "start"});
}

function renderAtlasList(list) {
  $("species-list").innerHTML = list.length
    ? list.map(item => {
      const favorite = state.favorites.includes(item.id);
      return `
        <div class="species-row">
          <button class="species-button ${state.selectedSpecies === item.id ? "active" : ""}" type="button" data-species="${item.id}">
            <span class="species-list-icon" aria-hidden="true">${item.icon}</span>
            <span>
              <strong>${item.name}</strong>
              <small>${item.latin} · ${item.habitat} · ${item.season}</small>
            </span>
          </button>
          <button class="favorite-button ${favorite ? "active" : ""}" type="button" data-favorite="${item.id}" aria-label="${favorite ? "Rimuovi" : "Aggiungi"} ${item.name} ${favorite ? "dai" : "ai"} preferiti">${favorite ? "★" : "☆"}</button>
        </div>
      `;
    }).join("")
    : `
      <div class="list-empty">
        <strong>Nessuna specie trovata</strong>
        <span>Modifica la ricerca o azzera uno dei filtri.</span>
      </div>
    `;

  document.querySelectorAll("[data-species]").forEach(button => {
    button.addEventListener("click", () => openSpecies(button.dataset.species, false));
  });
  document.querySelectorAll("[data-favorite]").forEach(button => {
    button.addEventListener("click", () => toggleFavorite(button.dataset.favorite));
  });
}

function renderSpeciesDetail(list) {
  const item = list.find(row => row.id === state.selectedSpecies);
  if (!item) {
    $("species-detail").innerHTML = `
      <div class="detail-empty">
        <span aria-hidden="true">⌕</span>
        <h3>${list.length ? "Scegli una specie" : "Amplia la ricerca"}</h3>
        <p>${list.length ? "Apri una scheda per consultare caratteristiche, curiosità e indicazioni di comportamento." : "Non ci sono schede compatibili con i filtri selezionati."}</p>
      </div>
    `;
    return;
  }

  const index = list.findIndex(row => row.id === item.id);
  const previous = list[(index - 1 + list.length) % list.length];
  const next = list[(index + 1) % list.length];
  const favorite = state.favorites.includes(item.id);
  const itemSourceUrl = sourceUrl(item.source);

  $("species-detail").innerHTML = `
    <div class="species-detail-toolbar">
      <button class="text-button" type="button" data-detail-prev="${previous.id}" ${list.length === 1 ? "disabled" : ""}>← Precedente</button>
      <button class="text-button" type="button" data-detail-close>Chiudi scheda</button>
      <button class="text-button" type="button" data-detail-next="${next.id}" ${list.length === 1 ? "disabled" : ""}>Successiva →</button>
    </div>
    <div class="species-header">
      <div>
        <small>Scheda dell’Atlante</small>
        <h3>${item.name}</h3>
        <p class="latin">${item.latin}</p>
      </div>
      <div class="species-icon" aria-hidden="true">${item.icon}</div>
    </div>
    <div class="tag-row">
      <span class="tag">${item.category}</span>
      <span class="tag">${item.habitat}</span>
      <span class="tag">${item.season}</span>
      <span class="tag risk-${item.risk}">attenzione ${item.risk}</span>
    </div>
    <div class="detail-grid">
      <div class="mini-card"><strong>Elementi distintivi</strong><p>${item.clues}</p></div>
      <div class="mini-card"><strong>Ruolo nell’ecosistema</strong><p>${item.ecology}</p></div>
      <div class="mini-card"><strong>Tradizioni e conoscenze</strong><p>${item.use}</p></div>
      <div class="mini-card"><strong>Specie o tracce simili</strong><p>${item.similar}</p></div>
      <div class="mini-card"><strong>Comportamento rispettoso</strong><p>${item.action}</p></div>
      <div class="mini-card"><strong>Come osservarla</strong><p>${item.observation}</p></div>
    </div>
    <div class="mini-card story-card"><strong>Curiosità del territorio</strong><p>${item.story}</p></div>
    <p class="species-source">Fonte editoriale:
      ${itemSourceUrl
        ? `<a href="${itemSourceUrl}" target="_blank" rel="noopener noreferrer">${item.source}</a>`
        : item.source}
    </p>
    <div class="detail-actions">
      <button class="primary" type="button" data-detail-favorite="${item.id}">${favorite ? "Rimuovi dai preferiti" : "Aggiungi ai preferiti"}</button>
      <button class="secondary dark" type="button" data-note-species="${item.id}">Scrivi un’osservazione</button>
    </div>
  `;

  const previousButton = document.querySelector("[data-detail-prev]");
  const nextButton = document.querySelector("[data-detail-next]");
  if (previousButton) previousButton.addEventListener("click", () => openSpecies(previousButton.dataset.detailPrev, false));
  if (nextButton) nextButton.addEventListener("click", () => openSpecies(nextButton.dataset.detailNext, false));
  document.querySelector("[data-detail-close]").addEventListener("click", () => {
    state.selectedSpecies = null;
    renderAtlas();
  });
  document.querySelector("[data-detail-favorite]").addEventListener("click", event => toggleFavorite(event.currentTarget.dataset.detailFavorite));
  document.querySelector("[data-note-species]").addEventListener("click", event => prepareObservation(event.currentTarget.dataset.noteSpecies));
}

function renderAtlas() {
  const list = atlasSpecies();
  const activeFilters = [
    state.atlas.category,
    state.atlas.habitat,
    state.atlas.season,
    state.atlas.risk
  ].filter(value => value !== "all").length + (state.atlas.search ? 1 : 0);

  $("atlas-summary").innerHTML = `
    <strong>${list.length} ${list.length === 1 ? "scheda disponibile" : "schede disponibili"}</strong>
    <span>${activeFilters ? `${activeFilters} ${activeFilters === 1 ? "filtro attivo" : "filtri attivi"}` : "Tutto l’Atlante"}</span>
  `;

  if (state.selectedSpecies && !list.some(item => item.id === state.selectedSpecies)) {
    state.selectedSpecies = null;
  }

  renderAtlasList(list);
  renderSpeciesDetail(list);
}

function identificationCriteria() {
  return [
    ["category", state.identify.category],
    ["habitat", state.identify.habitat],
    ["season", state.identify.season],
    ["trait", state.identify.trait]
  ].filter(([, value]) => value !== "all");
}

function identifyMatches(item) {
  const criteria = identificationCriteria();
  const matched = criteria.filter(([key, value]) => {
    if (key === "season") return seasonMatches(item.season, value);
    if (key === "trait") return item.traits.includes(value);
    return item[key] === value;
  });
  return {item, matches: matched.length, total: criteria.length};
}

function renderIdentificationResults(results) {
  if (!results.length) {
    $("identification-results").innerHTML = `
      <div class="empty-prompt">
        <strong>Nessuna corrispondenza utile</strong>
        <span>Controlla i criteri scelti oppure prova a descrivere l’osservazione in modo più ampio.</span>
      </div>
    `;
    return;
  }

  const best = results[0].matches;
  const visible = results.filter(result => result.matches === best || result.matches >= Math.max(1, best - 1)).slice(0, 4);
  $("identification-results").innerHTML = `
    <div class="results-heading">
      <strong>Risultati del confronto</strong>
      <span>Ordinati in base ai criteri che corrispondono</span>
    </div>
    ${visible.map((result, index) => `
      <article class="match-card ${index === 0 ? "best" : ""}">
        <span class="match-icon" aria-hidden="true">${result.item.icon}</span>
        <div>
          <small>${index === 0 ? "Corrispondenza più completa" : "Altra specie da confrontare"}</small>
          <strong>${result.item.name}</strong>
          <span>${result.matches} ${result.matches === 1 ? "criterio corrispondente" : "criteri corrispondenti"} su ${result.total}</span>
        </div>
        <button class="text-button" type="button" data-identify-open="${result.item.id}">Apri scheda</button>
      </article>
    `).join("")}
  `;

  document.querySelectorAll("[data-identify-open]").forEach(button => {
    button.addEventListener("click", () => openSpecies(button.dataset.identifyOpen));
  });
}

function runIdentification() {
  const criteria = identificationCriteria();
  if (criteria.length < 2) {
    $("identification-feedback").textContent = "Seleziona almeno due criteri prima di avviare il confronto.";
    $("identification-results").innerHTML = `
      <div class="empty-prompt error">
        <strong>Mancano alcune informazioni</strong>
        <span>Categoria, ambiente, stagione e caratteristica aiutano a restringere il confronto.</span>
      </div>
    `;
    return;
  }

  $("identification-feedback").textContent = "";
  const results = species
    .map(identifyMatches)
    .filter(result => result.matches > 0)
    .sort((a, b) => b.matches - a.matches || a.item.name.localeCompare(b.item.name, "it"));
  renderIdentificationResults(results);
  if (!state.missions.includes(3)) state.missions = [...state.missions, 3].sort((a, b) => a - b);
  saveState();
  renderPassport();
}

function resetIdentification() {
  state.identify = {category: "all", habitat: "all", season: "all", trait: "all"};
  ["identify-category", "identify-habitat", "identify-season", "identify-trait"].forEach(id => {
    $(id).value = "all";
  });
  $("identification-feedback").textContent = "";
  $("identification-results").innerHTML = `
    <div class="empty-prompt">
      <strong>Pronto per il confronto</strong>
      <span>Seleziona i criteri che descrivono meglio la tua osservazione.</span>
    </div>
  `;
}

function renderRoutes() {
  $("route-list").innerHTML = routes.map(route => {
    const status = state.routeStatus[route.id] || "not-started";
    const statusLabel = status === "active" ? "In corso" : status === "completed" ? "Completato" : "Da iniziare";
    const action = status === "not-started"
      ? `<button class="primary" type="button" data-route-start="${route.id}">Avvia percorso</button>`
      : status === "active"
        ? `<button class="primary" type="button" data-route-complete="${route.id}">Completa percorso</button>
           <button class="text-button" type="button" data-route-reset="${route.id}">Interrompi</button>`
        : `<button class="primary" type="button" data-route-repeat="${route.id}">Ripeti percorso</button>`;

    return `
      <article class="route-card status-${status}" data-route-id="${route.id}">
        <div class="route-card-head">
          <span class="route-status">${statusLabel}</span>
          <span class="route-number" aria-hidden="true">0${routes.indexOf(route) + 1}</span>
        </div>
        <h3>${route.title}</h3>
        <p>${route.description}</p>
        <dl class="route-meta">
          <div><dt>Stagione</dt><dd>${route.season}</dd></div>
          <div><dt>Difficoltà</dt><dd>${route.difficulty}</dd></div>
          <div><dt>Durata</dt><dd>${route.duration}</dd></div>
          <div><dt>Habitat</dt><dd>${route.habitat}</dd></div>
        </dl>
        <details>
          <summary>Osservazioni e regole</summary>
          <div class="route-details">
            <div><strong>Cosa osservare</strong><ul>${route.observations.map(item => `<li>${item}</li>`).join("")}</ul></div>
            <div><strong>Come comportarsi</strong><ul>${route.rules.map(item => `<li>${item}</li>`).join("")}</ul></div>
            <div><strong>Missioni collegate</strong><ul>${route.missionIds.map(id => `<li>${missions.find(mission => mission.id === id).title}</li>`).join("")}</ul></div>
            <div><strong>Quando e cosa portare</strong><p>${route.bestTime}</p><ul>${route.equipment.map(item => `<li>${item}</li>`).join("")}</ul></div>
            <div><strong>Tappe narrative</strong><ul>${route.stops.map(item => `<li>${item}</li>`).join("")}</ul></div>
            <div><strong>Accessibilità e obiettivi</strong><p>${route.accessibility}</p><ul>${route.learningGoals.map(item => `<li>${item}</li>`).join("")}</ul></div>
          </div>
        </details>
        <div class="route-actions">${action}</div>
      </article>
    `;
  }).join("");

  document.querySelectorAll("[data-route-start]").forEach(button => {
    button.addEventListener("click", () => setRouteStatus(button.dataset.routeStart, "active"));
  });
  document.querySelectorAll("[data-route-complete]").forEach(button => {
    button.addEventListener("click", () => completeRoute(button.dataset.routeComplete));
  });
  document.querySelectorAll("[data-route-reset]").forEach(button => {
    button.addEventListener("click", () => setRouteStatus(button.dataset.routeReset, "not-started"));
  });
  document.querySelectorAll("[data-route-repeat]").forEach(button => {
    button.addEventListener("click", () => setRouteStatus(button.dataset.routeRepeat, "active"));
  });
}

function setRouteStatus(id, status) {
  state.routeStatus = {...state.routeStatus, [id]: status};
  saveState();
  renderRoutes();
  renderPassport();
  renderDataSummary();
  toast(status === "active" ? "Percorso avviato" : "Percorso interrotto");
}

function completeRoute(id) {
  const route = routes.find(item => item.id === id);
  if (!route) return;
  state.routeStatus = {...state.routeStatus, [id]: "completed"};
  state.missions = [...new Set([...state.missions, ...route.missionIds])].sort((a, b) => a - b);
  saveState();
  renderRoutes();
  renderPassport();
  renderDataSummary();
  toast("Percorso completato e passaporto aggiornato");
}

function renderMissionList() {
  $("mission-list").innerHTML = missions.map(mission => {
    const done = state.missions.includes(mission.id);
    return `
      <button class="mission-item ${done ? "done" : ""}" type="button" data-mission="${mission.id}" aria-pressed="${done}">
        <span class="mission-mark" aria-hidden="true">${done ? "✓" : "○"}</span>
        <span><strong>${mission.title}</strong><small>${mission.copy}</small></span>
      </button>
    `;
  }).join("");

  document.querySelectorAll("[data-mission]").forEach(button => {
    button.addEventListener("click", () => {
      const id = Number(button.dataset.mission);
      const done = state.missions.includes(id);
      state.missions = done
        ? state.missions.filter(item => item !== id)
        : [...state.missions, id].sort((a, b) => a - b);
      saveState();
      renderPassport();
      renderDataSummary();
      toast(done ? "Missione riaperta" : "Missione completata");
    });
  });
}

function renderFavorites() {
  const items = state.favorites.map(id => species.find(item => item.id === id)).filter(Boolean);
  $("favorites-list").innerHTML = items.length
    ? items.map(item => `
      <div class="passport-list-item">
        <button class="passport-open" type="button" data-passport-species="${item.id}">
          <span aria-hidden="true">${item.icon}</span>
          <span><strong>${item.name}</strong><small>${item.habitat} · ${item.season}</small></span>
        </button>
        <button class="remove-button" type="button" data-remove-favorite="${item.id}" aria-label="Rimuovi ${item.name} dai preferiti">×</button>
      </div>
    `).join("")
    : `<div class="panel-empty"><strong>Nessuna specie salvata</strong><span>Apri l’Atlante e usa “Aggiungi ai preferiti”.</span><a href="#atlante">Vai all’Atlante</a></div>`;

  document.querySelectorAll("[data-passport-species]").forEach(button => {
    button.addEventListener("click", () => openSpecies(button.dataset.passportSpecies));
  });
  document.querySelectorAll("[data-remove-favorite]").forEach(button => {
    button.addEventListener("click", () => toggleFavorite(button.dataset.removeFavorite));
  });
}

function prepareObservation(speciesId) {
  $("observation-species").value = speciesId;
  $("passaporto").scrollIntoView({behavior: "smooth", block: "start"});
  setTimeout(() => $("observation-note").focus(), 450);
}

function renderObservations() {
  $("observations-list").innerHTML = state.observations.length
    ? state.observations.map(observation => {
      const item = species.find(row => row.id === observation.speciesId);
      if (!item) return "";
      return `
        <article class="observation-item">
          <div>
            <strong>${item.icon} ${item.name}</strong>
            <small>${formatDate(observation.updatedAt || observation.createdAt)}</small>
          </div>
          <p>${escapeHTML(observation.note)}</p>
          <div class="inline-actions">
            <button class="text-button" type="button" data-observation-open="${item.id}">Apri scheda</button>
            <button class="text-button" type="button" data-observation-edit="${observation.id}">Modifica</button>
            <button class="text-button danger-text" type="button" data-observation-remove="${observation.id}">Rimuovi</button>
          </div>
        </article>
      `;
    }).join("")
    : `<div class="panel-empty"><strong>Il taccuino è pronto</strong><span>Scegli una specie, scrivi una breve nota e salva la tua prima osservazione.</span></div>`;

  document.querySelectorAll("[data-observation-open]").forEach(button => {
    button.addEventListener("click", () => openSpecies(button.dataset.observationOpen));
  });
  document.querySelectorAll("[data-observation-edit]").forEach(button => {
    button.addEventListener("click", () => editObservation(button.dataset.observationEdit));
  });
  document.querySelectorAll("[data-observation-remove]").forEach(button => {
    button.addEventListener("click", () => removeObservation(button.dataset.observationRemove));
  });
}

function editObservation(id) {
  const observation = state.observations.find(item => item.id === id);
  if (!observation) return;
  state.editingObservation = id;
  $("observation-species").value = observation.speciesId;
  $("observation-note").value = observation.note;
  $("observation-submit").textContent = "Aggiorna osservazione";
  $("observation-note").focus();
}

function removeObservation(id) {
  state.observations = state.observations.filter(item => item.id !== id);
  if (state.editingObservation === id) resetObservationForm();
  saveState();
  renderPassport();
  renderDataSummary();
  toast("Osservazione rimossa");
}

function resetObservationForm() {
  state.editingObservation = null;
  $("observation-form").reset();
  $("observation-species").value = species[0].id;
  $("observation-submit").textContent = "Salva osservazione";
}

function saveObservation() {
  const speciesId = $("observation-species").value;
  const note = $("observation-note").value.trim();
  if (!speciesId || !note) {
    toast("Scegli una specie e scrivi una breve nota");
    (!speciesId ? $("observation-species") : $("observation-note")).focus();
    return;
  }

  const now = new Date().toISOString();
  if (state.editingObservation) {
    state.observations = state.observations.map(item => item.id === state.editingObservation
      ? {...item, speciesId, note, updatedAt: now}
      : item);
    toast("Osservazione aggiornata");
  } else {
    state.observations = [{
      id: `observation-${Date.now()}`,
      speciesId,
      note,
      createdAt: now
    }, ...state.observations];
    if (!state.missions.includes(4)) state.missions = [...state.missions, 4].sort((a, b) => a - b);
    toast("Osservazione salvata nel passaporto");
  }

  resetObservationForm();
  saveState();
  renderPassport();
  renderDataSummary();
}

function renderHistory() {
  const items = state.history.map(id => species.find(item => item.id === id)).filter(Boolean);
  $("history-list").innerHTML = items.length
    ? items.map(item => `
      <button type="button" data-history-species="${item.id}">
        <span aria-hidden="true">${item.icon}</span>
        <span><strong>${item.name}</strong><small>${item.habitat}</small></span>
      </button>
    `).join("")
    : `<span class="history-empty">Le schede che apri nell’Atlante compariranno qui.</span>`;

  document.querySelectorAll("[data-history-species]").forEach(button => {
    button.addEventListener("click", () => openSpecies(button.dataset.historySpecies));
  });
}

function renderPassport() {
  const completed = state.missions.length;
  const progress = Math.round((completed / missions.length) * 100);
  const completedRoutes = routes.filter(route => state.routeStatus[route.id] === "completed").length;
  const hasActivity = completed || state.favorites.length || state.observations.length || state.history.length || completedRoutes;

  $("passport-title").textContent = hasActivity
    ? `${completed} ${completed === 1 ? "missione completata" : "missioni completate"}`
    : "Il tuo passaporto è pronto";
  $("passport-copy").textContent = completed === missions.length
    ? "Hai completato tutte le missioni: puoi ripeterle o continuare ad aggiungere osservazioni."
    : hasActivity
      ? "Continua a esplorare per aggiungere nuove specie, note e percorsi."
      : "Completa la prima missione o salva una specie dall’Atlante.";

  $("passport-metrics").innerHTML = `
    <div><strong>${state.favorites.length}</strong><span>preferiti</span></div>
    <div><strong>${state.observations.length}</strong><span>osservazioni</span></div>
    <div><strong>${completedRoutes}</strong><span>percorsi</span></div>
  `;
  $("progress-ring").style.setProperty("--progress", `${progress}%`);
  $("progress-ring").querySelector("span").textContent = completed ? `${progress}%` : "Inizia";
  $("progress-ring").setAttribute("aria-label", completed ? `Passaporto completato al ${progress}%` : "Passaporto pronto per la prima missione");

  renderMissionList();
  renderFavorites();
  renderObservations();
  renderHistory();
}

const guideAliases = {
  species: {
    borragine: ["borragine", "borago"],
    sambuco: ["sambuco", "sambucus"],
    castagno: ["castagno", "castanea", "castagna", "castagne"],
    porcino: ["porcino", "boletus", "boleto"],
    amanita: ["amanita", "falloide", "phalloides"],
    istrice: ["istrice", "hystrix", "aculeo", "aculei"],
    martin: ["martin pescatore", "alcedo"],
    traccia: ["cinghiale", "sus scrofa", "tracce di cinghiale"],
    nepitella: ["nepitella", "clinopodium", "mentuccia"],
    ciclamino: ["ciclamino", "cyclamen"],
    alloro: ["alloro", "lauro", "laurus"],
    salamandrina: ["salamandrina", "salamandra", "perspicillata"],
    leccio: ["leccio", "quercus ilex", "elce"],
    roverella: ["roverella", "quercus pubescens"],
    cerro: ["cerro", "quercus cerris"],
    faggio: ["faggio", "fagus", "faggeta"],
    farnia: ["farnia", "quercus robur", "cerquone"],
    corbezzolo: ["corbezzolo", "arbutus", "unedo"],
    agrifoglio: ["agrifoglio", "ilex aquifolium"],
    tasso: ["tasso", "meles meles"],
    scoiattolo: ["scoiattolo", "sciurus"],
    moscardino: ["moscardino", "muscardinus", "nocciola rosicchiata"],
    "picchio-verde": ["picchio verde", "picus viridis"],
    "picchio-rosso": ["picchio rosso", "dendrocopos", "tambureggiamento"],
    upupa: ["upupa", "upupa epops"],
    folaga: ["folaga", "fulica atra"],
    svasso: ["svasso", "svasso maggiore", "podiceps"],
    germano: ["germano", "germano reale", "anas platyrhynchos"],
    airone: ["airone", "airone cenerino", "ardea cinerea"],
    "rana-dalmatina": ["rana dalmatina", "rana agile", "rana bruna"],
    nocciolo: ["nocciolo", "corylus", "nocciola", "nocciole"],
    "acero-campestre": ["acero", "acero campestre", "acer campestre", "samara", "samare"],
    "carpino-nero": ["carpino", "carpino nero", "ostrya"],
    tiglio: ["tiglio", "tilia"],
    "erica-arborea": ["erica", "erica arborea"],
    riccio: ["riccio", "erinaceus"],
    ghiro: ["ghiro", "glis glis"],
    volpe: ["volpe", "vulpes"],
    martora: ["martora", "martes martes"],
    lupo: ["lupo", "canis lupus"],
    poiana: ["poiana", "buteo"],
    sparviero: ["sparviero", "accipiter"],
    "falco-pellegrino": ["falco pellegrino", "pellegrino", "falco peregrinus"],
    assiolo: ["assiolo", "otus scops"],
    "testuggine-hermann": ["testuggine", "testuggine di hermann", "testudo hermanni", "tartaruga terrestre"],
    orbettino: ["orbettino", "anguis"],
    biacco: ["biacco", "hierophis"],
    tritone: ["tritone", "tritoni", "triturus", "lissotriton"],
    pipistrelli: ["pipistrello", "pipistrelli", "chirottero", "chirotteri"],
    cormorano: ["cormorano", "phalacrocorax"]
  },
  habitat: {
    bosco: ["bosco", "foresta", "sottobosco", "castagneto"],
    lago: ["lago", "sponda", "acqua", "ambiente umido"],
    prato: ["prato", "campo", "radura"],
    sentiero: ["sentiero", "cammino", "passeggiata"]
  },
  season: {
    primavera: ["primavera", "primaverile"],
    estate: ["estate", "estivo", "estiva"],
    autunno: ["autunno", "autunnale"],
    inverno: ["inverno", "invernale"]
  },
  category: {
    erbe: ["erba", "erbe", "fiore", "fiori", "pianta", "piante"],
    funghi: ["fungo", "funghi", "micologico"],
    fauna: ["animale", "animali", "fauna", "uccello", "uccelli", "anfibio", "mammifero", "rettile", "rapace"],
    tracce: ["traccia", "tracce", "impronta", "impronte"],
    alberi: ["albero", "alberi", "arbusto"]
  },
  route: {
    "bosco-autunno": ["segni d autunno", "percorso nel bosco", "itinerario nel bosco"],
    "sponde-silenziose": ["sponde silenziose", "percorso al lago", "passeggiata al lago"],
    "forme-profumi": ["forme e profumi", "percorso nel prato", "profumi del sentiero"]
  }
};

function normalizeGuideText(value) {
  return String(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function editDistance(left, right) {
  const a = normalizeGuideText(left);
  const b = normalizeGuideText(right);
  const row = Array.from({length: b.length + 1}, (_, index) => index);
  for (let i = 1; i <= a.length; i += 1) {
    let previous = row[0];
    row[0] = i;
    for (let j = 1; j <= b.length; j += 1) {
      const current = row[j];
      row[j] = Math.min(
        row[j] + 1,
        row[j - 1] + 1,
        previous + (a[i - 1] === b[j - 1] ? 0 : 1)
      );
      previous = current;
    }
  }
  return row[b.length];
}

function guideIncludes(query, values) {
  return values.some(value => query.includes(normalizeGuideText(value)));
}

function fuzzyIncludes(query, value) {
  const target = normalizeGuideText(value);
  if (query.includes(target)) return true;
  if (target.includes(" ")) return false;
  return query.split(" ").some(token =>
    token.length >= 4 &&
    target.length >= 4 &&
    editDistance(token, target) <= (Math.max(token.length, target.length) >= 8 ? 2 : 1)
  );
}

function findKnowledgeArticle(query) {
  const normalized = normalizeGuideText(query);
  const queryTokens = new Set(normalized.split(" ").filter(token => token.length >= 4));
  const ranked = knowledgeArticles.map(article => {
    let score = 0;
    article.keywords.forEach(keyword => {
      const key = normalizeGuideText(keyword);
      if (normalized.includes(key)) {
        score += key.includes(" ") ? 5 : 3;
        return;
      }
      key.split(" ").filter(token => token.length >= 4).forEach(token => {
        if (queryTokens.has(token)) score += 1;
      });
    });
    normalizeGuideText(article.title).split(" ").filter(token => token.length >= 5).forEach(token => {
      if (queryTokens.has(token)) score += 1;
    });
    return {article, score};
  }).sort((a, b) => b.score - a.score);
  return ranked[0]?.score >= 2 ? ranked[0].article : null;
}

function entityFromAliases(query, group) {
  return Object.entries(group).find(([, aliases]) =>
    aliases.some(alias => fuzzyIncludes(query, alias))
  )?.[0] || null;
}

function guideEntities(question) {
  const query = normalizeGuideText(question);
  return {
    query,
    speciesId: entityFromAliases(query, guideAliases.species),
    habitat: entityFromAliases(query, guideAliases.habitat),
    season: entityFromAliases(query, guideAliases.season),
    category: entityFromAliases(query, guideAliases.category),
    routeId: entityFromAliases(query, guideAliases.route)
  };
}

function guideSpeciesFor(context) {
  return species.filter(item =>
    (!context.habitat || item.habitat === context.habitat) &&
    (!context.season || seasonMatches(item.season, context.season)) &&
    (!context.category || item.category === context.category)
  );
}

function structuredAnswer({title, body, caution = "", next = "", actions = [], source = "", suggestions = [], context = {}}) {
  return {
    html: `<strong>${title}</strong><br>${body}${caution ? `<br><span class="answer-note">${caution}</span>` : ""}${next ? `<br><small>${next}</small>` : ""}`,
    actions,
    source,
    suggestions,
    context
  };
}

function guideAnswer(question) {
  const entities = guideEntities(question);
  const query = entities.query;
  const followUp = guideIncludes(query, [
    "dove", "quando", "come", "simile", "pericol", "mang", "uso", "vive", "stagione",
    "habitat", "altro", "ecologia", "ecosistema", "ruolo", "osserv", "curios", "fonte",
    "nutre", "alimentazione", "dieta", "accessib", "portare", "attrezz", "tappe",
    "orario", "difficol", "adatto", "mission", "regol"
  ]);
  const context = {
    ...state.guideContext,
    ...Object.fromEntries(Object.entries(entities).filter(([key, value]) => key !== "query" && value))
  };
  if (!followUp && !entities.speciesId && !entities.routeId && !entities.habitat && !entities.season && !entities.category) {
    delete context.speciesId;
    delete context.routeId;
  }

  const found = species.find(item => item.id === (entities.speciesId || (followUp ? context.speciesId : null)));
  const animalDietIntent = found?.category === "fauna" &&
    guideIncludes(query, ["cosa mangia", "di cosa si nutre", "alimentazione", "dieta"]);
  const safetyIntent = !animalDietIntent &&
    guideIncludes(query, ["commest", "posso mang", "mangiare", "cucina", "velen", "tossic", "officinal", "raccogli", "uso"]);
  const routeIntent = entities.routeId ||
    guideIncludes(query, ["percor", "passegg", "itiner", "cammin", "dove andare"]) ||
    (context.routeId && guideIncludes(query, [
      "osserv", "regol", "mission", "durata", "difficol", "adatto", "portare",
      "attrezz", "accessib", "tappe", "fermate", "quando", "orario"
    ]));
  const identifyIntent = guideIncludes(query, ["identific", "riconosc", "che specie", "ho visto", "osservazione", "foto", "fotografia"]);
  const compareIntent = guideIncludes(query, ["simil", "disting", "differenza", "confront"]);
  const groupIntent = guideIncludes(query, ["scuola", "famigl", "bambin", "gruppo"]);
  const respectIntent = guideIncludes(query, ["rispett", "comport", "regola", "disturb", "raccogliere"]);

  if (safetyIntent) {
    return structuredAnswer({
      title: found ? `${found.name}: prima la sicurezza` : "Prudenza prima di ogni uso",
      body: found
        ? `${found.use} ${found.action}`
        : "Le schede raccontano caratteristiche e tradizioni, ma non autorizzano raccolta, consumo o uso officinale.",
      caution: "Per funghi, bacche ed erbe spontanee è sempre necessaria la verifica di un esperto qualificato.",
      next: "L’app non certifica la commestibilità e non sostituisce medici, micologi o guide abilitate.",
      actions: found
        ? [{type: "species", id: found.id, label: "Apri la scheda completa"}]
        : [{type: "atlas", filters: {category: "funghi", risk: "alto"}, label: "Consulta le schede delicate"}],
      source: found ? found.source : "Linee di sicurezza dell’app",
      suggestions: found ? ["Come posso distinguerla?", "Dove vive?", "Quali specie sono simili?"] : ["Parlami dell’amanita", "Come confronto specie simili?"],
      context: {...context, speciesId: found?.id || null}
    });
  }

  if (found && followUp) {
    if (guideIncludes(query, ["ecologia", "ecosistema", "ruolo", "a cosa serve", "di cosa si nutre", "cosa mangia", "alimentazione", "dieta"])) {
      return structuredAnswer({
        title: `${found.name}: ruolo nell'ecosistema`,
        body: `${found.ecology} ${found.story}`,
        caution: "Le relazioni ecologiche cambiano con stagione, habitat e disponibilità di risorse.",
        next: found.observation,
        actions: [
          {type: "species", id: found.id, label: "Apri la scheda approfondita"},
          {type: "atlas", filters: {habitat: found.habitat}, label: `Esplora l'habitat ${found.habitat}`}
        ],
        source: found.source,
        suggestions: ["Come posso osservarla?", "Dove vive?", "Quando posso trovarla?"],
        context: {...context, speciesId: found.id, habitat: found.habitat}
      });
    }
    if (guideIncludes(query, ["come osserv", "osservare", "osservo", "cercare", "trovare", "indizi", "segni"])) {
      return structuredAnswer({
        title: `Come osservare ${found.name}`,
        body: `${found.observation} Indizi distintivi: ${found.clues}`,
        caution: found.action,
        next: `Periodo indicativo: ${found.season}; ambiente associato: ${found.habitat}.`,
        actions: [
          {type: "species", id: found.id, label: "Apri tutti i dettagli"},
          {type: "identify", filters: {category: found.category, habitat: found.habitat, trait: found.traits[0]}, label: "Confronta gli indizi"}
        ],
        source: found.source,
        suggestions: ["Qual è il suo ruolo?", "Quali specie sono simili?", "Dove vive?"],
        context: {...context, speciesId: found.id}
      });
    }
    if (guideIncludes(query, ["curios", "racconta", "particolar"])) {
      return structuredAnswer({
        title: `Una curiosità su ${found.name}`,
        body: `${found.story} ${found.ecology}`,
        caution: `Per riconoscerla considera questi indizi: ${found.clues}`,
        next: found.observation,
        actions: [{type: "species", id: found.id, label: "Apri la scheda completa"}],
        source: found.source,
        suggestions: ["Dove vive?", "Come posso osservarla?", "Qual è il suo ruolo?"],
        context: {...context, speciesId: found.id}
      });
    }
    if (guideIncludes(query, ["fonte", "da dove viene", "approfondimento"])) {
      return structuredAnswer({
        title: `Fonte della scheda ${found.name}`,
        body: `La scheda è ricondotta a: ${found.source}. I contenuti sono sintetizzati in forma divulgativa e conservati nell'archivio interno della web app.`,
        caution: "Per decisioni su raccolta, consumo o gestione della fauna servono sempre fonti ufficiali aggiornate e professionisti qualificati.",
        next: found.story,
        actions: [{type: "species", id: found.id, label: "Torna alla scheda"}],
        source: found.source,
        suggestions: ["Qual è il suo ruolo?", "Come posso osservarla?", "Quali specie sono simili?"],
        context: {...context, speciesId: found.id}
      });
    }
    if (guideIncludes(query, ["dove", "vive", "habitat", "ambiente"])) {
      return structuredAnswer({
        title: `Dove osservare ${found.name}`,
        body: `Nelle schede dell’app è associato soprattutto all’ambiente ${found.habitat}. ${found.story}`,
        caution: "La presenza reale dipende dalle condizioni locali e non è garantita lungo ogni percorso.",
        next: `Periodo indicativo: ${found.season}.`,
        actions: [
          {type: "species", id: found.id, label: "Apri la scheda"},
          {type: "atlas", filters: {habitat: found.habitat}, label: `Altre specie del ${found.habitat}`}
        ],
        source: found.source,
        suggestions: ["Quando posso osservarla?", "Come la distinguo?", "Quale percorso è adatto?"],
        context: {...context, speciesId: found.id, habitat: found.habitat}
      });
    }
    if (guideIncludes(query, ["quando", "stagione", "periodo"])) {
      return structuredAnswer({
        title: `Quando osservare ${found.name}`,
        body: `Il periodo indicato nell’Atlante è ${found.season}. Cerca più caratteri insieme e considera anche l’ambiente ${found.habitat}.`,
        caution: "Stagionalità e presenza possono cambiare con clima e condizioni locali.",
        next: found.action,
        actions: [
          {type: "species", id: found.id, label: "Apri la scheda"},
          {type: "atlas", filters: {season: found.season.split("-")[0]}, label: "Esplora la stessa stagione"}
        ],
        source: found.source,
        suggestions: ["Dove vive?", "Come la distinguo?", "Quali specie sono simili?"],
        context: {...context, speciesId: found.id}
      });
    }
    if (guideIncludes(query, ["simil", "disting", "differenza", "confront", "come"])) {
      return structuredAnswer({
        title: `Come distinguere ${found.name}`,
        body: `${found.clues} Confronta sempre più elementi e non affidarti a un solo dettaglio.`,
        caution: `Possibili confusioni: ${found.similar}`,
        next: found.action,
        actions: [
          {type: "species", id: found.id, label: "Apri tutti i dettagli"},
          {type: "identify", filters: {category: found.category, habitat: found.habitat, trait: found.traits[0]}, label: "Confronta nell’app"}
        ],
        source: found.source,
        suggestions: ["Dove vive?", "Quando posso osservarla?", "È commestibile?"],
        context: {...context, speciesId: found.id}
      });
    }
  }

  if (found) {
    return structuredAnswer({
      title: found.name,
      body: `${found.clues} ${found.story} ${found.ecology}`,
      caution: `Da confrontare con attenzione: ${found.similar}`,
      next: `Come osservarla: ${found.observation}`,
      actions: [
        {type: "species", id: found.id, label: "Apri la scheda"},
        {type: "identify", filters: {category: found.category, habitat: found.habitat, season: found.season.split("-")[0], trait: found.traits[0]}, label: "Avvia un confronto"}
      ],
      source: found.source,
      suggestions: ["Dove vive?", "Qual è il suo ruolo?", "Come posso osservarla?", "Come la distinguo?"],
      context: {...context, speciesId: found.id, habitat: found.habitat}
    });
  }

  if (guideIncludes(query, ["quante schede", "quanto contiene", "base dati", "archivio", "quante specie", "cosa sai"])) {
    const categoryCounts = Object.entries(species.reduce((counts, item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
      return counts;
    }, {})).map(([category, count]) => `${count} ${category}`).join(", ");
    return structuredAnswer({
      title: "La base di conoscenza locale",
      body: `Posso consultare ${species.length} schede naturalistiche e ${knowledgeArticles.length} approfondimenti tematici. Le schede comprendono ${categoryCounts}, oltre a ${routes.length} percorsi e ${missions.length} missioni.`,
      caution: "L'archivio è interno alla web app: non invio la domanda a servizi di IA esterni.",
      next: "Ogni scheda contiene identificazione, ecologia, stagionalità, possibili confusioni, osservazione responsabile e fonte editoriale.",
      actions: [{type: "atlas", filters: {}, label: "Esplora tutto l'Atlante"}],
      source: "Indice dell'archivio naturalistico locale",
      suggestions: ["Parlami della biodiversità", "Quali specie vivono al lago?", "Come funziona il chatbot?"],
      context: {}
    });
  }

  if (routeIntent) {
    const route = routes.find(item => item.id === (entities.routeId || context.routeId)) ||
      routes.find(item => context.habitat && normalizeGuideText(item.habitat).includes(context.habitat)) ||
      routes.find(item => context.season && normalizeGuideText(item.season).includes(context.season)) ||
      routes[0];
    const asksEquipment = guideIncludes(query, ["cosa porto", "portare", "attrezzatura", "equipaggiamento", "serve"]);
    const asksAccessibility = guideIncludes(query, ["accessibile", "accessibilita", "passeggino", "mobilita", "difficolta", "adatto"]);
    const asksTiming = guideIncludes(query, ["quando", "orario", "momento", "mattina", "pomeriggio"]);
    const asksStops = guideIncludes(query, ["tappe", "fermate", "obiettivi", "imparo", "attivita"]);
    const routeBody = asksEquipment
      ? `Per ${route.title} sono utili: ${route.equipment.join(", ")}.`
      : asksAccessibility
        ? `${route.accessibility} Difficoltà editoriale: ${route.difficulty}; durata indicativa: ${route.duration}.`
        : asksTiming
          ? `Momento consigliato: ${route.bestTime}. Stagione proposta: ${route.season}.`
          : asksStops
            ? `Tappe narrative: ${route.stops.join(", ")}. Obiettivi: ${route.learningGoals.join("; ")}.`
            : `${route.description} Durata ${route.duration}, difficoltà ${route.difficulty}. Puoi osservare ${route.observations.slice(0, 5).join(", ")}.`;
    return structuredAnswer({
      title: route.title,
      body: routeBody,
      caution: `Regola chiave: ${route.rules[0]}.`,
      next: `Momento consigliato: ${route.bestTime}.`,
      actions: [{type: "route", id: route.id, label: "Apri questo percorso"}],
      source: `Percorsi locali · ${route.title}`,
      suggestions: ["Cosa devo portare?", "È accessibile?", "Quali sono le tappe?", "Quando è meglio andare?"],
      context: {...context, routeId: route.id}
    });
  }

  const topicIntent = guideIncludes(query, [
    "parlami", "spiegami", "perche", "cos e", "cosa sono", "importan", "problema",
    "tutela", "biodivers", "monitor", "invasiv", "come funziona", "dare pane",
    "guinzaglio", "notturn", "vulcano", "geologia", "tracce", "impronte"
  ]);
  const article = findKnowledgeArticle(query);
  if (article && (topicIntent || (!entities.season && !entities.habitat && !entities.category))) {
    const articleHabitat = entities.habitat || null;
    return structuredAnswer({
      title: article.title,
      body: article.body,
      caution: article.caution,
      next: "Puoi continuare con una delle domande suggerite o aprire l'Atlante collegato.",
      actions: [
        ...(articleHabitat ? [{type: "atlas", filters: {habitat: articleHabitat}, label: `Esplora l'habitat ${articleHabitat}`}]: []),
        {type: "atlas", filters: {}, label: "Apri l'Atlante completo"}
      ],
      source: article.source,
      suggestions: article.suggestions,
      context
    });
  }

  if (entities.season || entities.habitat || entities.category) {
    const allMatches = guideSpeciesFor(context);
    const matches = allMatches.slice(0, 4);
    const description = [
      context.category ? taxonomies.category.find(([key]) => key === context.category)?.[1] : "",
      context.habitat ? `in ambiente ${context.habitat}` : "",
      context.season ? `in ${context.season}` : ""
    ].filter(Boolean).join(" ");
    return structuredAnswer({
      title: description ? `Cosa osservare: ${description}` : "Esplora l’Atlante",
      body: matches.length
        ? `Le schede più pertinenti sono ${matches.map(item => item.name).join(", ")}. Apri l’Atlante per confrontare caratteri, stagionalità e livello di attenzione.`
        : "Non ho trovato una combinazione precisa nelle schede disponibili. Prova ad ampliare uno dei criteri.",
      caution: "Presenza e periodo di osservazione possono variare con clima e condizioni locali.",
      next: allMatches.length
        ? `${allMatches.length} ${allMatches.length === 1 ? "scheda dell’Atlante corrisponde" : "schede dell’Atlante corrispondono"} ai criteri indicati.`
        : "La guida consulta esclusivamente i contenuti presenti nell’app.",
      actions: [
        {type: "atlas", filters: {category: context.category, habitat: context.habitat, season: context.season}, label: "Mostra nell’Atlante"},
        ...(matches[0] ? [{type: "species", id: matches[0].id, label: `Apri ${matches[0].name}`}]: [])
      ],
      source: `Atlante locale · ${allMatches.length} schede consultate`,
      suggestions: ["Quale percorso è più adatto?", "Come confronto le specie?", "Cosa devo evitare?"],
      context
    });
  }

  if (identifyIntent || compareIntent) {
    return structuredAnswer({
      title: "Identificazione guidata",
      body: "Scegli almeno due criteri tra categoria, ambiente, stagione e caratteristica. Il sistema confronterà le scelte con tutte le schede dell’Atlante.",
      caution: "Il risultato è orientativo e non utilizza fotografie né riconoscimento automatico.",
      next: "Più criteri osservabili selezioni, più utile sarà il confronto.",
      actions: [{type: "identify", filters: {}, label: "Apri Identifica"}],
      source: "Motore di confronto locale",
      suggestions: ["Come confronto specie simili?", "Cosa osservo in autunno?", "Quali funghi sono nell’Atlante?"],
      context: {}
    });
  }

  if (groupIntent) {
    return structuredAnswer({
      title: "Un’esperienza per gruppi e famiglie",
      body: "I percorsi e le missioni aiutano a osservare habitat, tracce e stagioni senza raccogliere o disturbare.",
      caution: "Adatta durata e difficoltà all’età, al meteo e alle condizioni del gruppo.",
      next: "Il percorso Forme e profumi del sentiero è un buon punto di partenza.",
      actions: [{type: "route", id: "forme-profumi", label: "Apri il percorso consigliato"}],
      source: "Percorsi e missioni dell’app",
      suggestions: ["Quali missioni possiamo fare?", "Cosa osserviamo sul sentiero?", "Come rispettiamo il bosco?"],
      context: {routeId: "forme-profumi"}
    });
  }

  if (respectIntent) {
    return structuredAnswer({
      title: "Osservare con rispetto",
      body: "Resta sui sentieri dove richiesto, mantieni la distanza dalla fauna e lascia piante, funghi e tracce nel luogo in cui li hai trovati.",
      caution: "Non avvicinarti a tane, nidi o animali con piccoli.",
      next: "Una buona osservazione lascia il territorio esattamente com’era.",
      actions: [{type: "route", id: "bosco-autunno", label: "Consulta le regole del bosco"}],
      source: "Regole dei percorsi locali",
      suggestions: ["Come mi comporto al lago?", "Posso raccogliere un fungo?", "Quali missioni rispettose posso fare?"],
      context: {}
    });
  }

  return structuredAnswer({
    title: "Partiamo da ciò che vuoi scoprire",
    body: "Puoi indicarmi una specie, un ambiente, una stagione oppure il tipo di esperienza che stai cercando.",
    caution: "La guida consulta esclusivamente le schede e i percorsi presenti nell’app.",
    next: "Prova una delle domande suggerite qui sotto.",
    actions: [
      {type: "atlas", filters: {}, label: "Esplora l’Atlante"},
      {type: "identify", filters: {}, label: "Avvia un confronto"}
    ],
    source: "Archivio naturalistico locale",
    suggestions: ["Cosa osservo nel bosco in autunno?", "Parlami del castagno", "Quale percorso scelgo?", "Come confronto due specie?"],
    context: {}
  });
}

function applyGuideFilters(filters = {}, target = "atlas") {
  const keys = target === "atlas" ? ["category", "habitat", "season", "risk"] : ["category", "habitat", "season", "trait"];
  keys.forEach(key => {
    const value = filters[key];
    if (!value) return;
    const select = $(`${target === "atlas" ? "atlas" : "identify"}-${key}`);
    if (select && [...select.options].some(option => option.value === value)) {
      select.value = value;
      state[target][key] = value;
    }
  });
}

function runGuideAction(action) {
  if (!action) return;
  if (action.type === "species") {
    openSpecies(action.id);
    return;
  }
  if (action.type === "route") {
    const card = document.querySelector(`[data-route-id="${action.id}"]`);
    (card || $("percorsi")).scrollIntoView({behavior: "smooth", block: "center"});
    if (card) {
      card.classList.add("guide-focus");
      setTimeout(() => card.classList.remove("guide-focus"), 1800);
    }
    return;
  }
  if (action.type === "atlas") {
    state.atlas = {category: "all", habitat: "all", season: "all", risk: "all", sort: "name", search: ""};
    ["category", "habitat", "season", "risk"].forEach(key => $(`atlas-${key}`).value = "all");
    $("atlas-sort").value = "name";
    $("search-input").value = "";
    applyGuideFilters(action.filters, "atlas");
    renderAtlas();
    $("atlante").scrollIntoView({behavior: "smooth", block: "start"});
    return;
  }
  if (action.type === "identify") {
    resetIdentification();
    applyGuideFilters(action.filters, "identify");
    $("identifica").scrollIntoView({behavior: "smooth", block: "start"});
    if (identificationCriteria().length >= 2) runIdentification();
  }
}

function renderChat() {
  const welcome = state.guide.length ? "" : `
    <div class="msg bot">
      <strong>Benvenuto nella Guida del territorio.</strong><br>
      Raccontami cosa vuoi osservare: posso consultare le ${species.length} schede approfondite dell’Atlante, spiegare ruoli ecologici, confrontare stagioni e habitat oppure consigliarti un percorso.
      <span class="chat-source">Archivio naturalistico locale</span>
    </div>
  `;

  const messages = state.guide.map((message, messageIndex) => {
    if (message.role === "user") return `<div class="msg user">${escapeHTML(message.text)}</div>`;
    const actions = message.actions?.length
      ? `<div class="chat-actions">${message.actions.map((action, actionIndex) =>
          `<button class="chat-action" type="button" data-guide-message="${messageIndex}" data-guide-action="${actionIndex}">${escapeHTML(action.label)}</button>`
        ).join("")}</div>`
      : "";
    return `
      <div class="msg bot">
        ${message.html}
        ${actions}
        ${message.source ? `<span class="chat-source">${escapeHTML(message.source)}</span>` : ""}
      </div>
    `;
  }).join("");

  const loading = state.guideLoading
    ? `<div class="msg bot typing" aria-label="La guida sta preparando la risposta"><span></span><span></span><span></span></div>`
    : "";

  $("chat-log").innerHTML = welcome + messages + loading;
  $("chat-log").scrollTop = $("chat-log").scrollHeight;
  $("chat-submit").disabled = state.guideLoading;

  const lastBot = [...state.guide].reverse().find(message => message.role === "bot");
  const prompts = lastBot?.suggestions?.length ? lastBot.suggestions : [
    "Cosa osservo nel bosco in autunno?",
    "Parlami del castagno",
    "Quale percorso scelgo?",
    "Come confronto due specie?"
  ];
  $("quick-prompts").innerHTML = prompts.map(text => `<button type="button">${escapeHTML(text)}</button>`).join("");

  document.querySelectorAll(".quick-prompts button").forEach(button => {
    button.addEventListener("click", () => askGuide(button.textContent));
  });
  document.querySelectorAll("[data-guide-message]").forEach(button => {
    button.addEventListener("click", () => {
      const message = state.guide[Number(button.dataset.guideMessage)];
      runGuideAction(message?.actions?.[Number(button.dataset.guideAction)]);
    });
  });
}

function askGuide(text) {
  const clean = text.trim();
  if (!clean || state.guideLoading) return;
  state.guide.push({role: "user", text: clean});
  state.guideLoading = true;
  renderChat();

  guideTimer = setTimeout(() => {
    const answer = guideAnswer(clean);
    state.guideContext = answer.context || {};
    state.guide.push({role: "bot", ...answer});
    state.guide = state.guide.slice(-20);
    state.guideLoading = false;
    if (!state.missions.includes(6)) state.missions = [...state.missions, 6].sort((a, b) => a - b);
    saveState();
    renderChat();
    renderPassport();
    renderDataSummary();
  }, 420);
}

function resetGuide() {
  clearTimeout(guideTimer);
  state.guide = [];
  state.guideContext = {};
  state.guideLoading = false;
  saveState();
  renderChat();
  renderDataSummary();
  toast("Nuova conversazione iniziata");
}

function renderDataSummary() {
  const activeRoutes = routes.filter(route => state.routeStatus[route.id] && state.routeStatus[route.id] !== "not-started").length;
  $("data-summary").innerHTML = `
    <div><strong>${state.favorites.length}</strong><span>preferiti</span></div>
    <div><strong>${state.observations.length}</strong><span>osservazioni</span></div>
    <div><strong>${state.missions.length}</strong><span>missioni</span></div>
    <div><strong>${activeRoutes}</strong><span>percorsi</span></div>
  `;
}

function openPrivacy() {
  renderDataSummary();
  $("clear-confirmation").hidden = true;
  $("request-clear-data").hidden = false;
  $("privacy-dialog").showModal();
}

function clearApplicationData() {
  clearTimeout(guideTimer);
  storage.removeAll();
  state.guide = [];
  state.guideContext = {};
  state.guideLoading = false;
  state.missions = [];
  state.favorites = [];
  state.history = [];
  state.observations = [];
  state.routeStatus = {};
  state.editingObservation = null;
  state.selectedSpecies = null;
  state.atlas = {category: "all", habitat: "all", season: "all", risk: "all", sort: "name", search: ""};

  $("search-input").value = "";
  $("atlas-category").value = "all";
  $("atlas-habitat").value = "all";
  $("atlas-season").value = "all";
  $("atlas-risk").value = "all";
  $("atlas-sort").value = "name";
  resetIdentification();
  resetObservationForm();
  saveState();
  renderAtlas();
  renderRoutes();
  renderPassport();
  renderChat();
  renderDataSummary();
  $("privacy-dialog").close();
  toast("Progressi e preferenze sono stati azzerati");
}

function closeMobileMenu() {
  $("menu-toggle").setAttribute("aria-expanded", "false");
  $("main-nav").classList.remove("open");
}

function initializeNavigation() {
  $("menu-toggle").addEventListener("click", () => {
    const isOpen = $("menu-toggle").getAttribute("aria-expanded") === "true";
    $("menu-toggle").setAttribute("aria-expanded", String(!isOpen));
    $("main-nav").classList.toggle("open", !isOpen);
  });

  $("main-nav").querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMobileMenu);
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && $("main-nav").classList.contains("open")) {
      closeMobileMenu();
      $("menu-toggle").focus();
    }
  });

  if ("IntersectionObserver" in window) {
    const links = [...$("main-nav").querySelectorAll("a")];
    const observer = new IntersectionObserver(entries => {
      const visible = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      links.forEach(link => {
        const active = link.getAttribute("href") === `#${visible.target.id}`;
        link.classList.toggle("active", active);
        if (active) link.setAttribute("aria-current", "page");
        else link.removeAttribute("aria-current");
      });
    }, {rootMargin: "-20% 0px -65% 0px", threshold: [0, .2, .5]});

    document.querySelectorAll("main > section[id]").forEach(section => observer.observe(section));
  }
}

function initializeSelects() {
  fillSelect("identify-category", taxonomies.category, state.identify.category, "Seleziona");
  fillSelect("identify-habitat", taxonomies.habitat, state.identify.habitat, "Seleziona");
  fillSelect("identify-season", taxonomies.season, state.identify.season, "Seleziona");
  fillSelect("identify-trait", taxonomies.trait, state.identify.trait, "Seleziona");

  fillSelect("atlas-category", taxonomies.category, state.atlas.category);
  fillSelect("atlas-habitat", taxonomies.habitat, state.atlas.habitat);
  fillSelect("atlas-season", taxonomies.season, state.atlas.season);
  fillSelect("atlas-risk", taxonomies.risk, state.atlas.risk);

  $("observation-species").innerHTML = species
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name, "it"))
    .map(item => `<option value="${item.id}">${item.name}</option>`)
    .join("");
}

function initializeEvents() {
  $("identification-form").addEventListener("submit", event => {
    event.preventDefault();
    runIdentification();
  });
  $("reset-identification").addEventListener("click", resetIdentification);

  ["category", "habitat", "season", "trait"].forEach(key => {
    $(`identify-${key}`).addEventListener("change", event => {
      state.identify[key] = event.target.value;
      $("identification-feedback").textContent = "";
    });
  });

  $("search-input").addEventListener("input", event => {
    state.atlas.search = event.target.value;
    renderAtlas();
  });

  ["category", "habitat", "season", "risk"].forEach(key => {
    $(`atlas-${key}`).addEventListener("change", event => {
      state.atlas[key] = event.target.value;
      renderAtlas();
    });
  });

  $("atlas-sort").addEventListener("change", event => {
    state.atlas.sort = event.target.value;
    renderAtlas();
  });

  $("reset-atlas").addEventListener("click", () => {
    state.atlas = {category: "all", habitat: "all", season: "all", risk: "all", sort: "name", search: ""};
    $("search-input").value = "";
    $("atlas-category").value = "all";
    $("atlas-habitat").value = "all";
    $("atlas-season").value = "all";
    $("atlas-risk").value = "all";
    $("atlas-sort").value = "name";
    state.selectedSpecies = null;
    renderAtlas();
  });

  $("observation-form").addEventListener("submit", event => {
    event.preventDefault();
    saveObservation();
  });

  $("chat-form").addEventListener("submit", event => {
    event.preventDefault();
    const input = $("chat-input");
    askGuide(input.value);
    input.value = "";
  });
  $("reset-guide").addEventListener("click", resetGuide);

  $("open-privacy").addEventListener("click", openPrivacy);
  $("footer-privacy").addEventListener("click", openPrivacy);
  $("close-privacy").addEventListener("click", () => $("privacy-dialog").close());
  $("request-clear-data").addEventListener("click", () => {
    $("request-clear-data").hidden = true;
    $("clear-confirmation").hidden = false;
    $("confirm-clear-data").focus();
  });
  $("cancel-clear-data").addEventListener("click", () => {
    $("clear-confirmation").hidden = true;
    $("request-clear-data").hidden = false;
    $("request-clear-data").focus();
  });
  $("confirm-clear-data").addEventListener("click", clearApplicationData);
}

function initializeApp() {
  initializeSelects();
  initializeNavigation();
  initializeEvents();
  renderAtlas();
  renderRoutes();
  renderPassport();
  renderChat();
  renderDataSummary();
}

initializeApp();
