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
  liveUrl?: string;
  featured?: boolean;
  hasDemo?: boolean;
  problem?: string;
  approach?: string;
  result?: string;
};

const projects: Project[] = [
  {
    slug: "rag-demo",
    title: "Local RAG Pipeline for Small Corpora",
    hook: "Quantized 2.5b Qwen to the rescue",
    category: "NLP",
    tags: ["RAG", "Python", "FastAPI", "Qwen2.5", "FAISS", "MiniLM"],
    year: "2025",
    featured: true,
    hasDemo: true,
    problem:
      "Most RAG tutorials use a hosted LLM — OpenAI, Anthropic, Groq — which means a network dependency, per-token cost, and your documents leaving your machine. I wanted a pipeline that runs entirely on local hardware with no API key required and no data sent anywhere.",
    approach:
      "The pipeline uses Qwen2.5-1.5B-Instruct (~1.5 GB) for generation and MiniLM-L6-v2 for both sentence embeddings and cross-encoder reranking. Total model footprint is around 3 GB. Models are downloaded from HuggingFace and served locally — no quantization, no llama.cpp, just the native weights. A FastAPI backend handles document chunking, embedding, FAISS retrieval, and reranking; a Vite frontend sends queries and streams responses. The cross-encoder reranking step runs after initial retrieval to re-score candidates before passing context to the generator.",
    result:
      "Handles documents up to ~35 pages without stability issues. On an i5 with no GPU, latency runs 2–3 minutes for longer queries — workable for experimentation. On a Ryzen 9 + RTX 3060, retrieval and generation are substantially faster thanks to GPU-accelerated embedding. The reranking step measurably improves answer relevance over naive top-k retrieval alone.",
  },
  {
    slug: "econometrics-viz",
    title: "Utah Healthcare Workforce Intelligence Dashboard",
    hook: "Forward-looking labor market intelligence for Utah healthcare orgs",
    category: "Econometrics",
    tags: ["Python", "FastAPI", "React", "FRED API", "SARIMAX"],
    year: "2025",
    featured: true,
    hasDemo: true,
    problem:
      "Utah healthcare organizations making hiring decisions are working from national labor statistics or raw FRED series that require significant preprocessing to be useful. There was no decision-ready, Utah-specific view that combined macro leading indicators with local employment data and a forward-looking forecast.",
    approach:
      "The backend is FastAPI pulling from the FRED API — national JOLTS series, wage and CPI data, and Utah-specific healthcare employment figures. A YAML-configured preprocessing pipeline handles frequency alignment and differencing. SARIMAX produces 6-month employment and quit-rate forecasts, and a Composite Stress Score (CSS) synthesizes the leading indicators into a single Tightening / Stable / Easing signal. SQLite stores series with revision tracking; a scheduler handles daily data refreshes and monthly model retraining. The React + Vite frontend has six sections: the CSS headline, JOLTS sparklines, wage pressure charts, an employment trend forecast, a 6-row forecast table, and a methodology transparency panel.",
    result:
      "The dashboard gives hiring decision-makers a single page that goes from raw macro data to an actionable signal with a 6-month forecast. The backend serves realistic dummy data by default, so the full frontend works immediately without a FRED key or trained model — useful for demos and local development.",
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
