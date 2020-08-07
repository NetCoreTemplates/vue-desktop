@echo off
REM Add GitHub Gist AccessToken GITHUB_TOKEN Environment variable or use alt variable with: -token %VAR_WITH_TOKEN%
IF EXIST deploy\.publish COPY deploy\.publish ..\dist
PUSHD ..\dist
x publish
POPD
COPY ..\dist\.publish deploy\
