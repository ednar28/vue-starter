import type { RouteRecordRaw } from 'vue-router'

const authRoutes: RouteRecordRaw[] = [
  {
    path: '/auth',
    component: () => import('@/layouts/auth/layout-auth.vue'),
    children: [
      {
        path: '/login',
        name: 'auth-login',
        component: () => import('@/views/auth/page-login.vue'),
      },
    ],
  },
]

export { authRoutes }
