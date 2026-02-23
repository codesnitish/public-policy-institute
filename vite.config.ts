import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    // Prefer .tsx/.ts over .js so the new app (App.tsx) and components load instead of old .js versions
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.mjs', '.json'],
  },
})
