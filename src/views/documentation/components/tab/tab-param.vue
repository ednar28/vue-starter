<script setup lang="ts">
  const code = [
    '<app-tab :tabs="tabs" as-param param-name="tab"/>',
  ].join('\n')

  const tabs = [
    { value: 'beranda', label: 'Beranda' },
    { value: 'profil', label: 'Profil' },
    { value: 'pengaturan', label: 'Pengaturan' },
  ]
</script>

<template>
  <app-doc-section
    title="Dengan URL Parameter"
    description="Gunakan prop as-param dan param-name untuk mengatur tab berdasarkan parameter URL."
    :code="code">
    <app-tab
      :tabs="tabs"
      as-param
      param-name="tab" />
  </app-doc-section>
</template>
