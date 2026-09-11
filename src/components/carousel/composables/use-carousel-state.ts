import { computed, ref, watch } from 'vue'
import { normalizeItems } from '../carousel-utils'

export const useCarouselState = (
  props: {
    items: (string | CarouselItem)[],
    modelValue?: number,
    loop?: boolean,
  },
  callbacks: {
    onUpdate?: (value: number) => void,
    onChange?: (value: number, item: CarouselItemNormalized) => void,
  },
) => {
  const normalizedItems = computed(() => normalizeItems(props.items))
  const currentIndex = ref(props.modelValue ?? 0)

  const clampIndex = (i: number) => {
    const len = normalizedItems.value.length
    if (len === 0) return 0
    if (props.loop) return ((i % len) + len) % len
    return Math.max(0, Math.min(i, len - 1))
  }

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

  const goTo = (index: number) => {
    if (normalizedItems.value.length === 0) return
    currentIndex.value = clampIndex(index)
  }

  const next = () => {
    goTo(currentIndex.value + 1)
  }

  const prev = () => {
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
    goTo,
    next,
    prev,
    canPrev,
    canNext,
  }
}
