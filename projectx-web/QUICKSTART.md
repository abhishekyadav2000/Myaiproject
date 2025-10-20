# 🎯 ProjectX Website - Quick Reference

## 📂 Location
```
/Users/abhshek/Myaiproject/projectx-web/
```

## ⚡ Super Quick Start (Copy & Paste)

### First Time Setup:
```bash
# 1. Install Node.js (if not installed)
brew install node

# 2. Navigate to project
cd /Users/abhshek/Myaiproject/projectx-web

# 3. Install dependencies
npm install

# 4. Start dev server
npm run dev

# 5. Open browser → http://localhost:3000
```

### Or use the setup script:
```bash
cd /Users/abhshek/Myaiproject/projectx-web
./setup.sh
npm run dev
```

## 📄 Pages

| URL | File | Description |
|-----|------|-------------|
| `/` | `app/(marketing)/page.tsx` | Landing page (Hero, Why, Programs, Contact) |
| `/kits` | `app/kits/page.tsx` | All 6 kits (Starter to Premium+) |

## 🧩 Components

| Component | File | Used For |
|-----------|------|----------|
| Navbar | `components/Navbar.tsx` | Sticky header, mobile menu |
| Footer | `components/Footer.tsx` | Footer with copyright |
| Hero | `components/Hero.tsx` | Animated landing hero |
| Section | `components/Section.tsx` | Reusable content sections |
| KitCard | `components/KitCard.tsx` | Kit display cards |
| Logos | `components/Logos.tsx` | Partner logos |

## 🎨 Brand Usage

```tsx
// In any component:
className="bg-px-orange text-black"        // Orange button
className="bg-px-stone text-white"         // Dark card
className="text-px-orange"                 // Orange text
className="shadow-soft"                    // Soft glow
className="rounded-xl2"                    // Custom radius
className="container-px"                   // Container with padding
```

## 🔧 Common Commands

```bash
npm run dev          # Dev server (http://localhost:3000)
npm run build        # Production build
npm run start        # Production server
npm run lint         # Check code quality
```

## 📝 Quick Edits

### Change branding:
- Edit `tailwind.config.ts` → colors.px object
- Update `app/layout.tsx` → metadata

### Add new page:
```bash
# Create: app/about/page.tsx
export default function AboutPage() {
  return <div>About content</div>
}
# Auto-routes to: /about
```

### Add new component:
```bash
# Create: components/MyComponent.tsx
export default function MyComponent() {
  return <div>My content</div>
}
# Import: import MyComponent from "@/components/MyComponent"
```

## 🚨 First Run Checklist

✅ Node.js installed (`node --version`)
✅ In correct directory (`cd projectx-web`)
✅ Dependencies installed (`npm install`)
✅ Dev server running (`npm run dev`)
✅ Browser open (`http://localhost:3000`)

## 🎨 What You'll See

1. **Hero Section** - Animated with molten orange glow
2. **Why ProjectX** - 3 feature cards
3. **Programs** - 3 program cards
4. **Trusted By** - Partner logos
5. **Contact Form** - Name, email, message
6. **Kits Page** - 6 age-banded kits (click "Kits" in nav)

## 📱 Fully Responsive

- Mobile: Hamburger menu, stacked cards
- Tablet: 2-column grid
- Desktop: 3-column grid, full navbar

## 🔥 Features Included

✅ Dark theme with orange accents
✅ Smooth animations (Framer Motion)
✅ TypeScript (type safety)
✅ Tailwind CSS (fast styling)
✅ Mobile-first responsive
✅ SEO metadata
✅ ESLint configured
✅ Production-ready

## 🆘 Having Issues?

**Port 3000 in use:**
```bash
npm run dev -- -p 3001  # Use port 3001 instead
```

**Module errors:**
```bash
rm -rf node_modules .next
npm install
```

**Still stuck:**
Read `SETUP.md` for detailed troubleshooting

## 🚀 Deploy to Production

**Vercel (Recommended):**
```bash
npm install -g vercel
vercel
```

**Or:** Push to GitHub → Connect at vercel.com

---

**You're ready to build! 🎉**
