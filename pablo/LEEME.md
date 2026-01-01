# Arduino Lab - Web App

Esta aplicación web está diseñada para funcionar directamente en GitHub Pages o cualquier servidor web estático modernas.

## 🚀 Cómo ejecutarlo

### Opción 1: GitHub Pages (Recomendado)
Sube estos archivos a tu repositorio. La web funcionará automáticamente gracias al sistema de `importmap` que hemos añadido, el cual carga las librerías 3D directamente desde un CDN sin necesidad de instalaciones complejas.

### Opción 2: En local (con VS Code)
Si tienes la extensión "Live Server" de VS Code:
1. Haz clic derecho en `index.html`.
2. Selecciona "Open with Live Server".

### Opción 3: En local (con Node.js)
Si prefieres usar la configuración existente:
1. Ejecuta `start.bat` (esto usará Vite).

## 🛠️ Solución de Problemas
Si los botones o pestañas no responden:
1. Asegúrate de estar ejecutando la web a través de un servidor (http://localhost...) y no abriendo el archivo directamente (file:///...).
2. Abre la consola del navegador (F12) para ver si hay errores de conexión.

## ✨ Características
- **Circuitos 3D**: Visualización interactiva de montajes de Arduino.
- **Inventario**: Catálogo de componentes disponibles.
- **Taller**: Zona de trabajo interactiva donde puedes arrastrar y soltar componentes para diseñar tus propios circuitos.
