<script setup lang="ts">
  import SectionGrid, { type SectionGridItem } from './section-grid.vue'

  const items: SectionGridItem[] = [
    {
      icon: 'lucide:braces',
      title: 'Formatters',
      description: 'Utility format tanggal, angka, byte, phone, dan string case.',
      path: { name: 'documentation-fmt' },
    },
    {
      icon: 'lucide:case-sensitive',
      title: 'String Utilities',
      description: 'Fungsi manipulasi string: title, upperFirst, maskName.',
      path: { name: 'documentation-string' },
    },
    {
      icon: 'lucide:image-off',
      title: 'Image Utilities',
      description: 'Avatar generator, base64 conversion, file reader.',
      path: { name: 'documentation-image' },
    },
  ]
</script>

<template>
  <section-grid
    category="Functions"
    :items="items" />
</template>
