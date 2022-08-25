import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  mode: 'development',
  plugins: [react()],
  build: {
    // to make tests faster
    minify: false,
  },
})
