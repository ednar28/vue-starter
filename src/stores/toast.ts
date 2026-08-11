import { defineStore } from 'pinia'

export const useToastStore = defineStore('Toast', {
  state: (): { items: { id: string, message: string }[] } => ({
    items: [],
  }),
  actions: {
    add (message: string) {
      // id for v-for key
      this.items.push({ message, id: Date.now().toString() })
      // 3s + 25ms per letters up to 5s
      const duration = Math.min(3000 + message.length * 25, 5000)
      setTimeout(() => {
        this.items.shift()
      }, duration)
    },
  },
})
