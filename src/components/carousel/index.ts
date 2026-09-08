import type { App } from 'vue'
import AppCarousel from './app-carousel.vue'

export const useCarousel = {
  install (app: App) {
    app.component('AppCarousel', AppCarousel)
  },
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    AppCarousel: typeof AppCarousel,
  }
}
