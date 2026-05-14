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
    tags: ["RAG", "LLM", "Python", "FastAPI", "FAISS"],
    year: "2025",
    featured: true,
    hasDemo: true,
    problem:
      "Most RAG demos lean on a hosted API — OpenAI, Anthropic, Groq — which means per-token cost, a network round trip, and data leaving your machine. I wanted a system that could answer questions over a small private document corpus entirely offline, on consumer hardware, with sub-second retrieval and coherent generation.",
    approach:
      "I quantized Qwen 2.5B to 4-bit GGUF and ran it via llama.cpp for fast CPU/GPU inference. Embeddings are generated with a small sentence-transformer model (all-MiniLM-L6-v2) and indexed in a local FAISS flat index — no managed vector DB needed at this scale. A FastAPI backend handles chunking, embedding, retrieval, and streams the final response back to the client. The retrieval prompt is assembled with top-k chunks and a tight system instruction to keep the model grounded on the retrieved context.",
    result:
      "End-to-end query latency under 800ms on an RTX 3060 for a 200-document corpus. The pipeline handles follow-up questions correctly because the full conversation history is threaded into the context window. Running fully offline with zero API cost — the only dependency is the local model weights.",
  },
  {
    slug: "econometrics-viz",
    title: "Healthcare Jobs Data",
    hook: "Live and fresh from FRED",
    category: "Econometrics",
    tags: ["D3.js", "FRED API", "R", "Causal Inference"],
    year: "2025",
    featured: true,
    hasDemo: true,
    problem:
      "Healthcare employment is one of the most policy-sensitive labor market series — it's been used to argue everything from ACA impact to post-COVID recovery pace. Most published charts show the raw series with no attempt to separate trend from shock. I wanted an interactive view that let users explore the data and see the causal story alongside it.",
    approach:
      "I pulled the FRED Healthcare and Social Assistance employment series (HLTHSOCASST) via the FRED API in R and ran a structural break analysis (Bai-Perron) to identify regime changes. A difference-in-differences estimator isolates the COVID shock and recovery. The front-end is a D3.js chart rendered server-side for fast initial paint, with client-side interactivity for brushing, zooming, and toggling the causal annotations on and off.",
    result:
      "The viz makes the 2020 shock and asymmetric recovery immediately legible — the sector returned to trend employment levels roughly 18 months after the trough, but with a notably different occupational mix. The causal annotations are toggleable so the chart works both as a clean data view and as an analytical story.",
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
