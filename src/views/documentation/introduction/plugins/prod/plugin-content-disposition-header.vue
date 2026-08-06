<script setup lang="ts">
  import ComponentPlugin from '../component-plugin.vue'

  const packages = [
    'content-disposition-header',
  ]
</script>

<template>
  <component-plugin
    title="Content Disposition"
    icon="lucide:file-down"
    description="Parse Content-Disposition header"
    :packages="packages" />
</template>
