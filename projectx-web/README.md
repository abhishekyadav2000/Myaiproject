# ProjectX — Learn. Work. Earn.

A futuristic learning–work ecosystem website. Built with Next.js, TypeScript, Tailwind, and Framer Motion.

## Dev

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Brand

* Primary: Molten Orange `#FF6A00`
* Surface: Ink `#0A0A0B`
* Shadows: `shadow-soft`

## Pages

* `/` — landing (Hero, Why, Programs, Contact)
* `/kits` — age-banded kits

## Next

* Add auth, analytics, CMS, payments, and dashboards as needed.

## Deploying to iPage (Static Hosting)

This project is configured for static export (Next.js `output: 'export'`). Build generates `out/` with plain HTML/JS/CSS suitable for iPage.

### Manual deploy

1. Build locally

```bash
cd projectx-web
npm ci
npm run build
```

2. Upload the CONTENTS of `out/` to your domain root in iPage (e.g., `public_html/`). You should see `index.html` at the top level.

### Automatic deploy (GitHub Actions)

This repo includes `.github/workflows/deploy-ipage.yml` which:

- Runs `npm ci` in `projectx-web/`
- Builds the site (`npm run build`)
- Uploads `projectx-web/out/` to iPage via FTPS

Add these GitHub repo secrets:

- `IPAGE_FTP_SERVER` (e.g., ftp.yourdomain.com)
- `IPAGE_FTP_USERNAME`
- `IPAGE_FTP_PASSWORD`
- `IPAGE_FTP_SERVER_DIR` (e.g., `/public_html/` or a subfolder)

Push to `main` to trigger the workflow.

### Optional: Use pnpm

If you prefer pnpm:

```bash
corepack enable
pnpm install
pnpm dev
```

And update the GitHub Action to use pnpm (uncomment the pnpm steps in the workflow).
