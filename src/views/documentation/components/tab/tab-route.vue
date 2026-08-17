<script setup lang="ts">
  const code = [
    '<app-tab :tabs="tabs" as-route/>',
  ].join('\n')

  const tabs = [
    { value: '/documentation/tab/beranda', label: 'Beranda' },
    { value: '/documentation/tab/profil', label: 'Profil' },
    { value: '/documentation/tab/pengaturan', label: 'Pengaturan' }
  ]
</script>

<template>
  <app-doc-section
    title="Tab Sebagai Router Link"
    description="Gunakan prop as-route untuk menjadikan tab sebagai navigasi antar halaman."
    :code="code">
    <app-tab :tabs="tabs" as-route/>
  </app-doc-section>
</template>
