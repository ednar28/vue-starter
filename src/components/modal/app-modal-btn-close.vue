<script setup lang="ts">
  const emit = defineEmits<{
    (e: 'click'): void,
  }>()
</script>

<template>
  <div class="absolute right-2 top-3 lg:right-4 lg:top-5">
    <button
      class="size-8 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-200"
      @click="emit('click')">
      <app-icon icon="lucide:x" />
    </button>
  </div>
</template>
