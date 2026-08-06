import NProgress from 'nprogress'
import { createRouter, createWebHistory } from 'vue-router'
import { appRoutes } from './app-routes'
import { documentationRoutes } from './documentation'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...appRoutes,
    ...documentationRoutes,
  ],
  scrollBehavior () {
    return { top: 0, behavior: 'smooth' }
  },
})

router.beforeEach(() => {
  NProgress.start()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
