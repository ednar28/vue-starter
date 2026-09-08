<script setup lang="ts">
  import { computed, onBeforeUnmount, onMounted, ref, useTemplateRef } from 'vue'
  import { useDocumentOverflow } from '@/functions'
  import AppCarouselLightbox from './app-carousel-lightbox.vue'
  import AppCarouselThumbs from './app-carousel-thumbs.vue'
  import type { CarouselEmit, CarouselProps } from './carousel.types'
  import { useCarouselAutoplay } from './composables/use-carousel-autoplay'
  import { useCarouselState } from './composables/use-carousel-state'
  import { useCarouselSwipe } from './composables/use-carousel-swipe'

  const props = withDefaults(defineProps<CarouselProps>(), {
    modelValue: 0,
    autoplay: false,
    interval: 3000,
    loop: true,
    showArrows: true,
    showIndicators: true,
    showThumbs: false,
    zoomable: true,
    aspectRatio: '16/9',
    height: undefined,
    objectFit: 'cover',
  })

  const emit = defineEmits<CarouselEmit>()

  const {
    normalizedItems,
    currentIndex,
    currentItem,
    goTo,
    next,
    prev,
    canPrev,
    canNext,
  } = useCarouselState(props, {
    onUpdate: (v) => emit('update:modelValue', v),
    onChange: (v, item) => emit('change', v, item),
  })

  // lightbox
  const isLightboxOpen = ref(false)
  const lightboxRef = useTemplateRef('lightboxRef')
  const { disableOverflow, reenableOverflow } = useDocumentOverflow()

  const openLightbox = (index?: number) => {
    if (!props.zoomable) return
    if (typeof index === 'number') goTo(index)
    if (!isLightboxOpen.value) disableOverflow()
    isLightboxOpen.value = true
    lightboxRef.value?.resetZoom()
    autoplay.stop()
  }

  const closeLightbox = () => {
    if (!isLightboxOpen.value) return
    isLightboxOpen.value = false
    reenableOverflow()
    lightboxRef.value?.resetZoom()
    if (props.autoplay) autoplay.start()
  }

  const handleGoTo = (idx: number) => {
    goTo(idx)
    lightboxRef.value?.resetZoom()
  }

  const handleClickItem = (idx: number) => {
    if (props.zoomable) openLightbox(idx)
  }

  // autoplay
  const autoplay = useCarouselAutoplay(props, {
    normalizedLength: () => normalizedItems.value.length,
    canNext: () => canNext.value,
    isLightboxOpen: () => isLightboxOpen.value,
    next,
  })

  // swipe
  const swipe = useCarouselSwipe(next, prev)

  // styles
  const containerStyle = computed(() => props.height ? { height: props.height } : { aspectRatio: props.aspectRatio })
  const objectFitClass = computed(() => props.objectFit === 'contain' ? 'object-contain' : 'object-cover')

  // keyboard for lightbox
  function onKeydown (e: KeyboardEvent) {
    if (!isLightboxOpen.value) return
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowLeft') prev()
    if (e.key === 'ArrowRight') next()
  }

  onMounted(() => window.addEventListener('keydown', onKeydown))
  onBeforeUnmount(() => {
    window.removeEventListener('keydown', onKeydown)
    if (isLightboxOpen.value) reenableOverflow()
  })

  defineExpose({ goTo: handleGoTo, next, prev, openLightbox, closeLightbox })
</script>

