import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Repository name for GitHub Pages base path
const REPO_NAME = 'TheInnerCodePlumber';

export default defineConfig({
  // Base path for GitHub Pages deployment (use '/' for local development)
  base: process.env.NODE_ENV === 'production' ? `/${REPO_NAME}/` : '/',
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  }
});
