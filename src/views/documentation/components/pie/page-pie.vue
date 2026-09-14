<script setup lang="ts">
  import PieAdvanced from './pie-advanced.vue'
  import PieCustomColors from './pie-custom-colors.vue'
  import PieCustomFormatter from './pie-custom-formatter.vue'
  import PieDefault from './pie-default.vue'
  import PieProps from './pie-props.vue'
</script>

<template>
  <div>
    <app-doc-page-header
      title="Pie Chart"
      badge="Components"
      description="Komponen pie/donut chart berbasis ApexCharts. Mudah dipakai: cukup isi <code>series</code> dan <code>labels</code>. Mendukung custom colors, formatter (Rupiah/dll), legend position, donut size, dan override options. <strong>Tidak terdaftar global</strong> — import manual saat dipakai." />

    <pie-default />
    <pie-custom-colors />
    <pie-custom-formatter />
    <pie-advanced />
    <pie-props />
  </div>
</template>
