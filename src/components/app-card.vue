<script setup lang="ts">
  defineProps<{
    title?: string,
    description?: string,
  }>()
</script>

<template>
  <div class="border border-gray-200 rounded-lg bg-white shadow-gray-200/20 shadow-lg transition-all duration-300 hover:shadow-xl">
    <div
      v-if="title || description"
      class="p-6 pb-0">
      <h3
        v-if="title"
        class="text-lg font-semibold">
        {{ title }}
      </h3>
      <p
        v-if="description"
        class="mt-1 text-sm text-gray-600">
        {{ description }}
      </p>
    </div>
    <div class="p-6">
      <slot></slot>
    </div>
  </div>
</template>
