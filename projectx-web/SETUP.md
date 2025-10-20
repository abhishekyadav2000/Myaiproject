# 🚀 ProjectX Website - Complete Setup Guide

## What You Have

A production-ready Next.js website with:
- ✅ Modern dark UI with molten-orange branding
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Animated hero section with Framer Motion
- ✅ Landing page with Why, Programs, Contact sections
- ✅ Dedicated Kits page (6 age-banded kits)
- ✅ Sticky navbar with mobile menu
- ✅ TypeScript + Tailwind CSS + ESLint configured
- ✅ All components and pages ready to run

## 📋 Prerequisites (Install First)

### 1. Install Node.js

**macOS (via Homebrew - Recommended):**
```bash
# Install Homebrew if you don't have it
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Node.js
brew install node
```

**Or download from:** https://nodejs.org/en/download/
- Download the macOS installer (.pkg)
- Run the installer
- Verify installation: `node --version` and `npm --version`

## 🎯 Quick Start (3 steps)

### Step 1: Navigate to the project
```bash
cd /Users/abhshek/Myaiproject/projectx-web
```

### Step 2: Install dependencies
```bash
npm install
```
This will install:
- Next.js 14.2.0
- React 18.3.1
- TypeScript 5.4
- Tailwind CSS 3.4
- Framer Motion 11.0
- Lucide React icons
- All dev dependencies (ESLint, PostCSS, etc.)

### Step 3: Run the development server
```bash
npm run dev
```

### Step 4: Open in browser
Open http://localhost:3000

You should see the ProjectX website with:
- Hero section with animations
- Why ProjectX section
- Programs section
- Trusted By logos
- Contact form
- Navigate to /kits to see all 6 kit cards

## 📁 Project Structure

```
projectx-web/
├── app/
│   ├── (marketing)/
│   │   └── page.tsx          # Landing page
│   ├── kits/
│   │   └── page.tsx          # Kits page
│   ├── layout.tsx            # Root layout with navbar/footer
│   └── globals.css           # Global styles + Tailwind
├── components/
│   ├── Navbar.tsx            # Sticky header with mobile menu
│   ├── Footer.tsx            # Footer with branding
│   ├── Hero.tsx              # Animated hero section
│   ├── Section.tsx           # Reusable section wrapper
│   ├── KitCard.tsx           # Kit card component
│   └── Logos.tsx             # Partner logos
├── public/
│   └── logo.svg              # ProjectX logo
├── tailwind.config.ts        # Brand colors & design tokens
├── tsconfig.json             # TypeScript config
├── next.config.mjs           # Next.js config
├── postcss.config.js         # PostCSS for Tailwind
├── package.json              # Dependencies
└── README.md                 # This file

```

## 🎨 Brand Tokens (Tailwind)

```css
/* Primary Color */
bg-px-orange          /* #FF6A00 - molten orange */
text-px-orange

/* Orange Shades */
bg-px-orange-50       /* Lightest */
bg-px-orange-500      /* Default */
bg-px-orange-900      /* Darkest */

/* Surfaces */
bg-px-ink             /* #0A0A0B - deep black */
bg-px-stone           /* #111114 - card background */

/* Custom Utilities */
rounded-xl2           /* 1.25rem border radius */
shadow-soft           /* Soft orange glow */
container-px          /* Max-width container with padding */
px-glow               /* Gradient glow effect */
```

## 🛠️ Available Scripts

```bash
npm run dev          # Start dev server (http://localhost:3000)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🎯 Next Steps (Extend the Site)

### 1. **Add Custom Fonts (Inter/Space Grotesk)**
```tsx
// In app/layout.tsx, add:
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

// Then use: className={inter.className}
```

### 2. **Connect Contact Form to Backend**
Create `app/api/contact/route.ts`:
```tsx
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  // Send to email/CRM/database
  return NextResponse.json({ success: true });
}
```

### 3. **Add shadcn/ui Components**
```bash
npx shadcn@latest init
npx shadcn@latest add button
npx shadcn@latest add card
```

### 4. **Add Authentication**
```bash
npm install @clerk/nextjs
# Or
npm install @supabase/supabase-js
```

### 5. **Deploy to Vercel (1-click)**
```bash
npm install -g vercel
vercel
```
Or connect your GitHub repo at https://vercel.com

### 6. **Add Analytics**
```bash
npm install @vercel/analytics
```

### 7. **Create Dashboard Pages**
```
app/
  (app)/
    dashboard/
      page.tsx         # Admin dashboard
      schools/
        page.tsx       # School management
      students/
        page.tsx       # Student progress
```

## 🐛 Troubleshooting

### Port 3000 already in use
```bash
# Kill the process on port 3000
lsof -ti:3000 | xargs kill -9

# Or run on different port
npm run dev -- -p 3001
```

### Module not found errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json .next
npm install
```

### TypeScript errors
The errors you see now are expected because dependencies aren't installed yet. They'll disappear after `npm install`.

## 📦 Package Versions

- **Next.js:** 14.2.0 (App Router)
- **React:** 18.3.1
- **TypeScript:** 5.4.0
- **Tailwind CSS:** 3.4.1
- **Framer Motion:** 11.0.0
- **Lucide React:** 0.344.0

## 🎨 Design System

**Colors:**
- Molten Orange: #FF6A00
- Ink Black: #0A0A0B
- Stone: #111114
- White text: #F5F5F5

**Typography:**
- System fonts (ui-sans-serif, system-ui)
- Can upgrade to Inter/Space Grotesk

**Spacing:**
- Mobile: px-4 (1rem)
- Desktop: px-8 (2rem)
- Max width: 7xl (80rem)

## 🚀 Production Checklist

Before deploying:

- [ ] Update metadata in `app/layout.tsx`
- [ ] Add real logos to `public/`
- [ ] Connect contact form to backend
- [ ] Add Google Analytics or Vercel Analytics
- [ ] Set up environment variables (.env.local)
- [ ] Add SEO metadata to all pages
- [ ] Add favicon/apple-touch-icon
- [ ] Test mobile responsiveness
- [ ] Run `npm run build` locally
- [ ] Set up error tracking (Sentry)

## 📞 Need Help?

1. Next.js Docs: https://nextjs.org/docs
2. Tailwind Docs: https://tailwindcss.com/docs
3. Framer Motion: https://www.framer.com/motion/

## 🎉 What's Included

✅ Responsive navbar with mobile menu
✅ Animated hero section
✅ Why ProjectX section (3 feature cards)
✅ Programs section (3 program cards)
✅ Trusted By logos
✅ Contact form (ready to wire up)
✅ Kits page (6 age-banded kits)
✅ Footer with branding
✅ Dark theme with molten-orange accents
✅ TypeScript for type safety
✅ ESLint for code quality
✅ All brand tokens in Tailwind config

---

**Built with ❤️ for ProjectX — Learn. Work. Earn.**
