/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Base path configuration for GitHub Pages.
 *
 * - Project site (https://USERNAME.github.io/portfolio/): base must be '/portfolio/'
 * - User site (https://USERNAME.github.io/):              base must be '/'
 *
 * Override without editing this file by setting the VITE_BASE_PATH
 * environment variable at build time, e.g.:
 *   VITE_BASE_PATH=/ npm run build
 */
const base = process.env.VITE_BASE_PATH ?? '/portfolio/';

export default defineConfig({
  base,
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/tests/setup.ts',
    css: false,
  },
});
