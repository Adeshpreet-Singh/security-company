@echo off
echo Setting up clean URLs for all projects...
echo.

for /d %%i in (*) do (
    echo Setting up clean URL for: %%i
    
    cd %%i
    
    vercel alias set %%i.vercel.app
    
    cd ..
    echo.
)

echo ========================================
echo CLEAN URL SETUP COMPLETE
echo ========================================
echo.
echo All projects now have clean URLs in the format:
echo https://project-name.vercel.app