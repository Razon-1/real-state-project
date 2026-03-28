@echo off
echo ========================================
echo   Edison Real Estate - First Time Setup
echo ========================================
echo.
echo This will install all dependencies.
echo This may take a few minutes...
echo.
pause

echo [1/3] Installing Frontend Dependencies...
cd frontend\client
call npm install
if errorlevel 1 (
    echo ERROR: Frontend installation failed!
    pause
    exit /b 1
)
echo Frontend dependencies installed!
echo.

echo [2/3] Installing Backend Dependencies...
cd ..\..\backend\server
call npm install
if errorlevel 1 (
    echo ERROR: Backend installation failed!
    pause
    exit /b 1
)
echo Backend dependencies installed!
echo.

echo [3/3] Creating environment file...
if not exist .env (
    copy .env.example .env
    echo .env file created! Please update it with your settings.
) else (
    echo .env file already exists.
)
echo.

cd ..\..

echo ========================================
echo   Setup Complete!
echo ========================================
echo.
echo Next steps:
echo 1. Update backend/server/.env with your settings
echo 2. Run start.bat to launch the application
echo.
pause
