import type { RouteRecordRaw } from 'vue-router'

const storesRoutes: RouteRecordRaw[] = [
  {
    path: 'toast',
    name: 'documentation-stores-toast',
    component: () => import('@/views/documentation/stores/toast/page-toast.vue'),
  },
]

export { storesRoutes }
