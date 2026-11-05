$ErrorActionPreference = 'Stop'

$sourceRoot = 'D:\文档\作品集\gpt聊天\高保真'
$targetRoot = Join-Path $PSScriptRoot '..\public\portfolio\chatgpt-redesign'
$targetRoot = [System.IO.Path]::GetFullPath($targetRoot)
[System.IO.Directory]::CreateDirectory($targetRoot) | Out-Null

$sourceNames = @('17.png', '18.png', '19.png', '20.png', '21.png', '22.png', '23.png', '24.png')
for ($index = 0; $index -lt $sourceNames.Count; $index++) {
    $destinationName = ('{0:D2}.png' -f ($index + 1))
    Copy-Item -LiteralPath (Join-Path $sourceRoot $sourceNames[$index]) -Destination (Join-Path $targetRoot $destinationName) -Force
}

$componentPath = [System.IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..\components\PlaceholderProjectCaseStudy.tsx'))
$text = [System.IO.File]::ReadAllText($componentPath)
$oldDescription = '面向 ChatGPT 的长期任务场景，我在原生体验中加入「进展板」：从分散的历史对话中恢复工作进度，提炼可执行的下一步与整理建议，并把用户带回原有对话继续推进。'
$newDescription = '面向 ChatGPT 的长期任务场景，我在原生体验中加入「进展板」：从分散的历史对话中恢复工作进度，提炼可执行的下一步与整理建议，并把用户带回原有对话继续推进。'

if ($text.Contains($oldDescription)) {
    $text = $text.Replace($oldDescription, $newDescription)
}

$descriptionIndex = $text.IndexOf($newDescription)
if ($descriptionIndex -lt 0) {
    throw '未找到项目三的简介，已停止修改。'
}

$beforeDescription = $text.Substring(0, $descriptionIndex)
$projectMatches = [regex]::Matches($beforeDescription, '(?m)(?:^|\r?\n)\s*(?:["'']03["'']\s*:|(?:id|projectId)\s*:\s*["'']03["''])')
if ($projectMatches.Count -eq 0) {
    throw '未找到项目三配置块，已停止修改。'
}

$blockStart = $projectMatches[$projectMatches.Count - 1].Index
$afterDescription = $text.Substring($descriptionIndex)
$nextProjectMatch = [regex]::Match($afterDescription, '(?m)(?:^|\r?\n)\s*(?:["'']04["'']\s*:|(?:id|projectId)\s*:\s*["'']04["''])')
$blockEnd = if ($nextProjectMatch.Success) { $descriptionIndex + $nextProjectMatch.Index } else { $text.Length }
$block = $text.Substring($blockStart, $blockEnd - $blockStart)

$imageUrls = 1..8 | ForEach-Object { "'/portfolio/chatgpt-redesign/{0:D2}.png'" -f $_ }
$imageArray = "[" + [Environment]::NewLine + "      " + ($imageUrls -join (',' + [Environment]::NewLine + '      ')) + [Environment]::NewLine + '    ]'
$imagePattern = '(?s)\b(images|pages|slides|caseStudyImages|portfolioImages|detailImages|caseStudyPages|pageImages|gallery|assets|media)\s*:\s*(\[(?:.*?)\]|[A-Za-z_$][\w$]*)'
$imageMatch = [regex]::Match($block, $imagePattern)
if (-not $imageMatch.Success) {
    throw '未找到项目三的图片列表，已停止修改。'
}

$replacement = $imageMatch.Groups[1].Value + ': ' + $imageArray
$updatedBlock = $block.Substring(0, $imageMatch.Index) + $replacement + $block.Substring($imageMatch.Index + $imageMatch.Length)
$text = $text.Substring(0, $blockStart) + $updatedBlock + $text.Substring($blockEnd)

$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText($componentPath, $text, $utf8NoBom)
