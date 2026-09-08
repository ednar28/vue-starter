import type { RouteLocationRaw } from 'vue-router'

declare global {
  interface SidebarLinkItem {
    label: string,
    path: RouteLocationRaw,
  }

  interface SidebarGroup {
    category: string,
    icon?: string,
    items: SidebarLinkItem[],
  }
}
