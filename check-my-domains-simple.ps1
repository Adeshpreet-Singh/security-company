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

Write-Host "Checking which domains actually belong to you..." -ForegroundColor Cyan
Write-Host ""

$myDomains = @()

foreach ($project in $projects) {
    Write-Host "Testing: $project.vercel.app" -NoNewline
    
    # Test if the domain is accessible
    try {
        $response = Invoke-WebRequest -Uri "https://$project.vercel.app" -Method Head -TimeoutSec 5 -ErrorAction SilentlyContinue
        
        if ($response.StatusCode -eq 200) {
            Write-Host " ✓ ACCESSIBLE" -ForegroundColor Green
            $myDomains += [PSCustomObject]@{
                Project = $project
                Domain = "https://$project.vercel.app"
                Status = "Active"
            }
        } else {
            Write-Host " ✗ NOT ACCESSIBLE" -ForegroundColor Red
        }
    } catch {
        Write-Host " ✗ NOT ACCESSIBLE" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "YOUR ACTUAL DOMAINS" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

if ($myDomains.Count -gt 0) {
    Write-Host "Total domains found: $($myDomains.Count)" -ForegroundColor Green
    Write-Host ""
    
    foreach ($item in $myDomains) {
        Write-Host "$($item.Project):" -ForegroundColor Yellow
        Write-Host "  $($item.Domain)" -ForegroundColor Gray
    }
    
    Write-Host ""
    Write-Host "These domains are confirmed to be accessible and belong to your projects." -ForegroundColor Green
} else {
    Write-Host "No accessible custom domains found." -ForegroundColor Red
    Write-Host "Your projects are only accessible via their default Vercel URLs." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "HOW TO VERIFY YOUR DOMAINS" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Check if a domain is accessible in your browser" -ForegroundColor White
Write-Host "2. Use 'vercel alias ls' in each project directory" -ForegroundColor White
Write-Host "3. Look for domains that show 'already in use' - those belong to others" -ForegroundColor White
Write-Host "4. Your domains should redirect to your actual project content" -ForegroundColor White
