import { ref } from 'vue'

export const useCarouselSwipe = (onSwipeLeft: () => void, onSwipeRight: () => void) => {
  const touchStartX = ref(0)
  const touchDeltaX = ref(0)

  const onTouchStart = (e: TouchEvent) => {
    touchStartX.value = e.touches[0].clientX
  }

  const onTouchMove = (e: TouchEvent) => {
    touchDeltaX.value = e.touches[0].clientX - touchStartX.value
  }

  const onTouchEnd = () => {
    const threshold = 50
    if (touchDeltaX.value > threshold) onSwipeRight()
    else if (touchDeltaX.value < -threshold) onSwipeLeft()
    touchDeltaX.value = 0
  }

  return { onTouchStart, onTouchMove, onTouchEnd }
}
