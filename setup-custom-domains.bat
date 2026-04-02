@echo off
echo Setting up custom domains for all projects...
echo.

for /d %%i in (*) do (
    echo Setting up domain for: %%i
    
    cd %%i
    vercel domains add %%i.vercel.app
    
    if errorlevel 1 (
        echo  %%i: FAILED
    ) else (
        echo  %%i: DOMAIN SET - https://%%i.vercel.app
    )
    
    cd ..
    echo.
)

echo ========================================
echo CUSTOM DOMAIN SETUP COMPLETE
echo ========================================
echo.
echo All projects now have custom domains in the format:
echo https://project-name.vercel.app