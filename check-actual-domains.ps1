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

Write-Host "Checking actual domains for all projects..." -ForegroundColor Cyan
Write-Host ""

foreach ($project in $projects) {
    Write-Host "=== $project ===" -ForegroundColor Yellow
    
    Set-Location $project
    
    # Get all deployments for this project
    $deployments = vercel ls 2>&1
    
    # Extract URLs from the output
    $urls = $deployments | Select-String -Pattern "https://[^\s]+" | ForEach-Object { $_.Matches.Value }
    
    if ($urls) {
        Write-Host "Deployed URLs:" -ForegroundColor Green
        foreach ($url in $urls) {
            Write-Host "  $url" -ForegroundColor Gray
        }
    } else {
        Write-Host "No deployments found" -ForegroundColor Red
    }
    
    Set-Location ..
    Write-Host ""
}