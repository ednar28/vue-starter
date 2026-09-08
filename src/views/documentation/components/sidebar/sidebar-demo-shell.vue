<script setup lang="ts">
</script>

<template>
  <div class="flex overflow-hidden border border-gray-200 rounded-xl bg-gray-50">
    <div class="sidebar-demo-aside shrink-0">
      <slot name="sidebar"></slot>
    </div>
    <div class="hidden min-w-0 flex-1 p-6 sm:block">
      <div class="mb-2 h-6 w-40 rounded-md bg-gray-200"></div>
      <div class="mb-6 h-3 w-64 rounded bg-gray-100"></div>
      <div class="space-y-2">
        <div class="h-3 rounded bg-gray-100"></div>
        <div class="h-3 w-11/12 rounded bg-gray-100"></div>
        <div class="h-3 w-3/4 rounded bg-gray-100"></div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
  .sidebar-demo-aside :deep(aside) {
    position: static;
    transform: none;
    height: 380px;
  }
</style>
