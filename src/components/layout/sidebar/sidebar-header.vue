<script setup lang="ts">
  interface Props {
    title?: string,
    subtitle?: string,
    icon?: string,
  }

  withDefaults(defineProps<Props>(), {
    title: __APP_NAME__,
    subtitle: undefined,
    icon: 'lucide:book-open',
  })
</script>

<template>
  <div class="h-16 flex shrink-0 items-center border-b border-gray-200/80 bg-white px-4 dark:border-white/10 dark:bg-surface">
    <div class="flex items-center gap-3">
      <div class="h-9 w-9 flex items-center justify-center rounded-xl from-primary to-primary-600 bg-gradient-to-br shadow-lg shadow-primary/25">
        <app-icon
          :icon="icon"
          class="h-5 w-5 text-white" />
      </div>
      <div>
        <h1 class="text-sm text-gray-900 font-semibold tracking-tight dark:text-white">
          {{ title }}
        </h1>
        <p
          v-if="subtitle"
          class="text-xs text-gray-400 dark:text-gray-500">
          {{ subtitle }}
        </p>
      </div>
    </div>
  </div>
</template>
