<script setup lang="ts">
  import type { RouteLocationRaw } from 'vue-router'

  defineProps<{
    active: boolean,
    to?: RouteLocationRaw,
    icon?: string,
  }>()
</script>

<template>
  <app-button
    :to="to"
    variant="none"
    :class="[
      'tab',
      active ? 'active' : ''
    ]">
    <div class="flex items-center gap-2.5">
      <app-icon
        v-if="icon"
        :icon="icon" />
      <slot></slot>
    </div>
  </app-button>
</template>

<style lang="postcss" scoped>
  .tab {
    @apply p-4 border-b cursor-pointer text-sm;
  }

  .tab.active {
    @apply border-b border-primary text-primary font-medium;
  }
</style>
