<script setup lang="ts">
  const code = [
    'active: boolean              // Status aktif tab',
    'to?: RouteLocationRaw       // Render sebagai router-link',
    'icon?: string               // Icon name (lucide:*)',
  ].join('\n')

  const rows = [
    {
      name: 'active',
      type: 'boolean',
      desc: 'Menandakan tab sedang aktif. Akan menampilkan border bawah dengan warna primary',
    },
    {
      name: 'to',
      type: 'RouteLocationRaw',
      desc: 'Render tab sebagai router-link. Berguna untuk navigasi antar halaman',
    },
    {
      name: 'icon',
      type: 'string',
      desc: 'Nama icon yang ditampilkan sebelum teks. Gunakan format lucide:*',
    },
  ]
</script>

<template>
  <app-doc-section
    hide-preview-toolbar
    hide-theme-toggle
    hide-window-chrome
    title="Props"
    description=""
    :code="code">
    <app-props-table :rows="rows" />
  </app-doc-section>
</template>
