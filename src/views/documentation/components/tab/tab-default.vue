<script setup lang="ts">
  const code = [
    '<script setup lang="ts">',
    '  const tabs = [',
    '    { value: "beranda", label: "Beranda" },',
    '    { value: "profil", label: "Profil" },',
    '    { value: "pengaturan", label: "Pengaturan" }',
    '  ]',
    '<\/script>',
    '<template>',
    '  <app-tab :tabs="tabs"/>',
    '</template>',
  ].join('\n')

  const tabs = [
    { value: 'beranda', label: 'Beranda' },
    { value: 'profil', label: 'Profil' },
    { value: 'pengaturan', label: 'Pengaturan' },
  ]
</script>

<template>
  <app-doc-section
    title="Default"
    description="Gunakan app-tab sebagai container dan app-tab-item untuk setiap item tab. Atur active state secara manual."
    :code="code">
    <app-tab :tabs="tabs" />
  </app-doc-section>
</template>
