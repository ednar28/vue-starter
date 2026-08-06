import Copy from 'clipboard-copy'
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { useToastStore } from '@/stores/toast'
import byte from './fmt/byte'
import DateFormatter from './fmt/date'
import duration from './fmt/duration'
import NumberFormatter from './fmt/number'
import { phone } from './fmt/phone'
import StringCase from './fmt/string-case'

export const fmt = {
  ...DateFormatter,
  ...NumberFormatter,
  ...StringCase,
  phone,
  byte,
  duration,
}

/**
 * Watch the route full path, and trigger callback when query / params change
 * but don't trigger when route name change (move away to other page).
 * Optional watchSource to watch just specific part of the route (not fullPath).
 */
export const whenRouteChange = (callback: () => void, watchSource?: () => unknown) => {
  const route = useRoute()
  const routeName = route.name // cache route name
  watch(
    watchSource ?? (() => route.fullPath),
    () => {
      if (route.name === routeName) {
        callback()
      }
    },
    { immediate: true },
  )
}

// checkSaveToLeave(): boolean {
//   const textStore = useTextStore()
//   if (!this.saveToClose) {
//     const answer = window.confirm(textStore.prompCloseModalForm)
//     return answer
//   }
//   return true
// },

export const decodeHtml = (html: string) => {
  const txt = document.createElement('textarea')
  txt.innerHTML = html
  return txt.value
}

export const copy = async (text: string) => {
  const toast = useToastStore()
  try {
    await Copy(text)
    toast.add('Teks telah disalin')
  } catch (error) {
    toast.add('Gagal menyalin teks')
    console.log(error)
  }
}

export const useEscListener = (callback: () => void) => {
  return (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      callback()
    }
  }
}

export const useDocumentOverflow = () => {
  const disableOverflow = () => {
    document.body.style.overflowY = 'hidden'
  }
  const reenableOverflow = () => {
    // delay because of vue lightbox
    setTimeout(() => {
      document.body.style.overflowY = ''
    }, 200)
  }
  return {
    disableOverflow,
    reenableOverflow,
  }
}
