// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',  // build files to dist
    emptyOutDir: true,  // clear the files in dist when building
  },
  server: {
    port: 3000,
  }
});