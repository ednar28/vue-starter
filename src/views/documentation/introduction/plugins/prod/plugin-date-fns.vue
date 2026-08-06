<script setup lang="ts">
  import ComponentPlugin from '../component-plugin.vue'

  const packages = [
    'date-fns',
  ]
</script>

<template>
  <component-plugin
    title="Date-fns"
    icon="lucide:calendar"
    description="Utility untuk manipulasi & format tanggal"
    :packages="packages" />
</template>
