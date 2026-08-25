import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Rutas relativas para que funcione en cualquier subcarpeta de GitHub Pages (ej. /prueba/)
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
});
