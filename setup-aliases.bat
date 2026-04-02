@echo off
echo Setting up aliases for all projects...
echo.

for /d %%i in (*) do (
    echo Setting up alias for: %%i
    
    cd %%i
    
    vercel alias set %%i.vercel.app
    
    cd ..
    echo.
)

echo ========================================
echo ALIAS SETUP COMPLETE
echo ========================================