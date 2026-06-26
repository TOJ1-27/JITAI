$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$indexPath = Join-Path $root "index.html"
$productPath = Join-Path $root "product.html"
$stylesPath = Join-Path $root "assets/styles.css"
$appPath = Join-Path $root "assets/app.js"
$catalogPath = Join-Path $root "assets/catalog.js"
$detailPath = Join-Path $root "assets/product-detail.js"

function Assert-True($condition, $message) {
  if (-not $condition) {
    throw $message
  }
}

foreach ($path in @($indexPath, $productPath, $stylesPath, $appPath, $catalogPath, $detailPath)) {
  Assert-True (Test-Path $path) "Required file should exist: $path"
}

$html = Get-Content -LiteralPath $indexPath -Raw -Encoding UTF8
$productHtml = Get-Content -LiteralPath $productPath -Raw -Encoding UTF8
$css = Get-Content -LiteralPath $stylesPath -Raw -Encoding UTF8
$js = Get-Content -LiteralPath $appPath -Raw -Encoding UTF8
$catalog = Get-Content -LiteralPath $catalogPath -Raw -Encoding UTF8
$detailJs = Get-Content -LiteralPath $detailPath -Raw -Encoding UTF8

foreach ($required in @(
  'class="video-hero"',
  'data-hero-video',
  'poster="assets/jitai-hero-poster.svg"',
  'data-category-tabs',
  'data-product-grid',
  'class="guidance-band"',
  'data-rfq-form',
  'data-social-links',
  'data-lang-toggle'
)) {
  Assert-True ($html.Contains($required)) "Homepage should contain $required"
}

foreach ($required in @(
  'data-product-detail',
  'data-product-main-image',
  'data-product-thumbnails',
  'data-prev-product',
  'data-next-product',
  'data-product-rfq',
  'data-back-products',
  'data-share-product'
)) {
  Assert-True ($productHtml.Contains($required)) "Product page should contain $required"
}

foreach ($removed in @(
  'Key Components and Custom Design Options',
  'class="component-band"',
  'data-component-list',
  'sales@example.com',
  '+8600000000000',
  'href="#"',
  'Reservation Now'
)) {
  Assert-True (-not $html.Contains($removed)) "Removed or fake homepage content should not remain: $removed"
  Assert-True (-not $productHtml.Contains($removed)) "Removed or fake product page content should not remain: $removed"
}

foreach ($category in @(
  'Dump Truck & Trailer Cylinders',
  'Agricultural Equipment Cylinders',
  'Construction Machinery Cylinders',
  'Other Equipment Cylinders'
)) {
  Assert-True ($catalog.Contains($category)) "Catalog should contain category: $category"
}

foreach ($product in @(
  'Dump Truck Hoist Cylinder',
  'Trailer Hydraulic Cylinder',
  'Telescopic Hoist Cylinder',
  'Side Tipper Cylinder',
  'Agricultural Machinery Cylinder',
  'Tractor Attachment Cylinder',
  'Harvester Hydraulic Cylinder',
  'Agricultural Tipping Cylinder',
  'Loader Hydraulic Cylinder',
  'Excavator Hydraulic Cylinder',
  'Bulldozer Hydraulic Cylinder',
  'Construction Attachment Cylinder',
  'Industrial Equipment Cylinder',
  'Custom OEM Hydraulic Cylinder',
  'Heavy-Duty Equipment Cylinder',
  'Non-Standard Hydraulic Cylinder'
)) {
  Assert-True ($catalog.Contains($product)) "Catalog should contain product: $product"
}

foreach ($asset in @(
  'assets/product-hydraulic-cylinder.svg',
  'assets/product-telescopic-cylinder.svg',
  'assets/product-hydraulic-system.svg',
  'assets/product-electric-cylinder.svg',
  'assets/product-power-unit.svg',
  'assets/product-components.svg',
  'assets/cylinder-components.svg',
  'assets/jitai-hero-poster.svg'
)) {
  Assert-True ($catalog.Contains($asset) -or $html.Contains($asset) -or $productHtml.Contains($asset)) "Files should reference $asset"
  Assert-True (Test-Path (Join-Path $root $asset)) "Referenced asset should exist: $asset"
}

foreach ($social in @('YouTube', 'Facebook', 'X', 'LinkedIn', 'TikTok', 'Instagram')) {
  Assert-True ($catalog.Contains($social)) "Social config should contain $social"
}

Assert-True ($js.Contains('return storedLanguage === "en" || storedLanguage === "zh" ? storedLanguage : "zh"')) "Default language should be Chinese unless a stored choice exists"
Assert-True ($js.Contains('localStorage.setItem(languageStorageKey')) "Language selection should persist"
Assert-True ($js.Contains('document.documentElement.lang')) "HTML lang should update"
Assert-True ($js.Contains('data-i18n-placeholder')) "Placeholders should be translated"
Assert-True ($js.Contains('data-i18n-aria-label')) "Aria labels should be translated"
Assert-True ($js.Contains('data-i18n-alt')) "Image alt text should be translated"
Assert-True ($js.Contains('renderCategoryTabs')) "Homepage should render category tabs"
Assert-True ($js.Contains('renderProductCards')) "Homepage should render product cards"
Assert-True ($js.Contains('product.html?product=')) "Product cards should link to product detail pages"
Assert-True ($js.Contains('error_required')) "RFQ validation text should be translated"
Assert-True ($js.Contains('error_endpoint')) "RFQ endpoint warning should be translated"
Assert-True ($catalog.Contains('Official account coming soon')) "Social disabled tooltip should be translated"

Assert-True ($detailJs.Contains('URLSearchParams')) "Product detail should read URL parameters"
Assert-True ($detailJs.Contains('index.html?product=')) "Product detail RFQ CTA should carry product slug"
Assert-True ($detailJs.Contains('navigator.share')) "Product detail should support sharing"

Assert-True ($css.Contains('grid-template-columns: repeat(4')) "Desktop product cards should use four columns"
Assert-True ($css.Contains('grid-template-columns: repeat(2')) "Tablet product cards should use two columns"
Assert-True ($css.Contains('.product-grid')) "Product grid should be styled"
Assert-True ($css.Contains('.guidance-band')) "Selection support should use a dark divider section"
Assert-True ($css.Contains('.product-detail-layout')) "Product detail layout should be styled"
Assert-True ($css.Contains('.social-icon.is-disabled')) "Disabled social icons should be styled"
Assert-True ($css.Contains('overflow-x: hidden')) "Page should prevent horizontal overflow"
Assert-True ($css.Contains('prefers-reduced-motion')) "CSS should respect reduced motion"

Write-Host "Smoke checks passed."
