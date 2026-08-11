<script setup lang="ts">
  import BreadcrumbDefault from './breadcrumb-default.vue'
  import BreadcrumbProps from './breadcrumb-props.vue'
  import BreadcrumbWithIcon from './breadcrumb-with-icon.vue'
</script>

<template>
  <div>
    <app-doc-page-header
      title="Breadcrumb"
      badge="Components"
      description="Komponen breadcrumb untuk navigasi hierarkis dengan dukungan icon dan router-link." />

    <breadcrumb-default />
    <breadcrumb-with-icon />
    <breadcrumb-props />
  </div>
</template>
