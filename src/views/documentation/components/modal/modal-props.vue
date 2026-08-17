<script setup lang="ts">
  const rows = [
    { name: 'title', type: 'string', desc: 'Judul modal yang tampil di header' },
    { name: 'isSmall', type: 'boolean', desc: 'slide-bottom only: Ukuran kecil, gunakan lg:max-w-md' },
  ]
</script>

<template>
  <app-doc-section
    hide-preview-toolbar
    hide-theme-toggle
    hide-window-chrome
    title="Props"
    description="">
    <app-props-table
      :rows="rows" />
  </app-doc-section>
</template>
