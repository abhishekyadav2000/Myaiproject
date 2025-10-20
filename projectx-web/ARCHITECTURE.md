# 🏗️ ProjectX Platform - Architecture Overview

**Phase 2 Status:** ✅ COMPLETE  
**Last Updated:** October 19, 2025

---

## 📊 System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    PROJECT X PLATFORM (MVP++)                   │
└─────────────────────────────────────────────────────────────────┘

┌──────────────────────── PRESENTATION LAYER ──────────────────────┐
│                                                                   │
│  Pages:                                                           │
│  ├─ / (Home) - Hero, featured kits/lessons, CTAs                │
│  ├─ /kits - Filtered catalog ✅                                  │
│  ├─ /kits/[slug] - Product detail page 🔴                       │
│  ├─ /lessons - Lesson index with filters 🔴                     │
│  ├─ /lessons/[slug] - Lesson detail with rubric 🔴              │
│  ├─ /educators - Educator portal with CBSE/NGSS 🔴              │
│  ├─ /experience, /experiment, /excel, /expand - Tier pages 🔴   │
│  ├─ /unt - UNT program & events 🔴                              │
│  └─ /partners - Partner program 🔴                              │
│                                                                   │
│  Components:                                                      │
│  ├─ Badge ✅ (4 variants)                                        │
│  ├─ KitCard ✅ (interactive)                                     │
│  ├─ LessonCard 🔴 (to build)                                     │
│  ├─ FilterChip 🔴 (to build)                                     │
│  ├─ Accordion 🔴 (for FAQ/rubric)                                │
│  ├─ ImageGallery 🔴 (for kits)                                   │
│  └─ [form components] 🔴 (for CTAs)                              │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘

┌──────────────────────── BUSINESS LOGIC LAYER ──────────────────┐
│                                                                  │
│  Utilities:                                                      │
│  ├─ formatPrice (INR locale) ✅                                 │
│  ├─ formatDuration (hours → readable) ✅                        │
│  ├─ formatDurationMinutes (mins → h:m) ✅                       │
│  ├─ slugify (text → URL-safe) ✅                                │
│  └─ cn (className merge with Tailwind) ✅                       │
│                                                                  │
│  Search:                                                         │
│  ├─ createKitSearchIndex() ✅                                   │
│  ├─ searchKits() ✅ (Fuse.js)                                   │
│  ├─ createLessonSearchIndex() ✅                                │
│  └─ searchLessons() ✅ (Fuse.js)                                │
│                                                                  │
│  Standards:                                                      │
│  ├─ CBSE_STANDARDS (20 mappings) ✅                             │
│  ├─ NGSS_STANDARDS (8 mappings) ✅                              │
│  ├─ getStandardLabel() ✅                                       │
│  ├─ getStandardProvider() ✅                                    │
│  └─ getStandardsByProvider() ✅                                 │
│                                                                  │
│  Constants:                                                      │
│  ├─ Tier definitions (eXperience → eXpand) ✅                   │
│  ├─ Brand colors & typography ✅                                │
│  └─ Site metadata ✅                                            │
│                                                                  │
│  Forms & Validation:                                             │
│  ├─ React Hook Form (react-hook-form) ✅ installed              │
│  ├─ Zod validation (zod) ✅ installed                           │
│  └─ API forms 🔴 (to build)                                     │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘

