$ErrorActionPreference = 'Stop'

$root = 'D:\个人网站'
$component = Join-Path $root 'components\PlaceholderProjectCaseStudy.tsx'
$assetSource = 'D:\文档\作品集\gpt聊天\高保真'
$assetDir = Join-Path $root 'public\portfolio\chatgpt'
$newIntro = '面向 ChatGPT 的长期任务场景，我在原生体验中加入「进展板」：从分散的历史对话中恢复工作进度，提炼可执行的下一步与整理建议，并把用户带回原有对话继续推进。'
$oldIntro = '面向 ChatGPT 的长期任务场景，我在原生体验中加入「进展板」：从分散的历史对话中恢复工作进度，提炼可执行的下一步与整理建议，并把用户带回原有对话继续推进。'
$imagePaths = 17..24 | ForEach-Object { "/portfolio/chatgpt/$_.png" }

New-Item -ItemType Directory -Force -Path $assetDir | Out-Null
foreach ($number in 17..24) {
  $source = Join-Path $assetSource ("$number.png")
  if (-not (Test-Path -LiteralPath $source)) { throw "Missing source image: $source" }
  Copy-Item -LiteralPath $source -Destination (Join-Path $assetDir ("$number.png")) -Force
}

$text = [IO.File]::ReadAllText($component)
$text = $text.Replace($oldIntro, $newIntro)

# Locate the project-03 configuration around the new description.
$introIndex = $text.IndexOf($newIntro, [StringComparison]::Ordinal)
if ($introIndex -lt 0) { throw 'Project 3 intro text was not found.' }
$starts = @(
  $text.LastIndexOf('"03"', $introIndex, [StringComparison]::Ordinal),
  $text.LastIndexOf("'03'", $introIndex, [StringComparison]::Ordinal),
  $text.LastIndexOf('projectId: "03"', $introIndex, [StringComparison]::Ordinal),
  $text.LastIndexOf("projectId: '03'", $introIndex, [StringComparison]::Ordinal)
) | Where-Object { $_ -ge 0 }
$start = ($starts | Measure-Object -Maximum).Maximum
if ($null -eq $start -or $start -lt 0) { throw 'Project 3 configuration start was not found.' }

# Use the next top-level project boundary; the component stores project configs as objects.
$end = $text.IndexOf("`n  },", $introIndex, [StringComparison]::Ordinal)
if ($end -lt 0) { $end = $text.IndexOf("`n},", $introIndex, [StringComparison]::Ordinal) }
if ($end -lt 0) { throw 'Project 3 configuration end was not found.' }
$end += 4
$block = $text.Substring($start, $end - $start)

$arrayLiteral = "[" + (($imagePaths | ForEach-Object { "'$_'" }) -join ', ') + "]"
$arrayPattern = '(?s)(?<key>images|imagePaths|pages|slides|screenshots)\s*:\s*\[[^\]]*\]'
if ([regex]::IsMatch($block, $arrayPattern)) {
  $block = [regex]::Replace($block, $arrayPattern, { param($m) "$($m.Groups['key'].Value): $arrayLiteral" }, 1)
} else {
  # Fallback for configs that use a plain list of image paths without a standard key.
  $pngPattern = "(['\"])(?<path>[^'\"]+\.png)\1"
  $match = [regex]::Match($block, $pngPattern)
  if (-not $match.Success) { throw 'Project 3 image list was not found.' }
  $matches = [regex]::Matches($block, $pngPattern)
  $replaceCount = [Math]::Min(8, $matches.Count)
  for ($i = $replaceCount - 1; $i -ge 0; $i--) {
    $m = $matches[$i]
    $value = "'" + $imagePaths[$i] + "'"
    $block = $block.Remove($m.Index, $m.Length).Insert($m.Index, $value)
  }
}

$text = $text.Remove($start, $end - $start).Insert($start, $block)
[IO.File]::WriteAllText($component, $text, [Text.UTF8Encoding]::new($false))
[IO.File]::WriteAllText('C:\Users\jiaji\AppData\Local\Temp\project3-replace.done', "updated $(Get-Date -Format o)", [Text.UTF8Encoding]::new($false))
