<script setup lang="ts">
  import ComponentPlugin from '../component-plugin.vue'

  const packages = [
    'nprogress',
  ]
</script>

<template>
  <component-plugin
    title="NProgress"
    icon="lucide:loader"
    description="Slim progress bar untuk page loading"
    :packages="packages" />
</template>
