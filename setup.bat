@echo off
echo ================================
echo Lingeshwar Kulal Portfolio Setup
echo ================================
echo.

echo Step 1: Cleaning npm cache...
call npm cache clean --force

echo.
echo Step 2: Installing dependencies...
call npm install

echo.
echo Step 3: Setup complete!
echo.
echo IMPORTANT: Add your profile photo to src\assets\profile.jpg
echo.
echo To start the development server, run:
echo npm run dev
echo.
pause
