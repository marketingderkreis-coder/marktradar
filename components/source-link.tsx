import { ArrowTopRightOnSquareIcon } from "./icons";
import type { Source } from "@/lib/types";

export function SourceLink({ source, compact = false }: { source: Source; compact?: boolean }) {
  return (
    <a href={source.url} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 transition hover:text-brand-600" title={`Open bron: ${source.publisher}`}>
      <span className="grid h-5 w-5 place-items-center rounded bg-gray-100 text-[9px] font-bold uppercase text-gray-500">{source.publisher.slice(0, 1)}</span>
      {!compact && <span>Bron: {source.publisher}</span>}
      <ArrowTopRightOnSquareIcon className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100" />
    </a>
  );
}
