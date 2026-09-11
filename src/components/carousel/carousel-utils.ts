const detectType = (src: string, explicit?: 'image' | 'video'): 'image' | 'video' => {
  if (explicit) return explicit
  if (/\.(mp4|webm|ogg|mov|m4v)(\?.*)?$/i.test(src)) return 'video'
  return 'image'
}

export const normalizeItems = (rawItems: (string | CarouselItem)[]): CarouselItemNormalized[] => {
  return rawItems.map((raw) => {
    if (typeof raw === 'string') {
      return { src: raw, alt: '', caption: undefined, type: detectType(raw) }
    }
    return {
      src: raw.src,
      alt: raw.alt ?? '',
      caption: raw.caption,
      type: detectType(raw.src, raw.type),
    }
  }).filter(i => !!i.src) as CarouselItemNormalized[]
}
