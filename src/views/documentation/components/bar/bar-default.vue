<script setup lang="ts">
  import { AppBarChart } from '@/components/chart/bar'

  const series = [{ name: 'Penjualan', data: [44, 55, 13, 43, 22] }]
  const categories = ['Produk A', 'Produk B', 'Produk C', 'Produk D', 'Produk E']

  const code = [
    '<script setup lang="ts">',
    "  import { AppBarChart } from '@/components/chart/bar'",
    '',
    '  const series = [{ name: \'Penjualan\', data: [44, 55, 13, 43, 22] }]',
    "  const categories = ['Produk A', 'Produk B', 'Produk C', 'Produk D', 'Produk E']",
    '<\/script>',
    '',
    '<template>',
    '  <app-bar-chart',
    '    :series="series"',
    '    :categories="categories"',
    '  />',
    '</template>',
  ].join('\n')
</script>

<template>
  <app-doc-section
    title="Default Usage — Bar Chart"
    description="Penggunaan paling sederhana: cukup isi <code>series</code> (array object dengan <code>name</code> dan <code>data</code>) dan <code>categories</code> (label sumbu X). Default vertical bar dengan legend di bawah."
    :code="code">
    <div class="max-w-2xl">
      <app-bar-chart
        :series="series"
        :categories="categories" />
    </div>
  </app-doc-section>
</template>
