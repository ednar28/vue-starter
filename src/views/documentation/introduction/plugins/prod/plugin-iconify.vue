<script setup lang="ts">
  import ComponentPlugin from '../component-plugin.vue'

  const packages = [
    '@iconify/vue',
  ]
</script>

<template>
  <component-plugin
    title="Iconify"
    icon="lucide:image"
    description="Icon library dengan 100k+ icons"
    :packages="packages" />
</template>
