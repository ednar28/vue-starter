<script setup lang="ts">
  import type { CarouselItemNormalized } from './carousel.types'

  defineProps<{
    items: CarouselItemNormalized[],
    currentIndex: number,
    variant?: 'default' | 'lightbox',
  }>()

  defineEmits<{
    (e: 'select', index: number): void,
  }>()
</script>

<template>
  <!-- default thumbs -->
  <div
    v-if="variant !== 'lightbox'"
    class="scrollbar-thin mt-3 flex gap-2 overflow-x-auto pb-1">
    <button
      v-for="(item, idx) in items"
      :key="`thumb-${idx}`"
      type="button"
      class="relative h-16 w-20 shrink-0 overflow-hidden border-2 rounded-lg transition-all"
      :class="idx === currentIndex ? 'border-primary ring-2 ring-primary/20 opacity-100' : 'border-transparent opacity-60 hover:opacity-100'"
      @click="$emit('select', idx)">
      <img
        v-if="item.type === 'image'"
        :src="item.src"
        :alt="item.alt"
        class="size-full object-cover">
      <video
        v-else
        :src="item.src"
        muted
        preload="metadata"
        class="size-full object-cover">
      </video>
      <div
        v-if="idx === currentIndex"
        class="absolute inset-0 bg-primary/10">
      </div>
    </button>
  </div>

  <!-- lightbox thumbs -->
  <div
    v-else
    class="border-t border-white/10 bg-black/40 p-3 backdrop-blur-sm">
    <div class="flex justify-center gap-2 overflow-x-auto">
      <button
        v-for="(item, idx) in items"
        :key="`lb-thumb-${idx}`"
        type="button"
        class="relative h-12 w-16 shrink-0 overflow-hidden border-2 rounded-md transition-all sm:h-14 sm:w-20"
        :class="idx === currentIndex ? 'border-white opacity-100' : 'border-transparent opacity-50 hover:opacity-80'"
        @click="$emit('select', idx)">
        <img
          v-if="item.type === 'image'"
          :src="item.src"
          :alt="item.alt"
          class="size-full object-cover">
        <video
          v-else
          :src="item.src"
          muted
          preload="metadata"
          class="size-full object-cover">
        </video>
      </button>
    </div>
  </div>
</template>

<style scoped>
.scrollbar-thin {
  scrollbar-width: thin;
}
.scrollbar-thin::-webkit-scrollbar {
  height: 4px;
}
.scrollbar-thin::-webkit-scrollbar-thumb {
  background: #e5e7eb;
  border-radius: 9999px;
}
</style>
