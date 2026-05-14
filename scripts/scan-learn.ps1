<#
.SYNOPSIS
  Search Markdown under materials/ and repo root for a keyword (learning locator).

.PARAMETER Keyword
  Required search string, e.g. flex, closure, BFC

.PARAMETER Root
  Repo root; defaults to parent of scripts/

.EXAMPLE
  .\scripts\scan-learn.ps1 -Keyword "flex"
#>
param(
  [Parameter(Mandatory = $true)]
  [string] $Keyword,
  [string] $Root = ""
)

$ErrorActionPreference = "Stop"
if ([string]::IsNullOrWhiteSpace($Root)) {
  $scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
  if ([string]::IsNullOrWhiteSpace($scriptDir)) { $scriptDir = $PSScriptRoot }
  $Root = (Resolve-Path (Join-Path $scriptDir "..")).Path
}
$materialsDir = Join-Path $Root "materials"
$allFiles = New-Object System.Collections.Generic.List[string]

if (Test-Path $materialsDir) {
  Get-ChildItem -Path $materialsDir -Filter "*.md" -Recurse -File -ErrorAction SilentlyContinue |
    ForEach-Object { $allFiles.Add($_.FullName) | Out-Null }
}

Get-ChildItem -Path $Root -Filter "*.md" -File -ErrorAction SilentlyContinue |
  ForEach-Object {
    if ($allFiles -notcontains $_.FullName) { $allFiles.Add($_.FullName) | Out-Null }
  }

if ($allFiles.Count -eq 0) {
  Write-Host "[scan-learn] No .md files found. Put notes under materials/ or repo root." -ForegroundColor Yellow
  exit 0
}

Write-Host ("[scan-learn] Keyword: {0}" -f $Keyword) -ForegroundColor Cyan
Write-Host ("[scan-learn] Root:    {0}" -f $Root)
Write-Host ""

$hitTotal = 0
foreach ($filePath in ($allFiles | Sort-Object -Unique)) {
  $found = Select-String -LiteralPath $filePath -Pattern $Keyword -SimpleMatch -ErrorAction SilentlyContinue
  if (-not $found) { continue }

  Write-Host ("=== {0} ===" -f $filePath) -ForegroundColor Green
  $arr = @($found)
  $take = [Math]::Min(40, $arr.Length)
  for ($i = 0; $i -lt $take; $i++) {
    $m = $arr[$i]
    $text = $m.Line.Trim()
    if ($text.Length -gt 120) { $text = $text.Substring(0, 117) + "..." }
    Write-Host ("  L{0}: {1}" -f $m.LineNumber, $text)
    $hitTotal++
  }
  if ($arr.Length -gt 40) {
    Write-Host "  ... (first 40 matches only)" -ForegroundColor DarkYellow
  }
  Write-Host ""
}

if ($hitTotal -eq 0) {
  Write-Host "[scan-learn] No matches. Try another keyword or add notes under materials/." -ForegroundColor Yellow
}

Write-Host "[scan-learn] Next: open Cursor chat, @ the file or paste line numbers; ask AI to read system.md + persona/teacher.md." -ForegroundColor Cyan
