#!/usr/bin/env bash
# Script de inicio rápido en Docker para Linux y macOS

echo "========================================================"
echo "  SILABAS ENCANTADAS - INICIANDO EN DOCKER (PUERTO 8080)"
echo "========================================================"

if ! command -v docker &> /dev/null; then
    echo "[ERROR] Docker no está instalado en este sistema."
    echo "Por favor instala Docker desde https://www.docker.com/"
    exit 1
fi

echo "Construyendo e iniciando contenedor..."
docker compose up -d --build

if [ $? -eq 0 ]; then
    echo "========================================================"
    echo "  JUEGO INICIADO CORRECTAMENTE!"
    echo "  Abre tu navegador en: http://localhost:8080/"
    echo "========================================================"

    # Intentar abrir el navegador en Linux o macOS
    if command -v xdg-open &> /dev/null; then
        xdg-open http://localhost:8080/
    elif command -v open &> /dev/null; then
        open http://localhost:8080/
    fi
else
    echo "[ERROR] Falló el inicio de Docker Compose."
fi
