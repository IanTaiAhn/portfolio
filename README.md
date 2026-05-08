# Portfolio

Editorial-meets-technical portfolio site. Next.js 14 (App Router), Tailwind, Framer Motion, D3 + Recharts.

## Design tokens

- **Palette:** Deep navy (`#0B1626`) + electric amber (`#FFB627`) + cream (`#F5EFE0`)
- **Display font:** Bricolage Grotesque
- **Body font:** Newsreader
- **Mono font:** JetBrains Mono (technical accents — tags, numerals, overlines)

All defined in `tailwind.config.ts` and `app/globals.css`.

## Structure

```
app/
  layout.tsx              Root layout — fonts, metadata
  page.tsx                /  (Home)
  about/page.tsx          /about
  projects/page.tsx       /projects
  projects/[slug]/page.tsx Dynamic project detail
  contact/page.tsx        /contact
  globals.css             Global styles + CSS vars

components/
  layout/
    Nav.tsx               Top nav with editorial section numbers
    Footer.tsx            Colophon-style footer
  sections/
    Hero.tsx              Home hero
    FeaturedProjects.tsx  Home preview grid
    AboutPreview.tsx      Home about teaser
    ProjectGrid.tsx       Full /projects grid
  ui/
    ProjectCard.tsx       Card used on home + projects index
    CategoryFilter.tsx    Filter chips on /projects

lib/
  projects.ts             Project data (single source of truth)
  site-config.ts          Name, socials, tagline, etc.
  utils.ts                cn() class merger
```

## Where to plug real content in

| Want to update… | Edit |
|---|---|
| Name, tagline, socials, email | `lib/site-config.ts` |
| Project list | `lib/projects.ts` |
| Hero headline & overline | `components/sections/Hero.tsx` |
| About copy + skills cluster | `app/about/page.tsx` |
| Footer text | `components/layout/Footer.tsx` |
| Color palette / fonts | `tailwind.config.ts` + `app/layout.tsx` |

## Live demos

Per the plan:
- **Interactive RAG demo** — slot reserved on `/projects/rag-demo`. FastAPI backend on Render (not yet built).
- **Econometrics visualizations** — slot reserved on `/projects/econometrics-viz`. D3/Recharts.
- **"Ask My Portfolio" chatbot** — *deferred per plan.* No chatbot code in scaffold.

## Setup

```bash
npm install
npm run dev
```

## Build order remaining

1. ~~Scaffold Next.js + Tailwind, palette & fonts~~ ✓
2. Flesh out Hero + About + Projects grid content
3. Build individual project detail pages (Problem → Approach → Result)
4. Add Framer Motion animations
5. Build econometrics visualization component
6. Build RAG demo + FastAPI backend
7. ("Ask My Portfolio" chatbot — deferred)
8. Polish, custom domain, deploy to Vercel
