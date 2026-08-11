<script setup lang="ts">
  import ComponentPlugin from '../component-plugin.vue'

  const packages = [
    'v-money3',
  ]
</script>

<template>
  <component-plugin
    title="V-Money3"
    icon="lucide:banknote"
    description="Input masking untuk format mata uang"
    :packages="packages" />
</template>
