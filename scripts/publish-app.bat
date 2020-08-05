COPY deploy\.publish ..\dist
REM Add GitHub Gist AccessToken GITHUB_TOKEN Environment variable or use alt variable with: -token %VAR_WITH_TOKEN%
PUSHD ..\dist
x publish -token %VAR_WITH_TOKEN%
POPD
COPY ..\dist\.publish deploy\
