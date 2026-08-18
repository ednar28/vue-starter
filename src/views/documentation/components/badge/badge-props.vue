<script setup lang="ts">
  const propsRows = [
    {
      name: 'label',
      type: 'string',
      desc: 'Teks yang ditampilkan di dalam badge',
    },
    {
      name: 'variant',
      type: "'primary' | 'warning' | 'danger' | 'info' | 'success'",
      desc: 'Varian warna badge. Default: primary',
    },
    {
      name: 'icon',
      type: 'boolean',
      desc: 'Menampilkan icon dot di sebelah kiri label. Default: false',
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
    <app-props-table :rows="propsRows" />
  </app-doc-section>
</template>
