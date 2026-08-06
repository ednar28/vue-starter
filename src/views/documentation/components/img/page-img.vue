<script setup lang="ts">
  const appImgExample = [
    '<app-img',
    '  src="https://example.com/photo.jpg"',
    '  alt="User photo"',
    '  fit-mode="cover" />',
    '',
    '<!-- fit-mode: \'cover\' atau \'contain\' -->',
  ].join('\n')

  const appImgWithFallbackExample = [
    '<app-img',
    '  src=""',
    '  alt="Gambar tidak tersedia" />',
    '',
    '<!-- Otomatis tampilkan placeholder icon jika src kosong atau error -->',
  ].join('\n')
</script>

<template>
  <div>
    <app-doc-page-header
      title="Image Component"
      badge="Components"
      description="Komponen app-img untuk menampilkan gambar dengan automatic fallback placeholder jika gagal dimuat atau src kosong." />

    <app-doc-section
      title="Basic Usage"
      description="Menampilkan gambar dengan fit-mode untuk control object-fit (cover atau contain)."
      :code="appImgExample">
      <div class="space-y-3">
        <div class="rounded-lg bg-gray-50 p-4">
          <p class="mb-3 text-xs text-gray-600 font-semibold">
            fit-mode='cover':
          </p>
          <div class="h-32 w-48 overflow-hidden rounded-lg">
            <app-img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
              alt="Contoh gambar"
              fit-mode="cover" />
          </div>
        </div>
        <div class="rounded-lg bg-gray-50 p-4">
          <p class="mb-3 text-xs text-gray-600 font-semibold">
            fit-mode='contain':
          </p>
          <div class="h-32 w-48 overflow-hidden rounded-lg bg-white">
            <app-img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
              alt="Contoh gambar"
              fit-mode="contain" />
          </div>
        </div>
      </div>
    </app-doc-section>

    <app-doc-section
      title="Fallback Placeholder"
      description="Jika src kosong atau terjadi error saat loading gambar, otomatis tampilkan placeholder icon."
      :code="appImgWithFallbackExample">
      <div class="space-y-3">
        <div class="rounded-lg bg-gray-50 p-4">
          <p class="mb-3 text-xs text-gray-600 font-semibold">
            Src kosong:
          </p>
          <app-img
            class="h-32 w-48 rounded-lg"
            src=""
            alt="Tidak ada gambar" />
        </div>
        <div class="rounded-lg bg-gray-50 p-4">
          <p class="mb-3 text-xs text-gray-600 font-semibold">
            URL salah (error):
          </p>
          <app-img
            class="h-32 w-48 rounded-lg"
            src="https://invalid-url-123456.jpg"
            alt="Gambar error" />
        </div>
      </div>
    </app-doc-section>

    <app-doc-section
      hide-preview-toolbar
      hide-theme-toggle
      hide-window-chrome
      title="Props"
      description="Semua props bersifat optional."
      :code="`src?: string | null
alt?: string | null
fitMode?: 'cover' | 'contain'`">
      <app-props-table
        :rows="[
          { name: 'src', type: 'string | null', desc: 'URL gambar' },
          { name: 'alt', type: 'string | null', desc: 'Text alternatif (untuk accessibility)' },
          { name: 'fitMode', type: 'cover | contain', desc: 'cover (crop) atau contain (letterbox). Default: cover' },
        ]" />
    </app-doc-section>
  </div>
</template>
