<script setup lang="ts">
  import { AppPieChart } from '@/components/chart/pie'

  const series = [350, 220, 180, 90]
  const labels = ['Product A', 'Product B', 'Product C', 'Product D']
  const colors = ['#8b5cf6', '#ec4899', '#F97316', '#64748b']

  const code = [
    '<script setup lang="ts">',
    "  import { AppPieChart } from '@/components/chart/pie'",
    '',
    '  const series = [350, 220, 180, 90]',
    "  const labels = ['Product A', 'Product B', 'Product C', 'Product D']",
    '',
    "  const formatRupiah = (val: number) => 'Rp ' + val.toLocaleString('id-ID')",
    '<\/script>',
    '',
    '<template>',
    '  <app-pie-chart',
    '    :series="series"',
    '    :labels="labels"',
    '    :colors="colors"',
    '    type="donut"',
    '    total-label="Penjualan"',
    '    :total-formatter="formatRupiah"',
    '    :tooltip-formatter="formatRupiah"',
    '    :data-label-formatter="(v) => v + \' unit\'"',
    '  />',
    '</template>',
  ].join('\n')

  const formatRupiah = (val: number): string => 'Rp ' + val.toLocaleString('id-ID')
</script>

<template>
  <app-doc-section
    title="Custom Formatter — Rupiah"
    description="Kustomisasi format angka dengan <code>totalFormatter</code>, <code>tooltipFormatter</code>, dan <code>dataLabelFormatter</code>. Cocok untuk data penjualan / keuangan."
    :code="code">
    <div class="max-w-md">
      <app-pie-chart
        :series="series"
        :labels="labels"
        :colors="colors"
        type="donut"
        total-label="Penjualan"
        :total-formatter="formatRupiah"
        :tooltip-formatter="formatRupiah"
        :data-label-formatter="(v: number) => v + ' unit'" />
    </div>
  </app-doc-section>
</template>
