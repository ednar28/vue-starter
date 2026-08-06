<script setup lang="ts">
  import ComponentPlugin from '../component-plugin.vue'

  const packages = [
    'cropperjs',
  ]
</script>

<template>
  <component-plugin
    title="Cropper.js"
    icon="lucide:crop"
    description="Image cropping library"
    :packages="packages" />
</template>
