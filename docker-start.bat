@echo off
title Silabas Encantadas - Iniciar en Docker
echo ========================================================
echo   SILABAS ENCANTADAS - INICIANDO EN DOCKER (PUERTO 8080)
echo ========================================================
echo.

docker --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Docker no esta instalado o no se encuentra en el PATH.
    echo Por favor instala Docker Desktop desde https://www.docker.com/
    pause
    exit /b 1
)

echo Construyendo e iniciando el contenedor...
docker compose up -d --build

if %errorlevel% equ 0 (
    echo.
    echo ========================================================
    echo   JUEGO INICIADO CORRECTAMENTE!
    echo   Abre tu navegador en: http://localhost:8080/
    echo ========================================================
    start http://localhost:8080/
) else (
    echo.
    echo [ERROR] Ocurrio un fallo al iniciar Docker Compose.
)

pause
