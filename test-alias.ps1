Write-Host "Testing alias setup for architecture-firm..."

Set-Location architecture-firm

$deployments = vercel ls 2>&1
$productionLine = $deployments | Select-String -Pattern "Production" | Select-Object -First 1

if ($productionLine) {
    # Extract the full URL from the line
    $latestDeployment = ($productionLine -split "\s+")[3]
    Write-Host "Latest deployment: $latestDeployment"
    
    if ($latestDeployment) {
        $aliasResult = vercel alias set $latestDeployment "architecture-firm.vercel.app" 2>&1
        Write-Host "Alias result: $aliasResult"
    } else {
        Write-Host "No deployment URL found in the output."
    }
} else {
    Write-Host "No production deployment found."
}

Set-Location ..
