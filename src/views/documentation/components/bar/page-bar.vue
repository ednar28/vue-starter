<script setup lang="ts">
  import BarAdvanced from './bar-advanced.vue'
  import BarCustomColors from './bar-custom-colors.vue'
  import BarCustomFormatter from './bar-custom-formatter.vue'
  import BarDefault from './bar-default.vue'
  import BarProps from './bar-props.vue'
</script>

<template>
  <div>
    <app-doc-page-header
      title="Bar Chart"
      badge="Components"
      description="Komponen bar chart berbasis ApexCharts. Mudah dipakai: cukup isi <code>series</code> dan <code>categories</code>. Mendukung multi-series, stacked, horizontal/vertical, custom colors, formatter (Rupiah/dll), dan override options. <strong>Tidak terdaftar global</strong> — import manual saat dipakai." />

    <bar-default />
    <bar-custom-colors />
    <bar-custom-formatter />
    <bar-advanced />
    <bar-props />
  </div>
</template>
