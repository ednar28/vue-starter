<script setup lang="ts">
  import { AppBarChart } from '@/components/chart/bar'

  const series = [
    { name: 'Tim A', data: [44, 55, 41, 67, 22] },
    { name: 'Tim B', data: [53, 32, 33, 52, 13] },
  ]
  const categories = ['Apr', 'Mei', 'Jun', 'Jul', 'Agu']
  const colors = ['#F97316', '#0ea5e9']

  const code = [
    '<!-- Horizontal bar -->',
    '<app-bar-chart',
    '  :series="series"',
    '  :categories="categories"',
    '  orientation="horizontal"',
    '/>',
    '',
    '<!-- Stacked bar -->',
    '<app-bar-chart',
    '  :series="series"',
    '  :categories="categories"',
    '  bar-type="stacked"',
    '/>',
  ].join('\n')
</script>

<template>
  <app-doc-section
    title="Advanced Options"
    description="Kontrol lebih detail: <code>orientation</code> (horizontal/vertical), <code>barType</code> (bar/stacked), <code>borderRadius</code>, <code>barWidth</code>, <code>toolbar</code>."
    :code="code">
    <div class="grid gap-8 lg:grid-cols-2">
      <div>
        <p class="mb-2 text-sm text-gray-500 font-semibold dark:text-gray-400">
          Horizontal bar
        </p>
        <app-bar-chart
          :series="series"
          :categories="categories"
          :colors="colors"
          orientation="horizontal"
          :height="280" />
      </div>
      <div>
        <p class="mb-2 text-sm text-gray-500 font-semibold dark:text-gray-400">
          Stacked bar
        </p>
        <app-bar-chart
          :series="series"
          :categories="categories"
          :colors="colors"
          bar-type="stacked"
          :height="280" />
      </div>
    </div>
  </app-doc-section>
</template>
