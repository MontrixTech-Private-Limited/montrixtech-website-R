# MontrixTech — Premium Website Rebuild

A modern, editorial-grade marketing website for **MontrixTech Private Limited**,
rebuilt from the ground up with a warm minimal SaaS aesthetic.

Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**,
**Tailwind CSS 4**, **shadcn/ui**, **Framer Motion**, and **lucide-react**.

---

## What's inside

```
montrixtech-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx          Root layout (Inter + Space Grotesk fonts, metadata)
│   │   ├── page.tsx            Home page
│   │   ├── globals.css         Premium design system (cream/navy/teal)
│   │   ├── about/              About page
│   │   ├── services/           Services page + Workshops "Coming Soon" section
│   │   ├── contact/            Contact page (form + both office addresses)
│   │   ├── careers/            Careers listing page (12 open positions, FAQ, hiring process)
│   │   │   └── apply/          Application form (?ref= role lookup)
│   │   └── thank-you/          Thank-you confirmation
│   ├── components/
│   │   ├── montrix/            Custom premium components (Navbar, Footer, Hero, etc.)
│   │   └── ui/                 shadcn/ui component library
│   └── lib/
│       ├── montrix-data.ts     Central source of truth (company, offices, services, jobs)
│       └── utils.ts            cn() helper
├── public/
│   └── images/
│       ├── TECH-logo.png       MontrixTech navbar/logo wordmark (1190×196)
│       └── hero-illustration.png  BG-removed hero asset (676×369)
├── prisma/schema.prisma        Prisma schema (SQLite client)
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
└── components.json             shadcn/ui config
```

---

## Getting started

### 1. Install dependencies

```bash
# Using npm
npm install

# Or using bun (recommended — what was used to build this)
bun install
```

### 2. Run the dev server

```bash
npm run dev      # or: bun run dev
```

Then open <http://localhost:3000>.

### 3. Build for production

```bash
npm run build
npm run start
```

---

## Design system

The site uses a "warm minimal SaaS / editorial" palette, extended from the
existing brand identity:

| Token      | Hex       | Usage                                       |
|------------|-----------|---------------------------------------------|
| `cream-100`| `#FBFAF7` | Page background (warm off-white)            |
| `cream-200`| `#F4F2EC` | Secondary surface / dividers                |
| `cream-400`| `#E6E4DB` | Borders                                     |
| `navy`     | `#0A2E57` | Primary text, dark surfaces, primary buttons|
| `teal`     | `#12B8B0` | Accent, CTAs, highlights                    |
| `teal-50`  | `#E1F5EE` | Pill / badge backgrounds                    |
| `gold`     | `#C8A36A` | Rare emphasis accent                        |

Typography pairs **Space Grotesk** (display, headings) with **Inter** (body, UI)
— both free Google Fonts, loaded via `next/font/google`.

All design tokens live in `src/app/globals.css` under `@theme inline` and a
small set of utility classes (`.btn-primary`, `.btn-outline`, `.surface-card`,
`.lift`, `.spotlight`, `.mesh-bg`, `.pill`, `.container-premium`,
`.type-display`, `.type-h2`, `.type-eyebrow`).

---

## Key features

- **Premium visual tier** — mesh-gradient backgrounds, subtle grain, varied
  bento layouts, cursor-follow spotlight hovers, refined typography.
- **Both office addresses** — Registered Office (Yelahanka) and Working Office
  (New BEL Road) appear separately on Home, Contact, and Footer, with a
  Google Maps embed pointing to the **Working Office**.
- **Workshops section** — six "Coming Soon" cards on the Services page (no
  nav link, no separate route, as specified).
- **Full Careers section** — listing page (`/careers`) with hero, why-join
  grid, internship program, 12 open positions, 5-step hiring process, FAQ
  accordion, and closing CTA. Apply page (`/careers/apply?ref=MTX-…`)
  pre-fills the role and shows a success state on submission.
- **Careers link in footer** — added to the "Company" column (alongside
  About / Services / Contact), not the main nav bar.
- **Sticky footer** — uses `min-h-screen flex flex-col` + `mt-auto` so the
  footer always sticks to the bottom on short pages and pushes down on long.
- **Directional page transitions** — replaces the old plain opacity fade with
  a soft fade + slide, keyed by route.
- **Back-to-top + scroll-to-top** — floating teal-on-navy button + scroll
  reset on route change.

---

## Wiring up the contact & application forms

Both forms currently simulate a network call and then redirect to the
thank-you / success state. To make them live:

### Contact form (`src/app/contact/page.tsx`)

Set these env vars (already gracefully fallback to the original EmailJS
credentials that were in your previous codebase):

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxx
```

Then install EmailJS:

```bash
npm install @emailjs/browser
```

### Careers apply form (`src/app/careers/apply/page.tsx`)

The apply form sends a resume **link** (Google Drive / Dropbox), not a file
upload — this matches the "fast" option from your handoff checklist. Wire it
up the same way (EmailJS), or swap the simulated submit for an API route
that posts to your ATS / inbox.

---

## Content updates

All company data — contact info, office addresses, services, workshops, job
openings, nav links, footer links, socials — lives in a single source of
truth at:

```
src/lib/montrix-data.ts
```

Edit that file to update phone numbers, addresses, add/remove jobs, etc.,
and the changes will propagate everywhere automatically.

---

## Tech stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **TypeScript 5**
- **Tailwind CSS 4** (CSS-first config via `@theme inline`)
- **shadcn/ui** (New York style) — used for `Accordion` in the Careers FAQ
- **Framer Motion 12** — page transitions, scroll reveals, spotlight hovers
- **lucide-react** — icon system
- **Inter + Space Grotesk** — typography (free Google Fonts)

---

## License & ownership

Source code © MontrixTech Private Limited. All rights reserved.
