<script setup lang="ts">
  import ComponentPlugin from '../component-plugin.vue'

  const packages = [
    '@vueuse/core',
    '@vueuse/integrations',
  ]
</script>

<template>
  <component-plugin
    title="VueUse"
    icon="lucide:flask-conical"
    description="Collection of Vue Composition Utilities"
    :packages="packages" />
</template>
