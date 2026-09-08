import { type App, onBeforeUnmount, ref, useTemplateRef, watch } from 'vue'
import { useDocumentOverflow, useEscListener } from '@/functions'
import AppModal from './app-modal.vue'
import AppModalContent from './app-modal-content.vue'
import AppModalDescription from './app-modal-description.vue'
import AppModalFooter from './app-modal-footer.vue'
import AppModalForm from './app-modal-form.vue'
import AppModalSlideBottom from './app-modal-slide-bottom.vue'
import AppModalSlideRight from './app-modal-slide-right.vue'
import AppModalTitle from './app-modal-title.vue'

export function useModal () {
  const { disableOverflow, reenableOverflow } = useDocumentOverflow()
  const isOpen = ref(false)

  const open = () => {
    isOpen.value = true
  }
  const close = () => {
    isOpen.value = false
  }

  const onEscape = useEscListener(close)

  watch(isOpen, (value) => {
    if (value) {
      disableOverflow()
      window.addEventListener('keydown', onEscape)
    } else {
      reenableOverflow()
      window.removeEventListener('keydown', onEscape)
    }
  })

  onBeforeUnmount(() => {
    if (isOpen.value) {
      reenableOverflow()
      window.removeEventListener('keydown', onEscape)
    }
  })

  return { isOpen, open, close }
}

type Modalable = AppModal | AppModalSlideBottom | AppModalSlideRight
export function useAppModal<T extends unknown[]> (refModal = 'modal', onBeforeOpen?: (...args: T) => void) {
  const modal = useTemplateRef<Modalable>(refModal)
  // calling open with any arguments will be passed to onModalOpened callback
  const open = (...args: T) => {
    onBeforeOpen?.(...args)
    modal.value?.open()
  }
  const close = () => {
    modal.value?.close()
  }
  return { modal, open, close }
}

export default {
  install (app: App) {
    app.component('AppModal', AppModal)
    app.component('AppModalContent', AppModalContent)
    app.component('AppModalDescription', AppModalDescription)
    app.component('AppModalForm', AppModalForm)
    app.component('AppModalFooter', AppModalFooter)
    app.component('AppModalTitle', AppModalTitle)
    app.component('AppModalSlideBottom', AppModalSlideBottom)
    app.component('AppModalSlideRight', AppModalSlideRight)
  },
}

declare module 'vue' {
  export interface GlobalComponents {
    AppModal: typeof AppModal,
    AppModalContent: typeof AppModalContent,
    AppModalDescription: typeof AppModalDescription,
    AppModalFooter: typeof AppModalFooter,
    AppModalForm: typeof AppModalForm,
    AppModalSlideBottom: typeof AppModalSlideBottom,
    AppModalSlideRight: typeof AppModalSlideRight,
    AppModalTitle: typeof AppModalTitle,
  }
}

declare global {
  type AppModal = InstanceType<typeof AppModal>
  type AppModalSlideBottom = InstanceType<typeof AppModalSlideBottom>
  type AppModalSlideRight = InstanceType<typeof AppModalSlideRight>
}
