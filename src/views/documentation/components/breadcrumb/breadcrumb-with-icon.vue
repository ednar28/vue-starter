<script setup lang="ts">
  const code = [
    `<app-breadcumb :items="[
    { label: 'Home', to: '/', icon: 'mdi:home' },
    { label: 'Order', to: '/order', icon: 'mdi:cart' },
    { label: 'INV-20250201-0001' },
  ]" />`,
  ].join('\n')
</script>

<template>
  <app-doc-section
    title="Breadcrumb dengan Icon"
    description="Breadcrumb item pertama dapat ditambahkan icon. Kustomisasi icon dengan menambah property icon di items."
    :code="code">
    <app-breadcumb
      :items="[
        { label: 'Home', to: '/', icon: 'mdi:home' },
        { label: 'Order', to: '/order', icon: 'mdi:cart' },
        { label: 'INV-20250201-0001' },
      ]" />
  </app-doc-section>
</template>
