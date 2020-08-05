PUSHD ..
rd /q /s dist
md dist\assets
xcopy /E wwwroot\assets .\dist\assets\
x run _bundle.ss -to /dist
copy wwwroot\* dist
copy scripts\deploy\app.settings dist

dotnet publish -c release
md dist\plugins 
copy bin\release\netcoreapp3.1\publish\MyApp.dll dist\plugins\
POPD