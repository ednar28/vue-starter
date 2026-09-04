<script setup lang="ts">
  import { ref } from 'vue'

  const demoCode = [
    '<app-carousel',
    '  :items="images"',
    '  v-model="active"',
    '  :autoplay="true"',
    '  :interval="2500"',
    '  :loop="true"',
    '  :show-arrows="true"',
    '  :show-indicators="true"',
    '  :show-thumbs="true"',
    '  :zoomable="true"',
    '  height="340px"',
    '  object-fit="cover"',
    '/>',
    '',
    '// aspectRatio vs height:',
    '// <app-carousel aspect-ratio="16/9" />  → responsive',
    '// <app-carousel height="400px" />      → fixed height',
  ].join('\n')

  const active = ref(0)
  const images = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=450&fit=crop',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=450&fit=crop',
    'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800&h=450&fit=crop',
  ]
</script>

<template>
  <app-doc-section
    title="Playground Props"
    description="Semua props friendly dan optional. Coba ubah `v-model`, `autoplay`, `loop`, `showThumbs`, `height` vs `aspectRatio`, dan `objectFit`. Area ini autoplay + thumbs aktif."
    :code="demoCode">
    <div class="max-w-2xl space-y-3">
      <app-carousel
        v-model="active"
        :items="images"
        :autoplay="true"
        :interval="2500"
        :loop="true"
        :show-arrows="true"
        :show-indicators="true"
        :show-thumbs="true"
        :zoomable="true"
        height="340px"
        object-fit="cover" />

      <div class="flex flex-wrap items-center gap-2 text-xs">
        <span class="text-gray-500">Active: {{ active + 1 }} / {{ images.length }}</span>
        <app-button
          variant="secondary"
          class="text-xs"
          @click="active = 0">
          Reset ke 1
        </app-button>
        <span class="text-gray-400">| autoplay + loop + thumbs</span>
      </div>
    </div>
  </app-doc-section>

  <app-doc-section
    title="Aspect Ratio vs Height"
    description="Komponen support keduanya: pakai `aspectRatio` untuk responsive (default `16/9`) atau `height` untuk tinggi fixed. Jika `height` diisi, `aspectRatio` diabaikan."
    :code="`&lt;app-carousel :items=&quot;images&quot; aspect-ratio=&quot;4/3&quot; /&gt;\n&lt;app-carousel :items=&quot;images&quot; height=&quot;280px&quot; object-fit=&quot;contain&quot; /&gt;`">
    <div class="grid grid-cols-1 max-w-2xl gap-4 md:grid-cols-2">
      <div>
        <p class="mb-2 text-xs text-gray-500 font-semibold">
          aspect-ratio="4/3"
        </p>
        <app-carousel
          :items="images.slice(0, 2)"
          aspect-ratio="4/3" />
      </div>
      <div>
        <p class="mb-2 text-xs text-gray-500 font-semibold">
          height="280px" + contain
        </p>
        <app-carousel
          :items="images.slice(0, 2)"
          height="280px"
          object-fit="contain" />
      </div>
    </div>
  </app-doc-section>
</template>
