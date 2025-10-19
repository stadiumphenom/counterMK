@echo off
cd /d %~dp0

REM Auto stage all changes
git add .

REM Default commit message (you can customize)
set /p msg="Enter commit message: "
if "%msg%"=="" set msg=update

REM Commit with message
git commit -m "%msg%"

REM Push to GitHub
git push origin main

pause