┌──────────────────────── DATA LAYER ──────────────────────────────┐
│                                                                   │
│  Schemas (Zod):                                                   │
│  ├─ Kit ✅ (18 fields)                                           │
│  │   - Enums: Level, AgeBand, StreamsPlus, Difficulty           │
│  │   - Arrays: components, skills, standards, inBox, faq, etc.   │
│  │   - Relations: reviews, featured flag                         │
│  │                                                               │
│  ├─ Lesson ✅ (15 fields)                                        │
│  │   - Arrays: steps, materials, downloads, standards           │
│  │   - Nested: LessonStep, Download, AssessmentRubric           │
│  │   - Relations: optional kitId reference                       │
│  │                                                               │
│  ├─ LessonStep (nested) ✅                                       │
│  │   - Fields: title, duration, instructions, tips              │
│  │                                                               │
│  ├─ AssessmentRubric (nested) ✅                                │
│  │   - Criteria with levels and scoring                         │
│  │                                                               │
│  └─ Standards (mapping) ✅                                       │
│      - CBSE: 20 standards (Classes 6-10, Science/Math)          │
│      - NGSS: 8 standards (K-12 comprehensive)                   │
│                                                                   │
│  Sample Data:                                                     │
│  ├─ 8 Production Kits ✅                                         │
│  │   ├─ kit-001: Sensory Discovery (0-5, ₹2,499)               │
│  │   ├─ kit-002: Maker Basics (5-10, ₹3,999)                   │
│  │   ├─ kit-003: Robotics 101 (10-15, ₹7,999)                  │
│  │   ├─ kit-004: AI Fundamentals (15-20, ₹9,999)               │
│  │   ├─ kit-005: Sustainable Design (20-25, ₹14,999)           │
│  │   ├─ kit-006: Junior Engineer (0-5/5-10, ₹2,999)            │
│  │   ├─ kit-007: Data Science (10-15/15-20, ₹5,999)            │
│  │   └─ kit-008: Full-Stack Dev (15-20/20-25, ₹11,999)         │
│  │                                                               │
│  └─ 12 Production Lessons ✅                                     │
│      ├─ 10 kit-linked lessons                                    │
│      └─ 2 paper-only lessons                                     │
│         (All with objectives, steps, rubrics, standards)         │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘

┌──────────────────────── EXTERNAL INTEGRATIONS ────────────────────┐
│                                                                    │
│  Analytics:                                                        │
│  ├─ PostHog ⏳ (configured in constants, not yet integrated)     │
│  └─ Events: px_kit_viewed, px_lesson_started, px_purchase, etc.  │
│                                                                    │
│  Payment:                                                          │
│  ├─ Stripe ⏳ (stub integration ready)                           │
│  └─ Checkout flow: pending build                                 │
│                                                                    │
│  Email:                                                            │
│  ├─ Resend (for RSVP, contact forms)                             │
│  └─ API integration 🔴 (pending)                                 │
│                                                                    │
│  SEO:                                                              │
│  ├─ OpenGraph metadata 🔴 (to implement)                         │
│  ├─ Sitemap 🔴 (to generate)                                     │
│  └─ Meta tags 🔴 (to add to all pages)                           │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘

┌──────────────────────── INFRASTRUCTURE ─────────────────────────┐
│                                                                  │
│  Framework:                                                      │
│  ├─ Next.js 14.2.33 ✅                                          │
│  ├─ React 18 ✅                                                 │
│  ├─ TypeScript 5.4 ✅                                           │
│  └─ App Router (SSR/SSG) ✅                                     │
│                                                                  │
│  Styling:                                                        │
│  ├─ Tailwind CSS 3.4.1 ✅                                       │
│  ├─ Design tokens (5 colors, shadows, radii) ✅                 │
│  └─ tailwindcss-animate plugin ✅                               │
│                                                                  │
│  Form & Validation:                                              │
│  ├─ React Hook Form 7.51 ✅                                     │
│  ├─ Zod 3.22.4 ✅                                               │
│  └─ @hookform/resolvers ✅                                      │
│                                                                  │
│  Component Library:                                              │
│  ├─ Radix UI foundations ✅                                     │
│  └─ Shadcn/ui patterns ✅                                       │
│                                                                  │
│  Search:                                                         │
│  └─ Fuse.js 7.0.0 ✅ (client-side fuzzy search)                │
│                                                                  │
│  Testing:                                                        │
│  └─ Vitest 1.1.0 ✅ (configured, not yet used)                 │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘

