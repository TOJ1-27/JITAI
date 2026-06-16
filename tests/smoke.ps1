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
  (U @(0x6DB2, 0x538B, 0x7CFB, 0x7EDF)),
  (U @(0x7535, 0x52A8, 0x7F38)),
  (U @(0x6DB2, 0x538B, 0x52A8, 0x529B, 0x5355, 0x5143)),
  (U @(0x6DB2, 0x538B, 0x914D, 0x4EF6))
)

foreach ($product in $products) {
  Assert-True ($js.Contains($product)) "Product data should contain required product type"
}

$fields = @(
  (U @(0x8054, 0x7CFB, 0x4EBA)),
  (U @(0x516C, 0x53F8, 0x540D, 0x79F0)),
  ((U @(0x7535, 0x8BDD)) + " / WhatsApp"),
  (U @(0x90AE, 0x7BB1)),
  (U @(0x6DB2, 0x538B, 0x4EA7, 0x54C1, 0x7C7B, 0x578B)),
  ((U @(0x56FD, 0x5BB6)) + " / " + (U @(0x5730, 0x533A))),
  (U @(0x9700, 0x6C42, 0x8BF4, 0x660E))
)

foreach ($field in $fields) {
  Assert-True ($html.Contains($field)) "Inquiry form should contain required field"
}

foreach ($social in @("Facebook", "TikTok", "WhatsApp")) {
  Assert-True (($html.Contains($social) -or $js.Contains($social))) "Site should reserve social link or field"
}

Assert-True ($html.Contains("Shandong Jitai Machinery Co., Ltd.")) "English company name should be present"
Assert-True ($html.Contains("Send Inquiry")) "English inquiry CTA should be present"
Assert-True ($html.Contains("data-lang-toggle")) "Language control should be a real toggle"
Assert-True (-not $html.Contains("class=""language-link"" href=""#contact""")) "Language control should not jump to contact"
Assert-True ($js.Contains("URLSearchParams")) "App should be ready to read social source parameters"
Assert-True ($js.Contains("inquiry-success")) "App should expose inquiry success state"
Assert-True ($js.Contains("translations")) "App should contain translation data"
Assert-True ($js.Contains("setLanguage")) "App should implement language switching"
Assert-True ($css.Contains("@media")) "CSS should include responsive styles"

Write-Host "Smoke checks passed."
