<script setup lang="ts">
  import CarouselCustomSlot from './carousel-custom-slot.vue'
  import CarouselDefault from './carousel-default.vue'
  import CarouselProps from './carousel-props.vue'
  import CarouselPropsDemo from './carousel-props-demo.vue'
  import CarouselVideo from './carousel-video.vue'
  import CarouselWithCaption from './carousel-with-caption.vue'
</script>

<template>
  <div>
    <app-doc-page-header
      title="Carousel"
      badge="Components"
      description="Komponen carousel untuk gambar & video dengan navigasi panah, indikator dots, thumbnail strip, autoplay, dan lightbox zoom (pakai app-button & app-icon). Props friendly dan mudah digunakan." />

    <carousel-default />
    <carousel-with-caption />
    <carousel-video />
    <carousel-props-demo />
    <carousel-custom-slot />
    <carousel-props />
  </div>
</template>
