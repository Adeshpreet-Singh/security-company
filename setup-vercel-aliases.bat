@echo off
echo Setting up Vercel aliases for all projects...
echo.

for /d %%i in (*) do (
    echo Setting up alias for: %%i
    
    cd %%i
    
    REM Get the latest production deployment URL
    for /f "tokens=3" %%a in ('vercel ls ^| findstr "Production" ^| findstr /v "Error"') do (
        set latestDeployment=%%a
        goto :found
    )
    :found
    
    if defined latestDeployment (
        vercel alias set %latestDeployment% %%i.vercel.app
        if errorlevel 1 (
            echo  %%i: FAILED
        ) else (
            echo  %%i: ALIAS SET - https://%%i.vercel.app
        )
    ) else (
        echo  %%i: NO PRODUCTION DEPLOYMENT FOUND
    )
    
    cd ..
    echo.
)

echo ========================================
echo VERCEL ALIAS SETUP COMPLETE
echo ========================================
echo.
echo All projects now have aliases in the format:
echo https://project-name.vercel.app