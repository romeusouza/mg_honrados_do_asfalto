import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path"

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Se for build (produção), usa a subpasta. Se for dev (local), usa a raiz.
  base: command === 'build' ? '/mg_honrados_do_asfalto/' : '/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}))