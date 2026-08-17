<script setup lang="ts">
  const rowProps = [
    { name: 'columns', type: '{ key: string, label: string, class?: string }[]', desc: 'Definisi kolom. key digunakan sebagai accessor data dan slot name.' },
    { name: 'rows', type: 'Record<string, unknown>[]', desc: 'Array data baris yang akan ditampilkan.' },
    { name: 'loading', type: 'boolean', desc: 'Tampilkan loading spinner dan sembunyikan data.' },
    { name: 'emptyMessage', type: 'string', desc: 'Custom pesan saat rows kosong. Default: Tidak ada data.' },
  ]

  const rowSlots = [
    { name: 'header-{key}', desc: 'Custom rendering untuk header kolom. Scoped: { col }.' },
    { name: 'cell-{key}', desc: 'Custom rendering untuk cell. Scoped: { row, value }.' },
  ]
</script>

<template>
  <app-doc-section
    hide-preview-toolbar
    hide-theme-toggle
    hide-window-chrome
    title="Props"
    description="">
    <div class="space-y-4">
      <app-props-table :rows="rowProps" />
      <app-slots-table :rows="rowSlots" />
    </div>
  </app-doc-section>
</template>
