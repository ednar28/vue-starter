import { ref } from 'vue'
import type { CarouselItemNormalized } from '../carousel.types'

export function useCarouselZoom (getCurrentItem: () => CarouselItemNormalized) {
  const scale = ref(1)
  const translateX = ref(0)
  const translateY = ref(0)
  const isDragging = ref(false)

  let dragStartX = 0
  let dragStartY = 0
  let startTranslateX = 0
  let startTranslateY = 0

  function zoomIn () {
    scale.value = Math.min(3, +(scale.value + 0.25).toFixed(2))
  }

  function zoomOut () {
    scale.value = Math.max(1, +(scale.value - 0.25).toFixed(2))
    if (scale.value === 1) {
      translateX.value = 0
      translateY.value = 0
    }
  }

  function reset () {
    scale.value = 1
    translateX.value = 0
    translateY.value = 0
  }

  function onWheel (e: WheelEvent) {
    if (getCurrentItem().type === 'video') return
    if (e.deltaY < 0) zoomIn()
    else zoomOut()
  }

  function onDragStart (e: PointerEvent) {
    if (scale.value <= 1) return
    if (getCurrentItem().type === 'video') return
    isDragging.value = true
    dragStartX = e.clientX
    dragStartY = e.clientY
    startTranslateX = translateX.value
    startTranslateY = translateY.value
    ;(e.target as Element).setPointerCapture?.(e.pointerId)
  }

  function onDragMove (e: PointerEvent) {
    if (!isDragging.value) return
    const dx = (e.clientX - dragStartX) / scale.value
    const dy = (e.clientY - dragStartY) / scale.value
    translateX.value = startTranslateX + dx
    translateY.value = startTranslateY + dy
  }

  function onDragEnd () {
    isDragging.value = false
  }

  return {
    scale,
    translateX,
    translateY,
    isDragging,
    zoomIn,
    zoomOut,
    reset,
    onWheel,
    onDragStart,
    onDragMove,
    onDragEnd,
  }
}
