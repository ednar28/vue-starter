<script setup lang="ts">
  import SidebarDefault from './sidebar-default.vue'
  import SidebarHeaderDemo from './sidebar-header-demo.vue'
  import SidebarProps from './sidebar-props.vue'
  import SidebarSlotsDemo from './sidebar-slots-demo.vue'
</script>

<template>
  <div>
    <app-doc-page-header
      title="Sidebar"
      badge="Components"
      description="Komponen layout sidebar generik: header brand, item navigasi, dan wrapper aside dengan slot footer." />

    <sidebar-default />
    <sidebar-header-demo />
    <sidebar-slots-demo />
    <sidebar-props />
  </div>
</template>
