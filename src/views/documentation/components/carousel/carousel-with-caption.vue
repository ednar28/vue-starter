<script setup lang="ts">
  const captionCode = [
    '<script setup lang="ts">',
    '   const items = [',
    '     { src: ".../photo-1.jpg", alt: "Gunung", caption: "Pemandangan gunung saat sunrise" },',
    '     { src: ".../photo-2.jpg", alt: "Hutan", caption: "Hutan pinus yang asri" },',
    '     { src: ".../photo-3.jpg", alt: "Danau", caption: "Danau dengan air jernih" },',
    '     ]',
    '<\/script>',
    '',
    '<template>',
    '   <app-carousel :items="items" object-fit="cover" />',
    '</template>',
  ].join('\n')

  const items = [
    { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop', alt: 'Gunung', caption: 'Pemandangan gunung saat sunrise — klik untuk zoom' },
    { src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=450&fit=crop', alt: 'Hutan', caption: 'Hutan pinus yang asri dan menenangkan' },
    { src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=450&fit=crop', alt: 'Danau', caption: 'Danau dengan air jernih memantulkan langit' },
  ]
</script>

<template>
  <app-doc-section
    title="Dengan Caption & Alt"
    description="Gunakan `CarouselItem { src, alt, caption, type }` agar lebih informatif dan accessible. Caption tampil sebagai overlay gradient di bawah gambar dan di lightbox."
    :code="captionCode">
    <div class="max-w-2xl">
      <app-carousel :items="items" />
    </div>
  </app-doc-section>
</template>
