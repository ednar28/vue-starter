<script setup lang="ts">
  import AppCarouselThumbs from './app-carousel-thumbs.vue'
  import { useCarouselZoom } from './composables/use-carousel-zoom'

  const props = defineProps<{
    items: CarouselItemNormalized[],
    currentIndex: number,
    currentItem: CarouselItemNormalized,
    isOpen: boolean,
    loop: boolean,
    canPrev: boolean,
    canNext: boolean,
  }>()

  const emit = defineEmits<{
    (e: 'close'): void,
    (e: 'select', index: number): void,
    (e: 'prev'): void,
    (e: 'next'): void,
  }>()

  const zoom = useCarouselZoom(() => props.currentItem)

  defineExpose({ resetZoom: zoom.reset })
</script>

<template>
  <teleport to="body">
    <transition name="fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-[60] flex flex-col bg-black/90 backdrop-blur-sm"
        @click.self="emit('close')">
        <!-- header -->
        <div class="flex items-center justify-between gap-3 p-3 sm:p-4">
          <div class="flex items-center gap-3">
            <span class="rounded-full bg-white/10 px-2.5 py-1 text-xs text-white font-medium backdrop-blur-sm">
              {{ currentIndex + 1 }} / {{ items.length }}
            </span>
            <span
              v-if="currentItem.caption"
              class="hidden max-w-xs truncate text-xs text-white/70 sm:block">
              {{ currentItem.caption }}
            </span>
          </div>

          <div class="flex items-center gap-1.5 sm:gap-2">
            <template v-if="currentItem.type === 'image'">
              <app-button
                type="icon"
                variant="secondary"
                class="backdrop-blur-sm !bg-white/10 !text-white disabled:opacity-30 hover:!bg-white/20"
                :disabled="zoom.scale.value <= 1"
                aria-label="Zoom out"
                @click="zoom.zoomOut()">
                <app-icon icon="lucide:zoom-out" />
              </app-button>
              <span class="hidden min-w-10 text-center text-xs text-white/70 sm:inline">
                {{ Math.round(zoom.scale.value * 100) }}%
              </span>
              <app-button
                type="icon"
                variant="secondary"
                class="backdrop-blur-sm !bg-white/10 !text-white disabled:opacity-30 hover:!bg-white/20"
                :disabled="zoom.scale.value >= 3"
                aria-label="Zoom in"
                @click="zoom.zoomIn()">
                <app-icon icon="lucide:zoom-in" />
              </app-button>
              <app-button
                type="icon"
                variant="secondary"
                class="backdrop-blur-sm !bg-white/10 !text-white disabled:opacity-30 hover:!bg-white/20"
                :disabled="zoom.scale.value === 1 && zoom.translateX.value === 0 && zoom.translateY.value === 0"
                aria-label="Reset zoom"
                @click="zoom.reset()">
                <app-icon icon="lucide:rotate-ccw" />
              </app-button>
            </template>

            <div class="ml-1 h-6 w-px bg-white/10"></div>

            <app-button
              type="icon"
              variant="secondary"
              class="text-gray-900 !bg-white hover:!bg-gray-100"
              aria-label="Tutup"
              @click="emit('close')">
              <app-icon icon="lucide:x" />
            </app-button>
          </div>
        </div>

        <!-- content -->
        <div
          class="relative flex flex-1 items-center justify-center overflow-hidden p-2 sm:p-6"
          @click.self="emit('close')"
          @pointermove="zoom.onDragMove"
          @pointerup="zoom.onDragEnd"
          @pointerleave="zoom.onDragEnd">
          <div
            v-if="items.length > 1"
            class="absolute left-2 z-10 sm:left-4">
            <app-button
              type="icon"
              variant="secondary"
              class="backdrop-blur-sm !bg-white/10 !text-white hover:!bg-white/20"
              aria-label="Sebelumnya"
              :disabled="!canPrev && !loop"
              @click="emit('prev')">
              <app-icon icon="lucide:chevron-left" />
            </app-button>
          </div>

          <div
            class="relative max-h-full max-w-full flex items-center justify-center"
            :class="zoom.scale.value > 1 ? 'cursor-grab active:cursor-grabbing' : ''">
            <img
              v-if="currentItem.type === 'image'"
              :src="currentItem.src"
              :alt="currentItem.alt"
              class="max-h-[78vh] max-w-[92vw] select-none object-contain sm:max-h-[80vh]"
              :style="{
                transform: `scale(${zoom.scale.value}) translate(${zoom.translateX.value}px, ${zoom.translateY.value}px)`,
                transition: zoom.isDragging.value ? 'none' : 'transform 0.2s ease-out',
              }"
              draggable="false"
              @pointerdown="zoom.onDragStart"
              @wheel.prevent="zoom.onWheel"
              @dblclick="zoom.scale.value === 1 ? zoom.zoomIn() : zoom.reset()">
            <video
              v-else
              :key="currentItem.src"
              :src="currentItem.src"
              controls
              autoplay
              playsinline
              class="max-h-[78vh] max-w-[92vw] rounded-lg bg-black">
            </video>
          </div>

          <div
            v-if="items.length > 1"
            class="absolute right-2 z-10 sm:right-4">
            <app-button
              type="icon"
              variant="secondary"
              class="backdrop-blur-sm !bg-white/10 !text-white hover:!bg-white/20"
              aria-label="Berikutnya"
              :disabled="!canNext && !loop"
              @click="emit('next')">
              <app-icon icon="lucide:chevron-right" />
            </app-button>
          </div>
        </div>

        <app-carousel-thumbs
          v-if="items.length > 1"
          :items="items"
          :current-index="currentIndex"
          variant="lightbox"
          @select="emit('select', $event)" />

        <div
          v-if="currentItem.caption"
          class="px-4 pb-4 text-center text-xs text-white/70 sm:hidden">
          {{ currentItem.caption }}
        </div>
      </div>
    </transition>
  </teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
