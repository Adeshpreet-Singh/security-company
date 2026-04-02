$projects = @(
    "architecture-firm", "auto-workshop", "bakery-cake-shop", "barber-shop", "boutique-hotel",
    "business-coach", "ca-accounting", "cafe-casual-restaurant", "car-dealer", "cleaning-services",
    "clothing-boutique", "coaching-institute", "construction-company", "coworking-space", "dairy-food-production",
    "dental-medical-clinic", "design-studio", "ecommerce-general", "electronics-store", "event-planner",
    "fashion-brand", "fashion-jewelry", "fine-dining-restaurant", "furniture-store", "gym-fitness",
    "hair-beauty-salon", "health-food-organic", "home-decor-shop", "hostel-budget", "hotel-chain",
    "jewelry-store", "law-firm", "life-wellness-coach", "makeup-artist", "manufacturing-b2b",
    "organic-farm", "pest-control", "pet-store-vet", "photography-studio", "real-estate-agent",
    "real-estate-developer", "resort-villa", "saas-product", "school-education", "spa-wellness",
    "tattoo-studio", "tech-agency", "veterinary-clinic", "wedding-venue", "yoga-studio"
)

Write-Host "Building and deploying all projects to Vercel (Mumbai region)..." -ForegroundColor Cyan
Write-Host ""

$successCount = 0
$buildFailCount = 0
$deployFailCount = 0
$buildFailedProjects = @()
$deployFailedProjects = @()

foreach ($project in $projects) {
    Write-Host "Processing: $project" -ForegroundColor Yellow
    
    if (Test-Path $project) {
        Set-Location $project
        
        $gitStatus = git status 2>&1
        if ($LASTEXITCODE -ne 0) {
            Write-Host "  X NOT A GIT REPO" -ForegroundColor Red
            $deployFailCount++
            $deployFailedProjects += $project
            Set-Location ..
            Write-Host ""
            continue
        }
        
        Write-Host "  Building..." -NoNewline
        $buildResult = npm run build 2>&1
        
        if ($LASTEXITCODE -eq 0) {
            Write-Host " BUILD SUCCESS" -ForegroundColor Green
            
            Write-Host "  Deploying..." -NoNewline
            $deployResult = vercel --prod --yes --region bom1 2>&1
            
            if ($LASTEXITCODE -eq 0) {
                Write-Host " DEPLOYED" -ForegroundColor Green
                $successCount++
            } else {
                Write-Host " DEPLOY FAILED" -ForegroundColor Red
                $deployFailCount++
                $deployFailedProjects += $project
            }
        } else {
            Write-Host " BUILD FAILED" -ForegroundColor Red
            $buildFailCount++
            $buildFailedProjects += $project
        }
        
        Set-Location ..
    } else {
        Write-Host "  X DIRECTORY NOT FOUND" -ForegroundColor Red
        $deployFailCount++
        $deployFailedProjects += $project
    }
    
    Write-Host ""
}

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "DEPLOYMENT SUMMARY" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Total Projects: $($projects.Count)" -ForegroundColor White
Write-Host "Successfully Built and Deployed: $successCount" -ForegroundColor Green
Write-Host "Build Failures: $buildFailCount" -ForegroundColor Red
Write-Host "Deploy Failures: $deployFailCount" -ForegroundColor Red
Write-Host ""

if ($buildFailCount -gt 0) {
    Write-Host "Build Failed Projects:" -ForegroundColor Red
    foreach ($proj in $buildFailedProjects) {
        Write-Host "  - $proj" -ForegroundColor Red
    }
    Write-Host ""
}

if ($deployFailCount -gt 0) {
    Write-Host "Deploy Failed Projects:" -ForegroundColor Red
    foreach ($proj in $deployFailedProjects) {
        Write-Host "  - $proj" -ForegroundColor Red
    }
    Write-Host ""
}

Write-Host "All deployments targeted to Mumbai (bom1) region" -ForegroundColor Cyan