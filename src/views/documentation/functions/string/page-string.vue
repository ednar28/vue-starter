<script setup lang="ts">
  import StringJsSearch from './string-js-search.vue'
  import StringMaskName from './string-mask-name.vue'
  import StringTitle from './string-title.vue'
  import StringUpperFirst from './string-upper-first.vue'
</script>

<template>
  <div>
    <app-doc-page-header
      title="String Utilities"
      badge="Functions"
      description="Utility functions untuk manipulasi string: title case sederhana, uppercase karakter pertama, dan masking nama." />

    <string-title />
    <string-upper-first />
    <string-mask-name />
    <string-js-search />
  </div>
</template>
