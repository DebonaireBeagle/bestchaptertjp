# Best Chapter — Next.js migration

Scaffolded migration from the original Vite/static-HTML site to Next.js (App Router) on Vercel,
per the phase 2 architecture plan (auth, dashboard, AI quiz routing, lead qualification).

## What's here

- **Home page** (`app/page.tsx`) — rebuilt around the three-cluster model instead of the original
  8 flat categories.
- **Cluster landing pages** — `/legacy-and-documents`, `/life-transitions`, `/discovery-and-purpose`.
- **27 service pages**, converted from the original static HTML files into a single data file
  (`lib/services.ts`) rendered through one dynamic `[slug]/page.tsx` template per cluster.
  Content, features, and copy were extracted directly from the original HTML — nothing was
  rewritten, only restructured.
- **Redirects** (`next.config.ts`) — every old `/services/[slug].html` URL 301s to its new
  `/[cluster]/[slug]` location, so nothing breaks if any old links are already out there.
- **Quiz page** (`app/quiz/page.tsx`) — ported from the old homepage modal into a full page.
  Currently maps answers to a cluster with simple client-side logic; the third question maps
  directly to a cluster id as a placeholder for real AI-driven routing.
- **Dashboard & Concierge pages** — placeholders. Both need auth before they can do anything real.
- **API route stubs** (`app/api/`) — three endpoints scaffolded with TODOs marking exactly what
  needs to be wired up:
  - `quiz-route` — AI-driven quiz answer → cluster recommendation (replaces the hardcoded mapping)
  - `leads/qualify` — AI clarifying questions before partner handoff (the highest-leverage AI
    feature per the strategy doc — raises lead quality/value for Life-Transition referrals)
  - `profile/update` — writes user signals for cross-cluster personalization

## Cluster mapping used

The original 27 services didn't map 1:1 onto the 3 clusters from the strategy doc (some, like
Household Management or Fitness/Nutrition/Sleep, were envisioned as dashboard widgets rather than
destination pages). For this scaffold I made a first-pass assignment of every service into one of
the three clusters so the site has somewhere for each page to live today — see the `cluster` field
in `lib/services.ts` or the `SLUG_TO_CLUSTER` map used during extraction. Worth reviewing this
mapping with your partner; a few of these (Tech Simplification, Brain Health, etc.) could
reasonably go elsewhere.

## Not yet wired up (needs your input before building further)

- **Auth** — recommended Supabase, not yet installed/configured
- **Database** — recommended Supabase Postgres, no schema yet
- **Payments** — recommended Stripe, not installed
- **AI calls** — recommended Anthropic API from the Route Handlers, not yet called (stubs return
  placeholder JSON)

## Running locally

```
npm install
npm run dev
```
