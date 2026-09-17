import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

function Icon({ children, ...props }: Props) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{children}</svg>;
}

export const HomeIcon = (p: Props) => <Icon {...p}><path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10M9 20v-6h6v6"/></Icon>;
export const NewspaperIcon = (p: Props) => <Icon {...p}><path d="M4 5h13v14H4zM17 8h3v11h-3M7 9h7M7 13h7M7 16h4"/></Icon>;
export const UsersIcon = (p: Props) => <Icon {...p}><circle cx="9" cy="8" r="3"/><path d="M3 20c0-4 2-6 6-6s6 2 6 6M16 6c3 0 4 4 1 5M17 14c3 0 4 2 4 5"/></Icon>;
export const PresentationChartLineIcon = (p: Props) => <Icon {...p}><path d="M4 3h16v13H4zM2 3h20M8 21l4-5 4 5M7 12l3-3 3 2 4-5"/></Icon>;
export const LightBulbIcon = (p: Props) => <Icon {...p}><path d="M9 18h6M10 22h4M8 14a7 7 0 1 1 8 0c-1 1-1 2-1 3H9c0-1 0-2-1-3Z"/></Icon>;
export const ChartBarIcon = (p: Props) => <Icon {...p}><path d="M4 20V10h4v10M10 20V4h4v16M16 20v-7h4v7M2 20h20"/></Icon>;
export const MagnifyingGlassIcon = (p: Props) => <Icon {...p}><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></Icon>;
export const BellIcon = (p: Props) => <Icon {...p}><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/></Icon>;
export const CalendarDaysIcon = (p: Props) => <Icon {...p}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/></Icon>;
export const ChevronDownIcon = (p: Props) => <Icon {...p}><path d="m7 10 5 5 5-5"/></Icon>;
export const ArrowRightIcon = (p: Props) => <Icon {...p}><path d="M5 12h14m-5-5 5 5-5 5"/></Icon>;
export const ArrowUpIcon = (p: Props) => <Icon {...p}><path d="m7 10 5-5 5 5M12 5v14"/></Icon>;
export const ArrowDownIcon = (p: Props) => <Icon {...p}><path d="m7 14 5 5 5-5M12 19V5"/></Icon>;
export const ArrowTopRightOnSquareIcon = (p: Props) => <Icon {...p}><path d="M14 4h6v6M20 4l-9 9M18 13v6H5V6h6"/></Icon>;
