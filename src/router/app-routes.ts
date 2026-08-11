import type { RouteRecordRaw } from 'vue-router'

const appRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layouts/app/layout-app.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/home/page-home.vue'),
      },
    ],
  },
]

export { appRoutes }
