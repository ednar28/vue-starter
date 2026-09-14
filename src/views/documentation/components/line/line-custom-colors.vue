<script setup lang="ts">
  import { AppLineChart } from '@/components/chart/line'

  const series = [
    { name: 'Visitor', data: [30, 40, 35, 50, 49, 60, 70] },
    { name: 'Registrasi', data: [10, 15, 20, 25, 30, 35, 40] },
    { name: 'Transaksi', data: [5, 8, 12, 15, 18, 22, 28] },
  ]
  const categories = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul']
  const colors = ['#0ea5e9', '#10b981', '#F97316']

  const code = [
    '<script setup lang="ts">',
    "  import { AppLineChart } from '@/components/chart/line'",
    '',
    '  const series = [',
    "    { name: 'Visitor', data: [30, 40, 35, 50, 49, 60, 70] },",
    "    { name: 'Registrasi', data: [10, 15, 20, 25, 30, 35, 40] },",
    "    { name: 'Transaksi', data: [5, 8, 12, 15, 18, 22, 28] },",
    '  ]',
    "  const categories = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul']",
    "  const colors = ['#0ea5e9', '#10b981', '#F97316']",
    '<\/script>',
    '',
    '<template>',
    '  <app-line-chart',
    '    :series="series"',
    '    :categories="categories"',
    '    :colors="colors"',
    '    :data-labels="true"',
    '  />',
    '</template>',
  ].join('\n')
</script>

<template>
  <app-doc-section
    title="Multi-Series + Custom Colors"
    description="Multiple series dengan custom palette. Aktifkan <code>dataLabels</code> untuk menampilkan angka di setiap point."
    :code="code">
    <div class="max-w-2xl">
      <app-line-chart
        :series="series"
        :categories="categories"
        :colors="colors"
        :data-labels="true" />
    </div>
  </app-doc-section>
</template>
