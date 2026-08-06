import { defineStore } from 'pinia'

const APP_TITLE = import.meta.env.VITE_APP_TITLE

export const useAppStore = defineStore('App', {
  state: () => {
    return {
      title: '',
      maintenance: false,
    }
  },
  actions: {
    setPageTitle (title: string) {
      this.title = title
      document.title = `${title} | ${APP_TITLE}`
    },
    setMaintenance (value: boolean) {
      this.maintenance = value
    },
  },
})
