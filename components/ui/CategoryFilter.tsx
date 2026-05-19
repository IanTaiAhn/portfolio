"use client";

import type { ProjectCategory } from "@/lib/projects";

// CATEGORY FILTER
// Filterable categories — state is lifted to ProjectsClient.
const categories: Array<ProjectCategory | "All"> = [
  "All",
  "ML",
  "NLP",
  "Econometrics",
  "Data Science",
  "Automation",
];

type Props = {
  active: ProjectCategory | "All";
  onSelect: (c: ProjectCategory | "All") => void;
};

export default function CategoryFilter({ active, onSelect }: Props) {
  return (
    <div className="mt-12 flex flex-wrap gap-2">
      {categories.map((c) => (
        <button
          key={c}
          onClick={() => onSelect(c)}
          className={`border px-4 py-2 font-mono text-xs uppercase tracking-widest transition-colors ${
            active === c
              ? "border-amber text-amber"
              : "border-cream/20 text-cream/70 hover:border-amber hover:text-amber"
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
