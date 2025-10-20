# 🚀 Pre-Launch Checklist - ProjectX Website

## ⚠️ FIRST: Install Node.js (Required)

**You need Node.js to run the website.** Choose one option below:

### Option 1: Install via Official Installer (Recommended - Easiest)
1. Go to: https://nodejs.org/en/download/
2. Download the **macOS Installer (.pkg)**
3. Run the installer and follow the prompts
4. Verify installation by opening a NEW terminal and running:
   ```bash
   node --version
   npm --version
   ```

### Option 2: Install via Homebrew
```bash
# Install Homebrew first (if you don't have it)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Then install Node.js
brew install node

# Verify
node --version
npm --version
```

### Option 3: Install via NVM (Node Version Manager)
```bash
# Install NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Close and reopen terminal, then:
nvm install --lts
nvm use --lts

# Verify
node --version
npm --version
```

---

## 🎯 AFTER Installing Node.js - Run These Commands

**Open a NEW terminal window** and run:

```bash
# 1. Navigate to project
cd /Users/abhshek/Myaiproject/projectx-web

# 2. Install dependencies (note: npm, not npn!)
npm install

# 3. Start development server
npm run dev
```

You should see output like:
```
  ▲ Next.js 14.2.0
  - Local:        http://localhost:3000
  - Ready in 2.1s
```

---

## 🌐 Testing & Demo Guide

### Step 1: Open in Your Browser

**Once the dev server is running**, open these URLs:

✅ **Landing Page:** http://localhost:3000
✅ **Kits Page:** http://localhost:3000/kits

### Step 2: Test Basic Navigation

- [ ] Click the **ProjectX logo** → Should go to home
- [ ] Click **"Kits"** in navbar → Should go to /kits
- [ ] Click **"Programs"** link → Should scroll to Programs section
- [ ] Click **"Why ProjectX"** → Should scroll to Why section
- [ ] Click **"Get a Demo"** button → Should scroll to Contact form
- [ ] Click **"Explore Kits"** (hero button) → Should go to /kits
- [ ] Click **"Get Sample"** (on kit card) → Should scroll to contact form

### Step 3: Test Mobile Responsive Design

**In Chrome/Edge:**
1. Press `F12` or `Cmd + Option + I` to open DevTools
2. Click the **device toolbar icon** (phone/tablet icon) or press `Cmd + Shift + M`
3. Select different devices from dropdown:
   - iPhone 12 Pro (Mobile)
   - iPad Air (Tablet)
   - Responsive (Desktop)

**Test on mobile:**
- [ ] Hamburger menu (☰) appears on small screens
- [ ] Click hamburger → Menu opens
- [ ] Click menu items → Navigate correctly
- [ ] Cards stack vertically (1 column)
- [ ] Text is readable without zooming
- [ ] Buttons are touch-friendly

**Test on tablet:**
- [ ] Cards show in 2 columns
- [ ] Layout looks balanced

**Test on desktop:**
- [ ] Full navbar visible (no hamburger)
- [ ] Cards show in 3 columns
- [ ] Hero section looks great
- [ ] Animations work smoothly

### Step 4: Test in Different Browsers

**Desktop Browsers:**
- [ ] **Chrome** - http://localhost:3000
- [ ] **Safari** - http://localhost:3000
- [ ] **Firefox** - http://localhost:3000
- [ ] **Edge** - http://localhost:3000 (if on Mac with Edge)

