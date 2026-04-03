# Unified Project Management Script
# Combines deployment, domain setup, and verification

param(
    [Parameter(Mandatory=$false)]
    [ValidateSet("deploy", "domains", "verify", "status")]
    [string]$Action = "status"
)

$ErrorActionPreference = "Stop"

function Show-Status {
    Write-Host "`nPROJECT STATUS" -ForegroundColor Cyan
    Write-Host "==================" -ForegroundColor Cyan
    
    $projects = Get-ChildItem -Directory | Where-Object { 
        $_.Name -notmatch '^\.' -and 
        (Test-Path "$($_.FullName)\package.json")
    }
    
    Write-Host "`nTotal Projects: $($projects.Count)" -ForegroundColor White
    
    # Check Vercel deployments
    Write-Host "`nChecking Vercel Deployments..." -ForegroundColor Yellow
    try {
        $vercelProjects = vercel ls 2>$null | Select-String -Pattern "\.vercel\.app" | Measure-Object
        Write-Host "  Deployed: $($vercelProjects.Count) projects" -ForegroundColor Green
    } catch {
        Write-Host "  Could not retrieve Vercel status" -ForegroundColor Yellow
    }
    
    # Check GitHub
    Write-Host "`nChecking GitHub..." -ForegroundColor Yellow
    $githubRepos = gh repo list --limit 100 --json name 2>&1 | ConvertFrom-Json
    Write-Host "  Repositories: $($githubRepos.Count)" -ForegroundColor Green
}

function Deploy-Projects {
    Write-Host "`nDEPLOYING PROJECTS" -ForegroundColor Cyan
    
    $projects = Get-ChildItem -Directory | Where-Object { 
        $_.Name -notmatch '^\.' -and 
        (Test-Path "$($_.FullName)\package.json")
    }
    
    $deployed = 0
    $failed = 0
    
    foreach ($proj in $projects) {
        Write-Host "`nDeploying $($proj.Name)..." -ForegroundColor Yellow
        
        try {
            Set-Location $proj.FullName
            
            # Build first
            $buildResult = npm run build 2>&1
            if ($LASTEXITCODE -ne 0) {
                Write-Host "  X Build failed" -ForegroundColor Red
                $failed++
                continue
            }
            
            # Deploy to Vercel
            $deployResult = vercel --prod --yes 2>&1
            if ($LASTEXITCODE -eq 0) {
                Write-Host "  Deployed successfully" -ForegroundColor Green
                $deployed++
            } else {
                Write-Host "  X Deployment failed" -ForegroundColor Red
                $failed++
            }
        }
        catch {
            Write-Host "  X Error: $_" -ForegroundColor Red
            $failed++
        }
    }
    
    Write-Host "`nDEPLOYMENT SUMMARY" -ForegroundColor Cyan
    Write-Host "  Successful: $deployed" -ForegroundColor Green
    Write-Host "  Failed: $failed" -ForegroundColor Red
}

function Setup-Domains {
    Write-Host "`nSETTING UP CUSTOM DOMAINS" -ForegroundColor Cyan
    
    # This would contain domain setup logic
    Write-Host "  Domain setup functionality to be implemented" -ForegroundColor Yellow
}

function Verify-Deployments {
    Write-Host "`nVERIFYING DEPLOYMENTS" -ForegroundColor Cyan
    
    $vercelOutput = vercel ls 2>&1
    $readyCount = ($vercelOutput | Select-String -Pattern "Ready").Count
    $errorCount = ($vercelOutput | Select-String -Pattern "Error").Count
    
    Write-Host "  Ready: $readyCount projects" -ForegroundColor Green
    Write-Host "  Errors: $errorCount projects" -ForegroundColor Red
    
    if ($errorCount -gt 0) {
        Write-Host "`nProjects with errors:" -ForegroundColor Yellow
        $vercelOutput | Select-String -Pattern "Error" -Context 0,1
    }
}

# Main execution
Write-Host "PROJECT MANAGEMENT TOOL" -ForegroundColor Magenta
Write-Host "==========================" -ForegroundColor Magenta

switch ($Action) {
    "deploy" { Deploy-Projects }
    "domains" { Setup-Domains }
    "verify" { Verify-Deployments }
    "status" { Show-Status }
}

Write-Host "`nOperation complete!" -ForegroundColor Green