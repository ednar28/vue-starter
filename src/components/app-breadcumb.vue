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
            class="text-body h-3.5 w-3.5 rtl:rotate-180" />
          <router-link
            :to="item.to ?? '#'"
            :class="[
              index + 1 === items.length ? 'text-primary cursor-default' : 'hover:bg-gray-50',
              'flex items-center space-x-2',
              'rounded-md px-1.5 py-0.5',
            ]">
            <app-icon
              v-if="item.icon"
              :icon="item.icon"
              class="size-4" />
            <div class="text-body hover:text-fg-brand text-sm font-medium">
              {{ item.label }}
            </div>
          </router-link>
        </div>
      </li>
    </ol>
  </nav>
</template>
