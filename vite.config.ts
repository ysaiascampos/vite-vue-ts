import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path
        .resolve(__dirname, 'src')
        .replace(/\\/g, '/'), // Reemplaza las barras invertidas por barras normales
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        rewrite: (path) => path, // 👈 mantenemos /api
      },
    },
  },


})