✅ = Complete | 🔴 = Not started | ⏳ = Partially complete
```

---

## 🔄 Data Flow Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    USER INTERACTION                          │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│           REACT CLIENT (Browser)                             │
│  ┌───────────────────────────────────────────────────────┐  │
│  │ Pages: /kits, /lessons (with filters, search)        │  │
│  │ Components: Badge, KitCard, Filters                  │  │
│  │ State: selectedAgeBands, selectedLevels, etc.        │  │
│  └───────────────────────────────────────────────────────┘  │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│           UTILITIES & BUSINESS LOGIC                         │
│  ┌─ formatPrice()                                           │
│  ├─ formatDuration()                                        │
│  ├─ searchKits() / searchLessons() (Fuse.js)               │
│  ├─ getStandardLabel()                                      │
│  └─ cn() (className merge)                                 │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│           DATA LAYER (Zod Schemas)                           │
│  ┌─ Kit (18 fields)                                         │
│  ├─ Lesson (15 fields)                                      │
│  ├─ Standards (CBSE + NGSS)                                │
│  └─ Constants (tiers, metadata)                             │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│           SOURCE DATA (JSON files)                           │
│  ├─ data/kits.ts (8 kits)                                   │
│  ├─ data/lessons.ts (12 lessons)                            │
│  ├─ lib/standards.ts (28 mappings)                          │
│  └─ lib/constants.ts (tiers, colors)                        │
└─────────────────────────────────────────────────────────────┘

Future (Phase 4):
  │
  ▼
┌─────────────────────────────────────────────────────────────┐
│           API ROUTES (Next.js)                              │
│  ├─ /api/rsvp - Event registration                         │
│  ├─ /api/contact - Contact form                            │
│  ├─ /api/checkout - Stripe integration                     │
│  └─ /api/subscribe - Newsletter                            │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│           EXTERNAL SERVICES                                 │
│  ├─ Stripe (payment)                                        │
│  ├─ Resend (email)                                          │
│  ├─ PostHog (analytics)                                     │
│  └─ Storage (images, PDFs)                                  │
└─────────────────────────────────────────────────────────────┘
```

---

## 📦 Dependency Graph

```
CORE FRAMEWORK
├─ next@14.2.33
├─ react@18
├─ typescript@5.4
└─ tailwindcss@3.4.1 + tailwindcss-animate

DATA & VALIDATION
├─ zod@3.22.4 ────────┐
└─ @hookform/resolvers ┘
    ↓
    Uses: react-hook-form@7.51

SEARCH & UTILITIES
├─ fuse.js@7.0.0 (fuzzy search)
├─ clsx (classname utility)
└─ tailwind-merge (merge Tailwind classes safely)

FORM HANDLING
├─ react-hook-form@7.51
└─ zod@3.22.4

UI COMPONENTS
├─ @radix-ui/dropdown-menu
├─ @radix-ui/tabs
└─ @radix-ui/dialog

TESTING
└─ vitest@1.1.0 + @vitest/ui

FUTURE (Not yet integrated)
├─ stripe
├─ @stripe/react-js
├─ resend
├─ posthog-js
└─ next-auth or clerk
```

---

## 🗂️ File Organization

