import type { App } from 'vue'
import AppButton from './app-button.vue'
import AppSubmit from './app-submit.vue'

export const useButton = {
  install (app: App) {
    app.component('AppButton', AppButton)
    app.component('AppSubmit', AppSubmit)
  },
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    AppButton: typeof AppButton,
    AppSubmit: typeof AppSubmit,
  }
}
