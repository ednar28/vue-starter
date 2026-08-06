<script setup lang="ts">
  const columns = [
    { key: 'no', label: 'No', class: 'w-px text-right whitespace-nowrap' },
    { key: 'produk', label: 'Produk', class: 'text-left' },
    { key: 'harga', label: 'Harga', class: 'text-right w-px whitespace-nowrap' },
  ]

  const rows = [
    { no: 1, produk: 'Laptop Dell XPS 13', harga: 'Rp 15.999.000' },
    { no: 2, produk: 'Mouse Logitech MX Master', harga: 'Rp 1.499.000' },
    { no: 3, produk: 'Keyboard Mechanical RGB', harga: 'Rp 2.299.000' },
  ]

  const code = [
    '<app-table',
    '  :columns="[',
    "    { key: 'no', label: 'No', class: 'w-px text-right whitespace-nowrap' },",
    "    { key: 'produk', label: 'Produk', class: 'text-left' },",
    "    { key: 'harga', label: 'Harga', class: 'text-right w-px whitespace-nowrap' },",
    '  ]"',
    '  :rows="[',
    "    { no: 1, produk: 'Laptop Dell XPS 13', harga: 'Rp 15.999.000' },",
    "    { no: 2, produk: 'Mouse Logitech MX Master', harga: 'Rp 1.499.000' },",
    "    { no: 3, produk: 'Keyboard Mechanical RGB', harga: 'Rp 2.299.000' },",
    '  ]" />',
  ].join('\n')
</script>

<template>
  <app-doc-section
    title="Default Table"
    description="Tabel produk dengan kolom nomor, nama produk, dan harga."
    :code="code">
    <app-table
      :columns="columns"
      :rows="rows" />
  </app-doc-section>
</template>