```
projectx-web/
│
├─ app/                           # Next.js App Router
│  ├─ (marketing)/                # Marketing layout group
│  │  └─ page.tsx                 # Home page
│  ├─ kits/
│  │  ├─ page.tsx                 # ✅ Filtered catalog
│  │  └─ [slug]/
│  │     └─ page.tsx              # 🔴 Product detail
│  ├─ lessons/
│  │  ├─ page.tsx                 # 🔴 Lessons index
│  │  └─ [slug]/
│  │     └─ page.tsx              # 🔴 Lesson detail
│  ├─ api/                        # 🔴 API routes (future)
│  ├─ layout.tsx                  # Root layout
│  └─ globals.css                 # Global styles
│
├─ components/                    # React components
│  ├─ ui/
│  │  └─ Badge.tsx                # ✅ Badge component (4 variants)
│  ├─ KitCard.tsx                 # ✅ Kit card component
│  ├─ Navbar.tsx                  # Navigation
│  ├─ Footer.tsx                  # Footer
│  └─ [to add more components]
│
├─ lib/                           # Utilities & business logic
│  ├─ schemas/
│  │  ├─ kit.ts                   # ✅ Kit Zod schema (18 fields)
│  │  └─ lesson.ts                # ✅ Lesson Zod schema (15 fields)
│  ├─ standards.ts                # ✅ CBSE/NGSS mappings (28)
│  ├─ search.ts                   # ✅ Fuse.js search
│  ├─ utils.ts                    # ✅ Helper functions
│  └─ constants.ts                # ✅ App constants & tiers
│
├─ data/                          # Content/sample data
│  ├─ kits.ts                     # ✅ 8 sample kits
│  └─ lessons.ts                  # ✅ 12 sample lessons
│
├─ public/                        # Static assets
│
├─ configuration files
│  ├─ package.json                # ✅ Dependencies
│  ├─ tsconfig.json               # TypeScript config
│  ├─ tailwind.config.ts          # ✅ Tailwind with tokens
│  ├─ postcss.config.js           # PostCSS config
│  └─ next.config.mjs             # Next.js config
│
└─ documentation/
   ├─ DOCUMENTATION_INDEX.md      # ✅ This index
   ├─ GETTING_STARTED.md          # ✅ Quick start guide
   ├─ PHASE_2_SUMMARY.md          # ✅ What's done
   ├─ IMPLEMENTATION_GUIDE.md     # ✅ Roadmap
   ├─ PHASE_2_COMPLETE.md         # ✅ Task reference
   ├─ SETUP.md                    # Setup instructions
   ├─ PROJECT_COMPLETE.md         # Initial scaffold notes
   ├─ VISUAL_GUIDE.md             # Design system
   ├─ README.md                   # Project overview
   └─ QUICKSTART.md               # Command reference
```

---

## 🎨 Design System

```
COLORS (Tailwind tokens):
├─ px-orange (#FF6A00)           Primary action, CTAs
├─ px-ink (#0A0A0B)              Dark backgrounds, text
├─ px-stone (#111114)            Cards, borders
├─ px-paper (#F5F5F5)            Light backgrounds
└─ px-accent (#0EA5E9)           Secondary, emphasis

TYPOGRAPHY:
├─ Font: System fonts (ui-sans-serif, Roboto fallback)
├─ Headings: font-bold (700)
├─ Body: Regular weight
└─ Small: text-xs for metadata

SPACING:
├─ Gap: gap-6 standard
├─ Padding: p-6 for cards, p-4 for compact
└─ Margin: mt-4, mb-6 for sections

BORDER RADIUS:
├─ Cards: rounded-2xl (1.5rem)
├─ Buttons: rounded-lg (0.5rem)
└─ Inputs: rounded-lg (0.5rem)

SHADOWS:
├─ Card: shadow-card (elevation)
└─ Soft: shadow-soft (glow)

COMPONENTS:
├─ Badge: 4 variants, 24 lines
├─ KitCard: interactive, featured flag, 65 lines
└─ [to add]: Accordion, ImageGallery, FilterChip, etc.
```

---

## 🔗 Integration Points

```
CURRENTLY INTEGRATED ✅
├─ Next.js App Router
├─ TypeScript strict mode
├─ Tailwind CSS with custom tokens
├─ Zod for runtime validation
├─ React Hook Form (installed, not yet used)
├─ Fuse.js for search
└─ Sample data (kits & lessons)

READY TO INTEGRATE 🔴
├─ Stripe payment processing
├─ Resend for emails
├─ PostHog for analytics
├─ Clerk/NextAuth for auth
├─ Sanity CMS for content management
└─ Vercel Analytics

INFRASTRUCTURE
├─ Next.js deployment: Vercel ready
├─ Environment variables: .env.local support
├─ API middleware: available
└─ Middleware: edge-ready
```

---

## 📈 Performance Targets

```
LIGHTHOUSE GOALS (After optimization):
├─ Performance: ≥ 95
├─ Accessibility: ≥ 95
├─ SEO: ≥ 95
└─ Best Practices: ≥ 95

BUNDLE OPTIMIZATION:
├─ Server components by default
├─ Client components only where needed
├─ Code splitting at route level
├─ Image optimization (next/image)
├─ CSS-in-JS minimized (Tailwind only)
└─ No external JS libraries beyond essentials

DATA EFFICIENCY:
├─ Client-side filtering (no API overhead)
├─ Search indexes built once
├─ Caching headers optimized
└─ CDN ready for static content
```

