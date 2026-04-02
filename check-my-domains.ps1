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

Write-Host "Checking all your production domains..." -ForegroundColor Cyan
Write-Host ""

$allDomains = @()

foreach ($project in $projects) {
    Write-Host "=== $project ===" -ForegroundColor Yellow
    
    Set-Location $project
    
    # Get all aliases for this project
    $aliases = vercel alias ls 2>&1
    
    if ($aliases -match "No aliases found") {
        Write-Host "  No aliases found" -ForegroundColor Gray
    } else {
        # Extract domain information
        $domainLines = $aliases | Select-String -Pattern "\.vercel\.app" | ForEach-Object { $_.Line.Trim() }
        
        if ($domainLines) {
            Write-Host "  Domains found:" -ForegroundColor Green
            foreach ($line in $domainLines) {
                Write-Host "    $line" -ForegroundColor Gray
                
                # Extract just the domain part
                if ($line -match "(https?://[^\s]+)") {
                    $domain = $matches[1]
                    $allDomains += [PSCustomObject]@{
                        Project = $project
                        Domain = $domain
                        Status = "Active"
                    }
                }
            }
        } else {
            Write-Host "  No custom domains found" -ForegroundColor Gray
        }
    }
    
    Set-Location ..
    Write-Host ""
}

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "SUMMARY OF ALL YOUR DOMAINS" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

if ($allDomains.Count -gt 0) {
    Write-Host "Total domains found: $($allDomains.Count)" -ForegroundColor Green
    Write-Host ""
    
    # Group by project
    $grouped = $allDomains | Group-Object Project
    
    foreach ($group in $grouped) {
        Write-Host "$($group.Name):" -ForegroundColor Yellow
        foreach ($item in $group.Group) {
            Write-Host "  $($item.Domain)" -ForegroundColor Gray
        }
        Write-Host ""
    }
    
    # Export to CSV for easy reference
    $allDomains | Export-Csv -Path "my-vercel-domains.csv" -NoTypeInformation
    Write-Host "Domain list exported to: my-vercel-domains.csv" -ForegroundColor Green
} else {
    Write-Host "No custom domains found for any projects." -ForegroundColor Red
    Write-Host "Your projects are only accessible via their default Vercel URLs." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "To verify a domain is yours, check if it appears in the list above." -ForegroundColor Cyan
Write-Host "Domains that show 'already in use' errors belong to other Vercel users." -ForegroundColor Cyan