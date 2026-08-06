import type { App } from 'vue'
import AppTab from './app-tab.vue'
import AppTabGroup from './app-tab-group.vue'

export const useTab = {
  install (app: App) {
    app.component('AppTab', AppTab)
    app.component('AppTabGroup', AppTabGroup)
  },
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    AppTab: typeof AppTab,
    AppTabGroup: typeof AppTabGroup,
  }
}
