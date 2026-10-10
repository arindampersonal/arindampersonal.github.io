import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative base './' ensures assets load correctly regardless of whether the site
  // is hosted at a subpath (e.g. /arindam-dutta.github.io/) or custom domain root
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
});
