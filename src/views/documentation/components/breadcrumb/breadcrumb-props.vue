<script setup lang="ts">
  const code = [
    'items: { label: string, to?: RouteLocationRaw, icon?: string }[]',
  ].join('\n')

  const rows = [
    { name: 'items', type: 'array', desc: 'Daftar item breadcrumb. label: string. to: route tujuan (opsional). icon: nama iconify icon (opsional).' },
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
