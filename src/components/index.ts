import type { App } from 'vue'
import AppAnimatedDot from './app-animated-dot.vue'
import AppBackground from './app-background.vue'
import AppBadge from './app-badge.vue'
import AppBreadcumb from './app-breadcumb.vue'
import AppCard from './app-card.vue'
import AppIcon from './app-icon.vue'
import AppImg from './app-img.vue'
import AppPreviewHtml from './app-preview-html.vue'
import AppThemeToggle from './app-theme-toggle.vue'
import { useButton } from './button'
import { useCarousel } from './carousel'
import { useDoc } from './docs'
import { useInput } from './input'
import useModal from './modal'
import { useTab } from './tab/index.ts'
import { useTable } from './table/index.ts'

export default {
  install (app: App) {
    app.use(useDoc)
    app.use(useModal)
    app.use(useInput)
    app.use(useButton)
    app.use(useTab)
    app.use(useTable)
    app.use(useCarousel)

    app.component('AppCard', AppCard)
    app.component('AppBadge', AppBadge)
    app.component('AppBackground', AppBackground)
    app.component('AppBreadcumb', AppBreadcumb)
    app.component('AppAnimatedDot', AppAnimatedDot)
    app.component('AppImg', AppImg)
    app.component('AppPreviewHtml', AppPreviewHtml)
    app.component('AppIcon', AppIcon)
    app.component('AppThemeToggle', AppThemeToggle)
  },
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    AppCard: typeof AppCard,
    AppBadge: typeof AppBadge,
    AppBackground: typeof AppBackground,
    AppBreadcumb: typeof AppBreadcumb,
    AppAnimatedDot: typeof AppAnimatedDot,
    AppImg: typeof AppImg,
    AppPreviewHtml: typeof AppPreviewHtml,
    AppIcon: typeof AppIcon,
    AppThemeToggle: typeof AppThemeToggle,
  }
}
