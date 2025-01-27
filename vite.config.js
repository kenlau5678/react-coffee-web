import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  extend:{
    color:{
      brightColor:"AB6B2E",
      backgroundColor:"FDE9CC",
    },
  },
  plugins: [
      react(),
      tailwindcss(),
  ],
  base:"/react-coffee-web",
})
