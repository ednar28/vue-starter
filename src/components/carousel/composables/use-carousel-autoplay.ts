import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

export const useCarouselAutoplay = (
  props: {
    autoplay?: boolean,
    interval?: number,
    loop?: boolean,
  },
  ctx: {
    normalizedLength: () => number,
    canNext: () => boolean,
    isLightboxOpen: () => boolean,
    next: () => void,
  },
) => {
  let timer: ReturnType<typeof setInterval> | null = null
  const isHovering = ref(false)

  const stop = () => {
    if (timer) {
      clearInterval(timer)
      timer = null
    }
  }

  const start = () => {
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

  watch(() => [props.autoplay, props.interval, props.loop, ctx.normalizedLength()] as const, start)

  onMounted(start)
  onBeforeUnmount(stop)

  return { isHovering, start, stop }
}
