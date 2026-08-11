<script setup lang="ts">
  import ButtonDefault from './button-default.vue'
  import ButtonIcon from './button-icon.vue'
  import ButtonLoadingAndDisabled from './button-loading-and-disabled.vue'
  import ButtonProps from './button-props.vue'
</script>

<template>
  <div>
    <app-doc-page-header
      title="Button"
      badge="Components"
      description="Komponen button dengan berbagai varian warna, state loading, dan disabled." />

    <button-default />
    <button-icon />
    <button-loading-and-disabled />
    <button-props />
  </div>
</template>
