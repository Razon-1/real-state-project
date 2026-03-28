@echo off
echo ========================================
echo   Edison Real Estate - Starting Servers
echo ========================================
echo.

echo [1/4] Checking Node.js installation...
node --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js is not installed!
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)
echo Node.js found!
echo.

echo [2/4] Starting Backend Server...
start "Backend Server" cmd /k "cd backend\server && npm start"
timeout /t 3 >nul
echo Backend server starting on http://localhost:5000
echo.

echo [3/4] Starting Frontend Server...
start "Frontend Server" cmd /k "cd frontend\client && npm start"
echo Frontend server starting on http://localhost:3000
echo.

echo [4/4] Opening browser...
timeout /t 5 >nul
start http://localhost:3000
echo.

echo ========================================
echo   Servers are running!
echo ========================================
echo.
echo Frontend: http://localhost:3000
echo Backend:  http://localhost:5000
echo.
echo Press Ctrl+C in each window to stop servers
echo.
pause
