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

foreach ($required in @(
  'class="video-hero"',
  'data-hero-video',
  'class="product-strip"',
  'data-product-strip',
  'class="component-band"',
  'Key Components and Custom Design Options',
  'data-rfq-form',
  'Drawing / File Upload',
  'data-social-links',
  'data-lang-toggle'
)) {
  Assert-True ($html.Contains($required)) "Homepage should contain $required"
}

foreach ($removed in @(
  'class="cylinder-detail"',
  'class="category-section"',
  'class="type-section"',
  'class="manufacturing-section"',
  'Product Type Overview',
  'Manufacturing Capabilities',
  'Home / Products / Custom Hydraulic Cylinders',
  'Request a Quote'
)) {
  Assert-True (-not $html.Contains($removed)) "Removed section should not remain: $removed"
}

foreach ($removedJs in @(
  'cylinderCategories',
  'cylinderFeatures',
  'cylinderTypes',
  'manufacturingCapabilities',
  'renderManufacturingCapabilities',
  'renderCylinderTypes',
  'renderCylinderCategories'
)) {
  Assert-True (-not $js.Contains($removedJs)) "Removed data/function should not remain: $removedJs"
}

foreach ($removedCss in @(
  '.detail-hero',
  '.category-card',
  '.type-card',
  '.manufacturing-card',
  '.capability-grid',
  '.feature-section'
)) {
  Assert-True (-not $css.Contains($removedCss)) "Removed styles should not remain: $removedCss"
}

foreach ($product in @(
  'Hydraulic Cylinders',
  'Telescopic Cylinders',
  'Hydraulic Systems',
  'Electric Cylinders',
  'Hydraulic Power Units',
  'Hydraulic Components'
)) {
  Assert-True ($js.Contains($product)) "Product data should contain $product"
}

foreach ($asset in @(
  'assets/product-hydraulic-cylinder.svg',
  'assets/product-telescopic-cylinder.svg',
  'assets/product-hydraulic-system.svg',
  'assets/product-electric-cylinder.svg',
  'assets/product-power-unit.svg',
  'assets/product-components.svg'
)) {
  Assert-True ($js.Contains($asset)) "Product category should use distinct image $asset"
  Assert-True (Test-Path (Join-Path $root $asset)) "Product image should exist: $asset"
}

foreach ($component in @(
  'Base Mount',
  'Head / Gland',
  'Piston',
  'Piston Rod',
  'Rod-End Mount',
  'Cylinder Tube / Barrel',
  'End Cap',
  'Hydraulic Ports',
  'Sealing System',
  'Surface Treatment'
)) {
  Assert-True ($js.Contains($component)) "Component list should contain $component"
}

foreach ($social in @(
  'YouTube',
  'Facebook',
  'X',
  'LinkedIn',
  'TikTok',
  'Instagram'
)) {
  Assert-True ($js.Contains($social)) "Social config should contain $social"
}

Assert-True ($js.Contains('<button class="social-icon is-disabled"')) "Empty social URLs should render disabled buttons"
Assert-True (-not $js.Contains('href="#"')) "Social icons should not use fake hash links"
Assert-True ($js.Contains('localStorage.getItem("jitaiLanguage") || "en"')) "Default language should be English"
Assert-True ($js.Contains('localStorage.setItem("jitaiLanguage"')) "Language selection should persist"
Assert-True ($js.Contains('document.documentElement.lang')) "HTML lang should update"
Assert-True ($js.Contains('data-i18n-placeholder')) "Placeholders should be translated"
Assert-True ($js.Contains('data-i18n-aria-label')) "Aria labels should be translated"
Assert-True ($js.Contains('data-i18n-alt')) "Image alt text should be translated"
Assert-True ($js.Contains('error_required')) "RFQ validation text should be translated"
Assert-True ($js.Contains('error_endpoint')) "RFQ endpoint warning should be translated"
Assert-True ($js.Contains('Official account coming soon')) "Social disabled tooltip should be translated"

Assert-True ($css.Contains('grid-template-columns: repeat(6')) "Desktop product entries should fit in one row"
Assert-True ($css.Contains('grid-template-columns: repeat(4')) "Tablet product entries should use four columns"
Assert-True ($css.Contains('scroll-snap-type: x mandatory')) "Mobile product entries should use horizontal snap scrolling"
Assert-True ($css.Contains('.component-band')) "Components should use a dark divider section"
Assert-True ($css.Contains('.social-icon.is-disabled')) "Disabled social icons should be styled"
Assert-True ($css.Contains('overflow-x: hidden')) "Page should prevent horizontal overflow"
Assert-True ($css.Contains('prefers-reduced-motion')) "CSS should respect reduced motion"

Write-Host "Smoke checks passed."
