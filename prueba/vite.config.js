import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Si se va a desplegar bajo una subcarpeta en GitHub Pages (ej. /garvia.es/prueba/ o similar)
  // base: './',
});
