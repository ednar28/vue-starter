import { ref } from 'vue'

export function useCarouselSwipe (onSwipeLeft: () => void, onSwipeRight: () => void) {
  const touchStartX = ref(0)
  const touchDeltaX = ref(0)

  function onTouchStart (e: TouchEvent) {
    touchStartX.value = e.touches[0].clientX
  }

  function onTouchMove (e: TouchEvent) {
    touchDeltaX.value = e.touches[0].clientX - touchStartX.value
  }

  function onTouchEnd () {
    const threshold = 50
    if (touchDeltaX.value > threshold) onSwipeRight()
    else if (touchDeltaX.value < -threshold) onSwipeLeft()
    touchDeltaX.value = 0
  }

  return { onTouchStart, onTouchMove, onTouchEnd }
}
