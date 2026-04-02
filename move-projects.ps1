# Move all project folders from agent-XX to root
$agentDirs = Get-ChildItem -Path . -Directory -Filter "agent-*"
foreach ($agent in $agentDirs) {
    $projects = Get-ChildItem -Path $agent.FullName -Directory
    foreach ($proj in $projects) {
        $dest = Join-Path "." $proj.Name
        if (Test-Path $dest) {
            Write-Host "SKIP (exists at root): $($proj.Name)"
        } else {
            Move-Item -LiteralPath $proj.FullName -Destination $dest
            Write-Host "MOVED: $($proj.Name) -> root"
        }
    }
}

# Remove empty agent folders and their stray files
foreach ($agent in $agentDirs) {
    $remaining = Get-ChildItem -Path $agent.FullName -Recurse -ErrorAction SilentlyContinue
    if ($remaining.Count -eq 0) {
        Remove-Item -LiteralPath $agent.FullName -Force
        Write-Host "REMOVED empty: $($agent.Name)"
    } else {
        Write-Host "KEEP (has files): $($agent.Name) - $($remaining.Count) items"
    }
}
Write-Host "Done!"