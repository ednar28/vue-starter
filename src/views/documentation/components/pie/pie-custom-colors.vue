<script setup lang="ts">
  import { AppPieChart } from '@/components/chart/pie'

  const series = [60, 35, 25]
  const labels = ['Chrome', 'Safari', 'Firefox']
  const colors = ['#10b981', '#0ea5e9', '#f59e0b']

  const code = [
    '<script setup lang="ts">',
    "  import { AppPieChart } from '@/components/chart/pie'",
    '',
    '  const series = [60, 35, 25]',
    "  const labels = ['Chrome', 'Safari', 'Firefox']",
    "  const colors = ['#10b981', '#0ea5e9', '#f59e0b']",
    '<\/script>',
    '',
    '<template>',
    '  <app-pie-chart',
    '    :series="series"',
    '    :labels="labels"',
    '    :colors="colors"',
    '    type="donut"',
    '    :total="true"',
    '  />',
    '</template>',
  ].join('\n')
</script>

<template>
  <app-doc-section
    title="Donut + Custom Colors"
    description="Atur <code>colors</code> sendiri untuk custom palette. Contoh dengan 3 warna untuk 3 slice."
    :code="code">
    <div class="max-w-md">
      <app-pie-chart
        :series="series"
        :labels="labels"
        :colors="colors"
        type="donut"
        :total="true" />
    </div>
  </app-doc-section>
</template>
