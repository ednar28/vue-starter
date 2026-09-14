<script setup lang="ts">
  import { AppLineChart } from '@/components/chart/line'

  const series = [
    { name: 'Target', data: [50, 55, 60, 65, 70, 75, 80] },
    { name: 'Actual', data: [45, 52, 48, 61, 66, 72, 78] },
  ]
  const categories = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7']
  const colors = ['#64748b', '#F97316']

  const code = [
    '<!-- Straight line + markers hidden + legend top -->',
    '<app-line-chart',
    "  :series=\"[{ name: 'Target', data: [50, 55, 60] }, { name: 'Actual', data: [45, 52, 48] }]\"",
    "  :categories=\"['W1', 'W2', 'W3']\"",
    '  stroke-curve="straight"',
    '  :markers="false"',
    '  legend-position="top"',
    '/>',
    '',
    '<!-- Toolbar enabled (zoom, download) -->',
    '<app-line-chart',
    "  :series=\"[{ name: 'Penjualan', data: [10, 41, 35] }]\"",
    "  :categories=\"['Jan', 'Feb', 'Mar']\"",
    '  :toolbar="true"',
    '/>',
  ].join('\n')
</script>

<template>
  <app-doc-section
    title="Advanced Options"
    description="Kontrol lebih detail: <code>strokeCurve</code>, <code>markers</code>, <code>markerSize</code>, <code>legendPosition</code>, <code>toolbar</code>, <code>grid</code>."
    :code="code">
    <div class="grid gap-8 lg:grid-cols-2">
      <div>
        <p class="mb-2 text-sm text-gray-500 font-semibold dark:text-gray-400">
          Straight + tanpa markers + legend atas
        </p>
        <app-line-chart
          :series="series"
          :categories="categories"
          :colors="colors"
          stroke-curve="straight"
          :markers="false"
          legend-position="top"
          :height="280" />
      </div>
      <div>
        <p class="mb-2 text-sm text-gray-500 font-semibold dark:text-gray-400">
          Toolbar aktif (zoom, download)
        </p>
        <app-line-chart
          :series="series"
          :categories="categories"
          :colors="colors"
          :toolbar="true"
          :height="280" />
      </div>
    </div>
  </app-doc-section>
</template>
