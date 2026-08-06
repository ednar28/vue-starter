<script setup lang="ts">
  const code = [
    "variant?: 'primary' | 'success' | 'secondary' | 'danger' | 'info' // Default: 'primary'",
    "type?: 'button' | 'submit' | 'icon' // Default: 'button'",
    "htmlType?: 'button' | 'submit' | 'reset' // Untuk button html type, Default: 'button'",
    'to?: RouteLocationRaw // Render sebagai router-link',
    'loading?: boolean // Tampilkan animasi loading',
    'disabled?: boolean // Disabled state',
  ].join('\n')

  const rows = [
    { name: 'variant', type: 'string', desc: 'Varian warna tombol (primary | success | secondary | danger | info). Default: primary' },
    { name: 'type', type: 'string', desc: 'Tipe tombol (button | submit | icon). Default: button. Tipe icon akan menggunakan class btn-icon' },
    { name: 'htmlType', type: 'string', desc: 'HTML button type attribute (button | submit | reset). Default: button' },
    { name: 'to', type: 'RouteLocationRaw', desc: 'Render sebagai router-link jika disertakan dan tidak disabled/loading' },
    { name: 'loading', type: 'boolean', desc: 'Tampilkan animasi loading dot, otomatis disabled' },
    { name: 'disabled', type: 'boolean', desc: 'Nonaktifkan tombol' },
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
