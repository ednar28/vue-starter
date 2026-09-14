<script setup lang="ts">
  import { AppPieChart } from '@/components/chart/pie'

  const series = [30, 25, 20, 15, 10]
  const labels = ['React', 'Vue', 'Angular', 'Svelte', 'Solid']

  const code = [
    '<!-- Donut dengan ukuran hole lebih kecil + legend kiri -->',
    '<app-pie-chart',
    '  :series="[30, 25, 20, 15, 10]"',
    '  :labels="[\'React\', \'Vue\', \'Angular\', \'Svelte\', \'Solid\']"',
    '  type="donut"',
    '  :donut-size="\'50%\'"',
    '  legend-position="left"',
    '  :height="360"',
    '  :stroke-width="3"',
    '/>',
    '',
    '<!-- Tanpa legend, tanpa total -->',
    '<app-pie-chart',
    '  :series="[30, 25, 20, 15, 10]"',
    '  :labels="[\'React\', \'Vue\', \'Angular\', \'Svelte\', \'Solid\']"',
    '  type="donut"',
    '  :legend="false"',
    '  :total="false"',
    '/>',
  ].join('\n')
</script>

<template>
  <app-doc-section
    title="Advanced Options"
    description="Kontrol lebih detail: <code>donutSize</code>, <code>legendPosition</code>, <code>legendFontSize</code>, <code>strokeWidth</code>, <code>height</code>, dan <code>animation</code>."
    :code="code">
    <div class="grid gap-8 lg:grid-cols-2">
      <div>
        <p class="mb-2 text-sm text-gray-500 font-semibold dark:text-gray-400">
          Legend kiri + hole kecil
        </p>
        <app-pie-chart
          :series="series"
          :labels="labels"
          type="donut"
          donut-size="50%"
          legend-position="left"
          :height="360"
          :stroke-width="3" />
      </div>
      <div>
        <p class="mb-2 text-sm text-gray-500 font-semibold dark:text-gray-400">
          Tanpa legend + tanpa total
        </p>
        <app-pie-chart
          :series="series"
          :labels="labels"
          type="donut"
          :legend="false"
          :total="false"
          :height="360" />
      </div>
    </div>
  </app-doc-section>
</template>
