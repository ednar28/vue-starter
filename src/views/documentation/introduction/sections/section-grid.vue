<script setup lang="ts">
  import type { RouteLocationRaw } from 'vue-router'
  import SectionGridItemCard from './section-grid-item.vue'

  export interface SectionGridItem {
    icon: string,
    title: string,
    description: string,
    path: RouteLocationRaw,
  }

  export interface SectionGridSection {
    category: string,
    items: SectionGridItem[],
  }

  defineProps<SectionGridSection>()
</script>

<template>
  <div class="mb-10">
    <h2 class="mb-4 text-xs text-gray-400 font-semibold tracking-wider uppercase dark:text-gray-300">
      {{ category }}
    </h2>
    <div class="grid grid-cols-1 gap-5 lg:grid-cols-3 sm:grid-cols-2">
      <section-grid-item-card
        v-for="item in items"
        :key="item.title"
        :item="item" />
    </div>
  </div>
</template>
