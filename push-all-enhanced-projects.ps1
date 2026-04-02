# Push all enhanced projects to their repositories

$projects = @(
    "boutique-hotel",
    "car-dealer", 
    "cleaning-services",
    "cafe-casual-restaurant",
    "clothing-boutique",
    "coaching-institute",
    "construction-company",
    "coworking-space",
    "dental-medical-clinic",
    "electronics-store",
    "event-planner",
    "fashion-brand",
    "furniture-store",
    "gym-fitness",
    "hair-beauty-salon",
    "health-food-organic",
    "home-decor-shop",
    "hotel-chain",
    "jewelry-store",
    "law-firm",
    "life-wellness-coach",
    "makeup-artist",
    "manufacturing-b2b",
    "organic-farm",
    "pest-control",
    "pet-store-vet",
    "photography-studio",
    "real-estate-agent",
    "real-estate-developer",
    "resort-villa",
    "saas-product",
    "school-education",
    "spa-wellness",
    "tattoo-studio",
    "tech-agency",
    "veterinary-clinic",
    "wedding-venue",
    "yoga-studio"
)

foreach ($project in $projects) {
    Write-Host "Processing $project..." -ForegroundColor Cyan
    
    if (Test-Path $project) {
        Set-Location $project
        
        # Check if it's a git repository
        $gitStatus = git status 2>&1
        if ($LASTEXITCODE -eq 0) {
            # Add all changes
            git add -A
            
            # Check if there are changes to commit
            $changes = git status --porcelain
            if ($changes) {
                # Commit changes
                git commit -m "Enhanced home page design with beautiful animated gradients, floating particles, and modern aesthetics"
                
                # Push to remote
                $pushResult = git push 2>&1
                if ($LASTEXITCODE -ne 0) {
                    # Try with upstream
                    git push --set-upstream origin main 2>&1
                }
                
                Write-Host "SUCCESS: $project pushed successfully" -ForegroundColor Green
            } else {
                Write-Host "NO CHANGES: $project has no changes to commit" -ForegroundColor Yellow
            }
        } else {
            Write-Host "WARNING: $project is not a git repository" -ForegroundColor Yellow
        }
        
        Set-Location ..
    } else {
        Write-Host "ERROR: $project directory not found" -ForegroundColor Red
    }
}

Write-Host "All projects processed!" -ForegroundColor Green