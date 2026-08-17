import type { App } from 'vue'
import AppTab from './app-tab.vue'
import AppTabItem from './app-tab-item.vue'
import AppGroupTab from './app-tab.vue'

export const useTab = {
  install (app: App) {
    app.component('AppTab', AppTab)
    app.component('AppTabItem', AppTabItem)
    app.component('AppGroupTab', AppGroupTab)
  },
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    AppTab: typeof AppTab,
    AppTabItem: typeof AppTabItem,
    AppGroupTab: typeof AppGroupTab,
  }
}
