# Portfolio — Todo List

A working checklist for building out the portfolio site. Roughly ordered by priority.

> **Note:** Would be nice to wire Claude Code to this repo via GitHub Actions so CI/CD is handled automatically.

---

## Tier 1 — Identity

- [x] **`lib/site-config.ts`** — name, tagline, email, GitHub, LinkedIn, location, resume URL, domain
- [x] **`app/layout.tsx`** — `metadata` title + description

---

## Tier 2 — Headline content

- [x] **`components/sections/Hero.tsx`** — big headline + one-line tagline
- [x] **`components/sections/AboutPreview.tsx`** — editorial teaser sentence
- [x] **`app/about/page.tsx`** — full bio, skills grid, resume + LinkedIn buttons

---

## Tier 3 — Projects data

- [x] **`lib/projects.ts`** — 3 real projects added with full metadata:
  - [x] RAG-Demo (slug, title, hook, category, tags, year, github, featured, hasDemo)
  - [x] Econometrics-Viz (slug, title, hook, category, tags, year, github, featured, hasDemo)
  - [x] Wornwear-Bot (slug, title, hook, category, tags, year, github, featured)
- [x] `problem`, `approach`, `result` narrative fields on all projects

---

## Tier 4 — Project detail pages

- [x] **`app/projects/[slug]/page.tsx`** — Problem → Approach → Result narrative rendering
- [ ] "Back to projects" nav element on detail pages
- [ ] GitHub link button on detail pages

---

## Tier 5 — Last mile

- [ ] **`components/layout/Footer.tsx`** — wire socials from `site-config.ts`
- [x] **`app/contact/page.tsx`** — email, LinkedIn, GitHub links

---

## Navigation

- [ ] Mobile menu — hamburger trigger + drawer in `Nav.tsx`
- [ ] Active link highlighting (current route)
- [ ] Scroll state — nav background transition (transparent → solid)

---

## Hero & Home sections

- [ ] Scroll indicator (animated arrow or progress line)
- [ ] Ambient visual element (generative or editorial graphic)
- [ ] "Explore my work" CTA button wired to `/projects`
- [ ] Staggered reveal animations (Framer Motion)
- [ ] **`components/sections/FeaturedProjects.tsx`** — "View all →" link in section header
- [ ] Scroll-triggered reveals on FeaturedProjects and AboutPreview

---

## Project filtering

- [ ] Wire `CategoryFilter` state to `ProjectGrid` in `app/projects/page.tsx`
- [ ] Optional: sync active filter to URL search params (`?category=NLP`)

---

## Mobile pass

- [ ] Audit Hero spacing on mobile (`pt-40 pb-24` may feel tall)
- [ ] Tap/active states on ProjectCard (hover doesn't fire on touch)
- [ ] Verify touch target sizes (44px minimum) on filter chips, footer links
- [ ] Test on real device, not just DevTools

---

## Animation pass

- [ ] Hero: staggered reveal on load (Framer Motion)
- [ ] Scroll-triggered reveals on FeaturedProjects, AboutPreview
- [ ] Page transitions between routes
- [ ] ProjectCard hover: layout shift or visual swap
- [ ] Scroll indicator in Hero (animated arrow or progress line)
- [ ] Nav scroll state (transparent → solid background)

---

## Live demos

- [ ] **Econometrics visualization component** — D3 / Recharts, real model outputs, toggleable variables
- [ ] **RAG demo**
  - [ ] FastAPI backend on Render (free tier)
  - [ ] Query box UI in the RAG project detail page
  - [ ] Wire frontend to backend API
- [ ] **"Ask My Portfolio" chatbot** — *deferred; revisit once rate limiting / daily cap strategy is clear*

---

## Polish & deploy

- [ ] Noise/grain texture overlay (replace placeholder dot pattern in `globals.css`)
- [ ] Custom favicon
- [ ] OG image for social previews
- [ ] Verify `resume.pdf` in `/public/resume.pdf` is current
- [ ] Lighthouse audit (performance, a11y, SEO)
- [ ] Keyboard navigation pass — focus rings, skip links
- [ ] Buy custom domain
- [ ] Deploy to Vercel
- [ ] Connect custom domain in Vercel settings
- [ ] Set up analytics (Vercel Analytics or Plausible)

---

## Open decisions

- [ ] Color palette confirmed? (currently navy + amber + cream)
- [ ] Font pairing confirmed? (currently Bricolage Grotesque + Newsreader + JetBrains Mono)
- [ ] Blog / writing section — yes or no?
- [ ] Final domain name

---

## Stretch goals

- [ ] Per-project visual identity (hero image or generative graphic)
- [ ] Reading-time / metadata strip on detail pages
- [ ] RSS feed if blog gets added
- [ ] Easter egg or hidden interaction
