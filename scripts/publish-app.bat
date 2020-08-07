@echo off
rem Add GitHub Gist AccessToken GITHUB_TOKEN Environment variable or specify manually with: -token %TOKEN%
COPY deploy\.publish ..\dist
PUSHD ..\dist
x publish
POPD
COPY ..\dist\.publish deploy\
