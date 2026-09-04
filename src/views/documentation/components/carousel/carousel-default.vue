<script setup lang="ts">
  const basicCode = [
    '<script setup lang="ts">',
    '   const images = [',
    '     "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop",',
    '     "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=450&fit=crop",',
    '     "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=450&fit=crop",',
    '   ]',
    '<\/script>',
    '',
    '<template>',
    '   <app-carousel',
    '     :items="images"',
    '     :zoomable="true"',
    '     aspect-ratio="16/9"',
    '   />',
    '<template>',
  ].join('\n')

  const images = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=450&fit=crop',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=450&fit=crop',
  ]
</script>

<template>
  <app-doc-section
    title="Basic Usage — Gambar"
    description="Penggunaan paling sederhana dengan array `string` URL. Klik gambar untuk perbesar (lightbox) dan gunakan zoom in/out di toolbar. Props friendly: cukup isi `items`."
    :code="basicCode">
    <div class="max-w-2xl">
      <app-carousel :items="images" />
      <p class="mt-2 text-xs text-gray-500">
        Tip: klik gambar untuk membuka lightbox. Di lightbox pakai <code>app-button</code> + <code>app-icon lucide:zoom-in / zoom-out</code> untuk zoom.
      </p>
    </div>
  </app-doc-section>
</template>
