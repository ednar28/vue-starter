<script setup lang="ts">
  const code = [
    '<script setup lang="ts">',
    '  const tabs = [',
    '    { value: "beranda", label: "Beranda", icon: "lucide:home" },',
    '    { value: "profil", label: "Profil", icon: "lucide:user" },',
    '    { value: "pengaturan", label: "Pengaturan", icon: "lucide:settings" }',
    '  ]',
    '<\/script>',
  ].join('\n')

  const tabs = [
    { value: 'beranda', label: 'Beranda', icon: 'lucide:home' },
    { value: 'profil', label: 'Profil', icon: 'lucide:user' },
    { value: 'pengaturan', label: 'Pengaturan', icon: 'lucide:settings' }
  ]
</script>

<template>
  <app-doc-section
    title="Dengan Icon"
    description="Gunakan key icon pada tiap tab item untuk menambahkan icon sebelum label tab."
    :code="code">
    <app-tab :tabs="tabs"/>
  </app-doc-section>
</template>
