import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      strict: false,
    },
    // Configuración de rutas de fallback para manejar el enrutamiento en el lado del cliente
    rewrite: (path) => {
      console.log(path);
      if (path.startsWith('/dist/')) {
        return path.replace('/dist/', '/index.html') || '/index.html';
      } else {
        return '/index.html';
      }
    },
  },
});
