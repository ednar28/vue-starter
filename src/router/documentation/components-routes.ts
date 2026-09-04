import type { RouteRecordRaw } from 'vue-router'

const componentsRoutes: RouteRecordRaw[] = [
  {
    path: 'button',
    name: 'documentation-button',
    component: () => import('@/views/documentation/components/button/page-button.vue'),
  },
  {
    path: 'modal',
    name: 'documentation-modal',
    component: () => import('@/views/documentation/components/modal/page-modal.vue'),
  },
  {
    path: 'img',
    name: 'documentation-img',
    component: () => import('@/views/documentation/components/img/page-img.vue'),
  },
  {
    path: 'input',
    name: 'documentation-input',
    component: () => import('@/views/documentation/components/input/page-input.vue'),
  },
  {
    path: 'icon',
    name: 'documentation-icon',
    component: () => import('@/views/documentation/components/icon/page-icon.vue'),
  },
  {
    path: 'card',
    name: 'documentation-card',
    component: () => import('@/views/documentation/components/card/page-card.vue'),
  },
  {
    path: 'table',
    name: 'documentation-table',
    component: () => import('@/views/documentation/components/table/page-table.vue'),
  },
  {
    path: 'tab',
    name: 'documentation-tab',
    component: () => import('@/views/documentation/components/tab/page-tab.vue'),
    children: [
      {
        path: 'beranda',
        name: 'documentation-tab-beranda',
        component: () => import('@/views/documentation/components/tab/page-tab.vue'),
      },
      {
        path: 'profil',
        name: 'documentation-tab-profil',
        component: () => import('@/views/documentation/components/tab/page-tab.vue'),
      },
      {
        path: 'pengaturan',
        name: 'documentation-tab-pengaturan',
        component: () => import('@/views/documentation/components/tab/page-tab.vue'),
      },
    ],
  },
  {
    path: 'badge',
    name: 'documentation-badge',
    component: () => import('@/views/documentation/components/badge/page-badge.vue'),
  },
  {
    path: 'breadcrumb',
    name: 'documentation-breadcrumb',
    component: () => import('@/views/documentation/components/breadcrumb/page-breadcrumb.vue'),
  },
  {
    path: 'carousel',
    name: 'documentation-carousel',
    component: () => import('@/views/documentation/components/carousel/page-carousel.vue'),
  },
]

export { componentsRoutes }
