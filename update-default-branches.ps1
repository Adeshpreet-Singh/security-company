# Repos to keep as-is (don't change default branch)
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
    "home-decor-shop", "hair-beauty-salon", "architecture-firm", "gym-fitness", "dairy-food-production",
    "agency-toolkit", "portfolio", "thread-and-node", "vaultfi-analytics", "heritage-craft-pickles",
    "luxe-interiors", "lumina-home", "flowstate-workspace", "spotify-slack-bot"
)

foreach ($repo in $allRepos) {
    Write-Host "`n=== Processing: $repo ==="
    
    # Skip if repo is in the keepAsIs list
    if ($keepAsIs -contains $repo) {
        Write-Host "SKIPPED - In exception list"
        continue
    }
    
    # Get current default branch
    $defaultBranch = gh repo view "Adeshpreet-Singh/$repo" --json defaultBranchRef --jq '.defaultBranchRef.name'
    Write-Host "Current default: $defaultBranch"
    
    # Get all branches
    $branches = gh api "repos/Adeshpreet-Singh/$repo/branches" --jq '.[].name'
    $branchArray = $branches -split "`n"
    
    # Check if main branch exists
    $hasMain = $branchArray -contains "main"
    $hasMaster = $branchArray -contains "master"
    
    Write-Host "Branches: $($branchArray -join ', ')"
    
    # Change default to master if currently main
    if ($defaultBranch -eq "main" -and $hasMaster) {
        Write-Host "Changing default branch from 'main' to 'master'..."
        gh repo edit "Adeshpreet-Singh/$repo" --default-branch master
        Write-Host "Default branch changed to master"
    }
    
    # Check if main branch should be deleted (only if it has initial commit)
    if ($hasMain -and $hasMaster) {
        Write-Host "Checking if main branch can be removed..."
        
        # Get the first commit on main
        $mainFirstCommit = gh api "repos/Adeshpreet-Singh/$repo/commits?sha=main&per_page=1" --jq '.[0].sha'
        
        # Get the first commit on master
        $masterFirstCommit = gh api "repos/Adeshpreet-Singh/$repo/commits?sha=master&per_page=1" --jq '.[0].sha'
        
        # Check if main branch is behind or same as master
        $mainBehind = gh api "repos/Adeshpreet-Singh/$repo/compare/master...main" --jq '.behind_by'
        
        if ($mainBehind -eq 0 -or $mainFirstCommit -eq $masterFirstCommit) {
            Write-Host "Main branch is redundant, deleting..."
            gh api -X DELETE "repos/Adeshpreet-Singh/$repo/git/refs/heads/main"
            Write-Host "Deleted main branch"
        } else {
            Write-Host "Main branch has unique commits, keeping it"
        }
    }
    
    Write-Host "Completed: $repo"
}