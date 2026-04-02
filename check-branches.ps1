$repos = @(
    "manufacturing-b2b", "real-estate-agent", "fashion-brand", "tech-agency", "business-coach",
    "veterinary-clinic", "boutique-hotel", "dental-medical-clinic", "coworking-space", "spa-wellness",
    "fine-dining-restaurant", "organic-farm", "photography-studio", "barber-shop", "health-food-organic",
    "resort-villa", "pest-control", "real-estate-developer", "makeup-artist", "cleaning-services",
    "furniture-store", "yoga-studio", "cafe-casual-restaurant", "jewelry-store", "electronics-store",
    "design-studio", "bakery-cake-shop", "hotel-chain", "event-planner", "saas-product",
    "pet-store-vet", "tattoo-studio", "coaching-institute", "fashion-jewelry", "clothing-boutique",
    "ca-accounting", "hostel-budget", "auto-workshop", "life-wellness-coach", "law-firm",
    "construction-company", "school-education", "wedding-venue", "car-dealer", "ecommerce-general",
    "home-decor-shop", "hair-beauty-salon", "architecture-firm", "gym-fitness", "dairy-food-production",
    "agency-toolkit", "portfolio", "thread-and-node", "vaultfi-analytics", "heritage-craft-pickles",
    "luxe-interiors", "lumina-home", "flowstate-workspace", "spotify-slack-bot"
)

foreach ($repo in $repos) {
    Write-Host "=== $repo ==="
    
    # Get default branch
    $defaultBranch = gh repo view "Adeshpreet-Singh/$repo" --json defaultBranchRef --jq '.defaultBranchRef.name'
    Write-Host "Default branch: $defaultBranch"
    
    # Get all branches
    $branches = gh api "repos/Adeshpreet-Singh/$repo/branches" --jq '.[].name'
    $branchCount = ($branches | Measure-Object).Count
    Write-Host "Branch count: $branchCount"
    Write-Host "Branches: $($branches -join ', ')"
    
    if ($branchCount -gt 1) {
        Write-Host "*** MULTIPLE BRANCHES FOUND ***" -ForegroundColor Red
    }
    
    Write-Host ""
}