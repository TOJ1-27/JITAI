# Shandong Jitai Machinery Co., Ltd. Website

Static website for Shandong Jitai Machinery Co., Ltd., focused on hydraulic product presentation, export inquiry conversion, social traffic landing, and RFQ collection.

## Stack

- Native HTML, CSS, and JavaScript.
- Vite for local development and production builds.
- ESLint and Prettier for quality checks.
- GitHub Actions for CI and GitHub Pages deployment.

No React, Vue, Next.js, or other frontend framework is used.

## Project Structure

```text
.
├── .github/workflows/
│   ├── ci.yml
│   └── deploy-pages.yml
├── assets/
│   ├── app.js
│   ├── styles.css
│   └── *.svg
├── tests/
│   └── smoke.ps1
├── 404.html
├── AGENTS.md
├── index.html
├── mobile-preview.html
├── package.json
├── robots.txt
├── sitemap.xml
└── vite.config.mjs
```

## Local Development

Install dependencies:

```powershell
npm.cmd ci
```

Start a local dev server:

```powershell
npm.cmd run dev
```

Build for production:

```powershell
npm.cmd run build
```

Preview the production build:

```powershell
npm.cmd run preview
```

## Checks

```powershell
npm.cmd run lint
npm.cmd run format:check
npm.cmd run build
npm.cmd run check
```

`npm run check` runs ESLint, Prettier format checking, and the Vite production build.

## GitHub Pages Base Path

The Vite base path defaults to `/JITAI/` in `vite.config.mjs`, matching:

```text
https://toj1-27.github.io/JITAI/
```

For a future custom domain at the domain root, set `VITE_BASE_PATH=/` in the build environment or update `siteBase` in `vite.config.mjs`.

## GitHub Actions

- `.github/workflows/ci.yml` runs on pull requests and pushes to `main`.
- `.github/workflows/deploy-pages.yml` deploys only from `main` and supports manual `workflow_dispatch`.
- Both workflows use Node 22, `npm ci`, dependency caching, and `npm run check`.
- No production secrets are required or read by these workflows.

## Configuration Locations

Edit these items near the top of `assets/app.js`:

- `siteConfig.heroVideoMp4`
- `siteConfig.heroVideoWebm`
- `siteConfig.heroPoster`
- `siteConfig.quoteEndpoint`
- `siteConfig.quoteNotificationEmail`
- `socialLinks`
- `products`
- `componentOptions`
- `translations`

Do not add fake product parameters, fake certifications, fake social links, or unverified production data.

## Environment Variables

Future backend or form-service integration can refer to `.env.example`:

```env
RFQ_API_ENDPOINT=
RFQ_NOTIFICATION_EMAIL=
TURNSTILE_SITE_KEY=
ANALYTICS_ID=
```

The current static site does not automatically read server environment variables. A real RFQ backend or form service must be connected before collecting live inquiries.

## Remaining Production TODO

- Real company Hero video MP4/WebM.
- Real Hero poster image.
- Real product category photos.
- Real component diagram or cylinder cutaway image.
- Factory, machining, assembly, inspection, packaging, and shipment photos.
- Official company email, phone, and WhatsApp.
- Official YouTube, Facebook, X, LinkedIn, TikTok, and Instagram URLs.
- RFQ backend endpoint or form service.
- Publicly verifiable certificates, equipment lists, testing data, production capacity, and case materials.
