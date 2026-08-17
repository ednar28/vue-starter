<script setup lang="ts">
  const rows = [
    {
      name: 'tabs',
      type: 'TabType[]',
      desc: 'Daftar tab yang tersedia',
    },
    {
      name: 'asRoute (opsional)',
      type: 'boolean',
      desc: 'Menandakan tab sebagai router-link.',
    },
    {
      name: 'asParam (opsional)',
      type: 'boolean',
      desc: 'Menandakan tab sebagai parameter route.',
    },
    {
      name: 'paramName (opsional)',
      type: 'string',
      desc: 'Nama parameter yang digunakan sebagai query string ketika asParam diaktifkan.',
    },
  ]
</script>

<template>
  <app-doc-section
    hide-preview-toolbar
    hide-theme-toggle
    hide-window-chrome
    title="Props"
    description="">
    <app-props-table :rows="rows" />
  </app-doc-section>
</template>
