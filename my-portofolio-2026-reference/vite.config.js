import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  assetsInclude: ['**/*.glb'],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // React core
          'react-vendor': ['react', 'react-dom', 'react-router'],
          // Three.js et 3D
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei', '@react-three/rapier'],
          // Animation libraries
          'animation-vendor': ['gsap', '@gsap/react', 'motion'],
          // UI et utilities
          'ui-vendor': ['lucide-react', 'react-icons', 'clsx', 'tailwind-merge'],
          // Autres dépendances
          'misc-vendor': ['react-countup', 'react-fast-marquee', 'embla-carousel-react', 'matter-js', 'react-helmet-async'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
})
