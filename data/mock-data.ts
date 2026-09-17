import type { Development, Opportunity, Source } from "@/lib/types";

export const sources: Source[] = [
  { id: "s1", publisher: "KeukenConcurrent", channel: "Instagram", url: "https://www.instagram.com/keukenconcurrent/", publishedAt: "17 sep 2026" },
  { id: "s2", publisher: "Inretail", channel: "Nieuws", url: "https://www.inretail.nl/", publishedAt: "17 sep 2026" },
  { id: "s3", publisher: "Brugman", channel: "LinkedIn", url: "https://www.linkedin.com/company/brugman-keukens-badkamers/", publishedAt: "16 sep 2026" },
  { id: "s4", publisher: "Wooninfluencers", channel: "Website", url: "https://www.wooninfluencers.nl/", publishedAt: "16 sep 2026" },
  { id: "s5", publisher: "Mandemakers", channel: "Website", url: "https://www.mandemakers.nl/", publishedAt: "15 sep 2026" },
];

export const developments: Development[] = [
  { id: "d1", category: "Concurrentie", company: "KeukenConcurrent", title: "Nieuwe campagne zet snelle levertijd centraal", summary: "De campagne verschuift de aandacht van korting naar gemak en leverzekerheid. Opvallend is de heldere, servicegerichte boodschap.", time: "2 uur geleden", source: sources[0] },
  { id: "d2", category: "Marktnieuws", title: "Consument stelt grote wooninvestering langer uit", summary: "Nieuw brancheonderzoek signaleert een langere oriëntatiefase. Zekerheid, advies en transparante prijzen winnen daardoor aan belang.", time: "4 uur geleden", source: sources[1] },
  { id: "d3", category: "Concurrentie", company: "Brugman", title: "Badkamercontent draait om rust en welzijn", summary: "Brugman presenteert de badkamer nadrukkelijk als persoonlijke wellnessruimte, met zachte materialen en warme natuurtinten.", time: "Gisteren", source: sources[2] },
  { id: "d4", category: "Trend", title: "Donker hout maakt plaats voor lichte, tactiele materialen", summary: "In nieuwe interieurcontent zien we vaker licht eiken, kalksteenlooks en afgeronde details. De uitstraling wordt zachter en menselijker.", time: "Gisteren", source: sources[3] },
];

export const opportunities: Opportunity[] = [
  { id: "o1", priority: "Hoog", title: "Claim de rol van betrouwbare gids", rationale: "Langere oriëntatie vraagt om content die keuzes vereenvoudigt. Maak een praktische reeks over budget, planning en materiaalkeuze.", sourceIds: ["s1", "s2"] },
  { id: "o2", priority: "Midden", title: "Vertaal wellness naar compacte badkamers", rationale: "Concurrenten tonen vooral ruime droombadkamers. Een realistische vertaling voor de Nederlandse woning biedt onderscheid.", sourceIds: ["s3", "s4"] },
];

export const competitors = [
  { name: "KeukenConcurrent", initials: "KC", activity: 12, change: "+20%", theme: "Snelheid & gemak", color: "bg-rose-50 text-rose-700" },
  { name: "Brugman", initials: "B", activity: 9, change: "+13%", theme: "Wellness", color: "bg-stone-100 text-stone-700" },
  { name: "Mandemakers", initials: "M", activity: 7, change: "−4%", theme: "Persoonlijk advies", color: "bg-amber-50 text-amber-800" },
  { name: "Kvik", initials: "K", activity: 5, change: "+8%", theme: "Duurzaam design", color: "bg-slate-100 text-slate-700" },
];
