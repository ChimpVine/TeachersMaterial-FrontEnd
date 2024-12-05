import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()]
})

// 
//   server: {
//     host: true,   // Enables the use of your local IP
//     port: 5173,   // Specify a port (optional, default is 5173)
//   },