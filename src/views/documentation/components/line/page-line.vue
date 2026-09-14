<script setup lang="ts">
  import LineAdvanced from './line-advanced.vue'
  import LineCustomColors from './line-custom-colors.vue'
  import LineCustomFormatter from './line-custom-formatter.vue'
  import LineDefault from './line-default.vue'
  import LineProps from './line-props.vue'
</script>

<template>
  <div>
    <app-doc-page-header
      title="Line Chart"
      badge="Components"
      description="Komponen line chart berbasis ApexCharts. Mudah dipakai: cukup isi <code>series</code> dan <code>categories</code>. Mendukung multi-series, custom colors, formatter (Rupiah/dll), stroke curve, markers, toolbar, dan override options. <strong>Tidak terdaftar global</strong> — import manual saat dipakai." />

    <line-default />
    <line-custom-colors />
    <line-custom-formatter />
    <line-advanced />
    <line-props />
  </div>
</template>
