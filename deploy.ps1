# Run this to build and push to GitHub.
# Then click Deploy in Plesk > Git to go live.

$env:PATH = "C:\Users\CDD_Tech\.config\herd\bin\nvm\v22.23.1;" + $env:PATH

Set-Location $PSScriptRoot

Write-Host "Building..." -ForegroundColor Cyan
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed. Aborting." -ForegroundColor Red
    exit 1
}

Write-Host "Committing and pushing..." -ForegroundColor Cyan
git add .
git commit -m "Deploy: update build."
git push origin main

Write-Host ""
Write-Host "Done! Now click Deploy in Plesk > Git." -ForegroundColor Green
