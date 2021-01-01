@echo off
if not exist ..\dist call pack-app.bat

if exist del ..\MyApp.zip
..\scripts\7za.exe -tzip a ..\MyApp.zip ..\dist\*
