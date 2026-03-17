import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/plans': 'http://localhost:5000',
      '/testimonials': 'http://localhost:5000',
      '/contact': 'http://localhost:5000',
    },
  },
});
