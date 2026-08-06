<script setup lang="ts">
  import ComponentPlugin from '../component-plugin.vue'

  const packages = [
    'change-case',
  ]
</script>

<template>
  <component-plugin
    title="Change Case"
    icon="lucide:case-sensitive"
    description="Konversi string case (camel, snake, dll)"
    :packages="packages" />
</template>
