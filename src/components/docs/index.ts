import type { App } from 'vue'
import AppCodeBlock from './app-code-block.vue'
import AppDocPageHeader from './app-doc-page-header.vue'
import AppDocSection from './app-doc-section.vue'
import AppPropsTable from './app-props-table.vue'
import AppSlotsTable from './app-slots-table.vue'

export const useDoc = {
  install (app: App) {
    app.component('AppCodeBlock', AppCodeBlock)
    app.component('AppDocPageHeader', AppDocPageHeader)
    app.component('AppDocSection', AppDocSection)
    app.component('AppPropsTable', AppPropsTable)
    app.component('AppSlotsTable', AppSlotsTable)
  },
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    AppCodeBlock: typeof AppCodeBlock,
    AppDocPageHeader: typeof AppDocPageHeader,
    AppDocSection: typeof AppDocSection,
    AppPropsTable: typeof AppPropsTable,
    AppSlotsTable: typeof AppSlotsTable,
  }
}
