@echo off

if not exist .git (
    git init
    git remote add origin https://github.com/Tarodictrl/better-genshin-impact-map-appsample
)

git pull origin main
pause