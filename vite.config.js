import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/landing/',
  build:{
    rollupoptions:{
      output:{
        outDir:'dist',
        assetFileNames:'assets/[name] - [hash][extname]'
      }
    }
  } ,
  assetsInclude:['**/*.png','**/*.jpg',]
});

