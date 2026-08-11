<script setup lang="ts">
  const code = [
    'columns: { key: string, label: string, class?: string }[]    // definisi kolom',
    'rows: Record<string, unknown>[]                                  // data baris',
    'loading?: boolean                                                // tampilkan loading spinner',
    'emptyMessage?: string                                            // pesan saat data kosong',
  ].join('\n')
</script>

<template>
  <app-doc-section
    hide-preview-toolbar
    hide-theme-toggle
    hide-window-chrome
    title="Props"
    description=""
    :code="code">
    <app-props-table
      :rows="[
        { name: 'columns', type: '{ key: string, label: string, class?: string }[]', desc: 'Definisi kolom. key digunakan sebagai accessor data dan slot name.' },
        { name: 'rows', type: 'Record<string, unknown>[]', desc: 'Array data baris yang akan ditampilkan.' },
        { name: 'loading', type: 'boolean', desc: 'Tampilkan loading spinner dan sembunyikan data.' },
        { name: 'emptyMessage', type: 'string', desc: 'Custom pesan saat rows kosong. Default: Tidak ada data.' },
      ]" />

    <div class="mt-6">
      <h4 class="mb-2 text-sm text-slate-700 font-semibold">
        Slots
      </h4>
      <app-slots-table
        :rows="[
          { name: 'header-{key}', desc: 'Custom rendering untuk header kolom. Scoped: { col }.' },
          { name: 'cell-{key}', desc: 'Custom rendering untuk cell. Scoped: { row, value }.' },
        ]" />
    </div>
  </app-doc-section>
</template>
