# Lingeshwar Kulal Portfolio - Setup Script

Write-Host "================================" -ForegroundColor Cyan
Write-Host "Lingeshwar Kulal Portfolio Setup" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Step 1: Checking Node.js and npm..." -ForegroundColor Yellow
node --version
npm --version
Write-Host ""

Write-Host "Step 2: Cleaning npm cache..." -ForegroundColor Yellow
npm cache clean --force
Write-Host ""

Write-Host "Step 3: Installing dependencies..." -ForegroundColor Yellow
npm install
Write-Host ""

if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Setup completed successfully!" -ForegroundColor Green
    Write-Host ""
    Write-Host "IMPORTANT NEXT STEPS:" -ForegroundColor Yellow
    Write-Host "1. Add your profile photo to: src\assets\profile.jpg" -ForegroundColor White
    Write-Host "2. Run: npm run dev" -ForegroundColor White
    Write-Host "3. Open: http://localhost:5173" -ForegroundColor White
    Write-Host ""
} else {
    Write-Host "✗ Installation encountered errors. Please check the output above." -ForegroundColor Red
    Write-Host ""
}

Write-Host "Press any key to continue..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
