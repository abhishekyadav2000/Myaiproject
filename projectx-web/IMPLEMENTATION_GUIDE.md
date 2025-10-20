# ProjectX Co. - Full Implementation Roadmap

## 📋 Overview

This document outlines the complete implementation plan for transforming ProjectX into a comprehensive, production-grade platform with MVP++ features.

**Status:** Phase 1 Complete (Schemas, Data, Components), Phase 2 Starting (Pages & Routes)

## ✅ Completed

### 1. Data Schemas (Type-Safe)
- ✅ **Kit Schema** (`lib/schemas/kit.ts`) - Complete Zod validation
  - Levels, AgeBands, STREAMS+, standards mapping
  - Price, components, skills, FAQ, reviews
- ✅ **Lesson Schema** (`lib/schemas/lesson.ts`) - Complete lesson structure
  - Objectives, materials, steps, assessment rubrics
  - Standards mapping, downloads, teacher notes
- ✅ **Standards Module** (`lib/standards.ts`) - CBSE/NGSS mappings
  - Helper functions for standard labels and filtering
  - Provider-aware filtering logic

### 2. Sample Content (Production-Ready)
- ✅ **8 Sample Kits** (`data/kits.ts`)
  - Coverage: All age bands and levels
  - Realistic components, skills, standards
  - Pricing: ₹2,499 - ₹14,999
  
- ✅ **12 Sample Lessons** (`data/lessons.ts`)
  - Mix of kit-linked (10) and paper-only (2) lessons
  - Complete with objectives, materials, steps
  - Assessment rubrics and downloadable resources
  - Standards mapping (CBSE + NGSS)

### 3. Core Utilities & Constants
- ✅ **Search Module** (`lib/search.ts`) - Fuse.js integration
- ✅ **Constants** (`lib/constants.ts`) - Tiers, branding, etc.
- ✅ **Utils** (`lib/utils.ts`) - Price formatting, duration, slugify

### 4. UI Components (Shadcn-Ready)
- ✅ **Badge Component** (`components/ui/Badge.tsx`)
- ✅ **KitCard Component** (`components/KitCard.tsx`)

### 5. Dependencies Updated
- ✅ `package.json` - Added:
  - `@radix-ui/*` components
  - `react-hook-form` + `@hookform/resolvers`
  - `zod` for validation
  - `fuse.js` for search
  - `tailwindcss-animate`
  - `vitest` for testing

---

## 🔨 Phase 2: Pages & Routes (Next)

### A. Core Pages to Build

```
app/
├── (public)/
│   ├── page.tsx                 # Home (hero, value props, featured kits/lessons)
│   ├── kits/
│   │   ├── page.tsx            # Kits catalog with filters
│   │   └── [slug]/
│   │       └── page.tsx        # Kit PDP
│   ├── lessons/
│   │   ├── page.tsx            # Lessons index with filters
│   │   └── [slug]/
│   │       └── page.tsx        # Lesson detail
│   ├── educators/
│   │   └── page.tsx            # Educator program page
│   ├── experience/page.tsx      # Tier: eXperience
│   ├── experiment/page.tsx      # Tier: eXperiment
│   ├── excel/page.tsx           # Tier: eXcel
│   ├── expand/page.tsx          # Tier: eXpand
│   ├── unt/page.tsx             # UNT-specific page
│   ├── partners/page.tsx        # Partner program
│   ├── about/page.tsx
│   └── contact/page.tsx
│
├── (dashboard)/
│   └── dashboard/
│       ├── page.tsx            # Dashboard home
│       ├── classes/page.tsx    # Class management
│       └── progress/page.tsx   # Student progress tracking
│
└── api/
    ├── kits/[id]/route.ts      # Kit API endpoint
    ├── lessons/[id]/route.ts   # Lesson API endpoint
    ├── rsvp/route.ts           # UNT RSVP endpoint
    └── subscribe/route.ts      # Newsletter subscribe
```

### B. Key Components to Build

**Filters & Search:**
- `KitFilters` - Age, level, STREAMS+, price filtering
- `LessonFilters` - Age, kit, domain, standards, duration
- `SearchBar` - Client-side search with Fuse.js

**Product Pages:**
- `KitGallery` - Image carousel
- `KitSpecTable` - Components & specs
- `StandardsBadges` - CBSE/NGSS displays
- `LessonSteps` - Step-by-step rendering
- `AssessmentRubric` - Rubric display

**CTA Components:**
- `DemoForm` - Book demo (Zod validated)
- `NewsletterSignup` - Email capture
- `HowItWorks` - 3-step explanation
- `TrustBadges` - Partner logos strip

**Educator-Specific:**
- `EducatorPortalNav` - Role-based navigation
- `ClassCSVUpload` - Drag-drop CSV import
- `ProgressTracker` - Lesson completion tracking
- `DownloadPack` - PDF/CSV batch downloads

**UNT-Specific:**
- `EventsList` - Mock calendar events
- `RSVPForm` - Event registration (Resend email)
- `StudentClubSignup` - Ambassador program CTA

---

## 💳 Phase 3: Commerce & Auth (Follow-Up)

