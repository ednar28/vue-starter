<script setup lang="ts">
  import BadgeDefault from './badge-default.vue'
  import BadgeProps from './badge-props.vue'
</script>

<template>
  <div>
    <app-doc-page-header
      title="Badge"
      badge="Components"
      description="Komponen badge untuk menampilkan label dengan berbagai varian warna dan opsional icon." />

    <badge-default />
    <badge-props />
  </div>
</template>
