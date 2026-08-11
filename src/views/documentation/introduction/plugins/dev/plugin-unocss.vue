<script setup lang="ts">
  import ComponentPlugin from '../component-plugin.vue'

  const packages = [
    'unocss',
    'postcss-nested',
    'autoprefixer',
  ]
</script>

<template>
  <component-plugin
    title="UnoCSS"
    icon="lucide:grid-2x2"
    description="Atomic CSS, custom utility, + PostCSS tools"
    :packages="packages" />
</template>
