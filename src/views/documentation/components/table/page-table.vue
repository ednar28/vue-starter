<script setup lang="ts">
  import TableDefault from './table-default.vue'
  import TableLoadingAndEmpty from './table-loading-and-empty.vue'
  import TableProps from './table-props.vue'
  import TableSlots from './table-slots.vue'
</script>

<template>
  <div>
    <app-doc-page-header
      title="Table"
      badge="Components"
      description="Komponen table untuk menampilkan data dalam format baris dan kolom dengan support loading, empty state, dan custom cell rendering via slots." />

    <table-default />
    <table-loading-and-empty />
    <table-slots />
    <table-props />
  </div>
</template>
