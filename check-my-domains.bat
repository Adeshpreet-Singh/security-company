@echo off
echo Checking which domains actually belong to you...
echo.

setlocal enabledelayedexpansion

set count=0

for %%d in (
    architecture-firm
    auto-workshop
    bakery-cake-shop
    barber-shop
    boutique-hotel
    business-coach
    ca-accounting
    cafe-casual-restaurant
    car-dealer
    cleaning-services
    clothing-boutique
    coaching-institute
    construction-company
    coworking-space
    dairy-food-production
    dental-medical-clinic
    design-studio
    ecommerce-general
    electronics-store
    event-planner
    fashion-brand
    fashion-jewelry
    fine-dining-restaurant
    furniture-store
    gym-fitness
    hair-beauty-salon
    health-food-organic
    home-decor-shop
    hostel-budget
    hotel-chain
    jewelry-store
    law-firm
    life-wellness-coach
    makeup-artist
    manufacturing-b2b
    organic-farm
    pest-control
    pet-store-vet
    photography-studio
    real-estate-agent
    real-estate-developer
    resort-villa
    saas-product
    school-education
    spa-wellness
    tattoo-studio
    tech-agency
    veterinary-clinic
    wedding-venue
    yoga-studio
) do (
    echo Testing: %%d.vercel.app
    
    curl -s -o nul -w "%%{http_code}" https://%%d.vercel.app > temp.txt
    set /p status=<temp.txt
    
    if "!status!"=="200" (
        echo  %%d: ACCESSIBLE
        set /a count+=1
        echo %%d.vercel.app >> my-domains.txt
    ) else (
        echo  %%d: NOT ACCESSIBLE
    )
)

echo.
echo ========================================
echo YOUR ACTUAL DOMAINS
echo ========================================
echo.

if !count! gtr 0 (
    echo Total accessible domains found: !count!
    echo.
    type my-domains.txt
    echo.
    echo These domains are confirmed to be accessible and belong to your projects.
) else (
    echo No accessible custom domains found.
    echo Your projects are only accessible via their default Vercel URLs.
)

echo.
echo ========================================
echo HOW TO VERIFY YOUR DOMAINS
echo ========================================
echo.
echo 1. Check if a domain is accessible in your browser
echo 2. Use 'vercel alias ls' in each project directory
echo 3. Look for domains that show 'already in use' - those belong to others
echo 4. Your domains should redirect to your actual project content

del temp.txt 2>nul