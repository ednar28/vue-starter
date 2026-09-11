import { defineStore } from 'pinia'

export type ToastType = 'default' | 'success' | 'warning' | 'danger'

export interface ToastItem {
  id: string,
  message: string,
  type: ToastType,
  title?: string,
  /** remaining duration in ms — used by the progress bar */
  duration: number,
  /** timestamp when the toast should auto-dismiss */
  expiresAt: number,
}

const DURATION_MIN = 3000
const DURATION_MAX = 5000

const computeDuration = (message: string) =>
  Math.min(DURATION_MIN + message.length * 25, DURATION_MAX)

export const useToastStore = defineStore('Toast', {
  state: (): { items: ToastItem[] } => ({
    items: [],
  }),
  actions: {
    /** default variant — neutral dark pill */
    add (message: string, title?: string) {
      this._push(message, 'default', title)
    },
    /** success variant — green */
    success (message: string, title?: string) {
      this._push(message, 'success', title)
    },
    /** warning variant — amber */
    warning (message: string, title?: string) {
      this._push(message, 'warning', title)
    },
    /** danger variant — red */
    danger (message: string, title?: string) {
      this._push(message, 'danger', title)
    },
    /** manual dismiss */
    dismiss (id: string) {
      const index = this.items.findIndex(item => item.id === id)
      if (index !== -1) {
        this.items.splice(index, 1)
      }
    },
    _push (message: string, type: ToastType, title?: string) {
      const duration = computeDuration(message)
      const item: ToastItem = {
        id: Date.now().toString() + Math.random().toString(36).slice(2, 6),
        message,
        type,
        title,
        duration,
        expiresAt: Date.now() + duration,
      }
      this.items.push(item)
      setTimeout(() => {
        // only shift if this exact item is still the oldest
        if (this.items[0]?.id === item.id) {
          this.items.shift()
        } else {
          this.dismiss(item.id)
        }
      }, duration)
    },
  },
})
