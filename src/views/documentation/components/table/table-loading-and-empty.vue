<script setup lang="ts">
  const columns = [
    { key: 'no', label: 'No', class: 'w-12' },
    { key: 'produk', label: 'Produk' },
    { key: 'harga', label: 'Harga', class: 'text-right' },
  ]

  const rows = [
    { no: 1, produk: 'Laptop Dell XPS 13', harga: 'Rp 15.999.000' },
    { no: 2, produk: 'Mouse Logitech MX Master', harga: 'Rp 1.499.000' },
  ]

  const loadingCode = `<app-table
  :columns="columns"
  :rows="rows"
  :loading="true" />`

  const emptyCode = `<app-table
  :columns="columns"
  :rows="[]"
  emptyMessage="Tidak ada produk yang ditemukan" />`
</script>

<template>
  <app-doc-section
    title="Loading State"
    description="Tampilkan loading spinner saat sedang memuat data."
    :code="loadingCode">
    <app-table
      :columns="columns"
      :rows="rows"
      :loading="true" />
  </app-doc-section>

  <app-doc-section
    title="Empty State"
    description="Tampilkan pesan custom saat tidak ada data."
    :code="emptyCode">
    <app-table
      :columns="columns"
      :rows="[]"
      empty-message="Tidak ada produk yang ditemukan" />
  </app-doc-section>
</template>
