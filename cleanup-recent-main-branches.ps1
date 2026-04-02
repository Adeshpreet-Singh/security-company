# Repos to keep as-is (don't change)
$keepAsIs = @(
    "thread-and-node", "vaultfi-analytics", "heritage-craft-pickles", "luxe-interiors",
    "lumina-home", "flowstate-workspace", "spotify-slack-bot", "agency-toolkit", "portfolio"
)

$allRepos = @(
    "manufacturing-b2b", "real-estate-agent", "fashion-brand", "tech-agency", "business-coach",
    "veterinary-clinic", "boutique-hotel", "dental-medical-clinic", "coworking-space", "spa-wellness",
    "fine-dining-restaurant", "organic-farm", "photography-studio", "barber-shop", "health-food-organic",
    "resort-villa", "pest-control", "real-estate-developer", "makeup-artist", "cleaning-services",
    "furniture-store", "yoga-studio", "cafe-casual-restaurant", "jewelry-store", "electronics-store",
    "design-studio", "bakery-cake-shop", "hotel-chain", "event-planner", "saas-product",
    "pet-store-vet", "tattoo-studio", "coaching-institute", "fashion-jewelry", "clothing-boutique",
    "ca-accounting", "hostel-budget", "auto-workshop", "life-wellness-coach", "law-firm",
    "construction-company", "school-education", "wedding-venue", "car-dealer", "ecommerce-general",
    "home-decor-shop", "hair-beauty-salon", "architecture-firm", "gym-fitness", "dairy-food-production"
)

$cutoffTime = (Get-Date).AddHours(-2)

foreach ($repo in $allRepos) {
    Write-Host "`n=== Processing: $repo ==="
    
    # Skip if repo is in the keepAsIs list
    if ($keepAsIs -contains $repo) {
        Write-Host "SKIPPED - In exception list"
        continue
    }
    
    # Get all branches
    $branches = gh api "repos/Adeshpreet-Singh/$repo/branches" --jq '.[].name'
    $branchArray = $branches -split "`n"
    
    $hasMain = $branchArray -contains "main"
    $hasMaster = $branchArray -contains "master"
    
    Write-Host "Branches: $($branchArray -join ', ')"
    
    if ($hasMain) {
        # Get main branch info including creation date
        $mainInfo = gh api "repos/Adeshpreet-Singh/$repo/branches/main" --jq '{commit: .commit.sha, protected: .protected}'
        $mainCommit = ($mainInfo | ConvertFrom-Json).commit
        
        # Get the commit date for the main branch tip
        $mainCommitDate = gh api "repos/Adeshpreet-Singh/$repo/commits/$mainCommit" --jq '.commit.committer.date'
        $mainCommitDateTime = [DateTime]::Parse($mainCommitDate)
        
        Write-Host "Main branch commit date: $mainCommitDateTime"
        Write-Host "Cutoff time: $cutoffTime"
        
        if ($mainCommitDateTime -gt $cutoffTime) {
            Write-Host "Main branch was created within 2 hours!"
            
            if ($hasMaster) {
                Write-Host "Master branch exists, checking if main can be removed..."
                
                # Check if main is behind master
                $compareResult = gh api "repos/Adeshpreet-Singh/$repo/compare/master...main" --jq '{ahead_by: .ahead_by, behind_by: .behind_by}'
                $aheadBy = ($compareResult | ConvertFrom-Json).ahead_by
                $behindBy = ($compareResult | ConvertFrom-Json).behind_by
                
                Write-Host "Main is ahead by: $aheadBy, behind by: $behindBy"
                
                if ($aheadBy -eq 0) {
                    Write-Host "Main branch has no unique commits, deleting..."
                    
                    # Delete main branch
                    gh api -X DELETE "repos/Adeshpreet-Singh/$repo/git/refs/heads/main"
                    Write-Host "Deleted main branch"
                    
                    # Set master as default if not already
                    $currentDefault = gh repo view "Adeshpreet-Singh/$repo" --json defaultBranchRef --jq '.defaultBranchRef.name'
                    if ($currentDefault -ne "master") {
                        Write-Host "Setting master as default branch..."
                        gh repo edit "Adeshpreet-Singh/$repo" --default-branch master --accept-visibility-change-consequences
                        Write-Host "Default branch set to master"
                    }
                } else {
                    Write-Host "Main branch has unique commits ($aheadBy ahead), keeping it"
                }
            } else {
                Write-Host "No master branch exists, keeping main as default"
            }
        } else {
            Write-Host "Main branch is older than 2 hours, keeping it"
        }
    } else {
        Write-Host "No main branch found"
    }
    
    Write-Host "Completed: $repo"
}