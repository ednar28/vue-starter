<script setup lang="ts">
  import ComponentPlugin from '../component-plugin.vue'

  const packages = [
    'npm-run-all2',
  ]
</script>

<template>
  <component-plugin
    title="NPM Run All"
    icon="lucide:play"
    description="Parallel & sequential script runner"
    :packages="packages" />
</template>
