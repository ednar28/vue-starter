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
    '    <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-xs font-semibold text-slate-700 dark:bg-white/10 dark:text-gray-200">',
    '      {{ value }}',
    '    </span>',
    '  </template>',
    '',
    '  <template #cell-harga="{ value }">',
    '    <span class="font-semibold text-slate-900 dark:text-white">{{ value }}</span>',
    '  </template>',
    '',
    '  <template #cell-action>',
    '    <div class="flex items-center justify-center gap-2">',
    '      <button class="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-600 rounded-md hover:bg-blue-200 transition-colors dark:bg-blue-500/15 dark:text-blue-300 dark:hover:bg-blue-500/25">',
    '        Edit',
    '      </button>',
    '      <button class="px-2 py-1 text-xs font-medium bg-red-100 text-red-600 rounded-md hover:bg-red-200 transition-colors dark:bg-red-500/15 dark:text-red-300 dark:hover:bg-red-500/25">',
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
        <span class="h-6 w-6 inline-flex items-center justify-center rounded-full bg-slate-100 text-xs text-slate-700 font-semibold dark:bg-white/10 dark:text-gray-200">
          {{ value }}
        </span>
      </template>

      <template #cell-harga="{ value }">
        <span class="text-slate-900 font-semibold dark:text-white">{{ value }}</span>
      </template>

      <template #cell-action>
        <div class="flex items-center justify-center gap-2">
          <button class="rounded-md bg-blue-100 px-2 py-1 text-xs text-blue-600 font-medium transition-colors dark:bg-blue-500/15 hover:bg-blue-200 dark:text-blue-300 dark:hover:bg-blue-500/25">
            Edit
          </button>
          <button class="rounded-md bg-red-100 px-2 py-1 text-xs text-red-600 font-medium transition-colors dark:bg-red-500/15 hover:bg-red-200 dark:text-red-300 dark:hover:bg-red-500/25">
            Hapus
          </button>
        </div>
      </template>
    </app-table>
  </app-doc-section>
</template>
