import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/supermercado-maria-brambilla-002a/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})