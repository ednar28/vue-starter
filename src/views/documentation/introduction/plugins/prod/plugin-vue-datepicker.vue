<script setup lang="ts">
  import ComponentPlugin from '../component-plugin.vue'

  const packages = [
    '@vuepic/vue-datepicker',
  ]
</script>

<template>
  <component-plugin
    title="Vue Datepicker"
    icon="lucide:calendar-days"
    description="Date picker component untuk Vue"
    :packages="packages" />
</template>
