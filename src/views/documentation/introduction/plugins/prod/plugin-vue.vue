<script setup lang="ts">
  import ComponentPlugin from '../component-plugin.vue'

  const packages = [
    'vue',
    'vue-router',
    'pinia',
  ]
</script>

<template>
  <component-plugin
    title="Vue"
    icon="lucide:component"
    description="Framework, routing, & state management"
    :packages="packages" />
</template>
