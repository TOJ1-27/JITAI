# Shandong Jitai Hydraulic Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the first official website for Shandong Jitai Machinery Co., Ltd. with product categories, company credibility content, social-media lead capture, and inquiry workflow.

**Architecture:** Use a static website so it can be opened directly from disk and later deployed to any host. Keep content data in JavaScript arrays, styling in a dedicated CSS file, and behavior in a small JavaScript file. Add a PowerShell smoke test that verifies the approved navigation, product types, inquiry fields, social links, and success-state code remain present.

**Tech Stack:** HTML, CSS, vanilla JavaScript, PowerShell smoke tests.

---

## File Structure

- Create `index.html`: main production homepage and section anchors for 首页、产品中心、关于我们、联系询价.
- Create `assets/styles.css`: responsive industrial visual system, layout, product cards, about section, inquiry form, and mobile behavior.
- Create `assets/app.js`: product data rendering, inquiry form success state, URL source tracking for social traffic, and current-year footer.
- Create `tests/smoke.ps1`: no-dependency verification script for required copy, data, fields, and interactive hooks.
- Keep `hybrid-direction.html`: approved visual concept reference.
- Keep `docs/superpowers/specs/2026-06-08-shandong-jitai-hydraulic-website-design.md`: approved design specification.

## Task 1: Smoke Test Skeleton

**Files:**

- Create: `tests/smoke.ps1`
- Expected missing production files at first: `index.html`, `assets/styles.css`, `assets/app.js`

- [ ] **Step 1: Write the failing smoke test**

```powershell
$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$indexPath = Join-Path $root "index.html"
$stylesPath = Join-Path $root "assets/styles.css"
$appPath = Join-Path $root "assets/app.js"

function Assert-True($condition, $message) {
  if (-not $condition) {
    throw $message
  }
}

Assert-True (Test-Path $indexPath) "index.html should exist"
Assert-True (Test-Path $stylesPath) "assets/styles.css should exist"
Assert-True (Test-Path $appPath) "assets/app.js should exist"

$html = Get-Content -LiteralPath $indexPath -Raw -Encoding UTF8
$css = Get-Content -LiteralPath $stylesPath -Raw -Encoding UTF8
$js = Get-Content -LiteralPath $appPath -Raw -Encoding UTF8

foreach ($nav in @("首页", "产品中心", "关于我们", "联系询价")) {
  Assert-True ($html.Contains($nav)) "Navigation should contain $nav"
}

foreach ($product in @("液压油缸", "伸缩油缸", "液压系统", "电动缸", "液压动力单元", "液压配件")) {
  Assert-True ($js.Contains($product)) "Product data should contain $product"
}

foreach ($field in @("联系人", "公司名称", "电话 / WhatsApp", "邮箱", "液压产品类型", "国家 / 地区", "需求说明")) {
  Assert-True ($html.Contains($field)) "Inquiry form should contain $field"
}

foreach ($social in @("Facebook", "TikTok", "WhatsApp")) {
  Assert-True (($html.Contains($social) -or $js.Contains($social))) "Site should reserve $social link or field"
}

Assert-True ($html.Contains("Shandong Jitai Machinery Co., Ltd.")) "English company name should be present"
Assert-True ($html.Contains("Send Inquiry")) "English inquiry CTA should be present"
Assert-True ($js.Contains("URLSearchParams")) "App should be ready to read social source parameters"
Assert-True ($js.Contains("inquiry-success")) "App should expose inquiry success state"
Assert-True ($css.Contains("@media")) "CSS should include responsive styles"

Write-Host "Smoke checks passed."
```

- [ ] **Step 2: Run test to verify it fails**

Run: `powershell -ExecutionPolicy Bypass -File tests/smoke.ps1`

Expected: FAIL with `index.html should exist`.

## Task 2: Static Website Files

**Files:**

- Create: `index.html`
- Create: `assets/styles.css`
- Create: `assets/app.js`

- [ ] **Step 1: Create production files**

Implement the approved site with:

- Header navigation: 首页、产品中心、关于我们、联系询价.
- Hero headline: 液压油缸、液压系统与定制液压解决方案供应商.
- CTA labels: 提交询价 / Send Inquiry and 查看液压产品.
- Product data array with exactly these first-version product types: 液压油缸、伸缩油缸、液压系统、电动缸、液压动力单元、液压配件.
- About section combining production capacity, export business, quality and service.
- Inquiry form fields: 联系人、公司名称、电话 / WhatsApp、邮箱、液压产品类型、国家 / 地区、需求说明.
- Reserved social links: Facebook、TikTok、WhatsApp.
- Form submission prevents page reload and shows an `inquiry-success` success state.
- URL source handling reads `utm_source` or `source` and stores it in a hidden field.

- [ ] **Step 2: Run test to verify it passes**

Run: `powershell -ExecutionPolicy Bypass -File tests/smoke.ps1`

Expected: PASS with `Smoke checks passed.`

## Task 3: Manual Browser Verification

**Files:**

- Verify: `index.html`

- [ ] **Step 1: Open production page**

Open `file:///C:/Users/Administrator/Documents/New%20project/index.html`.

- [ ] **Step 2: Verify desktop layout**

Check:

- Header shows only four navigation items.
- Hero looks like a formal hydraulic machinery company website.
- Product center shows product types only, not application-scene cards.
- About section mentions production capacity, export business, quality, and service.
- Inquiry form is visible and complete.

- [ ] **Step 3: Verify form behavior**

Fill a few fields and submit.

Expected: A success message appears without leaving the page.

- [ ] **Step 4: Verify mobile responsiveness**

Resize browser narrow enough for mobile layout.

Expected: navigation wraps cleanly, product cards stack, inquiry fields remain readable, and buttons do not overlap.

## Task 4: Handoff Cleanup

**Files:**

- Keep: `index.html`, `assets/styles.css`, `assets/app.js`, `tests/smoke.ps1`
- Keep as references: `hybrid-direction.html`, `design-directions.html`, `docs/superpowers/specs/2026-06-08-shandong-jitai-hydraulic-website-design.md`

- [ ] **Step 1: Run final smoke test**

Run: `powershell -ExecutionPolicy Bypass -File tests/smoke.ps1`

Expected: PASS with `Smoke checks passed.`

- [ ] **Step 2: Report Git limitation if still present**

Run: `Get-Command git`

Expected if unavailable: Git is still not available in this PowerShell environment. Report that files are saved but not committed.

## Self-Review

- Spec coverage: The plan covers the approved navigation, product center product types only, about-us consolidation, inquiry fields, social-media lead capture, responsive layout, and no backend boundary.
- Placeholder scan: No TBD/TODO placeholders are present.
- Type consistency: File paths and field labels match across tasks.
