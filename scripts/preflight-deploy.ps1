$ErrorActionPreference = 'Stop'

$root = Split-Path -Parent $PSScriptRoot
Set-Location -LiteralPath $root

function Require-File([string]$Path) {
  $full = Join-Path $root $Path
  if (-not (Test-Path -LiteralPath $full -PathType Leaf)) {
    throw "Missing required file: $Path"
  }
  return Get-Item -LiteralPath $full
}

function Require-Text([string]$Path, [string]$Pattern) {
  $full = Join-Path $root $Path
  $text = [IO.File]::ReadAllText($full, [Text.UTF8Encoding]::new($false))
  if ($text -notmatch $Pattern) {
    throw "Expected reference was not found in $Path : $Pattern"
  }
}

Write-Output '=== deployment preflight ==='
Require-File 'package.json' | Out-Null
Require-File 'package-lock.json' | Out-Null
Require-File 'next.config.ts' | Out-Null
Require-File 'public/zhang-yong-resume.png' | Out-Null
$portfolio = Require-File 'public/zhang-yong-portfolio.pdf'
Require-File 'public/videos/ui-trace/workflow.mp4' | Out-Null
Require-File 'public/demo/index.html' | Out-Null
Require-File 'public/demo/chat-board/index.html' | Out-Null

Require-Text 'components/DownloadSection.tsx' 'zhang-yong-resume\.png'
Require-Text 'components/DownloadSection.tsx' 'zhang-yong-portfolio\.pdf'
Require-Text 'next.config.ts' '/demo/chat-board/'
Require-Text 'content/placeholderCaseStudies.ts' '/projects/chatgpt-progress/8\.png'

$publicFiles = Get-ChildItem -LiteralPath (Join-Path $root 'public') -Recurse -File
$publicBytes = ($publicFiles | Measure-Object -Property Length -Sum).Sum
$portfolioBytes = $portfolio.Length

Write-Output ('public files: {0}' -f $publicFiles.Count)
Write-Output ('public size: {0:N2} MB' -f ($publicBytes / 1MB))
Write-Output ('portfolio PDF: {0:N2} MB' -f ($portfolioBytes / 1MB))
Write-Output ('node: {0}' -f (node --version))
Write-Output 'required routes and download assets: present'
Write-Output 'preflight passed (build not run)'
