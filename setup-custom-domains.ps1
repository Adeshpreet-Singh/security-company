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

Write-Host "Setting up custom domains for all projects..." -ForegroundColor Cyan
Write-Host ""

foreach ($project in $projects) {
    Write-Host "Setting up domain for: $project" -NoNewline
    
    $customDomain = "$project.vercel.app"
    
    Set-Location $project
    
    $result = vercel domains add $customDomain 2>&1
    
    if ($result -match "Success" -or $result -match "already exists") {
        Write-Host " ✓ DOMAIN SET" -ForegroundColor Green
        Write-Host "  URL: https://$customDomain" -ForegroundColor Gray
    } else {
        Write-Host " ✗ FAILED" -ForegroundColor Red
        Write-Host "  Error: $result" -ForegroundColor Gray
    }
    
    Set-Location ..
    
    Write-Host ""
}

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "CUSTOM DOMAIN SETUP COMPLETE" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "All projects now have custom domains in the format:" -ForegroundColor White
Write-Host "https://project-name.vercel.app" -ForegroundColor Green