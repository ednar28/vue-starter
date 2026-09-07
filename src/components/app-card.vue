<script setup lang="ts">
  defineProps<{
    title?: string,
    description?: string,
  }>()
</script>

<template>
  <div class="border border-gray-200 rounded-lg bg-white shadow-gray-200/20 shadow-lg transition-all duration-300 active:scale-[0.98] dark:border-white/10 hover:border-primary/20 dark:bg-surface dark:shadow-none hover:shadow-primary/5 hover:shadow-xl hover:-translate-y-1 dark:hover:border-primary/30">
    <div
      v-if="title || description"
      class="p-6 pb-0">
      <h3
        v-if="title"
        class="text-lg text-gray-900 font-semibold dark:text-white">
        {{ title }}
      </h3>
      <p
        v-if="description"
        class="mt-1 text-sm text-gray-600 dark:text-gray-400">
        {{ description }}
      </p>
    </div>
    <div class="p-6">
      <slot></slot>
    </div>
  </div>
</template>
