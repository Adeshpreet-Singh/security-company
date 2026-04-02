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

Write-Host "Checking Vercel deployments for all projects..." -ForegroundColor Cyan
Write-Host ""

$deployed = @()
$notDeployed = @()

foreach ($project in $projects) {
    Write-Host "Checking: $project" -NoNewline
    
    if (Test-Path "$project\vercel.json" -or Test-Path "$project\.vercel") {
        Set-Location $project
        $output = vercel ls 2>&1
        Set-Location ..
        
        if ($output -match "https://") {
            $url = ($output | Select-String -Pattern "https://[^\s]+" | Select-Object -First 1).Matches.Value
            Write-Host " ✓ DEPLOYED" -ForegroundColor Green
            Write-Host "  URL: $url" -ForegroundColor Gray
            $deployed += $project
        } else {
            Write-Host " ✗ NOT DEPLOYED" -ForegroundColor Red
            $notDeployed += $project
        }
    } else {
        Write-Host " ✗ NO VERCEL CONFIG" -ForegroundColor Yellow
        $notDeployed += $project
    }
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "DEPLOYMENT SUMMARY" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Total Projects: $($projects.Count)" -ForegroundColor White
Write-Host "Deployed: $($deployed.Count)" -ForegroundColor Green
Write-Host "Not Deployed: $($notDeployed.Count)" -ForegroundColor Red
Write-Host ""

if ($deployed.Count -gt 0) {
    Write-Host "DEPLOYED PROJECTS:" -ForegroundColor Green
    foreach ($proj in $deployed) {
        Write-Host "  ✓ $proj" -ForegroundColor Green
    }
    Write-Host ""
}

if ($notDeployed.Count -gt 0) {
    Write-Host "NOT DEPLOYED PROJECTS:" -ForegroundColor Red
    foreach ($proj in $notDeployed) {
        Write-Host "  ✗ $proj" -ForegroundColor Red
    }
}