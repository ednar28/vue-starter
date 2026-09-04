export interface CarouselItem {
  src: string,
  alt?: string,
  caption?: string,
  type?: 'image' | 'video',
}

export type CarouselItemNormalized = Required<Pick<CarouselItem, 'src'>> & CarouselItem & { type: 'image' | 'video' }

export interface CarouselProps {
  items: (string | CarouselItem)[],
  modelValue?: number,
  autoplay?: boolean,
  interval?: number,
  loop?: boolean,
  showArrows?: boolean,
  showIndicators?: boolean,
  showThumbs?: boolean,
  zoomable?: boolean,
  aspectRatio?: string,
  height?: string,
  objectFit?: 'cover' | 'contain',
}

export type CarouselEmit = {
  (e: 'update:modelValue', value: number): void,
  (e: 'change', value: number, item: CarouselItemNormalized): void,
}

export function detectType (src: string, explicit?: 'image' | 'video'): 'image' | 'video' {
  if (explicit) return explicit
  if (/\.(mp4|webm|ogg|mov|m4v)(\?.*)?$/i.test(src)) return 'video'
  return 'image'
}

export function normalizeItems (rawItems: (string | CarouselItem)[]): CarouselItemNormalized[] {
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
