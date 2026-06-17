# Shandong Jitai Machinery Co., Ltd. Website

Static official website for Shandong Jitai Machinery Co., Ltd., focused on hydraulic product presentation, export inquiry conversion, social traffic landing, and RFQ collection.

## Current Structure

- Fixed header and navigation.
- Full-screen video Hero with poster fallback, play/pause, and mute controls.
- Compact product category strip.
- Dark Key Components visual divider.
- About Jitai section combining production capacity, export business, quality, and service.
- RFQ form with required fields, file validation, privacy consent, honeypot field, and endpoint guard.
- Dark footer utility bar with customer support and six reserved social icons.
- Copyright footer.
- Internal English / Chinese language switch with `localStorage` persistence.
- GitHub Pages deployment workflow.

## Files

- `index.html`: homepage structure and page anchors.
- `assets/styles.css`: visual styling and responsive layout.
- `assets/app.js`: site configuration, product data, social links, translation dictionary, video controls, RFQ validation, and rendering logic.
- `assets/jitai-hero-poster.svg`: temporary Hero poster.
- `assets/cylinder-components.svg`: temporary component diagram.
- `assets/product-hydraulic-cylinder.svg`: temporary hydraulic cylinder category image.
- `assets/product-telescopic-cylinder.svg`: temporary telescopic cylinder category image.
- `assets/product-hydraulic-system.svg`: temporary hydraulic system category image.
- `assets/product-electric-cylinder.svg`: temporary electric cylinder category image.
- `assets/product-power-unit.svg`: temporary hydraulic power unit category image.
- `assets/product-components.svg`: temporary hydraulic components category image.
- `mobile-preview.html`: phone-frame preview page.
- `tests/smoke.ps1`: static acceptance checks.
- `.env.example`: future backend endpoint and notification email example.
- `.github/workflows/pages.yml`: GitHub Pages deployment workflow.

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

## Product Image Replacement Paths

Replace these temporary files with real product images when available:

- `assets/product-hydraulic-cylinder.svg`
- `assets/product-telescopic-cylinder.svg`
- `assets/product-hydraulic-system.svg`
- `assets/product-electric-cylinder.svg`
- `assets/product-power-unit.svg`
- `assets/product-components.svg`

Keep image ratios consistent and avoid stretching.

## Environment Variables

Future backend or form-service integration can refer to `.env.example`:

```text
NEXT_PUBLIC_QUOTE_ENDPOINT=
QUOTE_NOTIFICATION_EMAIL=
```

The current static site does not automatically read server environment variables. A real RFQ backend or form service must be connected before collecting live inquiries.

## Local Preview

Open `index.html` directly in a browser to preview the site.

Open `mobile-preview.html` to inspect the phone-frame preview.

## Local Checks

```powershell
powershell -ExecutionPolicy Bypass -File tests/smoke.ps1
```

This project currently has no `package.json`, so there are no configured npm build, TypeScript, or ESLint scripts yet.

## Published URLs

Main site:

https://toj1-27.github.io/JITAI/

Mobile preview:

https://toj1-27.github.io/JITAI/mobile-preview.html

## Remaining Real Content TODO

- Real company Hero video MP4/WebM.
- Real Hero poster image.
- Real product category photos.
- Real component diagram or cylinder cutaway image.
- Factory, machining, assembly, inspection, packaging, and shipment photos.
- Official company email, phone, and WhatsApp.
- Official YouTube, Facebook, X, LinkedIn, TikTok, and Instagram URLs.
- RFQ backend endpoint or form service.
- Publicly verifiable certificates, equipment lists, testing data, production capacity, and case materials.
