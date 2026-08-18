<script setup lang="ts">
  import TabDefault from './tab-default.vue'
  import TabIcon from './tab-icon.vue'
  import TabParam from './tab-param.vue'
  import TabProps from './tab-props.vue'
  import TabRoute from './tab-route.vue'
</script>

<template>
  <div>
    <app-doc-page-header
      title="Tab"
      badge="Components"
      description="Komponen tab untuk navigasi antar konten dengan indikator active state. Tab bisa juga digunakan sebagai router link dan juga url params" />

    <tab-default />
    <tab-icon />
    <tab-param />
    <tab-route />
    <tab-props />
  </div>
</template>
