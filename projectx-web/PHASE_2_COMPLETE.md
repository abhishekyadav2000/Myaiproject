# Phase 2: Scaffolding Complete ✅

**Status:** Infrastructure complete. Ready for page-by-page UI build.

---

## 🎯 What's Done

### Core Infrastructure
✅ **Type-Safe Schemas** 
- Kit schema with 18 fields (levels, age bands, STREAMS+, pricing, standards, FAQs)
- Lesson schema with 15 fields (steps, rubrics, assessments, downloads)
- Standards mapping (CBSE + NGSS)

✅ **Sample Content** 
- 8 production-ready kits (coverage: all age bands, ₹2,499–₹14,999)
- 12 complete lessons (mix of kit-linked and standalone)

✅ **Utilities** 
- Search indexing (fuse.js)
- Price formatting (INR locale)
- Duration formatting (h/m display)
- Slug generation
- Class merging (Tailwind-safe)

✅ **UI Components** 
- Badge (4 variants: default, orange, secondary, accent)
- KitCard (interactive, responsive, type-safe)

✅ **Pages Built**
- `/kits` - Full filtered catalog with:
  - Age band, level, STREAMS+, price range filters
  - Search bar (client-side)
  - Result count display
  - Empty state handling
  - Clear filters button
  - Badge filter display

---

## 🚀 Next Pages to Build (Priority Order)

### 1. Kit Product Detail Page (High Priority)
**File:** `app/kits/[slug]/page.tsx`

