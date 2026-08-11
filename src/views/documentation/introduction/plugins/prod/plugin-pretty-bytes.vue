<script setup lang="ts">
  import ComponentPlugin from '../component-plugin.vue'

  const packages = [
    'pretty-bytes',
  ]
</script>

<template>
  <component-plugin
    title="Pretty Bytes"
    icon="lucide:hard-drive"
    description="Format bytes jadi human-readable"
    :packages="packages" />
</template>
