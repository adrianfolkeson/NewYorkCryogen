export const site = {
  brand: "New York Cryogen",
  product: "AC-130 Viper",
  company: "Aurora Ecom AB",
  orgNr: "559542-4648",
  contact: {
    name: "Frida Melki",
    role: "Ambassadör för Europa",
    phone: "072-311 40 05",
    phoneHref: "tel:+46723114005",
    email: "info@auroraecom.se",
  },
  ambassadors: [
    { name: "Frida Melki", role: "Ambassadör för Europa" },
    { name: "Adrian Folkeson", role: "Ambassadör" },
  ],
};

export const features = [
  {
    title: "Justerbart tryck och flöde",
    text: "Tryckregleringsventil och fjäderbelastad avtryckare ger full kontroll över CO₂-strålen genom hela behandlingen.",
  },
  {
    title: "Rocket Nozzles",
    text: "Fyrmunstyckskonfiguration som formar en exakt, konformad kylstråle – riktad mot målområdet, inte omgivningen.",
  },
  {
    title: "Integrerad hudtemperatursensor",
    text: "Hudtemperaturen läses av löpande så att behandlaren kan hålla vävnaden i det terapeutiska fönstret.",
  },
  {
    title: "Avståndsindikator och sessionstimer",
    text: "Pekskärm med timer och avståndsindikator för jämn, repeterbar applicering från session till session.",
  },
];

export const stages = [
  { name: "Obehag", text: "Första reaktionen när kylan når huden." },
  { name: "Stickande känsla", text: "Kylan börjar tränga ner i vävnaden." },
  { name: "Brännande eller dov smärta", text: "Djupare penetration, behandlingen fortsätter kontrollerat." },
  { name: "Domningar", text: "Indikerar effektiv kylpenetration." },
];

export const indications = [
  { group: "Rygg och nacke", items: ["Ländryggssmärta", "Ischias", "Nacksmärta"] },
  {
    group: "Leder",
    items: ["Knä-, axel- och höftsmärta", "Artrit", "Frozen shoulder", "Karpaltunnelsyndrom"],
  },
  { group: "Mjukdelar och idrott", items: ["Idrottsskador", "Tendinit", "Bursit", "Plantar fasciit"] },
  { group: "Återhämtning", items: ["Postoperativ återhämtning", "Kronisk smärta"] },
];

export const protocols: { region: string; time: string; points: string[] }[] = [
  {
    region: "Ländrygg",
    time: "3–5 min · 3–4 sessioner",
    points: [
      "Fokus på ryggens laterala delar, särskilt kring tvärutskotten. Vertikala appliceringar ger djup penetration mot foramen neurale.",
      "Standardprotokoll: 3–4 sessioner, dagligen eller varannan dag. Vid ischias: 4–5 minuter och minst 4 sessioner.",
      "Vid misstänkt spinal stenos krävs MR. Strukturell nervkompression av osteofyter kräver kirurgi och behandlas inte med HPMC.",
      "Efter laminektomi: undvik aggressiv behandling längs mittlinjen. Titanimplantat är ingen kontraindikation.",
    ],
  },
  {
    region: "Bröstrygg",
    time: "≈ 3 min",
    points: [
      "Smärtan är ofta artritrelaterad och lokaliserad längs mittlinjen. Laterala behandlingar behövs sällan.",
      "Vertikal applicering längs ryggraden i cirka 3 minuter.",
    ],
  },
  {
    region: "Cervikal rygg",
    time: "2–3 min totalt",
    points: [
      "Cervikal stenos eller inklämda nerver kan ge armsmärta. Behandla smärtans källa, inte bara symtomområdet.",
      "Korta pass om 30 sekunder.",
    ],
  },
  {
    region: "SI-led",
    time: "15–30 s × 3–4 pass",
    points: [
      "CO₂ appliceras i intervaller om 15–30 sekunder under 3–4 pass.",
      "Vanligtvis 3–4 behandlingar, varannan dag.",
    ],
  },
  {
    region: "Knä",
    time: "30 s-pass · bakre < 60 s",
    points: [
      "Behandlas via främre och bakre åtkomst med lätt flexion (30°).",
      "Vid MCL/LCL-skador eller patellatendinit fokuseras behandlingen runt patella.",
      "30-sekunderspass upprepas tills optimal hudtemperatur nåtts.",
    ],
  },
  {
    region: "Axel",
    time: "2–3 min",
    points: ["Utförs likt knäbehandling och täcker hela rotatorkuffen."],
  },
  {
    region: "Extremiteter",
    time: "30 s-pass · minst 3–4 appliceringar",
    points: [
      "Fotleder, tår, händer, handleder och armbågar kyls snabbt och behandlas försiktigt under termografisk övervakning.",
      "Att 1,7 °C nås snabbt betyder inte att behandlingen är klar – upprepade appliceringar ger djupare penetration.",
    ],
  },
  {
    region: "Plantar fasciit",
    time: "4 intensiva sessioner",
    points: [
      "Varannan dag i fyra sessioner, eller två dagar i rad – vilodag – två dagar i rad.",
      "Ortos ska användas parallellt.",
    ],
  },
  {
    region: "Pre- och postoperativt",
    time: "4 sessioner",
    points: [
      "Preoperativt: minskar inflammation inför kirurgi, vilket kan förhindra att ingreppet skjuts upp.",
      "Postoperativt: start 4–7 dagar efter operation om ingen infektion föreligger. Kan kombineras med fysioterapi.",
    ],
  },
];

export const contraindications = [
  "Primär perifer neuropati",
  "Fibromyalgi",
  "Nervskador, t.ex. plexusskador eller plantart neurom",
  "Vaskulära eller cirkulatoriska komplikationer i extremiteter",
  "Aktiva infektioner",
  "Patienter som inte accepterar risken för pigmentförändringar",
  "Vaskulärt nekrossyndrom med nedsatt cirkulation i femurhuvudet",
  "Raynauds syndrom",
];

export const practice = [
  "Behandla inomhus – utomhus endast vid 18–22 °C och låg luftfuktighet",
  "Säkerställ att huden är hydrerad",
  "Uteslut primär nervsmärta",
  "Avlägsna alla smycken",
  "Ha en ren handduk redo för kondens",
];