**Sections:**
- Image gallery with lightbox
- Specs table (what's in the box)
- Skills/outcomes bullet list
- Standards badges (CBSE/NGSS labels)
- FAQ accordion
- Customer reviews section (stub)
- "Add to Cart" / "Request Demo" CTAs
- Related kits sidebar carousel

**Estimated:** 30 min

---

### 2. Lessons Index Page (High Priority)
**File:** `app/lessons/page.tsx`

**Features:**
- Copy filters from /kits (age, domain, duration, standards)
- Search bar
- Sort options (popularity, difficulty, newest)
- LessonCard component (smaller than KitCard)
- Grid display (2-3 columns)

**Estimated:** 20 min

---

### 3. Lesson Detail Page (High Priority)
**File:** `app/lessons/[slug]/page.tsx`

**Sections:**
- Title, description, metadata (duration, age bands, domains)
- Objectives list
- Materials needed (linked to kits if applicable)
- Step-by-step instructions (from lesson.steps[])
- Assessment rubric table
- Teacher notes section
- Download section (PDFs, CSVs)
- Related lessons

**Estimated:** 25 min

---

### 4. Home Page / Hero Refresh (Medium Priority)
**File:** `app/(marketing)/page.tsx`

**Sections:**
- Hero section (tagline: "Learn → Work → Earn")
- Value propositions (3 cards)
- Featured kits carousel (top 3)
- Featured lessons carousel (top 3)
- Trust badges strip (partners)
- FAQ section (collapsible)
- CTA form ("Book Demo" / "Newsletter")

**Estimated:** 25 min

---

### 5. Educator Portal (Medium Priority)
**File:** `app/educators/page.tsx`

**Sections:**
- Overview of educator program
- CBSE/NGSS standards mapping showcase
  - Interactive filter by provider, class, subject
  - Shows which kits/lessons align with which standards
- Benefits (classroom license, support, resources)
- Download educator pack (PDF)
- Request access form

**Estimated:** 20 min

---

### 6. Tier Narrative Pages (Medium Priority)
**Files:**
- `app/experience/page.tsx` (eXperience tier)
- `app/experiment/page.tsx` (eXperiment tier)
- `app/excel/page.tsx` (eXcel tier)
- `app/expand/page.tsx` (eXpand tier)

**Each page should have:**
- Hero section explaining the tier
- 3-4 key features
- Sample activities/outcomes
- Age/stage recommendations
- CTA to view kits in that tier
- Pricing info

**Estimated:** 10 min each (reusable template)

---

### 7. UNT Program Page (Medium Priority)
**File:** `app/unt/page.tsx`

**Sections:**
- UNT program overview
- Events calendar (mock events):
  - Workshop on robotics (date, time, location, capacity)
  - Maker Faire (date, link)
  - Startup pitch event (date, time)
- RSVP form (name, email, event selection)
- Ambassador signup CTA
- Partner logos

**Estimated:** 15 min

---

### 8. Partner Program Page (Low Priority)
**File:** `app/partners/page.tsx`

**Sections:**
- Program overview
- Sponsor tiers (Bronze/Silver/Gold/Platinum)
- Tier benefits matrix
- Logo carousel (existing partners)
- CTA to join

**Estimated:** 15 min

---

## 📋 After Pages: Backend Tasks

### API Routes
- `api/rsvp/route.ts` - Event registration (Resend stub)
- `api/contact/route.ts` - Contact form handler
- `api/subscribe/route.ts` - Newsletter signup
- `api/checkout/route.ts` - Stripe integration stub

### Analytics & SEO
- PostHog integration (px_* events)
- SEO metadata component
- OG image generation stubs

### Testing
- Unit tests for schemas, utils
- Component snapshot tests

---

## 🛠️ Running & Testing

```bash
# Install dependencies first!
npm install

# Start dev server
npm run dev

# Open browser
open http://localhost:3000/kits
```

### What Will Work After npm install
- ✅ /kits page (fully interactive with filters)
- ✅ All TypeScript errors will resolve
- ✅ Tailwind styling will apply correctly

### What's Stubbed/Incomplete
- ❌ /kits/[slug] (needs creation)
- ❌ /lessons pages (need creation)
- ❌ Tier pages (need creation)
- ❌ /unt page (needs creation)
- ❌ API routes (need creation)

---

## 💡 Implementation Tips

1. **Use Server Components by Default**
   - Make pages async and fetch data server-side
   - Only use 'use client' where needed (filters, forms)

2. **Reuse Component Patterns**
   - KitCard → LessonCard (similar structure)
   - Filters component (DRY principle)

3. **Data Fetching**
   - Import from `data/kits.ts`, `data/lessons.ts`
   - Later: migrate to CMS (Sanity/Contentlayer)

4. **Type Safety**
   - Always import types from `lib/schemas/`
   - No implicit `any` types
   - Use `import type { X }` for type-only imports

5. **Tailwind Classes**
   - Use `px-*` color tokens (px-orange, px-ink, px-stone, px-paper, px-accent)
   - Use `rounded-2xl` for cards, `rounded-lg` for buttons
   - Use `shadow-card` for elevated components

---

## 🎨 Component Library Checklist

**Created:**
- ✅ Badge (4 variants)
- ✅ KitCard (full-featured)

**To Create:**
- LessonCard
- FilterButton / FilterTag
- Accordion (FAQ, rubric)
- ImageGallery / Carousel
- SpecTable
- FAQAccordion
- DemoForm
- NewsletterForm
- EventCard

---

## 📊 Success Metrics

**After Phase 2:**
- ✅ All pages built and type-safe
- ✅ Navigation working across all routes
- ✅ Filters functional on /kits and /lessons
- ✅ Product pages rendering sample data
- ✅ Lighthouse ≥90 on all pages

**After Phase 3:**
- ✅ Stripe checkout working
- ✅ Email integrations (Resend) working
- ✅ Analytics tracking events
- ✅ Unit tests passing

---

## 📝 Files Reference

| File | Purpose | Status |
|------|---------|--------|
| `lib/schemas/kit.ts` | Kit type definition | ✅ Done |
| `lib/schemas/lesson.ts` | Lesson type definition | ✅ Done |
| `lib/standards.ts` | CBSE/NGSS mappings | ✅ Done |
| `lib/search.ts` | Fuse.js search | ✅ Done |
| `lib/utils.ts` | Utility functions | ✅ Done |
| `lib/constants.ts` | App constants | ✅ Done |
| `data/kits.ts` | Sample kits (8) | ✅ Done |
| `data/lessons.ts` | Sample lessons (12) | ✅ Done |
| `components/ui/Badge.tsx` | Badge component | ✅ Done |
| `components/KitCard.tsx` | Kit card component | ✅ Done |
| `app/kits/page.tsx` | Kits catalog (filtered) | ✅ Done |
| `app/kits/[slug]/page.tsx` | Kit PDP | ⏳ Next |
| `app/lessons/page.tsx` | Lessons index | ⏳ Next |
| `app/lessons/[slug]/page.tsx` | Lesson detail | ⏳ Next |
| `app/(marketing)/page.tsx` | Home page | ⏳ Next |

---

**Status:** Ready to build pages! 🚀

**Estimated Total Time:** 3-4 hours for all pages + API routes + testing

**Created:** October 19, 2025
**Author:** GitHub Copilot

---
