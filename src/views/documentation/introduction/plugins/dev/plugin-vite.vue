<script setup lang="ts">
  import ComponentPlugin from '../component-plugin.vue'

  const packages = [
    'vite',
    '@vitejs/plugin-vue',
    'vite-plugin-pwa',
  ]
</script>

<template>
  <component-plugin
    title="Vite"
    icon="lucide:zap"
    description="Build tool & dev server dengan HMR"
    :packages="packages" />
</template>
