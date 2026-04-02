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
    
    if ($hasMain -and $hasMaster) {
        Write-Host "Both main and master branches exist. Checking which to keep..."
        
        # Get commit counts for each branch
        $mainCommits = gh api "repos/Adeshpreet-Singh/$repo/commits?sha=main" --jq 'length'
        $masterCommits = gh api "repos/Adeshpreet-Singh/$repo/commits?sha=master" --jq 'length'
        
        Write-Host "Main commits: $mainCommits"
        Write-Host "Master commits: $masterCommits"
        
        # Get the first commit date for each branch
        $mainFirstCommit = gh api "repos/Adeshpreet-Singh/$repo/commits?sha=main&per_page=1" --jq '.[0].commit.committer.date'
        $masterFirstCommit = gh api "repos/Adeshpreet-Singh/$repo/commits?sha=master&per_page=1" --jq '.[0].commit.committer.date'
        
        Write-Host "Main first commit: $mainFirstCommit"
        Write-Host "Master first commit: $masterFirstCommit"
        
        # Compare commit counts and dates to decide which branch to keep
        $mainFirstDate = [DateTime]::Parse($mainFirstCommit)
        $masterFirstDate = [DateTime]::Parse($masterFirstCommit)
        
        if ($mainCommits -gt $masterCommits -or $mainFirstDate -gt $masterFirstDate) {
            Write-Host "Main branch appears to be newer/more recent. Deleting master and setting main as default..."
            
            # Delete master branch
            gh api -X DELETE "repos/Adeshpreet-Singh/$repo/git/refs/heads/master"
            Write-Host "Deleted master branch"
            
            # Set main as default
            gh repo edit "Adeshpreet-Singh/$repo" --default-branch main --accept-visibility-change-consequences
            Write-Host "Default branch set to main"
        } else {
            Write-Host "Master branch appears to be the original. Deleting main..."
            
            # Delete main branch
            gh api -X DELETE "repos/Adeshpreet-Singh/$repo/git/refs/heads/main"
            Write-Host "Deleted main branch"
            
            # Ensure master is default
            $currentDefault = gh repo view "Adeshpreet-Singh/$repo" --json defaultBranchRef --jq '.defaultBranchRef.name'
            if ($currentDefault -ne "master") {
                Write-Host "Setting master as default branch..."
                gh repo edit "Adeshpreet-Singh/$repo" --default-branch master --accept-visibility-change-consequences
                Write-Host "Default branch set to master"
            }
        }
    } elseif ($hasMain) {
        Write-Host "Only main branch exists"
        # Check if main is default, if not set it
        $currentDefault = gh repo view "Adeshpreet-Singh/$repo" --json defaultBranchRef --jq '.defaultBranchRef.name'
        if ($currentDefault -ne "main") {
            Write-Host "Setting main as default branch..."
            gh repo edit "Adeshpreet-Singh/$repo" --default-branch main --accept-visibility-change-consequences
            Write-Host "Default branch set to main"
        }
    } elseif ($hasMaster) {
        Write-Host "Only master branch exists"
        # Check if master is default, if not set it
        $currentDefault = gh repo view "Adeshpreet-Singh/$repo" --json defaultBranchRef --jq '.defaultBranchRef.name'
        if ($currentDefault -ne "master") {
            Write-Host "Setting master as default branch..."
            gh repo edit "Adeshpreet-Singh/$repo" --default-branch master --accept-visibility-change-consequences
            Write-Host "Default branch set to master"
        }
    } else {
        Write-Host "WARNING: No main or master branch found!"
    }
    
    Write-Host "Completed: $repo"
}