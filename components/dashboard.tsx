"use client";

import { useMemo, useState } from "react";
import { ArrowDownIcon, ArrowRightIcon, ArrowUpIcon, BellIcon, CalendarDaysIcon, ChevronDownIcon, MagnifyingGlassIcon } from "./icons";
import { competitors, developments, opportunities, sources } from "@/data/mock-data";
import type { Development } from "@/lib/types";
import { Sidebar } from "./sidebar";
import { SourceLink } from "./source-link";

const categoryStyle = {
  Concurrentie: "bg-blue-50 text-blue-700",
  Marktnieuws: "bg-violet-50 text-violet-700",
  Trend: "bg-emerald-50 text-emerald-700",
};

function DevelopmentCard({ item }: { item: Development }) {
  return (
    <article className="border-b border-gray-100 py-5 first:pt-1 last:border-0 last:pb-0">
      <div className="mb-2 flex items-center gap-2">
        <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${categoryStyle[item.category]}`}>{item.category}</span>
        <span className="text-[11px] text-gray-400">{item.time}</span>
      </div>
      <h3 className="mb-1.5 text-sm font-bold leading-5 text-gray-900">{item.title}</h3>
      <p className="mb-3 text-xs leading-5 text-gray-500">{item.summary}</p>
      <SourceLink source={item.source} />
    </article>
  );
}

export function Dashboard() {
  const [active, setActive] = useState("Overzicht");
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("Alles");
  const [mobileNav, setMobileNav] = useState(false);
  const filtered = useMemo(() => developments.filter((item) => (filter === "Alles" || item.category === filter) && `${item.title} ${item.summary} ${item.company ?? ""}`.toLowerCase().includes(query.toLowerCase())), [filter, query]);

  return (
    <div className="min-h-screen bg-[#f5f6f7]">
      <Sidebar active={active} onChange={setActive} />
      <div className="lg:pl-[250px]">
        <header className="sticky top-0 z-20 flex h-[72px] items-center border-b border-gray-200 bg-white/95 px-5 backdrop-blur md:px-8 lg:px-10">
          <button onClick={() => setMobileNav(!mobileNav)} className="mr-4 grid h-9 w-9 place-items-center bg-brand-600 text-xs font-black text-white lg:hidden">DK</button>
          <div className="relative hidden w-full max-w-[390px] sm:block">
            <MagnifyingGlassIcon className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input value={query} onChange={(e) => setQuery(e.target.value)} aria-label="Doorzoek ontwikkelingen" placeholder="Zoek in ontwikkelingen, merken en bronnen..." className="h-10 w-full rounded-lg border border-gray-200 bg-gray-50 pl-10 pr-4 text-xs outline-none transition focus:border-gray-400 focus:bg-white" />
          </div>
          <div className="ml-auto flex items-center gap-3">
            <div className="hidden items-center gap-2 text-xs text-gray-500 md:flex"><span className="h-2 w-2 rounded-full bg-emerald-500" />Data bijgewerkt</div>
            <button aria-label="Meldingen" className="relative grid h-9 w-9 place-items-center rounded-full border border-gray-200 bg-white text-gray-500 hover:bg-gray-50"><BellIcon className="h-4 w-4" /><span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-brand-500 ring-2 ring-white" /></button>
          </div>
          {mobileNav && <div className="absolute left-4 top-16 w-52 rounded-xl border border-gray-200 bg-white p-2 shadow-xl lg:hidden">{["Overzicht", "Ontwikkelingen", "Concurrenten", "Trends", "Marketingkansen", "Bronnen"].map((item) => <button key={item} onClick={() => { setActive(item); setMobileNav(false); }} className="block w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-gray-50">{item}</button>)}</div>}
        </header>

        <main className="mx-auto max-w-[1500px] px-5 py-7 md:px-8 lg:px-10 lg:py-9">
          <section className="animate-enter mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-[.18em] text-brand-600">Marktintelligentie</p>
              <h1 className="text-2xl font-bold tracking-tight text-gray-950 md:text-[28px]">Goedemorgen, Marketingteam</h1>
              <p className="mt-1.5 text-sm text-gray-500">Dit speelt er vandaag in de keuken- en sanitairmarkt.</p>
            </div>
            <button className="flex w-fit items-center gap-2 rounded-lg border border-gray-200 bg-white px-3.5 py-2.5 text-xs font-medium text-gray-600 shadow-sm hover:bg-gray-50"><CalendarDaysIcon className="h-4 w-4" />Afgelopen 7 dagen<ChevronDownIcon className="h-3 w-3" /></button>
          </section>

          <section className="mb-7 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
            {[
              ["24", "Nieuwe ontwikkelingen", "+12%", true], ["8", "Actieve concurrenten", "+2", true], ["5", "Opkomende trends", "+1", true], ["3", "Kansen met hoge prioriteit", "−1", false],
            ].map(([value, label, change, up], index) => <div key={label as string} style={{ animationDelay: `${index * 70}ms` }} className="animate-enter rounded-xl border border-gray-200 bg-white p-4 shadow-card md:p-5"><p className="text-2xl font-bold tracking-tight text-gray-950">{value}</p><p className="mt-1 text-[11px] text-gray-500 md:text-xs">{label}</p><div className={`mt-3 flex items-center gap-1 text-[10px] font-semibold ${up ? "text-emerald-600" : "text-gray-400"}`}>{up ? <ArrowUpIcon className="h-3 w-3" /> : <ArrowDownIcon className="h-3 w-3" />}{change}<span className="font-normal text-gray-400"> vs. vorige week</span></div></div>)}
          </section>

          <div className="grid gap-6 xl:grid-cols-[1.45fr_.9fr]">
            <div className="space-y-6">
              <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-card md:p-6">
                <div className="mb-5 flex flex-wrap items-center justify-between gap-3"><div><h2 className="text-base font-bold text-gray-950">Laatste ontwikkelingen</h2><p className="mt-1 text-xs text-gray-400">Nieuws en activiteit uit de markt</p></div><div className="flex gap-1 rounded-lg bg-gray-100 p-1">{["Alles", "Concurrentie", "Marktnieuws", "Trend"].map((item) => <button key={item} onClick={() => setFilter(item)} className={`rounded-md px-2.5 py-1.5 text-[10px] font-semibold transition ${filter === item ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-800"}`}>{item}</button>)}</div></div>
                {filtered.length ? filtered.map((item) => <DevelopmentCard key={item.id} item={item} />) : <p className="py-12 text-center text-sm text-gray-400">Geen ontwikkelingen gevonden.</p>}
                <button onClick={() => setFilter("Alles")} className="mt-5 flex items-center gap-2 text-xs font-semibold text-brand-600 hover:text-brand-700">Bekijk alle ontwikkelingen <ArrowRightIcon className="h-3.5 w-3.5" /></button>
              </section>

              <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-card md:p-6">
                <div className="mb-6 flex items-center justify-between"><div><h2 className="text-base font-bold">Activiteit per concurrent</h2><p className="mt-1 text-xs text-gray-400">Aantal gedetecteerde uitingen deze week</p></div><button className="text-xs font-semibold text-brand-600">Alle concurrenten</button></div>
                <div className="space-y-5">{competitors.map((item) => <div key={item.name} className="grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-2"><div className="flex min-w-0 items-center gap-3"><div className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg text-[10px] font-black ${item.color}`}>{item.initials}</div><div className="min-w-0"><p className="truncate text-xs font-semibold text-gray-800">{item.name}</p><p className="truncate text-[10px] text-gray-400">Focus: {item.theme}</p></div></div><div className="text-right"><span className="text-xs font-bold">{item.activity}</span><span className={`ml-2 text-[10px] ${item.change.startsWith("+") ? "text-emerald-600" : "text-gray-400"}`}>{item.change}</span></div><div className="col-span-2 ml-11 h-1.5 overflow-hidden rounded-full bg-gray-100"><div className="h-full rounded-full bg-brand-500" style={{ width: `${item.activity / 12 * 100}%` }} /></div></div>)}</div>
              </section>
            </div>

            <aside className="space-y-6">
              <section className="overflow-hidden rounded-xl bg-[#222528] p-5 text-white shadow-card md:p-6">
                <div className="mb-5 flex items-center justify-between"><div><p className="mb-1 text-[10px] font-bold uppercase tracking-[.16em] text-brand-500">Signaal van de week</p><h2 className="text-lg font-bold leading-6">Van korting naar zekerheid</h2></div><span className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-lg">↗</span></div>
                <p className="mb-5 text-xs leading-5 text-gray-300">Meerdere spelers leggen minder nadruk op prijs en meer op planning, begeleiding en zorgeloosheid. De onzekere consument lijkt behoefte te hebben aan houvast.</p>
                <div className="flex flex-wrap gap-2">{sources.slice(0, 3).map((source) => <span key={source.id} className="rounded bg-white/10 px-2 py-1 text-[10px] text-gray-300">{source.publisher}</span>)}</div>
                <p className="mt-3 text-[10px] text-gray-400">Gebaseerd op 3 bronnen · 12–17 sep</p>
              </section>

              <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-card md:p-6">
                <div className="mb-5"><h2 className="text-base font-bold">Marketingkansen</h2><p className="mt-1 text-xs text-gray-400">Van inzicht naar actie</p></div>
                <div className="space-y-5">{opportunities.map((item) => <article key={item.id} className="border-b border-gray-100 pb-5 last:border-0 last:pb-0"><div className="mb-2 flex items-center gap-2"><span className={`rounded-full px-2 py-1 text-[9px] font-bold ${item.priority === "Hoog" ? "bg-brand-50 text-brand-700" : "bg-amber-50 text-amber-700"}`}>{item.priority} prioriteit</span></div><h3 className="text-sm font-bold leading-5">{item.title}</h3><p className="mb-3 mt-1.5 text-[11px] leading-[18px] text-gray-500">{item.rationale}</p><div className="flex items-center gap-1.5"><span className="text-[10px] text-gray-400">Onderbouwd door</span>{item.sourceIds.map((id) => { const source = sources.find((value) => value.id === id)!; return <SourceLink key={id} source={source} compact />; })}</div></article>)}</div>
                <button className="mt-5 flex items-center gap-2 text-xs font-semibold text-brand-600">Bekijk alle kansen <ArrowRightIcon className="h-3.5 w-3.5" /></button>
              </section>

              <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-card md:p-6">
                <div className="mb-4 flex items-center justify-between"><h2 className="text-sm font-bold">Trending thema’s</h2><span className="text-[10px] text-gray-400">7 dagen</span></div>
                <div className="flex flex-wrap gap-2">{[["Zorgeloos kiezen", 18], ["Lichte materialen", 14], ["Wellness", 11], ["Duurzaamheid", 9], ["Slimme keuken", 7]].map(([tag, count], i) => <span key={tag} className={`rounded-lg border px-2.5 py-1.5 text-[10px] font-medium ${i === 0 ? "border-brand-100 bg-brand-50 text-brand-700" : "border-gray-200 bg-gray-50 text-gray-600"}`}>#{tag} <strong className="ml-1">{count}</strong></span>)}</div>
              </section>
            </aside>
          </div>
          <footer className="mt-8 flex flex-col justify-between gap-2 border-t border-gray-200 py-5 text-[10px] text-gray-400 sm:flex-row"><span>DER KREIS MarktRadar · MVP met voorbeelddata</span><span>Elk inzicht is gekoppeld aan controleerbare bronnen</span></footer>
        </main>
      </div>
    </div>
  );
}
