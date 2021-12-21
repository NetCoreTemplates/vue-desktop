PUSHD ..
rd /q /s dist
md dist\assets
xcopy /E wwwroot\assets .\dist\assets\
app run _bundle.ss -to /dist
copy wwwroot\* dist
copy scripts\deploy\app.settings dist

dotnet publish -c release
md dist\plugins 
copy bin\release\net6.0\publish\MyApp.dll dist\plugins\
POPD