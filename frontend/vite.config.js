import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://harsh-live.onrender.com', // Change this to the port where your backend server is running
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
