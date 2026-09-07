<script setup lang="ts">
  import SidebarLayout from '@/components/layout/sidebar/sidebar-layout.vue'
  import components from './sidebar/components'
  import functions from './sidebar/functions'
  import gettingStarted from './sidebar/getting-started'
  import stores from './sidebar/stores'

  defineProps<{
    sidebarOpen: boolean,
  }>()

  const emit = defineEmits<{
    (e: 'close'): void,
  }>()

  const appName = __APP_NAME__
  const navItems = [
    gettingStarted,
    components,
    stores,
    functions,
  ]
</script>

<template>
  <sidebar-layout
    :sidebar-open="sidebarOpen"
    :nav-items="navItems"
    :title="appName"
    subtitle="Dokumentasi"
    icon="lucide:book-open"
    @close="emit('close')">
    <template #footer>
      <div class="shrink-0 border-t border-gray-200/80 bg-white p-4 dark:border-white/10 dark:bg-surface">
        <a
          href="https://github.com/ednar28/vue-starter"
          target="_blank"
          rel="noopener"
          class="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-gray-500 font-medium transition-all duration-200 hover:bg-primary/5 dark:text-gray-400 hover:text-primary dark:hover:bg-white/5 dark:hover:text-white">
          <app-icon
            icon="lucide:github"
            class="h-4 w-4" />
          GitHub Repository
        </a>
      </div>
    </template>
  </sidebar-layout>
</template>