### Stripe Integration
```typescript
// lib/stripe.ts
export function formatLineItems(kits: Kit[]) {
  return kits.map(kit => ({
    price_data: {
      currency: 'inr',
      product_data: { name: kit.name },
      unit_amount: kit.price,
    },
    quantity: 1,
  }));
}
```

### Authentication (Clerk or NextAuth)
- Student login
- Educator dashboard access
- Admin panel

---

## 📊 Phase 4: Analytics & SEO

### PostHog Integration
```typescript
// Events (px_* naming):
- px_kit_viewed
- px_lesson_started
- px_demo_requested
- px_purchase_initiated
- px_purchase_completed
- px_lesson_completed
```

### SEO Component
```typescript
export interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
}
```

---

## 🧪 Testing Strategy

### Unit Tests (Vitest)
```
__tests__/
├── lib/standards.test.ts
├── lib/search.test.ts
├── lib/utils.test.ts
└── schemas/kit.test.ts
```

### Lighthouse Targets
- Performance: ≥95
- Accessibility: ≥95
- SEO: ≥95
- Best Practices: ≥95

---

## 📝 Implementation Priority

**Week 1-2:**
1. Update dependencies (`npm install`)
2. Build `/kits` page with filters
3. Build kit PDP (`/kits/[slug]`)

**Week 3:**
4. Build `/lessons` index and detail pages
5. Build `/educators` page

**Week 4:**
6. Build tier pages (experience, experiment, excel, expand)
7. Build `/unt` with RSVP

**Week 5-6:**
8. Stripe integration
9. Analytics setup
10. SEO components

---

## 🚀 Running the Project

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Open browser
open http://localhost:3000
```

---

## 📦 File Tree Summary

```
projectx-web/
├── app/
│   ├── (marketing)/
│   │   └── page.tsx              [HOME PAGE - create this next]
│   ├── kits/
│   │   ├── page.tsx              [KIT CATALOG WITH FILTERS]
│   │   └── [slug]/page.tsx       [KIT PDP]
│   ├── lessons/
│   │   ├── page.tsx              [LESSONS INDEX]
│   │   └── [slug]/page.tsx       [LESSON DETAIL]
│   ├── layout.tsx
│   └── globals.css
│
├── components/
│   ├── KitCard.tsx               ✅ DONE
│   ├── KitCard.tsx.tsx           [NEW: Filters, Gallery, Specs]
│   ├── LessonCard.tsx            [NEW]
│   ├── ui/
│   │   ├── Badge.tsx             ✅ DONE
│   │   ├── Button.tsx            [NEW]
│   │   ├── Card.tsx              [NEW]
│   │   └── Input.tsx             [NEW]
│   ├── Navbar.tsx                (already exists)
│   └── Footer.tsx                (already exists)
│
├── lib/
│   ├── schemas/
│   │   ├── kit.ts                ✅ DONE
│   │   └── lesson.ts             ✅ DONE
│   ├── standards.ts              ✅ DONE
│   ├── search.ts                 ✅ DONE
│   ├── constants.ts              ✅ DONE
│   └── utils.ts                  ✅ DONE
│
├── data/
│   ├── kits.ts                   ✅ DONE (8 kits)
│   └── lessons.ts                ✅ DONE (12 lessons)
│
├── public/
│   └── logo.svg
│
└── package.json                  ✅ DONE
```

---

## ✨ Next Immediate Actions

Since the infrastructure is complete, here are the next 3 priority tasks:

### 1. Create Home Page (`app/(marketing)/page.tsx`)
**Features:**
- Hero section with tagline
- Value propositions (Learn → Work → Earn)
- Featured kits carousel
- Featured lessons section
- Trust badges strip
- Demo CTA form
- Newsletter signup

### 2. Update Kits Page (`app/kits/page.tsx`)
**Features:**
- Sidebar filters (age, level, STREAMS+, price)
- Search bar
- Grid display with KitCard
- Result count
- Empty state

### 3. Create Kit PDP (`app/kits/[slug]/page.tsx`)
**Features:**
- Image gallery
- Specs table
- "In the box" section
- Skills/outcomes list
- Standards badges
- FAQ section
- Add to cart button
- Related kits sidebar

---

## 💡 Key Design Decisions

1. **Server Components** - Use React Server Components for pages with static data
2. **Client Filters** - Use "use client" for interactive filter pages
3. **Data Format** - JSON data files for now; migrate to CMS (Sanity/Contentlayer) later
4. **Styling** - Pure Tailwind + shadcn/ui components (no external themes)
5. **Type Safety** - Zod schemas at all boundaries; no `any` types

---

## 🔐 Code Conventions

```typescript
// ✅ DO
const kit: Kit = KitSchema.parse(data);
export async function getKits(): Promise<Kit[]> { }
function formatPrice(paise: number): string { }

// ❌ DON'T
const kit: any = data;
function getKits() { return []; }  // missing return type
const formatPrice = (p) => p / 100; // missing parameter type
```

---

## 📞 Support

For questions on implementation, refer to:
- Schemas: `lib/schemas/`
- Sample data: `data/`
- Component patterns: `components/ui/`
- Utility functions: `lib/utils.ts`

---

**Last Updated:** October 19, 2025
**Team:** GitHub Copilot + You
**Status:** MVP++ Ready to Build 🚀
