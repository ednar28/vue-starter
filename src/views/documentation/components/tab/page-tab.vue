<script setup lang="ts">
  import TabDefault from './tab-default.vue'
  import TabIcon from './tab-icon.vue'
  import TabProps from './tab-props.vue'
</script>

<template>
  <div>
    <app-doc-page-header
      title="Tab"
      badge="Components"
      description="Komponen tab untuk navigasi antar konten dengan indikator active state, opsi icon, dan router-link." />

    <tab-default />
    <tab-icon />
    <tab-props />
  </div>
</template>
