<script setup lang="ts">
  const propsRows = [
    { name: 'items', type: '(string | CarouselItem)[]', desc: 'Daftar gambar/video. string auto jadi { src, type: "image" }' },
    { name: 'modelValue / v-model', type: 'number', desc: 'Index aktif (0-based). Default: 0' },
    { name: 'autoplay', type: 'boolean', desc: 'Jalankan slide otomatis. Default: false' },
    { name: 'interval', type: 'number', desc: 'Interval autoplay ms. Default: 3000' },
    { name: 'loop', type: 'boolean', desc: 'Kembali ke awal saat di ujung. Default: true' },
    { name: 'showArrows', type: 'boolean', desc: 'Tampilkan tombol prev/next. Default: true' },
    { name: 'showIndicators', type: 'boolean', desc: 'Tampilkan dots indikator. Default: true' },
    { name: 'showThumbs', type: 'boolean', desc: 'Tampilkan strip thumbnail di bawah. Default: false' },
    { name: 'zoomable', type: 'boolean', desc: 'Klik gambar untuk lightbox + zoom in/out (pakai app-button & app-icon). Default: true' },
    { name: 'aspectRatio', type: 'string', desc: 'Rasio viewport, e.g. "16/9", "4/3", "1/1". Diabaikan jika height diisi. Default: "16/9"' },
    { name: 'height', type: 'string', desc: 'Tinggi fixed, e.g. "340px", "50vh". Jika diisi override aspectRatio.' },
    { name: 'objectFit', type: "'cover' | 'contain'", desc: 'Mode fit gambar/video di viewport. Default: "cover"' },
  ]

  const itemRows = [
    { name: 'src', type: 'string', desc: 'URL gambar atau video (required)' },
    { name: 'alt', type: 'string', desc: 'Alt text untuk aksesibilitas' },
    { name: 'caption', type: 'string', desc: 'Caption overlay di bawah gambar' },
    { name: 'type', type: "'image' | 'video'", desc: 'Paksa tipe. Jika kosong auto-detect dari ekstensi .mp4/.webm/.ogg/.mov' },
  ]

  const slotsRows = [
    { name: 'item', type: '{ item, index, active }', desc: 'Custom render tiap slide. `item` = CarouselItemNormalized' },
  ]

  const eventsRows = [
    { name: 'update:modelValue', type: '(index: number) => void', desc: 'Emit saat ganti slide (untuk v-model)' },
    { name: 'change', type: '(index: number, item: CarouselItem) => void', desc: 'Emit saat slide berubah' },
  ]
</script>

<template>
  <app-doc-section
    hide-preview-toolbar
    hide-theme-toggle
    hide-window-chrome
    title="Props"
    description="Semua props optional kecuali `items`. Dirancang friendly: cukup isi `items` sudah jalan.">
    <app-props-table :rows="propsRows" />
  </app-doc-section>

  <app-doc-section
    hide-preview-toolbar
    hide-theme-toggle
    hide-window-chrome
    title="CarouselItem"
    description="Bentuk item jika pakai object (bukan string).">
    <app-props-table :rows="itemRows" />
  </app-doc-section>

  <app-doc-section
    hide-preview-toolbar
    hide-theme-toggle
    hide-window-chrome
    title="Slots"
    description="">
    <app-props-table :rows="slotsRows" />
  </app-doc-section>

  <app-doc-section
    hide-preview-toolbar
    hide-theme-toggle
    hide-window-chrome
    title="Events"
    description="">
    <app-props-table :rows="eventsRows" />
  </app-doc-section>

  <app-doc-section
    hide-preview-toolbar
    hide-theme-toggle
    hide-window-chrome
    title="Catatan Lightbox & Zoom"
    description="Lightbox pakai `teleport to body` + `app-button type=&quot;icon&quot;` & `app-icon` (`lucide:zoom-in`, `lucide:zoom-out`, `lucide:rotate-ccw`, `lucide:x`, `lucide:chevron-left/right`, `lucide:expand`). Zoom hanya untuk `type: 'image'` (video tidak di-zoom). Kontrol: klik overlay/Esc untuk tutup, ArrowLeft/Right untuk navigasi, +/- dan double-click untuk zoom, drag saat scale > 1 untuk pan, wheel untuk zoom.">
    <div class="rounded-lg bg-gray-50 p-4 text-xs text-gray-600 leading-relaxed">
      <ul class="list-disc pl-4 space-y-1">
        <li>Zoom range: 1x — 3x, step 0.25. Tombol disabled di batas, ada indikator %.</li>
        <li>Autoplay otomatis pause saat lightbox terbuka & saat hover.</li>
        <li>Jika `zoomable=false`, klik tidak membuka lightbox.</li>
        <li>Style sudah ditangani di component (scoped) — tidak perlu CSS tambahan, tapi bisa override via class/height/aspectRatio.</li>
      </ul>
    </div>
  </app-doc-section>
</template>
