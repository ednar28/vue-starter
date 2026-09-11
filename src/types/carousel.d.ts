declare global {
  interface CarouselItem {
    src: string,
    alt?: string,
    caption?: string,
    type?: 'image' | 'video',
  }

  type CarouselItemNormalized = Required<Pick<CarouselItem, 'src'>> & CarouselItem & { type: 'image' | 'video' }
}

export {}
