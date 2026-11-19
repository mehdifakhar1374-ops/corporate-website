import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * The preview proxy reaches the dev server through a per-sandbox hostname
 * (`3000-<sandbox id>.<sandbox domain>`). Vite validates the Host header, so
 * the sandbox domain has to be an accepted host. The platform also supplies
 * `__VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS`; both are honoured.
 */
const previewMode = process.env.BASE44_PREVIEW_MODE === '1'
const sandboxDomain = process.env.BASE44_SANDBOX_HOST_DOMAIN
const allowedHosts = previewMode && sandboxDomain ? [`.${sandboxDomain}`] : []

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    allowedHosts,
    // Bind mounts do not always emit native file events.
    watch: { usePolling: true, interval: 400 },
    proxy: {
      '/api': {
        target: process.env.API_ORIGIN || 'http://127.0.0.1:4000',
        changeOrigin: false,
      },
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
