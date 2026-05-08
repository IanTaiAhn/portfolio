# Portfolio — Todo List

A working checklist for building out the portfolio site. Roughly ordered by priority. Check things off as you go.
Also, It would be nice to have Claude Code hooked up to this so perhaps I init this repo with github actions too.

---

## Tier 1 — Identity (do first, propagates everywhere)

- [x] **`lib/site-config.ts`** — fill in name, tagline, email, GitHub URL, LinkedIn URL, location, resume URL, domain
- [x] **`app/layout.tsx`** — update `metadata` (title + description for browser tabs / SEO / social previews)

---

## Tier 2 — Headline content

- [x] **`components/sections/Hero.tsx`** — write the big headline + one-line tagline
- [x] **`components/sections/AboutPreview.tsx`** — one editorial sentence about your perspective
- [ ] **`app/about/page.tsx`** — full About: 3–4 sentence story, skills section, resume/LinkedIn buttons

---

## Tier 3 — Projects data (the big one)

- [ ] **`lib/projects.ts`** — replace placeholder projects with real ones. For each project:
  - [ ] `slug` (URL-safe, e.g. `"bert-sentiment"`)
  - [ ] `title`
  - [ ] `hook` (one-sentence pitch)
  - [ ] `category` (`"ML" | "NLP" | "Econometrics" | "Data Science"`)
  - [ ] `tags` (array)
  - [ ] `year`
  - [ ] `github` URL
  - [ ] `featured: true` for the 3–4 home-page highlights
  - [ ] `hasDemo: true` only for RAG + econometrics projects

---

## Tier 4 — Project detail pages

- [ ] **`app/projects/[slug]/page.tsx`** — wire up Problem → Approach → Result narrative rendering
- [ ] Add `problem`, `approach`, `result` fields to each project in `lib/projects.ts`
- [ ] Add a "back to projects" nav element on detail pages
- [ ] Add GitHub link button on detail pages

---

## Tier 5 — Last mile

- [ ] **`components/layout/Footer.tsx`** — wire to `site-config.ts`, add socials
- [ ] **`app/contact/page.tsx`** — email, LinkedIn, GitHub links

---

## Mobile pass (after content is in)

- [ ] Build mobile menu trigger in `components/layout/Nav.tsx` (hamburger + drawer)
- [ ] Audit Hero spacing on mobile — `pt-40 pb-24` may feel tall with real content
- [ ] Add tap/active states to ProjectCard (hover doesn't fire on touch)
- [ ] Verify touch target sizes (44px minimum) on category filter, footer links
- [ ] Test on real device, not just DevTools

---

## Animation pass

- [ ] Hero: staggered reveal on load (Framer Motion)
- [ ] Scroll-triggered reveals on FeaturedProjects, AboutPreview
- [ ] Page transitions between routes
- [ ] ProjectCard hover: image/visual swap or layout shift
- [ ] Scroll indicator in Hero (animated arrow or progress line)
- [ ] Nav: scroll state (transparent → solid background)

---

## Live demos

- [ ] **Econometrics visualization component** — D3 / Recharts, real model outputs, toggleable variables
- [ ] **RAG demo**
  - [ ] FastAPI backend on Render (free tier)
  - [ ] Query box UI in `app/projects/[slug]/page.tsx` for the RAG project
  - [ ] Wire frontend to backend API
- [ ] **"Ask My Portfolio" chatbot** — *deferred per plan; revisit if API abuse concerns can be mitigated (rate limiting, daily cap)*

---

## Polish & deploy

- [ ] Add a noise/grain texture overlay (replace placeholder dot pattern in `globals.css`)
- [ ] Custom favicon
- [ ] OG image for social previews
- [ ] Resume PDF in `/public/resume.pdf`
- [ ] Lighthouse audit (performance, a11y, SEO)
- [ ] Keyboard navigation pass — focus rings, skip links
- [ ] Buy custom domain (`yourname.dev` vs `yourname.com`)
- [ ] Deploy to Vercel
- [ ] Connect custom domain in Vercel settings
- [ ] Set up analytics (Vercel Analytics or Plausible)

---

## Open decisions (from original plan)

- [ ] Final color palette confirmed? (currently navy + amber + cream)
- [ ] Font pairing confirmed? (currently Bricolage Grotesque + Newsreader + JetBrains Mono)
- [ ] Which GitHub projects make the cut, and in what order
- [ ] Blog / writing section — yes or no?
- [ ] Final domain name

---

## Stretch goals

- [ ] Per-project visual identity (hero image / generative graphic per project)
- [ ] Reading-time / metadata strip on detail pages
- [ ] RSS feed if blog gets added
- [ ] Easter egg or hidden interaction (memorable detail for recruiters)
