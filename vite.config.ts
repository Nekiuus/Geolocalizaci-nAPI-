import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/ip-api': {
        target: 'http://ip-api.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/ip-api/, '/json'),
      },
    },
  },
})
