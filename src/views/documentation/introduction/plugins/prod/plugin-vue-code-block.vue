<script setup lang="ts">
  import ComponentPlugin from '../component-plugin.vue'

  const packages = [
    '@wdns/vue-code-block',
  ]
</script>

<template>
  <component-plugin
    title="Vue Code Block"
    icon="lucide:code"
    description="Syntax highlighting untuk code blocks"
    :packages="packages" />
</template>
