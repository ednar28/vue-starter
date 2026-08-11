<script setup lang="ts">
  import ComponentPlugin from '../component-plugin.vue'

  const packages = [
    'axios',
  ]
</script>

<template>
  <component-plugin
    title="Axios"
    icon="lucide:globe"
    description="HTTP client untuk API requests"
    :packages="packages" />
</template>
