# Push All Projects Script
# Commits changes and pushes to remote for all projects

param(
    [Parameter(Mandatory=$false)]
    [string]$CommitMessage = "Update project configuration and gitignore",
    
    [Parameter(Mandatory=$false)]
    [switch]$DryRun
)

$ErrorActionPreference = "Stop"

Write-Host "PUSH ALL PROJECTS" -ForegroundColor Magenta
Write-Host "==================" -ForegroundColor Magenta

$projects = Get-ChildItem -Directory | Where-Object { 
    $_.Name -notmatch '^\.' -and 
    (Test-Path "$($_.FullName)\package.json")
}

Write-Host "`nTotal Projects: $($projects.Count)" -ForegroundColor White

$successCount = 0
$failCount = 0
$skippedCount = 0
$failedProjects = @()

foreach ($proj in $projects) {
    Write-Host "`nProcessing: $($proj.Name)" -ForegroundColor Yellow
    
    try {
        Set-Location $proj.FullName
        
        # Check if there are changes to commit
        $status = git status --porcelain 2>&1
        
        if ($status) {
            # There are changes
            if ($DryRun) {
                Write-Host "  [DRY RUN] Would commit and push changes" -ForegroundColor Cyan
                Write-Host "    Changes: $($status.Count) files" -ForegroundColor Gray
                $skippedCount++
            } else {
                # Add all changes
                git add -A 2>&1 | Out-Null
                
                # Commit (ignore LF/CRLF warnings)
                $commitResult = git commit -m $CommitMessage 2>&1
                if ($LASTEXITCODE -eq 0 -or $commitResult -match "LF will be replaced by CRLF") {
                    Write-Host "  Committed changes" -ForegroundColor Green
                    
                    # Push
                    $pushResult = git push origin main 2>&1
                    if ($LASTEXITCODE -eq 0) {
                        Write-Host "  Pushed to remote" -ForegroundColor Green
                        $successCount++
                    } else {
                        Write-Host "  Push failed: $pushResult" -ForegroundColor Red
                        $failCount++
                        $failedProjects += $proj.Name
                    }
                } else {
                    Write-Host "  Commit failed: $commitResult" -ForegroundColor Red
                    $failCount++
                    $failedProjects += $proj.Name
                }
            }
        } else {
            Write-Host "  No changes to commit" -ForegroundColor Gray
            $skippedCount++
        }
    }
    catch {
        Write-Host "  Error: $_" -ForegroundColor Red
        $failCount++
        $failedProjects += $proj.Name
    }
}

Set-Location ..

Write-Host "`n========================================" -ForegroundColor Magenta
Write-Host "SUMMARY" -ForegroundColor Magenta
Write-Host "========================================" -ForegroundColor Magenta
Write-Host "`nTotal Projects: $($projects.Count)" -ForegroundColor White
Write-Host "Successfully Pushed: $successCount" -ForegroundColor Green
Write-Host "Skipped (no changes): $skippedCount" -ForegroundColor Gray
Write-Host "Failed: $failCount" -ForegroundColor Red

if ($failCount -gt 0) {
    Write-Host "`nFailed Projects:" -ForegroundColor Red
    foreach ($proj in $failedProjects) {
        Write-Host "  - $proj" -ForegroundColor Red
    }
}

Write-Host "`nOperation complete!" -ForegroundColor Green