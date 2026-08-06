<script setup lang="ts">
  import ComponentPlugin from '../component-plugin.vue'

  const packages = [
    'clipboard-copy',
  ]
</script>

<template>
  <component-plugin
    title="Clipboard Copy"
    icon="lucide:clipboard"
    description="Copy text ke clipboard"
    :packages="packages" />
</template>
