<script setup lang="ts">
  import { useAppStore } from '@/stores/app'

  interface Props {
    title?: string,
    menuIcon?: string,
  }

  withDefaults(defineProps<Props>(), {
    title: 'Dokumentasi',
    menuIcon: 'lucide:menu',
  })

  const emit = defineEmits<{
    (e: 'toggle-menu'): void,
  }>()

  const appStore = useAppStore()
</script>

<template>
  <header class="sticky top-0 z-40 h-16 border-b border-gray-200/80 bg-white dark:border-white/10 dark:bg-surface">
    <div class="container mx-auto h-full flex items-center justify-between">
      <h1 class="text-xl text-gray-900 font-semibold dark:text-white">
        {{ title }}
      </h1>
      <div class="flex items-center gap-1">
        <button
          type="button"
          class="inline-flex items-center justify-center border border-gray-200 rounded-full bg-white p-2 shadow-sm transition dark:border-white/10 dark:bg-canvas hover:bg-gray-100 dark:hover:bg-white/10"
          :class="appStore.isDark ? 'text-indigo-500 dark:text-indigo-400' : 'text-amber-500'"
          :aria-label="appStore.isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          :title="appStore.isDark ? 'Light mode' : 'Dark mode'"
          @click="appStore.toggleTheme()">
          <app-icon
            :icon="appStore.isDark ? 'lucide:moon' : 'lucide:sun'"
            class="h-4 w-4" />
        </button>
        <button
          type="button"
          class="rounded-xl p-2 text-gray-500 transition-all lg:hidden active:scale-95 hover:bg-gray-100 dark:text-gray-400 hover:text-gray-700 dark:hover:bg-white/10 dark:hover:text-white"
          aria-label="Toggle menu"
          @click="emit('toggle-menu')">
          <app-icon
            :icon="menuIcon"
            class="h-5 w-5" />
        </button>
      </div>
    </div>
  </header>
</template>
