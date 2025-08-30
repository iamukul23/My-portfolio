import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // base: '/Formal-Portfolio/', // 👈 IMPORTANT: GitHub repo name with slashes
  base: '/',
  plugins: [react()],
})
