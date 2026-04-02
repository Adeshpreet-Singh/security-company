@echo off
echo Setting up unique clean URLs for all projects...
echo.

for /d %%i in (*) do (
    echo Setting up unique URL for: %%i
    
    cd %%i
    
    REM Try the original name first
    vercel alias set %%i.vercel.app
    
    if errorlevel 1 (
        echo  %%i: Original name taken, trying variations...
        
        REM Try with suffixes
        for %%s in (app site web io dev pro hub co) do (
            set newName=%%i-%%s
            vercel rename %%newName%
            vercel alias set %%newName%.vercel.app
            
            if not errorlevel 1 (
                echo  %%i: RENAMED TO %%newName% - https://%%newName%.vercel.app
                goto :next
            )
        )
        
        echo  %%i: FAILED TO SET UNIQUE URL
    ) else (
        echo  %%i: UNIQUE URL SET - https://%%i.vercel.app
    )
    
    :next
    cd ..
    echo.
)

echo ========================================
echo UNIQUE URL SETUP COMPLETE
echo ========================================