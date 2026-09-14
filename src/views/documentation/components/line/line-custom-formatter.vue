<script setup lang="ts">
  import { AppLineChart } from '@/components/chart/line'

  const series = [
    { name: 'Pendapatan', data: [15000000, 22000000, 18500000, 31000000, 27500000, 39000000, 42000000] },
  ]
  const categories = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul']

  const code = [
    '<script setup lang="ts">',
    "  import { AppLineChart } from '@/components/chart/line'",
    '',
    '  const series = [',
    "    { name: 'Pendapatan', data: [15000000, 22000000, 18500000, 31000000, 27500000, 39000000, 42000000] },",
    '  ]',
    "  const categories = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul']",
    '',
    "  const formatRupiah = (val: number) => 'Rp ' + val.toLocaleString('id-ID')",
    '<\/script>',
    '',
    '<template>',
    '  <app-line-chart',
    '    :series="series"',
    '    :categories="categories"',
    '    :tooltip-formatter="formatRupiah"',
    '    :y-formatter="formatRupiah"',
    '  />',
    '</template>',
  ].join('\n')

  const formatRupiah = (val: number): string => 'Rp ' + val.toLocaleString('id-ID')
</script>

<template>
  <app-doc-section
    title="Custom Formatter — Rupiah"
    description="Kustomisasi format angka dengan <code>tooltipFormatter</code> dan <code>yFormatter</code>. Cocok untuk data keuangan."
    :code="code">
    <div class="max-w-2xl">
      <app-line-chart
        :series="series"
        :categories="categories"
        :tooltip-formatter="formatRupiah"
        :y-formatter="formatRupiah" />
    </div>
  </app-doc-section>
</template>
