<script setup lang="ts">
  import type { RouteLocationRaw } from 'vue-router'

  defineProps<{
    items: { label: string, to?: RouteLocationRaw, icon?: string }[],
  }>()
</script>

<template>
  <nav>
    <ol class="flex flex-wrap gap-2">
      <li
        v-for="(item, index) in items"
        :key="index">
        <div class="flex items-center space-x-1.5">
          <app-icon
            v-if="index > 0 && index < items.length"
            icon="mdi:chevron-right"
            class="h-3.5 w-3.5 text-gray-400 rtl:rotate-180 dark:text-gray-500" />
          <router-link
            :to="item.to ?? '#'"
            :class="[
              index + 1 === items.length ? 'text-primary cursor-default' : 'text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-white/10',
              'flex items-center space-x-2',
              'rounded-md px-1.5 py-0.5',
            ]">
            <app-icon
              v-if="item.icon"
              :icon="item.icon"
              class="size-4" />
            <div class="text-sm font-medium">
              {{ item.label }}
            </div>
          </router-link>
        </div>
      </li>
    </ol>
  </nav>
</template>
