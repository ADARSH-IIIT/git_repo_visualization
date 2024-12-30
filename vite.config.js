import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',  // Add this to ensure proper base URL
  build: {
    rollupOptions: {
      external: ['d3'],  // Remove react-router-dom from external
    },
  },
});