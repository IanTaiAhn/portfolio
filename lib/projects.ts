// PROJECTS DATA
// Single source of truth. Swap placeholder entries with real projects.
// When a project has `hasDemo: true`, the detail page should render its demo component.

export type ProjectCategory = "ML" | "NLP" | "Econometrics" | "Data Science";

export type Project = {
  slug: string;
  title: string;
  hook: string; // one-line pitch
  category: ProjectCategory;
  tags: string[];
  year: string;
  github?: string;
  featured?: boolean;
  hasDemo?: boolean;
  // Narrative — fleshed out later
  problem?: string;
  approach?: string;
  result?: string;
};

// PLACEHOLDER PROJECTS — replace with real GitHub projects.
const projects: Project[] = [
  {
    slug: "rag-demo",
    title: "Local RAG Pipeline for Small Corpora",
    hook: "Quantized 2.5b Qwen to the rescue",
    category: "NLP",
    tags: ["RAG", "LLM", "Python"],
    year: "2025",
    featured: true,
    hasDemo: true,
  },
  {
    slug: "econometrics-viz",
    title: "Healthcare Jobs Data",
    hook: "Live and fresh from FRED",
    category: "Econometrics",
    tags: ["D3", "Causal Inference", "R"],
    year: "2025",
    featured: true,
    hasDemo: true,
  },
  {
    slug: "bert-classifier",
    title: "Project Three",
    hook: "Placeholder hook.",
    category: "NLP",
    tags: ["BERT", "Transformers", "PyTorch"],
    year: "2024",
    featured: true,
  },
  {
    slug: "data-science-study",
    title: "Project Four",
    hook: "Placeholder hook.",
    category: "Data Science",
    tags: ["Pandas", "Modeling"],
    year: "2024",
  },
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
