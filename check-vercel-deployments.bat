@echo off
echo Checking Vercel deployments for all projects...
echo.

set deployed=0
set notdeployed=0

for /d %%i in (*) do (
    echo Checking: %%i
    if exist "%%i\vercel.json" (
        cd %%i
        vercel ls | findstr "https://" >nul
        if errorlevel 1 (
            echo  %%i: NOT DEPLOYED
            set /a notdeployed+=1
        ) else (
            echo  %%i: DEPLOYED
            set /a deployed+=1
        )
        cd ..
    ) else if exist "%%i\.vercel" (
        cd %%i
        vercel ls | findstr "https://" >nul
        if errorlevel 1 (
            echo  %%i: NOT DEPLOYED
            set /a notdeployed+=1
        ) else (
            echo  %%i: DEPLOYED
            set /a deployed+=1
        )
        cd ..
    ) else (
        echo  %%i: NO VERCEL CONFIG
        set /a notdeployed+=1
    )
)

echo.
echo ========================================
echo DEPLOYMENT SUMMARY
echo ========================================
echo.
echo Total Projects: %deployed% + %notdeployed%
echo Deployed: %deployed%
echo Not Deployed: %notdeployed%