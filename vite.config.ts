import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // This is the repository name on GitHub.
  // It tells Vite to prepend /gastech-website/ to all asset paths during build.
  base: '/gastech-website/',
})