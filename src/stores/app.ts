import { defineStore } from 'pinia'

const APP_TITLE = import.meta.env.VITE_APP_TITLE

export type AppTheme = 'light' | 'dark'

const THEME_STORAGE_KEY = 'vue-starter:theme'

function getInitialTheme (): AppTheme {
  if (typeof window === 'undefined')
    return 'light'
  const saved = window.localStorage.getItem(THEME_STORAGE_KEY)
  if (saved === 'light' || saved === 'dark')
    return saved
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function applyTheme (theme: AppTheme) {
  if (typeof document === 'undefined')
    return
  document.documentElement.classList.toggle('dark', theme === 'dark')
  document.documentElement.style.colorScheme = theme
}

export const useAppStore = defineStore('App', {
  state: () => {
    return {
      title: '',
      maintenance: false,
      theme: 'light' as AppTheme,
    }
  },
  getters: {
    isDark: state => state.theme === 'dark',
  },
  actions: {
    setPageTitle (title: string) {
      this.title = title
      document.title = `${title} | ${APP_TITLE}`
    },
    setMaintenance (value: boolean) {
      this.maintenance = value
    },
    initTheme () {
      this.theme = getInitialTheme()
      applyTheme(this.theme)
    },
    setTheme (theme: AppTheme) {
      this.theme = theme
      window.localStorage.setItem(THEME_STORAGE_KEY, theme)
      applyTheme(theme)
    },
    toggleTheme () {
      this.setTheme(this.theme === 'dark' ? 'light' : 'dark')
    },
  },
})
