@echo off
SetLocal EnableExtensions EnableDelayedExpansion

cd /d %~dp0

set HERE=%~dp0

set BUSYBOX="%HERE%App\Utils\busybox.exe"
set CURL="%HERE%App\Utils\curl.exe"
set SZIP="%HERE%App\Utils\7za.exe"

:::::: NETWORK CHECK

%CURL% -is www.google.com | %BUSYBOX% grep -q "200 OK"

if "%ERRORLEVEL%" == "1" (
  echo Check Your Network Connection
  pause
  exit
)

::::::::::::::::::::

:::::: ARCH

if "%PROCESSOR_ARCHITECTURE%" == "x86" (
  set FFARCH=win
) else if "%PROCESSOR_ARCHITECTURE%" == "AMD64" (
  set FFARCH=win64
) else exit

:: set FFARCH=win
:: set FFARCH=win64

::::::::::::::::::::

:::::: LANGUAGE https://ftp.mozilla.org/pub/firefox/releases/latest/README.txt

set FFLANG=en-US

::::::::::::::::::::

:::::: RELEASE CHANNEL

set FF-ESR="https://download.mozilla.org/?product=firefox-esr-latest-ssl&os=%FFARCH%&lang=%FFLANG%"
set FF-ESR-NEXT="https://download.mozilla.org/?product=firefox-esr-next-latest-ssl&os=%FFARCH%&lang=%FFLANG%"
set FF-RELEASE="https://download.mozilla.org/?product=firefox-latest-ssl&os=%FFARCH%&lang=%FFLANG%"

::::::::::::::::::::

:::::: VERSION CHECK

%CURL% -s -I -k %FF-ESR-NEXT% | %BUSYBOX% grep -o releases/[0-9.]\+[0-9] | %BUSYBOX% cut -d "/" -f2 > version.txt

for /f %%V in ('more version.txt') do (set VERSION=%%V)
echo Latest: %VERSION%

if exist "version.txt" del "version.txt" > NUL

:: echo "%App\FFox\firefox.exe -v | more"

::::::::::::::::::::

:::::: RUNNING PROCESS CHECK

for /f %%F in ('tasklist /NH /FI "IMAGENAME eq firefox.exe"') do if %%F == firefox.exe (
  echo Close Firefox To Update
  pause
  exit
)

::::::::::::::::::::

:::::: GET LATEST VERSION

if exist "TMP" rmdir "TMP" /s /q
mkdir "TMP"

%CURL% -# -k -L %FF-ESR-NEXT% -o TMP\FirefoxSetup_%VERSION%esr.exe
:: certUtil -hashfile TMP\FirefoxSetup_%VERSION%esr.exe SHA256 | findstr ^[0-9a-f]$ > TMP\FirefoxSetup_%VERSION%esr.sha256

::::::::::::::::::::

:::::: UNPACKING

if exist "App\FFox" rmdir "App\FFox" /s /q

%SZIP% x -aoa TMP\FirefoxSetup_%VERSION%esr.exe -o"App\" "core\" > NUL

rename App\core FFox

::::::::::::::::::::

rmdir "TMP" /s /q

echo Done

:::::: POLICIES

if not exist "App\FFox\distribution" mkdir "App\FFox\distribution"

echo { > "App\FFox\distribution\policies.json"
echo "policies": >> "App\FFox\distribution\policies.json"
echo { >> "App\FFox\distribution\policies.json"
echo "DisableBuiltinPDFViewer": false, >> "App\FFox\distribution\policies.json"
echo "DisableAppUpdate": true, >> "App\FFox\distribution\policies.json"
echo "DisableFirefoxStudies": true, >> "App\FFox\distribution\policies.json"
echo "DisableTelemetry": true, >> "App\FFox\distribution\policies.json"
echo "DisableFeedbackCommands": true, >> "App\FFox\distribution\policies.json"
echo "DisableFirefoxAccounts": true, >> "App\FFox\distribution\policies.json"
echo "DisablePocket": true, >> "App\FFox\distribution\policies.json"
echo "DisableSetDesktopBackground": true, >> "App\FFox\distribution\policies.json"
echo "DontCheckDefaultBrowser": true, >> "App\FFox\distribution\policies.json"
echo "NoDefaultBookmarks": true, >> "App\FFox\distribution\policies.json"
echo "DisableFirefoxScreenshots": true, >> "App\FFox\distribution\policies.json"
echo "DisableSystemAddonUpdate": true, >> "App\FFox\distribution\policies.json"
echo "SearchSuggestEnabled": false, >> "App\FFox\distribution\policies.json"
echo "DisableProfileImport": true  >> "App\FFox\distribution\policies.json"
echo } >> "App\FFox\distribution\policies.json"
echo } >> "App\FFox\distribution\policies.json"

::::::::::::::::::::

del "App\FFox\crashreporter.exe"
del "App\FFox\crashreporter.ini"
del "App\FFox\maintenanceservice_installer.exe"
del "App\FFox\maintenanceservice.exe"
del "App\FFox\pingsender.exe"
del "App\FFox\updater.exe"
del "App\FFox\updater.ini"
del "App\FFox\update-settings.ini"
rmdir "App\FFox\uninstall" /s /q

pause
