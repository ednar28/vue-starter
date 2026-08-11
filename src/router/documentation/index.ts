import type { RouteRecordRaw } from 'vue-router'
import { componentsRoutes } from './components-routes'
import { functionsRoutes } from './functions-routes'
import { storesRoutes } from './stores-routes'

const documentationRoutes: RouteRecordRaw[] = [
  {
    path: '/documentation',
    component: () => import('@/layouts/documentation/layout-documentation.vue'),
    children: [
      {
        path: '',
        name: 'introduction',
        component: () => import('@/views/documentation/introduction/page-introduction.vue'),
      },
      {
        path: 'dashboard-home',
        name: 'documentation-dashboard-home',
        component: () => import('@/views/documentation/get-started/dashboard-home/page-dashboard-home.vue'),
      },
      {
        path: 'login',
        name: 'documentation-login',
        component: () => import('@/views/documentation/get-started/login/page-login.vue'),
      },
      ...componentsRoutes,
      ...functionsRoutes,
      ...storesRoutes,
    ],
  },
]

export { documentationRoutes }