<template>
  <div class="app-carousel w-full select-none">
    <!-- viewport -->
    <div
      class="relative overflow-hidden rounded-xl bg-gray-100"
      :style="containerStyle"
      @mouseenter="autoplay.isHovering.value = true"
      @mouseleave="autoplay.isHovering.value = false"
      @touchstart.passive="swipe.onTouchStart"
      @touchmove.passive="swipe.onTouchMove"
      @touchend="swipe.onTouchEnd">
      <div
        v-if="normalizedItems.length === 0"
        class="size-full flex items-center justify-center bg-gray-200">
        <div class="flex flex-col items-center gap-2 text-gray-400">
          <app-icon
            icon="lucide:image-off"
            class="text-3xl" />
          <span class="text-xs">Tidak ada gambar</span>
        </div>
      </div>

      <template v-else>
        <div
          v-for="(item, idx) in normalizedItems"
          :key="idx"
          class="absolute inset-0 transition-opacity duration-500 ease-in-out"
          :class="idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'">
          <slot
            name="item"
            :item="item"
            :index="idx"
            :active="idx === currentIndex">
            <div
              class="relative size-full"
              :class="zoomable ? 'cursor-zoom-in' : ''"
              @click="handleClickItem(idx)">
              <img
                v-if="item.type === 'image'"
                :src="item.src"
                :alt="item.alt"
                class="size-full"
                :class="objectFitClass"
                draggable="false">
              <video
                v-else
                :src="item.src"
                controls
                preload="metadata"
                class="size-full"
                :class="objectFitClass"
                @click.stop></video>
              <div
                v-if="item.caption"
                class="pointer-events-none absolute inset-x-0 bottom-0 from-black/60 via-black/20 to-transparent bg-gradient-to-t p-3 pt-8">
                <p class="line-clamp-2 text-xs text-white leading-relaxed">
                  {{ item.caption }}
                </p>
              </div>
              <button
                v-if="zoomable && item.type === 'image'"
                class="absolute right-3 top-3 size-8 flex cursor-zoom-in items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm"
                @click="handleClickItem(idx)">
                <app-icon
                  icon="lucide:expand"
                  class="size-3.5" />
              </button>
            </div>
          </slot>
        </div>

        <template v-if="showArrows && normalizedItems.length > 1">
          <div class="pointer-events-none absolute inset-y-0 left-0 z-10 flex items-center pl-2">
            <app-button
              type="icon"
              variant="secondary"
              class="pointer-events-initial backdrop-blur-sm !bg-white/90 !text-gray-700 hover:!bg-white"
              :disabled="!canPrev"
              aria-label="Sebelumnya"
              @click.stop="prev">
              <app-icon icon="lucide:chevron-left" />
            </app-button>
          </div>
          <div class="pointer-events-none absolute inset-y-0 right-0 z-10 flex items-center pr-2">
            <app-button
              type="icon"
              variant="secondary"
              class="pointer-events-initial backdrop-blur-sm !bg-white/90 !text-gray-700 hover:!bg-white"
              :disabled="!canNext"
              aria-label="Berikutnya"
              @click.stop="next">
              <app-icon icon="lucide:chevron-right" />
            </app-button>
          </div>
        </template>

        <div
          v-if="showIndicators && normalizedItems.length > 1"
          class="absolute bottom-3 left-1/2 z-20 flex items-center gap-1.5 rounded-full bg-black/30 px-2.5 py-1.5 backdrop-blur-sm -translate-x-1/2">
          <button
            v-for="(_, idx) in normalizedItems"
            :key="idx"
            type="button"
            class="h-1.5 rounded-full transition-all duration-300"
            :class="idx === currentIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/60 hover:bg-white/90'"
            :aria-label="`Ke slide ${idx + 1}`"
            :aria-current="idx === currentIndex"
            @click.stop="handleGoTo(idx)"></button>
        </div>
      </template>
    </div>

    <app-carousel-thumbs
      v-if="showThumbs && normalizedItems.length > 1"
      :items="normalizedItems"
      :current-index="currentIndex"
      @select="handleGoTo" />

    <app-carousel-lightbox
      ref="lightboxRef"
      :items="normalizedItems"
      :current-index="currentIndex"
      :current-item="currentItem"
      :is-open="isLightboxOpen"
      :loop="loop"
      :can-prev="canPrev"
      :can-next="canNext"
      @close="closeLightbox"
      @select="handleGoTo"
      @prev="prev"
      @next="next" />
  </div>
</template>
