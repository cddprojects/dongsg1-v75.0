# Run this to build and push the production dist/ directory to GitHub.
# Plesk must run: sh plesk-deploy.sh

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
Write-Host "Required Plesk deployment action: sh plesk-deploy.sh" -ForegroundColor Yellow
