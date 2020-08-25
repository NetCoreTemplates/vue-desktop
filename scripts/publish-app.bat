@echo off
REM Add GitHub Gist AccessToken GITHUB_TOKEN Environment variable or use alt variable with: -token %VAR_WITH_TOKEN%
COPY deploy\* ..\dist
PUSHD ..\dist
app publish
POPD
COPY ..\dist\.publish deploy\
