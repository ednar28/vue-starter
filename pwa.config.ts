import { VitePWA } from 'vite-plugin-pwa'

export const vitePWA = (host: string, version: string, themeColor: string) => {
  return VitePWA({
    registerType: 'prompt',
    includeAssets: ['fonts/*/**', 'images/*/**'],
    selfDestroying: true,
    manifest: {
      name: 'Vue Starter',
      short_name: 'Starter',
      description: 'Vue Starter Description',
      categories: [], // eg: ['shopping']
      theme_color: themeColor,
      background_color: '#ffffff',
      id: version,
      // display: 'standalone',
      // display_override: ['window-controls-overlay', 'standalone', 'browser'],
      orientation: 'any',
      lang: 'id',
      scope: '/',
      start_url: `https://${host}`,
      dir: 'ltr',
      icons: [
        {
          src: 'android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any',
        },
        {
          src: 'android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
      ],
      launch_handler: {
        client_mode: ['navigate-existing', 'auto'],
      },
      prefer_related_applications: false,
      // related_applications: [
      //   {
      //     platform: 'play',
      //     url: 'https://www.example-app-2.com',
      //   },
      // ],
      scope_extensions: [{ origin: host }],
    },
  })
}

