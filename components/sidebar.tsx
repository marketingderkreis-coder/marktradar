"use client";

import { ChartBarIcon, HomeIcon, LightBulbIcon, NewspaperIcon, PresentationChartLineIcon, UsersIcon } from "./icons";

const items = [
  { label: "Overzicht", icon: HomeIcon },
  { label: "Ontwikkelingen", icon: NewspaperIcon },
  { label: "Concurrenten", icon: UsersIcon },
  { label: "Trends", icon: PresentationChartLineIcon },
  { label: "Marketingkansen", icon: LightBulbIcon },
  { label: "Bronnen", icon: ChartBarIcon },
];

export function Sidebar({ active, onChange }: { active: string; onChange: (value: string) => void }) {
  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-[250px] flex-col border-r border-gray-200 bg-white px-4 pb-5 pt-7 lg:flex">
      <div className="mb-10 flex items-center gap-3 px-3">
        <div className="grid h-10 w-10 place-items-center bg-brand-600 text-sm font-black tracking-tight text-white">DK</div>
        <div>
          <div className="text-[11px] font-bold uppercase tracking-[.22em] text-gray-400">DER KREIS</div>
          <div className="text-lg font-bold tracking-tight text-ink">MarktRadar</div>
        </div>
      </div>

      <nav aria-label="Hoofdnavigatie" className="space-y-1">
        {items.map(({ label, icon: Icon }) => {
          const selected = active === label;
          return (
            <button key={label} onClick={() => onChange(label)} className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition ${selected ? "bg-brand-50 text-brand-700" : "text-gray-600 hover:bg-gray-50 hover:text-gray-950"}`}>
              <Icon className={`h-5 w-5 ${selected ? "text-brand-600" : "text-gray-400"}`} />
              {label}
              {label === "Ontwikkelingen" && <span className="ml-auto rounded-full bg-gray-100 px-2 py-0.5 text-[10px] text-gray-500">24</span>}
            </button>
          );
        })}
      </nav>

      <div className="mt-auto rounded-xl border border-gray-200 bg-gray-50 p-4">
        <div className="mb-1 flex items-center gap-2 text-xs font-semibold text-gray-700"><span className="h-2 w-2 rounded-full bg-emerald-500" /> Radar actief</div>
        <p className="text-[11px] leading-4 text-gray-500">Laatste update vandaag om 08:30</p>
      </div>
      <div className="mt-4 flex items-center gap-3 border-t border-gray-100 px-2 pt-4">
        <div className="grid h-8 w-8 place-items-center rounded-full bg-gray-900 text-[10px] font-bold text-white">MV</div>
        <div className="min-w-0"><p className="truncate text-xs font-semibold">Marketingteam</p><p className="text-[10px] text-gray-400">DER KREIS Nederland</p></div>
      </div>
    </aside>
  );
}
