/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/vue" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string,
  readonly VITE_BASE_API: string,
  readonly VITE_SERVER_HOST: string,
  readonly VITE_SERVER_PORT: string,
}

interface ImportMeta {
  readonly env: ImportMetaEnv,
}

declare const __APP_VERSION__: string
declare const __APP_NAME__: string
