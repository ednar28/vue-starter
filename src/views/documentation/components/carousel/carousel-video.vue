<script setup lang="ts">
  const videoCode = [
    '<script setup lang="ts">',
    '   const items = [',
    '     { src: "https://cdn.coverr.co/videos/coverr-forest-river-1578647801738?download=1", type: "video", caption: "Video sungai di hutan" },',
    '     "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop",',
    '     { src: "https://cdn.coverr.co/videos/coverr-beautiful-flower-field-1578479630950?download=1", type: "video" },',
    '   ]',
    '   // atau biarkan auto-detect: .mp4/.webm/.mov otomatis jadi video',
    '<\/script>',
    '',
    '<template>',
    '   <app-carousel :items="items" height="360px" />',
    '</template>',
  ].join('\n')

  const items = [
    { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop', alt: 'Gambar 1', caption: 'Gambar — klik untuk perbesar & zoom' },
    { src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', type: 'video' as const, caption: 'Video sample Big Buck Bunny (mp4) — kontrol native' },
    { src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=450&fit=crop', alt: 'Gambar 2', caption: 'Gambar kedua' },
  ]
</script>

<template>
  <app-doc-section
    title="Campuran Gambar & Video"
    description="Komponen mendukung `type: 'image' | 'video'`. Jika tidak diisi, auto-detect dari ekstensi `.mp4/.webm/.ogg/.mov`. Video pakai kontrol native dan tidak ikut zoom (hanya gambar yang bisa di-zoom)."
    :code="videoCode">
    <div class="max-w-2xl">
      <app-carousel
        :items="items"
        height="320px" />
      <p class="mt-2 text-xs text-gray-500">
        Video di lightbox otomatis `autoplay` dan tetap bisa prev/next.
      </p>
    </div>
  </app-doc-section>
</template>
