# Fix premium animations for all projects with cheap effects

$projects = @(
    "gym-fitness",
    "real-estate-agent", 
    "fashion-brand",
    "dental-medical-clinic",
    "wedding-venue",
    "photography-studio",
    "spa-wellness",
    "hotel-chain",
    "car-dealer",
    "furniture-store",
    "makeup-artist",
    "hair-beauty-salon"
)

Write-Host "Fixing premium animations for $($projects.Count) projects..." -ForegroundColor Cyan
Write-Host ""

$successCount = 0
$failCount = 0
$failedProjects = @()

foreach ($project in $projects) {
    Write-Host "Fixing: $project" -NoNewline
    
    if (Test-Path $project) {
        Set-Location $project
        
        # Find the page.tsx file
        $pageFile = if (Test-Path "src/app/page.tsx") { "src/app/page.tsx" } else { "app/page.tsx" }
        
        if (Test-Path $pageFile) {
            # Read the file content
            $content = Get-Content $pageFile -Raw
            
            # Find and replace the cheap animation block
            # Look for the pattern with animated orbs
            if ($content -match 'Animated Background|Animated Gradient Orbs|absolute inset-0 overflow-hidden') {
                # Create the premium replacement
                $premiumAnimation = @'
      {/* Premium Gradient Mesh Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-gray-950 to-slate-950" />
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at `${50 + mousePos.x * 0.008}`% `${50 + mousePos.y * 0.008}`%, rgba(99, 102, 241, 0.12) 0%, transparent 50%),
              radial-gradient(ellipse 60% 40% at `${30 - mousePos.x * 0.004}`% `${70 - mousePos.y * 0.004}`%, rgba(139, 92, 246, 0.08) 0%, transparent 50%),
              radial-gradient(ellipse 40% 60% at `${80 + mousePos.x * 0.006}`% `${20 + mousePos.y * 0.006}`%, rgba(236, 72, 153, 0.06) 0%, transparent 50%)
            `
          }}
        />
      </div>

      {/* Subtle Grid Pattern */}
      <div className="fixed inset-0 opacity-[0.015]">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)', 
          backgroundSize: '60px 60px' 
        }} />
      </div>

      {/* Elegant Floating Particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `rgba(${Math.random() > 0.6 ? '99, 102, 241' : Math.random() > 0.3 ? '139, 92, 246' : '236, 72, 153'}, ${0.08 + Math.random() * 0.12})`,
              animation: `float ${10 + Math.random() * 15}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      {/* Accent Lines */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute h-px bg-gradient-to-r from-transparent via-indigo-500/15 to-transparent"
          style={{ 
            top: '25%', 
            left: '5%', 
            right: '5%',
            transform: `translateY(${mousePos.y * 0.015}px)`
          }}
        />
        <div 
          className="absolute h-px bg-gradient-to-r from-transparent via-violet-500/10 to-transparent"
          style={{ 
            top: '75%', 
            left: '15%', 
            right: '15%',
            transform: `translateY(${-mousePos.y * 0.01}px)`
          }}
        />
      </div>
'@
                
                # Replace the cheap animation block
                # This regex finds the animated background section and replaces it
                $pattern = '(?s)/\* Animated Background \*/.*?</div>\s*</div>'
                $content = $content -replace $pattern, $premiumAnimation
                
                # Also replace other common patterns
                $pattern2 = '(?s)<div className="absolute inset-0 overflow-hidden">.*?</div>'
                $content = $content -replace $pattern2, ''
                
                # Write the fixed content back
                Set-Content -Path $pageFile -Value $content
                
                Write-Host " FIXED" -ForegroundColor Green
                $successCount++
            } else {
                Write-Host " NO CHEAP ANIMATIONS FOUND" -ForegroundColor Yellow
                $successCount++
            }
        } else {
            Write-Host " NO PAGE.TSX FOUND" -ForegroundColor Red
            $failCount++
            $failedProjects += $project
        }
        
        Set-Location ..
    } else {
        Write-Host " DIRECTORY NOT FOUND" -ForegroundColor Red
        $failCount++
        $failedProjects += $project
    }
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "FIX SUMMARY" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Total Projects: $($projects.Count)" -ForegroundColor White
Write-Host "Successfully Fixed: $successCount" -ForegroundColor Green
Write-Host "Failed: $failCount" -ForegroundColor Red
Write-Host ""

if ($failCount -gt 0) {
    Write-Host "Failed Projects:" -ForegroundColor Red
    foreach ($proj in $failedProjects) {
        Write-Host "  - $proj" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "All projects processed!" -ForegroundColor Cyan