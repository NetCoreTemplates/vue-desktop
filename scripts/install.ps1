$zipUrl  = "https://org.example/MyApp.zip"
$appName = "MyApp"

$TempFile = New-TemporaryFile
Invoke-WebRequest $zipUrl -OutFile $TempFile

$Zip = "$(Join-Path $TempFile.Directory.FullName $TempFile.BaseName).zip"
Move-Item $TempFile $Zip

Remove-Item $(Join-Path $TempFile.Directory.FullName $TempFile.BaseName) -Recurse -ErrorAction Ignore
Expand-Archive -Force $Zip $(Join-Path $TempFile.Directory.FullName $TempFile.BaseName)

$AppDir = $(Get-ChildItem -Path $(Join-Path $TempFile.Directory.FullName $TempFile.BaseName) | Select-Object -First 1)

Remove-Item "$env:LOCALAPPDATA\$appName" -Recurse -ErrorAction Ignore
Move-Item $AppDir.FullName "$env:LOCALAPPDATA\$appName"

# Copy Shortcut to Desktop
Copy-Item $env:LOCALAPPDATA\$appName\dist\*.lnk -Destination $env:USERPROFILE\Desktop 

# Clean up
Remove-Item $Zip -Recurse -ErrorAction Ignore
Remove-Item $(Join-Path $TempFile.Directory.FullName $TempFile.BaseName) -Recurse -ErrorAction Ignore
