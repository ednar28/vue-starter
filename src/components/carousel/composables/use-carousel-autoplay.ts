import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import type { CarouselProps } from '../carousel.types'

export function useCarouselAutoplay (
  props: Readonly<CarouselProps>,
  ctx: {
    normalizedLength: () => number,
    canNext: () => boolean,
    isLightboxOpen: () => boolean,
    next: () => void,
  },
) {
  let timer: ReturnType<typeof setInterval> | null = null
  const isHovering = ref(false)

  function start () {
    stop()
    if (!props.autoplay) return
    if (ctx.normalizedLength() <= 1) return
    if (ctx.isLightboxOpen()) return
    timer = setInterval(() => {
      if (isHovering.value) return
      if (!ctx.canNext() && !props.loop) return
      ctx.next()
    }, props.interval)
  }

  function stop () {
    if (timer) {
      clearInterval(timer)
      timer = null
    }
  }

  watch(() => [props.autoplay, props.interval, props.loop, ctx.normalizedLength()] as const, start)

  onMounted(start)
  onBeforeUnmount(stop)

  return { isHovering, start, stop }
}
