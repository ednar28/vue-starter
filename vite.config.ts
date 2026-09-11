import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'
import postcssNested from 'postcss-nested'
import { visualizer } from 'rollup-plugin-visualizer'
import UnoCSS from 'unocss/vite'
import { defineConfig, loadEnv, UserConfig } from 'vite'
import { vitePWA } from './pwa.config.ts'

// https://vitejs.dev/config/
export default defineConfig(({ mode }): UserConfig => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  const appVersion = JSON.stringify(process.env.npm_package_version)
  const appName = JSON.stringify(process.env.VITE_APP_TITLE)
  const host = process.env.VITE_SERVER_HOST ?? 'localhost'
  const enableAnalyzer = process.env.VITE_ANALYZE === 'true'

  return {
    css: {
      postcss: {
        plugins: [autoprefixer, postcssNested],
      },
    },
    plugins: [
      vue(),
      UnoCSS(),
      vitePWA(host, appVersion, ''),
      visualizer({
        filename: 'stats.html',
        open: enableAnalyzer,
        gzipSize: true,
        brotliSize: true,
        template: 'treemap',
      }),
    ],
    define: {
      __APP_VERSION__: appVersion,
      __APP_NAME__: appName,
    },
    server: {
      host,
      port: Number(process.env.VITE_SERVER_PORT ?? 5173),
      https: process.env.VITE_SERVER_HTTPS_PATH_CERT
        ? {
          cert: process.env.VITE_SERVER_HTTPS_PATH_CERT,
          key: process.env.VITE_SERVER_HTTPS_PATH_KEY,
          ciphers: process.env.VITE_SERVER_HTTPS_CIPHERS,
        }
        : undefined,
    },
    build: {
      sourcemap: true,
      outDir: buildOutDir(mode, process.env.npm_package_version),
      chunkSizeWarningLimit: 1000,
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }
})

const buildOutDir = (mode: string, version?: string) => {
  const path = 'dist/' + version
  if (mode === 'staging') {
    return path + '-beta'
  }
  return path
}
