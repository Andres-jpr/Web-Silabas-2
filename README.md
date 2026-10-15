# ✨ Sílabas Encantadas - Videojuego Educativo Interactivo

Videojuego interactivo de aventura educativa para aprender la clasificación fonética y silábica de las palabras en español (**Monosílabas [1]**, **Bisílabas [2]**, **Trisílabas [3]** y **Polisílabas [4+]**).

Inspirado en el diseño lúdico y visual de *Árbol del ABC* y *Duolingo*, protagonizado por el ratón explorador **Silabín**.

---

## 🚀 Características Principales

- **3 Niveles de Edad Graduados (Hasta 10 años)**:
  - 🐣 **5 - 6 años**: 25 palabras cortas, familiares y directas (1 y 2 sílabas).
  - 🚀 **7 - 8 años**: 26 palabras intermedias (2, 3 y 4 sílabas).
  - 🌟 **9 - 10 años**: 28 palabras avanzadas sobre ciencia, geografía y tecnología (3, 4 y 5+ sílabas).
- **Más de 75 palabras únicas** con barajado aleatorio (Fisher-Yates) para que nunca se repitan de inmediato.
- **Ritmo pedagógico fluido**: Silabín habla con pronunciación clara, voz amigable y tiempos generosos que nunca cortan la oración.
- **Fichas interactivas táctiles**: El niño puede tocar cada sílaba individualmente para escuchar cómo suena por separado.
- **Animación de Palmadas en Pantalla (👏)**: Conteo visual y auditivo paso a paso con resplandor dorado de guía en la piedra correcta.
- **Sonidos temáticos y música**: Síntesis Web Audio procedural para cada palabra (maullido, ladrido, cohete, campanitas, etc.).
- **Modo Pantalla Completa (⛶)**: Ideal para pizarras digitales interactivas, tablets y aulas.
- **Diseño 100% Responsive**: Se adapta automáticamente a cualquier monitor, tablet o teléfono móvil.

---

## 🐳 Ejecución con Docker (En cualquier computadora)

La aplicación está completamente dockerizada usando una imagen ultra-ligera de **Nginx Alpine** (~20 MB), compatible con **Windows**, **macOS** (Intel y Apple Silicon M1/M2/M3) y **Linux**.

### Opción 1: Con Docker Compose (Recomendado)

En la raíz del proyecto, ejecuta:

```bash
docker compose up -d --build
```

Luego abre tu navegador en:
👉 **`http://localhost:8080/`**

Para detener el contenedor:
```bash
docker compose down
```

### Opción 2: Scripts de 1 solo clic

- **En Windows**: Haz doble clic en `docker-start.bat`.
- **En Linux o macOS**: Ejecuta `./docker-start.sh`.

### Opción 3: Con Docker CLI directo

```bash
# Construir la imagen
docker build -t silabas-encantadas .

# Ejecutar el contenedor
docker run -d -p 8080:80 --name silabas_app silabas-encantadas
```

---

## 💻 Ejecución Local sin Docker (PowerShell en Windows)

Si prefieres ejecutarlo localmente sin Docker:

```powershell
powershell -ExecutionPolicy Bypass -File server.ps1
```

Abre en tu navegador:
👉 **`http://localhost:8080/`**

---

## ⌨️ Atajos de Teclado

- `1`, `2`, `3`, `4`: Seleccionar piedras de sílabas.
- `Barra Espaciadora`: Escuchar pronunciación y sonido.
- `P`: Activar palmadas y desglose silábico.
- `S`: Pasar a la siguiente palabra.
- `F11` o botón `⛶`: Alternar pantalla completa.
