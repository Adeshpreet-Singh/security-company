# Get all projects with package.json
$projects = Get-ChildItem -Directory | Where-Object { 
    $_.Name -notmatch '^\.' -and 
    (Test-Path "$($_.FullName)\package.json")
} | Select-Object -ExpandProperty Name

Write-Host "Setting up custom domains for all $($projects.Count) projects..." -ForegroundColor Cyan
Write-Host ""

$successCount = 0
$failCount = 0

foreach ($project in $projects) {
    Write-Host "Setting up domain for: $project" -NoNewline
    
    $customDomain = "$project.vercel.app"
    
    if (Test-Path $project) {
        Set-Location $project
        
        $result = vercel domains add $customDomain 2>&1
        
        if ($result -match "Success" -or $result -match "already exists") {
            Write-Host " OK - DOMAIN SET" -ForegroundColor Green
            Write-Host "  URL: https://$customDomain" -ForegroundColor Gray
            $successCount++
        } else {
            Write-Host " FAILED" -ForegroundColor Red
            Write-Host "  Error: $result" -ForegroundColor Gray
            $failCount++
        }
        
        Set-Location ..
    } else {
        Write-Host " FAILED - DIRECTORY NOT FOUND" -ForegroundColor Red
        $failCount++
    }
    
    Write-Host ""
}

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "CUSTOM DOMAIN SETUP COMPLETE" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Total Projects: $($projects.Count)" -ForegroundColor White
Write-Host "Successfully Configured: $successCount" -ForegroundColor Green
Write-Host "Failed: $failCount" -ForegroundColor Red
Write-Host ""
Write-Host "All projects now have custom domains in the format:" -ForegroundColor White
Write-Host "https://project-name.vercel.app" -ForegroundColor Green