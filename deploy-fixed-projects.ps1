$projects = @("cleaning-services", "hostel-budget", "pest-control", "saas-product")

Write-Host "Building and deploying fixed projects..." -ForegroundColor Cyan
Write-Host ""

$successCount = 0
$failCount = 0
$failedProjects = @()

foreach ($project in $projects) {
    Write-Host "Processing: $project" -ForegroundColor Yellow
    
    if (Test-Path $project) {
        Set-Location $project
        
        Write-Host "  Building..." -NoNewline
        $buildResult = pnpm run build 2>&1
        
        if ($LASTEXITCODE -eq 0) {
            Write-Host " BUILD SUCCESS" -ForegroundColor Green
            
            Write-Host "  Deploying..." -NoNewline
            $deployResult = vercel --prod --yes 2>&1
            
            if ($LASTEXITCODE -eq 0) {
                Write-Host " DEPLOYED" -ForegroundColor Green
                $successCount++
            } else {
                Write-Host " DEPLOY FAILED" -ForegroundColor Red
                $failCount++
                $failedProjects += $project
            }
        } else {
            Write-Host " BUILD FAILED" -ForegroundColor Red
            $failCount++
            $failedProjects += $project
        }
        
        Set-Location ..
    } else {
        Write-Host "  DIRECTORY NOT FOUND" -ForegroundColor Red
        $failCount++
        $failedProjects += $project
    }
    
    Write-Host ""
}

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "DEPLOYMENT SUMMARY" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Total Projects: $($projects.Count)" -ForegroundColor White
Write-Host "Successfully Deployed: $successCount" -ForegroundColor Green
Write-Host "Failed: $failCount" -ForegroundColor Red
Write-Host ""

if ($failCount -gt 0) {
    Write-Host "Failed Projects:" -ForegroundColor Red
    foreach ($proj in $failedProjects) {
        Write-Host "  - $proj" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "All fixed projects processed!" -ForegroundColor Cyan