@echo off
chcp 65001 > nul
setlocal EnableExtensions EnableDelayedExpansion

REM Carpeta donde esta el .bat
set DESTINO=%~dp0
set DESTINO=%DESTINO:~0,-1%

echo ==========================================
echo   CREAR ENLACE SIMBOLICO DE UNA CARPETA
echo ==========================================
echo.
echo El enlace se creara en:
echo %DESTINO%
echo.

REM Pedir ruta origen (con o sin comillas, da igual)
set /p ORIGEN=Introduce la RUTA COMPLETA de la carpeta REAL: 

REM Limpieza de comillas (todas)
set ORIGEN=%ORIGEN:"=%
set ORIGEN=%ORIGEN:‘=%
set ORIGEN=%ORIGEN:’=%
set ORIGEN=%ORIGEN:“=%
set ORIGEN=%ORIGEN:”=%

REM Pedir nombre del enlace
set /p NOMBRE=Introduce el NOMBRE que tendra la carpeta en este directorio: 

echo.
echo Creando enlace simbolico...
echo Origen : "%ORIGEN%"
echo Destino: "%DESTINO%\%NOMBRE%"
echo.

REM Validar que el origen existe
if not exist "%ORIGEN%" (
    echo ❌ ERROR: La carpeta origen no existe.
    pause
    exit /b 1
)

REM Crear el enlace
mklink /D "%DESTINO%\%NOMBRE%" "%ORIGEN%"

echo.
if %errorlevel%==0 (
    echo ✔ Enlace simbolico creado correctamente.
) else (
    echo ❌ Error al crear el enlace simbolico.
)

echo.
pause
