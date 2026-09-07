<script setup lang="ts">
  import type { RouteLocationRaw } from 'vue-router'

  defineProps<{
    label: string,
    to: RouteLocationRaw,
  }>()

  const emit = defineEmits<{
    (e: 'close'): void,
  }>()
</script>

<template>
  <li>
    <router-link
      :to="to"
      class="group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-gray-600 font-medium transition-all duration-200 active:scale-[0.98] hover:bg-gray-50 dark:text-gray-400 hover:text-gray-900 dark:hover:bg-white/5 dark:hover:text-white"
      exact-active-class="bg-primary/10 text-primary! font-semibold ring-1 ring-inset ring-primary/20 shadow-sm dark:bg-primary/15 dark:ring-primary/30"
      @click="emit('close')">
      {{ label }}
    </router-link>
  </li>
</template>
