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

Write-Host "Setting up aliases for all projects..." -ForegroundColor Cyan
Write-Host ""

foreach ($project in $projects) {
    Write-Host "Setting up alias for: $project" -NoNewline
    
    Set-Location $project
    
    # Get the latest production deployment URL
    $deployments = vercel ls 2>&1
    $productionLine = $deployments | Select-String -Pattern "Production" | Select-Object -First 1
    
    if ($productionLine) {
        $latestDeployment = ($productionLine -split "\s+")[3]
        
        if ($latestDeployment) {
            # Try to set alias with project name
            $aliasResult = vercel alias set $latestDeployment "$project.vercel.app" 2>&1
            
            if ($aliasResult -match "Success" -or $aliasResult -match "already exists") {
                Write-Host " ✓ ALIAS SET" -ForegroundColor Green
                Write-Host "  URL: https://$project.vercel.app" -ForegroundColor Gray
            } else {
                Write-Host " ✗ FAILED" -ForegroundColor Red
                Write-Host "  Error: $aliasResult" -ForegroundColor Gray
            }
        } else {
            Write-Host " ✗ NO DEPLOYMENT URL FOUND" -ForegroundColor Red
        }
    } else {
        Write-Host " ✗ NO PRODUCTION DEPLOYMENT" -ForegroundColor Red
    }
    
    Set-Location ..
    Write-Host ""
}

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "ALIAS SETUP COMPLETE" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan