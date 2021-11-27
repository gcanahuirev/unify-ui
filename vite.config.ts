import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import windiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), windiCSS()],
  resolve: {
    alias: {
      '~': '/src',
      // '~m': resolve(__dirname, '/src/modules'),
      // '~core': resolve(__dirname, '/src/core'),
      // '~locales': resolve(__dirname, '/src/common/locales'),
      // '~router': resolve(__dirname, '/src/common/router'),
      // '~helpers': resolve(__dirname, '/src/common/helpers'),
      // '~providers': resolve(__dirname, '/src/common/providers'),
    },
  },
  server: {
    open: true,
  },
  build: {
    chunkSizeWarningLimit: 300,
    rollupOptions: {
      output: {
        manualChunks: {
          ethers: ['ethers'],
        },
      },
    },
  },
})
