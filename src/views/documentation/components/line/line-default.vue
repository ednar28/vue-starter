<script setup lang="ts">
  import { AppLineChart } from '@/components/chart/line'

  const series = [{ name: 'Penjualan', data: [10, 41, 35, 51, 49, 62, 69] }]
  const categories = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min']

  const code = [
    '<script setup lang="ts">',
    "  import { AppLineChart } from '@/components/chart/line'",
    '',
    '  const series = [{ name: \'Penjualan\', data: [10, 41, 35, 51, 49, 62, 69] }]',
    "  const categories = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min']",
    '<\/script>',
    '',
    '<template>',
    '  <app-line-chart',
    '    :series="series"',
    '    :categories="categories"',
    '  />',
    '</template>',
  ].join('\n')
</script>

<template>
  <app-doc-section
    title="Default Usage — Line Chart"
    description="Penggunaan paling sederhana: cukup isi <code>series</code> (array object dengan <code>name</code> dan <code>data</code>) dan <code>categories</code> (label sumbu X). Default curve smooth dengan markers."
    :code="code">
    <div class="max-w-2xl">
      <app-line-chart
        :series="series"
        :categories="categories" />
    </div>
  </app-doc-section>
</template>
