<script setup lang="ts">
  withDefaults(
    defineProps<{
      label?: string,
      hideLabel?: boolean,
    }>(),
    { label: 'Contoh Hasil:' },
  )
</script>

<template>
  <div class="border border-gray-200/70 rounded-lg bg-gray-50 p-4 dark:border-white/10 dark:bg-black/20">
    <p
      v-if="!hideLabel"
      class="mb-2 text-xs text-gray-600 font-semibold dark:text-gray-400">
      {{ label }}
    </p>
    <div class="text-sm text-gray-700 dark:text-gray-100">
      <slot></slot>
    </div>
  </div>
</template>
