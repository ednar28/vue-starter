<script setup lang="ts">
  import ComponentPlugin from '../component-plugin.vue'

  const packages = [
    'dompurify',
  ]
</script>

<template>
  <component-plugin
    title="DOMPurify"
    icon="lucide:shield-check"
    description="HTML sanitizer untuk keamanan konten"
    :packages="packages" />
</template>
