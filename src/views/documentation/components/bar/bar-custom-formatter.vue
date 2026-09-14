<script setup lang="ts">
  import { AppBarChart } from '@/components/chart/bar'

  const series = [{ name: 'Revenue', data: [35000000, 42000000, 28000000, 51000000, 39000000] }]
  const categories = ['Produk A', 'Produk B', 'Produk C', 'Produk D', 'Produk E']

  const code = [
    '<script setup lang="ts">',
    "  import { AppBarChart } from '@/components/chart/bar'",
    '',
    '  const series = [{ name: \'Revenue\', data: [35000000, 42000000, 28000000, 51000000, 39000000] }]',
    "  const categories = ['Produk A', 'Produk B', 'Produk C', 'Produk D', 'Produk E']",
    '',
    "  const formatRupiah = (val: number) => 'Rp ' + val.toLocaleString('id-ID')",
    '<\/script>',
    '',
    '<template>',
    '  <app-bar-chart',
    '    :series="series"',
    '    :categories="categories"',
    '    :tooltip-formatter="formatRupiah"',
    '    :axis-formatter="formatRupiah"',
    '  />',
    '</template>',
  ].join('\n')

  const formatRupiah = (val: number): string => 'Rp ' + val.toLocaleString('id-ID')
</script>

<template>
  <app-doc-section
    title="Custom Formatter — Rupiah"
    description="Kustomisasi format angka dengan <code>tooltipFormatter</code> dan <code>axisFormatter</code>. Cocok untuk data keuangan."
    :code="code">
    <div class="max-w-2xl">
      <app-bar-chart
        :series="series"
        :categories="categories"
        :tooltip-formatter="formatRupiah"
        :axis-formatter="formatRupiah" />
    </div>
  </app-doc-section>
</template>
