<script setup lang="ts">
  import { ref, watch } from 'vue'

  const props = defineProps<{
    src?: string | null,
    alt?: string | null,
    fitMode?: string,
  }>()

  const error = ref(false)

  watch(
    () => props.src,
    () => {
      error.value = false
    },
  )
</script>

<template>
  <div class="overflow-hidden">
    <div
      v-if="!src || error"
      class="size-full flex items-center justify-center bg-gray-200">
      <app-icon
        icon="lucide:image"
        class="text-2xl text-gray-400" />
    </div>
    <img
      v-else
      class="size-full"
      :class="{ 'object-contain': fitMode === 'contain', 'object-cover': fitMode === 'fill' }"
      :src="src"
      :alt="alt ?? ''"
      @error="error = true">
  </div>
</template>
