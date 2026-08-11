import type { App } from 'vue'
import AppTable from './app-table.vue'

export const useTable = {
  install (app: App) {
    app.component('AppTable', AppTable)
  },
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    AppTable: typeof AppTable,
  }
}
