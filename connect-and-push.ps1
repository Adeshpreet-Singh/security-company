$repos = @{
    "architecture-firm" = "https://github.com/Adeshpreet-Singh/architecture-firm"
    "auto-workshop" = "https://github.com/Adeshpreet-Singh/auto-workshop"
    "bakery-cake-shop" = "https://github.com/Adeshpreet-Singh/bakery-cake-shop"
    "barber-shop" = "https://github.com/Adeshpreet-Singh/barber-shop"
    "boutique-hotel" = "https://github.com/Adeshpreet-Singh/boutique-hotel"
    "business-coach" = "https://github.com/Adeshpreet-Singh/business-coach"
    "ca-accounting" = "https://github.com/Adeshpreet-Singh/ca-accounting"
    "cafe-casual-restaurant" = "https://github.com/Adeshpreet-Singh/cafe-casual-restaurant"
    "car-dealer" = "https://github.com/Adeshpreet-Singh/car-dealer"
    "cleaning-services" = "https://github.com/Adeshpreet-Singh/cleaning-services"
    "clothing-boutique" = "https://github.com/Adeshpreet-Singh/clothing-boutique"
    "coaching-institute" = "https://github.com/Adeshpreet-Singh/coaching-institute"
    "construction-company" = "https://github.com/Adeshpreet-Singh/construction-company"
    "coworking-space" = "https://github.com/Adeshpreet-Singh/coworking-space"
    "dairy-food-production" = "https://github.com/Adeshpreet-Singh/dairy-food-production"
    "dental-medical-clinic" = "https://github.com/Adeshpreet-Singh/dental-medical-clinic"
    "design-studio" = "https://github.com/Adeshpreet-Singh/design-studio"
    "ecommerce-general" = "https://github.com/Adeshpreet-Singh/ecommerce-general"
    "electronics-store" = "https://github.com/Adeshpreet-Singh/electronics-store"
    "event-planner" = "https://github.com/Adeshpreet-Singh/event-planner"
    "fashion-brand" = "https://github.com/Adeshpreet-Singh/fashion-brand"
    "fashion-jewelry" = "https://github.com/Adeshpreet-Singh/fashion-jewelry"
    "fine-dining-restaurant" = "https://github.com/Adeshpreet-Singh/fine-dining-restaurant"
    "furniture-store" = "https://github.com/Adeshpreet-Singh/furniture-store"
    "gym-fitness" = "https://github.com/Adeshpreet-Singh/gym-fitness"
    "hair-beauty-salon" = "https://github.com/Adeshpreet-Singh/hair-beauty-salon"
    "health-food-organic" = "https://github.com/Adeshpreet-Singh/health-food-organic"
    "home-decor-shop" = "https://github.com/Adeshpreet-Singh/home-decor-shop"
    "hostel-budget" = "https://github.com/Adeshpreet-Singh/hostel-budget"
    "hotel-chain" = "https://github.com/Adeshpreet-Singh/hotel-chain"
    "jewelry-store" = "https://github.com/Adeshpreet-Singh/jewelry-store"
    "law-firm" = "https://github.com/Adeshpreet-Singh/law-firm"
    "life-wellness-coach" = "https://github.com/Adeshpreet-Singh/life-wellness-coach"
    "makeup-artist" = "https://github.com/Adeshpreet-Singh/makeup-artist"
    "manufacturing-b2b" = "https://github.com/Adeshpreet-Singh/manufacturing-b2b"
    "organic-farm" = "https://github.com/Adeshpreet-Singh/organic-farm"
    "pest-control" = "https://github.com/Adeshpreet-Singh/pest-control"
    "pet-store-vet" = "https://github.com/Adeshpreet-Singh/pet-store-vet"
    "photography-studio" = "https://github.com/Adeshpreet-Singh/photography-studio"
    "real-estate-agent" = "https://github.com/Adeshpreet-Singh/real-estate-agent"
    "real-estate-developer" = "https://github.com/Adeshpreet-Singh/real-estate-developer"
    "resort-villa" = "https://github.com/Adeshpreet-Singh/resort-villa"
    "saas-product" = "https://github.com/Adeshpreet-Singh/saas-product"
    "school-education" = "https://github.com/Adeshpreet-Singh/school-education"
    "spa-wellness" = "https://github.com/Adeshpreet-Singh/spa-wellness"
    "tattoo-studio" = "https://github.com/Adeshpreet-Singh/tattoo-studio"
    "tech-agency" = "https://github.com/Adeshpreet-Singh/tech-agency"
    "veterinary-clinic" = "https://github.com/Adeshpreet-Singh/veterinary-clinic"
    "wedding-venue" = "https://github.com/Adeshpreet-Singh/wedding-venue"
    "yoga-studio" = "https://github.com/Adeshpreet-Singh/yoga-studio"
}

foreach ($folder in $repos.Keys) {
    $url = $repos[$folder]
    if (-not (Test-Path $folder)) {
        Write-Host "SKIP (not found): $folder"
        continue
    }
    Push-Location $folder
    try {
        # Check if git repository exists
        if (Test-Path ".git") {
            Write-Host "SKIP (already initialized): $folder"
            Pop-Location
            continue
        }
        git init -b main 2>&1 | Out-Null
        git remote add origin $url 2>&1 | Out-Null
        git add . 2>&1 | Out-Null
        git commit -m "Initial commit" 2>&1 | Out-Null
        git push origin main 2>&1 | Out-Null
        Write-Host "OK: $folder -> $url"
    } catch {
        Write-Host "FAIL: $folder - $($_.Exception.Message)"
    }
    Pop-Location
}
Write-Host "Done!"