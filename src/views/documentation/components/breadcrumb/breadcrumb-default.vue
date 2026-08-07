<script setup lang="ts">
  const code = [
    `<app-breadcumb :items="[
    { label: 'Home', to: '/' },
    { label: 'Order', to: '/order' },
    { label: 'INV-20250201-0001' },
  ]" />`,
  ].join('\n')
</script>

<template>
  <app-doc-section
    title="Default"
    description="Breadcrumb sederhana dengan 3 level hierarki."
    :code="code">
    <app-breadcumb
      :items="[
        { label: 'Home', to: '/' },
        { label: 'Order', to: '/order' },
        { label: 'INV-20250201-0001' },
      ]" />
  </app-doc-section>
</template>
