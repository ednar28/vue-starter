<script setup lang="ts">
  import { useAppStore } from '@/stores/app'

  interface Props {
    floating?: boolean,
  }

  withDefaults(defineProps<Props>(), {
    floating: false,
  })

  const appStore = useAppStore()
</script>

<template>
  <button
    type="button"
    class="inline-flex items-center justify-center border border-gray-200 rounded-full bg-white shadow-sm transition dark:border-white/10 dark:bg-canvas hover:bg-gray-100 dark:hover:bg-white/10"
    :class="[
      appStore.isDark ? 'text-indigo-500 dark:text-indigo-400' : 'text-amber-500',
      floating ? 'fixed right-6 top-6 z-50 p-2.5' : 'p-2',
    ]"
    :aria-label="appStore.isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    :title="appStore.isDark ? 'Light mode' : 'Dark mode'"
    @click="appStore.toggleTheme()">
    <app-icon
      :icon="appStore.isDark ? 'lucide:moon' : 'lucide:sun'"
      class="size-4" />
  </button>
</template>
