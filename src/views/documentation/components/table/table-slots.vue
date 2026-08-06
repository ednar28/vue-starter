<script setup lang="ts">
  const columns = [
    { key: 'no', label: 'No', class: 'w-px text-center whitespace-nowrap' },
    { key: 'produk', label: 'Produk', class: 'text-left' },
    { key: 'harga', label: 'Harga', class: 'text-right w-px whitespace-nowrap font-semibold' },
    { key: 'action', label: 'Aksi', class: 'text-center w-px whitespace-nowrap' },
  ]

  const rows = [
    { no: 1, produk: 'Laptop Dell XPS 13', harga: 'Rp 15.999.000' },
    { no: 2, produk: 'Mouse Logitech MX Master', harga: 'Rp 1.499.000' },
    { no: 3, produk: 'Keyboard Mechanical RGB', harga: 'Rp 2.299.000' },
  ]

  const code = [
    '<app-table :columns="columns" :rows="rows">',
    '  <template #cell-no="{ value }">',
    '    <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-xs font-semibold text-slate-700">',
    '      {{ value }}',
    '    </span>',
    '  </template>',
    '',
    '  <template #cell-harga="{ value }">',
    '    <span class="font-semibold text-slate-900">{{ value }}</span>',
    '  </template>',
    '',
    '  <template #cell-action>',
    '    <div class="flex items-center justify-center gap-2">',
    '      <button class="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded hover:bg-blue-200 transition-colors">',
    '        Edit',
    '      </button>',
    '      <button class="px-2 py-1 text-xs bg-red-100 text-red-600 rounded hover:bg-red-200 transition-colors">',
    '        Hapus',
    '      </button>',
    '    </div>',
    '  </template>',
    '</app-table>',
  ].join('\n')
</script>

<template>
  <app-doc-section
    title="Custom Cell Styling"
    description="Gunakan slots untuk styling custom pada kolom nomor, harga, dan action button."
    :code="code">
    <app-table
      :columns="columns"
      :rows="rows">
      <template #cell-no="{ value }">
        <span class="h-6 w-6 inline-flex items-center justify-center rounded-full bg-slate-100 text-xs text-slate-700 font-semibold">
          {{ value }}
        </span>
      </template>

      <template #cell-harga="{ value }">
        <span class="text-slate-900 font-semibold">{{ value }}</span>
      </template>

      <template #cell-action>
        <div class="flex items-center justify-center gap-2">
          <button class="rounded bg-blue-100 px-2 py-1 text-xs text-blue-600 transition-colors hover:bg-blue-200">
            Edit
          </button>
          <button class="rounded bg-red-100 px-2 py-1 text-xs text-red-600 transition-colors hover:bg-red-200">
            Hapus
          </button>
        </div>
      </template>
    </app-table>
  </app-doc-section>
</template>
