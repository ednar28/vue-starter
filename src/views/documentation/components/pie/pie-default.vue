<script setup lang="ts">
  import { AppPieChart } from '@/components/chart/pie'

  const series = [44, 55, 13, 43, 22]
  const labels = ['Tim A', 'Tim B', 'Tim C', 'Tim D', 'Tim E']

  const code = [
    '<script setup lang="ts">',
    "  import { AppPieChart } from '@/components/chart/pie'",
    '',
    '  const series = [44, 55, 13, 43, 22]',
    "  const labels = ['Tim A', 'Tim B', 'Tim C', 'Tim D', 'Tim E']",
    '<\/script>',
    '',
    '<template>',
    '  <app-pie-chart',
    '    :series="series"',
    '    :labels="labels"',
    '    type="donut"',
    '  />',
    '</template>',
  ].join('\n')
</script>

<template>
  <app-doc-section
    title="Default Usage — Donut"
    description="Penggunaan paling sederhana: cukup isi <code>series</code> (array angka) dan <code>labels</code> (array string). Default tipe <code>donut</code> dengan total di tengah, legend di bawah, dan warna palette otomatis."
    :code="code">
    <div class="max-w-md">
      <app-pie-chart
        :series="series"
        :labels="labels"
        type="donut" />
    </div>
  </app-doc-section>
</template>
