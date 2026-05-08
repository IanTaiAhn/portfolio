"use client";

// CATEGORY FILTER
// Filterable categories: ML, NLP, Econometrics, Data Science
// TODO: wire up filtering state, share state with ProjectGrid (consider lifting up
//       to a parent client component or using URL search params)
const categories = ["All", "ML", "NLP", "Econometrics", "Data Science"];

export default function CategoryFilter() {
  return (
    <div className="mt-12 flex flex-wrap gap-2">
      {categories.map((c) => (
        <button
          key={c}
          className="border border-cream/20 px-4 py-2 font-mono text-xs uppercase tracking-widest text-cream/70 transition-colors hover:border-amber hover:text-amber"
        >
          {c}
        </button>
      ))}
    </div>
  );
}
