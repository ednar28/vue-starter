import type { RouteRecordRaw } from 'vue-router'

const functionsRoutes: RouteRecordRaw[] = [
  {
    path: 'fmt',
    name: 'documentation-fmt',
    component: () => import('@/views/documentation/functions/fmt/page-fmt.vue'),
  },
  {
    path: 'string',
    name: 'documentation-string',
    component: () => import('@/views/documentation/functions/string/page-string.vue'),
  },
  {
    path: 'image',
    name: 'documentation-image',
    component: () => import('@/views/documentation/functions/image/page-image.vue'),
  },
]

export { functionsRoutes }
