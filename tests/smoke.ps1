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

function U([int[]]$codes) {
  return -join ($codes | ForEach-Object { [char]$_ })
}

Assert-True (Test-Path $indexPath) "index.html should exist"
Assert-True (Test-Path $stylesPath) "assets/styles.css should exist"
Assert-True (Test-Path $appPath) "assets/app.js should exist"

$html = Get-Content -LiteralPath $indexPath -Raw -Encoding UTF8
$css = Get-Content -LiteralPath $stylesPath -Raw -Encoding UTF8
$js = Get-Content -LiteralPath $appPath -Raw -Encoding UTF8

$navItems = @(
  (U @(0x9996, 0x9875)),
  (U @(0x4EA7, 0x54C1, 0x4E2D, 0x5FC3)),
  (U @(0x5173, 0x4E8E, 0x6211, 0x4EEC)),
  (U @(0x8054, 0x7CFB, 0x8BE2, 0x4EF7))
)

foreach ($nav in $navItems) {
  Assert-True ($html.Contains($nav)) "Navigation should contain required item"
}

$products = @(
  (U @(0x6DB2, 0x538B, 0x6CB9, 0x7F38)),
  (U @(0x4F38, 0x7F29, 0x6CB9, 0x7F38)),
  (U @(0x6DB2, 0x538B, 0x7CFB, 0x7EDF))
)

foreach ($product in $products) {
  Assert-True ($js.Contains($product)) "Product data should contain required product type"
}

$fields = @(
  "Full Name",
  "Business Email",
  "Phone / WhatsApp",
  "Country / Region",
  "Product Type",
  "Application / Equipment",
  "Bore Diameter",
  "Rod Diameter",
  "Stroke",
  "Working Pressure",
  "Required Quantity",
  "Target Delivery Date",
  "Project Details"
)

foreach ($field in $fields) {
  Assert-True ($html.Contains($field)) "RFQ form should contain required field"
}

foreach ($social in @("Facebook", "TikTok", "WhatsApp")) {
  Assert-True (($html.Contains($social) -or $js.Contains($social))) "Site should reserve social link or field"
}

Assert-True ($html.Contains("Shandong Jitai Machinery Co., Ltd.")) "English company name should be present"
Assert-True ($html.Contains("Send Your Drawing")) "Hero drawing CTA should be present"
Assert-True ($html.Contains("data-lang-toggle")) "Language control should be a real toggle"
Assert-True (-not $html.Contains("class=""language-link"" href=""#contact""")) "Language control should not jump to contact"
Assert-True ($html.Contains("<video")) "Homepage should include video hero"
Assert-True ($html.Contains("data-video-toggle")) "Video hero should include play pause control"
Assert-True ($html.Contains("Custom Hydraulic Cylinders")) "Product detail section should exist"
Assert-True ($html.Contains("Tell Us About Your Hydraulic Cylinder Project")) "RFQ section should exist"
Assert-True ($html.Contains("Drawing / File Upload")) "RFQ form should include file upload"
Assert-True ($html.Contains("I agree to the processing of my information")) "RFQ form should include privacy consent"
Assert-True ($html.Contains("Follow Jitai Hydraulic")) "Social follow section should exist"
Assert-True ($js.Contains("URLSearchParams")) "App should be ready to read social source parameters"
Assert-True ($js.Contains("siteConfig")) "App should centralize site configuration"
Assert-True ($js.Contains("quoteEndpoint")) "App should define quote endpoint configuration"
Assert-True ($js.Contains("validateFile")) "App should validate uploaded files"
Assert-True ($js.Contains("bindRfqForm")) "App should bind RFQ form behavior"
Assert-True ($js.Contains("translations")) "App should contain translation data"
Assert-True ($js.Contains("setLanguage")) "App should implement language switching"
Assert-True ($js.Contains("socialLinks")) "App should centralize social links"
Assert-True ($css.Contains("@media")) "CSS should include responsive styles"
Assert-True ($css.Contains("prefers-reduced-motion")) "CSS should respect reduced motion"

Write-Host "Smoke checks passed."