---

## 🚀 Phase Breakdown

```
PHASE 1: Initial Scaffold ✅
├─ Basic Next.js project setup
├─ Component library initialized
├─ Pages structure created
└─ Documentation started

PHASE 2: Infrastructure & Data ✅
├─ Zod schemas created (2)
├─ Standards mapping (28 standards)
├─ Sample data seeded (20 items)
├─ Utilities built (6 functions)
├─ UI components (2 components)
├─ /kits page with filters
├─ Dependencies updated (15 packages)
└─ Comprehensive documentation (6 guides)

PHASE 3: Page Building 🔴 IN PROGRESS
├─ /kits/[slug] (product detail)
├─ /lessons (index with filters)
├─ /lessons/[slug] (lesson detail)
├─ / (home with carousels)
├─ /educators (educator portal)
├─ /experience, /experiment, /excel, /expand (tier pages)
├─ /unt (program page)
└─ /partners (program page)
Estimated: 8-10 hours

PHASE 4: Features & Polish 🔴 FUTURE
├─ API routes (5 endpoints)
├─ Analytics integration
├─ SEO setup
├─ Email integration
├─ Payment processing
├─ Testing & QA
├─ Performance optimization
└─ Deployment
Estimated: 10-12 hours
```

---

## 📊 Code Statistics

```
METRICS:
├─ New production code: ~2,000 lines
├─ New tests: ~0 (ready to add)
├─ Documentation: ~1,780 lines
├─ Sample data: ~750 lines
├─ Type definitions: ~176 lines (2 schema files)
├─ Utility functions: ~45 lines
├─ UI components: ~89 lines (2 components)
└─ Total project size: ~15KB zipped (before node_modules)

DELIVERABLES:
├─ Files created: 15+
├─ Pages built: 1 (with filters)
├─ Components created: 2
├─ Schemas defined: 2
├─ Standards mapped: 28
├─ Sample content items: 20
├─ Documentation files: 9
└─ Configuration updates: 2
```

---

## 🎯 Success Criteria

```
PHASE 2 ✅ COMPLETE
├─ [✅] Data schemas fully typed
├─ [✅] Sample content realistic
├─ [✅] /kits page with working filters
├─ [✅] All components type-safe
├─ [✅] Comprehensive documentation
├─ [✅] Dependencies installed & configured
└─ [✅] Zero TypeScript errors

PHASE 3 🔴 PENDING (Next)
├─ [ ] All pages built
├─ [ ] All routes working
├─ [ ] Navigation complete
├─ [ ] Forms functional
├─ [ ] Lighthouse ≥90 all pages
└─ [ ] User can browse content

PHASE 4 🔴 FUTURE
├─ [ ] API routes working
├─ [ ] Payments processing
├─ [ ] Emails sending
├─ [ ] Analytics tracking
├─ [ ] Lighthouse ≥95 all pages
└─ [ ] Ready for production deployment
```

---

## 💡 Key Insights

1. **Type-First Design**
   - All data validated with Zod
   - Full IDE support & autocomplete
   - Compile-time safety

2. **Scalable Data Structure**
   - Easy to add new kits/lessons
   - Ready for CMS migration
   - Standards mapping extensible

3. **Component Reusability**
   - Badge used across app
   - KitCard pattern for LessonCard
   - Filter pattern for multiple pages

4. **Performance Ready**
   - Client-side filtering (no backend needed yet)
   - Search optimized with Fuse.js
   - Next.js production-ready

5. **Developer Experience**
   - Clear patterns to follow
   - Comprehensive documentation
   - Well-organized file structure

---

**Created:** October 19, 2025  
**Status:** Complete - Ready to Build  
**Next Review:** After Phase 3 pages complete

---

This architecture supports:
- ✅ Type safety across the stack
- ✅ Scalable data management
- ✅ Responsive, accessible UI
- ✅ Production-grade code quality
- ✅ Easy onboarding for new developers

🚀 **Ready to build Phase 3!**
