@echo off
echo ========================================
echo   Edison Real Estate - UI Design
echo ========================================
echo.

echo Checking Node.js installation...
node --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js is not installed!
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)
echo Node.js found!
echo.

echo Starting Frontend Server...
cd frontend\client
start "Edison Real Estate" cmd /k "npm start"

echo.
echo ========================================
echo   Server is starting...
echo ========================================
echo.
echo The website will open automatically at:
echo http://localhost:3000
echo.
echo Press Ctrl+C in the window to stop the server
echo.
pause
