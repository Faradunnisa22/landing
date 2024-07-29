import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/landing/', // Ensure this matches your GitHub Pages repository name
});

