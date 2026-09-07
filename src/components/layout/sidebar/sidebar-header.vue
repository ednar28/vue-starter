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
  <div class="h-16 flex shrink-0 items-center border-b border-white/5 px-4">
    <div class="flex items-center gap-3">
      <div class="h-9 w-9 flex items-center justify-center rounded-xl from-primary to-orange-500 bg-gradient-to-br shadow-lg shadow-orange-500/20">
        <app-icon
          :icon="icon"
          class="h-5 w-5 text-white" />
      </div>
      <div>
        <h1 class="text-sm text-gray-100 font-semibold">
          {{ title }}
        </h1>
        <p
          v-if="subtitle"
          class="text-xs text-gray-500">
          {{ subtitle }}
        </p>
      </div>
    </div>
  </div>
</template>
