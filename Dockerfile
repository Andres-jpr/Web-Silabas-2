# ==============================================================================
# SÍLABAS ENCANTADAS - DOCKERFILE LIGERO Y PORTÁTIL (NGINX ALPINE)
# Compatible con Windows, macOS (Intel y Apple Silicon M1/M2/M3) y Linux
# ==============================================================================

FROM nginx:alpine

# Etiquetas de metadatos
LABEL maintainer="Silabas Encantadas Educational Game"
LABEL description="Videojuego interactivo educativo para clasificación de sílabas"
LABEL version="3.2"

# Eliminar configuración por defecto de Nginx
RUN rm -rf /etc/nginx/conf.d/default.conf /usr/share/nginx/html/*

# Copiar configuración personalizada optimizada
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar los archivos de la aplicación web
COPY index.html /usr/share/nginx/html/
COPY css/ /usr/share/nginx/html/css/
COPY js/ /usr/share/nginx/html/js/

# Permisos seguros
RUN chmod -R 755 /usr/share/nginx/html

# Exponer el puerto estándar HTTP
EXPOSE 80

# Chequeo de salud del contenedor
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://127.0.0.1/ || exit 1

# Comando de inicio del servidor web Nginx
CMD ["nginx", "-g", "daemon off;"]
