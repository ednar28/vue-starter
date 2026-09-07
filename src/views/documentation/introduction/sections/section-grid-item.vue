<script setup lang="ts">
  import type { SectionGridItem } from './section-grid.vue'

  defineProps<{
    item: SectionGridItem,
  }>()
</script>

<template>
  <router-link
    :to="item.path"
    class="group relative overflow-hidden border border-gray-200/60 rounded-2xl bg-white p-6 transition-all duration-300 active:scale-[0.98] dark:border-white/10 hover:border-primary/20 dark:bg-surface dark:shadow-none hover:shadow-primary/5 hover:shadow-xl hover:-translate-y-1 dark:hover:border-primary/30">
    <div class="mb-4 h-11 w-11 inline-flex items-center justify-center rounded-xl bg-gray-100 transition-all duration-300 dark:bg-white/10 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/20">
      <app-icon
        :icon="item.icon"
        class="h-5 w-5 text-gray-500 transition-colors duration-300 dark:text-gray-300 group-hover:text-white" />
    </div>
    <h3 class="text-sm text-gray-900 font-semibold dark:text-white">
      {{ item.title }}
    </h3>
    <p class="mt-1.5 text-xs text-gray-400 leading-relaxed dark:text-gray-400">
      {{ item.description }}
    </p>
    <div class="absolute right-4 top-4 h-7 w-7 flex items-center justify-center rounded-full bg-gray-100 text-xs text-gray-400 transition-all duration-300 dark:bg-white/10 group-hover:bg-primary/10 dark:text-gray-400 group-hover:text-primary dark:group-hover:bg-primary/15 dark:group-hover:text-primary">
      <app-icon
        icon="lucide:arrow-right"
        class="h-3.5 w-3.5" />
    </div>
    <div class="absolute inset-x-0 bottom-0 h-0.5 w-0 from-primary to-primary-400 bg-gradient-to-r transition-all duration-500 group-hover:w-full"></div>
  </router-link>
</template>
