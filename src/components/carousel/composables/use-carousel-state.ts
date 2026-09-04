import { computed, ref, watch } from 'vue'
import type { CarouselItemNormalized, CarouselProps } from '../carousel.types'
import { normalizeItems } from '../carousel.types'

export interface CarouselStateCallbacks {
  onUpdate?: (value: number) => void,
  onChange?: (value: number, item: CarouselItemNormalized) => void,
}

export function useCarouselState (
  props: Readonly<CarouselProps>,
  callbacks: CarouselStateCallbacks = {},
) {
  const normalizedItems = computed(() => normalizeItems(props.items))
  const currentIndex = ref(props.modelValue ?? 0)

  watch(() => props.modelValue, (v) => {
    if (v !== undefined && v !== currentIndex.value) {
      currentIndex.value = clampIndex(v)
    }
  })

  watch(currentIndex, (v) => {
    callbacks.onUpdate?.(v)
    const item = normalizedItems.value[v]
    if (item) callbacks.onChange?.(v, item)
  })

  function clampIndex (i: number) {
    const len = normalizedItems.value.length
    if (len === 0) return 0
    if (props.loop) return ((i % len) + len) % len
    return Math.max(0, Math.min(i, len - 1))
  }

  function goTo (index: number) {
    if (normalizedItems.value.length === 0) return
    currentIndex.value = clampIndex(index)
  }

  function next () {
    goTo(currentIndex.value + 1)
  }
  function prev () {
    goTo(currentIndex.value - 1)
  }

  const canPrev = computed(() => {
    if (normalizedItems.value.length <= 1) return false
    if (props.loop) return true
    return currentIndex.value > 0
  })

  const canNext = computed(() => {
    if (normalizedItems.value.length <= 1) return false
    if (props.loop) return true
    return currentIndex.value < normalizedItems.value.length - 1
  })

  const currentItem = computed<CarouselItemNormalized>(() =>
    normalizedItems.value[currentIndex.value] ?? { src: '', alt: '', type: 'image' } as CarouselItemNormalized,
  )

  return {
    normalizedItems,
    currentIndex,
    currentItem,
    clampIndex,
    goTo,
    next,
    prev,
    canPrev,
    canNext,
  }
}