**Things to check in each browser:**
- Colors look correct (orange is #FF6A00)
- Animations work smoothly
- Navigation functions properly
- Forms look good
- No console errors (press F12 → Console tab)

### Step 5: Test on Real Mobile Devices

**To test on your phone/tablet:**

1. **Find your computer's local IP:**
   ```bash
   # In a new terminal (while dev server is running):
   ifconfig | grep "inet " | grep -v 127.0.0.1
   ```
   Look for something like: `inet 192.168.1.XXX`

2. **Access from phone on same WiFi:**
   - Open browser on phone
   - Go to: `http://192.168.1.XXX:3000` (use your IP)
   - Example: `http://192.168.1.100:3000`

3. **Test on mobile:**
   - [ ] Site loads quickly
   - [ ] Touch interactions work
   - [ ] Scrolling is smooth
   - [ ] Forms are usable
   - [ ] No layout breaking

---

## 📋 Stakeholder Demo Checklist

### Pre-Demo Setup (5 minutes before)
- [ ] Dev server is running (`npm run dev`)
- [ ] Browser is open to http://localhost:3000
- [ ] DevTools closed for clean view
- [ ] Browser is in full-screen mode (F11)
- [ ] Other tabs/windows closed
- [ ] Volume up if showing animations

### Demo Flow (5-7 minutes)

**1. Landing - Hero Section (30 seconds)**
- Point out: "This is our landing page with animated hero"
- Highlight: Molten orange brand color, clean dark theme
- Show: Two CTAs - "Explore Kits" and "Book a Demo"

**2. Scroll - Why ProjectX (45 seconds)**
- Scroll down smoothly
- Point to 3 value propositions:
  - STREAMS+ Kits
  - Learn → Work → Earn pathway
  - Ecosystem & Community
- Highlight: Clear messaging, visual hierarchy

**3. Continue - Programs Section (45 seconds)**
- Show 3 program offerings:
  - School Launch
  - Parent eXperience
  - Teacher Upskilling
- Note: Ready for different customer segments

**4. Show - Trust Indicators (15 seconds)**
- Point to partner logos
- Note: UNT, CBSE, etc. (can be updated with real logos)

**5. Demo - Contact Form (30 seconds)**
- Show contact form fields
- Mention: "Ready to integrate with CRM/email"
- Note: Simple, low-friction demo request

**6. Navigate - Kits Page (2 minutes)**
- Click "Kits" in navbar
- Show all 6 kits:
  - Starter (0-5)
  - Discovery (5-10)
  - Explorer (10-15)
  - Advanced (15-20)
  - Mastery (20-25)
  - Premium+ (25+)
- Highlight: Clear age bands, focus areas, consistent design

**7. Show - Mobile Responsiveness (1 minute)**
- Open DevTools (F12)
- Toggle device toolbar (mobile icon)
- Switch between devices:
  - Show hamburger menu on mobile
  - Show card stacking
  - Show touch-friendly buttons
- Close DevTools

**8. Wrap Up - Tech Stack (30 seconds)**
- Mention: "Built with Next.js, TypeScript, Tailwind"
- Note: "Production-ready, scalable, SEO-optimized"
- Highlight: "Can add dashboards, auth, payments easily"

### Key Talking Points

✅ **Fast to Market** - Production-ready now
✅ **Scalable** - Easy to add features (dashboards, auth, CMS)
✅ **Modern Stack** - Next.js, TypeScript, industry standard
✅ **Responsive** - Works on all devices
✅ **Brand Identity** - Unique molten-orange theme
✅ **Clear Messaging** - Learn → Work → Earn hierarchy
✅ **Multi-Segment** - Schools, parents, teachers, communities

### Questions You Might Get

**Q: Can we add user authentication?**
A: Yes, 2-hour integration with Clerk or Supabase

**Q: Can we track student progress?**
A: Yes, we'll add a dashboard - built on this foundation

**Q: How long to deploy to production?**
A: 5 minutes on Vercel, we can do it right now

**Q: Can we customize the branding?**
A: Yes, all colors/fonts are in one config file (tailwind.config.ts)

**Q: Is it SEO-friendly?**
A: Yes, Next.js provides server-side rendering + metadata is configured

**Q: Can we integrate payments?**
A: Yes, Stripe integration is straightforward with Next.js

---

## 🐛 Troubleshooting During Demo

### Issue: Port 3000 already in use
```bash
# Kill existing process
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```
Then use: http://localhost:3001

### Issue: Changes not appearing
```bash
# Hard refresh browser
Cmd + Shift + R (Mac)
Ctrl + Shift + R (Windows)
```

### Issue: Animations not working
- Check browser console (F12 → Console)
- Make sure JavaScript is enabled
- Try different browser

### Issue: Mobile view not responsive
- Make sure DevTools device toolbar is on
- Try refreshing page
- Check viewport is set correctly

---

## 📊 Testing Checklist Summary

**Browser Testing:**
- [ ] Chrome ✓
- [ ] Safari ✓
- [ ] Firefox ✓
- [ ] Edge ✓

**Device Testing:**
- [ ] Mobile (< 768px) ✓
- [ ] Tablet (768-1024px) ✓
- [ ] Desktop (> 1024px) ✓

**Feature Testing:**
- [ ] Navigation works ✓
- [ ] Links scroll to sections ✓
- [ ] Mobile menu toggles ✓
- [ ] Animations play ✓
- [ ] Forms display correctly ✓
- [ ] Pages load fast ✓

**Visual Testing:**
- [ ] Colors match brand (#FF6A00) ✓
- [ ] Typography is readable ✓
- [ ] Spacing looks good ✓
- [ ] No layout breaking ✓
- [ ] Images/logos display ✓

---

## 🎉 After Successful Demo

### Immediate Next Steps:
1. **Get Feedback** - Note what stakeholders want to see
2. **Deploy to Vercel** - Get a public URL (projectx-web.vercel.app)
3. **Add Analytics** - Track visitor behavior
4. **Update Content** - Replace placeholder text/logos

### Development Priorities:
1. Wire contact form to email/CRM
2. Add user authentication
3. Build admin dashboard
4. Create student/teacher portals
5. Integrate payment processing

---

**Good luck with your demo! 🚀**

Remember: Keep the dev server running (`npm run dev`) throughout your demo!
