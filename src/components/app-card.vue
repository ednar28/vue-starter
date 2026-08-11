<script setup lang="ts">
  defineProps<{
    title?: string,
    description?: string,
  }>()
</script>

<template>
  <div class="border border-gray-200 rounded-lg bg-white">
    <div
      v-if="title || description"
      class="p-6 pb-4">
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
    <div :class="{ 'px-6 pb-6': title || description }">
      <slot></slot>
    </div>
  </div>
</template>
