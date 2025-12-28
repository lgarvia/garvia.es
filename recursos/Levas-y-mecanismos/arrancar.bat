@echo off
setlocal
echo ===================================================
echo   ARRANCANDO SIMULADOR DE LEVAS (ANTIGRAVITY)
echo ===================================================
echo.

REM Comprobamos si existe node_modules
if exist node_modules goto :start_server

echo [Antigravity] Dependencias no encontradas.
echo [Antigravity] Instalando paquetes necesarios...
call npm install
if errorlevel 1 (
    echo.
    echo [ERROR] Fallo la instalacion de dependencias.
    echo Verifique su instalacion de Node.js.
    pause
    exit /b
)

:start_server
echo.
echo [Antigravity] Iniciando servidor...
echo El navegador deberia abrirse. Si no, vaya a http://localhost:3000
echo.
call npm run dev -- --open
if errorlevel 1 (
    echo.
    echo [ERROR] El servidor se cerro con error.
)
echo.
echo Presione una tecla para cerrar...
pause
