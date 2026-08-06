<script setup lang="ts">
  import ComponentPlugin from '../component-plugin.vue'

  const packages = [
    'typescript',
    'vue-tsc',
    '@tsconfig/node20',
    '@types/node',
    '@types/nprogress',
    '@types/prismjs',
    '@vue/tsconfig',
  ]
</script>

<template>
  <component-plugin
    title="TypeScript"
    icon="lucide:brackets"
    description="Type checking & type definitions"
    :packages="packages" />
</template>
