<script setup lang="ts">
  import ComponentPlugin from '../component-plugin.vue'

  const packages = [
    'marked',
  ]
</script>

<template>
  <component-plugin
    title="Marked"
    icon="lucide:file-text"
    description="Markdown parser ke HTML"
    :packages="packages" />
</template>
