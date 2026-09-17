export type Source = {
  id: string;
  publisher: string;
  channel: "Website" | "LinkedIn" | "Nieuws" | "Instagram";
  url: string;
  publishedAt: string;
};

export type Development = {
  id: string;
  category: "Concurrentie" | "Marktnieuws" | "Trend";
  title: string;
  summary: string;
  company?: string;
  time: string;
  source: Source;
};

export type Opportunity = {
  id: string;
  priority: "Hoog" | "Midden";
  title: string;
  rationale: string;
  sourceIds: string[];
};
