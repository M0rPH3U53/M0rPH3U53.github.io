import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/https://m0rph3u53.github.io/',
  plugins: [react()],
})
