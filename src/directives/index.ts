import type { App } from 'vue'
import clickOutside from './click-outside'
import focus from './focus'

export default {
  install (app: App) {
    app.directive('click-outside', clickOutside)
    app.directive('focus', focus)
  },
}
