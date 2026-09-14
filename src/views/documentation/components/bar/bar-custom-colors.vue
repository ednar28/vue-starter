<script setup lang="ts">
  import { AppBarChart } from '@/components/chart/bar'

  const series = [
    { name: 'Q1', data: [100, 150, 120, 180, 90] },
    { name: 'Q2', data: [120, 160, 140, 200, 110] },
    { name: 'Q3', data: [140, 180, 160, 220, 130] },
  ]
  const categories = ['Region A', 'Region B', 'Region C', 'Region D', 'Region E']
  const colors = ['#0ea5e9', '#10b981', '#F97316']

  const code = [
    '<script setup lang="ts">',
    "  import { AppBarChart } from '@/components/chart/bar'",
    '',
    '  const series = [',
    "    { name: 'Q1', data: [100, 150, 120, 180, 90] },",
    "    { name: 'Q2', data: [120, 160, 140, 200, 110] },",
    "    { name: 'Q3', data: [140, 180, 160, 220, 130] },",
    '  ]',
    "  const categories = ['Region A', 'Region B', 'Region C', 'Region D', 'Region E']",
    "  const colors = ['#0ea5e9', '#10b981', '#F97316']",
    '<\/script>',
    '',
    '<template>',
    '  <app-bar-chart',
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
    title="Multi-Series Stacked + Custom Colors"
    description="Multiple series dengan custom palette. Gunakan <code>barType=&quot;stacked&quot;</code> untuk stacked bar."
    :code="code">
    <div class="max-w-2xl">
      <app-bar-chart
        :series="series"
        :categories="categories"
        :colors="colors"
        :data-labels="true" />
    </div>
  </app-doc-section>
</template>
